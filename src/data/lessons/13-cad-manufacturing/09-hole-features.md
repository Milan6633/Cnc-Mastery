---
title: "Holes and Hole Features"
module: "13-cad-manufacturing"
lessonNumber: 9
description: "Model manufacturing-accurate holes with the dedicated hole feature — simple, counterbored, countersunk, and tapped — instead of a plain extrude cut."
objectives:
  - "Explain what a dedicated hole feature captures that a plain circular extrude cut doesn't"
  - "Compare simple, counterbore, countersink, and tapped hole types"
  - "Explain how a hole feature can carry manufacturing information beyond raw geometry"
  - "Place a hole accurately relative to existing geometry"
difficulty: "beginner"
duration: "40 minutes"
tags: ["cad", "fusion360", "solidworks", "holes"]
---

## More Than a Round Cut

A hole could technically be modeled as a plain circular sketch extruded as a cut — and for a simple through-hole, that works geometrically. But most CAD software provides a **dedicated hole feature** instead, because a real manufactured hole is rarely just "a cylinder removed from the material" — it often carries a specific type, a specific manufacturing intent, and information that a generic extrude cut doesn't capture at all.

## Hole Types

- **Simple hole** — a plain cylindrical hole, straight through or to a specified depth, the closest equivalent to a basic circular extrude cut but built through the dedicated tool.
- **Counterbore** — a hole with two diameters: a smaller through (or deep) diameter and a larger, flat-bottomed diameter recessed from the surface, sized to seat a socket-head cap screw's head below the surface — matching the counterbore machining operation covered in the manual machining module.
- **Countersink** — a hole with a conical, angled recess at the top, sized to seat a flat-head screw flush with the surface.
- **Tapped hole** — a hole modeled with an actual internal thread callout (thread size, pitch, and depth), rather than just a plain cylindrical bore, letting the model directly represent the finished, threaded feature.

:::key-concept
Using the correct hole type isn't just about getting the 3D shape right — it's about the model accurately representing manufacturing intent. A counterbore hole feature tells anyone reading the model (and, in an integrated CAM workflow, the manufacturing software itself) that this hole gets a specific machining operation, not just "a round cut," in a way a generic extrude never communicates on its own.
:::

## Manufacturing Information Beyond Geometry

A dedicated hole feature typically carries information beyond the pure 3D shape: standard thread callouts (matching real thread size and pitch designations), fastener-matched counterbore and countersink sizing (many CAD packages offer preset dimensions matched to standard fastener sizes, rather than requiring the modeler to look up and enter every dimension manually), and sometimes a direct link to a drawing's hole callout, so a dimension change in the model updates the corresponding note on the drawing automatically.

## Placing a Hole Accurately

A hole feature needs a **position**, defined relative to existing geometry — an edge, a face's centerpoint, another hole (for a consistent pattern spacing), or explicit dimensions from a reference edge. Placing holes with a genuine dimensional or geometric relationship to the part's actual reference geometry, rather than by eye or an arbitrary sketch point, keeps the hole's position correctly linked if the surrounding geometry changes later — the same parametric-modeling principle covered throughout this module.

:::pro-tip
When several holes need consistent spacing relative to each other rather than to an external reference, consider a pattern feature (covered in the next lesson) instead of placing and dimensioning each hole individually — it keeps the whole group tied to one controlling spacing value instead of several independent dimensions that could drift out of consistency if edited separately.
:::

## Self-Check Questions

**1. Why would a modeler use a dedicated hole feature instead of a plain circular extrude cut for a simple through-hole?**

<details>
<summary>Show Answer</summary>

Even for a simple hole, a dedicated hole feature can carry manufacturing intent and information — thread callouts, standard fastener-matched sizing, and drawing links — that a generic extrude cut doesn't capture at all.
</details>

**2. What is the geometric difference between a counterbore and a countersink hole?**

<details>
<summary>Show Answer</summary>

A counterbore has a flat-bottomed, larger-diameter recess to seat a socket-head screw's head below the surface. A countersink has a conical, angled recess to seat a flat-head screw flush with the surface.
</details>

**3. What does a tapped hole feature represent that a simple cylindrical hole doesn't?**

<details>
<summary>Show Answer</summary>

An actual internal thread callout — thread size, pitch, and depth — directly representing the finished, threaded feature rather than just a plain bore.
</details>

**4. Why does placing a hole with a genuine dimensional relationship to existing geometry matter more than placing it "by eye" at roughly the right spot?**

<details>
<summary>Show Answer</summary>

A hole placed with a real geometric or dimensional relationship stays correctly linked and updates automatically if the surrounding geometry changes later, consistent with the parametric-modeling approach covered throughout this module.
</details>

**5. Why might a designer use a pattern feature instead of placing and dimensioning several related holes individually?**

<details>
<summary>Show Answer</summary>

A pattern keeps the whole group of holes tied to one controlling spacing value, rather than several independent dimensions that could be edited inconsistently and drift out of alignment with each other.
</details>
