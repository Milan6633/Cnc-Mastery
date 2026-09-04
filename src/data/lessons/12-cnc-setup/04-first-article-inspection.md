---
title: "First Article Inspection Workflow"
module: "12-cnc-setup"
lessonNumber: 4
description: "Run, measure, and adjust the first part using a structured first-article inspection workflow."
objectives:
  - "Prepare the machine and program for a first-article run"
  - "Run the first part with single-block mode and reduced feed"
  - "Inspect each critical feature after the first part"
  - "Adjust offsets and re-run until the part is within tolerance"
duration: "45 minutes"
difficulty: "intermediate"
tags: ["setup", "inspection", "first-article", "quality"]
---

## What First Article Means

The first article is the first part produced from a new program. It is never the last. The goal is not to make a good part on the first try — it is to discover what needs to be adjusted so that every subsequent part is good.

## Before the First Run

### Program Check

- [ ] Run the program through a simulator (NC Viewer, CAMotics)
- [ ] Check the machine's backplot display
- [ ] Verify all tool numbers match the loaded tools
- [ ] Verify all offset numbers (H, D) match the tool table
- [ ] Confirm the work offset (G54) is set correctly

### Machine Check

- [ ] The part is clamped securely
- [ ] All clamps and fixtures clear the tool path
- [ ] The tool will not hit the chuck, vise, or table
- [ ] Coolant is on and directed at the cutting zone

### Control Check

- [ ] Feed override set to 50%
- [ ] Single block mode ON
- [ ] Hand near the feed hold button
- [ ] Emergency stop within reach

## Running the First Article

1. **Start the program.** Watch the first rapid move carefully. Is the tool going the right direction?
2. **First cut.** Watch the chip formation. Is the chip the right colour and shape?
3. **Stop and measure.** After the first critical feature is cut, stop the program and measure the feature.
4. **Adjust if needed.** If the dimension is out of tolerance, adjust the tool wear offset. Do not edit the program.
5. **Continue.** Run the next feature, stop, measure, adjust. Repeat for every critical feature.

## Inspection Points

Stop the program and inspect after each of these operations:

| Operation | What to measure | Tolerance check |
|---|---|---|
| Face | Overall length | ±0.2 mm |
| Rough OD | Diameter | ±0.2 mm (rough) |
| Finish OD | Diameter | ±0.05 mm |
| Bore | Internal diameter | ±0.025 mm |
| Thread | Thread gauge | Go / No-Go |
| Groove | Width, depth | ±0.1 mm |
| Part off | Length | ±0.2 mm |

## Measuring Tools for First Article

| Tool | Measures |
|---|---|
| Calliper | Lengths, widths, depths ±0.05 mm |
| Outside micrometer | OD diameters ±0.01 mm |
| Inside micrometer | ID diameters ±0.01 mm |
| Depth micrometer | Step depths, groove depths ±0.01 mm |
| Thread gauge | Thread fit (Go / No-Go) |
| Bore gauge | Internal diameters ±0.005 mm |

## The Adjust Loop

After each measurement:

1. **Within tolerance** — continue to the next operation.
2. **Out of tolerance, but consistent** — adjust the wear offset and continue. Example: the diameter is 0.03 mm oversize. Add -0.03 mm to the X wear offset.
3. **Out of tolerance, inconsistent** — stop and investigate. Check the tool, the holder, the workholding, the coolant.

## Documenting the First Article

Record the following for every first article:

- Program number and revision
- Date and operator
- Tool list with final offset values
- All measured dimensions and whether they passed
- Adjustments made (before and after)
- Notes for the production run

This documentation ensures that the second part starts where the first article ended — with proven offsets and a known-good program.

## Self-Check Questions

**1. What is the goal of a first article run?**

<details>
<summary>Show Answer</summary>

The goal is to discover what needs to be adjusted so that every subsequent part is within tolerance. The first article is a diagnostic process, not a production run.
</details>

**2. What should you do if a diameter is 0.03 mm oversize on the first article?**

<details>
<summary>Show Answer</summary>

Adjust the X wear offset by -0.03 mm. Do not edit the program. The wear offset shifts the tool by the exact amount needed to bring the dimension into tolerance.
</details>

**3. Why should you inspect after each critical operation rather than at the end?**

<details>
<summary>Show Answer</summary>

If you wait until the end, you do not know which operation caused the error. Inspecting after each operation isolates the problem and lets you adjust before the next part.
</details>

**4. What does it mean if a dimension is out of tolerance and inconsistent?**

<details>
<summary>Show Answer</summary>

It means the problem is not a simple offset error. Something else is wrong: tool wear, workholding movement, coolant issues, or a machine problem. Stop and investigate before continuing.
</details>