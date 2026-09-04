---
title: "Subprograms with M98 and M99"
module: "10-gcode-milling"
lessonNumber: 6
description: "Write reusable subprograms using M98 to call and M99 to return, reducing code duplication and simplifying complex programs."
objectives:
  - "Explain the difference between a main program and a subprogram"
  - "Write subprogram calls with M98, repeat count, and nesting"
  - "Use subprograms to repeat a pattern at multiple positions"
  - "Return from a subprogram normally and conditionally with M99"
duration: "45 minutes"
difficulty: "intermediate"
tags: ["gcode", "milling", "subprograms", "M98", "M99"]
---

## Why Subprograms

When the same machining pattern repeats at several positions, writing the same moves over and over wastes program memory and invites errors. A **subprogram** lets you write the pattern once and call it from each position.

## M98 — Call a Subprogram

M98 Pxxxx Lxx

- P — the program number to call (O1000 = P1000)
- L — repeat count (omit for one call)

`gcode
G90 G54 G17 G21
G00 X0 Y0
M98 P1000 L1       (call O1000 once)
G00 X50.0 Y0
M98 P1000 L1       (call it again at the next position)
G00 X0 Y50.0
M98 P1000 L1
G00 X50.0 Y50.0
M98 P1000
M30
`

## M99 — Return from a Subprogram

Every subprogram ends with M99, which sends the control back to the main program at the line after the M98 call.

`gcode
O1000
G00 Z2.0
G01 Z-10.0 F200
G01 X20.0 Y20.0 F400
G00 Z5.0
M99
`

The subprogram can be in the same file or stored separately in the control's memory. Nesting is typically allowed up to 4 levels deep.

## Common Uses

- **Bolt circles**: call the drilling pattern from a subroutine
- **Pocket rows**: write one pocket, call it at each XY position
- **Part families**: store the roughing path as a subprogram, adjust the finishing path in the main program
- **Probe cycles**: subprograms for touch-off and inspection routines

## M99 with a Jump

M99 Pxxxx sends the control to a different program number instead of returning:
`gcode
M99 P2000     (jump to program O2000 instead of returning)
`

This is sometimes used for program chaining and is not a normal subprogram return.

## Worked Example

Four Ø10 mm through holes at the corners of a 100 × 100 mm rectangle, called from a single drilling subprogram:

`gcode
O0001 (Main program)
G90 G94 G17 G21 G40 G49 G80
G54
T01 M06 (Center drill)
S2000 M03
G43 H01 Z25.0
M08
G00 X0 Y0
M98 P1000 L1
G00 X100.0 Y0
M98 P1000 L1
G00 X100.0 Y100.0
M98 P1000 L1
G00 X0 Y100.0
M98 P1000 L1
G80
M09 M05
G28 G91 Z0
G28 G91 X0 Y0
G90
M30

O1000 (Subprogram — spot drill at current XY)
G81 X0 Y0 Z-2.0 R5.0 F250
M99
`

## Self-Check Questions

**1. What does M98 P2000 L3 do?**

<details>
<summary>Show Answer</summary>

Calls subprogram O2000 three times in sequence.
</details>

**2. How does the control know where to resume after a subprogram?**

<details>
<summary>Show Answer</summary>

M99 returns to the block immediately after the M98 call that invoked the subprogram.
</details>

**3. What is the typical nesting depth limit for subprograms on Fanuc-type controls?**

<details>
<summary>Show Answer</summary>

Typically 4 levels deep. Each M98 call adds one nesting level until M99 returns.
</details>

**4. When would you use M99 Pxxxx instead of a plain M99?**

<details>
<summary>Show Answer</summary>

To jump to another program instead of returning to the calling program. This is used for program chaining, not normal subprogram return.
</details>

**5. Why use subprograms instead of M98 calls with L repeats from the main program?**

<details>
<summary>Show Answer</summary>

Subprograms keep the code modular. The main program stays short; the pattern lives in one place. Changes to the pattern are made once in the subprogram instead of editing every L repeat block.
</details>
