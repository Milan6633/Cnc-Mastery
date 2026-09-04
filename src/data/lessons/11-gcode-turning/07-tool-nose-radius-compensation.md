---
title: "Tool Nose Radius Compensation (TNRC)"
module: "11-gcode-turning"
lessonNumber: 7
description: "Program G41 and G42 for turning to compensate the tool nose radius on tapers, radii, and chamfers."
objectives:
  - "Explain why tool nose radius compensation is needed for angled surfaces"
  - "Select G41 or G42 based on the cutting direction and tool orientation"
  - "Use the correct tool orientation code (imaginary tip) in the T word"
  - "Lead in and lead out properly when activating and cancelling compensation"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["gcode", "turning", "TNRC", "G41", "G42", "tool-offset"]
---

## The Need for TNRC

A turning insert has a nose radius (typically 0.4, 0.8, or 1.2 mm). When cutting straight diameters or faces, the nose radius does not affect the programmed size. But on tapers, radii, and chamfers, the tool path must be offset by the nose radius to produce the correct profile.

Tool nose radius compensation (TNRC) shifts the tool path by the nose radius so that the programmed coordinates match the finished part profile.

## G41 and G42 for Turning

| Code | Meaning | Used for |
|---|---|---|
| G41 | Tool left of the path | OD turning toward the chuck; facing OD toward centre |
| G42 | Tool right of the path | ID boring toward the chuck; facing ID outward |

Determining the direction: stand as if you are the tool, facing the direction of travel. If the material is on your left, use G41. If the material is on your right, use G42.

## Tool Orientation (Imaginary Tip)

The T word in a turning program (T0101) includes the tool orientation code. The last digit of the offset register tells the control which quadrant of the insert is active:

| Orientation | Tool | Example |
|---|---|---|
| 1 | OD turning, right-hand | OD roughing, standard tool |
| 2 | OD turning, left-hand | Back-facing OD |
| 3 | OD turning, right-hand (facing) | OD facing, groove toward chuck |
| 4 | ID boring, right-hand | Internal boring bar |
| 5 | ID boring, left-hand | Back-facing ID |
| 6 | ID boring, right-hand (facing) | Internal facing, groove toward spindle |
| 7 | OD turning, left-hand (facing) | OD facing, groove toward tailstock |
| 8 | OD turning, right-hand (facing) | OD facing, groove toward chuck |

The most common setup: a right-hand tool turning the OD, cutting toward the chuck, uses orientation 3.

## Activating and Cancelling

```gcode
G42 G00 X55.0 Z2.0    (approach with comp on)
G01 Z-60.0 F0.3       (turn the OD)
G01 X60.0             (face out)
G40 G00 X65.0 Z5.0    (cancel comp)
```

The lead-in and lead-out must be linear moves long enough for the control to apply the offset. The lead-in distance should be at least twice the nose radius.

## Worked Example — Chamfer with and without Comp

Without G42:

```gcode
G01 X30.0 Z0 F0.2
G01 X40.0 Z-5.0       (chamfer — the corner will be slightly rounded)
G01 Z-40.0
```

With G42:

```gcode
G42 G00 X25.0 Z2.0
G01 Z0 F0.2
G01 X40.0 Z-5.0       (chamfer — exact 45° with sharp corner)
G01 Z-40.0
G40 G00 X45.0 Z5.0
```

## ID Boring

For internal boring, the tool orientation is typically 2 or 4, and the compensation direction is the opposite of OD:

```gcode
G41 G00 X20.0 Z2.0    (ID boring — G41)
G01 Z-30.0 F0.2
G01 X18.0
G40 G00 X15.0 Z5.0
```

## Self-Check Questions

**1. Why does a straight OD turn not need TNRC, but a chamfer does?**

<details>
<summary>Show Answer</summary>

On a straight turn, the tool nose radius does not shift the cutting edge from the programmed diameter. On a chamfer or taper, the nose radius causes the tool to remove more or less material depending on the angle, and compensation is needed to produce the correct profile.
</details>

**2. What is the imaginary tip number for a standard right-hand OD turning tool?**

<details>
<summary>Show Answer</summary>

Orientation 3. The last digit of the T offset register (e.g., T0103) tells the control the tool orientation.
</details>

**3. How do you determine whether to use G41 or G42 for a given cut?**

<details>
<summary>Show Answer</summary>

Stand as if you are the tool, facing the direction of travel. If the material is on your left, use G41. If the material is on your right, use G42.
</details>

**4. What happens if the lead-in move is shorter than the nose radius?**

<details>
<summary>Show Answer</summary>

The control may not have enough distance to apply the full offset, causing a gouge or an incorrect profile at the beginning of the cut. Always lead in by at least 2× the nose radius.
</details>