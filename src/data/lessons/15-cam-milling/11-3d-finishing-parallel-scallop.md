---
title: "3D Finishing: Parallel and Scallop Strategies"
module: "15-cam-milling"
lessonNumber: 11
description: "Finish a 3D surface with simple parallel passes, or hold a truly constant scallop height everywhere with a scallop (constant-stepover) strategy."
objectives:
  - "Explain how a parallel finishing toolpath is generated on a 3D surface"
  - "Explain why a constant XY stepover doesn't produce a constant actual cusp height on a curved surface"
  - "Explain how scallop (constant stepover) finishing solves that inconsistency"
  - "Choose between parallel and scallop finishing for a given surface"
difficulty: "advanced"
duration: "45 minutes"
tags: ["cam", "fusion360", "mastercam", "3d-finishing", "scallop"]
---

## Two Foundational 3D Finishing Strategies

Once a 3D roughing operation has cleared bulk material, a **3D finishing** toolpath cuts the remaining allowance to final dimension and surface finish. **Parallel** and **scallop** are two of the most fundamental finishing strategies, each generating passes across the surface differently — with real consequences for how consistent the resulting finish actually is.

## Parallel Finishing

A **parallel** finishing toolpath runs a series of straight, parallel passes (in a chosen direction) projected onto the 3D surface, at a set stepover between passes. It's simple, predictable, and computationally straightforward — but that fixed stepover is measured in the XY plane, not along the surface itself, which creates a real inconsistency on anything but a flat surface.

:::key-concept
A constant XY stepover doesn't produce a constant actual cusp (scallop) height across a curved surface, because the same horizontal spacing between passes corresponds to a different actual surface distance depending on how steep or shallow the surface is at that location. A flatter area sees roughly the intended cusp height; a steeper area sees a taller, more pronounced cusp from the same nominal stepover.
:::

## Scallop (Constant Stepover) Finishing

**Scallop** finishing — sometimes called constant stepover or constant cusp finishing — solves this inconsistency directly: instead of maintaining a constant spacing in the XY plane, it calculates pass spacing to maintain a genuinely **constant stepover measured along the actual 3D surface**, adjusting the toolpath's pattern as needed so the resulting cusp height stays consistent everywhere, regardless of local surface slope.

This makes scallop finishing generally more computationally complex to calculate than a simple parallel pattern, but it delivers a materially more uniform surface finish across a complex, varying-slope surface — exactly the situation where parallel finishing's XY-based stepover would otherwise produce visibly inconsistent results.

## Choosing Between Them

- **Parallel finishing** suits relatively flat or gently, consistently contoured surfaces, where the XY-stepover-to-actual-cusp-height relationship doesn't vary enough across the surface to matter, and where its simpler calculation and predictable, straight-line motion are genuine advantages.
- **Scallop finishing** suits complex, significantly varying-slope surfaces, where a consistent finish quality across the whole surface is actually required and parallel finishing's inconsistency would be visible or functionally unacceptable.

:::pro-tip
Before committing to a finishing strategy, consider the actual surface finish requirement and the surface's real slope variation together — a part with a genuine cosmetic or functional finish requirement on a highly contoured surface is exactly the case where scallop finishing's extra calculation complexity earns its cost, while a mildly curved surface with a modest finish requirement may do perfectly well with simpler, faster parallel passes.
:::

## Self-Check Questions

**1. How is a parallel finishing toolpath's pass spacing measured?**

<details>
<summary>Show Answer</summary>

As a constant stepover in the XY plane — a fixed horizontal distance between passes, regardless of the actual 3D surface's local slope at that location.
</details>

**2. Why does a constant XY stepover produce an inconsistent actual cusp height on a curved surface?**

<details>
<summary>Show Answer</summary>

The same horizontal spacing corresponds to a different actual surface distance depending on local slope — a flatter area sees close to the intended cusp height, while a steeper area sees a taller, more pronounced cusp from the same nominal XY stepover.
</details>

**3. How does scallop finishing achieve a consistent cusp height that parallel finishing can't?**

<details>
<summary>Show Answer</summary>

It calculates pass spacing to maintain a constant stepover measured along the actual 3D surface itself, rather than in the XY plane, adjusting the toolpath pattern to keep the resulting cusp height uniform regardless of local slope.
</details>

**4. What is the main tradeoff of choosing scallop finishing over parallel finishing?**

<details>
<summary>Show Answer</summary>

Scallop finishing is generally more computationally complex to calculate, in exchange for delivering a materially more uniform surface finish across a surface with significant slope variation.
</details>

**5. On what kind of surface would parallel finishing be an entirely reasonable choice despite its XY-stepover limitation?**

<details>
<summary>Show Answer</summary>

A relatively flat or gently, consistently contoured surface, where the difference between XY stepover and actual surface stepover doesn't vary enough across the surface to produce a visibly inconsistent finish.
</details>
