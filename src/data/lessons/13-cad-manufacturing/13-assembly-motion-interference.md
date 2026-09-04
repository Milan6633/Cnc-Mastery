---
title: "Assembly Motion and Interference Detection"
module: "13-cad-manufacturing"
lessonNumber: 13
description: "Drive an assembly's remaining free degrees of freedom to check motion, and run interference detection to catch collisions before parts are ever cut."
objectives:
  - "Explain how an assembly's unconstrained degrees of freedom enable motion"
  - "Distinguish a mechanical joint from a positioning mate for motion-intended components"
  - "Run an interference detection check and interpret its result"
  - "Explain why interference checking in CAD is cheaper than discovering a collision on the shop floor"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cad", "fusion360", "solidworks", "assembly", "motion", "interference"]
---

## Motion Comes From What Isn't Constrained

The previous lesson covered how mates remove a component's degrees of freedom. Whatever degrees of freedom are deliberately **left unconstrained** are exactly what allow that component to move — a hinge pin left free to rotate about its axis, a slide left free to translate along one direction. Assembly motion isn't a separate feature bolted on top of mates; it's a direct consequence of which degrees of freedom the mates chose not to remove.

## Joints for Motion-Intended Components

While a basic mate (coincident, concentric, and the others covered previously) is often used simply to position a component correctly, many CAD packages offer a distinct **joint** type specifically for components meant to move relative to each other — a revolute joint for a hinge or pivot, a slider joint for linear motion, and others matching common mechanical motion types. A joint typically bundles the appropriate mate relationships together with explicit motion behavior, making the intended movement clearer in the model than inferring it from which mates happen to be missing.

:::key-concept
Whether built from a deliberately incomplete set of mates or from a dedicated joint type, assembly motion always comes down to the same underlying idea: some degrees of freedom are constrained, and whatever remains free is what the component can actually do.
:::

## Interference Detection

**Interference detection** checks an assembly for any volume where two components physically occupy the same space — a genuine collision that couldn't exist in the real, physical assembly, caught directly in the CAD model before any part is manufactured. Running this check, especially after moving components through their intended range of motion, catches problems like a bolt head that collides with an adjacent wall, or a moving arm that clips a fixed bracket partway through its travel — issues that might not be obvious from a single static view of the assembly.

:::warning
Checking interference only in an assembly's resting or default position misses collisions that only occur partway through a component's motion. A hinge or slide should be checked through its full intended range, not just at its start and end positions — a collision in the middle of the travel is just as real a problem as one at either endpoint.
:::

## Why This Matters Before Cutting Metal

Finding an interference problem in CAD costs essentially nothing beyond the time to run the check and adjust the model. Finding the same problem after parts have been machined, or worse, after an assembly has been built and shipped, costs the material, the machine time, and potentially a field failure or a costly rework — the same "catch it early" logic that runs through this entire curriculum, from checking a print's tolerance before cutting to sparking out a grind before trusting the final measurement.

:::pro-tip
Run an interference check as a routine step before finalizing an assembly, not just when a problem is already suspected. It costs very little time and regularly catches issues — like a fastener length that's slightly too long for the assembly it's going into — that are easy to miss by eye in a complex model with many components.
:::

## Self-Check Questions

**1. What determines whether a component in an assembly can move, and in which directions?**

<details>
<summary>Show Answer</summary>

Whichever degrees of freedom its mates or joints leave unconstrained — motion is a direct consequence of which degrees of freedom were deliberately not removed, not a separate feature added on top.
</details>

**2. What does a dedicated joint type (like a revolute or slider joint) offer that a basic set of mates doesn't as clearly?**

<details>
<summary>Show Answer</summary>

It bundles the appropriate mate relationships together with explicit motion behavior, making the component's intended movement clearer in the model than inferring it from which mates happen to be left out.
</details>

**3. What does interference detection actually check for in an assembly?**

<details>
<summary>Show Answer</summary>

Any volume where two components physically occupy the same space — a collision that couldn't exist in the real, physical assembly.
</details>

**4. Why should interference checking be run through a component's full range of motion, not just its resting position?**

<details>
<summary>Show Answer</summary>

A collision can occur partway through a component's travel even if the start and end positions are clear — checking only the resting position would miss that.
</details>

**5. Why is catching an interference problem in CAD significantly cheaper than catching it later?**

<details>
<summary>Show Answer</summary>

Fixing it in CAD costs only the time to adjust the model, while discovering the same problem after parts are machined or an assembly is built costs material, machine time, and potentially rework or a field failure.
</details>
