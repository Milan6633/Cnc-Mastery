---
title: "3D Finishing: Pencil and Steep-and-Shallow Strategies"
module: "15-cam-milling"
lessonNumber: 12
description: "Clean up internal corners a general finishing pass can't fully reach with pencil milling, and combine two strategies matched to local surface steepness."
objectives:
  - "Explain what a pencil (trace) finishing toolpath specifically targets"
  - "Explain why no single finishing strategy performs well on both steep and shallow surface areas"
  - "Explain how a steep-and-shallow strategy combines two approaches at a defined threshold"
  - "Recognize pencil milling as a targeted cleanup pass rather than a general-surface strategy"
difficulty: "advanced"
duration: "45 minutes"
tags: ["cam", "fusion360", "mastercam", "3d-finishing", "pencil-milling", "steep-and-shallow"]
---

## Pencil (Trace) Milling: A Targeted Cleanup Pass

Where parallel and scallop finishing (covered in the previous lesson) are general-surface strategies applied across a whole area, **pencil milling** (also called trace finishing) targets something much more specific: the exact line where two surfaces meet at a concave (internal) transition — a valley or an internal corner.

General finishing strategies, limited by the finishing tool's own radius, often can't fully clean material out of a tight internal transition — the same tool-radius constraint on internal corners covered in the manual machining and CAD DFM lessons. A small ridge of uncut material can remain right along that transition line even after a general finishing pass has otherwise covered the whole surface. Pencil milling follows that exact line directly, specifically to clean up what the general finishing strategy left behind.

:::key-concept
Pencil milling isn't a substitute for parallel or scallop finishing — it's a targeted supplementary pass that runs after (or alongside) a general finishing strategy, addressing specifically the internal transition lines that general strategy's tool-radius limitation couldn't fully reach.
:::

## Why No Single Strategy Handles Both Steep and Shallow Well

A complex 3D part often has both **steep** (near-vertical) walls and **shallow** (near-flat) areas in the same geometry, and the finishing strategies covered so far don't perform equally well on both:

- **Z-level (waterline) style passes** work well on steep walls — closely spaced horizontal slices produce a good, consistent finish on a near-vertical surface — but perform poorly on shallow or flat areas, where horizontal slices barely change from one level to the next, leaving widely spaced, poorly finished passes.
- **Parallel or scallop passes** work well on shallow, flatter areas but perform poorly on steep, near-vertical walls, where a stepover measured in or near the XY plane doesn't translate into good surface coverage on a wall that's nearly parallel to the tool's travel direction.

## Steep-and-Shallow: Combining Both

A **steep-and-shallow** finishing strategy addresses this directly by combining two different approaches, matched to local surface slope, within a single operation: a Z-level-style approach applied specifically to the steep regions, and a parallel or scallop-style approach applied specifically to the shallow regions, blended together at a defined **steepness threshold** angle that determines which strategy applies where on the part.

:::pro-tip
Setting the steepness threshold appropriately for the actual part geometry matters — too aggressive a threshold applies the steep-region strategy to areas that would have finished better with the shallow strategy, or vice versa. Reviewing the resulting toolpath on a part with a genuine mix of steep and shallow regions, rather than accepting a default threshold blindly, is worth the extra setup time on a part where finish quality matters.
:::

## Putting the Finishing Strategies Together

A real, complex 3D finishing job often combines multiple strategies covered across this and the previous lesson: a steep-and-shallow (or separate parallel and Z-level) pass covering the general surface, followed by a pencil milling pass cleaning up internal transition lines the general strategy's tool radius couldn't fully reach — each strategy addressing the specific part of the problem it's actually suited to, rather than expecting one single toolpath to handle every surface condition on a complex part equally well.

## Self-Check Questions

**1. What specific feature does a pencil milling toolpath target, and why can't general finishing strategies fully clean it?**

<details>
<summary>Show Answer</summary>

It targets the exact line where two surfaces meet at a concave (internal) transition — general finishing strategies, limited by the finishing tool's own radius, can leave a small ridge of uncut material right along that line, the same tool-radius internal-corner constraint covered elsewhere in the curriculum.
</details>

**2. Why does a Z-level (waterline) style pass work well on steep walls but poorly on shallow, flat areas?**

<details>
<summary>Show Answer</summary>

On a steep wall, closely spaced horizontal slices produce good coverage; on a shallow or flat area, horizontal slices barely change from one level to the next, leaving widely spaced, poorly finished passes.
</details>

**3. Why does a parallel or scallop strategy struggle on a steep, near-vertical wall?**

<details>
<summary>Show Answer</summary>

Its stepover, measured in or near the XY plane, doesn't translate into good surface coverage on a wall that's nearly parallel to the tool's travel direction.
</details>

**4. How does a steep-and-shallow strategy combine two different finishing approaches?**

<details>
<summary>Show Answer</summary>

It applies a Z-level-style approach to steep regions and a parallel or scallop-style approach to shallow regions, blended together at a defined steepness threshold angle that determines which strategy applies where.
</details>

**5. In a complete 3D finishing plan, what role does pencil milling typically play relative to a general strategy like steep-and-shallow?**

<details>
<summary>Show Answer</summary>

It runs as a targeted supplementary pass, cleaning up internal transition lines the general strategy's tool radius couldn't fully reach — not as a replacement for the general strategy covering the overall surface.
</details>
