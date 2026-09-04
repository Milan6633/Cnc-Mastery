---
title: "Location: Position (True Position)"
module: "14-gdt"
lessonNumber: 10
description: "Locate a feature's actual center within a cylindrical tolerance zone around its theoretically exact true position — GD&T's most-used control."
objectives:
  - "Explain what 'true position' means as a theoretical reference"
  - "Describe the cylindrical tolerance zone position tolerance defines"
  - "Explain why basic (untoleranced, boxed) dimensions define true position"
  - "Explain why position is GD&T's most commonly applied location control"
difficulty: "advanced"
duration: "45 minutes"
tags: ["gdt", "position", "true-position", "location", "asme-y14.5"]
---

## True Position: A Theoretical, Perfect Location

**True position** is the theoretically exact, perfect location a feature is meant to be at — defined by **basic dimensions**, shown on a print enclosed in a box, that carry no tolerance of their own at all. A basic dimension isn't an oversight or a missing tolerance — it's a deliberate statement that this dimension defines the perfect, theoretical target, with all of the actual allowed variation controlled separately by the position tolerance in the feature's control frame.

:::key-concept
A boxed (basic) dimension and a position tolerance work as a pair: the basic dimension says exactly where the feature is theoretically supposed to be, and the position tolerance says how far the actual feature is allowed to deviate from that theoretical point. Neither makes sense without the other — a basic dimension alone would imply zero tolerance, which almost never reflects reality.
:::

## The Cylindrical Tolerance Zone

**Position** tolerance, applied to a hole or a similar round feature (almost always with the diameter symbol covered in the feature control frame lesson), defines a **cylindrical tolerance zone** centered on true position — the feature's actual axis must fall entirely within that cylinder, regardless of which direction it deviates in.

This directly solves the square-tolerance-zone problem covered in the very first lesson of this module: a circular (cylindrical, in 3D) zone matches the actual functional requirement of a round feature — equal tolerance in every direction — in a way that independent X and Y coordinate tolerances never could.

## Why Position Is the Most-Used Location Control

Position tolerance is applied constantly across real prints because it directly addresses the single most common location requirement in mechanical design: **does this hole (or feature) let a mating part assemble correctly**. Combined with the MMC modifier and bonus tolerance covered earlier in this module, position tolerance also offers a genuine manufacturing advantage over the alternative location controls (concentricity and symmetry, covered in the next lesson) — it's straightforward to inspect, whether by CMM or, at MMC, by a functional gauge.

:::pro-tip
When a print calls out a hole's location and a specific fit is functionally required, position tolerance at MMC is very often the right default choice — it matches the actual functional requirement (assembly clearance), earns legitimate bonus tolerance as the hole departs from its worst-case size, and is straightforward and economical to inspect. Reach for concentricity or symmetry only when position genuinely doesn't fit the specific relationship being controlled.
:::

## Reading a Position Callout in Context

A complete position callout combines everything covered in this module so far: a feature control frame with the position symbol, a diameter-symbol tolerance value (with an MMC or LMC modifier if applicable), and datum references in precedence order — evaluated against a true position defined by basic dimensions elsewhere on the print. Reading it correctly means pulling together the feature control frame structure, the datum reference frame, and the material condition modifier all at once, exactly the set of concepts this module has built up lesson by lesson.

## Self-Check Questions

**1. What does a basic (boxed) dimension on a print actually represent?**

<details>
<summary>Show Answer</summary>

A theoretically exact, perfect target location with no tolerance of its own — the actual allowed deviation from that target is controlled separately by the position tolerance in the feature's control frame.
</details>

**2. What shape is the tolerance zone that position tolerance defines for a hole?**

<details>
<summary>Show Answer</summary>

A cylinder, centered on true position — the hole's actual axis must fall entirely within that cylindrical zone, regardless of which direction it deviates in.
</details>

**3. How does position tolerance's cylindrical zone solve the square-zone problem covered in the first lesson of this module?**

<details>
<summary>Show Answer</summary>

A circular (cylindrical) zone gives equal tolerance in every direction, matching a round feature's actual functional requirement — unlike independent X/Y coordinate tolerancing, which produces a square zone that allows more error at its corners than the function actually intends.
</details>

**4. Why is position tolerance at MMC particularly practical for manufacturing and inspection?**

<details>
<summary>Show Answer</summary>

It earns legitimate bonus tolerance as the feature departs from its worst-case MMC size, and it can be inspected economically with a fixed functional gauge, unlike controls that require establishing a feature's true axis independent of size.
</details>

**5. What elements does a complete position callout combine, drawing on the whole module so far?**

<details>
<summary>Show Answer</summary>

The feature control frame structure (characteristic symbol, tolerance value with diameter symbol and material modifier), datum references in precedence order, and a true position defined by basic dimensions elsewhere on the print.
</details>
