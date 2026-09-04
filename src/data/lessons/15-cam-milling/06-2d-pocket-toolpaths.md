---
title: "2D Pocket Toolpaths"
module: "15-cam-milling"
lessonNumber: 6
description: "Automate the rough-then-finish pocket strategy covered in manual machining into a CAM pocket toolpath, with the same tool-radius corner constraint carried over."
objectives:
  - "Explain what a 2D pocket toolpath automates from manual pocket milling technique"
  - "Compare common pocket clearing patterns (zig-zag, spiral, and hybrid)"
  - "Explain why a pocket toolpath's internal corner radius is still bounded by tool diameter"
  - "Configure stock to leave for a roughing pocket operation feeding a finishing operation"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cam", "fusion360", "mastercam", "pocket-milling"]
---

## Automating the Rough-Then-Finish Pocket Strategy

A **2D pocket** toolpath automates exactly the strategy covered for manual pocket milling in the manual machining module: clear an enclosed area's bulk material with a controlled engagement pattern, leaving a consistent allowance for a separate finishing pass on the walls and floor. What CAM adds is calculating that clearing pattern automatically and consistently, rather than relying on the operator to plan and execute the stepover pattern by hand.

## Clearing Patterns

CAM pocket toolpaths typically offer several internal clearing patterns:

- **Zig-zag (parallel)** — the tool sweeps back and forth in parallel passes across the pocket, generally fast but alternating between climb and conventional cutting direction with every pass.
- **Spiral** — the tool works inward (or outward) in a continuous spiral, maintaining a single, consistent cutting direction throughout, avoiding the direction alternation a zig-zag pattern produces.
- **Hybrid/adaptive patterns** — some CAM software offers strategies that blend these approaches, or apply the adaptive clearing logic covered in the next lesson specifically to pocket geometry, further controlling tool engagement throughout the clearing pass.

:::key-concept
The clearing pattern choice affects direction consistency and tool engagement variation throughout the pocket, but every pattern is still solving the same underlying rough-then-finish problem covered in the manual machining module — clear bulk material efficiently while leaving a controlled allowance for finishing.
:::

## Internal Corners Are Still Bounded by Tool Diameter

A pocket toolpath's internal corners carry exactly the same geometric constraint covered in both the manual machining module's pocket milling lesson and the CAD module's DFM lesson on internal corner radii: a rotating tool cannot cut a sharper internal corner than its own radius, regardless of how sophisticated the CAM software's clearing pattern is. CAM doesn't remove this physical constraint — it just calculates the clearing motion efficiently within it.

:::warning
No CAM toolpath setting can produce a pocket internal corner sharper than the selected tool's radius allows. If a design calls for a tighter internal corner than any practical tool diameter can cut, that mismatch has to be resolved at the design stage (a smaller tool, or a planned secondary process) — it isn't something a cleverer pocket toolpath strategy can solve.
:::

## Stock to Leave for Roughing

A roughing pocket operation's **stock to leave** setting defines the allowance left on the walls and floor for the finishing operation that follows — the same allowance principle covered for contour toolpaths in the previous lesson, applied here to an enclosed pocket's walls and floor simultaneously. Setting this allowance appropriately (not so much that finishing has to remove excessive material, not so little that roughing risks leaving inconsistent stock for finishing to clean up unevenly) is a direct parallel to the reaming allowance concept covered in the precision measurement and manual machining modules.

## Self-Check Questions

**1. What does a 2D pocket toolpath automate from the manual pocket milling technique covered in the manual machining module?**

<details>
<summary>Show Answer</summary>

The rough-then-finish clearing strategy — removing bulk material with a controlled engagement pattern, then leaving a consistent allowance for a separate finishing pass — calculated automatically rather than executed by hand.
</details>

**2. What is the main tradeoff of a zig-zag (parallel) clearing pattern compared to a spiral pattern?**

<details>
<summary>Show Answer</summary>

Zig-zag alternates between climb and conventional cutting direction with every pass, while a spiral pattern maintains a single, consistent cutting direction throughout — though zig-zag is often faster to calculate and machine for simple geometry.
</details>

**3. Why can't a more sophisticated CAM clearing pattern cut a sharper internal pocket corner than the tool's own radius?**

<details>
<summary>Show Answer</summary>

The physical constraint is geometric, not a limitation of the clearing algorithm — a rotating tool simply can't cut a corner sharper than its own radius, regardless of how the toolpath motion is calculated.
</details>

**4. What does the stock to leave setting on a roughing pocket operation actually control?**

<details>
<summary>Show Answer</summary>

The allowance left on the walls and floor for a subsequent finishing operation to remove, directly paralleling the reaming allowance principle covered elsewhere in the curriculum.
</details>

**5. If a print requires a tighter pocket internal corner radius than any practical end mill can cut, what actually resolves that problem?**

<details>
<summary>Show Answer</summary>

A design-stage decision — either accepting the smallest practical tool's resulting radius or planning a secondary process — not a CAM toolpath setting, since the constraint is physical rather than a software limitation.
</details>
