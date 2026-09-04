---
title: "Grooving and Parting Cycles — G74 and G75"
module: "11-gcode-turning"
lessonNumber: 4
description: "Program grooving, face grooving, and parting operations using G74, G75, and G01 techniques."
objectives:
  - "Program G75 OD grooving cycle with pecking and retract"
  - "Program G74 face grooving cycle for face grooves and deep drilling"
  - "Understand the spindle speed behaviour when parting toward the centre"
  - "Use G01 with manual pecking for non-standard groove shapes"
duration: "45 minutes"
difficulty: "intermediate"
tags: ["gcode", "turning", "grooving", "G74", "G75", "parting"]
---

## Grooving with G75 (OD/ID)

G75 is the OD and ID grooving cycle. It pecks in the X direction, with optional axial stepping for wide grooves.

```gcode
G75 R_
G75 X_ Z_ P_ Q_ F_
```

| Word | Meaning |
|---|---|
| R (first block) | Retract distance after each peck (mm) |
| X | Final groove diameter (mm) |
| Z | Z end position (for axial stepping) |
| P | X peck increment (radius, microns — 500 = 0.5 mm) |
| Q | Z step increment (microns) |
| F | Feed rate (mm/rev) |

### Single Groove Example

```gcode
G00 X55.0 Z-30.0
G75 R0.5
G75 X40.0 Z-30.0 P500 F0.1
```

This pecks from X55 to X40 in 0.5 mm steps, retracting 0.5 mm after each peck. The Z position stays at -30.

### Multiple Groove Width

For a groove wider than the tool, set the Z step (Q):

```gcode
G00 X55.0 Z-25.0
G75 R0.5
G75 X40.0 Z-35.0 P500 Q2000 F0.1
```

The tool pecks down to X40, steps 2 mm in Z, pecks again, and repeats until it reaches Z-35. This machines a 10 mm wide, 7.5 mm deep groove.

## G74 — Face Grooving and Peck Drilling

G74 is the face grooving and peck drilling cycle. It pecks in the Z direction with optional X stepping.

```gcode
G74 R_
G74 X_ Z_ P_ Q_ F_
```

| Word | Meaning |
|---|---|
| R (first block) | Retract distance after each peck (mm) |
| X | Final X position (for X stepping — face grooving) |
| Z | Final Z depth (mm) |
| P | X step increment (microns) |
| Q | Z peck increment (microns) |
| F | Feed rate (mm/rev) |

### Face Grooving

```gcode
G00 X30.0 Z2.0
G74 R0.5
G74 X50.0 Z-5.0 P2000 Q500 F0.08
```

This pecks in Z by 0.5 mm, then steps 2 mm in X, repeating until it reaches X50. The result is a face groove from X30 to X50, 5 mm deep.

### Deep Hole Drilling with G74

G74 can also be used for deep hole drilling on a lathe (peck drilling along Z):

```gcode
G00 X0 Z2.0
G74 R1.0
G74 Z-60.0 Q3000 F0.1
```

This pecks to Z-60 with 3 mm pecks and 1 mm retracts.

## Parting Considerations

When parting off, the tool feeds toward the centre (X value decreases). With G96 active, the spindle speed increases as the diameter decreases. The G50 limit prevents runaway.

```gcode
G96 S120 M03
G50 S3000
G00 X55.0 Z-60.0
G01 X0 F0.05
```

Reduce the feed rate as the tool approaches the centre (below about 5 mm diameter, the surface speed is very low). A common practice: start at F0.1 and reduce to F0.03 for the last 2 mm.

## G01 with Manual Pecking

For non-standard grooves or when the cycle parameters do not match, use G01 with manual pecking:

```gcode
N100 G00 X55.0 Z-30.0
G01 X45.0 F0.1
G00 X55.0
G00 Z-31.5
G01 X45.0
G00 X55.0
G00 Z-33.0
G01 X45.0
G00 X55.0
```

## Self-Check Questions

**1. In G75 X_ Z_ P_ Q_, what do P and Q represent?**

<details>
<summary>Show Answer</summary>

P is the X peck increment (radius, in microns). Q is the Z step increment (microns) for wide grooves.
</details>

**2. Why must you reduce the feed rate when parting close to the centre?**

<details>
<summary>Show Answer</summary>

At small diameters, the cutting speed drops significantly even with G96, and the chip becomes thick. Reducing the feed prevents tool breakage and maintains chip control.
</details>

**3. What is the difference between G74 and G75?**

<details>
<summary>Show Answer</summary>

G74 pecks in the Z direction (used for face grooving and drilling). G75 pecks in the X direction (used for OD and ID grooving).
</details>

**4. How do you machine a groove wider than the grooving tool using G75?**

<details>
<summary>Show Answer</summary>

Set the Q value in the G75 block. The tool pecks down to the X depth, steps by Q in Z, and repeats the pecking cycle until it reaches the Z end position.
</details>