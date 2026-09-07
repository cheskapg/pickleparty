import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const IMAGE_DIR = path.join(process.cwd(), "public", "images");
const IMAGE_EXT = /\.(png|jpe?g|webp|avif)$/i;

/**
 * Finds a photo by base name, ignoring the extension. Drop in
 * `celebrant-02.jpg`, `.png`, `.webp` — whatever — and it is picked up.
 * If several files share a base name, the most recently added one wins,
 * so a photo you add always beats the generated placeholder.
 */
export function findPhoto(base: string): string | undefined {
  let files: string[];
  try {
    files = readdirSync(IMAGE_DIR);
  } catch {
    return undefined;
  }

  const match = files
    .filter(
      (file) =>
        IMAGE_EXT.test(file) &&
        file.replace(IMAGE_EXT, "").toLowerCase() === base.toLowerCase(),
    )
    .map((file) => ({
      file,
      mtime: statSync(path.join(IMAGE_DIR, file)).mtimeMs,
    }))
    .sort((a, b) => b.mtime - a.mtime)[0];

  return match ? `/images/${match.file}` : undefined;
}
