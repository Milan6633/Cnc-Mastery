---
title: "Bonus Tolerance"
module: "14-gdt"
lessonNumber: 6
description: "Calculate how much extra positional tolerance a feature actually earns as it departs from MMC, and why that extra tolerance is functionally real, not a loophole."
objectives:
  - "Calculate bonus tolerance from a feature's actual produced size and its MMC value"
  - "Explain why bonus tolerance reflects genuine mating clearance, not a relaxed inspection standard"
  - "Calculate the total allowable position tolerance including bonus tolerance"
  - "Explain what happens to bonus tolerance at LMC when a feature is toleranced at MMC"
difficulty: "advanced"
duration: "45 minutes"
tags: ["gdt", "bonus-tolerance", "mmc", "asme-y14.5"]
---

## Bonus Tolerance Is Earned, Not Given

**Bonus tolerance** is the additional geometric tolerance a feature is allowed beyond its stated tolerance value, earned automatically as the feature's actual produced size departs from the material condition (MMC or LMC) referenced in its feature control frame. It isn't a separate allowance a designer grants on top of the stated tolerance — it's a direct, calculated consequence of applying a material condition modifier, covered in the previous two lessons.

## Calculating Bonus Tolerance

Bonus tolerance equals the **difference between a feature's actual produced size and its stated MMC value**, for a feature toleranced at MMC:

:::key-concept
Bonus tolerance = |actual produced size − MMC size|. A hole toleranced with a position tolerance at MMC, produced exactly at its MMC (smallest) diameter, gets zero bonus — the full stated tolerance is all it has. The same hole produced larger (departing from MMC toward LMC) earns bonus tolerance equal to exactly how much larger it was actually made.
:::

For example: a hole with an MMC diameter of 10.0 mm and a stated position tolerance of ⌀0.2 mm at MMC, produced at an actual diameter of 10.15 mm, has departed from MMC by 0.15 mm — earning 0.15 mm of bonus tolerance. Its **total allowable position tolerance** for that specific part is 0.2 mm (stated) + 0.15 mm (bonus) = 0.35 mm.

## Why This Reflects Genuine Function, Not a Loophole

This isn't inspection leniency for its own sake — it reflects a real, physical fact about how the mating parts actually fit together. A hole produced larger than its MMC size has genuinely more clearance around whatever fastener or pin passes through it, so that extra clearance can legitimately absorb more position error while the assembly still goes together correctly. The bonus tolerance calculation is simply quantifying clearance that actually exists, not relaxing a standard arbitrarily.

:::pro-tip
Think of bonus tolerance as trading one kind of margin for another: a hole produced away from MMC has "spent" some of its size tolerance in a direction that happens to also buy back position tolerance, because the two are physically linked through how the assembly actually fits. Nothing is being given away for free — the total combined effect on the assembly's fit is what the calculation is protecting.
:::

## Total Tolerance at LMC

At the opposite extreme — a feature produced at its LMC size — the bonus tolerance reaches its **maximum**, equal to the full size tolerance range between MMC and LMC. This maximum combined tolerance (stated tolerance plus the full size-range bonus) is sometimes called the **virtual condition** in the opposite sense from MMC's own virtual condition — the largest possible combined effect the position and size variation can produce together, useful for verifying that even this extreme combination still allows the part to assemble or function correctly.

:::warning
Bonus tolerance only applies to the specific material condition actually referenced in the feature control frame — a position tolerance specified at MMC earns bonus tolerance calculated against the MMC value, not the LMC value, even though both are relevant limits of the feature's size range. Reading which material condition the bonus is calculated against, not just that a modifier is present, matters for getting the calculation right.
:::

## Self-Check Questions

**1. How is bonus tolerance calculated for a feature toleranced at MMC?**

<details>
<summary>Show Answer</summary>

As the difference between the feature's actual produced size and its stated MMC value — the further the actual size departs from MMC, the more bonus tolerance is earned.
</details>

**2. A hole has an MMC diameter of 8.0 mm, a stated position tolerance of ⌀0.15 mm at MMC, and is produced at 8.08 mm. What is its total allowable position tolerance?**

<details>
<summary>Show Answer</summary>

0.23 mm — the stated 0.15 mm plus 0.08 mm of bonus tolerance (the difference between the produced size, 8.08 mm, and the MMC size, 8.0 mm).
</details>

**3. Why does bonus tolerance reflect a genuine functional reality rather than a relaxed inspection standard?**

<details>
<summary>Show Answer</summary>

A hole produced larger than MMC genuinely has more physical clearance around a mating fastener or pin, so it can legitimately absorb more position error while the parts still assemble correctly — the calculation quantifies real, existing clearance.
</details>

**4. At what point does bonus tolerance reach its maximum value, for a feature toleranced at MMC?**

<details>
<summary>Show Answer</summary>

At LMC — the opposite extreme of the feature's size range — where the bonus equals the full size tolerance range between MMC and LMC.
</details>

**5. Why does it matter whether bonus tolerance is calculated against a feature's MMC value or its LMC value?**

<details>
<summary>Show Answer</summary>

Bonus tolerance applies only relative to whichever material condition is actually referenced in the feature control frame — calculating it against the wrong reference value gives an incorrect total allowable tolerance, even though both MMC and LMC are relevant limits of the feature's size range.
</details>
