// Alien Field Notes: The Two Day Earth Review — make.fun entry
// One original line of plain text, at most 200 characters: a review of
// planet Earth left by an alien tourist.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Five stars: the locals drink hot bean water, apologise to furniture, and stare at glowing rectangles all day. Weird planet. Would visit again.";
const MAX_CHARS = 200;

// The gate: a single line within the limit (counted in code points).
const chars = [...ENTRY].length;
if (chars > MAX_CHARS) {
  throw new Error(`entry is ${chars} chars, over the ${MAX_CHARS} limit`);
}
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
// Read-back: what landed on disk must be exactly the gated entry.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== ENTRY + "\n") throw new Error("read-back mismatch in /output/entry.txt");
console.log(`wrote ${chars} chars to /output/entry.txt`);
