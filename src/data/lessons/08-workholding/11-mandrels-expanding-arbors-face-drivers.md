---
title: "Mandrels, Expanding Arbors, and Face Drivers"
module: "08-workholding"
lessonNumber: 11
description: "Turn an OD true to an existing bore with mandrels and expanding arbors, or drive a part by its face when the OD must stay fully accessible."
objectives:
  - "Explain why a mandrel is used when a part's OD must be concentric to its bore"
  - "Compare a solid taper mandrel to an expanding arbor"
  - "Explain how a face driver transmits rotation without clamping the OD"
  - "Choose the right device based on which feature — bore or OD — is the reference"
difficulty: "intermediate"
duration: "50 minutes"
tags: ["workholding", "mandrels", "face-drivers", "turning"]
---

## When the Bore Is the Reference

Every workholding method covered so far in this module locates and grips a part by its outside diameter or an external face. Some parts — bushings, gears, pulleys — need the opposite: the OD must be turned concentric to a bore that's *already been finished*. Gripping such a part by its OD in a chuck or collet references the wrong feature entirely; whatever runout exists between the chuck's grip and the true bore axis shows up directly as OD-to-bore concentricity error in the finished part.

:::key-concept
When a drawing calls out OD-to-bore concentricity, the workholding must reference the bore itself, not the OD. A chuck or collet gripping the OD only guarantees the OD is round about the *chuck's* axis — not that it's concentric to the part's own bore.
:::

## Mandrels

A **mandrel** is a shaft with a very slight, controlled taper (or in some designs, a step) that a pre-bored part is press-fit onto. Once mounted, the part's OD can be turned true to its own bore, because the part is now rotating on an axis defined by that bore rather than by an external clamp. This is the standard method whenever bore-to-OD concentricity is the controlling requirement.

The press fit that makes a solid taper mandrel accurate is also its limitation: mounting and removing the part takes real force and time, and a solid mandrel is sized to one specific bore diameter (with only a very narrow range of acceptable variation).

## Expanding Arbors

An **expanding arbor** (or expanding mandrel) solves the mounting-force problem: a segmented sleeve, or a bushed sleeve, sits on a tapered core and expands radially outward — via a draw-nut or taper action — to grip the bore from the inside. Because it expands to meet the bore rather than requiring the bore to be pressed onto it, the part loads and unloads with far less force than a solid mandrel, and a single expanding arbor can typically accommodate a small range of bore diameters rather than just one exact size.

This makes expanding arbors well suited to repeat production of bored parts, where fast, low-force load/unload matters as much as the bore-referenced accuracy.

## Face Drivers

Where mandrels and arbors reference a part's bore, a **face driver** takes the opposite approach: spring-loaded pins or teeth in the headstock center bite into the *face* of the workpiece, transmitting spindle rotation without clamping the OD at all. The tailstock still supports the part with a live center, exactly as in standard between-centers work — the face driver simply replaces the lathe dog as the drive method.

This matters most for long shafts where the entire OD, along the full length, needs to be accessible to the tool in one pass — a chuck or a dog anywhere along that length would be in the way. A face driver needs a usable, reasonably flat face to bite into, so it isn't an option for every part shape.

:::pro-tip
Choosing between these three comes down to one question: what feature is the reference, and what does the tool need to reach? Bore-referenced accuracy → mandrel or expanding arbor. Full-length OD access with no chuck or dog in the way → face driver and centers.
:::

## Self-Check Questions

**1. Why is gripping a part's OD in a chuck the wrong workholding choice when the drawing calls out OD-to-bore concentricity?**

<details>
<summary>Show Answer</summary>

A chuck gripping the OD only guarantees the OD is round about the chuck's own axis, not that it's concentric to the part's own bore — the wrong feature is being referenced.
</details>

**2. What limitation does a solid taper mandrel have that an expanding arbor solves?**

<details>
<summary>Show Answer</summary>

A solid mandrel requires a press fit, needing real force and time to mount and remove, and fits only one specific bore size. An expanding arbor expands to grip the bore instead, loading and unloading with far less force and accommodating a small range of bore diameters.
</details>

**3. What does a face driver grip, and what does it leave completely free?**

<details>
<summary>Show Answer</summary>

It grips the face of the workpiece with spring-loaded pins or teeth, leaving the entire outside diameter free and accessible along the part's whole length.
</details>

**4. What still supports the tailstock end of a part being turned with a face driver?**

<details>
<summary>Show Answer</summary>

A live center, exactly as in standard between-centers work — the face driver replaces the lathe dog as the drive method, not the tailstock support.
</details>

**5. A long shaft needs its full OD machined in one pass with nothing obstructing any point along its length. Which workholding method fits, and why?**

<details>
<summary>Show Answer</summary>

A face driver with centers — it drives the part from its end face and supports the other end with a live center, leaving the entire OD clear with no chuck or dog anywhere along the length.
</details>
