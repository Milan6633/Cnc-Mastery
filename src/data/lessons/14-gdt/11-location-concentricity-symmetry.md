---
title: "Location: Concentricity and Symmetry"
module: "14-gdt"
lessonNumber: 11
description: "Understand concentricity and symmetry's median-point tolerance zones, and why modern practice usually replaces them with position or runout."
objectives:
  - "Define concentricity's derived median point tolerance zone"
  - "Define symmetry's derived median point requirement relative to a datum plane"
  - "Explain why concentricity and symmetry are difficult to inspect in practice"
  - "Explain why position or runout often replace concentricity and symmetry in modern practice"
difficulty: "advanced"
duration: "40 minutes"
tags: ["gdt", "concentricity", "symmetry", "location", "asme-y14.5"]
---

## Two Rarely-Specified but Important-to-Recognize Controls

Continuing the location controls from the previous lesson's coverage of position, **concentricity** and **symmetry** round out the location category. Both are less commonly specified on modern prints than position, for reasons covered later in this lesson — but recognizing them, and understanding why they've become less common, matters for reading real prints, including older ones still in use.

## Concentricity

**Concentricity** controls a feature's **derived median points** — not its surface, but the calculated center points of the feature at every cross-section along its length — requiring all of those median points to fall within a cylindrical tolerance zone centered on a datum axis.

:::key-concept
Concentricity doesn't evaluate the feature's actual surface directly the way circularity or position does — it evaluates a calculated, derived set of center points, one for each cross-section. This is a meaningfully different, and harder to establish, measurement than checking surface points directly.
:::

## Symmetry

**Symmetry** applies the same median-point logic to a different geometry: it requires the derived median points of two **opposed** features (the two sides of a slot, for example) to fall within a tolerance zone centered on a datum plane — controlling whether the feature is genuinely centered about that plane, based on its actual median geometry rather than simple two-point measurements at a few locations.

## Why They're Difficult to Inspect

Both concentricity and symmetry require establishing a feature's **derived median points or line** — which means measuring many points across the feature's actual surface and calculating the center from that full data set, rather than taking a small number of direct surface measurements the way most other controls allow. This makes both controls genuinely difficult and expensive to inspect accurately, typically requiring a CMM capable of dense point sampling, rather than a simple gauge or a handful of caliper or indicator readings.

:::warning
A part can appear to satisfy a concentricity or symmetry requirement when checked with a small number of simple measurements, while actually failing the true derived-median-point requirement — because a sparse sampling can miss the actual median point calculation the control is formally defined by. This gap between how the control is formally defined and how it's practically measured is the core reason it's fallen out of favor.
:::

## Why Modern Practice Often Substitutes Position or Runout

Because of this inspection difficulty, modern GD&T practice frequently uses **position** or **runout** (covered in the next lesson) instead of concentricity or symmetry, even when the underlying functional concern is similar — both alternatives are based on directly measurable surface points rather than a calculated derived median, making them far more practical to inspect reliably and consistently across different inspectors and equipment.

:::pro-tip
When creating a new GD&T callout, consider whether the functional concern concentricity or symmetry would address could instead be satisfied by position (referencing the same datum axis or plane) or by runout. In most cases, one of those alternatives captures the same functional intent while being dramatically easier and more repeatable to actually inspect on the shop floor.
:::

## Self-Check Questions

**1. What does concentricity's tolerance zone actually apply to — the feature's surface, or something else?**

<details>
<summary>Show Answer</summary>

Its derived median points — the calculated center points of the feature at every cross-section along its length — not the surface itself, required to fall within a cylindrical zone centered on a datum axis.
</details>

**2. What does symmetry control, and relative to what?**

<details>
<summary>Show Answer</summary>

The derived median points of two opposed features (like the two sides of a slot), required to fall within a tolerance zone centered on a datum plane.
</details>

**3. Why are concentricity and symmetry difficult and expensive to inspect accurately?**

<details>
<summary>Show Answer</summary>

They require establishing a derived median point or line from dense sampling across the feature's actual surface, rather than a small number of direct surface measurements — typically requiring a CMM capable of dense point sampling rather than a simple gauge.
</details>

**4. Why can a part appear to pass a concentricity check with sparse measurements while actually failing the formal requirement?**

<details>
<summary>Show Answer</summary>

A sparse sampling of points can miss the true derived-median-point calculation the control is formally defined by, creating a gap between how the control is easy to check informally and how it's actually defined.
</details>

**5. Why do position and runout often substitute for concentricity and symmetry in modern GD&T practice?**

<details>
<summary>Show Answer</summary>

Both are based on directly measurable surface points rather than a calculated derived median, making them far more practical and repeatable to inspect while often capturing a similar functional intent.
</details>
