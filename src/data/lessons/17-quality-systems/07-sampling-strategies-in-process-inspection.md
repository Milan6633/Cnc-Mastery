---
title: "Sampling Strategies for In-Process Inspection"
module: "17-quality-systems"
lessonNumber: 7
description: "Match inspection sampling frequency to a process's actual demonstrated capability and a characteristic's real consequence of failure, and group samples so they actually reveal a real shift."
objectives:
  - "Compare 100% inspection to sampling inspection and when each is appropriate"
  - "Explain what a risk-based sampling plan actually weighs"
  - "Explain rational subgrouping and why poor subgrouping can mask a real process shift"
  - "Connect sampling strategy to the process capability concepts covered earlier in this module"
difficulty: "advanced"
duration: "40 minutes"
tags: ["quality", "spc", "sampling", "inspection-strategy"]
---

## 100% Inspection vs. Sampling

**100% inspection** checks every single part produced — the highest possible confidence, at the highest possible time and cost, sometimes genuinely required for a characteristic where the consequence of a single failure is severe enough that any missed defect is unacceptable. **Sampling** inspection checks a defined subset of parts — far more efficient, relying on statistical confidence that a well-designed sample reasonably represents the whole population's actual quality.

## Risk-Based Sampling Plans

A sound sampling plan isn't arbitrary — it weighs two factors together:

- **The process's actual demonstrated capability** — a process with a strong, well-established Cpk (covered earlier in this module) and a stable history has already shown it reliably produces conforming parts, supporting a lighter sampling frequency than a newer or less consistently capable process would warrant.
- **The severity of a potential defect** — a safety-critical characteristic, or one whose failure would have serious consequences, warrants more frequent sampling (or outright 100% inspection) regardless of how capable the process has historically been, since the cost of missing even a rare defect is too high to accept.

:::key-concept
Sampling frequency should be a deliberate, risk-based decision — balancing a process's demonstrated statistical reliability against the actual consequence of letting a defect slip through — not a single fixed frequency applied uniformly to every characteristic on every part regardless of how critical or how well-controlled it is.
:::

## Rational Subgrouping

The X-bar and R-chart lesson covered how subgroup samples are used to track a process's average and spread over time. Getting useful data from that approach depends on **rational subgrouping**: samples within a single subgroup should be taken close together in time and under matching conditions, so the variation observed **within** a subgroup reflects only inherent, random process noise — while variation **between** subgroups is what actually reveals a real shift in the process over time.

:::warning
A poorly designed subgrouping strategy — mixing samples from meaningfully different conditions (different shifts, different tool changes, widely separated time periods) into a single subgroup — can mask a real process shift by inflating the apparent within-subgroup variation, or create false alarms by attributing normal, expected variation between legitimately different conditions to an apparent process change. Getting subgrouping right is what makes the resulting control chart actually meaningful.
:::

## Connecting Back to Process Capability

A well-designed sampling strategy and accurate process capability figures reinforce each other directly: sampling data feeds the capability calculations covered earlier in this module, and a process's demonstrated capability, in turn, informs how much sampling is actually warranted going forward. A process that consistently proves itself capable through good sampling data can reasonably support a lighter ongoing sampling burden — but only if the sampling that established that capability was itself sound.

:::pro-tip
Treat a sampling plan as something to revisit periodically, not set once and never reconsider. A process that has demonstrated strong, sustained capability may genuinely warrant reduced sampling frequency over time; conversely, a process showing any of the trend warning signs covered in the previous lesson may warrant temporarily increased sampling until the underlying cause is identified and corrected.
:::

## Self-Check Questions

**1. When is 100% inspection genuinely warranted over sampling inspection?**

<details>
<summary>Show Answer</summary>

When the consequence of a single missed defect is severe enough that any undetected nonconformance is unacceptable, regardless of the process's general reliability.
</details>

**2. What two factors does a risk-based sampling plan weigh together?**

<details>
<summary>Show Answer</summary>

The process's actual demonstrated capability (a strong Cpk and stable history supporting lighter sampling) and the severity of a potential defect (warranting more frequent or full inspection regardless of demonstrated capability).
</details>

**3. What does rational subgrouping require, and why?**

<details>
<summary>Show Answer</summary>

Samples within a subgroup should be taken close together in time and under matching conditions, so within-subgroup variation reflects only inherent process noise while between-subgroup variation reveals a genuine process shift.
</details>

**4. What can happen if samples from meaningfully different conditions are mixed into a single subgroup?**

<details>
<summary>Show Answer</summary>

It can mask a real process shift by inflating apparent within-subgroup variation, or create false alarms by attributing normal variation between legitimately different conditions to an apparent process change.
</details>

**5. Why should a sampling plan be revisited periodically rather than fixed permanently?**

<details>
<summary>Show Answer</summary>

A process demonstrating strong, sustained capability may warrant reduced sampling over time, while a process showing trend warning signs may warrant temporarily increased sampling until the cause is identified and corrected.
</details>
