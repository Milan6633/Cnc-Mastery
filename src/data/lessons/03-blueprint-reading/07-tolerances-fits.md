---
title: "Tolerances and Fits Introduction"
module: "03-blueprint-reading"
lessonNumber: 7
description: "Read bilateral, unilateral, and limit tolerances — plus general tolerance blocks and ISO fit designations."
objectives:
  - "Read bilateral, unilateral, and limit tolerances"
  - "Apply the ISO 2768 general tolerance table"
  - "Distinguish clearance, interference, and transition fits"
  - "Recognize H7/g6 and similar fit designations on a print"
duration: "45 minutes"
difficulty: "beginner"
tags: ["blueprint", "tolerances", "fits", "ISO-2768"]
---

## Why Tolerances Exist

No machine can make a part exactly to the number on the drawing. Temperature, tool wear, machine rigidity, and measurement error all introduce tiny variations. Tolerances are the engineer's answer: **how much variation is acceptable** before the part stops working.

Tolerances also cost money. A ±0.5 mm dimension is cheap to hold; ±0.005 mm needs grinding, special machines, and slow inspection. The engineer assigns tight tolerances only where the function demands it.

:::key-concept
A tolerance defines the **acceptable window** for a dimension. The machinist's goal is to hit the middle of the window (the nominal) — but any value inside the window is a good part.
:::

## Reading a Toleranced Dimension

Three common ways to write a tolerance:

| Style | Example | Meaning |
|---|---|---|
| Bilateral | 25 ±0.05 | 24.95 to 25.05 |
| Unilateral | 25 +0.05 / -0 | 25.00 to 25.05 |
| Limit | 25.05 / 24.95 | 24.95 to 25.05 (both limits given) |

- **Bilateral** — symmetric around nominal (most common)
- **Unilateral** — tolerance goes one way only (e.g., a press-fit diameter may only be allowed larger)
- **Limit dimensions** — the two acceptable sizes are written directly; nominal is the midpoint

:::warning
Read unilateral tolerances carefully — machining to the wrong side of the window scrapes the part. With +0.05 / -0, a dimension of 24.98 is **out of spec**, even though it's only 0.02 off nominal.
:::

## The General Tolerance Block

Most dimensions have no explicit tolerance. Their limits come from the **general tolerance block** in the title block, which is often specified by **ISO 2768**.

ISO 2768-1 defines tolerance classes for linear dimensions (mm):

| Dimension range (mm) | Class m | Class f | Class c |
|---|---|---|---|
| 0.5 – 3 | ±0.1 | ±0.05 | ±0.2 |
| 3 – 6 | ±0.1 | ±0.05 | ±0.3 |
| 6 – 30 | ±0.2 | ±0.1 | ±0.5 |
| 30 – 120 | ±0.3 | ±0.15 | ±0.8 |
| 120 – 400 | ±0.5 | ±0.2 | ±1.2 |
| 400 – 1000 | ±0.8 | ±0.3 | ±2.0 |

Class **m** (medium) is the most common default. A title block stating "ISO 2768-m" means every undimensioned-tolerance dimension follows the class m table.

:::key-concept
**Specific tolerances always override general tolerances.** If the title block says ±0.3 but a dimension shows 50 ±0.02, the 50 ±0.02 wins. The general block is the default; the dimension is the exception.
:::

## What Tolerances Mean for Machining

When you program and machine a toleranced feature:

1. Find the **nominal** (middle of the window)
2. Machine to nominal — that puts you in the center with room on both sides
3. **Measure and verify** — compare the actual size to the window, not just to nominal
4. Watch out for tool wear and thermal growth that drift you toward one edge of the window

:::pro-tip
Don't machine to the edge of a tolerance window on purpose ("as big as allowed"). Tool wear only makes things bigger/smaller from there, and a worn tool can push you out of spec mid-run. Aim for nominal, always.
:::

## Introduction to Fits

When two parts assemble, the relationship between hole and shaft is a **fit**:

- **Clearance fit** — shaft always smaller than hole (shaft slides)
- **Interference fit** — shaft always larger than hole (press-fit, holds without fasteners)
- **Transition fit** — could be either, depending on actual sizes

Fits are often specified with tolerance classes, e.g., **Ø20 H7/g6**:

- **H7** — the hole tolerance (H = hole, 7 = tolerance grade)
- **g6** — the shaft tolerance (g = shaft, 6 = tolerance grade)
- H7/g6 is a classic clearance fit (sliding fit)

Fits are covered in depth in Module 04 (Measurement) and Module 14 (GD&T). For now, recognize that letter+number pairs after a Ø are fit specifications, not extra dimensions.

## Self-Check Questions

**1. What is the difference between a bilateral and a unilateral tolerance?**

<details>
<summary>Show Answer</summary>

A bilateral tolerance is symmetric around nominal (25 ±0.05 → 24.95–25.05). A unilateral tolerance goes only one way from nominal (25 +0.05/-0 → 25.00–25.05).
</details>

**2. A print states "ISO 2768-m". A dimension reads 80 with no specific tolerance. What is the acceptable range?**

<details>
<summary>Show Answer</summary>

Class m for 30–120 mm is ±0.3, so the range is 79.7 to 80.3 mm.
</details>

**3. Why aim for nominal instead of the edge of the tolerance window?**

<details>
<summary>Show Answer</summary>

Because machining at the edge leaves no room for tool wear, thermal expansion, or measurement error. Any drift then pushes the part out of spec. Machining to nominal keeps you safely inside the window.
</details>
