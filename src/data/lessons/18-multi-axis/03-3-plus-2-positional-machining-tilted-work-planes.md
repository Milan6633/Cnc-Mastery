---
title: "3+2 Positional Machining: Tilted Work Planes"
module: "18-multi-axis"
lessonNumber: 3
description: "Lock two rotary axes to a fixed tilt, then cut with straightforward 3-axis motion in that tilted plane — capturing multi-axis access without full simultaneous-motion complexity."
objectives:
  - "Explain what the '3' and the '2' in 3+2 machining each refer to"
  - "Explain why 3+2 programming is simpler than simultaneous 5-axis programming"
  - "Identify the kind of part geometry well suited to 3+2 machining"
  - "Explain what 3+2 still can't do that simultaneous 5-axis can"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["multi-axis", "5-axis", "3-plus-2", "positional-machining"]
---

## What "3+2" Actually Means

**3+2** (also called positional 5-axis machining) uses a 5-axis machine's two rotary axes purely to establish a fixed, tilted orientation — moving to a commanded angular position and then **locking** there — while the actual cutting motion is standard, straightforward **3-axis** (X, Y, Z) machining within that tilted plane. The "2" is the rotary positioning; the "3" is the ordinary linear cutting motion that follows, once the part (or tool) is tilted into place.

:::key-concept
3+2 machining is, in effect, a sequence of separate 3-axis operations, each performed in its own tilted work plane rather than the machine's default orientation. Every technique covered throughout this curriculum's milling modules — pocketing, contouring, drilling — applies directly within each tilted plane, exactly as it would on a standard 3-axis machine.
:::

## Why 3+2 Is Simpler to Program and Verify

Because the rotary axes aren't moving during the actual cut — they're locked in a fixed position — a 3+2 operation is conceptually and computationally much simpler than continuously coordinated simultaneous 5-axis motion, covered in the next lesson. Programming a 3+2 operation is essentially programming a standard 3-axis toolpath, just within a coordinate system that's been tilted to a new orientation first. Simulation and verification are correspondingly simpler too, since the collision-checking and toolpath logic doesn't need to account for continuously changing tool orientation throughout the cut.

## When 3+2 Fits the Job

3+2 machining suits parts needing access to **several distinct faces or features that don't individually require continuous, curved-surface motion** — machining a hole pattern on one tilted face, then re-tilting to machine a pocket on a different face, each operation being an ordinary 3-axis job once the machine has moved to and locked that face's orientation. This captures the single-setup, multi-face access benefit covered in this module's opening lesson, without needing the added complexity of continuous 5-axis coordination.

## What 3+2 Still Can't Do

3+2 machining doesn't help with a genuinely continuously curved surface where the tool's orientation needs to change smoothly **throughout** a single cut — a complex, organically shaped surface still needs the tool's angle actively varying as it moves across the surface, which is exactly what simultaneous 5-axis motion, covered in the next lesson, is built for. 3+2 solves the multi-face access problem; it doesn't solve the continuously-varying-surface problem on its own.

:::pro-tip
When evaluating whether a part needs 3+2 or full simultaneous 5-axis capability, ask whether any single feature genuinely needs the tool's orientation to change continuously during its own cut. If every feature, once its face is presented at the right tilt, can be cut with ordinary flat/prismatic 3-axis technique, 3+2 is likely sufficient and meaningfully simpler to program.
:::

## Self-Check Questions

**1. What do the "3" and the "2" in 3+2 machining each refer to?**

<details>
<summary>Show Answer</summary>

The "2" refers to the two rotary axes moving to and locking at a fixed tilted position; the "3" refers to the ordinary 3-axis (X, Y, Z) cutting motion performed within that tilted plane.
</details>

**2. Why is 3+2 machining simpler to program and verify than simultaneous 5-axis machining?**

<details>
<summary>Show Answer</summary>

The rotary axes are locked, not moving, during the actual cut, so the toolpath is essentially a standard 3-axis operation within a tilted coordinate system — no continuously changing tool orientation to account for in programming or collision checking.
</details>

**3. What kind of part is 3+2 machining well suited to?**

<details>
<summary>Show Answer</summary>

A part needing access to several distinct faces or features that don't individually require continuous, curved-surface motion — each face machined as an ordinary 3-axis operation once tilted into position.
</details>

**4. What can 3+2 machining not accomplish on its own?**

<details>
<summary>Show Answer</summary>

Machining a genuinely continuously curved surface where the tool's orientation needs to change smoothly throughout a single cut — that requires simultaneous 5-axis motion instead.
</details>

**5. What question helps determine whether a part needs 3+2 or full simultaneous 5-axis capability?**

<details>
<summary>Show Answer</summary>

Whether any single feature genuinely needs the tool's orientation to change continuously during its own cut — if every feature can be cut with ordinary 3-axis technique once properly tilted, 3+2 is likely sufficient.
</details>
