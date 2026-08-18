---
title: "Cutter Radius Compensation — G41, G42, G40"
module: "10-gcode-milling"
lessonNumber: 5
description: "Program the actual part profile and let the control offset the tool — adjust fits by editing the D register, not the program."
objectives:
  - "Explain why cutter compensation is used"
  - "Choose G41 (left) or G42 (right) based on climb/conventional milling"
  - "Activate and cancel compensation with proper lead-in/lead-out moves"
  - "Adjust the D offset register to hold tight tolerances"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["gcode", "milling", "cutter-comp", "G41", "G42", "G40"]
---

## Why Compensate?

The toolpath you program is the path the **tool center** follows. But the tool has a radius, so the center can't travel along the part outline — it must be offset outward by the tool radius.

Doing that math by hand is tedious and error-prone. **Cutter radius compensation** lets you program the *actual part profile* from the blueprint, and the control offsets the tool by its radius automatically.

:::key-concept
Cutter comp means you program the **finished part dimensions** exactly as they appear on the print. The control then shifts the tool by its radius. This also lets you dial in tight tolerances by adjusting the offset in the register — without rewriting the program.
:::

## The D Offset

The tool's radius (or diameter, depending on control) lives in an **offset register** selected with the **D word**:

```gcode
G41 D01 ...    (comp left, using offset register 01)
```

- **D01** typically holds the radius of tool 1 (e.g., 6.0 for a Ø12 end mill)
- Some controls store **diameter** instead of radius — check your machine's manual
- Using comp lets you **nudge** the part size by editing D01, not the program

:::warning
On most mills D holds the **radius**; on some it holds **diameter**. If you enter 12.0 (diameter) where the control expects 6.0 (radius), the tool is offset twice as far and cuts the part undersize. Verify the convention before your first part.
:::

## G41 vs G42 — Left or Right

| Code | Offset direction | When to use |
|------|------------------|-------------|
| **G41** | Cutter **left** of the programmed path | Climb milling external contours (M03, right-hand tool) |
| **G42** | Cutter **right** of the programmed path | Conventional milling (or opposite setup) |
| **G40** | Cancel compensation | Always before ending |

"Left" and "right" are defined **facing the direction of travel** of the tool.

## Which Side? Climb vs Conventional

With the standard **right-hand tool rotating clockwise (M03)**:

| Cut | Toolpath direction | Comp |
|-----|--------------------|------|
| External contour, climb milling | **Counterclockwise** around the part | **G41** |
| Internal pocket, climb milling | **Counterclockwise** inside the pocket | **G41** |
| Conventional milling | Opposite direction | **G42** |

:::key-concept
**Climb milling (the standard) = G41** for right-hand tools with M03. For external contours the path goes **counterclockwise**; for internal pockets it also goes **counterclockwise**. Conventional milling reverses the direction and uses G42. Always verify with a dry run or the machine's simulation.
:::

## Turning Comp On and Off

Compensation must be activated **while the tool is moving in a straight line** (the lead-in move), with the tool already away from the part:

```gcode
G00 X-10.0 Y-10.0       (Approach point, off the part)
G00 Z2.0
G01 Z-10.0 F200          (Plunge to depth — still off the part)

G41 D01 X0.0 Y0.0 F400   (Comp ON — lead-in move to the start corner)
G01 X0.0 Y40.0           (Left edge → up)
G01 X60.0 Y40.0          (Top edge → right)
G01 X60.0 Y0.0           (Right edge → down)
G01 X0.0 Y0.0            (Bottom edge → left — closed contour, counterclockwise)
G40 X-10.0 Y-10.0        (Comp OFF — lead-out move away from the part)
G00 Z25.0
```

:::pro-tip
The lead-in and lead-out must be **linear** (G01 or G00), never an arc, and at least as long as the tool radius. Trying to turn comp on inside an arc move alarms the machine.
:::

## Worked Example — External Contour

A 60 × 40 mm rectangle, Ø12 end mill (D01 = 6.0), climb milled counterclockwise:

```gcode
N10 G90 G94 G17 G21 G40 G49 G80
N20 G54
N30 T01 M06                  (Ø12 end mill, D01 = 6.0)
N40 S3000 M03
N50 G43 H01 Z25.0
N60 M08

N70 G00 X-10.0 Y-10.0        (Approach — clear of the part)
N80 G00 Z2.0
N90 G01 Z-10.0 F200          (Plunge off the part)

N100 G41 D01 X0.0 Y0.0 F400  (Comp ON — lead in to the bottom-left corner)
N110 G01 X0.0 Y40.0          (Left edge → up)
N120 G01 X60.0 Y40.0         (Top edge → right)
N130 G01 X60.0 Y0.0          (Right edge → down)
N140 G01 X0.0 Y0.0           (Bottom edge → left — closed, counterclockwise)
N150 G40 X-10.0 Y-10.0       (Comp OFF — lead out)

N160 G00 Z25.0
N170 M09 M05
N180 G28 G91 Z0.0
N190 G28 G91 X0 Y0
N200 G90
N210 M30
```

The programmed coordinates are the **part's true corners** (0,0 → 0,40 → 60,40 → 60,0 → 0,0). The control shifts the tool outside the part by 6 mm automatically, climb milling around it counterclockwise with G41.

:::key-concept
Because the path is the real blueprint profile, you can hold a ±0.02 tolerance by editing the **D register** (e.g., 5.99 to cut 0.01 bigger). This is why cutter comp is the professional's tool for tight fits.
:::

## Common Mistakes

| Mistake | What Happens | Fix |
|---|---|---|
| Wrong D register (diameter vs radius) | Part cut undersize/oversize | Verify radius vs diameter convention |
| Turning comp on in an arc | Alarm | Use a linear lead-in move |
| Lead-in shorter than tool radius | Gouge at the start corner | Lead-in ≥ tool radius |
| Wrong side (G41 vs G42) | Cutter on the wrong side, part scrapped | Check climb/conventional + spindle direction |
| Forgetting G40 | Next program keeps old comp | Cancel comp and restart with the safety block |

## Self-Check Questions

**1. Why would you use cutter comp instead of programming the tool center directly?**

<details>
<summary>Show Answer</summary>

You program the actual part profile from the blueprint (no manual radius offset math), and you can hold tight tolerances by adjusting the D offset register instead of rewriting the program.
</details>

**2. In G41, is the cutter to the left or right of the programmed path?**

<details>
<summary>Show Answer</summary>

Left — G41 keeps the cutter to the left of the programmed path when facing the direction of travel. G42 keeps it to the right.
</details>

**3. Why must the lead-in move be linear and at least as long as the tool radius?**

<details>
<summary>Show Answer</summary>

Compensation can only be applied on a straight-line move, and the tool needs room to shift by its radius before reaching the part. A too-short or arc lead-in causes a gouge at the start of the profile or an alarm.
</details>

**4. Climb milling an external contour with M03 — which comp and direction?**

<details>
<summary>Show Answer</summary>

G41 (cutter left), counterclockwise around the part. With a right-hand tool and M03 (CW spindle), climb milling an external contour means traveling counterclockwise. Conventional milling would use G42 and clockwise.
</details>
