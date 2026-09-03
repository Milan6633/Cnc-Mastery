---
title: "Work Offsets and G10 Programmable Data Input"
module: "10-gcode-milling"
lessonNumber: 7
description: "Use G54–G59 work offsets, G10 to set them from the program, G52 local offsets, and G53 machine coordinates."
objectives:
  - "Select work offsets G54–G59 and understand when to use each"
  - "Set work offsets and tool offsets with G10 programmable data input"
  - "Apply G52 local coordinate system for temporary shifts"
  - "Use G53 to move to machine-absolute positions"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["gcode", "milling", "offsets", "G54", "G10", "G52", "G53"]
---

## The Work Coordinate System Stack

A CNC machine has several coordinate layers. From outermost to innermost:

- **Machine coordinates** — fixed by the manufacturer (home position)
- **Work coordinates** — G54, G55, G56, G57, G58, G59 (set by the operator)
- **Local coordinates** — G52 (a temporary shift within the active work offset)

## G54–G59 — Selecting a Work Offset

G54 is the default. Most jobs use one work offset, but multiple fixtures use different ones:

`gcode
G54          (select first vise)
G00 X0 Y0    (move to G54 zero)
G55          (select second vise)
G00 X0 Y0    (move to G55 zero — different position)
`

G54 through G59 are stored in the control's offset registers. G54.1 P1–P48 (extended offsets) are available on many controls.

## G10 — Setting Offsets from the Program

G10 lets you write work and tool offsets directly in the G-code, eliminating manual entry.

- **Set work offset**: G10 L2 Px Xx Yy Zz
  - P1 = G54, P2 = G55, ... P6 = G59
  - X, Y, Z are the coordinate values

`gcode
G10 L2 P1 X100.0 Y50.0 Z-10.0   (set G54 zero to X100 Y50 Z-10)
`

- **Set tool length offset**: G10 L10 Px Rr (geometry), G10 L11 Px Rr (wear)
  - P = offset register number, R = value

`gcode
G10 L10 P1 R120.0   (set tool 1 geometry length to 120.0 mm)
G10 L11 P1 R-0.05   (set tool 1 wear offset to -0.05 mm)
`

G10 is useful for:
- Probing systems that set offsets automatically
- Fixture offset tables in a program header
- Parametric setups where the offset values come from a macro

## G52 — Local Coordinate System

G52 temporarily shifts the origin of the active work coordinate:

`gcode
G54
G52 X10.0 Y5.0      (shift origin 10 in X, 5 in Y within G54)
G00 X0 Y0           (moves to X10 Y5 in G54 space)
G52 X0 Y0 Z0         (cancel the local shift)
`

The local shift is added on top of the active work offset. Cancel it with G52 X0 Y0 Z0. G52 is modal — it stays active until changed or cancelled.

## G53 — Machine Coordinate System

G53 moves to a position in machine coordinates, regardless of the active work offset. It is non-modal — it affects only the block it is in:

`gcode
G53 G00 Z0          (rapid Z to machine home — safe retract)
G53 X-200.0 Y-50.0  (move to a specific fixture-change position)
`

G53 is useful for:
- Safe retract to a fixed position independent of the part
- Tool change positions that must be the same every time
- Clearance moves when the part is large or oddly positioned

## Worked Example — Two Vises

`gcode
G90 G94 G17 G21 G40 G49 G80
G54               (first vise)
G00 X0 Y0
M98 P1000 L1      (cut part 1)
G55               (second vise — operator set G55 to the second vise zero)
G00 X0 Y0
M98 P1000 L1      (cut part 2 — same subprogram, different offset)
M30
`

## Self-Check Questions

**1. How do you select G55 as the active work offset?**

<details>
<summary>Show Answer</summary>

G55 on its own line. G-codes G54 through G59 are modal; whatever is active stays active until changed.
</details>

**2. What does G10 L2 P3 X50.0 do?**

<details>
<summary>Show Answer</summary>

Sets the work offset for G56 (P3 = G56?) Actually P1=G54, P2=G55, P3=G56. So it sets the X zero of G56 to 50.0 mm.
</details>

**3. How do you cancel a G52 local shift?**

<details>
<summary>Show Answer</summary>

G52 X0 Y0 Z0 removes the local shift and restores the active work offset origin.
</details>

**4. Why is G53 non-modal?**

<details>
<summary>Show Answer</summary>

G53 applies only to the block it is written in. After the block executes, the machine reverts to the previous coordinate mode (G90 or G91). This prevents accidental machine-coordinate moves later in the program.
</details>
