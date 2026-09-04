---
title: "Fixture Plates and Modular Fixturing"
module: "08-workholding"
lessonNumber: 6
description: "Use grid-pattern fixture plates, tombstones, and modular components to build repeatable fixtures without a dedicated build for every part."
objectives:
  - "Explain how a grid-pattern subplate lets standard components locate anywhere on the table"
  - "Describe why a round-and-diamond dowel pin pair is used instead of two round pins"
  - "Explain what a tombstone adds on a horizontal machining center"
  - "Identify when modular fixturing is worth using instead of a dedicated fixture build"
difficulty: "intermediate"
duration: "50 minutes"
tags: ["workholding", "fixture-plates", "modular-fixturing", "tombstones"]
---

## The Grid-Pattern Subplate

A fixture plate (subplate) is a flat plate, mounted to the machine table, drilled and tapped on a regular grid — commonly every 25 mm or 50 mm — with both threaded holes for clamping hardware and precision dowel holes for locating pins. The grid means a locator, clamp, or support module can be positioned almost anywhere across the plate rather than only at fixed, pre-planned points, and the whole fixture can be rebuilt for a new part without redrilling the table itself.

Before first use, a subplate must be qualified: indicated flat and parallel to the table, and its origin — usually one corner or a specific dowel hole — established as the master reference point every fixture built on it works from.

## The Round-and-Diamond Dowel Pair

Locating a modular component or a pallet on the grid with two round dowel pins seems like the obvious choice, but it over-constrains the part: two round pins in two round holes fight the actual center-to-center distance tolerance on both the pins and the holes, and if that distance is even slightly off, the assembly binds or rocks instead of seating cleanly.

The standard fix is a **round pin plus a diamond (relieved) pin**. The round pin fully locates the primary point. The diamond pin has its sides relieved so it only contacts the hole along the line connecting the two pins — it fixes rotation without fighting the center-distance tolerance in the other direction.

:::key-concept
A diamond pin isn't a weaker locator — it's a deliberately relieved one. It removes exactly the one rotational degree of freedom still needed, without adding a second, redundant translational constraint that a full round pin would.
:::

## Tombstones

On a horizontal machining center, a **tombstone** is a tall, often multi-sided fixture plate standing vertically on the table, letting several parts (or several faces of one part) be presented to the horizontal spindle in sequence without repositioning. A four-sided tombstone can carry parts on all four faces; as the table indexes, the spindle machines one face while the operator loads or unloads the opposite face, keeping the machine cutting far more of the time than a single-part horizontal setup would.

## Modular Fixturing Systems

Rather than designing and building a dedicated, welded or machined fixture for every new part, a modular fixturing system provides a kit of standardized, reusable components — risers, angle plates, V-blocks, adjustable locators, and clamp modules — that bolt together on the grid to build a fixture specific to the part at hand, then come apart and get reused for the next job.

:::pro-tip
Modular fixturing earns its cost on low-volume and prototype work, where a dedicated fixture would take longer to design and build than the actual production run. For a job running thousands of identical parts, a dedicated fixture optimized for cycle time usually wins instead.
:::

## Self-Check Questions

**1. Why is a fixture plate machined on a regular grid pattern instead of with holes only where one specific part needs them?**

<details>
<summary>Show Answer</summary>

The grid lets standard locating, clamping, and support components be positioned almost anywhere across the plate, so the same plate can be reconfigured for a new part instead of needing to be redrilled.
</details>

**2. Why does using two full round dowel pins to locate a component over-constrain it?**

<details>
<summary>Show Answer</summary>

Two round pins in two round holes both try to fix the exact center-to-center distance. Any variation in that distance between the pins and the holes causes binding or rocking instead of a clean seat.
</details>

**3. What degree of freedom does the diamond pin remove that the round pin doesn't already remove?**

<details>
<summary>Show Answer</summary>

Rotation about the round pin — it fixes rotation along the line connecting the two pins without adding a redundant translational constraint in the other direction.
</details>

**4. What does a tombstone add on a horizontal machining center?**

<details>
<summary>Show Answer</summary>

It presents several parts, or several faces of a part, to the spindle in sequence without repositioning, so loading and unloading one face can happen while another face is being machined — increasing spindle uptime.
</details>

**5. When does modular fixturing typically make more sense than a dedicated fixture build?**

<details>
<summary>Show Answer</summary>

On low-volume or prototype work, where designing and building a dedicated fixture would take longer than the production run itself justifies.
</details>
