---
title: "DFM: Workholding Access and Minimizing Setups"
module: "13-cad-manufacturing"
lessonNumber: 17
description: "Design a part so it can actually be clamped and reached with a tool, and so features cluster onto as few setups as possible."
objectives:
  - "Explain why a functionally correct part can still be impossible to hold in a standard fixture"
  - "Design in a sacrificial or dedicated clamping feature when a finished part offers nowhere to grip"
  - "Explain why each additional machining setup adds both cost and accuracy risk"
  - "Group features by accessible face to minimize the number of setups a part needs"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cad", "dfm", "design-for-manufacturability", "workholding-access", "setups"]
---

## A Correct Part That Can't Be Held

A part can be dimensionally and functionally perfect in every respect and still be a serious manufacturing problem if there's nowhere reasonable to clamp it. Every workholding method covered in the workholding module — vises, soft jaws, strap clamps, fixture plates, vacuum, magnetic chucks — needs an actual surface or feature to grip, locate against, or seal to. A design that consumes every accessible surface with functional geometry, leaving nothing flat, parallel, or clear for a fixture to reference, creates a real manufacturing obstacle that has nothing to do with whether the part's dimensions are correct.

:::key-concept
Workholding access isn't a manufacturing detail to solve after the design is finished — it's a design constraint as real as any dimensional tolerance. A part needs a way to be held rigidly and repeatably before it can be machined accurately at all, regardless of how well every other feature is specified.
:::

## Designing In Clamping Features

When a finished part's own geometry doesn't offer a good place to grip, the design can deliberately include a feature specifically for workholding:

- **Sacrificial tabs or bosses** — extra material, present only during machining, that provides a clamping surface and is removed in a final operation once the part no longer needs to be held there.
- **A dedicated flat or boss** on the finished part itself, placed somewhere it doesn't interfere with function, giving a fixture a reliable, repeatable reference surface across the whole production run.

Planning this during design, rather than leaving the machinist to improvise a workholding solution once the part reaches the shop, keeps the manufacturing process both faster and more consistent from the first part to the last.

## Why Every Additional Setup Costs More Than Time

Each time a part has to be **re-fixtured** — removed from one setup and re-clamped in another to reach a different face — that re-fixturing introduces two costs: the direct time cost of stopping, repositioning, and re-indicating the part, and an **accuracy cost**, since every new setup re-establishes its own locating reference, and any small error in that re-establishment (the same locating and indicating error sources covered throughout this curriculum) becomes a real, physical offset between features cut in different setups.

:::warning
Two features that need to be accurately positioned relative to each other are always safer machined in the **same setup** whenever the design allows it. Splitting them across two separate setups means their relative position now depends on how accurately the part was re-indicated between them — an error source that simply doesn't exist if both features are cut without ever moving the part.
:::

## Designing for Minimal Setups

Designing with **3-axis accessibility** in mind — orienting and grouping features so as many of them as possible can be reached from a single clamping orientation, ideally from the top of a part sitting in one straightforward setup — directly reduces the number of setups a part needs. This sometimes means choosing a part orientation, or a feature's specific geometry, based partly on what a standard 3-axis machine can reach in one setup, rather than purely on what looks cleanest in the CAD model.

:::pro-tip
When reviewing a design for manufacturability, mentally walk through how many times the part would need to be flipped or re-clamped to reach every feature with a standard 3-axis machine. A design that requires four or five separate setups for a part that could be redesigned to need two is adding real cost and real accuracy risk that a small orientation or feature-placement change could remove.
:::

## Self-Check Questions

**1. Why can a dimensionally correct, functionally sound part still be a manufacturing problem?**

<details>
<summary>Show Answer</summary>

If the part's geometry leaves no reasonable flat, parallel, or clear surface to clamp, locate against, or seal to, no standard workholding method can hold it rigidly and repeatably — regardless of how correct the part's own dimensions are.
</details>

**2. What is a sacrificial tab or boss, and what problem does it solve?**

<details>
<summary>Show Answer</summary>

Extra material present only during machining, providing a clamping surface for a part that otherwise has nowhere good to grip — removed in a final operation once the part no longer needs to be held there.
</details>

**3. Why does re-fixturing a part between setups introduce an accuracy risk, not just a time cost?**

<details>
<summary>Show Answer</summary>

Each new setup re-establishes its own locating reference, and any error in that re-establishment becomes a real, physical offset between features cut in different setups.
</details>

**4. Why are two features that need accurate relative positioning best machined in the same setup whenever possible?**

<details>
<summary>Show Answer</summary>

Cutting both without moving the part eliminates the re-indexing error source entirely — their relative position no longer depends on how accurately the part was re-positioned between two separate setups.
</details>

**5. What does designing for "3-axis accessibility" mean in practice?**

<details>
<summary>Show Answer</summary>

Orienting and grouping a part's features so as many as possible can be reached from a single clamping orientation on a standard 3-axis machine, minimizing the number of separate setups the part needs.
</details>
