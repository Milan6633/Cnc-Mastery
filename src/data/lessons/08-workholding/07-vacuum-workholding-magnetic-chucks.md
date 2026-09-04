---
title: "Vacuum Workholding and Magnetic Chucks"
module: "08-workholding"
lessonNumber: 7
description: "Hold thin, non-ferrous, or delicate parts with vacuum fixturing, and ferrous parts with magnetic chucks — and know each method's limits."
objectives:
  - "Explain how vacuum workholding generates clamping force and what limits it"
  - "Recognize the mid-cut vacuum-loss hazard and how spoilboards manage it"
  - "Explain how a magnetic chuck holds a part and why it only works on ferrous material"
  - "Choose between vacuum and magnetic workholding for a given part and material"
difficulty: "intermediate"
duration: "50 minutes"
tags: ["workholding", "vacuum-fixturing", "magnetic-chucks", "fixturing"]
---

## Vacuum Workholding: Holding With Atmospheric Pressure

A vacuum fixture doesn't grip a part mechanically at all. A pump or venturi draws air out of a sealed cavity beneath the part, and the resulting pressure difference between the vacuum side and the surrounding atmosphere presses the part down against the fixture — the same pressure difference that lets a suction cup hold a load.

The holding force this generates depends directly on two things: the pressure differential achieved, and the effective sealed area the part covers. A larger, flatter part that seals well holds with more total force than a small one, even at the same vacuum level — which also means a part with poor surface flatness, or one too small to cover enough sealed area, may not hold securely no matter how good the pump is.

:::key-concept
Vacuum clamping force scales with sealed area, not part weight or shape. A wide, flat, well-sealed thin sheet can hold far more securely under vacuum than a small, oddly-shaped part with a poor seal — regardless of which one is heavier.
:::

Vacuum fixturing is the standard choice for thin sheet stock, composite and honeycomb panels, and non-ferrous materials — aluminum, plastics, composites — that a magnetic chuck simply cannot hold.

## Managing Mid-Cut Vacuum Loss

The biggest hazard specific to vacuum workholding is losing the seal partway through a cut — the moment the vacuum breaks, the part loses its hold entirely, with a spinning cutter still engaged.

- Monitor the vacuum gauge before and during the cut; a dropping reading signals a developing leak.
- Never let a through-cut break directly into the sealed vacuum cavity with no barrier — a **spoilboard** (a sacrificial layer between the part and the vacuum plenum) lets a tool cut all the way through the part while the spoilboard itself keeps the plenum sealed underneath.
- On multi-part layouts, valve off zones individually so vacuum is only pulled where a part actually covers the table, keeping seal quality high across the whole fixture.

:::warning
Cutting a through-feature directly over an open vacuum port, with no spoilboard beneath it, breaks the seal at the exact moment the tool passes through — right when the part is most likely to shift or lift into a still-engaged cutter. Always back through-cuts with a sacrificial spoilboard layer.
:::

## Magnetic Chucks: Holding Through Magnetic Flux

A magnetic chuck holds a part by magnetic attraction rather than mechanical clamping or pressure differential — either a permanent-magnet chuck (engaged/released by shifting internal pole alignment with a lever) or an electro-permanent chuck (switched with a brief electrical pulse, then holding with no continuous power draw).

This only works on **ferromagnetic materials** — steel and cast iron. Aluminum, most stainless grades, brass, and other non-ferrous materials will not hold on a magnetic chuck at all, regardless of chuck strength.

- The chuck's pole pattern (the spacing of alternating magnetic poles across its face) sets a minimum part size and orientation — a part must bridge across at least a couple of poles to complete a magnetic circuit and hold properly.
- A flat, clean mating surface is needed for full flux transfer; a warped or debris-covered part face reduces effective holding force even on an otherwise strong chuck.
- Machined parts can retain residual magnetism after removal from the chuck, which attracts chips and can interfere with sensitive assemblies — demagnetize the part afterward if that matters for its next step.

:::pro-tip
Magnetic chucks are common for surface grinding and light-to-moderate milling, where the cutting forces stay well within the chuck's holding capacity. They are not generally rated for heavy, interrupted roughing cuts that try to shift a part sideways — check the chuck's force rating against the operation, not just the fact that the part "sticks."
:::

## Choosing Between Them

| | Vacuum | Magnetic |
|---|---|---|
| Works on | Any material with a sealable surface | Ferrous materials only |
| Typical use | Thin sheet, composites, non-ferrous parts | Ferrous parts, grinding, light-to-moderate milling |
| Main hazard | Mid-cut seal loss | Overloading with heavy interrupted cuts |
| Holding force scales with | Sealed area × pressure differential | Pole contact area and flux transfer |

## Self-Check Questions

**1. What two factors determine how much holding force a vacuum fixture generates?**

<details>
<summary>Show Answer</summary>

The pressure differential achieved by the pump, and the effective sealed area the part covers — force scales with both together, not with the part's weight or shape.
</details>

**2. Why is a spoilboard used when a through-cut passes over a vacuum port?**

<details>
<summary>Show Answer</summary>

It's a sacrificial layer beneath the part that lets the tool cut all the way through the part while keeping the vacuum plenum underneath sealed, preventing a sudden loss of hold at the moment of breakthrough.
</details>

**3. Why can't a magnetic chuck hold an aluminum part?**

<details>
<summary>Show Answer</summary>

Magnetic chucks hold through magnetic flux, which only works on ferromagnetic materials like steel and cast iron. Aluminum is non-ferrous and doesn't respond to the chuck's magnetic field at all.
</details>

**4. Why does a magnetic chuck's pole pattern set a minimum part size?**

<details>
<summary>Show Answer</summary>

A part must bridge across at least a couple of the chuck's alternating magnetic poles to complete a magnetic circuit and hold properly — a part smaller than that spacing can't engage enough poles to hold securely.
</details>

**5. Why are magnetic chucks generally not used for heavy, interrupted roughing cuts?**

<details>
<summary>Show Answer</summary>

Their holding force, while strong for grinding and light-to-moderate milling, isn't generally rated to resist the sideways loads and shock of heavy interrupted cuts — exceeding that rating risks the part shifting mid-cut.
</details>
