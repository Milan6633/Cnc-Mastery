---
title: "Form Controls: Flatness and Straightness"
module: "14-gdt"
lessonNumber: 7
description: "Control a single surface's own form with flatness and straightness — the two GD&T controls that need no datum reference at all."
objectives:
  - "Explain why form controls require no datum reference"
  - "Define the flatness tolerance zone"
  - "Define straightness applied to a line element versus straightness applied to a feature's axis (with MMC)"
  - "Explain why a feature can pass its size tolerance and still fail a form tolerance"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["gdt", "form", "flatness", "straightness", "asme-y14.5"]
---

## Form Controls Need No Datum

**Form controls** — flatness, straightness, and (covered in the next lesson) circularity and cylindricity — are the one category of GD&T geometric control that references **no datum at all**. A form control evaluates a feature purely against itself — how flat is this surface, on its own terms, regardless of its orientation or location relative to anything else on the part.

:::key-concept
Form controls answer "is this feature's own shape correct?" independent of where it sits or how it's oriented. Orientation and location controls, covered in upcoming lessons, build on top of form by adding a datum reference — but form itself is evaluated with no outside reference whatsoever.
:::

## Flatness

**Flatness** controls a single surface, requiring every point on that surface to fall within a tolerance zone defined by **two parallel planes**, separated by the stated tolerance value. The surface doesn't need to be perfectly parallel to any other feature on the part (that would be a parallelism call, an orientation control) — flatness only cares whether the surface itself is flat, full stop.

## Straightness

**Straightness** has two genuinely different applications depending on what it's controlling:

- **Line element straightness** controls a single line on a surface — commonly used on a cylindrical feature to ensure a straight-line element along its length doesn't bow or taper, independent of the feature's overall size.
- **Axis straightness (with an MMC modifier)** controls the straightness of a feature's actual **derived median line** (its centerline, calculated from opposing surface points) rather than a surface line — used when a shaft or pin's actual axis needs to stay straight for it to properly engage a mating bore along its full length.

:::pro-tip
Axis straightness with an MMC modifier earns bonus tolerance exactly the way position tolerance does, covered in the earlier lessons on material condition modifiers — the same underlying bonus-tolerance logic applies to any geometric control that carries an MMC modifier, not just position specifically.
:::

## Passing Size but Failing Form

A feature can be produced entirely within its size tolerance and still fail a form tolerance — size and form are genuinely independent measurements. A shaft machined to the correct diameter at every individual cross-section it's measured at can still be bowed along its length (failing straightness) or a flat surface can be within its overall height tolerance at its highest and lowest points while still failing flatness if the surface undulates in a wave pattern between those points, exceeding the flatness zone even though the overall high-low span happens to look acceptable.

:::warning
Checking only a feature's size, without a separate form check, can miss a real functional problem entirely. A part that measures correctly at a handful of individual points can still have unacceptable form error between those points — the reason flatness and straightness exist as their own separate, dedicated controls rather than being assumed from size alone.
:::

## Self-Check Questions

**1. Why do form controls like flatness and straightness require no datum reference?**

<details>
<summary>Show Answer</summary>

They evaluate a feature purely against itself — its own shape — independent of its orientation or location relative to any other feature on the part.
</details>

**2. What tolerance zone shape does flatness define?**

<details>
<summary>Show Answer</summary>

Two parallel planes, separated by the stated tolerance value — every point on the controlled surface must fall between them.
</details>

**3. What is the difference between line element straightness and axis straightness with an MMC modifier?**

<details>
<summary>Show Answer</summary>

Line element straightness controls a single line on a surface. Axis straightness with MMC controls the feature's derived median line (centerline), used when a shaft or pin's actual axis needs to stay straight to properly engage a mating bore.
</details>

**4. Why can a part pass its size tolerance check and still fail a flatness or straightness requirement?**

<details>
<summary>Show Answer</summary>

Size and form are independent measurements — a surface can be within its overall height limits at specific measured points while still undulating between them beyond the form tolerance zone, or a shaft can be correctly sized at every cross-section while still being bowed along its length.
</details>

**5. What bonus tolerance behavior does axis straightness with an MMC modifier share with position tolerance at MMC?**

<details>
<summary>Show Answer</summary>

It earns bonus tolerance the same way — as the feature's actual produced size departs from its MMC value, the allowed straightness tolerance grows, following the same underlying bonus-tolerance logic covered for any MMC-modified control.
</details>
