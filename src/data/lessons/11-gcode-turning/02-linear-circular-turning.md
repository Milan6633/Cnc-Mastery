---
title: "Linear and Circular Motion for Turning"
module: "11-gcode-turning"
lessonNumber: 2
description: "Program G00, G01, G02, and G03 for turning operations, including diameter-based coordinates and arc programming."
objectives:
  - "Program G00 and G01 for OD and facing cuts with diameter-based X values"
  - "Program G02 and G03 arcs for radii on the OD, face, and shoulder"
  - "Use I/K and R methods for arc programming in turning"
  - "Understand the X and Z positive directions on a lathe"
duration: "45 minutes"
difficulty: "beginner"
tags: ["gcode", "turning", "G00", "G01", "G02", "G03", "arcs"]
---

## Axes and Directions

On a lathe, the axes are:
- **X axis** — diameter direction. X+ moves away from the centreline (larger diameter).
- **Z axis** — along the spindle axis. Z+ moves toward the tailstock (away from the chuck).

```gcode
G00 X60.0 Z2.0     (60 mm diameter, 2 mm from the face)
G01 Z-50.0 F0.25   (turn to Z-50 at 0.25 mm/rev)
```

## G00 — Rapid Positioning

G00 moves the tool at maximum speed. Use it for air moves only.

```gcode
G00 X55.0 Z2.0     (rapid to just above the OD, 2 mm from the face)
G00 Z2.0           (rapid along Z to the face)
```

Always approach the workpiece with the tool clear of the largest diameter. A common safe position is X[largest diameter + 5 mm] Z2.0.

## G01 — Linear Feed Moves

G01 moves the tool at a controlled feed rate. The F-word is usually in mm/rev (G95 mode) for turning.

```gcode
G01 Z-60.0 F0.3    (turn the OD at 0.3 mm/rev)
G01 X40.0 F0.2     (face across the diameter to 40 mm)
G01 Z-30.0 F0.25   (turn the 40 mm diameter)
```

## G02 and G03 — Circular Interpolation

| Code | Direction | View from |
|---|---|---|
| G02 | Clockwise | Above the tool, looking at the XZ plane |
| G03 | Counterclockwise | Above the tool, looking at the XZ plane |

For turning, the arc is in the XZ plane (G18). The end point is programmed with X (diameter) and Z. The arc centre is specified with I (X distance from start to centre — **radius** value, not diameter) and K (Z distance from start to centre).

### Shoulder Radius (G02)

A convex radius at the shoulder of a stepped shaft:

```gcode
G01 X30.0 Z0 F0.2
G02 X40.0 Z-5.0 R5.0 F0.2   (5 mm radius on the shoulder)
G01 Z-40.0 F0.3
```

Using I/K instead of R:

```gcode
G01 X30.0 Z0 F0.2
G02 X40.0 Z-5.0 I0.0 K-5.0 F0.2
```

I is the X distance from start to centre (radius), so I0.0 means the centre is at the same X as the start. K-5.0 means the centre is 5 mm in the negative Z direction.

### Face Radius (G03)

A concave radius on the face of the part:

```gcode
G01 X50.0 Z0 F0.2
G03 X60.0 Z-5.0 R5.0 F0.2   (5 mm radius on the face)
```

### Ball-End Radius

The end of a shaft with a full radius:

```gcode
G01 X0 Z0 F0.2
G03 X20.0 Z-10.0 R10.0 F0.2   (full-radius ball end)
```

## Worked Example — Stepped Shaft with Radius

```gcode
O2002 (STEPPED SHAFT)
G90 G95 G18 G21 G40 G49 G80
G54
T01 M06
G96 S200 M03
G50 S2500
G00 X55.0 Z2.0 M08
G01 Z-60.0 F0.3           (turn OD to 50 mm)
G00 X52.0 Z2.0
G01 X30.0 Z0 F0.2         (face to 30 mm)
G02 X40.0 Z-5.0 R5.0 F0.2 (radius on shoulder)
G01 Z-30.0 F0.3           (turn 40 mm diameter)
G00 X55.0 Z2.0
M09 M05
G28 G91 Z0
G28 G91 X0
G90
M30
```

## Self-Check Questions

**1. What is the difference between I and K in a turning arc command?**

<details>
<summary>Show Answer</summary>

I is the X distance from the arc start point to the arc centre, expressed as a radius (not diameter). K is the Z distance from the start point to the centre.
</details>

**2. Why is X always programmed as a diameter in turning?**

<details>
<summary>Show Answer</summary>

Diameter programming is the lathe standard. The X value corresponds directly to the workpiece diameter shown on the blueprint, which eliminates the need to divide by 2 when reading the print.
</details>

**3. Which G-code selects the XZ plane for circular interpolation on a lathe?**

<details>
<summary>Show Answer</summary>

G18 selects the XZ plane. This is the standard plane for lathe arcs and should be included in the safety block.
</details>

**4. What is the safe approach position before a turning cut?**

<details>
<summary>Show Answer</summary>

Position the tool at X[largest diameter + 5 mm] Z2.0 — clear of the workpiece in X and 2 mm from the face in Z. Then feed into the cut.
</details>