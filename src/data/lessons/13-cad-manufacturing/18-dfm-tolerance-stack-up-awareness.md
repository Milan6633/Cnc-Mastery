---
title: "DFM: Tolerance Stack-Up Awareness"
module: "13-cad-manufacturing"
lessonNumber: 18
description: "Model and dimension a design so tolerances don't compound invisibly across a chain of features or an assembly of parts."
objectives:
  - "Explain how tolerance stack-up occurs across a dimension chain"
  - "Apply baseline (datum) dimensioning in a model to avoid compounding tolerance"
  - "Recognize how stack-up applies across an assembly of multiple parts, not just one part's features"
  - "Explain why worst-case and statistical stack-up analysis answer different questions"
difficulty: "advanced"
duration: "45 minutes"
tags: ["cad", "dfm", "design-for-manufacturability", "tolerance-stack-up"]
---

## How Tolerances Compound

Every individual dimension on a part carries some tolerance — a real amount, however small, that the actual manufactured part can vary from the nominal value. **Tolerance stack-up** is what happens when several toleranced dimensions combine, in a chain, to determine some other distance or fit: the individual tolerances don't cancel out on average in the worst case — they can add directly, so the combined uncertainty at the end of a chain can be significantly larger than any single dimension's own tolerance.

This is the same principle covered for physical layout work in the manual machining module — chained measurements accumulate error, while measuring from a single baseline keeps errors isolated. Tolerance stack-up is that exact same problem, expressed as a design and dimensioning concern rather than a shop-floor layout technique.

:::key-concept
A chain of five dimensions, each individually toleranced to ±0.1 mm, can combine to a worst-case ±0.5 mm uncertainty at the far end of the chain — five times any single dimension's own tolerance. The individual tolerances are all correct on their own; the problem is entirely in how they combine.
:::

## Baseline Dimensioning in the Model

The fix mirrors the layout-work principle directly: dimension features **from a common reference (baseline or datum)**, rather than dimensioning each feature relative to the previous one in a chain. In a parametric CAD model, this means deliberately choosing which sketches and features reference the model's actual datum geometry (an origin plane, a specific reference face) directly, rather than referencing whatever feature happened to be created immediately before it in the tree.

:::pro-tip
This is a modeling habit, not just a drawing dimensioning choice — a feature's parametric references (what it's actually constrained to in the sketch, not just what a drawing dimension happens to display) determine the real stack-up behavior. Two features can display identical-looking drawing dimensions while having completely different underlying reference chains in the model.
:::

## Stack-Up Across an Assembly

Tolerance stack-up isn't limited to a single part's internal features — it applies just as directly across an **assembly** of multiple parts, where each part's own dimensional tolerance, plus the tolerances on how parts are located relative to each other (through the mates covered earlier in this module), all combine to determine whether a final assembled fit or clearance actually works across the full range of parts the tolerances allow. A gap that looks generous with every part at its nominal dimension can close to zero, or go negative, when every part in the chain happens to land at the tolerance limit that makes the gap smallest.

## Worst-Case vs. Statistical Stack-Up

Two different, valid ways of analyzing stack-up answer two different questions:

- **Worst-case analysis** sums the individual tolerances directly, assuming every dimension in the chain could simultaneously land at its worst-case limit at once — the most conservative possible answer, guaranteeing the design works even in that unlikely combined scenario.
- **Statistical (RSS — root-sum-square) analysis** treats each dimension's variation as statistically independent and combines them using a root-sum-square calculation, reflecting the much lower real-world probability that every dimension in a chain lands at its worst-case limit simultaneously — producing a tighter, more realistic combined tolerance estimate for high-volume production, at the cost of a small, calculated risk that an unusual combination of parts doesn't fit.

:::warning
Worst-case analysis is the safer default for low-volume or safety-critical assemblies, where even a rare bad combination of parts is unacceptable. Statistical analysis is common in high-volume production where a small, understood, and accepted probability of an occasional tight or loose fit is preferable to the tighter (and more expensive) individual part tolerances worst-case analysis would otherwise demand.
:::

## Self-Check Questions

**1. Why can a chain of individually correct, in-tolerance dimensions still produce an unacceptably large combined error?**

<details>
<summary>Show Answer</summary>

Individual tolerances in a chain don't cancel out in the worst case — they can add directly, so the combined uncertainty at the end of the chain can be significantly larger than any single dimension's own tolerance.
</details>

**2. How does baseline (datum) dimensioning in a model reduce tolerance stack-up, compared to chaining dimensions feature-to-feature?**

<details>
<summary>Show Answer</summary>

Referencing a common baseline or datum for each dimension keeps each feature's error isolated relative to that one reference, rather than letting errors compound as each new feature is dimensioned from the previous one.
</details>

**3. Why does tolerance stack-up matter for an assembly of multiple parts, not just for a single part's own features?**

<details>
<summary>Show Answer</summary>

Each part's own tolerance, plus the tolerances on how parts are located relative to each other through assembly mates, all combine — a fit or clearance that looks fine at nominal dimensions can close up or open unacceptably when parts land at the tolerance limits that make the gap smallest or largest.
</details>

**4. What is the key difference between worst-case and statistical (RSS) tolerance stack-up analysis?**

<details>
<summary>Show Answer</summary>

Worst-case analysis assumes every dimension could simultaneously hit its worst-case limit at once, the most conservative possible result. Statistical analysis treats variations as independent and combines them via root-sum-square, reflecting the lower real-world probability of every dimension landing at its limit together.
</details>

**5. Why might a design team choose worst-case analysis over statistical analysis even though it produces a more conservative (larger) combined tolerance?**

<details>
<summary>Show Answer</summary>

For low-volume or safety-critical assemblies, where even a rare bad combination of parts is unacceptable, the guaranteed safety of worst-case analysis outweighs the tighter individual tolerances statistical analysis would otherwise allow.
</details>
