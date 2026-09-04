---
title: "Sub-Spindle Operations: Part Transfer and Back-Working"
module: "16-cam-turning"
lessonNumber: 11
description: "Complete both ends of a turned part in one continuous cycle by transferring it from the main spindle to a sub-spindle, without ever removing it from the machine."
objectives:
  - "Explain what a sub-spindle adds to a turning center"
  - "Describe the part transfer sequence between main and sub-spindle"
  - "Explain what back-working accomplishes once a part is transferred"
  - "Connect sub-spindle transfer to the re-fixturing accuracy principle covered elsewhere"
difficulty: "advanced"
duration: "45 minutes"
tags: ["cam", "turning", "mill-turn", "sub-spindle"]
---

## A Second Spindle on the Same Machine

A **sub-spindle** is a second spindle and chuck, built into the same turning center as the main spindle, capable of gripping a part independently. Its core purpose is enabling a part to be **transferred** from the main spindle to the sub-spindle mid-cycle, entirely under program control, without any operator intervention.

## The Transfer Sequence

A typical part transfer follows a coordinated sequence: with the front of the part already machined on the main spindle, the sub-spindle moves into position and grips the part — often on an already-turned OD or a specific feature machined for exactly this purpose — while the main spindle is still holding it. Once the sub-spindle's grip is confirmed, the main spindle releases, and the part is now held entirely by the sub-spindle, free for further machining from the opposite end.

:::key-concept
The moment of transfer — where both spindles briefly grip the part together before the main spindle releases — is the critical coordination point in the whole sequence. This is exactly the kind of shared, timing-critical moment the next lesson's multi-channel synchronization concepts exist to control precisely.
:::

## Back-Working

Once the part is secured on the sub-spindle, **back-working** machines the part's second end — the face and features that were, until the transfer, held inside the original chuck and completely inaccessible. This might include facing the part to final length, drilling or tapping a feature on that end, or parting off a small remaining connecting web, all without the part ever leaving the machine.

## Why This Matters: Avoiding a Separate Second Operation

Without a sub-spindle, machining both ends of a part typically requires a genuinely separate second operation — removing the part after the first side is complete, manually re-fixturing it (by hand, or in a second machine setup) to access the opposite end, and re-establishing its position from scratch. Sub-spindle transfer avoids this entirely, and in doing so avoids exactly the re-fixturing accuracy risk covered throughout this curriculum's workholding and GD&T modules: because the part is never actually released to an independent, manually re-established setup, the accuracy relationship between features machined on each end depends only on the transfer sequence's own precision, not on a separate manual re-indicating step.

:::pro-tip
Sub-spindle transfer's biggest practical benefit beyond accuracy is enabling genuinely unattended, complete-part production — a part can go from raw bar stock to a fully finished, both-ends-machined component in one continuous, lights-out cycle, without needing an operator to intervene between the front and back operations the way a conventional two-setup process would require.
:::

## Self-Check Questions

**1. What is a sub-spindle's core purpose on a turning center?**

<details>
<summary>Show Answer</summary>

Enabling a part to be transferred from the main spindle to the sub-spindle mid-cycle, entirely under program control, so both ends of the part can be machined without operator intervention.
</details>

**2. What happens during the critical moment of part transfer between spindles?**

<details>
<summary>Show Answer</summary>

The sub-spindle grips the part while the main spindle still holds it; once that grip is confirmed, the main spindle releases, leaving the part held entirely by the sub-spindle.
</details>

**3. What does back-working accomplish once a part is transferred to the sub-spindle?**

<details>
<summary>Show Answer</summary>

It machines the part's second end — features that were inaccessible while that end was held inside the original chuck — such as final facing, drilling, tapping, or parting off a remaining web.
</details>

**4. How does sub-spindle transfer avoid the re-fixturing accuracy risk covered elsewhere in this curriculum?**

<details>
<summary>Show Answer</summary>

The part is never released to an independent, manually re-established setup — its position relationship between both ends depends only on the transfer sequence's own precision, not on a separate manual re-indicating step.
</details>

**5. Beyond accuracy, what production advantage does sub-spindle transfer offer?**

<details>
<summary>Show Answer</summary>

It enables genuinely unattended, complete-part production — a part can be fully finished on both ends in one continuous cycle without an operator intervening between operations.
</details>
