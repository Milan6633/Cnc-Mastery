---
title: "Why GD&T: Function-Based Dimensioning vs. Coordinate Tolerancing"
module: "14-gdt"
lessonNumber: 1
description: "Understand why GD&T exists — controlling a feature's actual function instead of just its X/Y coordinates — and the ambiguity problem it solves."
objectives:
  - "Explain the coordinate (plus/minus) tolerancing approach and its limitations"
  - "Explain what 'function-based' dimensioning means in GD&T"
  - "Identify the square (rectangular) tolerance zone problem coordinate tolerancing creates"
  - "Explain why GD&T reduces ambiguity in how a print is interpreted"
difficulty: "intermediate"
duration: "50 minutes"
tags: ["gdt", "tolerancing", "asme-y14.5"]
---

## Coordinate (Plus/Minus) Tolerancing

The general tolerance block covered in the blueprint reading module — a dimension toleranced with a simple plus/minus value, like 50 ± 0.3 mm — is **coordinate tolerancing**: every dimension controlled independently, each with its own tolerance, typically applied along the X and Y axes from some reference point. It's simple to read and simple to dimension, and it works fine for a great many features. But it has a specific, well-known geometric problem when applied to locating a feature like a hole.

## The Square Tolerance Zone Problem

Locating a hole's position with independent X and Y coordinate tolerances — say, ±0.1 mm on each — doesn't actually produce a circular zone of ±0.1 mm around the hole's true position. It produces a **square** tolerance zone, 0.2 mm on each side, because X and Y are controlled entirely independently of each other.

:::key-concept
A hole whose position error is entirely in the X direction, right at the edge of a square X/Y tolerance zone, can actually be positioned farther from true position than a hole whose error is split diagonally between X and Y — even though both might be described as "within tolerance" by their independent X and Y limits. The square zone allows more total position error at its corners than a circular function actually needs or intends.
:::

This isn't just a technicality — it means coordinate tolerancing on a hole location can pass a part whose actual mating fit is worse than intended (at the corners of the square zone) while unnecessarily rejecting some parts whose actual position error, though larger in one axis, would have fit perfectly fine.

## Function-Based Dimensioning

GD&T (Geometric Dimensioning and Tolerancing, standardized in the U.S. under ASME Y14.5) takes a different approach: instead of controlling X and Y independently, a **position tolerance** defines a genuinely circular (or otherwise function-matched) tolerance zone that reflects how the feature actually needs to perform — how it needs to mate with another part, or clear an obstruction, or align with another feature. The tolerance is defined around the feature's actual functional requirement, not around an arbitrary independent-axis coordinate system.

:::pro-tip
The core question GD&T is built to answer is "does this feature work?" rather than "does this feature measure the right X and Y coordinates?" Keeping that functional question in mind makes reading and applying every geometric control covered later in this module easier — each one exists to control some specific aspect of how a feature actually performs, not just how it's numerically dimensioned.
:::

## Reducing Ambiguity

Coordinate tolerancing also leaves real ambiguity in how a print should be interpreted — which surface is the reference for a given dimension isn't always explicit, and different people can reasonably read the same coordinate-toleranced print slightly differently. GD&T's feature control frames (covered in the next lesson) and formal datum system (covered later in this module) exist specifically to remove that ambiguity: every toleranced feature has an explicit, standardized, unambiguous statement of what's being controlled, relative to exactly which reference, and by how much.

## Self-Check Questions

**1. What tolerance zone shape does independently toleranced X and Y coordinate dimensioning actually produce for a hole's position?**

<details>
<summary>Show Answer</summary>

A square (rectangular) zone, not a circular one — because X and Y are controlled entirely independently of each other, even though a ±0.1 mm tolerance on each might suggest a circular ±0.1 mm zone.
</details>

**2. Why can the square tolerance zone from coordinate tolerancing be a functional problem?**

<details>
<summary>Show Answer</summary>

A hole whose position error concentrates in one axis can sit at a corner of the square zone, farther from true position than the intended circular tolerance actually allows — potentially passing a part with a worse actual mating fit than intended.
</details>

**3. What does "function-based dimensioning" mean in the context of GD&T?**

<details>
<summary>Show Answer</summary>

Defining a tolerance zone that reflects how a feature actually needs to perform — mate with another part, clear an obstruction, align with a related feature — rather than controlling arbitrary independent X and Y coordinates.
</details>

**4. What core question does GD&T aim to answer about a toleranced feature, according to this lesson?**

<details>
<summary>Show Answer</summary>

"Does this feature work?" — whether it functions correctly — rather than simply "does this feature measure the right coordinates?"
</details>

**5. Besides the tolerance zone shape problem, what other issue does GD&T's formal system address that coordinate tolerancing leaves unresolved?**

<details>
<summary>Show Answer</summary>

Ambiguity in interpretation — which reference surface a dimension is actually measured from isn't always explicit in coordinate tolerancing, while GD&T's feature control frames and formal datum system make that reference explicit and standardized.
</details>
