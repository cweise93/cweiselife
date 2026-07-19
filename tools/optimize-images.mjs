import { readdir, stat } from 'node:fs/promises';
import { join, relative, extname, dirname } from 'node:path';
import sharp from 'sharp';

const root = join(process.cwd(), 'src/assets/images');

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (/\.(png|jpe?g)$/i.test(entry.name)) files.push(path);
  }
  return files;
}

const files = await walk(root);
let totalBefore = 0;
let totalAfter = 0;
for (const input of files) {
  const output = join(dirname(input), `${relative(dirname(input), input).slice(0, -extname(input).length)}.webp`);
  const before = (await stat(input)).size;
  await sharp(input).webp({ quality: 78, effort: 6 }).toFile(output);
  const after = (await stat(output)).size;
  totalBefore += before;
  totalAfter += after;
}
console.log(`Optimized ${files.length} raster images: ${Math.round(totalBefore / 1024 / 1024)} MB -> ${Math.round(totalAfter / 1024 / 1024)} MB`);
