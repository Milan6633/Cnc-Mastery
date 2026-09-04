---
title: "Sweep"
module: "13-cad-manufacturing"
lessonNumber: 5
description: "Model a constant cross-section that follows a curved path — like a tube, a hose fitting, or a formed bracket — with the sweep feature."
objectives:
  - "Explain what a sweep feature needs — a profile and a path — and how they relate"
  - "Explain why a swept profile's cross-section stays constant along a curved path"
  - "Compare a sweep to an extrude in terms of what kind of path each follows"
  - "Recognize a part that calls for a sweep rather than a simpler extrude or revolve"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cad", "fusion360", "solidworks", "sweep"]
---

## Sweep: A Profile Following a Path

An extrude projects a profile along a straight line; a revolve rotates a profile around an axis. **Sweep** generalizes this further: it moves a profile along an arbitrary **path**, which can be curved, three-dimensional, and far more complex than a straight line or a circular arc — producing a constant cross-section that follows wherever that path goes.

## Profile and Path

A sweep feature always needs two separate sketch elements:

- **Profile** — a 2D sketch defining the cross-section shape that will be extruded along the path (a circle for a round tube, a rectangle for a formed bracket's cross-section, and so on).
- **Path** — a separate sketch (or an edge of existing geometry) defining the curve the profile travels along. The path can be a simple 2D curve or a fully three-dimensional curve, depending on the part being modeled.

:::key-concept
A sweep's profile stays a constant shape and size at every point along the path — what changes is only the profile's position and orientation as it travels. This is what makes sweep the right tool for a constant-cross-section part that follows a curve, and the wrong tool for a shape whose cross-section actually changes size along its length (that's what loft, covered next, is for).
:::

## Extrude vs. Sweep

Extrude and sweep are really the same underlying idea — move a profile along a path — with extrude being a specific, simpler case where that path happens to be a straight line perpendicular to the sketch plane. Sweep is the general tool for when the path needs to curve, bend, or move through three dimensions in ways a simple extrude can't represent.

## When a Part Calls for a Sweep

Sweep is the right feature whenever a part has a **consistent cross-section that follows a curved route** — a formed tube or pipe, a wire or cable channel, a curved bracket with a constant profile along its bend, or a gasket groove that follows a non-straight edge. Trying to build the same geometry with extrudes and multiple angled cuts is possible for simple cases but becomes impractical — and loses the parametric link to the path — as the curve gets more complex.

:::pro-tip
When a path is defined by an existing edge or curve elsewhere in the model, referencing that edge directly as the sweep path (rather than re-sketching a matching curve) keeps the swept feature parametrically linked to that geometry — if the referenced edge's shape changes later, the sweep updates automatically instead of needing to be re-sketched.
:::

## Self-Check Questions

**1. What two separate sketch elements does a sweep feature require?**

<details>
<summary>Show Answer</summary>

A profile (the 2D cross-section shape) and a path (the curve that profile travels along) — the profile is extruded along the path to produce the swept geometry.
</details>

**2. What stays constant, and what changes, as a sweep's profile travels along its path?**

<details>
<summary>Show Answer</summary>

The profile's shape and size stay constant; only its position and orientation change as it follows the path.
</details>

**3. How is a sweep related to an extrude, conceptually?**

<details>
<summary>Show Answer</summary>

Both move a profile along a path to create 3D geometry — an extrude is really a specific case of sweep where the path is a straight line perpendicular to the sketch plane, while sweep generalizes to any curved or 3D path.
</details>

**4. What kind of part is a good candidate for a sweep feature?**

<details>
<summary>Show Answer</summary>

A part with a consistent cross-section that follows a curved route — a formed tube, a cable channel, or a curved bracket with a constant profile along its bend, for example.
</details>

**5. Why does referencing an existing edge as a sweep path, rather than re-sketching a matching curve, keep the model more maintainable?**

<details>
<summary>Show Answer</summary>

It keeps the swept feature parametrically linked to that edge's actual geometry — if the referenced edge changes shape later, the sweep updates automatically instead of needing to be manually re-sketched to match.
</details>
