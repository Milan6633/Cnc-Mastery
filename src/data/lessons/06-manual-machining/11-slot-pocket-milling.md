---
title: "Slot Milling and Pocket Milling"
module: "06-manual-machining"
lessonNumber: 11
description: "Cut a slot to width without overloading the tool, and rough and finish an enclosed pocket without leaving an inaccurate wall or floor."
objectives:
  - "Explain why full-width slotting loads a tool differently than side (peripheral) milling"
  - "Describe a basic rough-then-finish strategy for a pocket"
  - "Explain why a milled internal corner naturally carries a radius"
  - "Apply controlled depth stepdowns rather than plunging to full depth in one pass"
difficulty: "intermediate"
duration: "45 minutes"
tags: ["manual-machining", "milling", "slot-milling", "pocket-milling"]
---

## Slot Milling

Cutting a slot to width with an end mill matched to that exact width engages the tool's **full diameter** in the cut simultaneously — every flute is cutting at once, generating more combined force and heat than a partial-width side cut of the same depth. This full engagement also means chip evacuation is harder, since the slot itself confines the space chips need to clear from.

- Take shallower depth-of-cut passes than an equivalent open-side cut would need, since full-width engagement already loads the tool more heavily at any given depth.
- Chip clearance and cutting fluid matter more in a full slot than in an open cut, precisely because the slot's walls confine the chip's escape path.
- An alternative to a matching-diameter end mill is roughing the slot slightly narrow with a smaller tool, then widening to final width — trading a slightly slower process for reduced load on any single tool.

:::key-concept
Full-width slotting isn't just "the same cut, just wider" — engaging the tool's entire diameter at once fundamentally changes the load and chip-clearance situation compared to a partial-width side cut, and cutting parameters should account for that rather than simply matching an open-cut feed and speed.
:::

## Pocket Milling

A **pocket** is an enclosed, internal area machined to a specified depth, with its own walls and floor. Producing an accurate pocket is generally a two-stage process:

1. **Rough** the bulk of the material out first, typically working in a spiral or zig-zag stepover pattern that keeps radial engagement below full width at any point, leaving a small, consistent amount of material on the walls and floor for the finishing pass.
2. **Finish** the walls and floor as separate, dedicated passes at light depth of cut, giving the accurate dimension and surface finish the print requires — the same rough-then-finish logic covered for lathe turning, applied here to an enclosed area instead of an open diameter.

## Internal Corners and Tool Radius

A rotating round tool physically cannot cut a sharp, zero-radius internal corner — wherever a pocket's wall meets another wall at an internal corner, the tool leaves a fillet radius equal to its own radius. A smaller-diameter tool leaves a smaller corner radius, but even the smallest practical tool still leaves some radius unless a secondary process (filing, or a different process entirely) is used to true up the corner afterward.

:::warning
If a print calls out a sharp internal corner with a radius tighter than any practical end mill diameter allows, that detail needs to be resolved before machining — either by using the smallest tool that still gives adequate rigidity and accepting its resulting radius, or by planning a secondary hand-finishing step. Discovering this mismatch mid-job wastes machine time solving a problem that should have been caught reading the print.
:::

## Depth Stepdowns

Never plunge or cut a pocket or slot to full depth in a single pass, particularly with anything less than a very rigid setup. Take controlled depth increments, stepping down gradually — this keeps cutting forces manageable, gives chips somewhere to clear on each pass rather than packing deeper and deeper, and limits how much material is at risk if a problem develops partway through.

## Self-Check Questions

**1. Why does full-width slotting generate more combined cutting force and heat than an open-side cut of the same depth?**

<details>
<summary>Show Answer</summary>

Full-width slotting engages the tool's entire diameter — every flute — simultaneously, rather than only a portion of the tool's circumference the way a partial-width side cut does.
</details>

**2. What is the general two-stage strategy for machining an accurate pocket?**

<details>
<summary>Show Answer</summary>

Rough the bulk of material out first with a stepover pattern that keeps radial engagement below full width, leaving a small consistent allowance, then take separate, light finishing passes on the walls and floor for final dimension and finish.
</details>

**3. Why does a milled internal pocket corner always carry some radius rather than being perfectly sharp?**

<details>
<summary>Show Answer</summary>

A rotating round tool can't physically cut a zero-radius internal corner — it always leaves a fillet equal to its own radius, however small a tool is used.
</details>

**4. Why is it important to catch a print's sharp-internal-corner requirement before starting to machine the pocket?**

<details>
<summary>Show Answer</summary>

A round tool can't produce that geometry directly, so the mismatch needs to be resolved with tool selection or a planned secondary finishing step before cutting — discovering it mid-job wastes machine time.
</details>

**5. Why should a pocket or slot be cut with controlled depth stepdowns instead of plunging to full depth in one pass?**

<details>
<summary>Show Answer</summary>

Stepping down keeps cutting forces manageable, gives chips room to clear on each pass instead of packing progressively deeper, and limits how much is at risk if something goes wrong partway through the cut.
</details>
