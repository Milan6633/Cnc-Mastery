---
title: "Stock Simulation: Material Removal Verification"
module: "15-cam-milling"
lessonNumber: 16
description: "Simulate material removal operation by operation to compare the resulting stock against the target model, catching leftover material or accidental over-cuts before they reach the machine."
objectives:
  - "Explain what stock simulation tracks that basic toolpath simulation doesn't"
  - "Explain how comparing simulated stock to the target model reveals leftover or over-cut material"
  - "Explain why stock simulation is essential input to planning rest machining"
  - "Recognize the difference between a collision problem and a material-removal-accuracy problem"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cam", "fusion360", "mastercam", "stock-simulation"]
---

## Tracking the Actual Material, Not Just the Tool Path

Where basic toolpath simulation (covered in the previous lesson) checks whether the tool, holder, and machine avoid unwanted collisions, **stock simulation** tracks something different: the actual **resulting shape of the material itself**, updated progressively as each operation in the program runs, and compared against the part's target final geometry.

:::key-concept
Toolpath simulation asks "does this motion avoid hitting anything it shouldn't?" Stock simulation asks "after this motion actually removes material, does the resulting shape match what the part is supposed to be?" These are related but genuinely different questions, and a program can pass one while revealing a real problem under the other.
:::

## What Comparing Simulated Stock to Target Reveals

Running the full operation sequence through stock simulation and comparing the resulting material against the target model at each stage reveals two distinct kinds of problem:

- **Leftover material** — areas where the simulated stock still has material the target model doesn't, meaning some region wasn't actually reached or fully cleared by the program as planned. This is exactly the information needed to plan rest machining, covered earlier in this module — stock simulation is what actually identifies where rest material remains.
- **Over-cut material** — areas where the simulated stock has been cut away below the target model's surface, meaning the program removed material it shouldn't have — a genuine, serious error that would scrap the real part if it reached the machine uncaught.

## Feeding Rest Machining Planning

The rest machining lesson covered earlier in this module described comparing remaining stock against target geometry to identify where a smaller tool needs to clean up leftover material — stock simulation is the actual mechanism that comparison relies on. Running stock simulation after a roughing operation, before committing to the exact rest machining toolpath, confirms precisely where leftover material exists rather than assuming it based on tool radius alone.

## A Different Category of Problem Than Collision

It's worth being explicit about the distinction: a collision problem (covered in the previous lesson) is about the tool or holder occupying space it shouldn't during motion. A material-removal-accuracy problem, caught by stock simulation, is about whether the finished result of that motion — after material is actually removed — matches the intended part. A program can be entirely collision-free and still leave the wrong final shape if, for example, a geometry selection error caused an operation to skip a surface it should have cut.

:::warning
Passing collision-free toolpath simulation says nothing about whether the resulting part will actually be the correct shape. Always run stock simulation and compare the result against the target model as a separate verification step — a clean collision check is not a substitute for confirming the actual finished geometry is correct.
:::

:::pro-tip
Stock simulation is also a useful sanity check on cycle time and material removal rate claims — watching the simulated stock disappear operation by operation gives an intuitive feel for where a program is spending most of its time, which can reveal an inefficient operation sequence even when every individual operation is technically correct.
:::

## Self-Check Questions

**1. What does stock simulation track that basic toolpath (collision) simulation doesn't?**

<details>
<summary>Show Answer</summary>

The actual resulting shape of the material itself, updated progressively as each operation runs, compared against the part's target final geometry — rather than just checking for physical collisions during tool motion.
</details>

**2. What does it mean if stock simulation reveals leftover material in a region compared to the target model?**

<details>
<summary>Show Answer</summary>

That region wasn't actually reached or fully cleared by the program as planned — this is the exact information needed to plan a targeted rest machining operation.
</details>

**3. Why is over-cut material revealed by stock simulation a serious problem?**

<details>
<summary>Show Answer</summary>

It means the program removed material below the target model's surface — a genuine error that would scrap the real part if it reached the machine without being caught first.
</details>

**4. How does stock simulation relate directly to planning rest machining?**

<details>
<summary>Show Answer</summary>

Rest machining planning relies on comparing remaining stock against target geometry to find leftover material — stock simulation is the actual mechanism that performs and visualizes that comparison.
</details>

**5. Why can a program pass collision-free toolpath simulation and still produce the wrong final part shape?**

<details>
<summary>Show Answer</summary>

Collision checking only verifies the tool and holder avoid unwanted contact during motion — it says nothing about whether the resulting removed material actually matches the intended geometry, which is a separate question stock simulation is needed to answer.
</details>
