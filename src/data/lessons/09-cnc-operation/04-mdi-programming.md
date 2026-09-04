---
title: "MDI as a Programming Tool"
module: "09-cnc-operation"
lessonNumber: 4
description: "Use MDI (Manual Data Input) to write, test, and transfer short G-code sequences directly at the control."
objectives:
  - "Write and execute single G-code commands in MDI mode"
  - "Test cutting parameters before committing them to a program"
  - "Transfer proven MDI sequences into the main program"
  - "Use MDI for setup tasks: spindle start, tool change, home return"
duration: "40 minutes"
difficulty: "beginner"
tags: ["cnc", "operation", "MDI", "manual-data-input", "programming"]
---

## What MDI Is For

MDI (Manual Data Input) is not just for testing — it is a programming tool. Many experienced machinists write short sequences in MDI, test them, and then insert them into the main program. This catches syntax errors and confirms cutting parameters before the full program runs.

## MDI vs EDIT

| Mode | Use |
|---|---|
| MDI | Execute one block or a short sequence immediately. No program is stored. |
| EDIT | Write, edit, and store a full program. The program runs in AUTO mode. |

MDI is the quickest way to answer the question "will this work?"

## Common MDI Commands

### Spindle and Coolant

```gcode
S1500 M03          (start spindle at 1500 RPM)
S2000 M03          (change speed)
M05                (stop spindle)
M08                (coolant on)
M09                (coolant off)
```

### Tool Changes

```gcode
T02 M06            (change to tool 2)
G43 H02 Z100.0     (activate tool 2 offset and move to Z100)
```

### Machine Home

```gcode
G28 G91 Z0         (home Z axis)
G28 G91 X0 Y0      (home X and Y)
```

### Move to a Position

```gcode
G90 G00 X50.0 Y25.0     (rapid to X50 Y25 in absolute)
G90 G01 Z-5.0 F200      (feed to Z-5 at 200 mm/min)
```

### Set a Work Offset

```gcode
G10 L2 P1 X100.0 Y50.0 Z-10.0   (set G54 to X100 Y50 Z-10)
```

## Testing Parameters in MDI

Before adding a new operation to a program, test the parameters in MDI:

1. Jog the tool to a safe position near the part.
2. Switch to MDI.
3. Type the G-code for the operation:

```gcode
G01 Z-2.0 F150
```

4. Press CYCLE START. Watch the cut. Is the feed rate right? Is the chip forming well?
5. If the parameters are wrong, adjust and re-run.
6. Once the cut looks good, write the same block into the main program.

## Testing a Canned Cycle

```gcode
G81 X50.0 Y25.0 Z-10.0 R5.0 F200
```

Run this in MDI. The machine drills one hole at X50 Y25. If the cycle works correctly, copy the G81 line into your program.

## Transferring MDI to the Program

MDI does not store the command. To save a proven sequence:

1. Write the command in MDI and test it.
2. Switch to EDIT mode.
3. Move the cursor to where you want to insert the block.
4. Type the same command and press INSERT.

Some controls have a "last MDI command" recall that lets you see what you typed and copy it.

## MDI for Setup Tasks

MDI is the fastest way to move the machine during setup:

| Task | MDI command |
|---|---|
| Start the spindle | S2000 M03 |
| Change to tool 5 | T05 M06 |
| Go to safe Z | G53 G00 Z0 |
| Move to part zero | G00 X0 Y0 |
| Set G55 offset | G10 L2 P2 X150.0 Y0 Z0 |
| Single-point face | G01 Z-0.5 F200 |

## Self-Check Questions

**1. What happens to an MDI command after you press Cycle Start?**

<details>
<summary>Show Answer</summary>

The command executes once and is cleared. MDI does not store the command. If you want to use it again, you must type it again or insert it into a program in EDIT mode.
</details>

**2. When would you use MDI instead of writing directly into the program?**

<details>
<summary>Show Answer</summary>

Use MDI to test a command before committing it to the program. This catches syntax errors and confirms that the cutting parameters are correct. Once proven, the same command can be inserted into the program.
</details>

**3. How do you start the spindle at 2000 RPM using MDI?**

<details>
<summary>Show Answer</summary>

Type S2000 M03 and press Cycle Start. The spindle starts at 2000 RPM clockwise.
</details>

**4. How do you home all axes using MDI?**

<details>
<summary>Show Answer</summary>

Type G28 G91 Z0 and press Cycle Start. Then type G28 G91 X0 Y0 and press Cycle Start. Or combine them into one block if the control allows.
</details>