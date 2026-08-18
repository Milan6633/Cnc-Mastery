---
title: "G02 & G03 — Circular Interpolation (Arcs)"
module: "10-gcode-milling"
lessonNumber: 3
description: "Program clockwise and counterclockwise arcs using the R method and the I/J/K method, including full circles."
objectives:
  - "Explain the difference between G02 (CW) and G03 (CCW)"
  - "Program arcs using the R method and its limitations"
  - "Program arcs and full circles using the I/J/K method"
  - "Calculate I and J values from start point and center"
duration: "55 minutes"
difficulty: "intermediate"
tags: ["gcode", "milling", "G02", "G03", "arcs", "circular-interpolation"]
---

## Why Arcs Matter

Straight lines (G01) can't make everything. Fillets, round bosses, circular pockets, bearing bores, and bolt-hole circles all need **arcs**. On a CNC mill you create them with two circular interpolation codes:

| Code | Name | Direction (viewed from +Z looking down) |
|------|------|------------------------------------------|
| **G02** | Circular interpolation | **Clockwise** |
| **G03** | Circular interpolation | **Counterclockwise** |

:::key-concept
**G02 = clockwise, G03 = counterclockwise.** "Clockwise" is defined from the programmer's viewpoint: standing above the machine, looking down at the table (down the +Z axis). This matters — if you look from below, the direction flips.
:::

## Two Ways to Define an Arc

To cut an arc, the control needs three things: the **end point**, the **radius**, and the **direction** (CW/CCW). There are two ways to give the radius:

1. **R method** — write the radius directly (`R25.0`)
2. **I/J/K method** — give the arc center location (I, J, K)

## The R Method

The simplest way — you give the end point and the radius:

```gcode
G01 X25.0 Y0.0 F400      (Move to the arc start point)
G03 X-25.0 Y0.0 R25.0 F400   (CCW 180° arc, radius 25, to the far side)
```

This cuts a half-circle from (25,0) to (-25,0), passing through the top.

:::warning
The R method **cannot cut a full circle** — the start and end points are the same, so the control can't tell where the arc starts. And for arcs **larger than 180°**, the radius must be written as a **negative number** (`R-25.0`). This is the single most common arc mistake.
:::

## The I/J/K Method

Instead of the radius, you give the **distance from the arc start point to the arc center**:

- **I** — the X distance from start point to center
- **J** — the Y distance from start point to center
- **K** — the Z distance from start point to center

:::key-concept
**I, J, and K are incremental** on Fanuc and most common controls — measured from the arc **start point** to the **center** — even when the program is in G90 absolute mode. (Some controls support absolute I/J/K via G90.1 — check your machine's manual.) The sign matters: if the center is to the left of the start point, I is negative.
:::

```gcode
G03 X-25.0 Y0.0 I-25.0 J0.0 F400
```

Start at (25,0), center at (0,0). So I = 0 − 25 = **-25**, J = 0 − 0 = **0**. The tool arcs counterclockwise to (-25,0).

## Full Circles with I/J/K

A full circle needs the I/J/K method (R can't do it). Starting at the rightmost point of a circle centered on the origin:

```gcode
G01 X25.0 Y0.0 F400     (Move to the circle's right edge)
G02 I-25.0 J0.0         (Full circle clockwise — end point omitted)
```

Because the end point equals the start point, you **omit the X and Y** and the control cuts a complete circle. The center is 25 mm to the left of the start, so `I-25.0 J0.0`.

:::pro-tip
To cut a full circle, the tool must first **move to a point on the circle** (usually with G01), then the arc block uses only I/J/K with no end point. Common bug: leaving X/Y in the block on a full circle.
:::

## Plane Selection — G17, G18, G19

An arc lives in a plane. You must tell the machine which one:

| Code | Plane | Arc defined by |
|------|-------|----------------|
| G17 | XY | I and J (default on mills) |
| G18 | XZ | I and K |
| G19 | YZ | J and K |

Most milling arcs are in the XY plane, so G17 (the default, already in your safety block) is what you'll use 99% of the time.

## Feed Rate on Arcs

The F word on an arc is the feed rate **at the tool centerline**. At the outside edge of a convex arc, the actual cutting speed is higher (the material moves relative to the tool edge faster than the center does). For small-radius arcs this difference is minor, but for tight arcs and finishing passes, reduce the feed slightly.

## Putting It All Together

A circular groove at radius 25 mm (the finishing pass around a circular boss Ø50 mm — roughing passes to clear surrounding material not shown):

```gcode
N10 G90 G94 G17 G21 G40 G49 G80
N20 G54
N30 T01 M06               (Ø10 end mill)
N40 S4000 M03
N50 G43 H01 Z25.0
N60 M08

N70 G00 X0.0 Y0.0
N80 G00 Z2.0
N90 G01 Z-5.0 F200        (Plunge to depth at center)

N100 G01 X25.0 Y0.0 F400  (Move out to the circle edge)
N110 G03 I-25.0 J0.0      (Full CCW circle — climb milling the external profile with M03)
N120 G01 X0.0 Y0.0        (Return to center)

N130 G00 Z25.0
N140 M09 M05
N150 G28 G91 Z0.0
N160 G28 G91 X0 Y0
N170 G90
N180 M30
```

:::pro-tip
For climb milling an external contour with M03 (CW spindle), travel **counterclockwise** around the outside (G03). For conventional milling, travel clockwise (G02). The direction determines chip load, surface finish, and tool deflection — verify with simulation before cutting.
:::

## Common Mistakes

| Mistake | What Happens | Fix |
|---|---|---|
| Negative R omitted on a >180° arc | Machine cuts the short way around | Use negative R for arcs over 180° |
| Trying to cut a full circle with R | Alarm — or no motion | Use I/J/K, omit the end point |
| Wrong sign on I or J | Arc bulges the wrong way (or alarms) | I/J = start → center, sign matters |
| Forgetting G17 | Arc in the wrong plane | Put G17 in the safety block |
| Arc endpoints not tangent | Tool mark / gouge at the joint | Enter/exit arcs tangentially |

## Self-Check Questions

**1. Which code is clockwise circular interpolation, and from which viewpoint is "clockwise" defined?**

<details>
<summary>Show Answer</summary>

G02 is clockwise (G03 is counterclockwise). The direction is defined looking down the +Z axis from above the machine — the programmer's normal viewpoint.
</details>

**2. Why can't the R method cut a full circle?**

<details>
<summary>Show Answer</summary>

Because the start and end points are the same, the control can't determine where the arc begins and ends from a radius alone. Full circles must use the I/J/K method with the end point omitted.
</details>

**3. In G90 absolute mode, the center of an arc is at (10, 10) and the start point is at (30, 10). What are I and J?**

<details>
<summary>Show Answer</summary>

I and J are incremental from start to center: I = 10 − 30 = **-20**, J = 10 − 10 = **0**. The signs are always from start to center, even in absolute mode.
</details>

**4. You need a full 360° circle. Which method must you use?**

<details>
<summary>Show Answer</summary>

The I/J/K method, with the end point omitted. The R method cannot cut a full circle because start and end points are identical. Use I/J/K (e.g., G02 I-25.0 J0.0) with no X/Y end point.
</details>

**5. The arc center is 25 mm to the RIGHT of the start point. What is the value of I?**

<details>
<summary>Show Answer</summary>

I = 25.0 (positive). I is the X distance from start to center. Center right of start = positive X = I 25.0.
</details>
