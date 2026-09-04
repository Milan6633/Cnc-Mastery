---
title: "Single-Point Threading on the Lathe"
module: "06-manual-machining"
lessonNumber: 5
description: "Cut a precise thread with a single-point tool synchronized to the spindle by the lead screw, using the compound rest infeed and threading dial."
objectives:
  - "Explain how the lead screw synchronizes carriage position to spindle rotation for threading"
  - "Set a threading tool square to the work using a thread-form gauge"
  - "Explain why threading infeed uses the compound rest angled to the thread flank instead of the cross-slide alone"
  - "Use the threading dial to re-engage the half-nut on the correct groove"
difficulty: "advanced"
duration: "50 minutes"
tags: ["manual-machining", "lathe", "threading"]
---

## Threading Requires Position Synchronized to Rotation

Every other lathe operation in this module removes material based on how far the tool travels. Threading is different: the tool must travel a distance that's precisely and repeatably linked to how much the spindle has rotated, pass after pass, or the threading tool will cut a new, offset groove instead of following the same helical path it started. That link is the lead screw and half-nut system introduced earlier in this module.

The **change gears** or **quick-change gearbox** between the spindle and lead screw set the exact ratio of spindle rotation to carriage travel, matching the specific thread pitch being cut — this is the mechanism that turns "the carriage moves" into "the carriage moves exactly one thread pitch per spindle revolution."

## Setting the Threading Tool

A threading tool is ground (or an insert is selected) to match the thread form's included angle — 60° for ISO metric and most common threads. Setting the tool **square to the work axis** is critical: an angled tool cuts a lopsided thread, with one flank steeper than the other, that a Go/No-Go thread gauge (covered in the precision measurement module) will fail even if the pitch and depth are otherwise correct.

Use a **thread-form gauge** ("fishtail" gauge) — a thin template cut to the exact thread angle — held against the tool tip, checking for even contact on both sides with no light visible, the same coincidence-of-fit principle used to check a thread pitch gauge against an existing thread.

## Infeed: Compound Rest, Not Straight In

Feeding a threading tool straight into the work via the cross-slide alone cuts on both flanks of the thread simultaneously, generating cutting pressure and heat on both sides at once and producing a poor finish and difficult chip control. Standard practice instead angles the **compound rest** to roughly half the thread's included angle (around 29-30° off the cross-slide axis for a 60° thread) and feeds each pass primarily along that angle:

:::key-concept
Feeding along the compound rest at an angle close to the thread flank concentrates each pass's cutting action mostly on one flank rather than both simultaneously, reducing tool pressure, improving chip evacuation, and giving a cleaner finish than feeding straight in with the cross-slide.
:::

Take multiple light passes rather than trying to cut a thread to full depth in one or two passes — each pass advances the compound rest a small additional amount, progressively deepening the thread while the carriage (locked to the lead screw through the half-nut) repeats the same helical path every time.

## The Threading Dial

Between passes, the tool must retract, the carriage must return to the starting position, and the half-nut must re-engage at exactly the right moment for the tool to drop back into the **same** groove rather than cut a new, offset one. The **threading dial** (chasing dial), geared to the lead screw, indicates when it's safe to close the half-nut again for a given thread pitch — its graduated markings correspond to specific points in the lead screw's rotation where re-engagement lands the tool correctly.

:::warning
Not every thread pitch and lead screw combination gives a clean threading-dial re-engagement point on every mark. For some pitch/lead-screw combinations, the safer, universal method is to leave the half-nut engaged for the entire operation and simply reverse the spindle at the end of each pass to bring the carriage back — slower, but immune to any threading-dial ambiguity.
:::

## Checking the Result

Verify a cut thread with a thread pitch gauge first (confirming the pitch matches the print) and, once cut to depth, with a thread ring or plug gauge — Go/No-Go, as covered in the precision measurement module — rather than trusting the compound rest dial reading alone. The dial tells you how far you fed; the gauge tells you whether the thread is actually correct.

## Self-Check Questions

**1. What mechanism links the carriage's position precisely to the spindle's rotation for threading?**

<details>
<summary>Show Answer</summary>

The lead screw, driven through change gears or a quick-change gearbox set to the ratio matching the specific thread pitch, connected to the carriage via the half-nut.
</details>

**2. Why does an angled (not square) threading tool produce a bad thread even if the pitch and depth are correct?**

<details>
<summary>Show Answer</summary>

It cuts a lopsided thread with one flank steeper than the other, which fails a Go/No-Go thread gauge check even though the pitch and overall depth may be right.
</details>

**3. Why is the compound rest angled to roughly half the thread's included angle for infeed, rather than feeding straight in with the cross-slide?**

<details>
<summary>Show Answer</summary>

Angled infeed concentrates cutting action mostly on one flank per pass instead of both simultaneously, reducing tool pressure, improving chip evacuation, and giving a cleaner finish.
</details>

**4. What does the threading dial actually indicate to the operator?**

<details>
<summary>Show Answer</summary>

The correct moment to re-engage the half-nut so the threading tool drops back into the same helical groove it started, rather than cutting a new, offset one.
</details>

**5. What's the more universal alternative when a thread pitch doesn't give a clean threading-dial re-engagement point?**

<details>
<summary>Show Answer</summary>

Leave the half-nut engaged for the whole operation and reverse the spindle at the end of each pass to bring the carriage back — slower, but not dependent on the threading dial's markings for that pitch.
</details>
