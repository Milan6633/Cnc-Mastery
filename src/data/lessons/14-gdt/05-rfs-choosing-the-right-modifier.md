---
title: "RFS and Choosing the Right Modifier"
module: "14-gdt"
lessonNumber: 5
description: "Understand RFS as GD&T's strict default — no bonus tolerance regardless of produced size — and know when to specify it versus MMC or LMC."
objectives:
  - "Define Regardless of Feature Size (RFS)"
  - "Explain why RFS is the implied default when no modifier is specified"
  - "Compare RFS, MMC, and LMC and state when each is appropriate"
  - "Explain the inspection consequence of choosing RFS over MMC"
difficulty: "advanced"
duration: "40 minutes"
tags: ["gdt", "rfs", "material-condition", "asme-y14.5"]
---

## RFS: No Bonus, Regardless of Size

**Regardless of Feature Size (RFS)** means exactly what it says: the stated tolerance applies at its stated value **no matter what size the feature is actually produced at**, anywhere within its allowed size tolerance. Unlike MMC or LMC, RFS grants no bonus tolerance as the feature's produced size departs from any particular condition — the tolerance is fixed and strict, regardless of size.

## RFS as the Implied Default

Under the current ASME Y14.5 standard, RFS is the **implied default** for a geometric tolerance whenever no material condition modifier (MMC or LMC) is explicitly shown in the feature control frame. This is a meaningful convention to know: the *absence* of a circled M or L symbol is itself a specific, deliberate statement — it means RFS applies, not that the material condition simply wasn't considered.

:::key-concept
Silence in a feature control frame is not the same as ambiguity. No modifier shown means RFS applies, by the standard's own default rule — reading a feature control frame correctly means recognizing that absence as information, not as an omission to question.
:::

(Older prints, drafted to earlier versions of the standard, sometimes show an explicit circled S for RFS. Under the current standard, RFS is implied rather than explicitly symbolized, so its absence from a modern print's frame is expected, not an error.)

## Choosing Between RFS, MMC, and LMC

- **RFS** is appropriate when the geometric relationship genuinely must hold regardless of the feature's actual produced size — commonly for features where size and the geometric control (like orientation or a tight positional relationship) are functionally independent concerns that shouldn't be allowed to trade off against each other.
- **MMC** is appropriate when the functional concern is assembly — allowing extra positional or orientation tolerance as a feature departs from its worst-case mating condition reflects a genuine, real increase in available clearance.
- **LMC** is appropriate when the functional concern is minimum remaining material, allowing extra tolerance as the feature departs from its condition of least remaining material.

:::warning
Specifying RFS when the actual functional concern is assembly clearance denies the design a legitimate bonus tolerance that MMC would have granted — potentially rejecting parts that would have assembled and functioned perfectly well, simply because the tolerance was specified more strictly than the function actually required. Choosing RFS is a deliberate decision with a real cost, not a safe default to fall back on without considering the design's actual needs.
:::

## The Inspection Consequence

RFS is generally **harder and more expensive to inspect** than MMC, because RFS requires establishing the feature's true axis or center plane independent of its size — often requiring a CMM or a variable, size-independent gauging setup — while an MMC-toleranced feature can, in principle, be checked with a fixed functional gauge (covered in a later lesson) sized to the MMC condition, since the worst-case combination of size and position is exactly what that gauge is built to check in one simple pass/fail step.

:::pro-tip
When two design approaches would both satisfy a part's actual functional requirement, and one allows an MMC modifier while the other requires RFS, the MMC option is usually both more manufacturable (via bonus tolerance) and cheaper to inspect (via functional gauging) — worth genuinely considering during design, not just applied automatically wherever the standard happens to allow it.
:::

## Self-Check Questions

**1. What does Regardless of Feature Size (RFS) mean for how a tolerance applies across a feature's size range?**

<details>
<summary>Show Answer</summary>

The stated tolerance applies at its fixed, stated value no matter what size the feature is actually produced at within its allowed range — no bonus tolerance is granted as size varies.
</details>

**2. What does the absence of a material condition modifier symbol in a feature control frame mean under the current standard?**

<details>
<summary>Show Answer</summary>

RFS applies by default — the absence of a circled M or L is itself a deliberate, standardized statement that RFS is in effect, not an indication the material condition wasn't considered.
</details>

**3. Why can specifying RFS instead of MMC have a real functional cost?**

<details>
<summary>Show Answer</summary>

RFS denies the design a legitimate bonus tolerance that MMC would grant as the feature departs from its worst-case mating condition, potentially rejecting parts that would have assembled and functioned correctly.
</details>

**4. Why is an RFS-toleranced feature generally harder to inspect than an MMC-toleranced one?**

<details>
<summary>Show Answer</summary>

RFS requires establishing the feature's true axis or center plane independent of its size, typically needing a CMM or variable gauging, while an MMC-toleranced feature can often be checked with a simpler, fixed functional gauge sized to the MMC condition.
</details>

**5. Under what circumstance is RFS actually the appropriate modifier to specify, rather than MMC or LMC?**

<details>
<summary>Show Answer</summary>

When the geometric relationship genuinely must hold regardless of the feature's produced size — when size and the geometric control are functionally independent concerns that shouldn't be allowed to trade off against each other.
</details>
