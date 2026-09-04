---
title: "First-Article Inspection Reports (FAIR / AS9102)"
module: "17-quality-systems"
lessonNumber: 4
description: "Verify every single toleranced characteristic on the first part from a new or revised process, using a ballooned drawing to track each measurement unambiguously."
objectives:
  - "Explain what makes a first-article inspection different from routine in-process inspection"
  - "Explain what a ballooned drawing is and why it exists"
  - "Explain the purpose of the AS9102 report format specifically"
  - "Explain what triggers a new first-article inspection requirement"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["quality", "fair", "as9102", "first-article-inspection"]
---

## Checking Everything, Once, Before Full Production

A **first-article inspection (FAIR)** is a comprehensive, fully documented inspection of the very first part produced from a new — or significantly revised — process, checking **every single dimension and characteristic** on the print against the actual part, before that process is approved for full production. This is fundamentally different from the routine in-process sampling covered in the next lesson's SPC discussion, which checks selected characteristics on an ongoing sample of parts rather than every characteristic on one specific, comprehensively documented part.

:::key-concept
Routine in-process inspection assumes the process is already validated and is checking for drift over time. First-article inspection exists specifically to validate that assumption in the first place — confirming, comprehensively, that the process as actually run produces a part meeting every single specified requirement, before any ongoing sampling strategy is trusted to be sufficient.
:::

## The Ballooned Drawing

A **ballooned drawing** is a copy of the part print with every toleranced dimension and characteristic individually numbered ("ballooned") — each number corresponding directly to a specific line item in the FAIR report where that exact characteristic's measured value is recorded. This eliminates any ambiguity about which measurement corresponds to which print requirement, especially important on a complex print with dozens or hundreds of individually toleranced features.

## AS9102: The Aerospace Standard Format

**AS9102** is the specific, standardized report format for first-article inspections widely used and often required in the aerospace supply chain — providing a consistent, structured way to document material certifications, the ballooned drawing, and every individual characteristic's measured result, so a customer receiving the report can review it in a familiar, predictable format regardless of which supplier produced it. Even shops that aren't formally AS9100 certified sometimes use the AS9102 format specifically because customers in the aerospace supply chain expect and require it.

## What Triggers a New First-Article Inspection

A first-article inspection isn't a one-time event performed only when a part number is first introduced — it's required again whenever something changes that could genuinely affect whether the process still produces a conforming part: a significant process change (a new machine, a materially different fixture or tooling), a change in raw material source, a break in production of some defined length, or a design revision to the part itself.

:::warning
Treating a first-article inspection as a formality performed once and never revisited misses its actual purpose. A significant, unreviewed process change after the original FAIR — a different machine, a modified fixture, a new material lot from a different supplier — can genuinely produce a part that no longer matches what was originally validated, even if nothing on the print itself has changed.
:::

## Self-Check Questions

**1. How does a first-article inspection differ from routine in-process sampling inspection?**

<details>
<summary>Show Answer</summary>

A FAIR checks every single dimension and characteristic on the print, comprehensively, on one specific part — routine in-process sampling checks selected characteristics on an ongoing sample of parts, assuming the process is already validated.
</details>

**2. What problem does a ballooned drawing solve?**

<details>
<summary>Show Answer</summary>

It eliminates ambiguity about which measured value corresponds to which specific print requirement, by numbering every toleranced dimension and matching each number to a specific line item in the FAIR report.
</details>

**3. What is AS9102, and why do even non-AS9100-certified shops sometimes use it?**

<details>
<summary>Show Answer</summary>

The standardized aerospace-industry first-article inspection report format — some non-certified shops use it because their aerospace-supply-chain customers expect and require that specific, consistent format.
</details>

**4. Name two events, besides a part's initial introduction, that would trigger a new first-article inspection requirement.**

<details>
<summary>Show Answer</summary>

Any two of: a significant process change (new machine, materially different fixture or tooling), a change in raw material source, a defined break in production, or a design revision to the part.
</details>

**5. Why can skipping a new first-article inspection after a significant, unreviewed process change be a real risk, even if the print hasn't changed?**

<details>
<summary>Show Answer</summary>

The changed process — a different machine, a modified fixture, a new material lot — can genuinely produce a part that no longer matches what was originally validated, even though the print requirements themselves are unchanged.
</details>
