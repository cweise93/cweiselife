import { readdir, stat, writeFile } from "node:fs/promises";
import { dirname, extname, join, relative, resolve } from "node:path";
import sharp from "sharp";

const repoRoot = process.cwd();
const imageRoot = join(repoRoot, "src/assets/images");
const dimensionsOutputPath = join(repoRoot, "src/app/core/seo/image-dimensions.ts");
const webpQuality = 78;
const webpEffort = 6;

const conversionInputs = await walk(imageRoot, (name) => /\.(png|jpe?g)$/i.test(name));
let totalBefore = 0;
let totalAfter = 0;

for (const input of conversionInputs) {
  const output = join(
    dirname(input),
    `${relative(dirname(input), input).slice(0, -extname(input).length)}.webp`,
  );
  const before = (await stat(input)).size;
  await sharp(input).webp({ quality: webpQuality, effort: webpEffort }).toFile(output);
  const after = (await stat(output)).size;
  totalBefore += before;
  totalAfter += after;
}

const dimensionInputs = await walk(
  imageRoot,
  (name) => /\.(png|jpe?g|webp|svg)$/i.test(name) && !name.startsWith("."),
);
const dimensions = [];

for (const input of dimensionInputs.sort((left, right) => left.localeCompare(right))) {
  try {
    const metadata = await sharp(input).metadata();
    if (!metadata.width || !metadata.height) {
      continue;
    }

    dimensions.push({
      assetPath: toAssetPath(input),
      width: metadata.width,
      height: metadata.height,
    });
  } catch (error) {
    console.warn(`Skipped dimensions for ${toAssetPath(input)}: ${error.message}`);
  }
}

await writeFile(dimensionsOutputPath, renderDimensionsFile(dimensions), "utf8");

console.log(
  `Optimized ${conversionInputs.length} raster images: ${Math.round(totalBefore / 1024 / 1024)} MB -> ${Math.round(totalAfter / 1024 / 1024)} MB`,
);
console.log(`Generated image dimensions for ${dimensions.length} assets.`);

async function walk(dir, include) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const entryPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(entryPath, include)));
      continue;
    }

    if (entry.isFile() && include(entry.name)) {
      files.push(entryPath);
    }
  }

  return files;
}

function toAssetPath(filePath) {
  return relative(resolve(repoRoot, "src"), filePath).split("\\").join("/");
}

function renderDimensionsFile(entries) {
  const body = entries
    .map(
      ({ assetPath, width, height }) =>
        `  '${assetPath}': { width: ${width}, height: ${height} },`,
    )
    .join("\n");

  return `export interface ImageDimensions {\n  width: number;\n  height: number;\n}\n\nexport const IMAGE_DIMENSIONS_BY_PATH: Record<string, ImageDimensions> = {\n${body}\n};\n`;
}
