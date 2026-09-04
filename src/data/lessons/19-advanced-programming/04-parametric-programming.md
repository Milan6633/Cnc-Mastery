---
title: "Parametric Programming — Part Families and Formula-Driven Paths"
module: "19-advanced-programming"
lessonNumber: 4
description: "Write one program that machines a family of parts by changing only the input variables."
objectives:
  - "Design a parametric program that accepts dimensions as arguments"
  - "Write a macro that machines a stepped shaft from variables"
  - "Use system variables to set work offsets from probing results"
  - "Build a complete part-family program"
duration: "55 minutes"
difficulty: "advanced"
tags: ["programming", "macro", "parametric", "part-families"]
---

## The Parametric Idea

When a part family shares the same geometry but varies in dimensions, you can write one program that reads the dimensions from variables. Changing the variables changes the part — no editing of the G-code itself.

## Stepped Shaft Example

A turned shaft with two diameters, two lengths, a chamfer, and a thread. The parameters are:

| Argument | Variable | Meaning |
|---|---|---|
| A | #1 | Total length |
| B | #2 | Large diameter |
| C | #3 | Small diameter |
| D | #4 | Small diameter length |
| E | #8 | Thread pitch |
| F | #9 | Thread length |

The macro uses these variables to generate the entire program path:

```gcode
O1000 (Stepped shaft — parametric)
(Set stock size and safety)
G00 X[#2 + 5.0] Z2.0
G01 Z- [#1 + 1.0] F0.3
G00 X[#2 + 8.0] Z2.0
(Rough large diameter)
G01 X[#2 - 0.5] F0.3
Z-#1
G00 X[#2 + 5.0] Z2.0
```

Call it with: G65 P1000 A100.0 B50.0 C30.0 D40.0 E1.5 F20.0

## Using System Variables for Offsets

After a probing cycle, the probe position is stored in system variables. Use them to set the work offset:

```gcode
G31 Z-50.0 F100
#5223 = #5063    (set G54 Z offset to the probe touch Z)
```

This is the basis of full automation: probe the part, set the offset, and start the program — no manual tool-setting.

## Complete Part-Family Program

A parametric slotting program that takes the slot width, depth, length, and number of passes:

```gcode
O2000 (Parametric slot — A=width, B=depth, C=length, D=number of passes)
#101 = #1 / 2.0    (half width for tool offset)
#102 = #2 / #4     (depth per pass)
#103 = 0           (pass counter)

WHILE [#103 LT #4] DO 1
  #104 = - [#102 * [#103 + 1.0]]
  G00 X0 Y0
  G00 Z2.0
  G01 Z#104 F200
  G01 X#3 F300
  G00 Z2.0
  #103 = #103 + 1
END 1
M99
```

Call: G65 P2000 A20.0 B10.0 C100.0 D5 (20 mm wide, 10 mm deep, 100 mm long, 5 passes)

## Formula-Driven Paths

Macros can generate paths that are difficult to program manually. For example, a sinusoidal path for surface texturing:

```gcode
#1 = 0.0
WHILE [#1 LT 360.0] DO 1
  #2 = #1 * 3.14159 / 180.0 (convert to radians)
  #3 = 5.0 * SIN[#2]        (amplitude 5 mm)
  G01 X#1 Y#3 F200
  #1 = #1 + 1.0
END 1
```

## Self-Check Questions

**1. What is the advantage of a parametric program over a fixed program?**

<details>
<summary>Show Answer</summary>

A parametric program machines a family of parts without editing the G-code. You change the input variables (via G65 arguments) and the program adapts the dimensions.
</details>

**2. In the stepped shaft example, how would you change the large diameter from 50 mm to 60 mm?**

<details>
<summary>Show Answer</summary>

Change the B argument in the G65 call: G65 P1000 A100.0 B60.0 C30.0 D40.0 E1.5 F20.0. The macro uses #2 (B) for the large diameter.
</details>

**3. How does #5223 = #5063 automate the setup?**

<details>
<summary>Show Answer</summary>

#5063 holds the Z position where the probe touched the part. #5223 is the G54 Z offset. Assigning one to the other sets the work offset automatically from the probe measurement.
</details>

**4. What data type can hold the result of an arithmetic expression in a macro variable?**

<details>
<summary>Show Answer</summary>

All macro variables hold decimal numbers (floating point). The result of any arithmetic expression or function assigns a decimal value to the variable.
</details>