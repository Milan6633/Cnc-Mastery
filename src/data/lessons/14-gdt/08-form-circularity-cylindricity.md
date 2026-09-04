---
title: "Form Controls: Circularity and Cylindricity"
module: "14-gdt"
lessonNumber: 8
description: "Control a round feature's cross-sectional roundness with circularity, or its entire surface at once with the more comprehensive cylindricity."
objectives:
  - "Define the circularity tolerance zone and what it evaluates"
  - "Define cylindricity and explain why it's a composite control"
  - "Explain why cylindricity is generally the tighter, more comprehensive requirement of the two"
  - "Recognize which form control to specify based on what error mode actually matters"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["gdt", "form", "circularity", "cylindricity", "asme-y14.5"]
---

## Two More Datum-Free Form Controls

Continuing directly from flatness and straightness in the previous lesson, **circularity** and **cylindricity** are the remaining two form controls — both, like flatness and straightness, require no datum reference, evaluating a round feature purely against its own ideal round shape.

## Circularity (Roundness)

**Circularity** controls each circular cross-section of a round feature **independently** — at any single cross-section taken perpendicular to the feature's axis, every point on that circle must fall within a tolerance zone defined by two concentric circles, separated by the stated tolerance value.

:::key-concept
Circularity says nothing about how one cross-section relates to the next along the feature's length. A shaft could be perfectly circular at every individual cross-section and still be tapered, bowed, or have its cross-sections rotated out of alignment with each other — circularity alone doesn't catch any of that, because it evaluates each circle in isolation.
:::

## Cylindricity: A Composite Control

**Cylindricity** controls the **entire cylindrical surface at once** — combining circularity (roundness at each cross-section), straightness (of line elements along the length), and a control on taper, all simultaneously, within a single tolerance zone defined by two coaxial cylinders separated by the stated tolerance value. Every point on the entire surface, not just at isolated cross-sections, must fall within that zone.

This makes cylindricity a genuine **composite** control — passing cylindricity guarantees the feature is also acceptable for circularity and straightness (since a surface that's cylindrical to a given tolerance can't have worse circularity or straightness error than that same tolerance), but the reverse isn't true: a feature can pass circularity and straightness checked separately and still fail cylindricity, because those two checks in isolation still miss more complex combined error modes across the whole surface.

## Why Cylindricity Is the Tighter Requirement

Because cylindricity evaluates the entire surface simultaneously rather than isolated elements, it's inherently the more comprehensive — and generally harder to achieve — of the two controls. A shaft that looks acceptable when checked cross-section by cross-section (circularity) can still fail cylindricity if those cross-sections, while individually round, aren't properly aligned and consistent with each other along the full length.

:::pro-tip
Specify circularity when the functional concern is genuinely just roundness at specific cross-sections — a bearing seat where only the local roundness at the bearing's actual contact location matters, for example. Specify cylindricity when the feature's entire surface needs to behave as a true, consistent cylinder along its whole length — a precision sliding fit is a classic case, since a local high spot anywhere along the length could bind, not just at a checked cross-section.
:::

## Self-Check Questions

**1. What does circularity evaluate, and what does it explicitly not evaluate?**

<details>
<summary>Show Answer</summary>

It evaluates each circular cross-section independently against a tolerance zone of two concentric circles. It says nothing about how one cross-section relates to the next — a feature could pass circularity everywhere while still being tapered or bowed along its length.
</details>

**2. What three things does cylindricity control simultaneously?**

<details>
<summary>Show Answer</summary>

Circularity (roundness at each cross-section), straightness (of line elements along the length), and taper — all combined within a single tolerance zone covering the entire cylindrical surface at once.
</details>

**3. Why is passing cylindricity sufficient to guarantee passing circularity, but not the other way around?**

<details>
<summary>Show Answer</summary>

A surface within a cylindricity tolerance can't have worse circularity error than that same tolerance value, since cylindricity is a composite control that includes circularity. But passing circularity and straightness checked in isolation can still miss combined error modes across the whole surface that cylindricity would catch.
</details>

**4. Why might a shaft pass a circularity check at every cross-section and still fail cylindricity?**

<details>
<summary>Show Answer</summary>

The individual cross-sections could each be round on their own while still not being properly aligned and consistent with each other along the full length — an error mode circularity alone doesn't detect but cylindricity does.
</details>

**5. When would circularity be the more appropriate control to specify instead of cylindricity?**

<details>
<summary>Show Answer</summary>

When the functional concern is genuinely just roundness at a specific location, such as a bearing seat where only the local contact area's roundness matters — cylindricity's full-surface requirement would be stricter than the function actually demands.
</details>
