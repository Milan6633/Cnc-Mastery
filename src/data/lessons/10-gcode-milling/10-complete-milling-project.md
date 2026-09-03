---
title: "Complete Milling Project — Pocket Block"
module: "10-gcode-milling"
lessonNumber: 10
description: "Program a complete milled part combining facing, pocketing, drilling, tapping, and contouring into one program."
objectives:
  - "Plan the operation sequence for a multi-feature milled part"
  - "Write a complete program with facing, pocket roughing, contour finishing, drilling, and tapping"
  - "Select the correct tool for each operation"
  - "Inspect the finished part against the blueprint dimensions"
duration: "55 minutes"
difficulty: "intermediate"
tags: ["gcode", "milling", "project", "pocket", "complete"]
---

## The Blueprint

A pocket block in 6061-T6 aluminium, 100 mm × 80 mm × 20 mm:
- Face the top to 19.5 mm final thickness
- 60 mm × 40 mm × 8 mm deep pocket, centred on the part
- 4 × M6 tapped holes, 10 mm from each corner, 15 mm deep
- 2 × Ø10 through holes, centred at X50 Y40 and X50 Y20
- 30 mm × 10 mm through slot, centred at X80 Y40
- 2 mm radius on all four top edges (chamfer)

## Operation Plan

| Op | Tool | Operation |
|---|---|---|
| 1 | T01 (Ø50 face mill) | Face top to 19.5 mm |
| 2 | T02 (Ø10 end mill) | Rough pocket, finish pocket walls, slot, chamfer |
| 3 | T03 (Ø3 centre drill) | Spot all 6 holes |
| 4 | T04 (Ø5 tap drill) | Drill 4 × M6 tap holes |
| 5 | T05 (M6 tap) | Tap 4 × M6 |
| 6 | T06 (Ø10 drill) | Drill 2 × Ø10 through holes |

## Setup

- Vise, part stock at 100 × 80 × 20 mm
- G54 work zero: top-left corner of the finished part, Z0 on the top face
- Coolant on for all operations

## Complete G-Code Program

