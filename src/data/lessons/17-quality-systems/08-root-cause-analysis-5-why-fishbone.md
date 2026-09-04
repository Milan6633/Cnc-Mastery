---
title: "Root Cause Analysis: 5-Why and Fishbone Diagram"
module: "17-quality-systems"
lessonNumber: 8
description: "Find the actual cause of a quality problem instead of just its symptom, using 5-Why's repeated questioning and the fishbone diagram's structured category search."
objectives:
  - "Explain the difference between a symptom and a root cause"
  - "Apply the 5-Why technique to drill from a symptom to a root cause"
  - "Use a fishbone diagram's standard categories to search systematically for possible causes"
  - "Explain why fixing a symptom without finding the root cause fails to prevent recurrence"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["quality", "root-cause-analysis", "5-why", "fishbone-diagram"]
---

## Symptom vs. Root Cause

A quality problem's **symptom** is what's directly observed — a batch of parts out of tolerance, a surface finish that doesn't meet spec. The **root cause** is the actual underlying reason that symptom occurred — a worn fixture locator, an incorrect feed rate in a program, a tool that wasn't actually the one specified in the tool library. Fixing the symptom (reworking or scrapping the bad batch) addresses that one instance of the problem; only fixing the root cause prevents it from happening again.

:::key-concept
Correcting a symptom and finding a root cause are different activities with different purposes. A formal quality system's corrective action process — connecting directly to the continuous improvement principle covered in the ISO 9001 overview lesson — exists specifically to ensure root cause is actually found and addressed, not just the immediate symptom.
:::

## 5-Why

The **5-Why** technique drills down from a symptom to its actual root cause by repeatedly asking "why" — each answer becomes the basis for the next why question, peeling back one layer of causation at a time rather than stopping at the first, most obvious explanation:

1. Why did the part fail inspection? — The hole was mislocated.
2. Why was the hole mislocated? — The fixture shifted during machining.
3. Why did the fixture shift? — A clamp wasn't torqued to the specified value.
4. Why wasn't it torqued correctly? — The work instruction didn't specify a torque value.
5. Why didn't the work instruction specify it? — The instruction was written before a torque spec was established for that fixture.

The number five is a common convention, not a strict rule — sometimes the actual root cause is reached in three questions, sometimes it takes more. The point is continuing to ask why until reaching a cause that, if corrected, would actually prevent recurrence — in this example, updating the work instruction with a specified torque value, not just re-torquing the one clamp that happened to be loose this time.

## Fishbone (Ishikawa) Diagram

A **fishbone diagram** (also called an Ishikawa diagram, after its originator) is a structured visual brainstorming tool for a problem with multiple plausible contributing factors, organizing potential causes into standard categories — commonly Machine, Method, Material, Man (people), Measurement, and Environment — branching off a central spine toward the problem itself at the head of the "fish."

:::pro-tip
The fishbone diagram's real value is forcing a systematic search across every plausible category rather than fixating on the first idea that comes to mind. A team investigating a dimensional problem might jump straight to "the operator made a mistake" (Man) without seriously considering a worn tool (Machine), an out-of-spec raw material lot (Material), or an inaccurate gauge (Measurement) — working through each category deliberately catches causes that an unstructured discussion might skip entirely.
:::

## Using Both Together

5-Why and the fishbone diagram complement each other in practice: a fishbone diagram is often used first, to broadly brainstorm and organize the range of plausible contributing categories and factors, and 5-Why is then applied to drill down into the most likely candidate (or candidates) identified, following the causal chain to its actual root.

## Self-Check Questions

**1. What is the practical difference between fixing a symptom and fixing a root cause?**

<details>
<summary>Show Answer</summary>

Fixing a symptom addresses one specific instance of a problem (reworking a bad batch); fixing the root cause addresses the underlying reason it occurred, preventing the problem from recurring.
</details>

**2. What does the 5-Why technique actually do at each step?**

<details>
<summary>Show Answer</summary>

It uses each answer as the basis for the next "why" question, drilling down one layer of causation at a time rather than stopping at the first, most obvious explanation.
</details>

**3. Is "five" a strict requirement for the number of why questions in 5-Why?**

<details>
<summary>Show Answer</summary>

No — it's a common convention, not a strict rule. The actual goal is continuing to ask why until reaching a cause that, if corrected, would genuinely prevent recurrence, which might take more or fewer than five questions.
</details>

**4. What categories does a fishbone diagram typically organize potential causes into?**

<details>
<summary>Show Answer</summary>

Commonly Machine, Method, Material, Man (people), Measurement, and Environment, branching toward the problem at the head of the diagram.
</details>

**5. Why does a fishbone diagram's category structure help avoid a common investigation mistake?**

<details>
<summary>Show Answer</summary>

It forces a systematic search across every plausible category, rather than fixating on the first idea (often blaming an operator) without seriously considering other categories like machine wear, material quality, or measurement accuracy.
</details>
