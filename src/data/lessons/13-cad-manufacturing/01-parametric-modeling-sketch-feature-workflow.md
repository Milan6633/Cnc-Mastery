---
title: "Parametric Modeling: Sketches, Features, and the Design History Tree"
module: "13-cad-manufacturing"
lessonNumber: 1
description: "Understand what makes parametric CAD different from simple 3D drawing — a recorded, editable history of features built on sketches."
objectives:
  - "Explain what 'parametric' means in the context of 3D CAD modeling"
  - "Describe the relationship between a sketch and a feature"
  - "Explain what the design history tree records and why edit order matters"
  - "Explain why editing an early feature can affect features created after it"
difficulty: "beginner"
duration: "50 minutes"
tags: ["cad", "fusion360", "solidworks", "parametric-modeling"]
---

## Parametric Modeling vs. Simple 3D Drawing

A parametric CAD model isn't just a 3D shape — it's a **recorded sequence of operations** that produced that shape, with every dimension and relationship still editable after the fact. Change a single dimension on a feature created early in the model, and every feature built afterward that depends on it updates automatically to match. This is fundamentally different from a simple 3D drawing tool, where a shape is just geometry with no memory of how it was built or why it has the dimensions it does.

This is the core reason CAD for manufacturing uses parametric modeling (in tools like Fusion 360, SolidWorks, or NX) almost universally: a design changes constantly during development, and re-drawing a model from scratch for every revision isn't practical on a real project timeline.

## Sketches: The Foundation of Most Features

Most 3D features start from a **sketch** — a 2D profile drawn on a flat plane (or a flat face of existing geometry), made of lines, arcs, circles, and other 2D geometry, constrained and dimensioned to define its exact size and shape. The sketch itself has no thickness or volume; it becomes 3D geometry only once a feature operation (extrude, revolve, and others covered in upcoming lessons) is applied to it.

:::key-concept
A sketch defines *what shape*, and a feature operation defines *how that shape becomes 3D geometry*. Separating these two steps is what lets a single sketch profile be reused — extruded one way today, revolved a different way in a design variant tomorrow — without redrawing the underlying shape.
:::

## The Design History Tree

Every sketch and feature operation is recorded, in order, in the model's **design history tree** (sometimes called the feature tree or timeline). This tree isn't just a list — it's the literal sequence of construction steps the software replays every time the model is opened, edited, or recalculated.

- Each entry in the tree can be selected, edited, suppressed (temporarily turned off), or deleted.
- The tree preserves the **order** features were created in, and that order has real consequences: a feature can only reference geometry that already existed at its point in the sequence.

## Why Edit Order Matters

Editing an early feature — changing a sketch dimension, or the depth of an extrude created near the start of the model — forces every feature created **after** it in the tree to recalculate, since those later features may depend, directly or indirectly, on the geometry that just changed.

:::warning
Editing an early feature can break a later one if that later feature depended on geometry the edit removed or significantly altered — a fillet applied to an edge that no longer exists after a dimension change, for example, has nothing left to reference. This shows up as an error in the tree at the point of the broken feature, not usually as a silent failure, but it can require real rework to fix depending on how much the design has built on top of that original feature.
:::

:::pro-tip
Think about feature order deliberately, not just as a byproduct of the sequence you happened to model in. Features that are likely to change later in a design's development are safer placed later in the tree, so an edit to them doesn't cascade through dozens of dependent features built on top.
:::

## Self-Check Questions

**1. What does "parametric" mean in the context of a CAD model, and how is that different from a simple 3D drawing?**

<details>
<summary>Show Answer</summary>

A parametric model records the sequence of operations that produced the geometry, with editable dimensions and relationships — changing an early dimension updates everything built on it automatically. A simple 3D drawing is just geometry with no memory of how or why it was built.
</details>

**2. What is the relationship between a sketch and a feature?**

<details>
<summary>Show Answer</summary>

A sketch defines a 2D profile with no volume; a feature operation (like extrude or revolve) turns that 2D profile into 3D geometry. The same sketch can potentially be used by different feature operations to produce different results.
</details>

**3. What does the design history tree actually represent?**

<details>
<summary>Show Answer</summary>

The literal, ordered sequence of sketch and feature operations that built the model — replayed by the software every time the model is opened, edited, or recalculated.
</details>

**4. Why can editing a feature near the start of the tree affect features created much later?**

<details>
<summary>Show Answer</summary>

Later features may depend, directly or indirectly, on geometry created earlier. Changing that earlier geometry forces every dependent later feature to recalculate, and can break one if the geometry it referenced no longer exists in the same form.
</details>

**5. Why might a designer deliberately place a feature later in the tree, even if it could technically be created earlier?**

<details>
<summary>Show Answer</summary>

Features likely to change during a design's development are safer placed later, so an edit to them doesn't cascade through many dependent features that were built on top of them.
</details>
