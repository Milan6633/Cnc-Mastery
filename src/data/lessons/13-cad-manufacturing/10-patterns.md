---
title: "Patterns: Rectangular, Circular, and Mirror"
module: "13-cad-manufacturing"
lessonNumber: 10
description: "Repeat a feature across a grid, around an axis, or across a plane of symmetry with pattern tools, keeping every copy tied to one controlling feature."
objectives:
  - "Use a rectangular pattern to repeat a feature in one or two directions"
  - "Use a circular pattern to repeat a feature around an axis"
  - "Use a mirror feature to duplicate geometry across a plane of symmetry"
  - "Explain why patterning a feature is more maintainable than manually copying geometry"
difficulty: "beginner"
duration: "40 minutes"
tags: ["cad", "fusion360", "solidworks", "patterns", "mirror"]
---

## Repeating Geometry Without Repeating Work

Many parts have deliberately repeated features — a row of mounting holes, a ring of bolt holes, a symmetric pair of ribs. Modeling each occurrence as a completely separate, independently sketched feature works, but it's slow and fragile: changing the hole size later means editing every single copy individually, and a design change that should affect them all can easily miss one. **Pattern** and **mirror** features solve this by generating repeated copies of a feature (or several features) directly from one original, all controlled together.

## Rectangular Pattern

A **rectangular pattern** repeats a selected feature (or features) along one or two directions, at a specified spacing and count — the standard tool for a grid or row of identical features, like a line of mounting holes along an edge or a full grid of holes across a plate.

- **Spacing** can be set as a fixed distance between instances, or as a total distance divided evenly across a specified count.
- Patterning in **two directions** at once produces a full grid, rather than needing to pattern once and then pattern the result again.

## Circular Pattern

A **circular pattern** repeats a feature around a specified axis, at an angular spacing and count — the standard tool for a bolt circle, a ring of ventilation holes, or any feature that needs to repeat evenly around a center, the rotational equivalent of a rectangular pattern's grid.

:::key-concept
Both rectangular and circular patterns work the same way underneath: take one original feature, and generate additional instances of it at calculated positions, all still controlled by the same original feature's parameters. Change the original hole's diameter, and every patterned instance updates with it — they're not independent copies, they're linked repetitions.
:::

## Mirror

A **mirror** feature duplicates a feature (or an entire body) across a specified plane of symmetry, producing a reflected copy on the opposite side. This is the right tool for genuinely symmetric geometry — a pair of mounting bosses on either side of a centerline, a symmetric bracket — rather than modeling both halves independently and hoping they stay identical through every subsequent edit.

:::pro-tip
For a part that's symmetric about a plane, consider modeling only one half in detail and mirroring the rest, rather than sketching both sides from scratch. Beyond saving modeling time, this guarantees the two sides stay genuinely identical through every future edit — a hand-modeled "symmetric" pair can quietly drift apart if an edit is applied to one side and forgotten on the other.
:::

## Why Patterning Beats Manual Copying

The core advantage of pattern and mirror features over manually copying and repositioning geometry is that every instance stays **parametrically linked** to the original: a dimension change to the source feature, a spacing change to the pattern, or a plane change to a mirror all propagate automatically to every copy. Manual copies have no such relationship — each is an independent piece of geometry that has to be found and edited separately if something needs to change, and it's easy to miss one in a design with many repeated features.

## Self-Check Questions

**1. What is the difference in application between a rectangular pattern and a circular pattern?**

<details>
<summary>Show Answer</summary>

A rectangular pattern repeats a feature along one or two straight directions (a grid or row); a circular pattern repeats a feature around an axis at an angular spacing (a bolt circle or ring of features).
</details>

**2. What does a mirror feature do differently from a pattern?**

<details>
<summary>Show Answer</summary>

A mirror duplicates geometry as a reflected copy across a specified plane of symmetry, rather than repeating it at calculated positions along a direction or around an axis the way a pattern does.
</details>

**3. Why does changing a patterned feature's original source update every instance automatically?**

<details>
<summary>Show Answer</summary>

Pattern instances aren't independent copies — they remain parametrically linked to the original feature's parameters, so a change to the source propagates to every generated instance.
</details>

**4. What risk does manually copying and repositioning geometry (instead of using a pattern or mirror) introduce that a true pattern avoids?**

<details>
<summary>Show Answer</summary>

Manual copies have no parametric relationship to each other, so a design change has to be found and applied to each copy individually — it's easy to miss one, and the copies can quietly drift out of consistency over time.
</details>

**5. Why might a designer model only half of a symmetric part and mirror the rest, rather than modeling both halves independently?**

<details>
<summary>Show Answer</summary>

It saves modeling time and guarantees the two halves stay genuinely identical through every future edit — a hand-modeled symmetric pair can drift apart if an edit is applied to one side and forgotten on the other.
</details>
