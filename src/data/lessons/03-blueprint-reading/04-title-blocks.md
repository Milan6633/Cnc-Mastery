---
title: "Title Blocks, Revision History, and Material Callouts"
module: "03-blueprint-reading"
lessonNumber: 4
description: "Read the title block — material, units, revision, tolerances, and notes — before touching a machine."
objectives:
  - "Identify all standard title block fields"
  - "Apply the general tolerance block to undimensioned features"
  - "Read the revision table and match it to the current floor revision"
  - "Interpret material callouts and general notes"
duration: "35 minutes"
difficulty: "beginner"
tags: ["blueprint", "title-block", "revision", "material", "tolerances"]
---

## The Title Block — Your First Stop

The title block is the **ID card of the part**. It lives in the bottom-right corner of the print and contains all the administrative information a machinist needs before touching material.

:::key-concept
Always read the title block **before** the views. It tells you what the part is, what material to use, what units are in effect, and what revision you are making. Reading the views first is reading backwards.
:::

## Standard Title Block Fields

| Field | What it tells you |
|---|---|
| Part name | What the part is (e.g., "Bearing Housing") |
| Part / drawing number | The unique ID for ordering and filing |
| Scale | 1:1, 1:2, 2:1 — the drawing-to-part ratio |
| Units | mm or inch — **check this first** |
| Material | 6061-T6, AISI 4140, etc. |
| General tolerance block | Default tolerances for all dimensions |
| Surface finish note | Default finish (e.g., "Ra 3.2 unless noted") |
| Drawn by / Date / Checked by | Traceability |
| Revision | Letter/number of the current version |
| Company / Project | Who owns the print |

## The General Tolerance Block

Not every dimension gets its own tolerance. The title block defines **general (default) tolerances** that apply to every dimension without a specific tolerance.

Example general tolerance block:

| Dimension range (mm) | Tolerance |
|---|---|
| 0.5 – 6 | ±0.1 |
| 6 – 30 | ±0.2 |
| 30 – 120 | ±0.3 |
| 120 – 400 | ±0.5 |

This matches the common **ISO 2768-m** class. A dimension reading 50 mm without a specific tolerance is therefore 50 ±0.3 mm. When a dimension shows its own tolerance (e.g., 50 ±0.02), the **specific tolerance overrides** the general block.

:::warning
Never assume the general tolerance. A dimension without an explicit tolerance still has one — it's in the title block. Machining 50 mm to +0.5 when the block says ±0.3 makes a scrap part.
:::

## Scale — 1:1, 1:2, 2:1

- **1:1** — the drawing is full size
- **1:2** — the drawing is half size (part is twice as big as drawn)
- **2:1** — the drawing is double size (part is half as big as drawn)
- Small details are often drawn at **5:1** or **10:1** in detail views

:::pro-tip
Never measure the paper with a ruler to get dimensions. Paper shrinks, printers stretch, and photocopies distort. The **numbers on the print are the truth** — the scale only helps you visualize size.
:::

## Revision History

The **revision table** (usually top-right of the title block) lists every change to the part:

| Rev | Date | Change |
|---|---|---|
| A | 2024-03-01 | Initial release |
| B | 2024-05-12 | Hole pattern moved 5 mm; added 2× M6 threads |
| C | 2024-08-30 | Material changed 6061-T6 → 6082-T6 |

Why machinists care:

- The shop must make the **latest revision** — an old print makes a wrong part
- If you have Rev B and the shop floor has Rev C, stop and get the current print
- Changed features are often marked with a **revision cloud** (a wavy circle) around the changed area

## Material Callouts

The title block specifies the material, often with the exact grade:

- **6061-T6** — general-purpose aluminum
- **6082-T6** — structural aluminum (common in Europe)
- **AISI 4140** — chromium-molybdenum steel, strong and tough
- **AISI 1018 / S235** — low-carbon steel, easy to machine
- **AISI 304 / 316** — stainless steels
- **Brass C360** — free-machining brass

The print may also call out **stock size** (e.g., "50 × 50 × 100 bar stock") or just the finished size — the programmer and machinist decide the raw material based on the callout.

## Notes and General Specifications

Above the title block you'll find **general notes**:

- "REMOVE ALL BURRS"
- "ALL DIMENSIONS IN MILLIMETERS"
- "SURFACE FINISH Ra 3.2 UNLESS OTHERWISE SPECIFIED"
- "BREAK SHARP EDGES 0.5 MAX"
- "PARTS TO BE ANODIZED PER SPEC X"

:::key-concept
General notes are **requirements**, not suggestions. "REMOVE ALL BURRS" means a deburring operation is part of the job. Notes can also change dimensions — a note like "MACHINE TO 49.8" overrides the drawn dimension.
:::

## Self-Check Questions

**1. What five pieces of information should you always get from the title block first?**

<details>
<summary>Show Answer</summary>

Material, units (mm or inch), revision, general tolerance block, and part number/name. Together these tell you what to make, from what, how precisely, and which version.
</details>

**2. A dimension reads 80 without a specific tolerance. The general block says ±0.3 for 30–120 mm. What is the allowed range?**

<details>
<summary>Show Answer</summary>

79.7 mm to 80.3 mm (80 ±0.3). The general tolerance from the title block applies to all dimensions without their own specific tolerance.
</details>

**3. Why should you never scale dimensions off the printed paper?**

<details>
<summary>Show Answer</summary>

Paper can shrink, printers can stretch, and copies distort. The numbers on the print are authoritative; the scale is only for visualization. Measuring the paper can produce a wrong, scrap part.
</details>
