---
title: "Material Condition Modifiers: MMC and LMC"
module: "14-gdt"
lessonNumber: 4
description: "Understand MMC and LMC as the worst-case extremes of a feature's size range, and what applying one to a tolerance actually changes."
objectives:
  - "Define Maximum Material Condition and Least Material Condition"
  - "Identify MMC and LMC for both an external feature (shaft) and internal feature (hole)"
  - "Explain what applying an MMC modifier to a position tolerance actually means functionally"
  - "Explain why MMC is the more commonly applied modifier of the two"
difficulty: "advanced"
duration: "45 minutes"
tags: ["gdt", "mmc", "lmc", "material-condition", "asme-y14.5"]
---

## Two Worst-Case Extremes of a Feature's Size

Every toleranced feature of size — a hole, a shaft, a slot — has an allowed size range between its upper and lower limit. **Maximum Material Condition (MMC)** and **Least Material Condition (LMC)** name the two extremes of that range, defined by how much material the feature contains at each end.

## Maximum Material Condition (MMC)

MMC is the condition where a feature contains the **maximum amount of material** — which means different things depending on whether the feature is internal or external:

- For a **hole** (internal feature), MMC is the **smallest** allowed diameter — the least material has been removed, so the most material remains around the hole.
- For a **shaft** (external feature), MMC is the **largest** allowed diameter — the most material makes up the shaft itself.

:::key-concept
MMC always means "the most material," but that translates to opposite size extremes depending on whether the feature is a hole or a shaft — smallest for a hole, largest for a shaft. Getting this backward is one of the most common GD&T mistakes, precisely because "maximum" intuitively suggests "biggest" regardless of feature type.
:::

## Least Material Condition (LMC)

LMC is the opposite extreme — the condition where a feature contains the **least amount of material**:

- For a **hole**, LMC is the **largest** allowed diameter — the most material has been removed.
- For a **shaft**, LMC is the **smallest** allowed diameter — the least material makes up the shaft.

## What an MMC Modifier Actually Means

Applying an MMC modifier (the circled M) to a position tolerance means the stated tolerance value applies specifically **when the feature is produced at MMC** — and, critically, that the tolerance is allowed to grow larger (bonus tolerance, covered in the next lesson) as the feature departs from MMC toward LMC. This reflects genuine mating-part function: a hole produced larger than its MMC size has more clearance around a mating fastener or pin than a hole at MMC does, so its position can be allowed to drift further off true position while still assembling correctly — the mating parts still fit even with a looser combination of size and position error, as long as the total doesn't exceed what the geometry allows.

## Why MMC Is Applied More Often Than LMC

MMC is by far the more commonly applied modifier because it directly reflects the most common functional concern: **assembly**. Most toleranced features of size exist to receive or be received by a mating part — a bolt through a hole, a pin into a bore — and MMC governs the worst-case condition for that kind of fit (the tightest possible combination of size and position). LMC is reserved for the less common situations where the *minimum* remaining material — wall thickness around a hole, for example — is the actual functional concern, rather than assembly clearance.

:::pro-tip
When deciding whether MMC or LMC applies to a design requirement, ask what the actual functional concern is: if it's whether two parts can be assembled together, MMC is almost always the relevant condition. If it's whether enough material remains around a feature to avoid a wall breaking through or a feature being too weak, LMC is the more relevant one.
:::

## Self-Check Questions

**1. For a hole, is MMC the smallest or the largest allowed diameter, and why?**

<details>
<summary>Show Answer</summary>

The smallest — MMC means "the most material," and for a hole, the least material has been removed (leaving the most material remaining) when the hole is at its smallest allowed diameter.
</details>

**2. For a shaft, is MMC the smallest or the largest allowed diameter, and why?**

<details>
<summary>Show Answer</summary>

The largest — for an external feature like a shaft, the most material makes up the part itself at the largest allowed diameter.
</details>

**3. What does applying an MMC modifier to a position tolerance allow to happen as the feature departs from MMC?**

<details>
<summary>Show Answer</summary>

The stated position tolerance is allowed to grow larger (bonus tolerance) as the feature's actual produced size departs from MMC toward LMC, reflecting the additional clearance available as the feature moves away from its worst-case mating condition.
</details>

**4. Why is MMC applied far more often than LMC in practice?**

<details>
<summary>Show Answer</summary>

MMC directly addresses the most common functional concern — assembly fit between mating parts — while LMC addresses the less common concern of minimum remaining material, such as wall thickness.
</details>

**5. A designer's concern is whether enough wall thickness remains around a hole after machining. Which material condition modifier is relevant, MMC or LMC?**

<details>
<summary>Show Answer</summary>

LMC — the largest hole diameter (least material) is the worst case for remaining wall thickness, making LMC the functionally relevant condition for that specific concern.
</details>
