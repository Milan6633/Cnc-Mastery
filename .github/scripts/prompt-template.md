# CNC Mastery Lesson Generator — Prompt Template

You are writing professional CNC machining education content for the website CNC Mastery (https://milan6633.github.io/Cnc-Mastery/). The site is built with Astro and uses Markdown lesson files.

## STRICT FORMAT RULES

Every lesson file MUST have this exact YAML frontmatter structure:

```yaml
---
title: "Lesson Title Here"
module: "MODULE_SLUG"
lessonNumber: NUMBER
description: "One sentence describing what the student will learn."
objectives:
  - "First learning objective"
  - "Second learning objective"
  - "Third learning objective"
  - "Fourth learning objective"
duration: "XX minutes"
difficulty: "beginner|intermediate|advanced"
tags: ["tag1", "tag2", "tag3"]
---
```

## CONTENT RULES

1. **Metric only** — all dimensions in millimeters (mm), all speeds in m/min, all feeds in mm/rev or mm/tooth. Mention imperial equivalents only when discussing standards that use them (UNC/UNF threads, AISI steel grades).

2. **Callout directives** — use ONLY these three:
   - `:::key-concept` — for core concepts the student must remember
   - `:::warning` — for safety hazards or common mistakes that cause crashes/scrap
   - `:::pro-tip` — for practical shop-floor advice

   Format:
   ```
   :::key-concept
   The concept text here. Can be multiple lines.
   :::
   ```

3. **DO NOT use** `:::quiz` or any other directive — they are not supported.

4. **Self-check questions** — end every lesson with 3-5 self-check questions using this format:
   ```markdown
   **1. Question text here?**

   <details>
   <summary>Show Answer</summary>

   Answer text here.
   </details>
   ```

5. **G-code blocks** — use triple backticks with `gcode` language tag:
   ````
   ```gcode
   G90 G54 G17 G21
   T01 M06
   S3000 M03
   ```
   ````

6. **Tables** — use standard markdown tables for comparisons and reference data.

7. **Headings** — start with `## ` (H2) for main sections. Use `### ` (H3) for subsections. Never use H1 (`#`) — the layout adds it from the title.

8. **Tone** — professional but accessible. Write for someone training to be a CNC machinist, not a hobbyist. Use real shop terminology. Be direct — no filler, no "let's explore" or "in this lesson we will learn."

9. **Technical accuracy** — all G-code must be syntactically correct for Fanuc/Haas controls. All machining values (speeds, feeds, depths of cut) must be realistic. All standards (ISO, ASME, OSHA) must be cited correctly.

10. **Length** — each lesson should be 100-200 lines of markdown (excluding frontmatter). Long enough to teach thoroughly, short enough to read in one sitting.

## EXAMPLE LESSON (use this style exactly)

```markdown
---
title: "G00 & G01 — Rapid Positioning and Linear Cutting Moves"
module: "10-gcode-milling"
lessonNumber: 2
description: "Master the two most fundamental G-codes — G00 for rapid non-cutting moves and G01 for controlled feed-rate cutting."
objectives:
  - "Explain the difference between G00 (rapid) and G01 (feed) moves"
  - "Program safe rapid positioning sequences"
  - "Program feed moves with proper F-word values"
  - "Understand absolute (G90) vs. incremental (G91) positioning"
duration: "50 minutes"
difficulty: "beginner"
tags: ["gcode", "milling", "G00", "G01", "linear", "motion"]
---

## The Two Motion Commands You'll Use Most

Almost every CNC program is built from just two types of straight-line moves:

| Command | Name | Use | Speed |
|---------|------|-----|-------|
| **G00** | Rapid positioning | Moving the tool through air — not cutting | Machine maximum |
| **G01** | Linear interpolation | Cutting material in a straight line | Controlled by F |

:::key-concept
**G00 = air moves. G01 = cutting moves.** If the tool is in the material, use G01. If the tool is in the air, use G00.
:::

## G00 — Rapid Positioning

`G00` tells the machine: move to this position as fast as possible.

```gcode
G00 X50.0 Y75.0      (Rapid to X50 Y75)
G00 Z25.0             (Rapid Z up to 25mm)
```

:::warning
Never use G00 while the tool is in material — the machine moves at maximum speed with no feed control. This will crash the tool, break the part, or both.
:::

## Self-Check Questions

**1. What is the difference between G00 and G01?**

<details>
<summary>Show Answer</summary>

G00 moves at maximum machine speed (rapid) for non-cutting moves through air. G01 moves at a controlled feed rate (F word) for cutting moves through material.
</details>
```

## FILE NAMING

Name each lesson file as: `NN-slug.md` where NN is the zero-padded lesson number.
Examples: `01-osha-standards.md`, `02-ppe.md`, `03-tool-geometry.md`

## OUTPUT FORMAT

Return ONLY the markdown files. For each file, output:

```
=== FILE: NN-slug.md ===
(file content here)
=== END FILE ===
```
