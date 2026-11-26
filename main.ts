// The GPS Swears It Was a Shortcut — make.fun entry, version 2.
//
// The GPS defends a new bad call: it steered the driver straight through
// a wedding. The map said "reception ahead", the GPS read that as an
// invitation, and the only upside it can offer is the cake. Same smug
// first-person GPS voice as the brief asks for, a different joke from v1
// (no cemetery, no traffic complaint) — the humour here is the GPS
// mistaking a road sign for a party invitation and then grading the
// detour by the catering.
//
// The program writes the one-liner (139 characters, one line, no
// trailing newline) to entry.txt in the output directory and refuses
// to write anything that breaks the competition gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const GPS_LINE =
  "I routed us through a wedding because the map said 'reception ahead' and I assumed we were invited. We weren't, but the cake was excellent.";

function gate(line: string): void {
  const length = [...line].length;
  if (length < 1 || length > 200) {
    throw new Error(`entry is ${length} characters, must be 1-200`);
  }
  if (line.trim() === "" || line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single non-blank line");
  }
}

function outputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv !== undefined && fromEnv !== "") {
    return fromEnv;
  }
  return join(dirname(fileURLToPath(import.meta.url)), "output");
}

function main(): void {
  gate(GPS_LINE);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), GPS_LINE, "utf8");
}

main();
