---
title: "Manual Programming Workflow at the Control"
module: "12-cnc-setup"
lessonNumber: 3
description: "Walk through the complete manual programming workflow — from blueprint to finished part — writing G-code directly at the machine control."
objectives:
  - "Plan the operation sequence from a blueprint before touching the control"
  - "Write a program in EDIT mode using the control's keyboard"
  - "Set work offsets and tool offsets for each operation"
  - "Run the first article, inspect, and adjust offsets as needed"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["setup", "programming", "workflow", "manual", "control"]
---

## The Manual Programming Workflow

Manual programming at the control is different from writing a program at a computer. You are standing at the machine, the blueprint is in your hand, and you write the G-code one block at a time. The workflow follows a fixed sequence:

1. Study the blueprint and plan the operations
2. Select and load tools
3. Set work offsets (G54)
4. Set tool length offsets (G43 Hnn)
5. Write the program in EDIT mode
6. Verify with graphics/backplot
7. Run the first article
8. Inspect and adjust

## Step 1 — Blueprint to Operation Plan

Before you touch the control, study the print and list every operation in order:

| Op | Feature | Tool | G-Code approach |
|---|---|---|---|
| 1 | Face | Face mill | G00, G01 |
| 2 | Rough OD | CNMG roughing | G71 |
| 3 | Finish OD | CNMG finishing | G70 |
| 4 | Drill centre | Centre drill | G81 |
| 5 | Drill through | Twist drill | G83 |
| 6 | Bore ID | Boring bar | G85 |
| 7 | Thread | Threading insert | G76 |
| 8 | Part off | Parting tool | G01 |

This table becomes your program's structure. Write it on a setup sheet before you start.

## Step 2 — Load Tools

Load each tool into the spindle or turret according to the operation plan. For a lathe, the turret position matches the T word (T01 = turret position 1). For a mill, load tools into the tool changer in order.

## Step 3 — Set Work Offsets

For a lathe:
1. Face the part, then set G54 Z0 at the face.
2. Touch the OD with a tool, record the diameter, set G54 X.

For a mill:
1. Use an edge finder to find X0 and Y0.
2. Touch the top of the part with each tool and set the Z offset.

## Step 4 — Set Tool Length Offsets

For each tool:
1. Jog the tool to a known reference surface (the top of the part or a tool setter).
2. Enter the Z position into the offset register.
3. Verify with G43 Hnn Z50.0 — the tool should move to Z50.0 above the part.

## Step 5 — Write the Program

Switch to EDIT mode. Write the program using the control's keyboard:

```gcode
O1000 (PART NAME)
G90 G95 G18 G21 G40 G49 G80
G54
T01 M06
G96 S200 M03
G50 S2500
G00 X55.0 Z2.0 M08
...
```

Enter each block and press INSERT or EOB + INSERT to add it to the program. Use sequence numbers (N10, N20, N30...) so you can search and edit later.

## Step 6 — Verify with Graphics

Before running the program, switch to graphics mode:

1. Press GRAPHICS or the backplot button on the control.
2. Press CYCLE START. The screen shows the tool path without moving the machine.
3. Check for unexpected moves, wrong directions, or clearance issues.
4. If the path looks wrong, switch back to EDIT and fix the program.

## Step 7 — Run the First Article

1. Set the feed override to 50%.
2. Engage SINGLE BLOCK.
3. Press CYCLE START.
4. After each block, check the position display. Is the tool where you expect?
5. After the first few moves, check for collisions, clearance, and chip formation.
6. Gradually increase the feed override as you gain confidence.

## Step 8 — Inspect and Adjust

After the first part is complete:

1. Measure every critical dimension.
2. Compare to the blueprint tolerances.
3. If a dimension is out of tolerance, adjust the tool offset (wear offset) not the program.
4. Run a second part and re-inspect.
5. Once the part is good, document the final offset values on the setup sheet.

## Self-Check Questions

**1. What is the advantage of writing the operation plan before touching the control?**

<details>
<summary>Show Answer</summary>

The operation plan tells you which tools you need, the order of operations, and the G-code approach for each feature. It prevents you from realising mid-program that you need a tool you did not load.
</details>

**2. Why should you verify the program with graphics before running it?**

<details>
<summary>Show Answer</summary>

Graphics mode shows the tool path without moving the machine. You can spot errors — wrong direction, missing moves, clearance issues — without risking a crash.
</details>

**3. What do you do if a dimension is out of tolerance on the first article?**

<details>
<summary>Show Answer</summary>

Adjust the tool wear offset, not the program. The wear offset shifts the tool by a small amount without rewriting the G-code. Run a second part and re-inspect.
</details>

**4. Why use single block mode on the first run?**

<details>
<summary>Show Answer</summary>

Single block executes one line at a time. You can check each move on the position display before pressing Cycle Start. If a move looks wrong, you stop before it happens.
</details>