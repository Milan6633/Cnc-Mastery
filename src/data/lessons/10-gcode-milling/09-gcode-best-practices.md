---
title: "G-Code Best Practices and Common Mistakes"
module: "10-gcode-milling"
lessonNumber: 9
description: "Write clean, safe G-code programs that are easy to read, debug, and run with confidence."
objectives:
  - "Structure programs with a consistent safety block and clear section breaks"
  - "Use comments effectively to document every operation"
  - "Identify and avoid the most common G-code programming mistakes"
  - "Prove out a new program using single block, dry run, and simulation"
duration: "45 minutes"
difficulty: "beginner"
tags: ["gcode", "milling", "best-practices", "debugging"]
---

## Why Program Structure Matters

A well-structured program is safer, easier to debug, and easier for the next operator to understand. Every program should follow the same skeleton so that anyone who reads it knows where to look.

## The Standard Program Structure

`
Program number      O1001 (DESCRIPTION)
Safety block        G90 G94 G17 G21 G40 G49 G80
Work offset         G54
Tool change         T01 M06
Spindle start       S2500 M03
Tool length comp    G43 H01 Z25.0
Coolant on          M08
Cutting moves       (G00, G01, G02, G03, canned cycles)
Retract             G00 Z25.0
Coolant off         M09
Spindle stop        M05
Home                G28 G91 Z0
                    G28 G91 X0 Y0
Absolute reset      G90
Program end         M30
`

## The Safety Block — Every Code Explained

G90 G94 G17 G21 G40 G49 G80

| Code | Meaning | Why it is there |
|---|---|---|
| G90 | Absolute positioning | Cancels any previous G91 incremental mode |
| G94 | Feed per minute | Cancels G95 feed per revolution |
| G17 | XY plane | Ensures arcs are in the XY plane |
| G21 | Millimetres | Cancels G20 inch mode |
| G40 | Cancel cutter comp | Prevents a stray G41/G42 from crashing the tool |
| G49 | Cancel tool length comp | Prevents a leftover G43 from shifting Z |
| G80 | Cancel canned cycle | Prevents a surprise hole from the next XY move |

## Common Mistakes

### Forgetting G80
The most common bug. After a drilling cycle, the next XY move repeats the cycle. Always write G80 after every group of holes.

### Wrong G90/G91 Mode
G91 is used in G28 G91 Z0, but the next block inherits G91. If you forget G90, the next X Y Z move is incremental, and the tool goes somewhere unexpected.

### Missing F-Word on the First G01
If the previous program left a feed rate of 0 or a very high value, the first G01 moves at the wrong speed. Always set F on the first G01 block.

### G00 While the Tool Is in the Material
G00 moves at maximum speed. If the tool is engaged in the cut, the tool breaks or the part moves. Always use G01 for the feed-in and reserve G00 for air moves.

### Wrong Sign on I, J, or K
I, J, K are measured from the start point to the arc centre. A wrong sign sends the arc bulging in the wrong direction.

### Missing G43 Hnn
Without G43 the tool runs at the wrong Z height. The tool may hit the part or the table. Always set G43 after a tool change.

## Debugging a New Program

1. **Single block** — execute one block at a time. Check the position on the screen before pressing Cycle Start.
2. **Dry run** — rapids move at a reduced jog speed. Verify the tool path without cutting.
3. **Feed hold** — keep a hand near the feed-hold button. If something looks wrong, stop and check.
4. **Feed override** — start at 50% and increase to 100% as you gain confidence.
5. **Backplot** — if the control has a graphic display, run the program in graphics mode before cutting.

## Self-Check Questions

**1. What is the purpose of G40 in the safety block?**

<details>
<summary>Show Answer</summary>

G40 cancels cutter radius compensation. If a previous program left G41 or G42 active, the tool would be offset sideways from the programmed path, which can cause a crash.
</details>

**2. Why should you always set the F-word on the first G01 block?**

<details>
<summary>Show Answer</summary>

Feed rate is modal. If the previous program left a different feed rate (or zero), the first cut will move at an unexpected speed. Setting F explicitly avoids this.
</details>

**3. What is the risk of using G00 to move to a position that is below the part surface?**

<details>
<summary>Show Answer</summary>

G00 moves at maximum speed. If the tool is engaged in the material, it will either break or violently pull the part out of the vise. Use G01 with an F-word for any move that contacts the material.
</details>

**4. How does single-block mode help prove out a new program?**

<details>
<summary>Show Answer</summary>

Single block executes one line at a time. You can check each move on the position display before pressing Cycle Start. If a move looks wrong, you stop before it happens.
</details>
