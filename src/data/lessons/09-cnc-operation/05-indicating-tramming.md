---
title: "Indicating and Tramming"
module: "09-cnc-operation"
lessonNumber: 5
description: "Use a dial indicator, coaxial indicator, and tramming tool to align vises, fixtures, and the spindle head."
objectives:
  - "Sweep a vise or fixture true using a dial indicator"
  - "Locate the centre of a hole using a coaxial indicator"
  - "Tram the spindle head to ensure the Z axis is perpendicular to the table"
  - "Document indicator readings for repeatable setups"
duration: "45 minutes"
difficulty: "intermediate"
tags: ["cnc", "operation", "indicating", "tramming", "setup"]
---

## Why Indicating Matters

A vise that is 0.1 mm out of alignment produces parts that are 0.1 mm out of square. A spindle head that is 0.05 mm out of tram produces a taper across the face of a part. Indicating and tramming are the most important setup skills after offsetting.

## Dial Indicator Basics

| Type | Best for | Resolution |
|---|---|---|
| Lever-style (test indicator) | Sweeping surfaces, hole centres | 0.01 mm |
| Plunger-style (dial indicator) | Straight-line measurement, tramming | 0.01 mm |
| Digital indicator | Direct reading, data collection | 0.001 mm |

Mount the indicator in the spindle using a gauge holder or a Noga arm. The indicator tip should be perpendicular to the surface being measured.

## Sweeping a Vise True

1. Mount the indicator in the spindle with the tip contacting the fixed jaw of the vise.
2. Jog the spindle so the indicator tip is at one end of the jaw, near the top.
3. Set the indicator dial to zero.
4. Slowly jog the spindle along the jaw to the other end.
5. Read the indicator at the far end. The difference is the jaw alignment error.
6. Tap the vise in the direction needed to reduce the error.
7. Repeat until the error is within 0.01 mm over the jaw length.

## Finding the Centre of a Hole with a Coaxial Indicator

A coaxial indicator mounts in the spindle and shows the centre of a hole without sweeping:

1. Mount the coaxial indicator in the spindle.
2. Position the spindle roughly over the centre of the hole.
3. Lower the indicator tip into the hole.
4. Slowly rotate the spindle by hand. The indicator needle shows the offset direction.
5. Move the spindle (X and Y) until the needle stops moving as the spindle rotates.
6. The spindle is now centred over the hole. Set G54 X and Y at this position.

## Tramming the Spindle Head

A trammed spindle is perpendicular to the table in both X and Y. An out-of-tram spindle causes one side of a face cut to be deeper than the other.

1. Mount a dial indicator in the spindle with the tip contacting the table (or a flat plate).
2. Rotate the spindle 180° and note the indicator reading.
3. The difference between 0° and 180° is the tram error in that axis.
4. Adjust the head tilt (trunnion bolts) until the error is within 0.01 mm per 100 mm of sweep.
5. Repeat for the other axis.

Most machines have a tram tolerance of 0.01–0.02 mm per 100 mm of radius. Tighten the head bolts after adjusting.

## Indicating a Fixture Plate

For fixture plates with multiple workholding positions:

1. Mount the indicator in the spindle.
2. Sweep the top face of the fixture plate. The Z difference across the plate should be within 0.02 mm.
3. Sweep a reference edge. The X or Y alignment should be within 0.01 mm over the edge length.
4. Record the indicator readings on the setup sheet. This helps you detect fixture wear over time.

## Self-Check Questions

**1. What is the difference between a lever-style indicator and a plunger-style indicator?**

<details>
<summary>Show Answer</summary>

A lever-style (test) indicator has a pivoting arm and is used for sweeping surfaces and finding hole centres. A plunger-style (dial) indicator has a linear plunger and is used for tramming and straight-line measurement.
</details>

**2. How do you align a vise parallel to the X axis?**

<details>
<summary>Show Answer</summary>

Mount the indicator in the spindle. Touch the indicator tip to the fixed jaw near one end and set zero. Jog the spindle along the jaw to the other end. The indicator reading shows the error. Tap the vise until the error is within 0.01 mm.
</details>

**3. What does a coaxial indicator tell you?**

<details>
<summary>Show Answer</summary>

A coaxial indicator shows when the spindle is centred over a hole. When the indicator needle stops moving as the spindle rotates, the spindle axis is aligned with the hole centre.
</details>

**4. What is the tram tolerance for a typical CNC mill?**

<details>
<summary>Show Answer</summary>

Typically 0.01–0.02 mm per 100 mm of sweep radius. The head should be adjusted if the error exceeds this range.
</details>