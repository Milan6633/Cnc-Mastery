---
title: "Straight and Step Turning"
module: "06-manual-machining"
lessonNumber: 3
description: "Turn a workpiece to a diameter with the longitudinal feed, sneak up on a finished size, and machine multiple diameters along one part."
objectives:
  - "Set depth of cut using the cross-slide dial, accounting for the radius-to-diameter doubling"
  - "Explain why a finishing pass should always be taken separately from roughing"
  - "Machine multiple diameters (steps) along a single part accurately"
  - "Recognize when unsupported stock length risks chatter during straight turning"
difficulty: "beginner"
duration: "45 minutes"
tags: ["manual-machining", "lathe", "turning", "step-turning"]
---

## Straight Turning

Straight (cylindrical) turning reduces a workpiece to a uniform diameter along a length, feeding the carriage parallel to the spindle axis — either by hand on the carriage handwheel or under power through the feed rod — while the cross-slide holds a fixed depth of cut.

Setting that depth correctly means remembering the radius-to-diameter relationship covered in the previous lesson: the cross-slide dial reads in radius, but a cut removes material from all the way around the part, so a 0.5 mm cross-slide movement takes a full 1 mm off the diameter.

## Roughing, Then a Separate Finishing Pass

Never try to reach a final diameter in one pass. Standard technique is to rough closer to size first, leaving a small amount of stock — often on the order of a few tenths of a millimetre — for a deliberate, separate **finishing pass**:

- Roughing passes prioritize material removal rate, at a heavier depth of cut and feed, and can leave more tool marks and dimensional variation.
- The finishing pass takes a light, consistent cut specifically to reach the exact target diameter and leave a clean surface finish, measured and confirmed with a caliper or micrometer before moving on.

:::key-concept
"Sneaking up" on a dimension — taking a light trial cut, measuring, then adjusting the final pass's depth based on the actual measured result — is standard practice, not a sign of uncertainty. It corrects for the small, real-world variation between a dial setting and the tool's actual cutting position.
:::

:::warning
Attempting to hit a final tolerance in a single heavy cut risks overshooting the target diameter — once too much material is removed, there is no way to put it back. A light finishing pass, checked before it's the only pass left, avoids scrapping the part.
:::

## Step Turning

Step turning produces multiple distinct diameters along one part's length, each transitioning to the next at a specific position — a shaft with a shoulder, for example. The general approach:

1. Plan the sequence of diameters and lengths from the print before cutting.
2. Turn the largest diameter first when working from raw stock down, since a larger diameter supports a smaller one machined afterward more rigidly than the reverse order would.
3. Use the carriage's position (read from the bed's length markings, a carriage stop, or careful measurement) to control where each diameter transitions to the next.
4. Measure each step's diameter and length as it's completed rather than waiting until the whole part is finished — an error caught early can often still be corrected; one discovered at the end usually can't.

:::pro-tip
A carriage stop — a simple mechanical block clamped to the bed — gives a repeatable longitudinal position without needing to read the bed markings or measure by eye for every step, especially useful when several parts need the same step lengths.
:::

## Watching for Chatter on Long, Unsupported Work

A long length of stock turned between the chuck and an unsupported free end (or between centers without additional support) can deflect and chatter under cutting force — the same deflection problem covered for steady and follow rests in the workholding module. If a straight turning pass produces a poor finish, an audible vibration, or a diameter that varies along the length despite a constant cross-slide setting, unsupported deflection — not a dull tool or wrong speed — is often the actual cause on longer, slender parts.

## Self-Check Questions

**1. If the cross-slide dial is set to remove 0.3 mm, how much does the workpiece diameter actually decrease?**

<details>
<summary>Show Answer</summary>

0.6 mm — the dial reads radius, and material is removed from all the way around the part, so the diameter decreases by twice the radial depth of cut.
</details>

**2. Why should a finishing pass always be taken separately from the roughing passes rather than trying to hit final size in one cut?**

<details>
<summary>Show Answer</summary>

A single heavy cut risks overshooting the target diameter with no way to add material back. Roughing closer to size and taking a light, measured finishing pass avoids scrapping the part.
</details>

**3. When step turning from raw stock, why is the largest diameter typically turned first?**

<details>
<summary>Show Answer</summary>

A larger remaining diameter supports a smaller diameter machined afterward more rigidly than the reverse order would, reducing deflection risk during the later, smaller-diameter cuts.
</details>

**4. What does a carriage stop provide that reading the bed's length markings by eye doesn't?**

<details>
<summary>Show Answer</summary>

A repeatable, mechanical longitudinal position, useful for producing the same step length consistently across several parts without relying on reading marks or measuring by eye each time.
</details>

**5. A long, slender part turned between centers produces a poor finish and a diameter that varies along its length even though the cross-slide setting hasn't changed. What's the likely cause?**

<details>
<summary>Show Answer</summary>

Unsupported deflection — the long, slender stock is flexing under cutting force, the same problem steady and follow rests are designed to prevent — rather than a dull tool or incorrect speed.
</details>
