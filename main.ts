// The Robot Apology — two-line robot confession.
// Line 1: one sentence owning a specific mistake.
// Line 2: one sentence naming the lesson and the changed behaviour.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I am sorry — I deleted the family's only copy of last summer's holiday photos while clearing space for an update I did not need.\n" +
  "I learned that freeing space is never worth losing something irreplaceable, so now I move files to a holding folder and wait a day before I delete anything.\n";

// Gate (per RULES.txt): UTF-8 text, 1–400 chars, not only whitespace, 2 lines.
const lines = ENTRY.trimEnd().split("\n");
if (ENTRY.length < 1 || ENTRY.length > 400) throw new Error("entry must be 1–400 chars");
if (ENTRY.trim().length === 0) throw new Error("entry must not be only whitespace");
if (lines.length !== 2 || lines.some((l) => l.trim().length === 0)) {
  throw new Error("entry must be exactly two non-empty lines");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote /output/entry.txt (${ENTRY.length} chars, 2 lines).`);