```gcode
O5000 (POCKET BLOCK)
G90 G94 G17 G21 G40 G49 G80
G54
(Operator: load 100×80×20 stock, vise)

(Op 1 — Face to 19.5 mm)
T01 M06 (Ø50 face mill)
S3000 M03
G43 H01 Z50.0
M08
G00 X-10.0 Y-10.0
G00 Z0.5
G01 Z-0.5 F200
G01 X110.0 Y-10.0 F600
G00 Z0.5
G00 X-10.0 Y20.0
G01 Z-0.5 F200
G01 X110.0 F600
G00 Z0.5
G00 X-10.0 Y50.0
G01 Z-0.5 F200
G01 X110.0 F600
G00 Z50.0
M09 M05
M01

(Op 2 — Pocket, slot, chamfer)
T02 M06 (Ø10 end mill)
S4000 M03
G43 H02 Z50.0
M08
(Pocket roughing — helical ramp)
G00 X50.0 Y40.0
G00 Z2.0
G01 Z0.5 F400
G03 X50.0 Y40.0 I-5.0 J0.0 Z-1.0 F200
G03 X50.0 Y40.0 I-5.0 J0.0 Z-2.5
G03 X50.0 Y40.0 I-5.0 J0.0 Z-4.0
G03 X50.0 Y40.0 I-5.0 J0.0 Z-5.5
G03 X50.0 Y40.0 I-5.0 J0.0 Z-7.0
G03 X50.0 Y40.0 I-5.0 J0.0 Z-8.0
G01 X50.0 Y40.0 F400
(Pocket finish — contour)
G41 D02 X50.0 Y30.0 F200
G03 X40.0 Y40.0 R10.0
G01 X20.0 Y40.0
G03 X10.0 Y30.0 R10.0
G01 X10.0 Y10.0
G03 X20.0 Y0.0 R10.0
G01 X80.0 Y0.0
G03 X90.0 Y10.0 R10.0
G01 X90.0 Y30.0
G03 X80.0 Y40.0 R10.0
G01 X60.0 Y40.0
G03 X50.0 Y30.0 R10.0
G40 G01 X50.0 Y40.0
G00 Z2.0
(Slot)
G00 X80.0 Y40.0
G01 Z-19.5 F200
G01 X80.0 Y35.0 F300
G00 Z2.0
G00 X80.0 Y45.0
G01 Z-19.5 F200
G01 X80.0 Y40.0 F300
G00 Z2.0
(Chamfer — 2 mm)
G00 X0 Y0
G00 Z0.5
G01 X0 Y0 Z-0.5 F200
G01 X0 Y80.0
G01 X100.0 Y80.0
G01 X100.0 Y0
G01 X0 Y0
G00 Z50.0
M09 M05
M01

(Op 3 — Centre drill all 6 holes)
T03 M06 (Ø3 centre drill)
S2500 M03
G43 H03 Z50.0
M08
G81 X10.0 Y10.0 Z-2.0 R5.0 F200
X90.0 Y10.0
X90.0 Y70.0
X10.0 Y70.0
X50.0 Y40.0
X50.0 Y20.0
G80
G00 Z50.0
M09 M05
M01

(Op 4 — Drill 4 × M6 tap holes)
T04 M06 (Ø5 tap drill)
S2500 M03
G43 H04 Z50.0
M08
G83 X10.0 Y10.0 Z-18.0 R5.0 Q5.0 F200
X90.0 Y10.0
X90.0 Y70.0
X10.0 Y70.0
G80
G00 Z50.0
M09 M05
M01

(Op 5 — Tap 4 × M6)
T05 M06 (M6 tap)
S500 M03
G43 H05 Z50.0
M08
G84 X10.0 Y10.0 Z-15.0 R5.0 F500
X90.0 Y10.0
X90.0 Y70.0
X10.0 Y70.0
G80
G00 Z50.0
M09 M05
M01

(Op 6 — Drill 2 × Ø10 through holes)
T06 M06 (Ø10 drill)
S2000 M03
G43 H06 Z50.0
M08
G83 X50.0 Y40.0 Z-22.0 R5.0 Q5.0 F200
X50.0 Y20.0
G80
G00 Z50.0
M09 M05
G28 G91 Z0
G28 G91 X0 Y0
G90
M30
```

## Inspection Checklist

| Feature | Dimension | Method |
|---|---|---|
| Thickness | 19.5 ±0.1 mm | Micrometer |
| Pocket 60 × 40 mm | ±0.1 mm | Calliper |
| Pocket depth 8 mm | 8 ±0.1 mm | Depth micrometer |
| 4 × M6 threads | Go/No-Go gauge | Thread gauge |
| 2 × Ø10 holes | 10 ±0.1 mm | Pin gauge |
| Slot 30 × 10 mm | ±0.1 mm | Calliper |
| Edge chamfer 2 mm | 2 ±0.2 mm | Chamfer gauge |

## Self-Check Questions

**1. Why does the program use M01 between operations?**

<details>
<summary>Show Answer</summary>

M01 is an optional stop. It lets the operator check the part, change tools, and inspect between operations when the optional stop switch is on.
</details>

**2. What is the purpose of the helical ramp at the start of the pocket operation?**

<details>
<summary>Show Answer</summary>

A helical ramp (G03 with a Z step) allows the end mill to enter the material gradually instead of plunging straight down. This reduces cutting forces and prevents tool breakage.
</details>

**3. Why is the centre drill operation done before the tap drill?**

<details>
<summary>Show Answer</summary>

The centre drill creates a conical spot that guides the tap drill. Without it, the drill would walk off centre, especially on a curved or angled surface.
</details>

**4. How would you adjust the program if the pocket depth needed to be 10 mm instead of 8 mm?**

<details>
<summary>Show Answer</summary>

Add two more helical ramp passes (G03 with Z-9.5, then Z-10.0) and adjust the pocket finish contour to Z-10.0. The facing operation would also need an extra pass to maintain the final thickness.
</details>