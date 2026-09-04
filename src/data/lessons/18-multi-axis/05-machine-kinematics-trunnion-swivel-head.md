---
title: "Machine Kinematics: Trunnion Table vs. Swivel Head"
module: "18-multi-axis"
lessonNumber: 5
description: "Compare where a 5-axis machine's rotary motion actually lives — in the table or the spindle head — and the rigidity-versus-part-size tradeoff each configuration makes."
objectives:
  - "Explain how a trunnion table configuration positions the part"
  - "Explain how a swivel head configuration positions the tool instead"
  - "Compare the rigidity and part-size tradeoffs between the two configurations"
  - "Recognize that mixed (table-and-head) configurations also exist"
difficulty: "advanced"
duration: "40 minutes"
tags: ["multi-axis", "5-axis", "machine-kinematics", "trunnion-table", "swivel-head"]
---

## Two Fundamentally Different Places to Put the Rotary Axes

Every 5-axis machine needs two rotary axes somewhere in its structure, and where they're actually located — in the table holding the part, or in the head holding the spindle — defines a fundamentally different machine architecture with real, practical tradeoffs.

## Trunnion Table Configuration

A **trunnion table** design builds both rotary axes into the **table**: the workpiece itself is tilted and rotated by the table structure, while the spindle continues to move only in the standard linear X, Y, Z directions. This is a "table-table" configuration in the common naming convention for 5-axis kinematics.

Because the part is directly supported by the tilting table structure, close to the machine's base, a trunnion table generally offers strong **rigidity and accuracy** — but the entire tilting assembly, including the workpiece, has to fit and move within the machine's structural envelope, which places a real practical limit on maximum part size and weight.

## Swivel Head Configuration

A **swivel head** design instead builds the rotary axes into the **spindle head**, which tilts and rotates while the table (and the part on it) stays fixed or moves only linearly. This lets the machine handle much **larger and heavier parts**, since the part itself never needs to be tilted — only the comparatively lighter spindle head assembly moves through the rotary motion.

:::key-concept
Trunnion and swivel-head configurations make opposite tradeoffs on the same basic problem: a trunnion table keeps the heavy, precision-critical part directly and rigidly supported at the cost of limiting its size; a swivel head accommodates much larger parts by moving the lighter spindle assembly instead, at some cost to head rigidity, particularly at more extreme tilt angles.
:::

## The Rigidity Tradeoff in Practice

A trunnion table's part-mounted rigidity generally supports tighter accuracy and better dynamic stiffness during cutting, since the part is close to the machine's structural base throughout its motion. A swivel head's moving spindle assembly, by contrast, can be less rigid — particularly as the head tilts to more extreme angles, where the cutting forces act through a longer, less direct structural path — which matters most for demanding finishing operations where dynamic stiffness directly affects surface quality.

:::pro-tip
Choosing between a trunnion-table and swivel-head machine (or a mixed configuration) for a specific job should weigh the actual part size and weight against how demanding the finishing requirements are — a trunnion table's rigidity advantage matters most on precision, tight-tolerance work within its size envelope; a swivel head's part-size flexibility matters most when the part itself simply wouldn't fit or wouldn't be practical to tilt on a trunnion machine.
:::

## Mixed Configurations

Some 5-axis machines split the two rotary axes between the table and the head — one rotary axis built into the table, the other into the spindle head — as a middle-ground design, balancing part-size capability against rigidity differently than a pure trunnion or pure swivel-head machine. This reflects the same underlying tradeoff, distributed differently rather than eliminated.

## Self-Check Questions

**1. In a trunnion table configuration, what moves to achieve rotary positioning, and what stays limited to linear motion?**

<details>
<summary>Show Answer</summary>

The table (and the workpiece on it) tilts and rotates; the spindle continues to move only in standard linear X, Y, Z directions.
</details>

**2. Why does a swivel head configuration accommodate larger, heavier parts than a trunnion table typically can?**

<details>
<summary>Show Answer</summary>

The part itself never needs to be tilted — only the comparatively lighter spindle head assembly moves through the rotary motion, rather than the entire workpiece and its supporting structure.
</details>

**3. Why does a trunnion table generally offer stronger rigidity and accuracy than a swivel head?**

<details>
<summary>Show Answer</summary>

The part is directly supported by the tilting table structure close to the machine's base throughout its motion, rather than cutting forces acting through a moving spindle assembly's longer structural path.
</details>

**4. When does a swivel head's rigidity disadvantage become most pronounced?**

<details>
<summary>Show Answer</summary>

At more extreme tilt angles, where cutting forces act through a longer, less direct structural path through the moving head assembly.
</details>

**5. What does a mixed table-and-head 5-axis configuration do differently from a pure trunnion or pure swivel-head design?**

<details>
<summary>Show Answer</summary>

It splits the two rotary axes between the table and the head — one in each — distributing the same underlying rigidity-versus-part-size tradeoff differently rather than eliminating it.
</details>
