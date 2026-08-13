---
title: "The CNC Control Panel — Modes, Keys & Operation"
module: "09-cnc-operation"
lessonNumber: 2
description: "Learn every button, dial, and mode on a CNC control panel — from jogging and MDI to running a program in auto mode."
objectives:
  - "Explain the purpose of each operating mode (Edit, Auto, MDI, Jog, Handle)"
  - "Use the jog handwheel to move axes manually"
  - "Enter and execute single commands in MDI mode"
  - "Start, pause, and stop a running program safely"
duration: "50 minutes"
difficulty: "beginner"
tags: ["cnc", "control", "panel", "haas", "fanuc", "operation"]
---

## The Modes of Operation

Every CNC control has several **operating modes**. The mode determines what the machine will do when you press buttons. Think of modes like gears on a car — you need to be in the right one for the situation.

### Mode Overview

| Mode | What You Do | When You Use It |
|------|------------|-----------------|
| **Edit** | Write, load, and modify G-code programs | Creating or fixing a program |
| **Auto / Memory** | Run a loaded program | Production — running parts |
| **MDI** | Type and execute single lines of G-code | Quick moves, testing, warmup commands |
| **Jog** | Move axes with buttons (rapid or controlled) | Moving the machine to load parts |
| **Handle / Handwheel** | Move axes with the MPG dial | Precise positioning, touching off tools |
| **Ref Return** | Send axes to machine home | Machine startup, after an E-Stop |

:::key-concept
You must always be aware of what mode you're in. Pressing Cycle Start in the wrong mode can cause unexpected motion. Make it a habit: glance at the mode indicator on the screen before pressing anything.
:::

## Jog Mode — Moving the Machine by Hand

Jog mode lets you move each axis using buttons on the panel. You'll use this constantly for:
- Moving the spindle out of the way to load/unload parts
- Positioning the tool near the workpiece before running a program
- Clearing chips or inspecting the part

### Jog Controls

1. **Select the axis** — press X, Y, or Z button
2. **Select the direction** — press + or − (or use directional arrows)
3. **Select the speed** — use the jog feed override dial or select rapid/slow jog

:::warning
Jog in rapid mode (100%) moves the machine at full speed — on a large VMC, that can be 1000+ inches per minute. Always start with a slow jog speed when you're close to the part. One wrong button press at rapid speed can crash the tool into the vise, the table, or worse.
:::

### The Handwheel (MPG)

The **Manual Pulse Generator (MPG)** is the stepped dial on the control panel (or a remote pendant). It gives you fine control:

| MPG Increment | Resolution |
|---------------|-----------|
| ×1 | 0.0001" per click |
| ×10 | 0.001" per click |
| ×100 | 0.010" per click |
| ×1000 | 0.100" per click |

Select the axis, select the increment, and turn the handwheel. This is how you precisely touch off tools and set work offsets.

:::pro-tip
When touching off a tool, always use ×1 or ×10 increment. Using ×100 or ×1000 near the part is asking for a crash. And always approach the part surface from the same direction to eliminate backlash error.
:::

## MDI Mode — Single-Line Commands

**MDI (Manual Data Input)** lets you type a single line of G-code and execute it immediately. Think of it as a command line for your CNC machine.

Common MDI uses:

| Command | What It Does |
|---------|-------------|
| `G28 G91 Z0` | Send Z axis to machine home |
| `G28 G91 X0 Y0` | Send X and Y to home |
| `S1000 M03` | Start spindle at 1000 RPM |
| `M05` | Stop spindle |
| `M08` / `M09` | Coolant on / off |
| `G00 G90 X0 Y0` | Rapid to X0 Y0 (work coordinates) |
| `T05 M06` | Change to tool 5 |

### Using MDI

1. Switch to MDI mode
2. Type the command on the input line
3. Press **Cycle Start** to execute

The command runs once and stops. You can type the next command.

:::warning
MDI executes immediately when you press Cycle Start — there's no "are you sure?" dialog. Double-check your command before pressing the green button. A typo like `G00 Z-10.0` instead of `G00 Z1.0` will ram the tool through the part and into the table.
:::

## Auto Mode — Running Programs

Auto mode runs a loaded program from start to finish (or to a stop point).

### Starting a Program

1. Load the program (select it in Edit mode or call it by number)
2. Switch to **Auto** mode
3. Verify the correct tool is in the spindle (or that the first command is a tool change)
4. Verify work offsets are set correctly
5. Press **Cycle Start**

### Key Controls During a Running Program

| Control | Effect |
|---------|--------|
| **Feed Hold** | Pauses axis motion. Spindle keeps running. Press Cycle Start to resume. |
| **Cycle Start** | Starts or resumes the program. |
| **Feed Override dial** | Adjusts feed rate 0–200% in real time. 100% = programmed rate. |
| **Spindle Override dial** | Adjusts spindle speed 50–120% in real time. |
| **Single Block** | When ON, the program executes one block (line) per Cycle Start press. |
| **Optional Stop (M01)** | When ON, the machine stops at M01 codes in the program. |
| **Block Delete (/)** | When ON, lines starting with `/` are skipped. |
| **Emergency Stop** | Kills everything. Use when something is going wrong and Feed Hold isn't enough. |

:::key-concept
**Single Block mode** is your best friend when proving out a new program. It lets you execute one line at a time, check the position, and decide whether to continue. Always single-block the first run of a new program, especially during tool changes and rapid moves near the part.
:::

### Dry Run

Many controls have a **Dry Run** feature that runs the program with rapids at a reduced jog speed (ignoring programmed feed rates). Use it to verify the tool path without cutting — but be aware that tool-change motions still happen at full speed.

## The Feed and Speed Override Dials

These are among the most important controls on the panel. They let you adjust cutting parameters **in real time** without editing the program.

- **Feed Override**: Usually 0%–200%. At 100%, the machine moves at the programmed feed rate. Turning it down slows the feed; turning it up speeds it up.
- **Spindle Override**: Usually 50%–120%. Same idea, but for spindle RPM.

Real-world use: you program `F20.0` (20 IPM) but the cut sounds aggressive. Turn the feed override down to 80% — the machine now moves at 16 IPM. Once you confirm the cut is stable, bring it back up.

:::pro-tip
During the first run of a new program, keep your hand on the feed override dial. Start at 50% and slowly increase to 100% as you gain confidence in the program. This gives you reaction time if something looks wrong.
:::

## Self-Check Questions

**1. You need to start the spindle at 2000 RPM to check runout with an indicator. What mode and command do you use?**

<details>
<summary>Show Answer</summary>

Switch to **MDI mode**, type `S2000 M03`, and press **Cycle Start**. To stop: type `M05` and press Cycle Start.
</details>

**2. What does Single Block mode do?**

<details>
<summary>Show Answer</summary>

Single Block mode executes one line (block) of the program each time you press Cycle Start. This lets you step through a program line by line, checking each move before continuing. Essential for proving out new programs.
</details>

**3. What's the difference between Feed Hold and Emergency Stop?**

<details>
<summary>Show Answer</summary>

**Feed Hold** pauses axis motion but keeps the spindle running — you can resume with Cycle Start from where you stopped. **Emergency Stop (E-Stop)** kills everything immediately — all motion stops, the spindle stops, and the machine enters a fault state. You'll need to reference the machine and possibly re-establish position after an E-Stop. Use Feed Hold for normal pauses; use E-Stop only in emergency situations.
</details>
