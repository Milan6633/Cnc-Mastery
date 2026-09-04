---
title: "Complete Lathe Project — Bushing with Boring"
module: "11-gcode-turning"
lessonNumber: 9
description: "Program a complete bushing from stock, combining facing, drilling, boring, internal threading, and OD turning."
objectives:
  - "Plan the operation sequence for a part with internal features"
  - "Program drilling, boring, and internal threading operations"
  - "Use G41/G42 for internal boring with TNRC"
  - "Inspect the finished bushing against the blueprint dimensions"
duration: "55 minutes"
difficulty: "intermediate"
tags: ["gcode", "turning", "project", "bushing", "boring", "internal"]
---

## The Blueprint

A bushing in mild steel, from Ø55 mm × 60 mm stock:
- OD: Ø50 mm × 50 mm length
- ID: Ø30 mm through bore (drill + bore)
- Internal groove: Ø34 mm × 4 mm wide, 10 mm from the face
- Internal thread: M36 × 1.5, 20 mm deep from the face
- OD chamfer: 2 × 45° on the front face
- Face: clean up the face

## Operation Plan

| Op | Tool | Operation |
|---|---|---|
| 1 | T01 (CNMG 120408 roughing) | Face, rough turn OD |
| 2 | T02 (CNMG 120408 finishing) | Finish OD, chamfer |
| 3 | T03 (Ø25 U drill) | Drill through Ø25 mm |
| 4 | T04 (Boring bar, Ø30 mm) | Rough and finish bore to Ø30 |
| 5 | T05 (Internal grooving tool) | Groove Ø34 × 4 mm |
| 6 | T06 (Internal threading insert) | Thread M36 × 1.5, 20 mm deep |
| 7 | T07 (Parting tool) | Part off to 50 mm length |

## Setup

- 3-jaw chuck, gripping Ø55 stock, 65 mm stickout
- G54 work zero: face of the finished part, centreline
- Coolant on for all operations

## Complete G-Code Program

```gcode
O6000 (BUSHING)
(Operator: load Ø55 bar stock, 65 mm stickout)
G90 G95 G18 G21 G40 G49 G80
G54

(Op 1 — Face and rough turn OD)
T01 M06 (CNMG 120408 roughing)
G96 S200 M03
G50 S2500
G00 X56.0 Z2.0 M08
G01 X0 Z0 F0.2               (face)
G00 X56.0 Z2.0
G01 Z-50.0 F0.3              (rough turn OD to Ø50)
G00 X56.0 Z2.0
M09 M05
M01

(Op 2 — Finish OD and chamfer)
T02 M06 (CNMG 120408 finishing)
G96 S250 M03
G50 S3000
G42 G00 X56.0 Z2.0 M08
G01 Z0 F0.15
G01 X50.0 Z-2.0              (chamfer 2×45°)
G01 Z-50.0 F0.2              (turn Ø50)
G01 X54.0
G40 G00 X56.0 Z2.0
M09 M05
M01

(Op 3 — Drill through)
T03 M06 (Ø25 U drill)
G97 S1200 M03
G00 X0 Z5.0 M08
G74 R1.0
G74 Z-55.0 Q5000 F0.1
G00 Z5.0
M09 M05
M01

(Op 4 — Bore to Ø30)
T04 M06 (Boring bar, minimum bore Ø25)
G96 S180 M03
G50 S2500
G41 G00 X28.0 Z2.0 M08
G01 Z0 F0.15
G01 X30.0 Z-1.0              (chamfer on ID)
G01 Z-50.0 F0.2              (bore through)
G01 X27.0
G40 G00 X28.0 Z2.0
M09 M05
M01

(Op 5 — Internal groove)
T05 M06 (Internal grooving tool, 4 mm wide)
G97 S600 M03
G00 X30.0 Z2.0 M08
G00 Z-10.0
G01 X34.0 F0.06
G01 X30.0
G00 Z2.0
M09 M05
M01

(Op 6 — Internal thread M36 × 1.5)
T06 M06 (Internal threading insert, 60°)
G97 S500 M03
G00 X34.0 Z5.0 M08
(Thread height for M36×1.5 internal: P = 0.6134 × 1.5 = 0.920 mm)
(Major diameter: 36.0 mm; minor diameter: 36.0 − 2 × 0.920 = 34.160 mm)
G76 P020060 Q50 R0.05
G76 X36.0 Z-20.0 P920 Q200 F1.5
G00 X50.0
M09 M05
M01

(Op 7 — Part off)
T07 M06 (Parting tool, 3 mm wide)
G96 S120 M03
G50 S3000
G00 X56.0 Z-49.0 M08
G01 X0 F0.05               (part off)
G00 X56.0
M09 M05
G28 G91 Z0
G28 G91 X0
G90
M30
```

## Inspection Checklist

| Feature | Dimension | Method |
|---|---|---|
| OD Ø50 mm | 49.9–50.1 mm | Micrometer |
| Length 50 mm | 49.8–50.2 mm | Calliper |
| Bore Ø30 mm | 29.95–30.05 mm | Bore gauge |
| Internal groove Ø34 × 4 mm | Ø34 ±0.2, 4 ±0.2 mm | Calliper |
| Internal thread M36 × 1.5 | Go/No-Go gauge | Thread plug gauge |
| Chamfer 2 × 45° | 2 ±0.2 mm | Chamfer gauge |

## Self-Check Questions

**1. Why is the U drill (Ø25) used before the boring bar?**

<details>
<summary>Show Answer</summary>

The boring bar needs a starting hole larger than its minimum bore diameter. The Ø25 U drill creates a through hole that gives the boring bar room to enter and cut the ID to size.
</details>

**2. What is the difference between G41 and G42 when boring the ID?**

<details>
<summary>Show Answer</summary>

For internal boring, G41 is typically used. The tool is on the inside of the hole, and the compensation direction is opposite to OD turning.
</details>

**3. Why is internal threading done at G97 (fixed RPM) instead of G96?**

<details>
<summary>Show Answer</summary>

Threading requires a constant spindle speed per pass. G96 would vary the speed as the tool moves along the thread, which is not acceptable for thread quality.
</details>

**4. At what Z position does the part-off tool cut, and why?**

<details>
<summary>Show Answer</summary>

The part-off tool cuts at Z-49.0. The finished length is 50 mm. After the part-off tool (3 mm wide) cuts through, the part drops off at 50 mm length. The remaining stock on the chuck side is discarded.
</details>