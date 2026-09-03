---
title: "Boring Tools & Application"
module: "07-cutting-tools"
lessonNumber: 12
description: "Choose boring bars and boring methods to hit tight tolerances without vibration at long overhang."
objectives:
  - "State what boring is for and how its three basic methods differ."
  - "Match solid steel, carbide and dampened boring bars to the overhang."
  - "Calculate boring cutting data and describe fine-bore adjustment."
  - "Apply coolant, chip control and vibration-avoidance practice."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["boring", "tooling", "vibration", "tolerances", "fine-boring"]
---

## What boring is for

Boring uses a rotating (or workpiece-rotating) tool to machine a hole that
already exists — from pre-machining, casting, forging, extrusion or
flame-cutting. Boring is chosen when a hole needs:

- **Accuracy** — fine boring reaches IT6.
- **Size flexibility** — one adjustable tool covers a diameter range.
- **Interrupted cuts** — cast or pre-drilled holes with sand inclusions or voids.

Boring is typically performed in machining centres and horizontal boring
machines; the rotating tool is fed axially through the hole. Most bored holes
are through-holes in prismatic parts such as housings and casings.

## Three basic boring methods

| Method | Where used | Character |
|---|---|---|
| Stationary tool | Symmetrical components in a turning lathe | Profiling possible with standard bars |
| Rotating tool | Unsymmetrical components in a machining centre | Flexible, adjustable diameters, high productivity in roughing |
| Helical interpolation | Milling machine | One cutter covers many diameters; good when chip breaking is a problem |

:::key-concept
Helical interpolation sacrifices productivity for flexibility — one milling
cutter replaces several boring tools and saves magazine space, but it demands a
high-quality machine for finishing.
:::

## Boring bars and overhang

| Bar type | Typical maximum overhang |
|---|---|
| Solid steel | ~4 × DMM |
| Carbide shank | ~6 × DMM |
| Short dampened | ~7 × DMM |
| Long dampened | ~10 × DMM |
| Carbide-reinforced dampened | ~14 × DMM |

DMM is the coupling (connection) diameter. The boring chapter's own rule of
thumb is simpler: for overhang longer than about 4 × the coupling diameter,
switch to a dampened tool.

:::key-concept
Stiffness falls steeply with overhang. A dampened bar does not make the bar
stiffer — it absorbs vibration energy so the tool stays stable well beyond the
range where a solid bar would chatter.
:::

## Boring cutting data

| Term | Meaning |
|---|---|
| DC | Boring diameter, mm |
| ap | Radial depth of cut, mm (difference between uncut and cut hole radius) |
| fn | Feed per revolution, mm/rev |
| vc | Cutting speed, m/min |
| vf | Penetration rate, mm/min |

Relationships:

- `vc = π × DC × n / 1000`
- `fn = fz × zc` (zc = effective teeth finishing the surface)
- `vf = fn × n`
- Net power: `Pc = vc × ap × fn × kc / (60 × 10³)` kW
- Torque: `Mc = Pc × 30 × 10³ / (π × n)` Nm

Start values from the handbook:

- Rough boring: max start vc = 200 m/min.
- Fine boring with adapters: max start vc = 240 m/min.
- Fine boring with fine boring bars: max start vc = 90–120 m/min.
- Fine boring: max ap = 0.5 mm.

:::warning
Cutting speed is limited mainly by vibration tendency, chip evacuation and long
overhang. A cut that is too shallow makes the insert ride and rub the
pre-machined surface — poor tool life and finish.
:::

## Rough boring vs fine boring

- **Rough boring** opens an existing hole to prepare for finishing. Multi-edge
  (2–3 insert) tools maximise metal removal and hold IT9 or larger.
- **Step boring** sets slides at different axial heights and diameters to split a
  wide chip into two manageable chips.
- **Single-edge rough boring** is used where chip control is demanding (long
  chipping material) or machine power is limited.
- **Fine boring** finalises the hole to tolerance and finish. A single-edge
  adjustable tool reaches IT6 with an adjustment resolution of 0.002 mm.

:::pro-tip
In fine boring, the feed per revolution equals the feed per tooth (fn = fz)
because only one edge cuts. In multi-edge productive boring, fn = fz × z because
every insert feeds at once.
:::

## Small diameters and adjustable heads

For the smallest holes a fine boring head takes solid carbide bars from about
1 mm up; indexable fine boring bars cover roughly 6–20 mm, and exchangeable-head
or modular systems run from about 19 mm upward. The adjustable single-edge head
is the first choice for fine boring — it pre-sets the cutting edge within microns
while the tool is still in the spindle.

:::key-concept
Always make the final diameter adjustment after measuring the hole with the tool
still in the spindle. This compensates for spindle-to-setting misalignment,
radial deflection and insert wear in one step.
:::

## Coolant and chip evacuation

Chip formation and evacuation are critical in boring — especially in blind
holes, where chips have no exit. Ideally chips form as defined commas or spirals.

- Internal cutting fluid is recommended to direct fluid to the cutting zone.
- Cutting fluid cools, lubricates and pushes chips out; it affects hole quality
  and tool life.
- Chip breaking depends on insert geometry, nose radius, entering angle, depth
  of cut, feed, speed and material.

## Vibration avoidance

Vibration tendency grows with overhang, large nose radius, large entering
engagement and high cutting forces. To suppress it:

- Maximize the bar diameter and minimize the overhang.
- Use a dampened bar beyond ~4 × coupling diameter.
- Reduce cutting speed; use a light-cutting geometry and smaller nose radius.
- Apply step boring or a two-edge rough boring tool.
- Increase depth of cut when finishing; reduce it when roughing.
- Check workpiece clamping and spindle condition.

:::warning
A large nose radius deflects the bar more and is more prone to vibration than a
small nose radius. Keep nose radius and depth of cut matched to the finish
requirement, not oversize.
:::

## Self-check

**1. At what overhang should you switch from a solid steel boring bar to a dampened bar?**

<details>
<summary>Show Answer</summary>

Beyond about 4 × the coupling diameter (DMM). A solid steel bar is limited to
roughly 4 × DMM, carbide to 6 × DMM, and dampened bars extend to about
10–14 × DMM depending on design.
</details>

**2. Why is the feed per revolution equal to feed per tooth in single-edge fine boring?**

<details>
<summary>Show Answer</summary>

Only one cutting edge is engaged, so fn = fz. In multi-edge productive boring
every insert feeds at once, giving fn = fz × z.
</details>

**3. A fine boring pass runs vc = 150 m/min, ap = 0.4 mm, fn = 0.1 mm/rev and kc = 2000 N/mm². What is the net power Pc?**

<details>
<summary>Show Answer</summary>

Pc = vc × ap × fn × kc / (60 × 10³) = 150 × 0.4 × 0.1 × 2000 / 60,000 = 0.2 kW.
</details>

**4. You finish-bore and the hole comes out undersized. What is the likely cause and the correct fix?**

<details>
<summary>Show Answer</summary>

Single-edge boring tools deflect radially under cutting force, which can leave
the hole undersized. Make a measuring cut, then apply the final diameter
adjustment with the tool still in the spindle.
</details>
