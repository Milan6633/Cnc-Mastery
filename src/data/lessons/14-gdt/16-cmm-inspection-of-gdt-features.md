---
title: "CMM Inspection of GD&T Features"
module: "14-gdt"
lessonNumber: 16
description: "Verify a GD&T callout with a CMM by establishing the same datum reference frame the print defines, then evaluating the feature's actual measured geometry against its tolerance zone."
objectives:
  - "Explain why a CMM must establish the datum reference frame before checking a GD&T callout"
  - "Explain how a CMM verifies a position tolerance from measured points"
  - "Explain how CMM inspection handles material condition modifiers"
  - "Recognize the flexibility advantage a CMM offers over dedicated gauging"
difficulty: "advanced"
duration: "40 minutes"
tags: ["gdt", "cmm", "inspection", "asme-y14.5"]
---

## Establishing the Datum Reference Frame First

Checking any GD&T callout on a CMM (introduced in the precision measurement module) starts the same way a physical fixture setup does: the CMM must first **establish the part's datum reference frame** — probing the primary, secondary, and tertiary datum features in precedence order, exactly as covered in the previous lesson's fixture design discussion, before any toleranced feature can be meaningfully measured relative to it.

:::key-concept
A CMM measurement of a GD&T-toleranced feature is only as meaningful as the datum reference frame it was measured against. Skipping or rushing the datum establishment step — probing too few points, or probing the wrong features — undermines every subsequent measurement, no matter how precisely the feature itself is probed afterward.
:::

## Verifying Position from Measured Points

To check a position tolerance, the CMM probes enough points on the feature (a bore's surface, for example) to calculate its actual center — the same feature-fitting process covered in the precision measurement module's CMM lesson, where individual XYZ points get fit to a geometric feature by software. That calculated actual center is then compared against the feature's theoretical true position (defined by the print's basic dimensions), and the distance between them is checked against the stated position tolerance zone.

## Handling Material Condition Modifiers

When a position callout carries an MMC or LMC modifier, CMM software calculates the feature's **actual bonus tolerance** directly from its measured size, exactly as covered in the earlier bonus tolerance lesson — measuring both the feature's actual size and its actual position, then combining the stated tolerance with the calculated bonus to determine the total allowable position error for that specific part. This is one of the genuine advantages of CMM inspection over a fixed functional gauge: it reports the actual measured values and the actual bonus earned, rather than a simple pass/fail at the gauge's built-in worst-case condition.

:::pro-tip
A CMM inspection report for an MMC-toleranced feature typically shows both the feature's measured size and its calculated bonus tolerance explicitly — reviewing both values, not just a final pass/fail result, reveals how much margin (or how little) a specific part actually has, which is valuable information for understanding whether a process is drifting toward a limit even while individual parts are still passing.
:::

## The Flexibility Advantage

A CMM's core advantage over dedicated functional gauging (covered in the next lesson) is flexibility: a single CMM, reprogrammed with a new part program, can inspect any GD&T callout on any part geometry, where a functional gauge is built for one specific feature on one specific part and can't be repurposed. This makes a CMM the practical choice for low-volume work, prototype inspection, first-article inspection, or any situation where building a dedicated gauge for every feature wouldn't be economically justified.

## Self-Check Questions

**1. Why must a CMM establish the part's datum reference frame before checking a GD&T-toleranced feature?**

<details>
<summary>Show Answer</summary>

The toleranced feature's position, orientation, or location is only meaningful relative to the datum reference frame — measuring the feature without first correctly establishing that reference frame produces a measurement that doesn't actually verify the print's requirement.
</details>

**2. How does a CMM determine a bored hole's actual position for a position tolerance check?**

<details>
<summary>Show Answer</summary>

It probes enough points on the hole's surface to fit and calculate the hole's actual center, then compares that calculated center against the theoretical true position defined by the print's basic dimensions.
</details>

**3. How does CMM software handle an MMC-modified position tolerance differently from a simple pass/fail gauge check?**

<details>
<summary>Show Answer</summary>

It calculates the feature's actual bonus tolerance directly from its measured size, combining that with the stated tolerance to determine the specific part's total allowable position error, rather than only reporting a simple pass or fail.
</details>

**4. Why is reviewing both a part's measured size and its calculated bonus tolerance more informative than just a pass/fail result?**

<details>
<summary>Show Answer</summary>

It reveals how much margin a specific part actually has, which can show whether a process is drifting toward a limit even while individual parts are still technically passing.
</details>

**5. What is a CMM's core practical advantage over a dedicated functional gauge?**

<details>
<summary>Show Answer</summary>

Flexibility — a single CMM can inspect any GD&T callout on any part geometry by reprogramming, while a functional gauge is built for one specific feature on one specific part and can't be repurposed.
</details>
