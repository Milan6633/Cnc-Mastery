---
title: "DFM: Internal Corner Radii and Tool Access"
module: "13-cad-manufacturing"
lessonNumber: 15
description: "Design internal corners a real rotating tool can actually cut, instead of a sharp corner that only exists in the CAD model."
objectives:
  - "Explain why a CAD model can represent geometry a cutting tool can't physically produce"
  - "Specify an internal corner radius that matches a practical, rigid tool diameter"
  - "Explain the tradeoff between a smaller tool radius and tool rigidity/cost"
  - "Recognize when a sharp internal corner requires a secondary process instead of tool selection alone"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cad", "dfm", "design-for-manufacturability", "internal-corners"]
---

## The Gap Between CAD Geometry and Cuttable Geometry

CAD software will happily let a designer sketch a perfectly sharp, zero-radius internal corner — the software has no concept of what a rotating cutting tool can or can't physically produce. This is the central lesson of design for manufacturability (DFM): **a model being geometrically valid in CAD is not the same as that geometry being manufacturable** on the actual machines that will cut it, and a sharp internal corner is one of the clearest, most common examples.

This connects directly to the pocket milling lesson covered in the manual machining module: a rotating round end mill physically cannot cut a zero-radius internal corner. Whatever corner radius the tool has, that's the smallest radius the resulting internal corner can have — no amount of programming cleverness changes that basic geometric fact.

:::key-concept
Every internal corner in a milled part carries a radius equal to (or larger than) the radius of whatever tool cut it. Designing a part means designing around that constraint deliberately, not discovering it as a surprise once the part reaches the machine shop.
:::

## Specifying a Practical Corner Radius

When a design has flexibility in the internal corner radius — which is most of the time, since very few functional requirements genuinely demand a mathematically sharp corner — specify a radius that matches a **practical, commonly available tool diameter** rather than an arbitrary small value. A corner radius of 3 mm, matching a common 6 mm diameter end mill, is a far easier and cheaper machining request than a corner radius of 0.5 mm, which forces a much smaller, more fragile tool.

## The Small-Tool Tradeoff

Smaller end mills aren't just more expensive — they're **less rigid**, deflect more under cutting force, run at higher RPM for the same cutting speed, and are more prone to breaking, especially at any real depth of cut. A design that specifies an unnecessarily tight internal corner radius forces the machinist into this tradeoff for no functional benefit, slowing the job and increasing tool cost and breakage risk.

:::warning
A tiny internal corner radius specified without a genuine functional reason doesn't just cost more to machine — it can make a feature genuinely impractical to cut reliably, forcing either a much slower feed rate to protect a fragile small tool, or a redesign after the part reaches the shop floor. Specify the largest corner radius the design can actually tolerate.
:::

## When Sharp Corners Are Genuinely Required

Some designs do have a real functional requirement for a sharp (or nearly sharp) internal corner — a mating part with its own sharp external corner, for example. In these cases, the corner isn't achieved by tool selection alone; it requires a secondary process, such as hand-finishing with a file, EDM (electrical discharge machining, which isn't limited by a rotating tool's geometry the way milling is), or broaching. Identifying this requirement during design — rather than discovering it once the part is already on the machine — lets that secondary process be planned and costed in from the start.

## Self-Check Questions

**1. Why can CAD software represent an internal corner geometry that a milling tool physically cannot produce?**

<details>
<summary>Show Answer</summary>

CAD geometry is purely mathematical and has no inherent concept of what a rotating cutting tool can physically cut — geometric validity in the model doesn't guarantee manufacturability.
</details>

**2. What sets the minimum possible radius of a milled internal corner?**

<details>
<summary>Show Answer</summary>

The radius of whatever tool cuts it — a rotating round end mill can't produce an internal corner smaller than its own radius, regardless of programming.
</details>

**3. Why is a corner radius matched to a common tool diameter (like 3 mm for a 6 mm end mill) preferable to an arbitrary small value?**

<details>
<summary>Show Answer</summary>

It's a far easier, cheaper, and more reliable machining request, since it doesn't force a smaller, more fragile, and more expensive tool for no functional benefit.
</details>

**4. What tradeoffs come with using a smaller-diameter end mill to achieve a tighter corner radius?**

<details>
<summary>Show Answer</summary>

Smaller tools are less rigid, deflect more under cutting force, run at higher RPM for the same cutting speed, and are more prone to breaking — all increasing job time, cost, and risk.
</details>

**5. When a design genuinely requires a sharp internal corner, what has to happen beyond selecting a tool?**

<details>
<summary>Show Answer</summary>

A secondary process — hand-finishing, EDM, or broaching — has to be planned and costed in, since tool selection alone can't produce a corner sharper than the cutting tool's own radius.
</details>
