---
title: "GD&T Introduction"
module: "03-blueprint-reading"
lessonNumber: 11
description: "Read feature control frames, datums, and the most common geometric tolerances — flatness, perpendicularity, and position."
objectives:
  - "Explain why GD&T exists beyond ± size tolerances"
  - "Read a feature control frame: symbol → tolerance → datums"
  - "Identify form, orientation, and location tolerance symbols"
  - "Compare GD&T position tolerance to ± location tolerance"
duration: "45 minutes"
difficulty: "intermediate"
tags: ["blueprint", "GD&T", "datums", "position", "feature-control-frame"]
---

## Beyond Size — Why GD&T Exists

A regular ± dimension controls **size** but says almost nothing about *form*, *orientation*, or *location*. A hole can be the right size and still be out of position, tilted, or egg-shaped.

**GD&T** (Geometric Dimensioning & Tolerancing) is a system of symbols that controls the *geometry* of features — how flat, how straight, how perpendicular, how accurately located. It describes **function**, not just size.

:::key-concept
Size tolerances answer "how big?" GD&T answers "how flat? how straight? how perpendicular? how accurately located?" Both can appear on the same print — size for the dimension, GD&T for the geometry.
:::

## The Feature Control Frame

The heart of GD&T is the **feature control frame** — a rectangular box attached to a feature by a leader:

```text
┌───────┬──────────┬─────────┐
│  ⌖    │  0.1     │  A  B   │
└───────┴──────────┴─────────┘
 symbol   tolerance   datums
```

Reading it left to right:

1. **Geometric characteristic symbol** — what is controlled (position ⌖, flatness ▱, etc.)
2. **Tolerance value** — how much error is allowed (0.1 mm)
3. **Datum references** — what the feature is measured from (A, then B)

If there's no datum box, the tolerance applies to the feature's own form (e.g., flatness).

## Datums — The Reference System

**Datums** are the part's reference surfaces — the "zero points" the engineer wants everything measured from. They're marked with a datum feature symbol:

- **A** — usually the primary datum (often the largest or most functional face)
- **B** — secondary datum (constrains the next direction)
- **C** — tertiary datum (locks the last degree of freedom)

:::key-concept
The machinist's setup must match the datums: if the print says position is measured from datum A (face) and datum B (edge), then you must machine and measure the part referenced from that same face and edge — not from some other surface you happened to pick.
:::

## Form Tolerances (No Datums)

| Symbol | Name | Controls |
|---|---|---|
| ▱ | Flatness | How flat a surface is |
| ― | Straightness | How straight a line/axis is |
| ○ | Circularity | How round a circle is |
| ⌭ | Cylindricity | How perfect a cylinder is (roundness + straightness) |

## Orientation Tolerances (Need Datums)

| Symbol | Name | Controls |
|---|---|---|
| ⊥ | Perpendicularity | How square a feature is to a datum |
| ∥ | Parallelism | How parallel a feature is to a datum |
| ∠ | Angularity | How accurately a feature sits at an angle to a datum |

## Location Tolerances (Need Datums)

| Symbol | Name | Controls |
|---|---|---|
| ⌖ | Position | Where a feature is located relative to datums (most common!) |
| ◎ | Concentricity | How centered one circle is to another |
| ⌯ | Symmetry | How symmetric features are about a datum |

:::pro-tip
**Position (⌖) is the symbol you'll see most.** It locates holes and features in a round tolerance zone instead of a square ± box — which usually gives the machinist *more* allowable error than the equivalent ± dimensions.
:::

*Note: Concentricity and Symmetry were removed in ASME Y14.5-2018 and replaced with Position, but you will still encounter them on older prints and on drawings that follow earlier revisions of the standard.*

## Position vs ± Location

Compare two ways to locate a hole at 25 from an edge:

- **± tolerance:** 25 ±0.1 creates a *square* zone (0.2 × 0.2) — errors in X and Y add up at the corner
- **Position tolerance ⌖ 0.2 A B:** creates a *circular* zone Ø0.2 — the hole center can be anywhere inside that circle

The circular zone is often more generous and always more functional. That's the whole point of GD&T.

## What This Means for the Machinist

- **Set up to the datums**, not to convenient edges
- A GD&T callout is a **machining and inspection instruction**, like a tolerance
- Keep features inside the tolerance zone — machine to nominal
- If a feature has both a size tolerance and a position tolerance, both must be met

:::warning
Don't panic when you see GD&T — this lesson is only the alphabet. Module 14 covers GD&T in depth with calculation, bonus tolerances, and inspection. For now, learn to read the frame: symbol → tolerance → datums.
:::

## Self-Check Questions

**1. What does a feature control frame tell you?**

<details>
<summary>Show Answer</summary>

It specifies the geometric characteristic being controlled (symbol), the allowable error (tolerance value), and the reference system (datums) the feature is measured from, read left to right.
</details>

**2. Why are datums important for the machinist?**

<details>
<summary>Show Answer</summary>

Because the part must be set up and measured from the same reference surfaces (datums) the engineer used. Using a different surface as reference can make a perfectly machined feature appear out of position.
</details>

**3. What is the difference between a ± position tolerance and a GD&T position tolerance?**

<details>
<summary>Show Answer</summary>

A ± tolerance creates a square zone and lets X and Y errors combine at the corners. A GD&T position tolerance creates a circular tolerance zone, which is usually more generous and represents the true functional requirement.
</details>
