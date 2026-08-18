---
title: "Dimensioning Practices"
module: "03-blueprint-reading"
lessonNumber: 6
description: "Read linear dimensions, diameters, radii, and hole callouts — and understand chain, baseline, and ordinate dimensioning."
objectives:
  - "Identify the parts of a dimension (line, extension, arrowheads, value)"
  - "Read Ø (diameter) and R (radius) callouts correctly"
  - "Distinguish chain, baseline, and ordinate dimensioning styles"
  - "Extract hole positions and sizes from a print"
duration: "40 minutes"
difficulty: "beginner"
tags: ["blueprint", "dimensioning", "diameter", "baseline", "ordinate"]
---

## What Dimensions Tell You

Dimensions are the numbers that make a print machinable. They give two kinds of information:

- **Size** — how big a feature is (width 50, Ø10 hole)
- **Location** — where a feature sits (hole center at 25 from the left edge)

Without dimensions, the views only show *shape*. With dimensions, they show a makeable part.

## The Parts of a Dimension

Every dimension has the same anatomy:

- **Dimension line** — a thin line with arrowheads at both ends, showing what distance is being measured
- **Extension lines** — thin lines that reach from the part's edges to the dimension line (they don't touch the part, a small gap is standard)
- **Arrowheads** — at the ends of the dimension line
- **The value** — the number (in mm on metric prints)
- **Leader** — a thin angled line with an arrowhead pointing to a feature, used for notes like "Ø10" or "R12.5"

```text
    50
  ←─────→
  |     |   <- extension lines
  └─────┘   <- part edge
```

:::key-concept
The **value is always the truth**, even if the drawing looks bigger or smaller on paper. Scale, printer settings, and folds do not change the dimension. Never measure the drawing — read the number.
:::

## Linear Dimensions

Linear dimensions are written parallel to the dimension line, in millimeters on metric prints:

- Whole millimeters: 50
- Decimal: 50.5 (one decimal is common for general dimensions)
- Precision: 50.00 (two decimals — watch for a tighter tolerance)

## Diameters and Radii

- **Ø25** — a 25 mm diameter (the Ø symbol means diameter; used for holes and round features)
- **R12.5** — a 12.5 mm radius (radius dimension lines point at the arc's center, with only one arrowhead)
- Ø callouts always have the Ø symbol — a bare number on a round feature is incomplete

:::pro-tip
Radius R and diameter Ø are different things! Ø25 = R12.5. Confusing the two makes a hole twice as big (or small) as intended. Always read the symbol.
:::

## Holes — Through and Blind

Hole callouts combine size and depth:

- **Ø10 THRU** — a 10 mm hole all the way through the part
- **Ø10 × 20 DP** — a 10 mm hole, 20 mm deep (blind hole)
- **Ø10 H7** — a 10 mm hole with an H7 tolerance class (precision reamed fit, covered in Lesson 7)

## Dimensioning Styles

| Style | How it works | Best for |
|---|---|---|
| Chain | Each dimension starts where the last one ends | Short simple runs of holes |
| Baseline | All dimensions from one reference (datum) edge | Accuracy — tolerances don't add up |
| Ordinate | X/Y coordinates from a corner origin, no dimension lines | CNC programming — numbers go straight into the program |

:::key-concept
Baseline and ordinate dimensioning are **the machinist's friends**: every feature is located from a single reference, so errors don't accumulate. Chain dimensioning adds tolerances together, which can push features out of spec.
:::

## Rules of Good Dimensioning

Good prints follow standard rules — and knowing them helps you spot problems:

- Dimension the **most descriptive view**
- **Never dimension hidden lines** — dimension the visible feature instead
- **Never duplicate dimensions** — one number, one place (duplicates can disagree)
- Dimension **from datums or finished edges**, not from rough cast surfaces
- **Avoid closed loops** — if every dimension in a chain is given, a tolerance conflict is built in
- Group dimensions around a feature for clarity

## Pulling Numbers Off a Print — Worked Example

A plate with two holes, using chain dimensioning:

```text
          25       40
   |←──────→|←──────→|
   ┌────────┴───.────┐  <- hole 1 at 25 from left edge
   │            .    │
   └─────────────────┘
```

Reading it:

1. Hole 1 center is at **25 mm** from the left edge
2. Hole 2 center is **40 mm** further — at **65 mm** from the left edge
3. Both holes sit on the same horizontal center line — one Y location covers both
4. Hole sizes come from Ø callouts next to each hole

Before programming, write out a simple table: hole number → X, Y, Ø, depth. This table is exactly what becomes the CNC program.

## Self-Check Questions

**1. What is the difference between a dimension line and an extension line?**

<details>
<summary>Show Answer</summary>

The dimension line carries the arrowheads and the value, parallel to the measured distance. Extension lines are thin lines that reach from the part's edges to the dimension line to show what is being measured.
</details>

**2. Why does baseline dimensioning beat chain dimensioning for accuracy?**

<details>
<summary>Show Answer</summary>

Baseline dimensions locate every feature from a single reference edge, so each feature's tolerance applies independently. In chain dimensioning, tolerances accumulate along the chain, which can push features out of spec.
</details>

**3. A callout reads "Ø10 THRU". What does it mean?**

<details>
<summary>Show Answer</summary>

A 10 mm diameter hole machined all the way through the part. "THRU" (or a dash with no depth value) means full through-hole, not a blind hole.
</details>
