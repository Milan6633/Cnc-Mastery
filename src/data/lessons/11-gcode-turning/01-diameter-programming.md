---
title: "Turning Program Structure and Diameter Programming"
module: "11-gcode-turning"
lessonNumber: 1
description: "Learn the structure of a CNC turning program, diameter programming, safety block setup, and the G96/G97 spindle speed modes."
objectives:
  - "Explain why X values are programmed as diameters in turning"
  - "Write a complete turning safety block with G18, G95, and G96"
  - "Set the maximum spindle speed limit with G50"
  - "Distinguish G96 constant surface speed from G97 fixed RPM"
duration: "45 minutes"
difficulty: "beginner"
tags: ["gcode", "turning", "programming", "diameter", "G96", "G97"]
---

## The Turning Program Structure

A turning program follows the same skeleton as a milling program, but the codes differ because the workpiece rotates and the tool moves:

```
O2001 (OD TURNING PROGRAM)
Safety block      G90 G95 G18 G21 G40 G49 G80
Work offset       G54
Tool change       T01 M06
Spindle start     G96 S200 M03
Max RPM limit     G50 S2500
Rapid to start    G00 X55.0 Z2.0 M08
Cutting moves     G01 Z-60.0 F0.25
Retract           G00 X60.0 Z2.0
Coolant off       M09
Spindle stop      M05
Home              G28 G91 Z0
                  G28 G91 X0
Absolute reset    G90
Program end       M30
```

## Diameter Programming

In turning, the X axis controls the diameter of the workpiece. When you program X50.0, the tool moves to a position where the cutting edge is at a 50 mm diameter. This is called **diameter programming** and is the default on most controls.

```gcode
G00 X50.0 Z2.0    (tool is at 50 mm diameter, 2 mm from the face)
G01 Z-60.0 F0.25  (turn the 50 mm diameter for 60 mm length)
```

The X value is always the diameter of the workpiece, not the radius. A move from X50.0 to X40.0 removes 10 mm from the diameter (5 mm from the radius).

## The Turning Safety Block

G90 G95 G18 G21 G40 G49 G80

| Code | Meaning | Why it is there |
|---|---|---|
| G90 | Absolute positioning | Cancels any previous G91 incremental mode |
| G95 | Feed per revolution | F-word in mm/rev (standard for turning) |
| G18 | XZ plane | Selects the plane for circular interpolation |
| G21 | Millimetres | Cancels G20 inch mode |
| G40 | Cancel TNRC | Prevents a stray G41/G42 from shifting the tool |
| G49 | Cancel tool length comp | Usually not needed on lathes, but harmless |
| G80 | Cancel canned cycle | Prevents a surprise cycle from the next X Z move |

## G96 and G97 — Spindle Speed Modes

Two modes control how the spindle speed is set:

| Code | Meaning | S-word is |
|---|---|---|
| G96 | Constant surface speed | Cutting speed in m/min |
| G97 | Fixed RPM | Spindle speed in rev/min |

### G96 — Constant Surface Speed

G96 S200 M03 sets the cutting speed to 200 m/min. The control varies the spindle RPM as the tool moves along the X axis to maintain 200 m/min at the cutting edge.

```gcode
G96 S200 M03    (200 m/min constant surface speed)
G50 S2500       (spindle must not exceed 2500 RPM)
```

G96 is used for facing, OD turning, and any operation where the cutting diameter changes. It maintains consistent tool life and surface finish.

### G97 — Fixed RPM

G97 S1500 M03 sets the spindle to a fixed 1500 RPM, regardless of the cutting diameter. Use G97 for threading, grooving, and operations where the diameter does not change.

```gcode
G97 S1500 M03   (1500 RPM fixed)
```

## G50 — Maximum Spindle Speed Limit

G50 S2500 limits the spindle speed to 2500 RPM. This is critical when using G96 — as the tool approaches the centre of a face, the diameter approaches zero, and the RPM would climb to infinity without a limit.

```gcode
G50 S2500
G96 S200 M03
```

## Quick Reference

| Operation | Spindle mode | Feed mode | Example |
|---|---|---|---|
| OD turning | G96 CSS | G95 mm/rev | G96 S200 M03; G50 S2500; G01 Z-50.0 F0.25 |
| Facing | G96 CSS | G95 mm/rev | G96 S200 M03; G50 S2500; G01 X20.0 F0.15 |
| Threading | G97 RPM | G95 mm/rev | G97 S800 M03; G76 X_ Z_ F1.5 |
| Grooving | G97 RPM | G95 mm/rev | G97 S1200 M03; G75 X_ Z_ P_ Q_ F0.1 |
| Drilling | G97 RPM | G95 mm/rev | G97 S1500 M03; G74 R_ Z_ Q_ F0.08 |

## Self-Check Questions

**1. What does X50.0 mean in a turning program?**

<details>
<summary>Show Answer</summary>

It means the tool moves to a position where the cutting edge is at a 50 mm diameter. X values in turning are always the workpiece diameter, not the radius.
</details>

**2. What is the purpose of G50 in a G96 program?**

<details>
<summary>Show Answer</summary>

G50 S2500 sets a maximum spindle speed limit. Without it, the RPM would climb to infinity as the tool approaches the centre of a face cut.
</details>

**3. When would you use G97 instead of G96?**

<details>
<summary>Show Answer</summary>

Use G97 for threading, grooving, and any operation where the diameter does not change during the cut. G97 keeps the spindle at a fixed RPM regardless of the cutting position.
</details>

**4. Why is G95 used in the turning safety block instead of G94?**

<details>
<summary>Show Answer</summary>

G95 sets feed per revolution (mm/rev), which is the standard for turning. The F-word then represents the distance the tool moves per revolution of the spindle, which produces consistent chip load regardless of spindle speed.
</details>