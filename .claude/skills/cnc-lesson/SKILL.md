---
name: cnc-lesson
description: Author, review, or fix CNC Mastery lesson content. Use when writing new lessons, reviewing AI-generated (DeepSeek/other) lesson drafts before they enter the repo, checking lessons for plagiarism against source handbooks, fixing encoding corruption, or validating lesson frontmatter and format. Triggers on "write a lesson", "review this lesson content", "add lessons for module X", "check this DeepSeek output", "validate lessons".
---

# CNC Mastery Lesson Authoring

Lessons live in `src/data/lessons/<module-slug>/NN-slug.md` and are loaded by
Astro's content collection (`src/content.config.ts`). Module slugs come from
`src/data/modules/*.yaml` — the lesson's `module:` field must match the folder
name exactly, and both must match an existing module YAML.

## Required frontmatter

Every lesson file starts with exactly this shape. All fields are required
except `draft`. The Zod schema in `src/content.config.ts` is the source of
truth — if a build fails, read that file rather than guessing.

```yaml
---
title: "Human-Readable Lesson Title"
module: "07-cutting-tools"      # must equal the parent folder name
lessonNumber: 4                  # must equal the NN prefix of the filename
description: "One sentence on what the student will be able to do."
objectives:                      # 3-5 items, each a concrete capability
  - "Describe the powder-press-sinter route for cemented carbide inserts"
  - "Explain how cobalt content and grain size trade hardness against toughness"
duration: "50 minutes"           # format: "NN minutes"
difficulty: "intermediate"       # beginner | intermediate | advanced
tags: ["tooling", "carbide", "sintering"]
---
```

`lessonNumber` must match the filename prefix (`04-cemented-carbide.md` →
`lessonNumber: 4`). The validator enforces this.

## Content rules

**Metric only.** Millimetres, m/min, mm/rev, mm/tooth, °C, N/mm², kW, Nm.
Imperial appears only when the standard itself is imperial (UNC/UNF thread
designations, AISI grades, inch-based tolerance classes) — and then give the
metric equivalent alongside it where a machinist would need one.

**Headings start at H2.** The layout renders the `title` as the page H1.
Using `#` in the body produces a duplicate H1 and breaks the heading
hierarchy for screen readers. Use `##` for sections, `###` for subsections.

**Only three callout directives exist**, defined in
`src/utils/remark-callouts.mjs`:

```markdown
:::key-concept
The single idea the student must retain from this section.
:::

:::warning
A hazard, a crash risk, or a mistake that scraps the part.
:::

:::pro-tip
Shop-floor practice — what an experienced machinist actually does.
:::
```

Anything else (`:::quiz`, `:::note`, `:::info`) renders as raw text on the
page. There is no quiz component. Interactive checks use `<details>`.

**G-code blocks** use the `gcode` language tag, which is syntax-highlighted by
the custom TextMate grammar in `src/utils/gcode-lang.ts`:

````markdown
```gcode
G90 G94 G17 G21 G40 G49 G80
G54
T01 M06
S3000 M03
```
````

Every G-code example must be syntactically valid for Fanuc/Haas controls and
safe to run: safety block first, tool length comp with `G43 H__`, coolant on
before cutting, `G80` after any canned cycle, safe Z retract and `G28 G91`
return before `M30`.

**Self-check questions** close every lesson — 3 to 5 of them, in this exact
markup:

```markdown
## Self-Check Questions

**1. Why does peck drilling protect the drill in deep holes?**

<details>
<summary>Show Answer</summary>

It feeds a small Q depth, retracts fully to clear chips and admit coolant,
then feeds again — preventing the chip packing that snaps drills.
</details>
```

**Length:** roughly 100-200 lines of body markdown. Long enough to teach the
topic properly, short enough to finish in one sitting.

**Voice:** direct and professional, written for someone training to work in a
shop. No filler openings ("In this lesson we will explore..."), no hedging, no
motivational padding. Match the tone of the existing lessons — read two or
three from `src/data/lessons/` before writing new ones.

## Reviewing externally generated content

Lesson drafts frequently arrive from an external model (DeepSeek) working from
a source handbook. Three failure modes recur, and all three have shipped
before — check every one, on every file, every time.

### 1. Plagiarism against the source handbook

