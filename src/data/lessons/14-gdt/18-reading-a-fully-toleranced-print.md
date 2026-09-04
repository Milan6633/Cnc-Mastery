---
title: "Reading a Fully-Toleranced Print: Putting It All Together"
module: "14-gdt"
lessonNumber: 18
description: "Walk a real, fully GD&T-toleranced print in the right order — datums first, then feature control frames, then each callout's real functional and manufacturing consequence."
objectives:
  - "Apply a consistent, repeatable order for reading a fully GD&T-toleranced print"
  - "Identify the datum reference frame before interpreting any individual callout"
  - "Trace a feature control frame's full meaning using every concept covered in this module"
  - "Connect a print's GD&T callouts to the actual manufacturing and inspection decisions they drive"
difficulty: "advanced"
duration: "50 minutes"
tags: ["gdt", "print-reading", "asme-y14.5"]
---

## A Reading Order That Never Changes

Every concept covered across this module — function-based tolerancing, feature control frames, datum precedence, material condition modifiers, bonus tolerance, and the individual geometric controls — comes together on a real print as a set of feature control frames scattered across various views, each one a complete, self-contained statement once it's read correctly. Reading a fully-toleranced print well means applying a **consistent order**, every time, rather than absorbing the whole print at once.

## Step 1: Find the Datum Structure First

Before interpreting any individual feature control frame, locate the print's **datum feature symbols** and identify which physical features are labeled as datums A, B, C, and so on. Understanding the datum structure first — which surfaces establish the reference frame, and in what order they're typically referenced — makes every subsequent feature control frame immediately more meaningful, since almost every control on the print will reference back to this same structure.

:::key-concept
Reading feature control frames before understanding the datum structure is like trying to read a set of directions without first knowing the starting point — every "go to position X relative to datum A" instruction is meaningless until you know what and where datum A actually is.
:::

## Step 2: Read Each Feature Control Frame in Its Own Fixed Order

For each individual callout, apply the compartment-by-compartment reading order covered earlier in this module: geometric characteristic symbol, then tolerance value (checking for a diameter symbol and any material condition modifier), then datum references in their precedence order.

## Step 3: Determine the Real Tolerance for This Specific Part

If the callout carries an MMC or LMC modifier, the stated tolerance value is only the starting point — the feature's actual produced size determines its real, total allowable tolerance through the bonus tolerance calculation covered earlier. Reading a callout completely means recognizing when this calculation applies, not just quoting the number printed in the frame.

## Step 4: Connect the Callout to Manufacturing and Inspection

A fully-read feature control frame should immediately suggest real answers to practical questions: What does this feature need to be located from during machining? Is this a candidate for a functional gauge, or does it need a CMM? Does the material condition modifier offer meaningful bonus tolerance that eases the job, or is this callout genuinely tight regardless of produced size?

:::pro-tip
A print reading session that stops at "I can state what this symbol means" hasn't finished the job. The goal is connecting each callout to an actual decision — how the part gets fixtured, how it gets inspected, and whether the stated tolerance is as tight in practice as it looks on paper once bonus tolerance is accounted for.
:::

## A Worked Example, Read in Order

Consider a plate with a primary datum A (its back face), secondary datum B (a large locating hole, RFS), and tertiary datum C (a second hole controlling rotation), with a pattern of smaller holes toleranced to position, ⌀0.25 at MMC, relative to A, B, C:

1. **Datum structure**: the plate is located primarily off its back face, then off the large hole (fixing X/Y), then off the second hole (fixing rotation) — a fixture should locate on exactly these three features, in this order.
2. **Feature control frame**: position control, cylindrical zone (diameter symbol present), 0.25 mm at MMC, relative to A primary, B secondary, C tertiary.
3. **Real tolerance for a specific part**: a hole in the pattern produced away from its MMC size earns bonus tolerance on top of the stated 0.25 mm — the actual allowable position error for that specific hole depends on how it was actually produced, not just the printed value.
4. **Manufacturing and inspection**: because this is MMC-toleranced, a functional gauge built to the pattern's virtual condition is a strong candidate for high-volume inspection; the fixture for machining should locate on datums A, B, and C directly, not on any other convenient surface.

## Self-Check Questions

**1. Why should the datum structure be identified before interpreting any individual feature control frame on a print?**

<details>
<summary>Show Answer</summary>

Nearly every feature control frame references the datum structure, so understanding which features are datums A, B, C (and in what order) makes every subsequent callout meaningful — reading callouts first is like following directions without knowing the starting point.
</details>

**2. What are the three compartments of a feature control frame read in order, once the datum structure is known?**

<details>
<summary>Show Answer</summary>

The geometric characteristic symbol, then the tolerance value (checking for a diameter symbol and material condition modifier), then the datum references in their precedence order.
</details>

**3. Why isn't the tolerance value printed in a feature control frame necessarily the actual tolerance a specific part gets?**

<details>
<summary>Show Answer</summary>

If the callout carries an MMC or LMC modifier, the actual total allowable tolerance depends on the feature's real produced size through the bonus tolerance calculation — the printed value is only the tolerance at the referenced material condition itself.
</details>

**4. In the worked example, why should the fixture for machining the plate locate on datums A, B, and C specifically, rather than any other flat and round features on the part?**

<details>
<summary>Show Answer</summary>

The print's toleranced hole pattern is measured relative to the A-B-C datum reference frame, so machining the part located on those same three features keeps the actual result consistent with what the print's callouts are measuring against.
</details>

**5. In the worked example, why is a functional gauge a strong candidate for inspecting the hole pattern?**

<details>
<summary>Show Answer</summary>

The position tolerance is specified at MMC, giving it a single, fixed virtual condition that a functional gauge can be built to once and reused for fast, repeatable go/no-go inspection across a production run.
</details>
