---
title: "Orientation Controls: Perpendicularity, Angularity, and Parallelism"
module: "14-gdt"
lessonNumber: 9
description: "Control a feature's angle relative to a datum with perpendicularity, angularity, and parallelism — the same underlying control at three different target angles."
objectives:
  - "Explain why orientation controls, unlike form controls, always require a datum reference"
  - "Distinguish perpendicularity, angularity, and parallelism by their target angle"
  - "Explain how an orientation tolerance zone relates to the feature type it's applied to"
  - "Recognize why an orientation control doesn't also guarantee location"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["gdt", "orientation", "perpendicularity", "angularity", "parallelism", "asme-y14.5"]
---

## Orientation Controls Always Need a Datum

Unlike the form controls covered in the previous two lessons, **orientation controls** — perpendicularity, angularity, and parallelism — always reference at least one datum. This makes sense from their basic definition: orientation is inherently a relationship *between* two things — a controlled feature and a reference — not a property a single feature can have entirely on its own the way flatness or circularity can.

## The Same Control, Three Target Angles

Perpendicularity, angularity, and parallelism are, at their core, the same underlying geometric control — how well a feature's orientation matches an intended angle relative to a datum — differing only in **what that target angle is**:

- **Perpendicularity** — the target angle is exactly 90° to the referenced datum.
- **Parallelism** — the target angle is exactly 0° (parallel) to the referenced datum.
- **Angularity** — the target angle is any specified angle other than 90° or 0°, explicitly stated in the callout.

:::key-concept
Rather than three unrelated concepts, think of perpendicularity and parallelism as angularity's two most common special cases — 90° and 0° respectively — each important enough to warrant its own dedicated symbol, while angularity handles every other angle a design might need.
:::

## Tolerance Zone by Feature Type

An orientation tolerance's zone shape depends on what kind of feature it's controlling:

- Applied to a **flat surface**, the zone is defined by two parallel planes (oriented at the target angle to the datum), separated by the stated tolerance — the surface must fall entirely within that zone.
- Applied to an **axis** (a hole or a shaft, typically with a diameter symbol in the tolerance value), the zone is a cylinder, oriented at the target angle to the datum, that the feature's actual axis must fall within.

This mirrors the same size-and-shape logic covered for feature control frames generally: the presence of a diameter symbol changes a flat-band zone into a cylindrical one, exactly as it does for position tolerance.

## Orientation Doesn't Guarantee Location

An orientation control only constrains the feature's **angle** relative to the datum — it says nothing about where along that angle the feature actually sits. A hole can be perfectly perpendicular to a datum face and still be significantly mislocated in position (too far to one side, for example); perpendicularity alone wouldn't catch that, because location is a separate concern controlled by position tolerance, covered in the next lesson.

:::warning
Specifying only an orientation control on a feature that also has a real location requirement leaves that location requirement completely uncontrolled by GD&T. A perpendicularity callout with no accompanying position tolerance guarantees the feature's angle but says nothing at all about whether it's in the right place.
:::

## Self-Check Questions

**1. Why do orientation controls always require a datum reference, unlike form controls?**

<details>
<summary>Show Answer</summary>

Orientation is inherently a relationship between the controlled feature and a reference — it can't be evaluated on a single feature in isolation the way flatness or circularity can.
</details>

**2. What distinguishes perpendicularity, parallelism, and angularity from each other?**

<details>
<summary>Show Answer</summary>

Only the target angle relative to the datum: 90° for perpendicularity, 0° (parallel) for parallelism, and any other explicitly stated angle for angularity — otherwise they're the same underlying orientation control.
</details>

**3. How does the tolerance zone shape for an orientation control on an axis differ from one applied to a flat surface?**

<details>
<summary>Show Answer</summary>

Applied to a flat surface, the zone is two parallel planes. Applied to an axis (with a diameter symbol in the tolerance value), the zone is a cylinder the actual axis must fall within — the same diameter-symbol logic that applies to position tolerance.
</details>

**4. Why doesn't a perpendicularity callout on a hole guarantee the hole is in the correct location?**

<details>
<summary>Show Answer</summary>

Perpendicularity only constrains the hole's angle relative to the datum, not where along that angle it actually sits — location is a separate concern controlled by position tolerance.
</details>

**5. What problem occurs if a feature with a real location requirement is given only an orientation control and no position tolerance?**

<details>
<summary>Show Answer</summary>

The feature's location is left completely uncontrolled by GD&T — the orientation callout guarantees the correct angle but says nothing about whether the feature is actually in the right place.
</details>
