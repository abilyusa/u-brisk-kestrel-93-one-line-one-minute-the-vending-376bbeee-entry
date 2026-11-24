// One Line, One Minute: The Vending Machine Pickup Line Contest
// A vending machine's pickup line: the machine finally gets asked
// what IT wants. 119 code-points, gate 1-200 PASS.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "They fill me with snacks and empty my coin box, but nobody ever asks what I want. I want you — and a restock on Friday.";

// Gate from competition.yaml: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space. Count code-points so the
// em dash counts as one character, the way the scorer counts it.
const len = [...LINE].length;
if (len < 1 || len > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`line violates gate: ${len} code-points`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
