#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const srcRoot = path.join(repoRoot, "src");
const distRoot = path.join(repoRoot, "dist", "browser");
const contentRoot = path.join(srcRoot, "assets", "content");
const requiredTagPatterns = [
  /<meta[^>]+property="og:title"[^>]+content="[^"]+"/i,
  /<meta[^>]+property="og:description"[^>]+content="[^"]+"/i,
  /<meta[^>]+property="og:url"[^>]+content="https:\/\/cweise\.com\/[^"]*"/i,
  /<meta[^>]+property="og:image"[^>]+content="https:\/\/cweise\.com\/[^"]+"/i,
  /<meta[^>]+name="twitter:card"[^>]+content="summary_large_image"/i,
  /<meta[^>]+name="twitter:title"[^>]+content="[^"]+"/i,
  /<meta[^>]+name="twitter:description"[^>]+content="[^"]+"/i,
  /<meta[^>]+name="twitter:image"[^>]+content="https:\/\/cweise\.com\/[^"]+"/i,
  /<link[^>]+rel="canonical"[^>]+href="https:\/\/cweise\.com\/[^"]*"/i,
  /<script[^>]+type="application\/ld\+json"/i,
];
const socialRatio = 1200 / 630;

const staticPageImages = [
  "assets/images/home/og_home.png",
  "assets/images/writing/og_writing.png",
  "assets/images/frameworks/og_frameworks.png",
  "assets/images/operating-tools/og_operating_tools.png",
  "assets/images/operating-tools/og_guides.png",
  "assets/images/about/og_about.png",
  "assets/images/connect/og_connect.png",
];
const imageDimensionsModulePath = path.join(srcRoot, "app", "core", "seo", "image-dimensions.ts");
const imageDimensionsByPath = parseImageDimensionsModule();

function readJson(fileName) {
  return JSON.parse(readFileSync(path.join(contentRoot, fileName), "utf8"));
}

function readText(filePath) {
  return readFileSync(filePath, "utf8");
}

function parseSipsNumber(output, key) {
  const pattern = new RegExp(`${key}:\\s*(\\d+)`);
  const match = output.match(pattern);
  if (!match) {
    throw new Error(`Unable to parse ${key} from sips output: ${output}`);
  }

  return Number.parseInt(match[1], 10);
}

function parseImageDimensionsModule() {
  if (!existsSync(imageDimensionsModulePath)) {
    return {};
  }

  const text = readFileSync(imageDimensionsModulePath, "utf8");
  const matches = text.matchAll(/'([^']+)': \{ width: (\d+), height: (\d+) \},/g);
  const parsed = {};

  for (const match of matches) {
    parsed[match[1]] = {
      width: Number.parseInt(match[2], 10),
      height: Number.parseInt(match[3], 10),
    };
  }

  return parsed;
}

function getImageDimensions(assetPath) {
  const precomputed = imageDimensionsByPath[assetPath];
  if (precomputed) {
    return precomputed;
  }

  const absolutePath = path.join(srcRoot, assetPath);
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", absolutePath], {
    encoding: "utf8",
  });

  return {
    width: parseSipsNumber(output, "pixelWidth"),
    height: parseSipsNumber(output, "pixelHeight"),
  };
}

function assert(condition, message, failures) {
  if (!condition) {
    failures.push(message);
  }
}

function verifySocialImage(assetPath, failures, context) {
  const absolutePath = path.join(srcRoot, assetPath);
  assert(existsSync(absolutePath), `${context}: missing social image ${assetPath}`, failures);

  if (!existsSync(absolutePath)) {
    return;
  }

  const { width, height } = getImageDimensions(assetPath);
  const ratio = width / height;

  assert(width >= 1200, `${context}: social image width is ${width}, expected at least 1200`, failures);
  assert(height >= 630, `${context}: social image height is ${height}, expected at least 630`, failures);
  assert(Math.abs(ratio - socialRatio) < 0.05, `${context}: social image ratio ${ratio.toFixed(3)} is not share-card compliant`, failures);
}

function verifyContentMetadata(failures) {
  const files = ["writing.json", "frameworks.json", "operating-tools.json"];

  for (const fileName of files) {
    const data = readJson(fileName);

    for (const item of data.items) {
      if (item.status !== "published") {
        continue;
      }

      const socialImage = item.productionAssets?.socialImage?.href;
      assert(Boolean(item.seo?.title), `${item.slug}: missing seo.title`, failures);
      assert(Boolean(item.seo?.description), `${item.slug}: missing seo.description`, failures);
      assert(Boolean(socialImage), `${item.slug}: missing productionAssets.socialImage.href`, failures);

      if (socialImage) {
        verifySocialImage(socialImage, failures, item.slug);
      }
    }
  }

  for (const assetPath of staticPageImages) {
    verifySocialImage(assetPath, failures, assetPath);
  }
}

function verifyPrerenderedHtml(failures) {
  const htmlFiles = execFileSync("find", [distRoot, "-name", "index.html", "-type", "f"], {
    encoding: "utf8",
  })
    .split("\n")
    .filter(Boolean)
    .sort((left, right) => left.localeCompare(right));

  assert(htmlFiles.length > 0, "No prerendered HTML files found in dist/browser.", failures);

  for (const htmlFile of htmlFiles) {
    const html = readText(htmlFile);
    const relativePath = path.relative(distRoot, htmlFile) || "index.html";

    for (const pattern of requiredTagPatterns) {
      assert(pattern.test(html), `${relativePath}: missing required tag matching ${pattern}`, failures);
    }

    assert(
      /<meta[^>]+property="og:image:width"[^>]+content="(\d+)"/i.test(html),
      `${relativePath}: missing og:image:width`,
      failures,
    );
    assert(
      /<meta[^>]+property="og:image:height"[^>]+content="(\d+)"/i.test(html),
      `${relativePath}: missing og:image:height`,
      failures,
    );
  }
}

const failures = [];
verifyContentMetadata(failures);
verifyPrerenderedHtml(failures);

if (failures.length) {
  console.error(`Site compliance verification failed with ${failures.length} issue(s):`);
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("Site compliance verification passed.");
