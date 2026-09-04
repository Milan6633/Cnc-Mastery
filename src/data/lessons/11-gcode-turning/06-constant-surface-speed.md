---
title: "Constant Surface Speed and G96"
module: "11-gcode-turning"
lessonNumber: 6
description: "Understand constant surface speed (CSS), how to set it with G96, and why it is essential for consistent tool life and finish."
objectives:
  - "Explain why the spindle speed must change when the cutting diameter changes"
  - "Program G96 constant surface speed with a G50 speed limit"
  - "Calculate the spindle speed at a given diameter for a programmed surface speed"
  - "Know when to switch from G96 to G97 fixed RPM"
duration: "40 minutes"
difficulty: "beginner"
tags: ["gcode", "turning", "G96", "G97", "CSS", "surface-speed"]
---

## Why Surface Speed Matters

The cutting speed (vc) is the rate at which the work piece surface passes the cutting edge, measured in metres per minute (m/min). This is the number that determines tool life, cutting forces, and surface finish.

When the tool is at different diameters, the same RPM produces different surface speeds. A 50 mm diameter at 1000 RPM has a surface speed of about 157 m/min. At 20 mm diameter and the same RPM, the surface speed is only about 63 m/min.

## G96 — Constant Surface Speed

G96 S200 M03 tells the control to maintain 200 m/min at the cutting edge. The spindle RPM varies as the tool moves along the X axis:

```gcode
G96 S200 M03    (maintain 200 m/min)
G50 S2500       (max RPM limit — prevents overspeed at small diameters)
```

As the tool moves toward the centre (smaller X), the spindle speed increases. As it moves away from the centre, the spindle speed decreases.

## G50 — Maximum RPM Limit

Without a limit, the spindle speed would climb to infinity as the tool approaches the centre. G50 sets a cap:

```gcode
G50 S2500       (spindle must not exceed 2500 RPM)
```

The formula: n = (vc × 1000) / (π × D)

At 200 m/min and 20 mm diameter: n = (200 × 1000) / (π × 20) = 3183 RPM. With G50 S2500, the spindle caps at 2500 RPM, and the actual surface speed drops below 200 m/min for diameters below about 24 mm.

## G97 — Fixed RPM

G97 S1500 M03 sets the spindle to a fixed 1500 RPM. Use G97 for:
- Threading (the diameter is constant)
- Grooving (the tool is at one X position)
- Operations where the surface speed is not critical

```gcode
G97 S1500 M03
G00 X55.0 Z-30.0
G75 R0.5
G75 X40.0 P500 F0.1
```

## Facing with CSS

Facing is where CSS shows its full value. The tool moves from the OD to the centre, and the spindle speed increases continuously:

```gcode
G96 S200 M03
G50 S3000
G00 X55.0 Z2.0
G01 X0 F0.15
```

Without CSS, the surface speed at the centre would be zero, and the tool would rub rather than cut.

## When to Use G96 vs G97

| Operation | Mode | Reason |
|---|---|---|
| OD turning | G96 | Consistent tool life across the length |
| Facing | G96 | Single pass from OD to centre |
| Boring | G96 | Consistent surface finish on IDs |
| Threading | G97 | Threading uses fixed RPM |
| Grooving | G97 | Tool is at a single X position |
| Parting | G96 | Keeps the cut efficient as the diameter shrinks |
| Drilling | G97 | Constant diameter, no CSS benefit |

## Self-Check Questions

**1. What is the purpose of G50 in a G96 program?**

<details>
<summary>Show Answer</summary>

G50 sets a maximum spindle speed limit. Without it, the RPM would climb to infinity as the tool approaches the centre of the part.
</details>

**2. At what spindle speed will a 30 mm diameter turn at 200 m/min?**

<details>
<summary>Show Answer</summary>

n = (200 × 1000) / (π × 30) = 200000 / 94.25 = 2122 RPM.
</details>

**3. Why is G96 preferred for facing operations?**

<details>
<summary>Show Answer</summary>

G96 maintains a constant cutting speed as the tool moves from the OD to the centre. Without CSS, the surface speed at the centre would be zero, causing the tool to rub rather than cut.
</details>

**4. When would you switch from G96 to G97 during a program?**

<details>
<summary>Show Answer</summary>

Switch to G97 for threading, grooving, and drilling — operations where the cutting diameter is constant and CSS provides no benefit.
</details>