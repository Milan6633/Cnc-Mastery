---
title: "The Cutting Edge: Macro and Micro Geometry"
module: "07-cutting-tools"
lessonNumber: 1
description: "How rake angle, entering angle, clearance, nose radius and edge preparation determine cutting edge strength and cutting forces."
objectives:
  - "Identify the macro geometry features of a turning insert and what each controls"
  - "Explain the difference between entering angle KAPR and lead angle PSIR"
  - "Describe the micro geometry features (ER, reinforcement, primary land, chamfer) and their purpose"
  - "Compare negative and positive insert geometry and state when each is used"
duration: "50 minutes"
difficulty: "beginner"
tags: ["tooling", "cutting-edge", "geometry", "rake-angle", "turning"]
---

## Why the Cutting Edge Matters

Machining starts at the cutting edge. Everything downstream — how the chip forms, how long the edge lasts, what feed you can run — traces back to how the edge and the surrounding insert geometry are designed. Every feature you will study in this lesson exists to answer the same question: how do we remove metal productively without breaking the edge?

A turning edge works in a harsh environment. The force pressing on the edge during a typical cut is measured in kilonewtons — enough to crush most everyday objects — and the chip breaker area can hit temperatures near 1000°C. Most of that heat, on the order of four-fifths of it, is carried away in the chip itself rather than soaking into the workpiece or the tool.

:::key-concept
Insert geometry is a compromise between edge security and sharpness. A sharper edge cuts with lower forces but is weaker; a stronger edge resists breakage but demands more power.
:::

## Macro Geometry

Macro geometry is what you can see and measure on the insert directly: the angles and radii that define the basic shape of the cutting edge.

### Rake Angle (GAMO)

The rake angle (γ, GAMO) is the angle between the top face of the insert and the horizontal axis of the workpiece. It can be positive or negative, and it tells you how the insert sits and cuts.

- A positive rake presents a sharp, slicing edge that shears the chip with low cutting forces.
- A negative rake presents a blunter edge that is stronger but requires more force.

### Entering Angle (KAPR) and Lead Angle (PSIR)

The entering angle KAPR is the angle between the main cutting edge and the workpiece surface, set by the holder tip seat together with the insert shape. The lead angle PSIR is the complement of the entering angle, measured from the feed direction.

:::key-concept
Lead angle PSIR = 90° − entering angle KAPR. A KAPR of 45° gives a lead angle of 45°; a KAPR of 95° gives a lead angle of −5°.
:::

A smaller entering angle (larger lead angle) thins the chip and spreads it over a longer cutting edge, which improves edge life in roughing but cannot turn square against a shoulder.

### Clearance Angle

The clearance angle is the angle between the front (flank) face of the insert and the vertical axis of the workpiece. It stops the flank from rubbing the machined surface.

- A negative insert has zero clearance built in and is inclined negatively in the holder to create working clearance.
- A positive insert has the clearance built in, typically 7° or 11°.

### Nose Radius (RE)

The nose radius RE blends the main and secondary cutting edges at the insert corner. A larger RE gives a stronger corner and better surface texture, but a small RE reduces radial pressure and vibration. Keep the depth of cut at or above the nose radius; cutting shallower than RE puts the load almost entirely on the nose and the setup loses stability.

### Cutting-Edge Length (L) and Inscribed Circle (IC)

Insert size is defined by the cutting-edge length L for most shapes, or by the inscribed circle IC for round inserts. IC is the diameter of the largest circle that fits inside the insert profile.

## Micro Geometry

Micro geometry is the small-scale shaping of the edge itself — features measured in tenths of a millimetre or micrometres.

### Edge Rounding (ER)

The ER treatment (edge rounding) gives the edge its final micro-geometry, applied as the last step before coating. A typical ER sits around 80 µm — small enough that it barely registers as a radius by eye, yet large enough to change how the edge behaves under load. The relationship between the width and height (W/H) of the rounding is tuned to suit different applications.

### Cutting-Edge Reinforcement and Primary Land

A modern insert often carries a small reinforcement land behind the edge. A typical steel turning insert for medium work uses a cutting-edge reinforcement of about 0.25 mm, a primary land of 5° and a rake angle of 20°.

### Chamfer and Honing

A chamfer or negative land is a small ground bevel along the edge. It increases edge strength but also raises cutting forces. Inserts with a negative land and reinforced corners are used in intermittent cutting to resist breakage.

:::warning
Reinforcement and chamfers add strength at the cost of cutting force. Do not specify a heavier edge preparation than the operation needs, or you will push up power consumption and vibration.
:::

## Negative vs Positive Geometry

The choice between negative and positive inserts is the first geometry decision in turning.

| Feature | Negative insert | Positive insert |
|---|---|---|
| Wedge angle | 90° | Less than 90° |
| Clearance | Zero (tilted in holder) | 7° or 11° built in |
| Sides | Double- or single-sided | Single-sided |
| Edge count | Higher (more edges) | Lower |
| Cutting forces | Higher | Lower |
| Typical use | Heavy cutting, stable setups | Slender shafts, small bores, internal work |

:::pro-tip
When force matters more than edge count, reach for a positive insert — it is the default choice for boring bars especially, since the bar itself is what gives out first under load.
:::

## The Security–Sharpness Compromise

Every edge design trades sharpness against security. A sharp, lightly reinforced edge lowers forces and suits finishing; a heavily reinforced, rounded edge survives roughing and interrupted cuts. The correct edge is the weakest one that still completes the operation reliably.

**1. What is the relationship between entering angle KAPR and lead angle PSIR?**

<details>
<summary>Show Answer</summary>

Lead angle is the complement of entering angle: PSIR = 90° − KAPR. A KAPR of 45° equals a lead angle of 45°, and a KAPR of 95° equals a lead angle of −5°.
</details>

**2. Why does a negative insert have zero clearance angle?**

<details>
<summary>Show Answer</summary>

A negative insert has a 90° wedge with no built-in clearance. Working clearance is created by tilting the insert negatively in the tool holder.
</details>

**3. What is edge rounding (ER) and when is it applied?**

<details>
<summary>Show Answer</summary>

ER is the final micro-geometry treatment of the cutting edge, typically around 80 µm (about a hair's thickness), and it is applied before coating.
</details>

**4. Which insert style produces lower cutting forces, and where is it preferred?**

<details>
<summary>Show Answer</summary>

Positive inserts produce lower cutting forces. They are preferred for slender shafts, small bores and internal turning.
</details>

**5. Why is edge design always a compromise?**

<details>
<summary>Show Answer</summary>

A sharper edge cuts with lower forces but is weaker, while a stronger (reinforced, rounded) edge resists breakage but demands more power — so every design balances security against sharpness.
</details>
