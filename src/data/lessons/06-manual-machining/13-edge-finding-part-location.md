---
title: "Edge Finding and Part Location"
module: "06-manual-machining"
lessonNumber: 13
description: "Establish a precise work zero from a part's edge with a wobble or electronic edge finder, or center the spindle over an existing bore with an indicator."
objectives:
  - "Use a wobble (eccentric) edge finder's kick to locate a true edge"
  - "Explain what an electronic edge finder detects differently from a wobble edge finder"
  - "Center the spindle over an existing bore using a dial test indicator"
  - "Explain why an offset must be applied after locating an edge with a wobble edge finder"
difficulty: "intermediate"
duration: "45 minutes"
tags: ["manual-machining", "milling", "edge-finding", "part-location"]
---

## Establishing Where the Part Actually Is

Before machining a feature at a specific position, the mill needs to know exactly where the part's reference edges or features actually sit relative to the spindle — not just where they were expected to be clamped. **Edge finding** locates that reference precisely, turning "the part is roughly here" into a known, usable position.

## The Wobble (Eccentric) Edge Finder

A wobble edge finder has a small cylindrical tip mounted slightly off-center from the tool's own rotational axis. Spun in the spindle at a moderate RPM and slowly brought into contact with a part's edge, it initially **wobbles** — orbiting visibly off-axis — because the tip is being pushed by contact with the edge. As the spindle is fed slightly further in, at the exact moment the tool's true centerline reaches the edge, the tip suddenly **kicks** — snapping into smooth, concentric rotation.

:::key-concept
The kick is the entire technique: it marks the one precise position where the edge finder's spindle centerline aligns with the part's actual edge. Everything about reading a wobble edge finder correctly comes down to recognizing that exact transition.
:::

That kick position is the reference point — zero the axis position (on a DRO or dial) there, then account for the edge finder's own tip geometry when moving to the true edge or to a target position beyond it, since the kick occurs with the tip actually touching the edge, not with the spindle centerline sitting exactly at the edge without any offset involved.

## The Electronic Edge Finder

An electronic edge finder works on contact-sensing rather than mechanical wobble: a light or audible signal activates at the instant the tip touches the part, with no need to interpret a wobble-to-kick transition by eye. This gives a clear, repeatable trigger point that doesn't depend on spindle speed or a trained eye watching for the exact kick moment, at the cost of needing its own battery and electronics rather than being a simple mechanical tool.

## Indicating a Bore's Center

Locating an existing hole's true center — to machine a further feature referenced from it, for example — uses the same swept-indicator technique covered for indicating round stock in a 4-jaw chuck, applied to positioning the spindle instead of positioning a workpiece:

1. Mount a dial test indicator in the spindle with its tip contacting the bore's inside wall.
2. Rotate the spindle by hand while watching the indicator reading through a full sweep.
3. Adjust the table's X and Y position — not the part's clamping — until the indicator reads consistently through the entire rotation, confirming the spindle is centered over the bore.

:::pro-tip
Sweep the indicator around the full bore, not just a quick check at two or four points. A bore that reads consistent at 0°, 90°, 180°, and 270° can still be off-center in a direction those four points don't happen to catch — a full, continuous sweep won't miss it.
:::

## Setting Part Zero

Once an edge (or two edges, for both X and Y) has been located, that position becomes the **part zero** the rest of the job's features are measured and cut from — the same locating-reference concept covered in the workholding module, just established here by direct measurement against the machine's own axes rather than by fixture geometry. Establishing this zero accurately, before any cutting begins, is what makes every dimension on the print translate correctly into actual machine positions.

## Self-Check Questions

**1. What does the "kick" on a wobble edge finder actually indicate?**

<details>
<summary>Show Answer</summary>

The exact moment the tool's true rotational centerline aligns with the part's actual edge — the tip snaps from visible off-axis wobble into smooth, concentric rotation at that precise position.
</details>

**2. How does an electronic edge finder detect an edge differently from a wobble edge finder?**

<details>
<summary>Show Answer</summary>

It uses contact sensing, activating a light or audible signal the instant the tip touches the part, rather than requiring the operator to visually interpret a wobble-to-kick transition.
</details>

**3. When indicating the spindle over an existing bore, what do you adjust to zero out the indicator reading — the workpiece clamping, or the table position?**

<details>
<summary>Show Answer</summary>

The table's X and Y position — the goal is centering the spindle over the bore, achieved by moving the table (and therefore the spindle's position relative to the part), not by re-clamping the part.
</details>

**4. Why is a full, continuous sweep better than checking an indicator reading at just four points around a bore?**

<details>
<summary>Show Answer</summary>

A bore can be off-center in a direction that four discrete points happen not to catch, even if all four readings look consistent — a full sweep can't miss an off-center condition the way a sparse check can.
</details>

**5. Why does using a wobble edge finder require applying an offset after zeroing at the kick position, rather than treating that position as the true edge directly?**

<details>
<summary>Show Answer</summary>

The kick occurs with the finder's tip physically touching the edge, not with the spindle centerline sitting exactly at the edge — the tip's own geometry has to be accounted for to translate that zeroed position into the true edge location.
</details>
