---
title: "Complete Turning Program — Stepped Shaft"
module: "11-gcode-turning"
lessonNumber: 8
description: "Program a complete stepped shaft from blueprint to finished part, combining facing, roughing, finishing, grooving, and threading."
objectives:
  - "Read a turning blueprint and identify the operations needed"
  - "Plan the operation sequence and tooling for a multi-feature part"
  - "Write a complete G-code program with all operations"
  - "Inspect the finished part against the blueprint dimensions"
duration: "55 minutes"
difficulty: "intermediate"
tags: ["gcode", "turning", "programming", "complete", "example"]
---

## The Blueprint

A stepped shaft with the following features:
- Material: Mild steel, Ø55 mm × 110 mm (stock)
- Overall length: 100 mm
- Ø50 mm × 60 mm (first diameter)
- Ø30 mm × 30 mm (second diameter, threaded end)
- 45° chamfer at the shoulder (2 mm × 45°)
- R3 radius at the step from Ø50 to Ø30
- M20 × 1.5 thread on the Ø30 section (20 mm long)
- 4 mm wide × 3 mm deep groove at Z-55 (near the end of Ø50)

## Operation Plan

| Op | Tool | Operation |
|---|---|---|
| 1 | T01 (CNMG 120408, roughing) | Face the end, rough turn OD |
| 2 | T02 (CNMG 120408, finishing) | Finish OD, chamfer, radius |
| 3 | T03 (Grooving tool, 4 mm wide) | Groove at Z-55 |
| 4 | T04 (Threading insert, 60°) | Thread M20 × 1.5 |
| 5 | T05 (Parting tool, 3 mm) | Part off to length |

## Setup

- 3-jaw chuck, gripping Ø55 stock, ~80 mm stickout
- G54 work zero: face of the finished part, centreline
- Coolant on for all operations

## Complete G-Code Program

```gcode
O4000 (STEPPED SHAFT)
(Operator: load Ø55 bar stock, 80 mm stickout)
G90 G95 G18 G21 G40 G49 G80
G54

(Op 1 — Face and rough turn)
T01 M06 (CNMG 120408 roughing)
G96 S200 M03
G50 S2500
G00 X56.0 Z2.0 M08
G01 X0 Z0 F0.2               (face)
G00 X56.0 Z2.0
G01 Z-60.0 F0.3              (rough OD to Ø50)
G00 X56.0 Z2.0
G01 X32.0 Z0 F0.2            (rough face to Ø30)
G01 Z-30.0 F0.3              (rough turn Ø30)
G00 X56.0 Z2.0
M09 M05
M01

(Op 2 — Finish OD, chamfer, radius)
T02 M06 (CNMG 120408 finishing)
G96 S250 M03
G50 S3000
G42 G00 X56.0 Z2.0 M08
G01 Z0 F0.15
G01 X30.0 Z-2.0              (chamfer 2×45°)
G01 Z-30.0 F0.2              (turn Ø30)
G03 X50.0 Z-40.0 R3.0 F0.15 (radius)
G01 Z-60.0 F0.2              (turn Ø50)
G01 X54.0
G40 G00 X56.0 Z2.0
M09 M05
M01

(Op 3 — Groove)
T03 M06 (Grooving tool, 4 mm wide)
G97 S800 M03
G00 X52.0 Z-55.0 M08
G75 R0.5
G75 X44.0 P500 F0.08
G00 X56.0
M09 M05
M01

(Op 4 — Thread M20 × 1.5)
T04 M06 (Threading insert, 60°)
G97 S600 M03
G00 X22.0 Z5.0 M08
G76 P020060 Q50 R0.05
G76 X18.16 Z-20.0 P920 Q200 F1.5
G00 X50.0
M09 M05
M01

(Op 5 — Part off)
T05 M06 (Parting tool, 3 mm)
G96 S120 M03
G50 S3000
G00 X56.0 Z-99.0 M08
G01 X0 F0.05
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
| Ø50 ±0.1 | 49.9–50.1 mm | Micrometer |
| Ø30 ±0.1 | 29.9–30.1 mm | Micrometer |
| Overall length 100 ±0.2 | 99.8–100.2 mm | Calliper |
| Groove Ø44 × 4 mm | Ø44 ±0.2, 4 ±0.2 mm | Calliper, groove gauge |
| Thread M20 × 1.5 | Go/No-Go gauge | Thread ring gauge |
| Chamfer 2 × 45° | 2 mm ±0.2 | Chamfer gauge |
| R3 radius | R3 ±0.2 | Radius gauge |

## Self-Check Questions

**1. Why does the program use M01 between operations?**

<details>
<summary>Show Answer</summary>

M01 is an optional stop. It lets the operator check the part, change tools, and inspect between operations when the optional stop switch is on.
</details>

**2. What is the purpose of the G42 on the finishing tool?**

<details>
<summary>Show Answer</summary>

G42 applies tool nose radius compensation, which ensures the chamfer and radius are machined to the correct profile. Without it, the nose radius would round the sharp corner.
</details>

**3. Why is the threading operation done at G97 (fixed RPM) instead of G96?**

<details>
<summary>Show Answer</summary>

Threading requires a constant spindle speed per pass. G96 would vary the speed as the tool moves along the thread, which is not acceptable for thread quality.
</details>

**4. What is the significance of the Z-99.0 position in the parting operation?**

<details>
<summary>Show Answer</summary>

The shaft is 100 mm long. Z-99.0 leaves 1 mm of stock for the part-off operation. The parting tool is 3 mm wide, so it parts at Z-99.0, leaving the finished part 100 mm long.
</details>