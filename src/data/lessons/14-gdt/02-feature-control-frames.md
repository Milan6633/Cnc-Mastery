---
title: "Feature Control Frames: Reading and Interpreting"
module: "14-gdt"
lessonNumber: 2
description: "Read a GD&T feature control frame left to right — geometric characteristic, tolerance value and zone shape, material modifier, and datum references in precedence order."
objectives:
  - "Identify the compartments of a feature control frame in reading order"
  - "Explain what the diameter symbol inside the tolerance compartment changes about the zone shape"
  - "Read datum references in a feature control frame in their correct precedence order"
  - "Interpret a complete, real feature control frame from a print"
difficulty: "intermediate"
duration: "45 minutes"
tags: ["gdt", "feature-control-frame", "asme-y14.5"]
---

## The Standard Structure

Every GD&T callout is expressed in a **feature control frame** — a rectangular box divided into compartments, read left to right in a fixed, standardized order. Once that order is understood, any feature control frame on any print becomes readable, regardless of which specific geometric control it happens to specify.

## Compartment 1: The Geometric Characteristic Symbol

The leftmost compartment holds a symbol representing one of the geometric characteristics covered later in this module — flatness, perpendicularity, position, runout, and the others. This symbol alone tells you *what kind* of control is being applied, before reading anything else in the frame.

## Compartment 2: Tolerance Value and Zone Shape

The next compartment states the actual tolerance value — the numeric size of the allowed tolerance zone. Two details here change how that zone is interpreted:

- A **diameter symbol (⌀)** placed before the tolerance value means the tolerance zone is cylindrical, not a flat band — this is standard for position tolerance on a hole, reflecting that the hole's axis can be off in any direction within a circular zone, not just along one axis.
- A **material condition modifier** (a circled M for MMC, or a circled L for LMC — covered in an upcoming lesson) may follow the tolerance value, indicating the tolerance is allowed to grow (bonus tolerance) as the feature departs from that material condition.

:::key-concept
The presence or absence of the diameter symbol is one of the most consequential details in a feature control frame, and one of the easiest to miss at a glance. A position tolerance of 0.2 without the diameter symbol behaves differently than ⌀0.2 with it — always check for that symbol specifically rather than just reading the numeric value.
:::

## Compartments 3–5: Datum References, in Precedence Order

The remaining compartments list the **datum references** the control is measured relative to — typically up to three, labeled with letters (A, B, C, and so on) matching the datum feature symbols placed elsewhere on the print. These are read left to right as **primary, secondary, and tertiary**, in that exact order, and the order is not arbitrary: it determines the precedence in which the datums are established, directly paralleling the 3-2-1 locating principle covered in the workholding module (primary datum removes the most degrees of freedom, secondary removes fewer, tertiary removes the last one).

:::warning
Datum reference order inside a feature control frame is not interchangeable. |A|B|C| and |B|A|C| describe two genuinely different datum reference frames with different precedence, and can produce a different accepted or rejected result for the exact same physical part. Always read datum letters in the order they actually appear in the frame.
:::

## Reading a Complete Feature Control Frame

Putting the compartments together, a feature control frame reads as a complete statement: **[geometric characteristic] of [tolerance value, with zone shape and any material modifier] relative to [primary datum], then [secondary datum], then [tertiary datum]**. A position callout might read: position, ⌀0.2 at MMC, relative to datum A primary, datum B secondary, datum C tertiary — a single, complete, unambiguous statement of exactly what's being controlled and how.

:::pro-tip
When a feature control frame first looks intimidating, break it down compartment by compartment in the fixed reading order rather than trying to absorb the whole symbol at once. The structure is always the same — characteristic, then tolerance and modifiers, then datums in precedence order — even when the specific symbols and values change from print to print.
:::

## Self-Check Questions

**1. What does the leftmost compartment of a feature control frame tell you?**

<details>
<summary>Show Answer</summary>

Which geometric characteristic is being controlled — flatness, perpendicularity, position, runout, or another of the controls covered later in this module — via a standardized symbol.
</details>

**2. What does a diameter symbol (⌀) before the tolerance value change about the tolerance zone?**

<details>
<summary>Show Answer</summary>

It makes the zone cylindrical rather than a flat band — standard for position tolerance on a hole, reflecting that the feature's axis can deviate in any direction within a circular zone, not along just one axis.
</details>

**3. In what order are datum references read within a feature control frame, and what does that order represent?**

<details>
<summary>Show Answer</summary>

Left to right as primary, secondary, and tertiary — representing the precedence in which each datum is established, directly paralleling the 3-2-1 locating principle's primary/secondary/tertiary planes.
</details>

**4. Why can |A|B|C| and |B|A|C| describe two genuinely different requirements even though they reference the same three datum letters?**

<details>
<summary>Show Answer</summary>

The order determines precedence — which datum is established first, second, and third — and reversing the order changes the actual datum reference frame, which can produce a different accepted or rejected result for the same physical part.
</details>

**5. What is a practical strategy for reading an unfamiliar or complex feature control frame?**

<details>
<summary>Show Answer</summary>

Break it down compartment by compartment in the fixed reading order — characteristic symbol, then tolerance value and modifiers, then datums in precedence order — rather than trying to interpret the whole symbol at once.
</details>
