---
title: "Extrude: Bosses, Cuts, and Direction Options"
module: "13-cad-manufacturing"
lessonNumber: 3
description: "Turn a 2D sketch into 3D geometry with extrude — adding material as a boss or removing it as a cut, in one or both directions."
objectives:
  - "Explain what an extrude feature does to a sketch profile"
  - "Distinguish an extrude that adds material (boss) from one that removes it (cut)"
  - "Compare distance, symmetric, and to-surface extrude termination options"
  - "Explain when extruding in both directions from the sketch plane is useful"
difficulty: "beginner"
duration: "40 minutes"
tags: ["cad", "fusion360", "solidworks", "extrude"]
---

## Extrude: Pushing a Sketch Into 3D

**Extrude** is the most fundamental feature operation in parametric modeling: it takes a closed 2D sketch profile and projects it along a straight line, perpendicular to the sketch plane by default, to create 3D volume. A rectangular sketch extruded a given distance produces a rectangular block; a circular sketch extruded produces a cylinder.

## Boss (Add Material) vs. Cut (Remove Material)

Every extrude operates in one of two modes relative to existing geometry:

- **Boss (add)** — the extruded volume is added to the existing model, building up new material in the shape of the sketch profile.
- **Cut (remove)** — the extruded volume is subtracted from the existing model, removing material in the shape of the sketch profile, projected through the part.

The very first feature in a model is necessarily a boss extrude (or another add-material feature), since there's no existing geometry yet to cut into. Every extrude after that can be either, depending on what the sketch and the surrounding geometry call for.

:::key-concept
An extrude cut isn't a separate tool from an extrude boss — it's the same operation, applied in the opposite direction relative to existing material. Understanding extrude as "project this profile, then either add or remove what it sweeps through" covers both cases with one mental model.
:::

## Termination Options

An extrude needs to know how far, and in what direction, to project the sketch profile:

- **Distance** — extrude a specific numeric distance from the sketch plane, the most direct and common option.
- **Symmetric** — extrude the specified distance equally in both directions from the sketch plane, useful when a feature should be centered on the plane it was sketched on rather than growing entirely to one side.
- **To surface / to next** — extrude until the geometry reaches a specific existing surface or face, rather than a fixed numeric distance — useful when a feature's correct depth is defined by another part of the geometry rather than an independent dimension, so the two stay linked if that reference geometry changes later.

## Extruding in Both Directions

Some extrude tools allow independently different distances (or different termination conditions) on each side of the sketch plane simultaneously — rather than a single symmetric distance, one side might extrude a fixed distance while the other extrudes to a surface. This is useful when a feature genuinely needs to grow in both directions from its sketch plane, but not symmetrically — a boss that needs to reach a specific mating face on one side while extending a simple fixed distance on the other, for example.

:::pro-tip
Favor a "to surface" or "to next" termination over a hardcoded distance whenever a feature's depth is really defined by another feature's position, not an independent value. This keeps the two features linked through the model's actual geometry — if the referenced surface moves, the extrude updates with it, rather than needing a manual dimension update to stay correct.
:::

## Self-Check Questions

**1. What does an extrude feature fundamentally do to a 2D sketch profile?**

<details>
<summary>Show Answer</summary>

It projects the profile along a straight line (perpendicular to the sketch plane by default) to create 3D volume.
</details>

**2. What determines whether an extrude adds material or removes it?**

<details>
<summary>Show Answer</summary>

Whether it's set to boss (add) mode, building new material in the sketch's shape, or cut (remove) mode, subtracting that shape from existing geometry — the same underlying operation applied in opposite directions relative to existing material.
</details>

**3. When would you use a "to surface" termination instead of a fixed distance for an extrude?**

<details>
<summary>Show Answer</summary>

When the feature's correct depth is actually defined by another part of the geometry rather than an independent value — this keeps the two features linked, so the extrude updates automatically if the referenced surface's position changes.
</details>

**4. Why must the very first feature in a model be a boss (add-material) extrude rather than a cut?**

<details>
<summary>Show Answer</summary>

There's no existing geometry yet for a cut to remove material from — the first feature has to add material before anything can be subtracted from it.
</details>

**5. What does a symmetric extrude termination do differently from a standard distance extrude?**

<details>
<summary>Show Answer</summary>

It extrudes the specified distance equally in both directions from the sketch plane, centering the feature on that plane rather than growing entirely to one side.
</details>
