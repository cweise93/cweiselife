#!/usr/bin/env node

import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const srcRoot = path.join(repoRoot, "src");
const contentRoot = path.join(srcRoot, "assets", "content");
const imageRoot = path.join(srcRoot, "assets", "images");
const targetWidth = 1200;
const targetHeight = 630;
const targetRatio = targetWidth / targetHeight;

const contentFiles = [
  "writing.json",
  "frameworks.json",
  "operating-tools.json",
];

const siteContent = readJson("site.json");
const writingContent = readJson("writing.json");
const frameworksContent = readJson("frameworks.json");
const operatingToolsContent = readJson("operating-tools.json");

const staticPageSpecs = [
  {
    route: "/",
    output: "assets/images/home/og_home.png",
    source: siteContent.home.heroImage,
  },
  {
    route: "/writing",
    output: "assets/images/writing/og_writing.png",
    source: "assets/images/article-facets.png",
  },
  {
    route: "/frameworks",
    output: "assets/images/frameworks/og_frameworks.png",
    source: "assets/images/frameworks/2026-05-17_d3_executive_framework/01_d3_knowledge_framework_header.png",
  },
  {
    route: "/operating-tools",
    output: "assets/images/operating-tools/og_operating_tools.png",
    source: "assets/images/operating-tools/agency-is-the-metric/01_agency_is_the_metric.png",
  },
  {
    route: "/guides",
    output: "assets/images/operating-tools/og_guides.png",
    source: "assets/images/operating-tools/agency-is-the-metric/01_agency_is_the_metric.png",
  },
  {
    route: "/about",
    output: "assets/images/about/og_about.png",
    source: siteContent.home.heroImage,
  },
  {
    route: "/connect",
    output: "assets/images/connect/og_connect.png",
    source: "assets/images/stay-connected.png",
  },
];

const referencedImages = new Set();
const generatedImages = [];
const updatedFiles = new Set();

function commandExists(command) {
  const result = spawnSync(command, [], {
    cwd: repoRoot,
    stdio: "ignore",
  });

  return result.error?.code !== "ENOENT";
}

function readJson(fileName) {
  return JSON.parse(readFileSync(path.join(contentRoot, fileName), "utf8"));
}

