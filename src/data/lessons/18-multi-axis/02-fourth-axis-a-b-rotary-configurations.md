---
title: "The 4th Axis: A-Axis and B-Axis Rotary Configurations"
module: "18-multi-axis"
lessonNumber: 2
description: "Add one rotary axis to a standard 3-axis mill and use it either for indexed positioning or continuous, synchronized rotation."
objectives:
  - "Explain the standard axis-naming convention for rotary axes"
  - "Describe common 4th-axis rotary indexer hardware and mounting orientations"
  - "Distinguish indexing use from continuous, interpolated 4th-axis motion"
  - "Identify parts well suited to 4th-axis machining"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["multi-axis", "4-axis", "rotary-indexer", "a-axis", "b-axis"]
---

## Naming Convention: A, B, and C Axes

Rotary axes follow a standard naming convention based on which linear axis they rotate around: rotation around X is the **A-axis**, rotation around Y is the **B-axis**, and rotation around Z is the **C-axis** — the same C-axis already covered in the CAM turning module for positioning a lathe spindle angularly. A **4th axis** adds exactly one of these rotary axes (most commonly A or B, depending on the machine's configuration) to a standard 3-axis mill's X, Y, and Z.

## Common 4th-Axis Hardware

A **rotary indexer** (or rotary table) is the most common way to add a 4th axis to an existing 3-axis mill — a dedicated rotary unit mounted on the mill's table, holding the workpiece (often via its own chuck or a custom fixture), oriented either horizontally or vertically depending on the specific job and available table space.

## Indexing vs. Continuous Motion

A 4th axis can be used in two distinct ways, directly paralleling the indexing-versus-interpolation distinction covered for the lathe's C-axis in the CAM turning module:

- **Indexing** — the rotary axis moves to and holds a specific fixed angular position, letting a standard 3-axis milling operation cut a feature at that one clock position, then the axis rotates to the next position for the next feature.
- **Continuous (interpolated) rotation** — on a machine capable of it, the 4th axis rotates continuously, synchronized in real time with the other linear axes throughout a single toolpath — used for a feature that needs to follow a continuous path around the rotating part's circumference, rather than being cut at a series of discrete stopped positions.

:::key-concept
Indexing treats the 4th axis as a set of fixed stopping points, useful for repeated features around a part; continuous rotation treats it as a genuine, real-time-coordinated axis, useful for a feature that itself follows a curved path around the part. The same underlying hardware supports both — which one a specific job uses depends entirely on what the actual feature geometry requires.
:::

## Parts Well Suited to 4th-Axis Machining

A 4th axis is the natural choice for parts with features arranged around a cylindrical or otherwise rotationally-organized geometry: a series of holes indexed evenly around a cylinder's circumference, a camshaft's lobes at specific angular positions along its length, or any part needing several distinct faces or features machined without the operator manually re-fixturing the part between each one.

:::pro-tip
Even simple indexing — no continuous interpolated motion at all — captures a substantial share of 4th-axis machining's practical value. A part needing a repeated feature at several angular positions around its circumference benefits enormously from a rotary indexer's automatic, program-controlled positioning, without necessarily needing the added complexity of continuous synchronized rotation.
:::

## Self-Check Questions

**1. What does the A-axis represent, and how does that relate to the C-axis covered in lathe CAM programming?**

<details>
<summary>Show Answer</summary>

The A-axis is rotation around the X axis, following the same naming convention where the C-axis (rotation around Z) was covered for positioning a lathe spindle — each rotary axis is named for the linear axis it rotates around.
</details>

**2. What is the most common hardware used to add a 4th axis to an existing 3-axis mill?**

<details>
<summary>Show Answer</summary>

A rotary indexer (or rotary table) mounted on the mill's table, holding the workpiece, oriented horizontally or vertically depending on the job.
</details>

**3. What is the difference between using a 4th axis for indexing versus continuous rotation?**

<details>
<summary>Show Answer</summary>

Indexing moves to and holds a fixed angular position for a feature at that one position; continuous rotation moves in real time, synchronized with the other axes, for a feature that follows a curved path around the rotating part.
</details>

**4. What kind of part geometry is a natural fit for 4th-axis machining?**

<details>
<summary>Show Answer</summary>

Parts with features arranged around a cylindrical or rotationally-organized geometry — indexed hole patterns, camshaft lobes, or several distinct faces needing machining without manual re-fixturing between them.
</details>

**5. Why can simple indexing alone provide substantial practical value even without continuous interpolated rotation?**

<details>
<summary>Show Answer</summary>

A part needing a repeated feature at several angular positions benefits enormously from automatic, program-controlled positioning at each position, without necessarily requiring the added complexity of continuous synchronized motion.
</details>
