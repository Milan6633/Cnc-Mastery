---
title: "Parting & Grooving Tools"
module: "07-cutting-tools"
lessonNumber: 15
description: "Choose parting and grooving tools and apply them for clean cut-off, grooves, and face grooving."
objectives:
  - "Select single-edge, 2-edge, and 3-edge systems for the right operation."
  - "Control feed, center height, and front angle when cutting toward center."
  - "Apply grooving, plunge turning, ramping, and face grooving methods."
  - "Set overhang and select inserts for stable, accurate results."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["tooling", "parting", "grooving", "turning"]
---

## What parting and grooving is

Parting and grooving covers the turning operations built around narrow, purpose-made blades: severing a finished part from the bar, and cutting recesses, undercuts, and grooves on both the outside diameter and the face. A handful of these tools double as makeshift turning tools in a pinch, though that isn't what they're built for.

:::key-concept
What makes parting demanding is getting the chip out of a slot that barely has room for the tool itself, let alone a curling chip. There's almost nowhere for the chip to curl and snap on its own inside that narrow channel, so the insert has to do the work — its geometry is shaped to roll the chip into a tight, compact form that can be pushed clear rather than left to jam. When that fails, the packed chip wedges against the walls of the cut and takes the edge with it.
:::

## Insert and tool systems

| System | Edge count | Best for | Feed directions |
|---|---|---|---|
| Single-edge (spring-clamp blade) | 1 | Deep parting | Radial only |
| 2-edge screw clamp | 2 | Medium parting and grooving | Radial and axial |
| 3-edge screw clamp | 3 | Shallow parting, mass production | Radial and axial |

- **Single-edge spring-clamp blades** are the first choice for deep parting. They give quick insert change, larger cut-off diameters, and double-ended inserts.
- **2-edge screw-clamp holders** suit medium parting and shallow grooving, offering increased rigidity.
- **3-edge screw-clamp holders** groove down to **0.5 mm** width and part down to **1 mm**, reach depths up to **6 mm**, and index with very tight tolerance.

## Cutting toward center

When feeding toward center, spindle rpm rises until it hits the machine limit; beyond that point cutting speed falls and reaches **0 m/min at the component center**.

:::warning
Reduce the feed to about **0.05 mm/rev** roughly **2 mm before center**. This maintains cutting-force balance, minimizes vibration, increases tool life, and reduces the size of the pip.
:::

If a subspindle is used, pull the component away approximately 2 mm before center. The same 0.05 mm/rev reduction applies to tube parting.

## Front angle and hand of insert

Front angles on 1-, 2-, and 3-edge inserts run from **KAPR 95° to 110°** (PSIR 5° to 20°). A front-angled insert controls the pip or burr.

- Increasing the front angle decreases the pip/burr.
- Decreasing it improves chip control and tool life.

A **neutral** geometry is the strongest: it permits higher feed and better surface finish, gives a straighter cut, and leaves the pip on the parted-off piece. Inserts are supplied as right-hand (R), neutral (N), or left-hand (L).

## Center height

Center height is critical in parting.

- **Too high** — clearance decreases and the cutting edge rubs or breaks.
- **Too low** — the tool leaves material at the center (a pip).

Hold center height to **±0.1 mm**.

## Grooving methods

- **Multiple grooving** — the best roughing method when groove depth exceeds width. Plunge full-width grooves, then remove the remaining rings (the "fork"). Improves chip flow and tool life.
- **Plunge turning** — the best choice for steel and stainless when groove width exceeds depth. Good chip control.
- **Ramping** — feeds at an angle to avoid vibration and minimize radial forces; ideal for unstable setups.
- **Round inserts** — the strongest inserts available, first choice in heat-resistant super alloys (HRSA); they reduce notch wear.

:::pro-tip
Use the narrowest insert width possible. It saves material, minimizes cutting force, and reduces environmental impact.
:::

## Face grooving

Face grooving cuts grooves axially on the component face. The tool curve must match the groove's bending radius.

- Choose the correct **A or B curve**, right- or left-hand, depending on machine setup and spindle rotation.
- Feed axially toward the end face, machine the largest diameter first, and work inwards for best chip control.
- For roughing: the first cut starts on the largest diameter and works inward; subsequent cuts take about **0.5–0.8 × insert width**.

## Internal grooving minimum hole diameters

Internal grooving and parting bars are limited by the hole they must enter.

- Carbide rod inserts: **≥ 4.2 mm** minimum hole.
- Conventional bars: **≥ 10 mm**.
- Conventional bars (larger): **≥ 12 mm**.
- Bars for oil pipe threading: **≥ 25 mm**.

## Circlip grooves

Circlip grooves on shafts and axles use dedicated insert widths across the cutter size range.

- Cutter diameter 9.7–34.7 mm: circlip widths **0.70–5.15 mm**.
- Cutter diameter 39–80 mm: circlip widths **1.10–5.15 mm**.
- Internal inserts from min. hole 10 mm: widths **1.10–4.15 mm**.
- Carbide rod inserts (min. hole 4.2 mm): widths **0.78–2.00 mm**.
- 3-edge inserts: widths **1.00–3.18 mm**; 2-edge inserts: **1.50–6.00 mm**.

## Tolerance and overhang

- Finishing grooving geometry holds a width tolerance of **±0.02 mm** and works well at low feed.
- Wiper inserts give very high quality on the groove side wall.

Overhang limits by bar type (DMM = bar diameter):

| Bar type | Max overhang |
|---|---|
| Solid steel | ≤ 3 × DMM |
| Dampened steel | ≤ 5 × DMM |
| Carbide | ≤ 5 × DMM |
| Carbide-reinforced dampened | ≤ 7 × DMM |

:::warning
Always use the shortest possible overhang and the largest seat size. In internal machining, a bar not supported to the end of the holder increases overhang and vibration.
:::

## Self-check

**1. What feed reduction should you make when parting toward center, and where?**

<details>
<summary>Show Answer</summary>

Reduce feed to about 0.05 mm/rev approximately 2 mm before center to minimize vibration, protect the tool, and reduce pip size.
</details>

**2. Which method is best for roughing a groove whose depth is greater than its width?**

<details>
<summary>Show Answer</summary>

Multiple grooving — plunge full-width grooves and then remove the remaining rings between them.
</details>

**3. What happens if the parting tool is set too low relative to center height?**

<details>
<summary>Show Answer</summary>

The tool leaves material at the center of the part, producing a pip. Center height must be held to ±0.1 mm.
</details>

**4. What is the maximum recommended overhang for a carbide-reinforced dampened bar?**

<details>
<summary>Show Answer</summary>

Up to 7 × the bar diameter (7 × DMM).
</details>
