---
title: "Face Milling and End Milling"
module: "06-manual-machining"
lessonNumber: 10
description: "True a broad flat surface with a face mill, and cut profiles and shoulders with an end mill, understanding climb versus conventional milling."
objectives:
  - "Explain when a face mill is chosen over an end mill for a flat surface"
  - "Distinguish peripheral (side) milling from center-cutting plunge capability on an end mill"
  - "Explain the difference between climb milling and conventional milling"
  - "Explain why conventional milling is the safer default on a manual knee mill"
difficulty: "beginner"
duration: "45 minutes"
tags: ["manual-machining", "milling", "face-milling", "end-milling", "climb-milling"]
---

## Face Milling: Truing a Broad Surface

A **face mill** carries multiple cutting inserts arranged around a large-diameter cutter body, and cuts a broad, flat surface perpendicular to the spindle axis in relatively few passes. Because a face mill's diameter is typically significantly larger than the width of the cut it's taking, multiple inserts engage the surface at once, giving a more consistent finish and faster material removal across a wide area than repeatedly stepping over with a narrower tool would.

Face milling is the standard choice for truing a large top surface — establishing a flat, known reference before other features are machined from it, the same role facing plays at the start of lathe work.

## End Milling

An **end mill** cuts primarily along its outside diameter (peripheral or side milling), removing material along a wall, profile, or shoulder as it's fed sideways through the cut. Some end mills are also **center-cutting**, meaning their bottom flutes extend to the tool's centerline, allowing the tool to plunge straight down into material rather than requiring a pre-drilled starting hole — a non-center-cutting end mill cannot safely plunge this way and needs a starting hole or a ramping entry instead.

:::key-concept
Whether an end mill can plunge straight down depends entirely on whether it's center-cutting. Trying to plunge with a non-center-cutting end mill pushes material at the very center of the tool with no cutting edge there to remove it, risking a broken tool.
:::

End milling covers a wide range of common operations: cutting a slot to width, milling a pocket, machining a step or shoulder to a specific depth and wall location, and profiling an external or internal contour.

## Climb Milling vs. Conventional Milling

The direction a cutter rotates relative to the feed direction changes how each tooth engages the material, with real consequences for finish, tool life, and — on some machines — safety:

- **Conventional milling**: each tooth enters the cut at zero chip thickness and the chip grows thicker as the tooth exits. Cutting forces tend to lift and push the workpiece slightly away from the cutter.
- **Climb milling**: each tooth enters at maximum chip thickness and the chip thins as the tooth exits. Cutting forces tend to pull the workpiece into the cutter and push it down into the table, generally giving a better surface finish and reduced tool wear.

:::warning
Climb milling pulls the workpiece — and, through the table's feed mechanism, the table itself — toward the cutter. On a manual knee mill without an anti-backlash table feed screw, that pull can grab any play (backlash) in the feed screw and yank the table forward uncontrolled, potentially breaking the tool or damaging the part. Conventional milling doesn't have this failure mode, since its forces work against the feed direction instead of with it.
:::

Modern CNC machines and mills fitted with anti-backlash feed screws can climb mill safely and often prefer it for the finish and tool-life benefits. On an older manual knee mill of unknown backlash condition, **conventional milling is the safer default** unless the machine is specifically known to handle climb milling without excessive backlash.

## Self-Check Questions

**1. Why does a face mill typically true a flat surface faster and more consistently than a smaller end mill stepping over repeatedly?**

<details>
<summary>Show Answer</summary>

A face mill's diameter is significantly larger than the cut width, so multiple inserts engage the surface at once, covering a wide area with fewer passes and a more consistent finish.
</details>

**2. What determines whether an end mill can safely plunge straight down into material?**

<details>
<summary>Show Answer</summary>

Whether it's center-cutting — its bottom flutes must extend to the tool's centerline. A non-center-cutting end mill has no cutting edge at center and can be damaged by plunging.
</details>

**3. What's the key difference in chip formation between climb milling and conventional milling?**

<details>
<summary>Show Answer</summary>

In conventional milling, chip thickness starts at zero and grows as the tooth exits. In climb milling, chip thickness starts at maximum and thins as the tooth exits — the reverse pattern.
</details>

**4. Why is climb milling riskier on a manual knee mill with a table feed screw that has backlash?**

<details>
<summary>Show Answer</summary>

Climb milling's cutting forces pull the workpiece and table toward the cutter. Backlash in the feed screw can let that pull yank the table forward uncontrolled, risking a broken tool or damaged part.
</details>

**5. Why is conventional milling the safer default on an older manual mill of unknown backlash condition?**

<details>
<summary>Show Answer</summary>

Conventional milling's cutting forces work against the feed direction rather than pulling the table into the cut, so it doesn't have the backlash-grab failure mode that climb milling can trigger.
</details>
