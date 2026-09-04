---
title: "Rest Machining: Re-Machining with Smaller Tools"
module: "15-cam-milling"
lessonNumber: 13
description: "Send a smaller tool only where a larger roughing tool physically couldn't reach, rather than re-running an entire operation at the smaller tool's slower pace."
objectives:
  - "Explain what rest machining targets and why that material was left behind"
  - "Explain how CAM software identifies exactly where rest material remains"
  - "Explain the efficiency advantage of targeted rest machining over re-running a full operation"
  - "Connect rest machining to the tool-radius internal corner constraint covered elsewhere"
difficulty: "advanced"
duration: "40 minutes"
tags: ["cam", "fusion360", "mastercam", "rest-machining"]
---

## Why Material Gets Left Behind

A larger roughing tool clears material efficiently, but its own radius sets a hard limit on how tight a corner or how narrow a slot it can actually reach — the same tool-radius constraint on internal corners covered in the manual machining module and the CAD DFM lessons. After roughing (or even after an initial finishing pass) with that larger tool, small pockets of uncut material genuinely remain in every location the tool's radius simply couldn't access: tight internal corners, small fillets, and narrow features smaller than the tool could enter at all.

## What Rest Machining Actually Does

**Rest machining** (also called re-machining or leftover-stock machining) addresses this leftover material directly: a smaller tool is brought in specifically to clean up **only** the areas the larger tool couldn't reach, rather than re-running an entire operation across the whole part with the smaller, slower tool.

:::key-concept
Rest machining is the CAM-programmed answer to exactly the same problem the CAD DFM lesson on internal corner radii raised: a tool's radius limits what it can cut. Rather than accepting that limitation for the whole part or forcing an unnecessarily small primary roughing tool everywhere, rest machining uses a small tool only in the specific, limited areas where it's actually needed.
:::

## How CAM Identifies Rest Material

CAM software calculates this automatically by comparing the **actual remaining stock model** — updated after each prior operation to reflect what material genuinely remains, based on the tool geometry and toolpath actually used — against the **target final geometry**. Wherever a meaningful difference remains between the two, that's rest material, and the software generates a toolpath for the smaller tool that targets specifically those regions rather than sweeping across the entire part.

## The Efficiency Advantage

Running an entire operation with a smaller tool across the whole part, just to reach the handful of tight corners a larger tool missed, wastes enormous amounts of cycle time on already-finished areas the smaller tool doesn't need to touch at all. Targeted rest machining — cutting only where leftover material genuinely remains — captures the accuracy benefit of the smaller tool exactly where it's needed, without paying the smaller tool's inherently slower cutting speed and lower rigidity everywhere else on the part.

:::warning
Skipping rest machining and simply accepting a larger tool's resulting corner radius everywhere isn't automatically wrong — if the design tolerates that radius (or was designed around it, per the DFM principle covered in the CAD module), rest machining may be unnecessary. Rest machining is a tool to reach a genuinely required tighter feature efficiently, not a step to apply reflexively on every job regardless of whether the larger tool's result was already acceptable.
:::

## Self-Check Questions

**1. Why does material get left behind after roughing with a larger tool, even when the roughing operation runs correctly?**

<details>
<summary>Show Answer</summary>

The tool's own radius limits how tight a corner or how narrow a feature it can physically reach — the same tool-radius constraint that governs internal corner radii in milling generally.
</details>

**2. How does CAM software identify exactly where rest material remains?**

<details>
<summary>Show Answer</summary>

By comparing the actual remaining stock model — updated based on the tool geometry and toolpath actually used in prior operations — against the target final geometry, identifying regions where a meaningful difference remains.
</details>

**3. Why is targeted rest machining more efficient than re-running an entire operation with a smaller tool?**

<details>
<summary>Show Answer</summary>

It cuts only in the specific areas where leftover material actually remains, avoiding the smaller tool's slower cutting speed and reduced rigidity across already-finished areas that don't need it.
</details>

**4. When might rest machining not actually be necessary for a given job?**

<details>
<summary>Show Answer</summary>

If the design tolerates (or was designed around, per DFM principles) the corner radius the larger primary tool already produces, there's no functional need to reach a tighter feature that rest machining would otherwise provide.
</details>

**5. How does rest machining relate to the internal corner radius DFM principle covered in the CAD module?**

<details>
<summary>Show Answer</summary>

It's the manufacturing-side response to that same constraint — rather than accepting a larger tool's radius everywhere or forcing an unnecessarily small primary tool across the whole part, rest machining applies a smaller tool only where a tighter feature is actually required.
</details>
