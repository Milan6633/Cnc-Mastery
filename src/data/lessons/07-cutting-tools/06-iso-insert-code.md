---
title: "Reading the ISO 1832 Insert Code"
module: "07-cutting-tools"
lessonNumber: 6
description: "Decode an insert designation such as CNMG 120408-PM position by position, and read a turning toolholder code."
objectives:
  - "Explain the eight positions of the ISO insert code"
  - "Decode clearance angle, size, thickness and nose radius codes"
  - "Interpret geometry suffixes such as -PF, -PM and -PR"
  - "Decode worked examples CNMG 120408-PM and CNMM 120412-PR"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["tooling", "iso-code", "inserts", "insert-code"]
---

## Why the Code Matters

An insert designation such as CNMG 120408-PM is a compact specification. Each position tells you the shape, clearance, tolerance, type, size, thickness and nose radius, and the suffix describes the geometry. Reading it correctly prevents ordering the wrong insert.

## The Eight Positions

| Position | Meaning |
|---|---|
| 1 | Insert shape |
| 2 | Clearance angle |
| 3 | Tolerance class |
| 4 | Insert type (hole and chipbreaker configuration) |
| 5 | Size = cutting-edge length (or IC for round) |
| 6 | Thickness |
| 7 | Nose radius code |
| 8 | Geometry / chipbreaker (manufacturer option) |

## Positions 1 and 2: Shape and Clearance

Position 1 is the shape letter: R, S, C, W, T, D or V. Position 2 is the clearance angle:

| Letter | Clearance angle |
|---|---|
| N | 0° |
| B | 5° |
| C | 7° |
| P | 11° |

:::key-concept
N (0°) is a negative insert, used double-sided with the clearance created by tilting in the holder. C (7°) and P (11°) are positive inserts with the clearance built in.
:::

## Positions 3 and 4: Tolerance and Type

Position 3 gives the tolerance class on size and thickness. Position 4 describes the insert type — whether it has a hole and a chipbreaker, and whether it is single- or double-sided. Common letters include A (with hole), G (with hole and chipbreaker, double-sided), M (with hole and chipbreaker, single-sided) and T (with hole and chipbreaker for positive inserts).

## Positions 5, 6 and 7: Size, Thickness, Nose Radius

Position 5 is the cutting-edge length in millimetres for most shapes (for round inserts, the inscribed circle IC). Position 6 is thickness. Position 7 is the nose radius code.

| Nose radius code | Metric radius |
|---|---|
| 02 | 0.2 mm |
| 04 | 0.4 mm |
| 08 | 0.8 mm |
| 12 | 1.2 mm |
| 16 | 1.6 mm |
| 24 | 2.4 mm |

The inch system uses different codes: 0 = 0.008", 1 = 1/64", 2 = 1/32", 3 = 3/64", 4 = 1/16", 6 = 3/32".

## Position 8: Geometry

The final suffix is the manufacturer's geometry code:

- -PF: ISO P finishing
- -PM: ISO P medium (universal)
- -PR: ISO P roughing
- -MM, -MR: ISO M medium and roughing
- -MF: ISO M finishing

## Worked Example: CNMG 120408-PM

| Position | Code | Meaning |
|---|---|---|
| 1 | C | Rhombic, 80° point angle |
| 2 | N | 0° clearance (negative) |
| 3 | M | Molded tolerance class |
| 4 | G | With hole and chipbreaker, double-sided |
| 5 | 12 | 12 mm cutting-edge length |
| 6 | 04 | Thickness ≈ 4.76 mm |
| 7 | 08 | Nose radius 0.8 mm |
| 8 | PM | Medium geometry |

## Worked Example: CNMM 120412-PR

| Position | Code | Meaning |
|---|---|---|
| 1 | C | Rhombic, 80° point angle |
| 2 | N | 0° clearance (negative) |
| 3 | M | Molded tolerance class |
| 4 | M | With hole and chipbreaker, single-sided |
| 5 | 12 | 12 mm cutting-edge length |
| 6 | 04 | Thickness ≈ 4.76 mm |
| 7 | 12 | Nose radius 1.2 mm |
| 8 | PR | Roughing geometry |

:::pro-tip
The two examples differ in position 4 (G double-sided vs M single-sided), position 7 (08 = 0.8 mm vs 12 = 1.2 mm nose radius) and position 8 (PM medium vs PR roughing).
:::

## The Toolholder Code (Brief)

A turning toolholder code carries its own positions:

- Clamping system: screw, lever, top clamp or rigid clamping.
- Holder style / bar type: for internal bars, S = solid steel, A = steel with coolant supply, E = carbide shank, F = dampened carbide shank.
- Hand of tool: R = right-hand, N = neutral, L = left-hand.
- Shank height and width (external) or bar diameter (internal).
- Tool length: H = 100, K = 125, M = 150, P = 170, Q = 180, R = 200, S = 250, T = 300, U = 350, V = 400, W = 450, Y = 500 mm.

**1. What does the letter N in position 2 of CNMG mean?**

<details>
<summary>Show Answer</summary>

N is a 0° clearance angle, so the insert is negative.
</details>

**2. What nose radius does code 08 represent in the metric system?**

<details>
<summary>Show Answer</summary>

0.8 mm.
</details>

**3. In CNMG 120408-PM, what does the 12 represent?**

<details>
<summary>Show Answer</summary>

Position 5, a 12 mm cutting-edge length.
</details>

**4. What is the difference between CNMG 120408-PM and CNMM 120412-PR?**

<details>
<summary>Show Answer</summary>

Position 4: G (double-sided) vs M (single-sided); position 7: 08 (0.8 mm) vs 12 (1.2 mm) nose radius; position 8: PM (medium) vs PR (roughing).
</details>

**5. What bar types do S, A, E and F indicate in a boring bar code?**

<details>
<summary>Show Answer</summary>

S = solid steel, A = steel with coolant supply, E = carbide shank, F = dampened carbide shank.
</details>
