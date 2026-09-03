---
title: "Macro B — Conditional Logic and Loops"
module: "19-advanced-programming"
lessonNumber: 2
description: "Control the flow of a macro program with IF/THEN conditionals, WHILE loops, and GOTO jumps."
objectives:
  - "Write IF/THEN conditionals to branch based on variable values"
  - "Create loops with WHILE and DO/END to repeat a pattern"
  - "Use GOTO to jump to a sequence number"
  - "Avoid infinite loops by ensuring the loop condition changes"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["programming", "macro", "logic", "loops", "conditional"]
---

## Controlling Program Flow

Arithmetic alone does not make a macro useful. The real power comes from conditionals and loops: the program makes decisions and repeats sections automatically.

## IF/THEN

IF [condition] THEN [action]

Supported comparisons: EQ (equal), NE (not equal), GT (greater than), LT (less than), GE (greater or equal), LE (less or equal).

```gcode
IF [#100 GT 50.0] GOTO 100    (jump to N100 if #100 > 50)
IF [#101 LT 0.0] THEN #3000 = 1 (PART UNDERSIZE)   (alarm if negative)
```

The GOTO form jumps to a sequence number. The THEN form executes a single statement.

## WHILE Loops

WHILE [condition] DO m
  ...
END m

m is a loop number (1, 2, or 3). Loops can be nested up to three levels deep.

```gcode
#100 = 1
WHILE [#100 LE 10] DO 1
  G01 X#100
  #100 = #100 + 1
END 1
```

This loop moves in X from 1 to 10 in steps of 1 mm. Each pass, the variable increments, and the loop runs again until the condition is false.

## Nested Loops

```gcode
#1 = 1
WHILE [#1 LE 5] DO 1        (outer loop — rows)
  #2 = 1
  WHILE [#2 LE 5] DO 2      (inner loop — columns)
    G65 P1000 X[#1*10] Y[#2*10]
    #2 = #2 + 1
  END 2
  #1 = #1 + 1
END 1
```

The inner loop (DO 2) runs to completion for each iteration of the outer loop (DO 1). The maximum nesting depth is typically 3 levels.

## GOTO — Unconditional Jump

GOTO nnnn jumps to a sequence number (Nnnnn). It is often used with IF to skip sections or handle errors.

```gcode
IF [#100 EQ 0] GOTO 900     (skip if zero)
... (machining blocks)
GOTO 999                    (skip the error handler)
N900 #3000 = 100 (ZERO INPUT)
N999 M99
```

## Infinite Loop Prevention

Every WHILE loop must update the variable that the condition checks. If the condition never becomes false, the loop runs forever.

```gcode
#100 = 1
WHILE [#100 LE 10] DO 1
  G01 X#100
  (no increment — infinite loop!)
END 1
```

Always increment, decrement, or otherwise change the loop variable inside the DO/END block.

## Practical Example — Z-Level Roughing

```gcode
#101 = 0.0        (current Z)
#102 = -10.0      (final Z depth)
#103 = 1.0        (step per pass)
#104 = 100.0      (X end)
#105 = 50.0       (Y end)

WHILE [#101 GT #102] DO 1
  #101 = #101 - #103
  IF [#101 LT #102] THEN #101 = #102
  G00 Z2.0
  G01 Z#101 F200
  G01 X#104 F400
  G00 Z2.0
  G00 X0
END 1
```

## Self-Check Questions

**1. What does IF [#100 GT 50.0] GOTO 100 do?**

<details>
<summary>Show Answer</summary>

If variable #100 is greater than 50.0, the program jumps to sequence number N100. Otherwise, it continues to the next block.
</details>

**2. How many levels of nested WHILE loops does Fanuc Macro B typically support?**

<details>
<summary>Show Answer</summary>

Three levels: DO 1 / END 1, DO 2 / END 2, DO 3 / END 3.
</details>

**3. What is the most common cause of an infinite WHILE loop in a macro?**

<details>
<summary>Show Answer</summary>

The variable that the WHILE condition checks is never updated inside the loop. Always increment or change the loop variable within the DO/END block.
</details>

**4. What is the difference between IF [...] GOTO and IF [...] THEN ...?**

<details>
<summary>Show Answer</summary>

IF [...] GOTO jumps to a sequence number. IF [...] THEN executes a single statement (assignment or alarm) on the same line.
</details>