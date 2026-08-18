---
title: "Hole Types and Callouts"
module: "03-blueprint-reading"
lessonNumber: 10
description: "Identify through holes, blind holes, counterbores, countersinks, spotfaces, reamed holes, and bored holes on a print."
objectives:
  - "Read callouts for all common hole types"
  - "Distinguish counterbores from countersinks"
  - "Match hole callouts to machining operations and tooling"
  - "Understand when to drill, ream, or bore"
duration: "40 minutes"
difficulty: "beginner"
tags: ["blueprint", "holes", "counterbore", "countersink", "reaming", "boring"]
---

## The Most Common Feature in Machining

Holes are everywhere: clearance holes for bolts, precision bores for bearings, tapped holes for fasteners, counterbores for socket-head screws. Every hole type has a different callout — and a different machining strategy.

## Hole Types at a Glance

| Hole type | Symbol / callout | Purpose |
|---|---|---|
| Through hole | Ø10 THRU | Goes all the way through |
| Blind hole | Ø10 × 20 DP | Stops at a depth |
| Counterbore | Ø16 × 11 DP CBORE | Flat-bottom recess for socket-head screws |
| Countersink | Ø16 × 90° CSK | Cone-shaped recess for flat-head screws |
| Spotface | Ø16 SF | Shallow flat seat for washer/bearing contact |
| Tapped | M10 × 1.5 | Threads for a bolt |

## Drilled Holes

A plain drilled hole callout is just a size:

- **Ø10 THRU** — drill a 10 mm hole through
- **Ø10 × 20 DP** — drill 10 mm, 20 mm deep

Drills are not precision tools: a standard drill produces a hole roughly **+0.1 to +0.2 mm** over nominal, with some runout and a rough finish. Drilled holes are fine for bolt clearance, oil passages, and rough locations — but not for fits.

:::key-concept
A plain Ø callout means "drill it." The drill diameter equals the callout, and the resulting size will be slightly over — which is fine for clearance holes. If the print wants precision, it says so (H7, ream, or bore).
:::

## Reamed Holes — Precision Size

- **Ø10 H7** — ream the hole to an H7 fit
- Machining sequence: drill **Ø9.8**, then ream to **Ø10 H7**
- The reamer removes only ~0.2 mm, giving a round, smooth, accurately sized hole

Reamed holes are used for dowel pins, bearing seats, and precision alignment.

## Bored Holes — When You Need Control

Boring uses a single-point tool to enlarge an existing hole to a precise size:

- **Ø25 ±0.01** — bored hole with a tight tolerance
- Boring is used for **large diameters**, **tight tolerances**, and **interrupted cuts** (where reamers would chatter or deflect)

:::pro-tip
On the floor: ream for fine size and finish on standard sizes; bore when the hole is big, tight, or passes through a gap (interrupted cut) where a reamer would bounce.
:::

## Tapped Holes — Threads

Tapped holes use thread callouts (Lesson 9):

- **M10 × 1.5 - 6H THRU** — tap through
- **M10 × 1.5 - 6H × 20 DP** — tap 20 mm deep

The **tap drill** size is smaller than the thread's major diameter. For M10 × 1.5 the common tap drill is **Ø8.5 mm** (80% thread engagement). The print doesn't give you the tap drill — that comes from the thread chart — but the callout tells you which tap to use.

## Counterbores and Countersinks

**Counterbore (CBORE)** — a flat-bottomed recess for a socket-head cap screw:

- **Ø16 × 11 DP CBORE for Ø10 SHCS** — 16 mm counterbore, 11 mm deep, sized for a 10 mm socket-head screw (head height ~10 mm)

**Countersink (CSK)** — a cone-shaped recess for a flat-head screw:

- **Ø16 × 90° CSK for Ø8 FHCS** — 16 mm countersink at 90° included angle, sized for an 8 mm flat-head screw

:::warning
A counterbore is a flat-bottomed step; a countersink is a cone. They take different tools (end mill / counterbore cutter vs. countersink drill). Mixing them up means the screw head won't seat — or the part is scrap.
:::

## From Callout to Machining Operation

| Callout | Operation sequence | Typical tooling |
|---|---|---|
| Ø10 THRU | Drill Ø10 | Twist drill |
| Ø10 H7 | Drill Ø9.8 → ream Ø10 | Drill + reamer |
| Ø25 ±0.01 | Drill Ø23 → bore Ø25 | Drill + boring bar |
| M10 × 1.5 | Drill Ø8.5 → tap M10 | Drill + tap |
| Ø16 × 11 DP CBORE | Drill pilot → counterbore Ø16 | Counterbore cutter |
| Ø16 × 90° CSK | Drill pilot → countersink | Countersink tool |

A simple drill cycle in G-code for a through hole:

```gcode
G90 G54 G17 G21
T01 M06          (Ø10 drill)
S1200 M03
G43 H01 Z10.0
M08
G81 X25.0 Y25.0 Z-25.0 R2.0 F150   (drill cycle: 25,25, -25 deep)
G80
M09 M05
M30
```

## Self-Check Questions

**1. What is the difference between a counterbore and a countersink?**

<details>
<summary>Show Answer</summary>

A counterbore is a flat-bottomed cylindrical recess that seats socket-head cap screws. A countersink is a cone-shaped recess that seats flat-head screws flush with the surface.
</details>

**2. Why would a print call for reaming instead of just drilling?**

<details>
<summary>Show Answer</summary>

Because reaming produces a precise diameter with good roundness and finish (e.g., Ø10 H7). Drills overshoot size by ~0.1–0.2 mm and leave a rougher surface, which is fine for clearance but not for fits.
</details>

**3. For M10 × 1.5 tapped hole, what must you do before tapping?**

<details>
<summary>Show Answer</summary>

Drill a tap drill hole (typically Ø8.5 mm for M10 × 1.5) — smaller than the thread's major diameter — then tap the threads to the depth specified on the print.
</details>
