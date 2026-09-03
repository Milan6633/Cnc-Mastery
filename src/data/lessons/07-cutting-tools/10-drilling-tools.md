---
title: "Drilling Tools — Types & Theory"
module: "07-cutting-tools"
lessonNumber: 10
description: "Choose the right drill type, read drill geometry, and set correct cutting data and entry technique."
objectives:
  - "Match solid carbide, exchangeable-tip, indexable and HSS drills to the hole."
  - "Identify drill geometry: point angle, flutes, margin, core and chisel edge."
  - "Calculate drilling cutting speed, feed per revolution and penetration rate."
  - "Apply correct entry, chip evacuation and pecking practice for deep holes."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["drilling", "tooling", "cutting-data", "chip-evacuation"]
---

## The drilling process

Drilling makes cylindrical holes with a rotating (or workpiece-rotating) cutting
tool. Unlike milling, the drill is always engulfed in the workpiece, so you never
see the cut — chips must be controlled and evacuated reliably.

Four common drilling methods:

- **Drilling** — solid drilling, the basic hole-making method.
- **Trepanning** — cuts a ring, leaving a core; used for large diameters where
  solid drilling would consume too much power (through holes only).
- **Chamfer drilling** — drills and chamfers in one pass, often to prepare a hole
  for threading.
- **Step drilling** — produces a step or step-plus-chamfer profile in one tool.

## Drill types

| Drill | Diameter range | Best for |
|---|---|---|
| Solid carbide | Small | Close/precision tolerances, short to deep holes |
| Exchangeable tip | Medium | Close tolerances, economical; steel body gives toughness |
| Indexable insert | Medium to large | Medium tolerance, flat-bottom blind holes, plunge/boring ops |
| HSS | Small to medium | Low-cost, low-speed general work |

:::key-concept
Short-hole drills are always the first choice on cost per hole. Solid carbide
wins for small diameters and close tolerance; the exchangeable tip is the
economical solution for medium diameters; indexable insert drills cover medium
and large holes.
:::

Indexable insert drills reach diameters up to 84 mm; trepanning drills extend to
about 110 mm. For larger holes, or when chip breaking is a problem, helical or
circular interpolation with a milling cutter is an alternative — less
productive, but flexible.

## Drill geometry

| Element | Function |
|---|---|
| Point angle | Forms the cutting point; 140° typical on solid carbide, 118° on HSS |
| Main cutting edge | The two edges that cut, from periphery to centre |
| Chisel edge | The web at the centre that extrudes rather than cuts |
| Flute | Helical channel that carries chips out of the hole |
| Margin | Narrow land on the diameter that guides the drill |
| Core | The central web that gives the drill its stiffness |
| Primary/secondary clearance | Relief behind the cutting edge to prevent rubbing |

:::key-concept
On a solid carbide drill the chisel edge is practically eliminated and the main
cutting edge reaches the centre point. This cuts chips close to the centre,
lowers thrust and torque, improves centering, and removes the need for a centre
drill.
:::

The point angle is a trade-off: a 140° point centres better and lowers thrust,
while a conventional 118° point is the general-purpose HSS standard.

## Cutting data

| Term | Meaning |
|---|---|
| vc | Cutting speed, m/min |
| fn | Feed per revolution, mm/rev |
| vf | Penetration rate, mm/min |
| DC | Drill diameter, mm |

Relationships:

- `vc = π × DC × n / 1000`
- `vf = fn × n`
- For a two-edge drill: `fn = fz × 2`

:::warning
On any drill, cutting speed is a maximum at the periphery and **zero at the
centre**. On an indexable drill the peripheral insert works from about 50% to
100% of vc max, while the central insert runs from zero to about 50% of vc max.
:::

Effects of cutting speed:

- **Run it too fast** and the flank wears away quickly, the edge deforms plastically, and the hole comes out with poor quality and loose tolerance.
- **Run it too slow** and material welds onto the edge as built-up edge, chips stop clearing well, the tool spends longer in the cut, and the drill is more likely to snap.

Effects of feed:

- **Too high** → harder chip breaking, shorter time in cut.
- **Too low** → longer, thinner chips, better quality but accelerated tool wear and longer time in cut.

