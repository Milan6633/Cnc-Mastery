---
title: "Boolean Operations: Cut, Join, and Intersect"
module: "13-cad-manufacturing"
lessonNumber: 7
description: "Combine separate solid bodies with join, cut, and intersect — the same logic underlying every add- or remove-material feature."
objectives:
  - "Explain what a boolean operation does to two solid bodies"
  - "Distinguish join, cut, and intersect and state what each produces"
  - "Explain why extrude and revolve are themselves boolean operations under the hood"
  - "Use multi-body modeling with booleans as a deliberate design strategy"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cad", "fusion360", "solidworks", "boolean-operations"]
---

## Combining Solids with Boolean Logic

A **boolean operation** combines two solid bodies — a target body and a tool body — using one of three basic relationships, borrowed directly from the mathematical set operations of the same names. Every feature covered so far in this module (extrude, revolve, sweep, loft) is, at its core, a boolean operation between the new geometry a sketch generates and the model's existing solid body.

## Join (Union)

**Join** combines two solid bodies into a single body occupying the combined volume of both — anywhere either original body existed, the resulting body exists. This is what happens whenever an extrude, revolve, sweep, or loft is set to add material: the new feature's geometry is joined to the existing model.

## Cut (Subtraction)

**Cut** removes the volume of the tool body from the target body — anywhere the tool body existed within the target, that material is removed. This is what an extrude cut, or any feature set to remove material, is doing: using the feature's projected geometry as the tool body, subtracted from the existing model.

## Intersect

**Intersect** keeps only the volume where both bodies overlap — everything outside that shared region, from either body, is discarded. This is less commonly used directly than join or cut, but it's a useful way to find the exact common volume between two shapes without manually working out where they overlap.

:::key-concept
Every add-material and remove-material feature covered earlier in this module — extrude, revolve, sweep, loft, in boss or cut mode — is a boolean join or cut under the hood. Understanding boolean operations directly demystifies what those "simpler" features are actually doing to the model's geometry.
:::

## Extrude and Revolve as Booleans

When an extrude or revolve feature is set to "cut," the software is generating a solid from the sketch profile (as if it were a boss) and then performing a boolean cut of that generated solid against the existing model — the sketch-to-3D projection and the boolean operation are two separate steps happening together in what looks like a single feature. Recognizing this makes advanced modeling techniques — deliberately creating a separate body just to use as a cutting tool, for example — a natural extension of concepts already covered, rather than an entirely new idea.

## Multi-Body Modeling as a Design Strategy

Rather than building one continuous body through a single chain of features, some designs are more naturally modeled as **multiple separate solid bodies**, combined deliberately with boolean operations partway through the design process — modeling a complex housing's outer shell and an internal rib structure as separate bodies, for example, then joining them once each is independently correct, or using one body purely as a cutting tool to carve a complex internal cavity out of another.

:::pro-tip
Multi-body modeling is especially useful when two parts of a design are conceptually independent and easier to get right separately — model each as its own body, verify each is correct on its own, then combine with a boolean operation rather than fighting to build both simultaneously within one continuous feature history.
:::

## Self-Check Questions

**1. What does the join (union) boolean operation produce from two solid bodies?**

<details>
<summary>Show Answer</summary>

A single combined body occupying the combined volume of both original bodies — anywhere either body existed, the result exists.
</details>

**2. What does the cut boolean operation do, and which everyday feature relies on it?**

<details>
<summary>Show Answer</summary>

It removes the tool body's volume from the target body. An extrude or revolve set to "cut" relies on this — the feature's generated geometry becomes the tool body, subtracted from the existing model.
</details>

**3. What does the intersect operation keep, compared to join and cut?**

<details>
<summary>Show Answer</summary>

Only the volume where both bodies overlap — everything outside that shared region, from either body, is discarded, unlike join (keeps all of both) or cut (removes one from the other).
</details>

**4. Why are extrude and revolve described as boolean operations "under the hood"?**

<details>
<summary>Show Answer</summary>

Setting either to boss or cut mode generates a solid from the sketch profile and then performs a boolean join or cut of that generated solid against the existing model — the same underlying operation as a direct boolean, just packaged as a single feature.
</details>

**5. Why might a designer deliberately model two parts of a design as separate bodies before combining them with a boolean operation?**

<details>
<summary>Show Answer</summary>

When two parts of a design are conceptually independent, it's often easier to get each one correct on its own as a separate body, then combine them with a boolean operation, rather than building both simultaneously within one continuous feature history.
</details>
