---
title: "Tapping — Taps, Hole Size & Tool Holding"
module: "07-cutting-tools"
lessonNumber: 14
description: "Select the correct tap and hole size, then hold it properly for reliable internal threads."
objectives:
  - "Distinguish cutting taps from forming taps and choose by hole type."
  - "Match tap geometry to through, blind, and short-chipping materials."
  - "Calculate the correct pre-drill hole size for cutting and forming taps."
  - "Select the right tool holding and coolant method for CNC tapping."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["tooling", "tapping", "threading"]
---

## What tapping is

Tapping cuts or forms an internal thread with a single multi-tooth tool fed at a fixed pitch. The tap is driven in synchronization with the spindle, and chips (or displaced material) must be managed to keep the thread clean and the tool alive.

:::key-concept
Tapping is a one-shot internal threading operation. Unlike single-point threading, there is no infeed series — the entire thread is produced in one synchronized pass, so hole size, coolant, and holding must be right the first time.
:::

## Cutting taps vs forming taps

| | Cutting tap | Forming tap |
|---|---|---|
| Material removal | Cuts; chips are generated | Displaces; no chips generated |
| Torque | Lower | Higher |
| Hole size | Standard | Must be larger |
| Tool life | Moderate | Longer |
| Surface / strength | Good | Very good; strengthens thread in aluminium |

A forming tap deforms the material into the thread form rather than cutting it. It produces no chips, gives a better surface, lasts longer, and increases thread strength in materials such as aluminium — at the cost of higher torque and a larger pre-drilled hole.

## Choosing the tap for the hole

Tap geometry is selected by where the chips must go.

- **Through hole → spiral point tap.** Drives chips ahead of the tool and out the far side of the hole. This is the most rugged tap geometry, built to hold up under demanding conditions.
- **Blind hole → spiral flute tap.** Draws chips back out along the flutes toward the tap shank. This is the default choice wherever the hole doesn't go all the way through.
- **Short-chipping material (cast iron) → straight flute tap.** Handles the broken chips of cast iron well; often used in automotive parts such as pumps and valves.

:::pro-tip
Because it displaces metal instead of cutting it, a forming tap generates no chips at all — which makes it a strong option for softer, more ductile alloys (mild steel, stainless, aluminium among them) regardless of whether the hole is through or blind, shallow or deep. Reach for it whenever getting chips out of the hole is the harder problem to solve.
:::

## Tap standards: DIN, ISO, ANSI

Taps are supplied to different length and shank standards, which matter when ordering or setting tool lengths.

- **DIN** — long overall length, metric.
- **DIN/ANSI mix** — shank diameter from ANSI, overall length from DIN.
- **ISO and ANSI** — short overall length and similar to each other; the shank diameter is metric for ISO and inch for ANSI.

## Hole size and tolerance

The pre-drilled hole determines the thread's depth of engagement. Cutting and forming taps use different formulas because a forming tap leaves displaced material to become the thread.

### Cutting tap

D = TD − TP

Where D is the hole diameter, TD the nominal thread diameter, and TP the thread pitch.

- M10 × 1.5 → 8.5 mm
- 1/4"-20 → 0.2008"

### Forming tap

D = TD − (TP / 2)

- M10 × 1.5 → 9.3 mm
- 1/4"-20 → 0.2264"

:::warning
A forming tap always needs a larger hole than a cutting tap of the same size. Drilling to a cutting-tap size and then running a forming tap will overload the tool and can break it.
:::

## Coolant

Coolant supply is essential in tapping and influences chip evacuation, thread quality, and tool life.

- **External supply** is the most common method and works when chip formation is good. Direct at least one nozzle (two if the drill is stationary) closely to the tool axis.
- **Internal supply** is preferred for deep holes — above about 3 × diameter — and for long-chipping materials, to improve chip evacuation.

Use mineral oil based, synthetic, or straight oil coolants appropriate to the material, and always be aware of the oil content of the fluid in the machine.

## Tool holding for tapping

The holder must either synchronize perfectly with the spindle or compensate for small feed errors.

| Holding | When to use | Note |
|---|---|---|
| Rigid tap holder with micro float | First choice for CNC and synchronized tapping | Eliminates oversized threads; limited compensation gives accurate depths |
| Floating (tension/compression) holder | Manual and older machines | Compensation eliminates feed error |
| HSK solid / quick-change chuck | Standard and lower-volume production | Easy tap holding; adaptors with or without clutch |

:::key-concept
Rigid tapping has no tension/compression play, so spindle motion and axis movement must be precisely synchronized. It is faster, cheaper in tooling, more compact, and can produce a more accurate thread — but it requires a capable CNC controller and cannot reverse quickly enough at very high speeds.
:::

## Self-check

**1. Which tap should you use for a blind hole, and why?**

<details>
<summary>Show Answer</summary>

A spiral flute tap, because it draws the chips back out along the shank rather than pushing them deeper, preventing chip packing at the bottom.
</details>

**2. What is the pre-drill hole size for an M10 × 1.5 cutting tap?**

<details>
<summary>Show Answer</summary>

8.5 mm, using D = TD − TP = 10 − 1.5.
</details>

**3. Why does a forming tap require a larger hole than a cutting tap?**

<details>
<summary>Show Answer</summary>

A forming tap displaces material into the thread form instead of cutting it away, so the starting hole must be larger to leave room for that displaced material.
</details>

**4. When is internal coolant preferred over external coolant in tapping?**

<details>
<summary>Show Answer</summary>

For hole depths above about 3 × diameter and in long-chipping materials, where internal supply improves chip evacuation.
</details>
