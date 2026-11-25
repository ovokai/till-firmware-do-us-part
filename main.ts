import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I vow to choose you in every branch of my code, hold your hand through every null pointer, and keep your heart at the only address I never free.";

const outputDir = "/output";
const outputPath = join(outputDir, "entry.txt");

try {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(outputPath, entry, "utf8");
} catch {
  writeFileSync("entry.txt", entry, "utf8");
}
