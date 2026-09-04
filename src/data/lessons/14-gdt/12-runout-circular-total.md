---
title: "Runout: Circular Runout and Total Runout"
module: "14-gdt"
lessonNumber: 12
description: "Check a rotating part's surface deviation directly with a dial indicator — circular runout element by element, or total runout across the entire surface at once."
objectives:
  - "Explain how runout is physically measured with a dial indicator"
  - "Distinguish circular runout from total runout in what each checks"
  - "Explain what circular runout controls simultaneously at each checked location"
  - "Explain why total runout is a more comprehensive requirement than circular runout"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["gdt", "runout", "asme-y14.5"]
---

## A Control Defined by Its Measurement Method

Runout is unusual among GD&T controls in that its definition is tied directly to a specific, practical measurement setup: the part is mounted and rotated about a datum axis, while a dial indicator (covered in the precision measurement module) is held against the surface being checked. **Runout is, quite literally, what that indicator reads** as the part rotates — total indicator movement, or full indicator movement (FIM), directly against a stated tolerance.

:::key-concept
Unlike form or position tolerances, which are defined by abstract tolerance zones a CMM or other measurement method must then figure out how to verify, runout is defined by the measurement itself — mount the part on the datum axis, rotate it, and read the indicator. The physical setup and the geometric definition are essentially the same thing.
:::

## Circular Runout

**Circular runout** checks **one circular element at a time** — the indicator stays at a fixed position along the part's length while the part rotates a full revolution, and the total indicator movement at that one position must stay within the stated tolerance. To check runout along a longer feature, this is repeated at multiple positions, each evaluated independently.

Because the indicator is reading actual surface deviation as the part rotates about the datum axis, circular runout simultaneously catches **both** circularity error at that cross-section **and** any error in how that cross-section is centered relative to the datum axis (coaxiality) — a combined check that neither circularity alone nor a simple position check alone would capture in one measurement.

## Total Runout

**Total runout** extends the same basic setup by adding continuous motion along the part's length: the indicator sweeps along the full surface **while** the part rotates, rather than checking discrete fixed positions. The total indicator movement across this combined rotation-and-sweep motion must stay within the stated tolerance across the entire surface at once.

:::warning
Total runout is a genuinely more comprehensive — and generally more difficult to achieve — requirement than circular runout, because it adds a straightness and taper element across the full length on top of what circular runout alone checks at each position. A feature can pass circular runout checked at several individual positions and still fail total runout if there's a taper or bow between those checked positions that the discrete circular checks happened to miss.
:::

## Self-Check Questions

**1. How is runout physically measured, and how does that differ from most other GD&T controls?**

<details>
<summary>Show Answer</summary>

The part is rotated about a datum axis while a dial indicator reads the surface directly — runout is essentially defined by that measurement itself, unlike most controls, which are defined as abstract tolerance zones that a chosen measurement method must then verify.
</details>

**2. What two things does circular runout catch simultaneously at a single checked position?**

<details>
<summary>Show Answer</summary>

Circularity error at that cross-section and coaxiality error (how well that cross-section is centered relative to the datum axis) — both captured in the same single indicator reading as the part rotates.
</details>

**3. What does total runout add to circular runout's basic setup?**

<details>
<summary>Show Answer</summary>

Continuous indicator motion along the part's length while it rotates, rather than checking only discrete fixed positions — adding a straightness and taper element across the full surface.
</details>

**4. Why can a feature pass circular runout at several checked positions but still fail total runout?**

<details>
<summary>Show Answer</summary>

A taper or bow between the discrete checked positions could go undetected by circular runout's position-by-position checks, while total runout's continuous sweep across the full length would catch it.
</details>

**5. What must a part be mounted on to check either circular or total runout?**

<details>
<summary>Show Answer</summary>

The datum axis referenced in the runout callout — the part rotates about that axis while the indicator reads the controlled surface.
</details>
