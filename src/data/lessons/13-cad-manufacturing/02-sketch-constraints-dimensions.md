---
title: "Sketch Constraints and Dimensions"
module: "13-cad-manufacturing"
lessonNumber: 2
description: "Fully constrain a sketch with geometric relationships and dimensions so it behaves predictably as the model changes."
objectives:
  - "Distinguish geometric constraints from dimensional constraints"
  - "Explain what it means for a sketch to be fully, under-, or over-constrained"
  - "Read a sketch's constraint status from its color coding"
  - "Apply constraints in a sensible order to avoid unexpected sketch behavior"
difficulty: "beginner"
duration: "45 minutes"
tags: ["cad", "fusion360", "solidworks", "sketching", "constraints"]
---

## Two Kinds of Control Over a Sketch

A sketch's shape is controlled by two distinct kinds of relationships, applied together:

- **Geometric constraints** define relationships between sketch elements — two lines are parallel, perpendicular, or equal length; a line is tangent to an arc; a point sits coincident with another point or on a specific axis.
- **Dimensional constraints** (dimensions) assign an actual numeric value — a length, an angle, a radius — to some part of the sketch.

:::key-concept
Geometric constraints define *how* sketch elements relate to each other; dimensions define *how big*. A rectangle needs geometric constraints (its sides parallel and perpendicular to each other) and dimensions (its actual length and width) working together to be both the right shape and the right size.
:::

## Fully Constrained, Under-Constrained, Over-Constrained

A sketch's constraint status describes how completely its geometry is defined:

- **Under-constrained** — some part of the sketch could still move or resize without any constraint or dimension preventing it. The sketch's shape isn't fully predictable.
- **Fully constrained** — every point and line's position is fixed by some combination of constraints and dimensions, with no ambiguity left. This is the target state for a finished sketch.
- **Over-constrained** — conflicting or redundant constraints have been applied, which the software can't satisfy simultaneously, and will flag as an error requiring one or more constraints to be removed.

Most CAD software color-codes sketch geometry to show this status at a glance — commonly a different color for under-constrained geometry than for fully constrained geometry, letting a modeler see remaining ambiguity without opening a dedicated status report.

:::warning
An under-constrained sketch might look correct on screen at the moment it's created, but its actual, unconstrained degrees of freedom can let it shift unexpectedly the next time the model recalculates — after an earlier feature changes, for example. A sketch that looks right isn't the same as a sketch that's actually fully constrained.
:::

## Applying Constraints in a Sensible Order

A practical sketching workflow generally applies geometric constraints first, establishing the sketch's basic relationships and rough shape, then adds dimensions to pin down the actual sizes:

1. Rough in the basic sketch geometry.
2. Apply geometric constraints (parallel, perpendicular, tangent, coincident, symmetric) to establish the intended relationships between elements.
3. Add dimensions to fix the actual sizes and positions.
4. Confirm the sketch reads as fully constrained before using it in a feature.

:::pro-tip
Building geometric relationships in before adding every dimension usually reaches a fully constrained sketch with fewer total dimensions than dimensioning everything individually from the start — a symmetric relationship, for example, replaces what would otherwise need two separate dimensions, one for each side.
:::

## Self-Check Questions

**1. What is the difference between a geometric constraint and a dimensional constraint?**

<details>
<summary>Show Answer</summary>

A geometric constraint defines a relationship between sketch elements (parallel, perpendicular, tangent, coincident) without assigning a numeric value. A dimensional constraint assigns an actual numeric value — a length, angle, or radius.
</details>

**2. What does it mean for a sketch to be under-constrained?**

<details>
<summary>Show Answer</summary>

Some part of the sketch's geometry could still move or resize without any constraint or dimension preventing it — its shape isn't fully predictable or fixed.
</details>

**3. Why might an under-constrained sketch look correct on screen but still be a problem?**

<details>
<summary>Show Answer</summary>

Its remaining, unconstrained degrees of freedom can let it shift unexpectedly the next time the model recalculates, such as after an earlier feature in the design history changes — looking right isn't the same as being fully constrained.
</details>

**4. What happens when conflicting or redundant constraints are applied to a sketch?**

<details>
<summary>Show Answer</summary>

The sketch becomes over-constrained — the software can't satisfy the conflicting requirements simultaneously and flags it as an error requiring one or more constraints to be removed.
</details>

**5. Why does applying geometric constraints before dimensions often result in a sketch that needs fewer total dimensions?**

<details>
<summary>Show Answer</summary>

A geometric relationship, like symmetry, can replace what would otherwise require multiple separate dimensions to achieve the same result — establishing relationships first reduces redundant dimensioning.
</details>
