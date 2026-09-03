---
title: "Metal Cutting Formulas — Definitions & Practice"
module: "02-shop-mathematics"
lessonNumber: 3
description: "Master the metric formula set for spindle speed, feed, material removal rate, power, and torque with worked examples."
objectives:
  - "Recall the symbol, meaning, and unit of each key cutting parameter."
  - "Calculate spindle speed and table feed from cutting speed and feed per tooth."
  - "Compute material removal rate, net power, and torque in metric units."
  - "Use the formulas to size a real milling and turning operation."
duration: "45 minutes"
difficulty: "beginner"
tags: ["math", "formulas", "metal-cutting", "definitions"]
---

## Symbols and definitions

These are the metric symbols used throughout the course. Learn them as a set — every
formula below is just a combination of these terms.

| Symbol | Meaning | Unit |
|---|---|---|
| vc | Cutting speed | m/min |
| n | Spindle speed | rpm |
| Dm | Machined diameter (turning) | mm |
| DC | Cutter diameter | mm |
| Dcap | Cutting diameter at depth of cut (milling) | mm |
| fz | Feed per tooth | mm/tooth |
| fn | Feed per revolution | mm/rev |
| zc | Number of effective teeth | pcs |
| ap | Cutting depth (axial) | mm |
| ae | Working engagement (radial) | mm |
| kc | Specific cutting force | N/mm² |
| Pc | Net power | kW |
| Mc | Torque | Nm |
| Q | Material removal rate | cm³/min |
| hm | Average chip thickness | mm |
| hex | Maximum chip thickness | mm |
| KAPR | Entering angle | ° |
| lm | Machined length | mm |
| Tc | Cutting time | min |

:::key-concept
Every symbol has a fixed unit. Formulas only work when you feed them the listed unit —
for example vc in m/min (not mm/min) and diameters in mm. Mixing units is the most common
source of wrong results.
:::

## Spindle speed and cutting speed

Cutting speed is the surface speed of the edge; spindle speed is how fast the machine
turns. They are linked through the diameter.

```
vc = π × Dm × n / 1000        (turning)
n  = vc × 1000 / (π × Dm)     (turning)
```

For milling, replace Dm with the cutter diameter DC or the diameter at the depth of cut
Dcap. A larger diameter at the same rpm gives a higher cutting speed, so a Ø100 mm bar
turns faster in surface metres than a Ø20 mm bar at the same spindle speed.

## Feed relationships

Feed is described three ways, and they must stay consistent.

```
vf = fz × n × zc       table feed (milling), mm/min
fz = vf / (n × zc)     feed per tooth, mm/tooth
fn = vf / n            feed per revolution, mm/rev
```

- **fz** is how much one tooth advances per revolution — it sets the chip load on each edge.
- **fn** is the advance per full revolution of the tool or workpiece (turning).
- **vf** is the resulting table or penetration speed in mm/min.

## Material removal rate Q

Q is the volume of metal removed per minute, in cm³/min.

```
Q = ap × ae × vf / 1000       (milling)
Q = vc × ap × fn              (turning)
```

The milling form divides by 1000 to convert mm³/min into cm³/min. The turning form needs
no division because vc is already in m/min, so the product lands directly in cm³/min.

## Net power Pc

Power is the metal removal rate multiplied by the specific cutting force, adjusted for
units.

```
Pc = ae × ap × vf × kc / (60 × 10⁶)      (milling, kW)
Pc = vc × ap × fn × kc / (60 × 10³)      (turning, kW)
```

The specific cutting force kc is the force per unit area in N/mm². It depends on the
material and on chip thickness: kc = kc1 × (1/hm)^mc × (1 − γ0/100), where kc1 is the
force at 1 mm chip thickness and γ0 is the effective rake angle. Use the catalogue value
for the actual material and chip thickness.

:::warning
Pc is **net** cutting power at the edge. The spindle motor must supply more, because the
machine has mechanical and drive losses. Allow a safety margin beyond the calculated value.
:::

## Torque Mc

Torque follows directly from power and spindle speed.

```
Mc = Pc × 30 × 10³ / (π × n)       (Nm)
```