:::pro-tip
Feed and speed must be set together. Higher speed helps chip formation in
long-chipping soft materials (low-carbon steel); higher feed thickens and
stiffens the chip for easier breaking.
:::

### Starting values by material

Use these as starting points and adjust for the specific drill and machine.
(typical range — verify against the tool catalogue for the exact drill.)

| Material | vc (m/min) | fn (mm/rev) |
|---|---|---|
| Low-carbon steel (P) | 60–120 | 0.05–0.30 (rises with diameter) |
| Stainless steel (M) | 40–80 | 0.05–0.20 |
| Cast iron (K) | 60–100 | 0.08–0.30 |
| Aluminium (N) | 150–250 | 0.10–0.40 |

Feed per revolution scales with diameter: a Ø5 mm drill might take 0.05–0.08 mm/rev,
while a Ø20 mm drill takes 0.20–0.30 mm/rev in steel.

## Entering the workpiece

Drilling into a flat, perpendicular surface is the norm. Any other entry
increases the risk of drill deflection and edge chipping.

| Surface | Rule |
|---|---|
| Convex | Drill if radius > 4 × drill diameter, hole perpendicular to radius; reduce feed to 50% during entrance |
| Concave | Drill if radius > 15 × drill diameter, hole perpendicular to radius; reduce feed to 25% during entrance |
| Inclined | Up to 10° reduce feed to 1/3 during entrance; over 10° mill a small flat first |
| Irregular | Reduce feed to 1/4 to avoid chipping the cutting edges |

For a pre-drilled or pilot hole, keep it small rather than large — not more than
25% of the drill diameter — to avoid drill deflection.

:::warning
Stack drilling and crossing holes interrupt the cut. Reduce feed on entry and
exit, and expect the edge to see shock loads on breakthrough.
:::

## Chip evacuation and coolant

Chip formation and evacuation is the dominant factor in drilling; it controls
hole quality and tool life.

- Internal coolant is always preferred — essential for long-chipping materials
  and deeper holes (over 4–5 × DC).
- External coolant is acceptable in short-chipping materials and shallow holes.
- Dry or minimal-lubrication drilling works only in short-chipping materials,
  shallow holes (up to 3 × DC), preferably horizontal.
- Emulsion: 5–12% oil (10–25% for stainless). Neat oil always with EP additives.

## Deep holes and pecking

Hole depth is expressed as the L/D ratio (length : diameter). The maximum depth
is a function of hole diameter DC — for example a short-hole drill may be limited
to about 3 × DC.

:::key-concept
As L/D grows, chips have further to travel and the drill becomes less rigid.
Internal coolant and good chip formation are non-negotiable; pecking is the
fallback when chips will not clear.
:::

Two pecking methods exist:

- **Method 1 (best productivity)** — retract the drill no more than about 0.3 mm
  from the hole bottom, or pause periodically while the drill still rotates.
- **Method 2 (best chip evacuation)** — retract the drill fully out of the hole
  after each cycle so no chips stay stuck to the tool.

:::warning
Peck drilling is a fallback, not a default. Use it only when chip evacuation
cannot be solved by geometry, feed/speed or coolant pressure.
:::

## Self-check

**1. Which drill type is the economical first choice for a medium-diameter hole needing close tolerance?**

<details>
<summary>Show Answer</summary>

The exchangeable-tip drill — it gives close tolerances and its steel body
provides toughness at a lower cost than a full solid carbide drill.
</details>

**2. Why is cutting speed zero at the centre of any drill?**

<details>
<summary>Show Answer</summary>

Cutting speed is proportional to radius. At the centre the radius is zero, so
the surface speed is zero — the material there is displaced by the chisel edge
rather than cut at speed.
</details>

**3. A Ø16 mm drill runs at 1400 rpm. What is the cutting speed vc?**

<details>
<summary>Show Answer</summary>

vc = π × DC × n / 1000 = 3.14 × 16 × 1400 / 1000 ≈ 70 m/min.
</details>

**4. You must drill into a surface inclined 8° to the drill axis. How do you enter it?**

<details>
<summary>Show Answer</summary>

Reduce the feed to about 1/3 of the normal rate during entrance (inclinations
up to 10°). Above 10°, mill a small flat first, then drill.
</details>
