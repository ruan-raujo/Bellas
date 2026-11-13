import fs from 'node:fs';
import path from 'node:path';

const assetPathPrefix = "https://www.figma.com/api/mcp/asset/23bed740-c3f8-4c18-8a91-e5a373bf85b2";
const assets = [
  "337df.png", "da7b9.png", "ccc93.png", "c6e02.png", "4da29.png", "d0676.png",
  "53d49.png", "9ad69.png", "c2657.png", "2de7e.png", "d9f61.png", "23d7b.png",
  "16889.png", "9fdcb.png", "e6920.png", "13b17.png", "ab24b.png", "d7f95.png",
  "e4f52.png", "f49f3.png", "7473b.png", "769b4.png", "d8eab.png", "9e989.png",
  "19fb8.svg", "4de1f.svg", "e802d.svg", "d25c1.svg", "ead49.svg", "25498.svg",
  "30bd3.svg", "2e87e.svg", "d74d8.svg", "362c2.svg", "e3057.svg", "91b69.svg",
  "d1742.svg", "a3a09.svg", "7fe1a.svg"
];

const targetDir = path.resolve('public/assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log(`Downloading ${assets.length} assets...`);
let downloaded = 0;

for (const file of assets) {
  const url = `${assetPathPrefix}/${file}`;
  const outPath = path.join(targetDir, file);
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed ${file}: ${res.status} ${res.statusText}`);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(outPath, buffer);
    downloaded++;
    console.log(`[${downloaded}/${assets.length}] Downloaded ${file} (${buffer.length} bytes)`);
  } catch (err) {
    console.error(`Error downloading ${file}:`, err.message);
  }
}

console.log(`Finished downloading ${downloaded}/${assets.length} assets.`);
