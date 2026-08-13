---
title: "Program Structure — Anatomy of a G-Code Program"
module: "10-gcode-milling"
lessonNumber: 1
description: "Learn how a CNC milling program is organized — from the program number and safety block to the tool changes and program end."
objectives:
  - "Identify the major sections of a CNC milling program"
  - "Write a proper safety/startup block"
  - "Understand modal vs. non-modal commands"
  - "Structure a program that is safe and readable"
duration: "50 minutes"
difficulty: "beginner"
tags: ["gcode", "milling", "structure", "fundamentals"]
---

## The Big Picture

A CNC program is just a **text file of instructions** the machine reads top to bottom. Each line (called a "block") tells the machine to do one or more things: move somewhere, turn on the spindle, change a tool, and so on.

While every shop has its own style, almost all milling programs follow the same skeleton:

1. **Program number / name**
2. **Safety (startup) block** — put the machine in a known, safe state
3. **Tool change and spindle start**
4. **Positioning and cutting moves**
5. **Retract and end**

Let's look at a complete, simple program and break it down.

## A Complete Example

Here's a program that faces the top of a part with a 50 mm face mill:

```gcode
O1001 (FACING PROGRAM - 50MM FACE MILL)

N10 G90 G94 G17 G21 G40 G49 G80  (Safety line - known state)
N20 G54                           (Select work coordinate system 1)

N30 T01 M06                       (Tool change to tool 1)
N40 S2500 M03                     (Spindle on CW at 2500 RPM)
N50 G43 H01 Z25.0                 (Tool length comp on, move to Z25.0)
N60 M08                           (Coolant on)

N70 G00 X-45.0 Y0.0               (Rapid to start position)
N80 Z2.5                          (Rapid down to just above part)
N90 G01 Z-1.0 F250                (Feed down to depth of cut)
N100 X120.0 F600                  (Facing pass across the part)

N110 G00 Z25.0                    (Rapid retract)
N120 M09                          (Coolant off)
N130 M05                          (Spindle stop)
N140 G28 G91 Z0.0                 (Return Z to machine home)
N150 G90                          (Back to absolute mode)
N160 M30                          (Program end and rewind)
```

Don't worry about understanding every code yet — we'll cover each one in the coming lessons. Right now, focus on the **structure**.

## Section-by-Section Breakdown

### 1. Program Number

```gcode
O1001 (FACING PROGRAM - 50MM FACE MILL)
```

The `O` word (letter O, not zero) gives the program a number the control uses to store and find it. The text in parentheses is a **comment** — ignored by the machine, but essential for humans.

:::pro-tip
Always name your programs descriptively in the comment. Six months from now, "O1001" means nothing, but "FACING PROGRAM - 50MM FACE MILL" tells you exactly what it does.
:::

### 2. The Safety Block

```gcode
N10 G90 G94 G17 G21 G40 G49 G80  (Safety line - known state)
```

This is the most important line for **crash prevention**. It forces the machine into a predictable state regardless of what the previous program left active:

| Code | Meaning |
|------|---------|
| G90 | Absolute positioning |
| G94 | Feed per minute |
| G17 | XY plane selected |
| G21 | Metric units (millimeters) |
| G40 | Cancel cutter compensation |
| G49 | Cancel tool length compensation |
| G80 | Cancel canned cycles |

:::warning
Never skip the safety block. If the previous program left the machine in incremental mode (G91) or with cutter comp active (G41/G42), your program could move somewhere completely unexpected and crash. Note: use G21 for metric or G20 for inch — always match your machine's setup.
:::

### 3. Tool Change & Spindle

```gcode
N30 T01 M06          (Tool change to tool 1)
N40 S2500 M03        (Spindle on CW at 2500 RPM)
N50 G43 H01 Z25.0    (Tool length comp on, move to Z25.0)
```

- `T01 M06` selects tool 1 and executes the tool change
- `S2500 M03` sets spindle speed (2500 RPM) and starts it clockwise
- `G43 H01` activates tool length compensation using offset register 1

### 4. Cutting Moves

```gcode
N70 G00 X-45.0 Y0.0    (Rapid to start)
N80 Z2.5               (Rapid down near part)
N90 G01 Z-1.0 F250     (Feed to cutting depth)
N100 X120.0 F600       (Cut across)
```

`G00` moves are **rapid** (fast, non-cutting). `G01` moves are **feed** moves (controlled speed, cutting).

### 5. Retract & End

```gcode
N110 G00 Z25.0         (Retract)
N120 M09               (Coolant off)
N130 M05               (Spindle stop)
N140 G28 G91 Z0.0      (Home Z axis)
N160 M30               (Program end)
```

Always retract safely, shut off coolant and spindle, and end with `M30`.

## Modal vs. Non-Modal Commands

This is a crucial concept:

- **Modal** commands stay active until you change them. If you command `G01` once, every following move is a G01 until you command `G00` or another motion code.
- **Non-modal** commands execute once and are forgotten (like `G04` dwell).

This is why you don't repeat `G01` on every line — once it's active, it stays active.

:::key-concept
Feed rate (F), spindle speed (S), and most G-codes are **modal**. This saves typing but can also cause mistakes — if you forget cutter comp (G41) is still active from earlier, it affects every move until you cancel it with G40.
:::

## Self-Check Questions

**1. What is the purpose of the safety block?**

<details>
<summary>Show Answer</summary>

The safety block (e.g., `G90 G94 G17 G21 G40 G49 G80`) forces the machine into a known, predictable state at the start of the program, canceling any modes left active by a previous program. This prevents crashes caused by unexpected machine states.
</details>

**2. What is the difference between G00 and G01?**

<details>
<summary>Show Answer</summary>

G00 is rapid positioning — the machine moves at maximum speed for non-cutting moves. G01 is linear interpolation — the machine moves at a controlled feed rate for cutting. Never use G00 while the tool is engaged in the material.
</details>

**3. What does "modal" mean for a G-code command?**

<details>
<summary>Show Answer</summary>

A modal command stays active until it is replaced by another command in the same group. For example, once G01 is commanded, all subsequent moves are feed moves until G00 (or another motion code) is commanded. This is why you don't need to repeat G01 on every line.
</details>
