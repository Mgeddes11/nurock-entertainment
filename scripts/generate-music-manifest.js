/**
 * Scans public/assets/music for *.mp3 (excluding watermark.mp3) and writes
 * public/assets/music/manifest.json. Run before dev/build so the Instrumentals
 * page picks up new files automatically.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const musicDir = path.join(projectRoot, "public", "assets", "music");

if (!fs.existsSync(musicDir)) {
  fs.mkdirSync(musicDir, { recursive: true });
}

const files = fs.readdirSync(musicDir);
const mp3s = files
  .filter((f) => f.endsWith(".mp3") && f.toLowerCase() !== "watermark.mp3")
  .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));

const tracks = mp3s.map((filename, i) => {
  const title = filename.replace(/\.mp3$/i, "").trim();
  const id = title
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase() || `track-${i + 1}`;
  return {
    id,
    title: title || `Track ${i + 1}`,
    src: `/assets/music/${encodeURIComponent(filename)}`,
  };
});

const manifestPath = path.join(musicDir, "manifest.json");
fs.writeFileSync(manifestPath, JSON.stringify(tracks, null, 2));
console.log(`[music] manifest.json written with ${tracks.length} track(s).`);
