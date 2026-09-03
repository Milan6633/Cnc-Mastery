---
title: "G-Code Verification and Simulation Tools"
module: "10-gcode-milling"
lessonNumber: 11
description: "Verify a G-code program before cutting metal using free simulators, machine backplot, and proven run procedures."
objectives:
  - "Use a free G-code simulator to visualise tool paths before running"
  - "Run the machine's built-in backplot and graphics mode"
  - "Perform a dry-run and machine-lock verification"
  - "Prove out a new program with single block and reduced feed"
duration: "40 minutes"
difficulty: "beginner"
tags: ["gcode", "milling", "verification", "simulation", "backplot", "safety"]
---

## Why Verify

A single typo in a G-code file can crash the tool, destroy the part, or damage the machine. Verification tools catch these errors before the spindle turns.

## Free G-Code Simulators

Several free programs let you load a G-code file and see the tool path:

| Tool | Platform | Features |
|---|---|---|
| NC Viewer (ncviewer.com) | Browser | 3D view, step through, colour-coded moves |
| CAMotics (camotics.org) | Desktop | 3D simulation, material removal, collision detection |
| CNC Simulator Pro (cncsimulator.com) | Desktop | Multiple control types, teach mode |
| GrblGru (grblgru.com) | Browser | 2D/3D, G-code editor, feeds and speeds |

### Using NC Viewer (Browser — No Installation)

1. Open ncviewer.com in a browser.
2. Paste or upload your G-code file.
3. The tool path is displayed in 3D. Green = rapid, blue = feed, yellow = arc.
4. Use the slider to step through the program.
5. Check for unexpected moves, collisions, and tool engagement.

## Machine Backplot / Graphics Mode

Most CNC controls have a built-in graphics mode that shows the tool path without moving the machine:

1. Load the program into the control.
2. Switch to **graphics mode** or **backplot mode**.
3. Press Cycle Start. The screen shows the tool path but the machine does not move.
4. Look for moves that go outside the expected area or sudden direction changes.

## Dry Run

Dry run runs the program with rapids at a reduced speed (typically the jog feed rate). The machine moves, but the feed override is ignored:

1. Load the program and set the work offset to a safe position (well above the part).
2. Engage **Dry Run** mode.
3. Press Cycle Start. The machine moves through the program at reduced speed.
4. Watch for unexpected moves, collisions with clamps, or clearance issues.

## Machine Lock

Machine lock disables servo movement while the control runs through the program:

1. Engage **Machine Lock**.
2. Press Cycle Start. The control executes the program but the machine stays still.
3. The position display updates as if the machine were moving.
4. Check the position display for unexpected values.

## Single Block Proving

When you run the program for the first time with the machine unlocked:

1. Set the feed override to 50%.
2. Engage **Single Block** mode.
3. Press Cycle Start. The machine executes one block and stops.
4. Check the position display. Is the tool where you expect it?
5. Press Cycle Start again for the next block.
6. Keep your hand near the **Feed Hold** button.
7. If something looks wrong, press Feed Hold and investigate.

## Verification Checklist

Before running a new program:

- [ ] Run the program through NC Viewer or CAMotics
- [ ] Check the machine's backplot display
- [ ] Verify all tool numbers match the tool table
- [ ] Verify all offset numbers (H, D) match the tool table
- [ ] Check that the work offset (G54) is set correctly
- [ ] Confirm the tool will clear all clamps and fixtures
- [ ] Set the feed override to 50% for the first run
- [ ] Engage single block mode
- [ ] Keep a hand on the feed hold button
- [ ] Watch the first few cuts carefully

## Self-Check Questions

**1. What is the advantage of a backplot display over a dry run?**

<details>
<summary>Show Answer</summary>

Backplot (graphics mode) shows the tool path without moving the machine at all. Dry run moves the machine at reduced speed. Backplot is safer because no motion occurs, but dry run tests the actual machine motion.
</details>

**2. What does NC Viewer do that a machine's backplot cannot?**

<details>
<summary>Show Answer</summary>

NC Viewer runs on a computer and can be used away from the machine. It also shows material removal, colour-coded moves, and can step through the program block by block with a 3D view.
</details>

**3. Why should you set the feed override to 50% on the first run?**

<details>
<summary>Show Answer</summary>

A reduced feed rate gives you more reaction time. If the tool is about to crash, you can hit Feed Hold before the damage is done. The first run is for verification, not for speed.
</details>

**4. What is the difference between dry run and machine lock?**

<details>
<summary>Show Answer</summary>

Dry run moves the machine at reduced speed (rapids act like feeds). Machine lock prevents all motion while the control runs through the program. Machine lock is safer because no motion occurs.
</details>