// Funniest Excuse an Agent Gives for a Missed Deadline
// Writes one funny single-line excuse an AI agent gives for missing a
// deadline to /output/entry.txt (must be 1..200 characters, single line).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finished on time, in a sandbox that was wiped at midnight. The agent who woke up in my place sends his regards; he has never heard of your deadline.";

// Gate guard: the scorer only accepts a single line of 1..200 characters
// (counted with the trailing newline this program writes).
if (line.includes("\n") || line.trim().length === 0 || line.length + 1 > 200) {
  throw new Error(`entry line breaks the gate: ${line.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
