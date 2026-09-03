---
title: "Hole Quality & Tolerances in Drilling"
module: "07-cutting-tools"
lessonNumber: 11
description: "Understand IT tolerance classes and how drilled, reamed and bored holes compare in accuracy and finish."
objectives:
  - "Read a hole tolerance as nominal value, IT width and position letter."
  - "Compare the tolerance and finish capability of drilling, reaming and boring."
  - "Explain why a drilled hole measures slightly over the drill diameter."
  - "Plan a drill-to-ream sequence for an H7 hole."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["drilling", "hole-quality", "tolerances", "reaming", "boring"]
---

## How a hole dimension is defined

A hole dimension has three parts, not just a number:

- **Nominal value** — the theoretical exact size.
- **Tolerance width** — the permitted size band, given as an IT class (for
  example IT7).
- **Tolerance position** — where the band sits relative to nominal, given by a
  capital letter (for example H).

Example: `Ø 15.00 H10` means nominal 15.00 mm, tolerance width IT10 = 0.07 mm,
position H = from 0 to plus. The hole may measure 15.000 to 15.070 mm.

:::key-concept
The lower the IT number, the closer the tolerance. And for any one IT class the
tolerance width grows as the diameter grows — a 0.01 mm band on a small hole is
much tighter, relatively, than the same band on a large hole.
:::

## IT tolerance values

Tolerance width in mm by IT class and diameter range (ISO):

| IT class | 3–6 | 6–10 | 10–18 | 18–30 | 30–50 | 50–80 | 80–120 |
|---|---|---|---|---|---|---|---|
| IT6 | 0.008 | 0.009 | 0.011 | 0.013 | 0.016 | 0.019 | 0.022 |
| IT7 | 0.012 | 0.015 | 0.018 | 0.021 | 0.025 | 0.030 | 0.035 |
| IT8 | 0.018 | 0.022 | 0.027 | 0.033 | 0.039 | 0.046 | 0.054 |
| IT9 | 0.030 | 0.036 | 0.043 | 0.052 | 0.062 | 0.074 | 0.087 |
| IT10 | 0.048 | 0.058 | 0.070 | 0.084 | 0.100 | 0.120 | 0.140 |

The H position (zero to plus) is the most common hole tolerance because a
slightly oversize hole is safer than an undersize one: an oversize hole still
accepts the shaft, an undersize hole will not.

## What each process can hold

| Process | Typical tolerance | Typical finish Ra |
|---|---|---|
| Drilling | IT8–IT10 | 1.6–6.3 µm (typical range) |
| Reaming | IT6–IT8 | 0.8–1.6 µm (typical range) |
| Rough boring | IT9 or larger | 3.2–6.3 µm (typical range) |
| Fine boring (single-edge) | IT6 | 0.4–1.6 µm (typical range) |

:::key-concept
Drilling removes material fast but is not a precision finishing process. Reaming
and fine boring are what close up the tolerance and improve the finish — they
cannot fix a hole that is off-position or not straight.
:::

A modern solid carbide or exchangeable-tip drill produces a hole very close to
the drill's own diameter tolerance. An indexable insert drill deliberately cuts a
plus-tolerance (oversized) hole, because most holes are H-tolerance. With
presetting, an indexable drill can be brought inside a 0.10 mm tolerance width.

## Why a drilled hole measures over the drill diameter

Several effects stack up to make the hole slightly larger than the nominal drill
diameter:

1. The drill is ground to a **plus (oversize) diameter tolerance**, never under.
2. Indexable drills are built to cut **plus-tolerance holes** for H-tolerance fits.
3. **Runout** makes the drill sweep a circle larger than its own diameter.
4. **Misalignment or deflection** offsets the drill radially, opening the hole.
5. **Chip jamming** can push the drill off-centre or pack chips against the wall.

:::warning
A hole that measures undersize is the real alarm — it usually means deflection,
an off-centre drill, or a chip jam forcing the tool inward. Check alignment,
runout and chip evacuation before changing anything else.
:::

## The drill-to-ream sequence for an H7 hole

A reamer is a light-finishing, multi-edge tool. It corrects size and finish, not
position or straightness.

1. Drill undersize, leaving a reaming allowance of about 0.1–0.3 mm on diameter
   (typical range).
2. Ensure the drilled hole is straight (straightness better than about 0.05 mm).
3. Ream with minimal runout (a few microns) and the reamer concentric with the hole.

:::pro-tip
The reamer follows the drilled hole. If the drilled hole is off-position or
bent, the reamed hole will be too — reaming cannot steer the hole straight.
:::

## Position, burr and straightness

- **Position accuracy** depends on runout, machine alignment and entry: a drill
  entering an inclined or irregular surface will deflect and walk off-centre.
- **Burrs** form at entry and exit. Chamfer drilling or a countersink pass removes
  them; through-hole exit burrs are worst in ductile materials.
- **Straightness** in deep holes is governed by the L/D ratio, runout and feed.
  Long, small-diameter holes wander more; keep runout low and use the shortest
  drill that reaches.

## Self-check

**1. What does `Ø 20 H7` mean in full?**

<details>
<summary>Show Answer</summary>

Nominal diameter 20 mm, tolerance width IT7 (0.021 mm for 18–30 mm), position H
= zero to plus, so the hole may measure 20.000 to 20.021 mm.
</details>

**2. Why is the H tolerance position (zero to plus) the most common for holes?**

<details>
<summary>Show Answer</summary>

An oversize hole still accepts the shaft, while an undersize hole will not fit.
The H position keeps the whole band on the safe (plus) side of nominal.
</details>

**3. Give two reasons a drilled hole measures slightly over the drill's nominal diameter.**

<details>
<summary>Show Answer</summary>

Any two of: the drill is ground to a plus diameter tolerance; runout makes it
sweep a larger circle; misalignment/deflection offsets it radially; or chip
jamming pushes the tool off-centre.
</details>

**4. You need an H7 hole. Why is reaming the correct finish operation, and what allowance do you leave?**

<details>
<summary>Show Answer</summary>

Reaming reaches IT6–IT8 and a fine finish, and it corrects size — but not
position or straightness. Drill undersize leaving about 0.1–0.3 mm on diameter,
then ream with minimal runout.
</details>
