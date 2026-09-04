---
title: "Stepover and Cusp-Height Calculations"
module: "15-cam-milling"
lessonNumber: 14
description: "Work backward from a required surface finish to the maximum stepover a finishing tool can use, instead of guessing at a stepover value."
objectives:
  - "Explain what cusp (scallop) height physically is"
  - "Explain how stepover and tool radius each affect resulting cusp height"
  - "Apply the standard ball-nose cusp height approximation to choose a stepover"
  - "Explain the cycle-time tradeoff of specifying a finer finish than a part actually requires"
difficulty: "advanced"
duration: "45 minutes"
tags: ["cam", "fusion360", "mastercam", "stepover", "cusp-height", "scallop-height"]
---

## What Cusp Height Actually Is

A round-profile finishing tool — a ball-nose end mill, most commonly — cutting a series of parallel or scalloped passes across a surface doesn't leave a perfectly flat result between those passes. Because the tool's cutting edge is curved, a small ridge of material remains standing between each pass, at the point where two adjacent passes' curved cuts meet without quite overlapping down to zero. This ridge's peak-to-valley height is the **cusp height** (or scallop height) — a direct, physical measure of how fine or coarse the resulting surface finish actually is.

## How Stepover and Tool Radius Both Affect It

Cusp height depends on both the toolpath's stepover and the tool's own radius, in opposite directions:

- **Larger stepover** — spacing passes further apart leaves a taller ridge standing between them, increasing cusp height.
- **Larger tool radius** — a bigger ball-nose tool has gentler curvature at any given cutting depth, leaving a shallower cusp for the same stepover, decreasing cusp height.

:::key-concept
Cusp height is a direct, calculable consequence of stepover and tool radius working against each other — a finer finish can be achieved either by reducing stepover (more passes, more cycle time) or by using a larger-radius tool (gentler curvature, but a larger tool may not fit the feature or may compromise other aspects of the job). Neither adjustment is free; both trade something else to reduce cusp height.
:::

## The Standard Approximation

For a ball-nose tool machining a relatively flat surface, cusp height is commonly approximated as:

**Cusp height ≈ stepover² ÷ (8 × tool radius)**

This is a widely used approximation (accurate for a stepover that's small relative to the tool radius, which covers the great majority of practical finishing situations) rather than an exact formula for every possible surface condition — CAM software typically calculates the actual resulting cusp height directly from the real toolpath and surface geometry rather than relying on this simplified approximation, but the formula is a useful way to reason about the stepover-versus-finish tradeoff before running a full toolpath calculation.

:::pro-tip
Rearranging the approximation to solve for stepover — stepover ≈ √(8 × tool radius × target cusp height) — lets a programmer work backward from an actual required surface finish to the maximum stepover that will achieve it, rather than guessing at a stepover value and checking the resulting finish after the fact.
:::

## Working Backward from the Actual Requirement

Choosing a stepover should start from the part's actual functional or cosmetic surface finish requirement, not from an arbitrary default value. A finer stepover than the part genuinely needs directly increases the number of passes — and therefore the finishing operation's cycle time — for no functional benefit, echoing the same "don't specify tighter than the function requires" theme covered throughout this curriculum's DFM and tolerancing lessons.

:::warning
Cusp height doesn't scale linearly with stepover — it scales with the *square* of stepover in this approximation. Halving the target cusp height (for the same tool) only requires reducing stepover to about 71% of its previous value (1/√2), which still means roughly 41% more passes to cover the same surface area. Specifying a far finer finish than a part actually requires is not a free choice — it has a real, calculable cost in machine time, even if that cost grows more gradually than a naive "half the cusp, half the stepover" guess would suggest.
:::

## Self-Check Questions

**1. What physically causes cusp height to exist at all, rather than a finishing pass leaving a perfectly flat surface?**

<details>
<summary>Show Answer</summary>

A round-profile tool's curved cutting edge leaves a small ridge of material standing between adjacent passes, where the curved cuts from each pass meet without fully overlapping down to zero.
</details>

**2. How does increasing stepover affect cusp height, and how does increasing tool radius affect it?**

<details>
<summary>Show Answer</summary>

A larger stepover increases cusp height (passes spaced further apart leave a taller ridge). A larger tool radius decreases cusp height (gentler curvature leaves a shallower cusp for the same stepover).
</details>

**3. What does the approximation "cusp height ≈ stepover² ÷ (8 × tool radius)" let a programmer calculate?**

<details>
<summary>Show Answer</summary>

An estimate of the resulting cusp (scallop) height for a given stepover and ball-nose tool radius, or — rearranged — the maximum stepover needed to achieve a specific target cusp height.
</details>

**4. Why should stepover be chosen by working backward from the part's actual finish requirement, rather than picking an arbitrary value?**

<details>
<summary>Show Answer</summary>

A finer stepover than actually needed increases the number of passes and finishing cycle time for no functional benefit — the same "don't over-specify beyond what the function requires" principle covered throughout the curriculum's tolerancing and DFM lessons.
</details>

**5. Roughly how does halving the target cusp height affect the number of finishing passes needed, according to the standard approximation?**

<details>
<summary>Show Answer</summary>

Because cusp height scales with the square of stepover, halving it only requires reducing stepover to about 71% of its previous value (1/√2) — which still means roughly 41% more passes, not a full doubling.
</details>
