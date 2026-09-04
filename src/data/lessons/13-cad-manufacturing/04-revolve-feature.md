---
title: "Revolve"
module: "13-cad-manufacturing"
lessonNumber: 4
description: "Model round, rotationally symmetric parts efficiently by revolving a half-profile sketch around an axis instead of drawing the full shape."
objectives:
  - "Explain what a revolve feature does to a sketch profile"
  - "Set up a sketch correctly for revolving, including the axis line"
  - "Explain why a revolve is more efficient than extruding a full round profile"
  - "Use a partial revolve angle for a feature that shouldn't be fully rotationally symmetric"
difficulty: "beginner"
duration: "35 minutes"
tags: ["cad", "fusion360", "solidworks", "revolve"]
---

## Revolve: Spinning a Profile Into 3D

**Revolve** creates 3D geometry by rotating a 2D sketch profile around an axis — the same relationship a lathe has to a part turned from round stock, which makes revolve the natural CAD feature for modeling any rotationally symmetric part: shafts, bushings, knobs, flanges, and any part whose cross-section is the same all the way around its axis.

## Setting Up a Sketch for Revolve

A sketch intended for a revolve feature only needs to show **half** of the part's actual cross-section — a profile from the centerline (the revolve axis) out to the part's outer edge, at whatever varying diameters the part actually has along its length. The revolve tool spins that half-profile a full 360° (or a partial angle, covered below) to generate the complete rotationally symmetric solid.

- The sketch needs a **line representing the revolve axis** — often the sketch's centerline, or an existing axis in the model — that the profile revolves around.
- The profile itself should not cross that axis line unless the design genuinely intends the resulting geometry to do so; a profile that unintentionally crosses the axis produces self-intersecting geometry the software will flag as invalid.

:::key-concept
A revolve sketch is a cross-section, not a full outline — drawing only the material on one side of the axis and letting the revolve operation generate the rest by rotation is both faster to sketch and automatically guarantees the result is truly round, rather than relying on manually drawn geometry to be symmetric.
:::

## Why Revolve Beats Extruding a Round Profile

A cylindrical shape could technically be built by extruding a circular sketch, but a revolve is the correct tool whenever a part's cross-section **varies along its length** — a shaft with several different diameters and a chamfer, for example. Sketching that varying profile once as a half cross-section and revolving it produces the whole complex round shape in a single feature, where achieving the same result with extrudes alone would require several separate extrude features, each handling one section of the varying diameter.

## Partial Revolve Angles

A revolve doesn't have to sweep the full 360°. Setting a partial angle — 180°, 270°, or any other value — produces a feature that's rotationally symmetric only through that portion of a full rotation, useful for a part or feature that's genuinely round in cross-section but doesn't extend all the way around, like a bracket that only occupies half of a circular sweep.

:::pro-tip
A partial revolve is also a useful way to inspect a model's internal geometry during design — temporarily revolving only 270° instead of 360° opens up a "cutaway" view into a rotationally symmetric part, letting internal features be checked visually without needing a separate section view.
:::

## Self-Check Questions

**1. What does a revolve feature do to a sketch profile?**

<details>
<summary>Show Answer</summary>

It rotates the profile around a specified axis to generate 3D geometry — the natural feature for modeling rotationally symmetric parts.
</details>

**2. How much of a rotationally symmetric part's cross-section does a revolve sketch typically need to show?**

<details>
<summary>Show Answer</summary>

Only half — a profile from the revolve axis out to the part's outer edge — since the revolve operation generates the rest of the solid by rotating that half-profile around the axis.
</details>

**3. Why is a revolve generally more efficient than building the same rotationally symmetric shape from multiple extrudes?**

<details>
<summary>Show Answer</summary>

A single revolve sketch, drawn once as a half cross-section, can capture a part's entire varying diameter profile along its length in one feature, where extrudes alone would need a separate feature for each varying section.
</details>

**4. What happens if a revolve sketch's profile crosses the revolve axis unintentionally?**

<details>
<summary>Show Answer</summary>

It produces self-intersecting geometry that the software flags as invalid, since the profile is only meant to represent material on one side of the axis unless the design genuinely intends it to cross.
</details>

**5. What is one practical use of a partial (less than 360°) revolve angle beyond modeling a genuinely partial part?**

<details>
<summary>Show Answer</summary>

Temporarily revolving less than the full 360° creates a cutaway view into a rotationally symmetric part's internal geometry, useful for visual inspection during design without needing a separate section view.
</details>
