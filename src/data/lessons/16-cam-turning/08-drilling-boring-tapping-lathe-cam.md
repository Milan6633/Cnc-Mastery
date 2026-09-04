---
title: "Drilling, Boring, and Tapping on the Lathe in CAM"
module: "16-cam-turning"
lessonNumber: 8
description: "Program centerline hole operations on the lathe — center drilling, drilling, boring, and tapping — through the turret's own dedicated live or static tool stations."
objectives:
  - "Explain why lathe hole-making operations run along the spindle centerline"
  - "Compare a static drilling tool station to a live (rotating) tool station"
  - "Apply the boring bar rigidity principle from manual machining to CAM-programmed lathe boring"
  - "Explain how rigid tapping applies to lathe-mounted tapping operations"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cam", "turning", "lathe-cam", "drilling", "boring", "tapping"]
---

## Hole-Making Along the Centerline

Unlike milling, where a hole can be positioned anywhere across the table, lathe hole-making operations — center drilling, drilling, boring, and tapping — are fundamentally **centerline operations**: the tool works along the spindle's rotational axis while the part itself rotates, the CNC-programmed version of the same centerline hole operations covered in the manual machining module's lathe lessons.

## Static vs. Live Tooling for Hole Operations

A basic turning center can perform centerline drilling and tapping using a **static** tool station — the drill or tap held stationary in the turret while the rotating workpiece does the cutting, exactly matching the manual lathe drilling technique covered earlier in this curriculum. Machines equipped with **live tooling** (covered in more depth later in this module) can also rotate the tool itself, which matters less for a simple centerline hole (where the workpiece's own rotation already does the job) but becomes essential for off-center or cross-axis hole operations covered in the live-tooling lessons ahead.

## Boring: The Same Rigidity Principle Applies

A CAM-programmed lathe boring operation carries forward exactly the boring bar rigidity principle covered in the manual machining module: minimizing the bar's overhang past the toolholder remains just as critical for a CNC-programmed boring pass as it is for a manually fed one, since the physical deflection risk from an overly long, thin boring bar doesn't depend on who or what is controlling the feed.

:::key-concept
CAM can calculate a boring toolpath's motion precisely, but it can't compensate for a boring bar deflecting under cutting force due to excessive, avoidable overhang — that's a physical setup problem, not a programming problem, and it needs to be solved the same way covered in manual machining: minimize overhang, don't rely on the software to somehow correct for it.
:::

## Tapping on the Lathe

Tapping a centerline hole on a CNC lathe uses **rigid tapping**, covered in the milling CAM module — the control synchronizes spindle rotation to the tap's axial feed electronically, achieving the same precise pitch-matched advancement covered for milling rigid tapping, just applied here with the workpiece rotating and the tap advancing along the centerline rather than a stationary workpiece and a rotating tool.

:::pro-tip
Recognizing that lathe rigid tapping and milling rigid tapping rely on exactly the same underlying control capability — synchronized spindle-to-feed motion — makes it easier to reason about troubleshooting either one: the same categories of problem (encoder accuracy, control synchronization capability) apply to both, even though one involves a rotating part and the other a rotating tool.
:::

## Self-Check Questions

**1. Why are lathe hole-making operations described as centerline operations, unlike milling?**

<details>
<summary>Show Answer</summary>

The tool works along the spindle's rotational axis while the rotating part does the cutting, rather than being positioned anywhere across a table the way a milling hole can be.
</details>

**2. What is the difference between a static and a live tool station for lathe drilling?**

<details>
<summary>Show Answer</summary>

A static station holds the drill or tap stationary while the rotating workpiece does the cutting; a live tool station can also rotate the tool itself, which matters for off-center or cross-axis operations rather than simple centerline holes.
</details>

**3. Why does the boring bar rigidity principle from manual machining still apply to a CAM-programmed boring operation?**

<details>
<summary>Show Answer</summary>

CAM can calculate the toolpath's motion precisely, but it can't compensate for a boring bar physically deflecting under cutting force due to excessive overhang — that's a physical setup issue independent of who or what controls the programmed feed.
</details>

**4. What control capability does lathe rigid tapping rely on, and how does it compare to milling rigid tapping?**

<details>
<summary>Show Answer</summary>

Electronic synchronization of spindle rotation to axial feed, achieving precise pitch-matched advancement — the same underlying capability covered for milling rigid tapping, just applied with the workpiece rotating instead of the tool.
</details>

**5. Why might understanding lathe and milling rigid tapping as the same underlying mechanism help with troubleshooting either one?**

<details>
<summary>Show Answer</summary>

The same categories of problem — encoder accuracy, the control's synchronization capability — apply to both, even though one setup rotates the part and the other rotates the tool.
</details>
