---
title: "Macro B — Variables and Arithmetic"
module: "19-advanced-programming"
lessonNumber: 1
description: "Write parametric G-code programs using Fanuc Macro B variables, arithmetic, and built-in functions."
objectives:
  - "Identify the three types of macro variables and their persistence"
  - "Assign values to variables and use them in G-code words"
  - "Perform arithmetic operations including SIN, COS, and SQRT"
  - "Read and write system variables for tool offsets and work offsets"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["programming", "macro", "variables", "parametric"]
---

## What Is Macro B?

Macro B (also called custom macro) is a programming language built into most Fanuc, Haas, and compatible controls. It lets you write G-code with variables, arithmetic, and logic — the same tools that make any language powerful.

## Variable Types

| Type | Numbers | Persistence | Use |
|---|---|---|---|
| Local | #1 – #33 | Lost on macro end | Arguments, temporary values |
| Common | #100 – #149 | Lost on power off | Global data within a program run |
| Common | #500 – #549 | Retained on power off | Tool data, offsets, setup values |
| System | Various | Machine-specific | Tool offsets, work offsets, alarms |

## Assigning and Using Variables

```gcode
#100 = 50.0           (assign 50.0 to variable #100)
#101 = #100 + 10.0    (arithmetic)
G01 X#100 Y#101 F200  (move to X50.0 Y60.0)
```

The variable name is always a number preceded by the hash sign. The value can be an integer or a decimal.

## Arithmetic Operations

| Operator | Meaning | Example |
|---|---|---|
| + | Addition | #100 = #101 + 5.0 |
| - | Subtraction | #100 = #101 - 5.0 |
| * | Multiplication | #100 = #101 * 2.0 |
| / | Division | #100 = #101 / 2.0 |
| SIN | Sine (degrees) | #100 = SIN[45.0] |
| COS | Cosine (degrees) | #100 = COS[45.0] |
| TAN | Tangent (degrees) | #100 = TAN[30.0] |
| ATAN | Arctangent | #100 = ATAN[1.0] |
| SQRT | Square root | #100 = SQRT[#101 * #101 + #102 * #102] |
| ABS | Absolute value | #100 = ABS[#101] |
| ROUND | Round to nearest integer | #100 = ROUND[#101] |
| FIX | Round down | #100 = FIX[#101.9] |
| FUP | Round up | #100 = FUP[#101.1] |

## Worked Example

Calculate the hypotenuse of a right triangle with legs 30 mm and 40 mm:

```gcode
#1 = 30.0
#2 = 40.0
#3 = SQRT[#1 * #1 + #2 * #2]
G00 X#3              (move to X50.0)
```

## System Variables

System variables access the control's internal data. Common examples:

| Variable | Purpose |
|---|---|
| #5221 | G54 X offset |
| #5222 | G54 Y offset |
| #5223 | G54 Z offset |
| #2001 | Tool offset geometry (length) for tool 1 |
| #2002 | Tool offset geometry for tool 2 |
| #3000 | Macro alarm — stops the program with a message |
| #3011 | Current date (YYYYMMDD) |
| #3012 | Current time (HHMMSS) |

```gcode
IF [#100 GT 100.0] GOTO 10
#3000 = 100 (PART OVERSIZE)   (stops program with alarm)
N10 G00 X0 Y0
```

## Self-Check Questions

**1. What is the difference between #100 and #500?**

<details>
<summary>Show Answer</summary>

#100 (#100–#149) is a common variable that is lost when the machine powers off. #500 (#500–#549) is also common but is retained in memory when the power cycles.
</details>

**2. What does #3000 = 1 (ALARM TEXT) do in a macro program?**

<details>
<summary>Show Answer</summary>

It stops the program and displays the alarm message "ALARM TEXT" on the control screen. The number after the equals sign is the alarm number (1–200).
</details>

**3. How do you write the square root of 25 in a macro expression?**

<details>
<summary>Show Answer</summary>

#100 = SQRT[25.0] — the result is 5.0. Arguments to functions must be enclosed in square brackets.
</details>

**4. Which system variable reads the G54 X offset?**

<details>
<summary>Show Answer</summary>

#5221. The ranges are: #5221 (G54), #5241 (G55), #5261 (G56), #5281 (G57), #5301 (G58), #5321 (G59).
</details>