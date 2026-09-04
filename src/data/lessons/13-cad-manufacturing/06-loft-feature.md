---
title: "Loft"
module: "13-cad-manufacturing"
lessonNumber: 6
description: "Blend between two or more different cross-section profiles smoothly with a loft, for shapes that change form along their length."
objectives:
  - "Explain what a loft feature does differently from a sweep"
  - "Set up multiple profile sketches on different planes for a loft"
  - "Explain what guide curves add to a loft's control over the blended shape"
  - "Recognize when loft is the right tool versus sweep or extrude"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cad", "fusion360", "solidworks", "loft"]
---

## Loft: Blending Between Different Shapes

A sweep, covered in the previous lesson, moves a **constant** cross-section along a path. **Loft** solves a different problem: it smoothly blends **between two or more different profiles**, each sketched on its own plane, creating a transitional shape that morphs from one cross-section to the next. A part that transitions from a round cross-section at one end to a square cross-section at the other — a duct fitting, a transition piece, an organic-shaped handle — is a natural loft application, and something neither extrude, revolve, nor sweep alone can produce.

:::key-concept
Sweep keeps the profile shape constant while moving it along a path. Loft keeps the path implicit and instead blends the profile shape itself, from one sketched cross-section to the next. The two features solve opposite halves of the same general problem — one holds shape constant and varies position, the other holds position roughly fixed (or path-guided) and varies shape.
:::

## Setting Up Multiple Profiles

A loft requires at least two profile sketches, each on its own plane (or on an existing face), positioned where the transitional shape should start and end. Additional intermediate profiles can be added between the first and last to control the shape more precisely as it transitions — useful when a simple two-profile blend doesn't produce the intended shape through the middle of the transition.

The software calculates a smooth transitional surface connecting the profiles in sequence, in the order they're selected — which matters, since lofting through profiles in the wrong order produces a different, usually incorrect, result.

## Guide Curves

By default, a loft interpolates between profiles using its own internal logic for how points on one profile correspond to points on the next — which can produce an unexpected or undesirable shape, particularly when the profiles differ significantly (a circle blending to a rectangle, for example, offers many possible ways to connect corresponding points).

**Guide curves** — additional sketched curves that the loft is constrained to pass through along its length — give the modeler direct control over the transitional shape, rather than relying entirely on the software's default interpolation. A guide curve running from a specific point on the first profile to a specific point on the last profile forces the blended surface to actually pass through it, shaping the transition explicitly instead of leaving it entirely to automatic interpolation.

:::pro-tip
When a loft's default result looks pinched, twisted, or otherwise not what was intended — a common issue when blending between very different profile shapes — adding guide curves is usually the fix, rather than repeatedly adjusting the profiles themselves and hoping for a better automatic result.
:::

## Loft vs. Sweep vs. Extrude

Choosing the right feature comes down to what's actually changing in the part:

| Feature | What stays constant | What varies |
|---|---|---|
| Extrude | Cross-section | Straight-line position only |
| Revolve | Cross-section | Position, rotating around an axis |
| Sweep | Cross-section | Position, along an arbitrary path |
| Loft | (Nothing fixed) | Cross-section shape, between profiles |

## Self-Check Questions

**1. What is the key difference between what a sweep does and what a loft does?**

<details>
<summary>Show Answer</summary>

A sweep moves a constant cross-section along a path. A loft blends between two or more different profile shapes, creating a transitional form rather than keeping the cross-section fixed.
</details>

**2. What kind of part is a natural application for a loft feature?**

<details>
<summary>Show Answer</summary>

A part that transitions between genuinely different cross-section shapes along its length — such as round-to-square duct transition, which extrude, revolve, or sweep alone can't produce.
</details>

**3. Why might a loft need more than just its first and last profile sketches?**

<details>
<summary>Show Answer</summary>

Intermediate profiles can be added between the first and last to control the transitional shape more precisely when a simple two-profile blend doesn't produce the intended result through the middle.
</details>

**4. What problem do guide curves solve in a loft?**

<details>
<summary>Show Answer</summary>

They give the modeler direct control over how the loft blends between profiles, forcing the surface to pass through specific points rather than relying entirely on the software's default automatic interpolation, which can produce an unexpected shape between very different profiles.
</details>

**5. If a part's cross-section stays exactly the same shape but follows a curved path, which feature is the right choice — loft or sweep?**

<details>
<summary>Show Answer</summary>

Sweep — it's built specifically for a constant cross-section following a path. Loft would be the wrong tool since it's meant for blending between different profile shapes, not maintaining one constant shape.
</details>
