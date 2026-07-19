#!/usr/bin/env node

import { readFileSync, readdirSync, statSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const buildRoot = resolveBuildRoot();
const expectedBaseUrl = "https://cweise.com";
const requiredMetaSelectors = [
  "description",
  "robots",
  "og:title",
  "og:description",
  "og:url",
  "og:image",
  "twitter:card",
  "twitter:title",
  "twitter:description",
  "twitter:image",
];
const htmlFiles = walkFiles(
  buildRoot,
  (filePath) =>
    filePath.endsWith(".html") &&
    !filePath.endsWith(path.join("dist", "browser", "404.html")) &&
    !filePath.endsWith(path.join("dist", "browser", "index.csr.html")) &&
    !filePath.endsWith(path.join("docs", "browser", "404.html")) &&
    !filePath.endsWith(path.join("docs", "browser", "index.csr.html")),
);
const requiredPublicFiles = ["llms.txt", "llms-full.txt", "robots.txt", "sitemap.xml"];
const violations = [];

for (const requiredFile of requiredPublicFiles) {
  const candidate = path.join(buildRoot, requiredFile);
  if (!statSync(candidate, { throwIfNoEntry: false })?.isFile()) {
    violations.push(`Missing required generated artifact: ${relativeToRepo(candidate)}`);
  }
}

for (const htmlFile of htmlFiles) {
  verifyHtmlDocument(htmlFile);
}

verifySitemap();

if (violations.length) {
  console.error(`Site compliance verification failed with ${violations.length} issue(s).`);
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exitCode = 1;
} else {
  console.log(`Site compliance verification passed for ${htmlFiles.length} HTML file(s) in ${relativeToRepo(buildRoot)}.`);
}

function resolveBuildRoot() {
  const distBrowser = path.join(repoRoot, "dist", "browser");
  const docsBrowser = path.join(repoRoot, "docs", "browser");

  if (statSync(distBrowser, { throwIfNoEntry: false })?.isDirectory()) {
    return distBrowser;
  }

  if (statSync(docsBrowser, { throwIfNoEntry: false })?.isDirectory()) {
    return docsBrowser;
  }

  throw new Error("No built browser output found. Run `npm run build` before `npm run site:verify`.");
}

function walkFiles(root, include) {
  const files = [];

  for (const entry of readdirSync(root, { withFileTypes: true })) {
    const resolved = path.join(root, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkFiles(resolved, include));
      continue;
    }

    if (entry.isFile() && include(resolved)) {
      files.push(resolved);
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

function verifyHtmlDocument(filePath) {
  const html = readFileSync(filePath, "utf8");

  for (const selector of requiredMetaSelectors) {
    const value = selector.startsWith("og:")
      ? readMetaContent(html, "property", selector)
      : readMetaContent(html, "name", selector);

    if (!value) {
      violations.push(`${relativeToRepo(filePath)} is missing meta tag ${selector}.`);
    }
  }

  const canonicalUrl = readCanonicalHref(html);
  if (!canonicalUrl) {
    violations.push(`${relativeToRepo(filePath)} is missing a canonical link.`);
  } else if (!canonicalUrl.startsWith(`${expectedBaseUrl}/`)) {
    violations.push(`${relativeToRepo(filePath)} has non-canonical URL ${canonicalUrl}.`);
  }

  const ogUrl = readMetaContent(html, "property", "og:url");
  if (canonicalUrl && ogUrl && canonicalUrl !== ogUrl) {
    violations.push(`${relativeToRepo(filePath)} has mismatched canonical and og:url values.`);
  }

  const assetUrls = collectAssetUrls(html);
  for (const assetUrl of assetUrls) {
    verifyAssetReference(filePath, assetUrl);
  }

  if (!html.includes('type="application/ld+json"')) {
    violations.push(`${relativeToRepo(filePath)} is missing structured data markup.`);
  }
}

function verifySitemap() {
  const sitemapPath = path.join(buildRoot, "sitemap.xml");
  const stats = statSync(sitemapPath, { throwIfNoEntry: false });

  if (!stats?.isFile()) {
    return;
  }

  const sitemap = readFileSync(sitemapPath, "utf8");
  const imageUrls = [...sitemap.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map((match) => match[1]);

  for (const imageUrl of imageUrls) {
    verifyAssetReference(sitemapPath, imageUrl);
  }
}

function readMetaContent(html, attribute, selector) {
  const patterns = [
    new RegExp(`<meta[^>]*${attribute}="${escapeRegExp(selector)}"[^>]*content="([^"]+)"`, "i"),
    new RegExp(`<meta[^>]*content="([^"]+)"[^>]*${attribute}="${escapeRegExp(selector)}"`, "i"),
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return "";
}

function readCanonicalHref(html) {
  const patterns = [
    /<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i,
    /<link[^>]*href="([^"]+)"[^>]*rel="canonical"/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      return match[1];
    }
  }

  return "";
}

function collectAssetUrls(html) {
  const matches = [...html.matchAll(/(?:src|href|content)="([^"]+)"/gi)];
  const values = new Set();

  for (const [, value] of matches) {
    if (!value) {
      continue;
    }

    if (
      value.startsWith("assets/") ||
      value.startsWith("/assets/") ||
      value.startsWith(`${expectedBaseUrl}/assets/`)
    ) {
      values.add(value);
    }
  }

  return [...values].sort((left, right) => left.localeCompare(right));
}

function verifyAssetReference(sourcePath, assetUrl) {
  const normalizedAssetPath = normalizeAssetPath(assetUrl);

  if (!normalizedAssetPath) {
    return;
  }

  if (/^assets\/images\/.+\.(png|jpe?g)$/i.test(normalizedAssetPath)) {
    violations.push(
      `${relativeToRepo(sourcePath)} references legacy raster asset ${normalizedAssetPath}; production references must use optimized formats.`,
    );
    return;
  }

  const candidate = path.join(buildRoot, normalizedAssetPath);
  if (!statSync(candidate, { throwIfNoEntry: false })?.isFile()) {
    violations.push(`${relativeToRepo(sourcePath)} references missing asset ${normalizedAssetPath}.`);
  }
}

function normalizeAssetPath(assetUrl) {
  if (!assetUrl) {
    return "";
  }

  const trimmed = assetUrl.replace(/[?#].*$/, "");

  if (trimmed.startsWith(`${expectedBaseUrl}/`)) {
    return trimmed.slice(expectedBaseUrl.length + 1);
  }

  if (trimmed.startsWith("/")) {
    return trimmed.slice(1);
  }

  return trimmed;
}

function relativeToRepo(filePath) {
  return path.relative(repoRoot, filePath).split(path.sep).join("/");
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
