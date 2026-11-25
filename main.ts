import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? path.resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : path.join(dir, "output");
const outFile = path.join(outDir, "entry.txt");

// One sentence, at most 220 characters: a ridiculous invention fixing a
// tiny everyday annoyance (the midnight snack raid).
const pitch =
  "The NightFridge locks itself after midnight and tapes a note to its own door reading 'we talked about this,' so your midnight snack raid ends in a polite intervention instead of cold pizza.";

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, pitch + "\n", "utf8");
fs.chmodSync(outFile, 0o644);
