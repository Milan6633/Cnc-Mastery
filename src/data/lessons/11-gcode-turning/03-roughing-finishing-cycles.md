---
title: "Roughing and Finishing Cycles — G70, G71, G72, G73"
module: "11-gcode-turning"
lessonNumber: 3
description: "Program multiple-pass roughing and finishing cycles using G71, G72, G73, and G70 for efficient material removal."
objectives:
  - "Program G71 rough turning cycle with a profile defined by P and Q blocks"
  - "Finish the profile with G70 using the same P and Q sequence"
  - "Use G72 for facing operations and G73 for pattern repeating"
  - "Understand how the U and W finishing allowances affect the final size"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["gcode", "turning", "roughing", "G71", "G70", "G72", "G73"]
---

## Why Roughing Cycles

Manual programming of a multi-pass roughing operation is tedious. The roughing cycles G71, G72, and G73 handle the multiple passes automatically. You define the finished profile once, and the control removes the excess material.

## G71 — Rough Turning Cycle

G71 removes material along the Z axis (OD or ID roughing).

```gcode
G71 U_ R_
G71 P_ Q_ U_ W_ F_
```

| Word | Meaning |
|---|---|
| U (first block) | Depth of cut per pass (radius, mm) |
| R (first block) | Retract amount after each pass (mm) |
| P | Start sequence number of the profile |
| Q | End sequence number of the profile |
| U (second block, X) | Finishing allowance in X (diameter, mm) |
| W (second block, Z) | Finishing allowance in Z (mm) |
| F | Feed rate for roughing |

### Worked Example

```gcode
O3001 (G71 roughing and G70 finishing)
G90 G95 G18 G21 G40 G49 G80
G54
T01 M06 (Roughing tool)
G96 S200 M03
G50 S2500
G00 X55.0 Z2.0 M08
G71 U2.0 R0.5
G71 P100 Q200 U0.5 W0.1 F0.3
N100 G00 X20.0 Z2.0
G01 Z0 F0.15
G01 X30.0 Z-5.0
G01 Z-30.0
G01 X40.0
G01 Z-60.0
G01 X50.0
N200 G01 X55.0 Z2.0
G00 X100.0 Z50.0
M09 M05
M01

T02 M06 (Finishing tool)
G96 S250 M03
G50 S2500
G00 X55.0 Z2.0 M08
G70 P100 Q200 F0.15
G00 X100.0 Z50.0
M09 M05
G28 G91 Z0
G28 G91 X0
G90
M30
```

The profile between N100 and N200 defines the finished shape. G71 removes the bulk material, leaving 0.5 mm in X and 0.1 mm in Z. G70 then follows the same profile to remove the remaining stock.

## G72 — Facing Cycle

G72 roughs along the X axis (face direction). The format is the same as G71, but the W value in the first block is the depth of cut in Z.

```gcode
G72 W_ R_
G72 P_ Q_ U_ W_ F_
```

Use G72 when the part is short and wide, and the majority of material is on the face.

## G73 — Pattern Repeating Cycle

G73 follows the shape of the profile from the start, repeating the pattern with a specified offset. It is useful for cast or wrought stock that already has a rough shape.

```gcode
G73 U_ W_ R_
G73 P_ Q_ U_ W_ F_
```

| Word | Meaning |
|---|---|
| U (first block) | Total material to remove in X (radius, mm) |
| W (first block) | Total material to remove in Z (mm) |
| R | Number of roughing passes |

## G70 — Finishing Cycle

G70 follows the same P and Q profile as the preceding roughing cycle and removes the finishing allowance.

```gcode
G70 P_ Q_ F_
```

G70 must use the same P and Q sequence numbers as the preceding G71, G72, or G73.

## Self-Check Questions

**1. What does the U value in the second G71 block represent?**

<details>
<summary>Show Answer</summary>

The finishing allowance in X (diameter). The roughing cycle leaves this amount of material on the OD for the finishing pass to remove.
</details>

**2. Why must G70 use the same P and Q numbers as the preceding roughing cycle?**

<details>
<summary>Show Answer</summary>

G70 reads the same profile blocks between N(P) and N(Q) and follows them exactly. The roughing cycle used the same profile to leave the finishing allowance.
</details>

**3. When would you use G72 instead of G71?**

<details>
<summary>Show Answer</summary>

Use G72 for facing operations where the majority of material is removed along the X axis (face direction), such as a short, wide flange.
</details>

**4. What is the purpose of the R value in the first G71 block?**

<details>
<summary>Show Answer</summary>

R is the retract amount (in mm). After each roughing pass, the tool retracts by this distance before returning to the start of the pass.
</details>