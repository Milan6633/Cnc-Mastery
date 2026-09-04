---
title: "Custom Cycles with G65 and G66"
module: "19-advanced-programming"
lessonNumber: 3
description: "Create your own canned cycles by calling macros with arguments, and write probing routines using the G31 skip signal."
objectives:
  - "Call a macro non-modally with G65 and pass arguments"
  - "Call a macro modally with G66 so every movement invokes it"
  - "Write a custom bolt-hole circle macro"
  - "Use G31 skip feed for touch probing"
duration: "55 minutes"
difficulty: "advanced"
tags: ["programming", "macro", "custom-cycles", "G65", "probing"]
---

## Why Custom Cycles

A custom cycle wraps a common machining pattern into a single G-code call. Instead of writing the pattern every time, you write it once as a macro and call it with arguments for the specific dimensions.

## G65 — Non-Modal Macro Call

G65 Pxxxx Aa Bb Cc ...

P — the program number of the macro
A, B, C, I, J, K, D, etc. — argument letters, each mapped to a local variable

| Letter | Variable | Letter | Variable |
|---|---|---|---|
| A | #1 | I | #4 |
| B | #2 | J | #5 |
| C | #3 | K | #6 |
| D | #7 | M | #13 |
| E | #8 | Q | #17 |
| F | #9 | R | #18 |
| H | #11 | S | #19 |
| X | #24 | Y | #25 |
| Z | #26 | T | #20 |

```gcode
G65 P9000 X50.0 Y25.0 Z-10.0 R5.0 F200
```

This passes X→#24, Y→#25, Z→#26, R→#18, F→#9.

## Writing a Macro

A macro is an ordinary program (O9000, O9001, etc.) that uses the passed variables.

```gcode
O9000 (Custom drill cycle)
G00 X#24 Y#25
G00 Z2.0
G01 Z#26 F#9
G00 Z#18
M99
```

When called with G65 P9000 X50.0 Y25.0 Z-10.0 R5.0 F200, the macro drills at X50 Y25 to Z-10 and returns to Z5.

## Worked Example — Bolt Circle Macro

```gcode
O9001 (Bolt circle — centre X, centre Y, radius, start angle, hole count)
#1 = #24 (X centre)
#2 = #25 (Y centre)
#3 = #17 (Q — radius)
#4 = #1 (R — start angle)
#5 = #2 (S — hole count)
#7 = 0 (current hole index)
#8 = 360.0 / #5 (angle step)

WHILE [#7 LT #5] DO 1
  #10 = #1 + #3 * COS[#4 + #7 * #8]
  #11 = #2 + #3 * SIN[#4 + #7 * #8]
  G00 X#10 Y#11
  G81 Z-10.0 R5.0 F200
  #7 = #7 + 1
END 1
M99
```

Call: G65 P9001 X0 Y0 Q50.0 R30.0 S6 (6 holes on a 50 mm radius, starting at 30°)

## G66 — Modal Macro Call

G66 calls the macro on every positioning move (G00 or G01). Cancel with G67.

```gcode
G66 P9000 Z-10.0 R5.0 F200
G00 X20.0 Y20.0    (macro executes at this position)
G00 X40.0 Y20.0    (macro executes again)
G00 X60.0 Y20.0    (macro executes again)
G67                 (cancel modal call)
```

## G31 — Skip Feed for Probing

G31 functions like G01 but the control monitors the skip signal. When the probe touches the part, the control records the position and moves to the next block.

```gcode
G31 Z-20.0 F100
#100 = #5061    (X position at touch)
#101 = #5062    (Y position at touch)
#102 = #5063    (Z position at touch)
```

System variables #5061–#5063 store the position at the moment of the skip signal. This is how probing cycles measure the part.

## Self-Check Questions

**1. What is the difference between G65 and G66?**

<details>
<summary>Show Answer</summary>

G65 calls the macro once at the block where it is written. G66 makes the macro execute on every subsequent positioning move until G67 cancels it.
</details>

**2. In G65 P9000 X50.0 Y25.0, which local variables receive the X and Y values?**

<details>
<summary>Show Answer</summary>

X maps to #24, and Y maps to #25.
</details>

**3. What does G31 do that G01 does not?**

<details>
<summary>Show Answer</summary>

G31 feeds like G01 but monitors the skip signal. When the probe touches the part, the control immediately stops the move and records the position.
</details>

**4. How do you cancel a G66 modal macro call?**

<details>
<summary>Show Answer</summary>

G67 cancels the modal macro call. Any positioning moves after G67 run normally without invoking the macro.
</details>