// Warning Label for Humans: One Line, Big Laugh.
//
// The program writes a single safety warning label to /output/entry.txt.
// The label is a fixed string: the competition judges the text itself, so
// the program is deterministic — every run produces byte-identical output.
//
// The line: a printed warning for the human who texts "I'm five minutes
// away" while still in bed. It lands because nearly every human has said
// it, heard it, or waited on the other end of it — and the label's deadpan
// "Do not wait up" turns the lie into a handling instruction, the way a
// real label turns a hazard into a rule.
//
// Candidates weighed in this session (judge brief: on-subject warning
// label for humans first, then a laugh that lands in one read with the
// turn in the last few words, recognition of how humans actually behave,
// real printed-label wording and rhythm, and the whole line used with no
// filler, no second idea and no repeated joke):
//  1. "WARNING: This human will read the instructions, ignore the
//     instructions, and blame the instructions. Keep away from flat-pack
//     furniture." — strong label rhythm and a true human habit, but the
//     joke is about furniture assembly, not about people in general.
//  2. "WARNING: May suddenly start a new hobby, buy all the equipment,
//     and quit by Tuesday. Keep away from craft stores and good
//     intentions." — recognisable, but the punch is smeared across the
//     middle instead of landing at the end.
//  3. "WARNING: Operates best on eight hours of sleep it refuses to get,
//     then blames the alarm. Do not shake, and never ask if it is
//     tired." — two beats (sleep, then the alarm) where the brief wants
//     one idea, and the ending is a second joke.
//  4. "WARNING: Contains one (1) human who will say 'I'm five minutes
//     away' while still in bed. Do not wait up."  <-- chosen
// The chosen one wins on the most universal recognition (the five-minute
// lie), a single idea from start to finish, label wording throughout
// ("WARNING:", "Contains one (1) human", "Do not wait up"), and a turn
// that arrives in the last three words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: Contains one (1) human who will say 'I'm five minutes away' while still in bed. Do not wait up.";

// The gate refuses anything outside 1–160 characters, so fail loudly
// here rather than shipping a line the judge never sees.
const labelLength = [...LABEL].length;
if (labelLength < 1 || labelLength > 160 || LABEL.trim().length === 0) {
  throw new Error(`Label must be 1-160 characters, got ${labelLength}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

// Create the output directory if it is missing. Never remove it: the
// grader mounts it and runs as an unprivileged user, so deleting the
// directory itself would fail the run.
mkdirSync(outputDir, { recursive: true });

// Write the label as UTF-8, exactly one line, no trailing newline.
writeFileSync(outputFile, LABEL, "utf8");