function writeJson(fileName, data) {
  writeFileSync(path.join(contentRoot, fileName), `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function toAbsolute(assetPath) {
  return path.join(srcRoot, assetPath);
}

function toPosix(filePath) {
  return filePath.split(path.sep).join("/");
}

function deriveOgAssetPath(assetPath) {
  const extension = path.extname(assetPath);
  const directory = path.posix.dirname(assetPath);
  const basename = path.posix.basename(assetPath, extension);
  const normalizedBase =
    basename.startsWith("og_")
      ? basename
      : basename.startsWith("01_")
        ? `og_${basename.slice(3)}`
        : `og_${basename}`;

  return path.posix.join(directory, `${normalizedBase}.png`);
}

function parseSipsNumber(output, key) {
  const pattern = new RegExp(`${key}:\\s*(\\d+)`);
  const match = output.match(pattern);
  if (!match) {
    throw new Error(`Unable to parse ${key} from sips output: ${output}`);
  }

  return Number.parseInt(match[1], 10);
}

function getImageDimensions(absolutePath) {
  const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", absolutePath], {
    encoding: "utf8",
  });

  return {
    width: parseSipsNumber(output, "pixelWidth"),
    height: parseSipsNumber(output, "pixelHeight"),
  };
}

function ensureSocialImage(sourceAssetPath, outputAssetPath) {
  const sourceAbsolute = toAbsolute(sourceAssetPath);
  const outputAbsolute = toAbsolute(outputAssetPath);

  if (!existsSync(sourceAbsolute)) {
    throw new Error(`Missing source image: ${sourceAssetPath}`);
  }

  mkdirSync(path.dirname(outputAbsolute), { recursive: true });

  const tempDir = mkdtempSync(path.join(os.tmpdir(), "cw-og-"));
  const resizedAbsolute = path.join(tempDir, "resized.png");

  try {
    const { width, height } = getImageDimensions(sourceAbsolute);
    const sourceRatio = width / height;
    const resizeArgs =
      sourceRatio >= targetRatio
        ? ["-s", "format", "png", "--resampleHeight", `${targetHeight}`]
        : ["-s", "format", "png", "--resampleWidth", `${targetWidth}`];

    execFileSync("sips", [...resizeArgs, sourceAbsolute, "--out", resizedAbsolute], { stdio: "pipe" });
    execFileSync(
      "sips",
      ["--cropToHeightWidth", `${targetHeight}`, `${targetWidth}`, resizedAbsolute, "--out", outputAbsolute],
      { stdio: "pipe" },
    );
  } finally {
    rmSync(tempDir, { recursive: true, force: true });
  }

  generatedImages.push(outputAssetPath);
}

function ensureStaticPageSocialImages() {
  for (const spec of staticPageSpecs) {
    ensureSocialImage(spec.source, spec.output);
    referencedImages.add(spec.output);
  }
}

function createSocialImageRecord(outputAssetPath) {
  return {
    label: "Social preview image",
    href: outputAssetPath,
    description: "Dedicated Open Graph and LinkedIn social preview image generated at a 1200x630 share ratio.",
  };
}

function verifyCommittedSocialImages() {
  for (const spec of staticPageSpecs) {
    const absolutePath = toAbsolute(spec.output);
    if (!existsSync(absolutePath)) {
      throw new Error(`Missing committed static social image: ${spec.output}`);
    }
  }

  for (const fileName of contentFiles) {
    const data = readJson(fileName);

    for (const item of data.items) {
      if (item.status !== "published") {
        continue;
      }

      const socialImage = item.productionAssets?.socialImage?.href;
      if (!socialImage) {
        throw new Error(`Published item is missing productionAssets.socialImage: ${item.slug}`);
      }

      if (!path.posix.basename(socialImage).startsWith("og_")) {
        throw new Error(`Published item does not reference a dedicated OG image: ${item.slug} -> ${socialImage}`);
      }

      if (!existsSync(toAbsolute(socialImage))) {
        throw new Error(`Missing committed social image: ${socialImage}`);
      }
    }
  }

  const dimensionsModule = path.join(srcRoot, "app", "core", "seo", "image-dimensions.ts");
  if (!existsSync(dimensionsModule)) {
    throw new Error("Missing committed image dimensions module.");
  }
}

function ensureContentSocialImages() {
  for (const fileName of contentFiles) {
    const data = readJson(fileName);
    let changed = false;

    for (const item of data.items) {
      if (item.status !== "published") {
        continue;
      }

      const primarySource = item.heroImage ?? item.diagramImage;
      if (!primarySource) {
        throw new Error(`Published item is missing a source image: ${item.slug}`);
      }

      const explicitSocialImage = item.productionAssets?.socialImage?.href;
      const outputAssetPath =
        explicitSocialImage && path.posix.basename(explicitSocialImage).startsWith("og_")
          ? explicitSocialImage
          : deriveOgAssetPath(primarySource);

      if (!(explicitSocialImage && path.posix.basename(explicitSocialImage).startsWith("og_"))) {
        ensureSocialImage(primarySource, outputAssetPath);
        item.productionAssets = {
          ...(item.productionAssets ?? {}),
          socialImage: createSocialImageRecord(outputAssetPath),
        };
        changed = true;
      }

      referencedImages.add(outputAssetPath);
    }

    if (changed) {
      writeJson(fileName, data);
      updatedFiles.add(fileName);
    }
  }
}

if (!commandExists("sips")) {
  verifyCommittedSocialImages();
  console.log("sips unavailable; reused committed social preview images and dimensions.");
  process.exit(0);
}

function collectRasterImages(rootDirectory) {
  const discovered = [];
  const entries = execFileSync("find", [rootDirectory, "-type", "f"], { encoding: "utf8" })
    .split("\n")
    .filter(Boolean);

  for (const entry of entries) {
    const extension = path.extname(entry).toLowerCase();
    if (extension === ".png" || extension === ".jpg" || extension === ".jpeg" || extension === ".webp") {
      discovered.push(entry);
    }
  }

  return discovered.sort((left, right) => left.localeCompare(right));
}

function writeImageDimensionsModule() {
  const imageFiles = collectRasterImages(imageRoot);
  const lines = [
    "export interface ImageDimensions {",
    "  width: number;",
    "  height: number;",
    "}",
    "",
    "export const IMAGE_DIMENSIONS_BY_PATH: Record<string, ImageDimensions> = {",
  ];

  for (const absolutePath of imageFiles) {
    const relativePath = toPosix(path.relative(srcRoot, absolutePath));
    const { width, height } = getImageDimensions(absolutePath);
    lines.push(`  '${relativePath}': { width: ${width}, height: ${height} },`);
  }

  lines.push("};", "");
  writeFileSync(
    path.join(srcRoot, "app", "core", "seo", "image-dimensions.ts"),
    lines.join("\n"),
    "utf8",
  );
}

ensureStaticPageSocialImages();
ensureContentSocialImages();
writeImageDimensionsModule();

const summary = [
  `Generated ${generatedImages.length} social preview image(s).`,
  updatedFiles.size ? `Updated content metadata in: ${[...updatedFiles].sort().join(", ")}` : "Content metadata already referenced dedicated social images.",
  `Static route images refreshed: ${staticPageSpecs.length}.`,
];

console.log(summary.join("\n"));
