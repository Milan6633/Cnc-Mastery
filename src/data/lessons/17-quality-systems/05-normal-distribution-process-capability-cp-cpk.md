---
title: "Normal Distribution and Process Capability (Cp, Cpk)"
module: "17-quality-systems"
lessonNumber: 5
description: "Compare a process's natural variation against the print's tolerance with Cp, then account for whether the process is actually centered with Cpk."
objectives:
  - "Explain why manufacturing process variation is commonly modeled as a normal distribution"
  - "Calculate Cp from a process's standard deviation and the tolerance limits"
  - "Calculate Cpk and explain why it can never exceed Cp"
  - "Explain why a process can have a good Cp but a poor Cpk"
difficulty: "advanced"
duration: "45 minutes"
tags: ["quality", "spc", "process-capability", "cp-cpk"]
---

## The Normal Distribution Assumption

Most manufacturing process variation, when a stable process produces many parts, clusters in a pattern approximated well by the **normal distribution** — a symmetric bell curve, with most measurements falling near the process's true average and progressively fewer occurring further away in either direction. This assumption underlies most standard SPC calculations, including process capability.

The spread of that distribution is measured by its **standard deviation (σ)** — a tighter, more consistent process has a smaller standard deviation; a more variable process has a larger one. For a normal distribution, roughly 99.73% of output falls within ±3σ of the mean — a span commonly referred to as the process's natural **6σ spread**.

## Cp: Comparing Spread to Tolerance

**Cp (process capability index)** compares the tolerance width the print allows against how much the process actually varies:

**Cp = (USL − LSL) ÷ (6σ)**

where USL and LSL are the upper and lower specification limits from the print's tolerance. A Cp greater than 1 means the process's natural 6σ spread is narrower than the tolerance band — the process is capable of producing parts within tolerance, assuming it's centered correctly.

:::key-concept
Cp only compares spread to tolerance width — it says nothing about whether the process is actually centered within that tolerance band. A process could have excellent Cp (very tight, consistent variation) while still producing out-of-tolerance parts, if its average is shifted too far toward one limit.
:::

## Cpk: Accounting for Centering

**Cpk** fixes this blind spot by calculating capability relative to **each** specification limit separately, then taking the more restrictive (smaller) of the two:

**Cpk = min[(USL − mean) ÷ (3σ), (mean − LSL) ÷ (3σ)]**

Because Cpk uses the actual process mean's distance to each limit individually, rather than assuming perfect centering, **Cpk can never be larger than Cp** — they're equal only when the process is perfectly centered between the two specification limits, and Cpk drops below Cp as the process mean drifts toward one limit or the other.

## Why a Good Cp Doesn't Guarantee a Good Cpk

A process can have excellent, tight variation (a high Cp) while still running dangerously close to one tolerance limit if its mean isn't centered — producing a good Cp but a poor Cpk. This is exactly the scenario Cpk exists to catch: a process that's precise (low variation) isn't automatically accurate (correctly centered), and both matter for actually producing conforming parts consistently.

:::warning
Reporting only Cp on a process that isn't well-centered can create a false sense of confidence. A high Cp with a low Cpk means the process is genuinely tight and consistent, but it's consistently running close to one edge of tolerance — a small further shift, well within what a tight process can still drift by, risks producing out-of-tolerance parts even though the process's raw precision looks excellent.
:::

## Common Capability Benchmarks

Industries commonly cite minimum Cpk targets as a general guideline — figures like 1.33 appear frequently as a common minimum benchmark, with more demanding applications (aerospace, safety-critical components) often expecting higher values still. These benchmarks vary by industry, customer, and the specific characteristic's criticality, so the actual required capability for a given process should be confirmed against the applicable customer or industry requirement rather than assumed from a single rule of thumb.

## Self-Check Questions

**1. What does the standard deviation (σ) of a process measure?**

<details>
<summary>Show Answer</summary>

How spread out the process's variation is — a tighter, more consistent process has a smaller standard deviation, a more variable process has a larger one.
</details>

**2. What does Cp compare, and what does it assume about the process?**

<details>
<summary>Show Answer</summary>

It compares the tolerance width (USL minus LSL) to the process's natural 6σ spread, assuming the process is perfectly centered within that tolerance band.
</details>

**3. Why can Cpk never be larger than Cp?**

<details>
<summary>Show Answer</summary>

Cpk calculates capability relative to each specification limit based on the process's actual mean position, taking the more restrictive result — the two are equal only when the process is perfectly centered, and Cpk drops as the mean drifts toward either limit.
</details>

**4. How can a process have a high Cp but a low Cpk?**

<details>
<summary>Show Answer</summary>

If the process has tight, consistent variation (high Cp) but its mean isn't centered within the tolerance band, it can be running close to one limit — precise but not accurately centered — producing a poor Cpk despite the good Cp.
</details>

**5. Why is reporting only Cp, without Cpk, potentially misleading?**

<details>
<summary>Show Answer</summary>

It can create false confidence — a high Cp with an uncentered process still risks producing out-of-tolerance parts from a relatively small further shift, a risk Cpk reveals but Cp alone does not.
</details>
