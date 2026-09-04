---
title: "Assembly Modeling: Mates and Constraints"
module: "13-cad-manufacturing"
lessonNumber: 12
description: "Position and constrain multiple parts relative to each other in an assembly using mates, and understand how a part's degrees of freedom get removed."
objectives:
  - "Explain what an assembly is, relative to individual part models"
  - "Apply common mate types — coincident, concentric, distance, angle"
  - "Explain how mates remove a component's degrees of freedom"
  - "Recognize an under- or over-constrained assembly"
difficulty: "intermediate"
duration: "45 minutes"
tags: ["cad", "fusion360", "solidworks", "assembly", "mates"]
---

## From Individual Parts to an Assembly

Everything covered so far in this module has modeled a single part. An **assembly** brings multiple part models together into one file, positioned and constrained relative to each other to represent how they actually fit and move together as a real product. Each part in an assembly is called a **component**, and a component's position within the assembly is controlled by **mates** (some software uses the term "constraints" or "joints" instead, for the same underlying concept).

## Common Mate Types

- **Coincident** — forces two faces, edges, or points to touch or align exactly, the most common and basic mate type.
- **Concentric** — aligns the axes of two circular or cylindrical features, such as a bolt shaft and the hole it passes through, so they share a common centerline.
- **Distance** — holds a fixed, specified distance between two selected references, rather than forcing them into direct contact.
- **Angle** — holds a fixed angular relationship between two references, useful for anything that should sit at a specific angle relative to another component rather than parallel or perpendicular.

:::key-concept
Every mate removes one or more of a component's six degrees of freedom (three translations, three rotations) — the same six degrees of freedom covered for physical workholding, applied here to virtual assembly positioning. A component with all six degrees of freedom removed by its mates is **fully constrained** and can't move at all within the assembly; one with some degrees of freedom still free can still translate or rotate along whatever axes remain unconstrained.
:::

## How Mates Remove Degrees of Freedom

Just as a 3-2-1 locating scheme removes exactly six degrees of freedom from a physical workpiece using six carefully chosen contact points, an assembly's mates remove a component's degrees of freedom one relationship at a time. A single concentric mate between two cylindrical features removes translation in two directions (keeping the axes aligned) but leaves the component free to rotate around that shared axis and to slide along it — additional mates (a coincident mate on a face, for example) are needed to fully define the component's position.

## Under- and Over-Constrained Assemblies

- An **under-constrained** component still has one or more free degrees of freedom — it can be dragged or rotated within the assembly along whatever axes remain unconstrained. This is sometimes intentional (a hinge should genuinely be free to rotate) and sometimes an oversight (a part that should be fixed in place is accidentally still free to shift).
- An **over-constrained** assembly has conflicting mates that can't all be satisfied simultaneously — the same fundamental problem as an over-constrained sketch, just applied to components instead of sketch geometry, and it will be flagged as an error requiring one of the conflicting mates to be removed.

:::warning
An under-constrained component that should actually be fixed is a common, easy-to-miss assembly mistake. It might sit correctly in its intended position when the assembly is first built, but nothing is actually holding it there — it can drift, especially during motion simulation or when other components move, revealing the missing constraint only once something visibly shifts out of place.
:::

## Self-Check Questions

**1. What is the relationship between a part model and an assembly?**

<details>
<summary>Show Answer</summary>

An assembly brings multiple individual part models together as components, positioned and constrained relative to each other with mates to represent how they actually fit and move together.
</details>

**2. What is the difference between a coincident mate and a concentric mate?**

<details>
<summary>Show Answer</summary>

A coincident mate forces two faces, edges, or points to touch or align exactly. A concentric mate aligns the axes of two circular or cylindrical features so they share a common centerline, without necessarily forcing faces together.
</details>

**3. How does the concept of degrees of freedom apply to assembly mates, and what physical concept does it parallel?**

<details>
<summary>Show Answer</summary>

Every mate removes one or more of a component's six degrees of freedom (three translations, three rotations) — the same six degrees of freedom removed by a physical 3-2-1 locating scheme on a workpiece, just applied virtually.
</details>

**4. Why might a component with only a concentric mate applied still be able to move within the assembly?**

<details>
<summary>Show Answer</summary>

A single concentric mate removes translation perpendicular to the shared axis but leaves the component free to rotate around that axis and slide along it — additional mates are needed to fully constrain those remaining degrees of freedom.
</details>

**5. Why can an under-constrained component that should be fixed in place cause a problem that isn't obvious when the assembly is first built?**

<details>
<summary>Show Answer</summary>

It may sit correctly in its intended position initially even though nothing is actually holding it there, and only reveal the missing constraint later — for example, drifting during motion simulation once other components move.
</details>