Source handbooks (e.g. Sandvik Coromant's *Metal Cutting Technology*) are
copyrighted commercial material. Generated drafts tend to track the source's
sentences too closely — synonym-swapping rather than genuinely rewriting.

Compare each draft passage against the corresponding source text. Flag:

- Runs of ~8+ consecutive words matching the source
- Sentences that keep the source's clause order and structure with words
  substituted ("patchwriting")
- The source's own distinctive illustrative examples, similes, or invented
  scenarios reused unchanged (these are the clearest infringement signal —
  a specific worked example is authored content, not fact)

Not plagiarism, and fine to reuse: standard classifications (ISO P/M/K/N/S/H,
ISO 1832 insert codes), material designations (AISI 4140, 6061-T6), published
tolerance tables (ISO 2768), standard formulas, and industry-generic terms
(flank wear, rake angle, climb milling). Facts and numbers are not
copyrightable — the prose explaining them is.

Rewrite flagged passages with different sentence structure and a different
entry point into the idea, preserving every technical fact and number.

### 2. Vendor trademarks presented as generic terms

Drafts leak proprietary product names from the source: **Coromant Capto**,
**iLock**, **EasyFix**, **CoroDrill**, **CoroMill**, **T-Max**, and grade
names like GC4225. These appear as though they were generic engineering
vocabulary, often with the vendor's own performance specs attached.

Replace with a generic description of the mechanism ("polygon-taper coupling
with two-face contact", "quick-locating clamping sleeve with a spring-loaded
plunger"). Do not name the vendor. Sweep for these before committing:

```bash
grep -irn "sandvik\|coromant\|capto\|ilock\|easyfix\|corodrill\|coromill\|corobore\|corotap\|corocut" src/data/lessons/
```

### 3. Double-UTF-8 encoding corruption (mojibake)

Generated files often arrive with every non-ASCII character double-encoded:
`×` becomes `Ã—`, `—` becomes `â€"`, `°` becomes `Â°`, `π` becomes `Ï€`,
`²` becomes `Â²`. This corrupts formulas, frontmatter titles, and units, and
renders as garbage on the live site.

Detect and repair with the repo script:

```bash
python3 .github/scripts/fix-mojibake.py src/data/lessons
```

It reverses the cp1252-misdecode and only rewrites files that actually
contain the marker sequences. Verify afterwards:

```bash
grep -rn "Ã\|â€\|Â°\|Â²\|Â³\|Ï€\|âˆ" src/data/lessons/
```

### 4. Technical accuracy

Verify rather than trust. Errors that have shipped in past drafts include a
reversed claim about ER collet runout, a productivity/tool-life table cell
that contradicted the definition of MRR, a cost figure that summed the wrong
two numbers, and a tool-life exponent range whose stated result did not match
its own exponent bounds.

Recompute every worked example by hand. Check that each claim is consistent
with the rest of the lesson and with other lessons on the site. Confirm
G-code against Fanuc/Haas semantics, particularly modal state, canned-cycle
cancellation, arc I/J signs, and cutter-comp direction (climb milling an
external contour with M03 travels **counterclockwise** under G41).

## Validating before commit

```bash
powershell -File tools/validate-lessons.ps1 -LessonsRoot src/data/lessons -ModulesRoot src/data/modules
```

Checks frontmatter completeness, `lessonNumber` vs filename, `module` vs
folder and against the module YAMLs, difficulty enum, duration format,
absence of H1 headings, only-supported callout types, presence of `<details>`
self-checks, and 3-5 self-check questions per lesson.

Then build — the content collection schema is enforced at build time:

```bash
npx astro build
```

Finally, verify the rendered page in the browser rather than assuming: run the
dev server and read the lesson page, checking that callouts render as styled
boxes, G-code is highlighted, tables are laid out, and no raw `:::` markers
or mojibake are visible.

## Writing a new module from a source

1. Read `src/data/modules/<slug>.yaml` for the module's scope, level, and
   estimated hours — the lesson set should cover that scope and roughly fit
   those hours.
2. Read two existing lessons from a neighbouring module to absorb the voice.
3. Plan lesson numbering and titles first, as a list, before drafting prose.
   Numbers are stable once committed — later lessons append rather than
   renumber.
4. Draft, then run the full review above on your own output before committing.