At a fixed power, lower rpm means higher torque — which is why roughing at large diameters
demands a machine with enough torque, not just enough kilowatts.

## Chip thickness

Chip thickness is set by the feed and the entering angle.

```
hm  = fn × sin KAPR          average chip thickness (turning)
hex ≈ fn × sin KAPR          maximum chip thickness (same geometry)
```

For milling, substitute fz for fn to get the per-tooth chip thickness. A smaller entering
angle (KAPR) thins the chip for the same feed, spreading the load over a longer edge.

## Cutting time

```
Tc = lm / (fn × n)        (turning)
Tc = lm / vf              (milling)
```

Cutting time is the machined length divided by the feed speed along that length.

## Worked example 1 — face milling

Face mill Ø80 mm, 4 flutes, fz = 0.15 mm/tooth, vc = 200 m/min, ap = 2 mm, ae = 60 mm,
kc = 2000 N/mm².

1. **Spindle speed**
   n = vc × 1000 / (π × DC) = 200 × 1000 / (π × 80) = **796 rpm**

2. **Table feed**
   vf = fz × n × zc = 0.15 × 4 × 796 = **477 mm/min**

3. **Feed check**
   fz = vf / (n × zc) = 477 / (796 × 4) = **0.15 mm/tooth** ✓

4. **Material removal rate**
   Q = ap × ae × vf / 1000 = 2 × 60 × 477 / 1000 = **57.3 cm³/min**

5. **Net power**
   Pc = ae × ap × vf × kc / (60 × 10⁶) = 60 × 2 × 477 × 2000 / 60 000 000 = **1.91 kW**

6. **Torque**
   Mc = Pc × 30 × 10³ / (π × n) = 1.91 × 30 000 / (π × 796) = **22.9 Nm**

## Worked example 2 — turning

Turn Ø60 mm, vc = 180 m/min, fn = 0.25 mm/rev, ap = 2 mm, kc = 2100 N/mm², L = 150 mm.

1. **Spindle speed**
   n = 180 × 1000 / (π × 60) = **955 rpm**

2. **Material removal rate**
   Q = vc × ap × fn = 180 × 2 × 0.25 = **90 cm³/min**

3. **Net power**
   Pc = vc × ap × fn × kc / (60 × 10³) = 180 × 2 × 0.25 × 2100 / 60 000 = **3.15 kW**

4. **Torque**
   Mc = 3.15 × 30 000 / (π × 955) = **31.5 Nm**

5. **Chip thickness** (KAPR = 90°)
   hm = fn × sin 90° = 0.25 × 1.0 = **0.25 mm**

6. **Cutting time**
   Tc = lm / (fn × n) = 150 / (0.25 × 955) = **0.63 min**

:::pro-tip
Work the calculation in the order speed → feed → Q → power → torque. Each step feeds the
next, and checking fz back from vf at step three catches data-entry errors early.
:::

**1. What is the spindle speed for a Ø80 mm cutter at vc = 200 m/min?**

<details>
<summary>Show Answer</summary>

n = vc × 1000 / (π × DC) = 200 × 1000 / (π × 80) = 796 rpm.
</details>

**2. Why does the milling Q formula divide by 1000 but the turning Q formula does not?**

<details>
<summary>Show Answer</summary>

The milling formula multiplies mm dimensions to give mm³/min, so it divides by 1000 to
reach cm³/min. The turning formula uses vc in m/min, so the product lands directly in
cm³/min.
</details>

**3. Which symbol is the number of effective teeth, and what is its unit?**

<details>
<summary>Show Answer</summary>

zc — the number of effective cutting edges, counted in pieces (pcs).
</details>

**4. If the same power is delivered at a lower spindle speed, what happens to torque?**

<details>
<summary>Show Answer</summary>

Torque rises, because Mc = Pc × 30 × 10³ / (π × n). At fixed power, torque is inversely
proportional to spindle speed.
</details>

**5. What is the net power for turning at vc = 180 m/min, ap = 2 mm, fn = 0.25 mm/rev, kc = 2100 N/mm²?**

<details>
<summary>Show Answer</summary>

Pc = vc × ap × fn × kc / (60 × 10³) = 180 × 2 × 0.25 × 2100 / 60 000 = 3.15 kW.
</details>
