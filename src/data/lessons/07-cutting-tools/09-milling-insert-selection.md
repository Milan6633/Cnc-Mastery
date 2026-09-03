---
title: "Milling Insert & Cutter Selection"
module: "07-cutting-tools"
lessonNumber: 9
description: "Select milling insert geometry, cutter pitch, entering angle and grade to match the material and the conditions."
objectives:
  - "Choose between Light (-L), Medium (-M) and Heavy (-H) insert geometry."
  - "Match cutter pitch and differential pitch to operation stability."
  - "Select the entering angle for the workpiece and explain chip-thinning compensation."
  - "Pick a grade using machining conditions and material-specific wear mechanisms."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["milling", "tooling", "inserts", "grades", "chip-thinning"]
---

## Insert geometry: Light, Medium, Heavy

A modern milling insert is designed around its main cutting edge, corner
reinforcement and chip former. Geometry is classified by how much cutting force
the edge accepts and how strongly it is reinforced:

| Class | Geometry | Application | Feed |
|---|---|---|---|
| Light (-L) | Extra positive | Light machining, low cutting forces | Low feed rates |
| Medium (-M) | General purpose | Medium operations to light roughing | Medium feed rates |
| Heavy (-H) | Reinforced cutting edge | Heavy machining, highest edge security | High feed rates |

:::key-concept
Light geometry trades edge strength for low force; heavy geometry trades low
force for edge security. Pick -L when the setup is weak or the cut is fine,
-H when the cut is heavy and edge security is the priority.
:::

## Cutter pitch

Pitch is the number of teeth (inserts) around the cutter. It sets how many edges
are in cut at once, and therefore both productivity and stability.

| Pitch | Conditions | Typical use |
|---|---|---|
| Coarse (-L) | Good conditions | Reduced insert count, limited stability, long overhang, small/limited-power machines, deep full slotting |
| Close (-M) | Average conditions | General purpose, mixed production, small-to-medium machines; usually first choice |
| Extra close (-H) | Difficult conditions | High insert count for maximum productivity, stable conditions, short-chipping and heat-resistant materials |

:::pro-tip
Heat-resistant alloys and cast iron favour an extra-close pitch under stable
conditions; a coarse pitch is what you want on long overhang or limited power.
:::

### Differential pitch

Tooth count and chatter risk move together: a coarser pitch generally means less
chance of harmonic vibration building up. It's not unusual for chatter to vanish
entirely just by swapping, say, a 20-tooth cutter for one carrying 14.

:::key-concept
Instead of spacing every tooth identically, a differential-pitched cutter varies
the gap between them. That variation means successive teeth don't strike the
workpiece at a fixed, repeating interval, which prevents the vibration from
building into a resonant harmonic — the irregular timing breaks the pattern
before it can reinforce itself.
:::

## Entering angle and feed compensation

The entering angle decides the direction of the cutting forces and the
relationship between feed per tooth (fz) and maximum chip thickness (hex).

| Entering angle | Character | Feed compensation |
|---|---|---|
| 90° | Cuts a true square shoulder and keeps axial force down, which is what makes it safe for thin walls; once ae passes 50% of DC the chip thickness simply equals the feed | ×1.0 |
| 45° | The angle most jobs default to; the angled entry eases vibration on a long overhang and thins the chip enough to let feed rise | ×1.41 (fz = 1.41 × hex) |
| 10° | Built for high-feed work — the shallow angle keeps the chip thin even at aggressive fz, and it drives force back into the spindle rather than sideways | ×5.76 |
| Round insert | The most robust edge of the group, with many index positions; how thick the chip gets is a function of ap rather than a fixed ratio | depends on ap |

:::warning
A round insert doesn't hold a fixed relationship between fz and hex the way the
other geometries do — because its effective entering angle changes continuously
with depth of cut, the same feed per tooth produces a noticeably thinner chip at
a shallow ap than it does at a deep one.
:::

Effects on the workpiece and machine:

- **90°** suits thin-walled and axially weak-fixtured components.
- **45°** reduces vibration on long overhang and lets you raise productivity
  through chip thinning.
- **10°** directs axial force toward the spindle, stabilising the cut.
- **Round inserts** give the strongest edge and increased chip thinning for
  heat-resistant alloys.

## Machining conditions

Grade and geometry are selected for the actual conditions, not the ideal ones:

| Condition | Cutting depth | Overhang | Cut type | Coolant |
|---|---|---|---|---|
| Good | 25% of max ap or less | Under 2 × cutter diameter | Continuous | Wet or dry |
| Average | 50% of max ap or more | 2–3 × cutter diameter | Interrupted | Wet or dry |
| Difficult | 50% of max ap or more | Over 3 × cutter diameter | Interrupted | Wet or dry |

:::pro-tip
Long overhang and interrupted cuts both raise the toughness demand. Step up in
grade toughness and down in feed before blaming the insert.
:::

## Grade selection: toughness vs wear resistance

Grades sit on a single axis: **toughness** (resistance to chipping and breakage)
against **wear resistance** (resistance to abrasion and heat). You cannot have
both extremes in one grade.

- Difficult, unstable, interrupted conditions → tougher grade.
- Stable, long-running, abrasive conditions → more wear-resistant grade.

Dedicated grades exist for each ISO material group (P, M, K, N, S, H) because
each group wears the edge differently.

## Material-specific wear

| ISO group | Material | Dominant wear mechanisms |
|---|---|---|
| P | Steel | Flank wear, crater wear, plastic deformation |
| M | Stainless steel | Built-up edge (BUE), notch wear |
| K | Cast iron | Flank wear, plastic deformation |
| N | Non-ferrous (aluminium) | Built-up edge on sticky alloys |
| S | Heat-resistant super alloys / titanium | Notch wear, plastic deformation at high temperature |
| H | Hardened steel | Flank wear, heat-related breakdown |

:::key-concept
Match the grade to the wear mechanism, not just the material name. Steel calls
for crater and deformation resistance; stainless calls for BUE resistance; cast
iron calls for flank-wear resistance.
:::

## Self-check

**1. Which geometry class would you choose for heavy roughing with high feed and maximum edge security?**

<details>
<summary>Show Answer</summary>

Heavy (-H) — a reinforced cutting edge for heavy machining and highest edge
security at high feed rates.
</details>

**2. Why does a 45° entering angle allow higher feed per tooth than a 90° angle?**

<details>
<summary>Show Answer</summary>

The 45° angle thins the chip, so fz can be 1.41 × hex. The 90° angle produces a
chip equal to the feed (hex = fz) when ae > 50% of DC.
</details>

**3. A 20-tooth cutter chatters. What simple pitch change might stop it?**

<details>
<summary>Show Answer</summary>

Dropping to a cutter with fewer teeth (or switching to a differential-pitched
cutter) changes the tooth spacing and can break up the harmonic vibration that
causes chatter.
</details>

**4. Stainless steel keeps building up an edge on the insert. Which wear mechanism is at work and how do you respond?**

<details>
<summary>Show Answer</summary>

Built-up edge (BUE). Raise the cutting speed or move to a sharper, more
positive-rake insert geometry, and increase the oil content or pressure of the
cutting fluid.
</details>
