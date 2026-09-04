---
title: "Clamping Sequence, Force, and Preventing Distortion"
module: "08-workholding"
lessonNumber: 2
description: "How to sequence and size clamping force so it holds a part against cutting loads without springing it out of tolerance."
objectives:
  - "Explain why clamps hold a part against its locators rather than establishing position"
  - "Apply the locate-support-clamp sequence when setting up a fixture"
  - "Size and direct clamping force to resist cutting loads without deforming the part"
  - "Prevent clamping-induced distortion in thin-walled or flexible parts"
difficulty: "beginner"
duration: "50 minutes"
tags: ["workholding", "clamping", "fixturing", "distortion"]
---

## Clamps Hold, They Don't Locate

Locating fixes a part's position using exactly six points (see the previous lesson on the 3-2-1 principle). Clamping is a separate job: it applies force to keep the part in contact with those six points while cutting forces try to pull, push, or vibrate it away. A clamp that also happens to touch a seventh surface isn't helping — it's adding an uncontrolled seventh constraint that fights the locating scheme and can rock the part off its true position.

## The Locate-Support-Clamp Sequence

Set up a fixture in this order, every time:

1. **Locate** — seat the part against all six locating points. Confirm it sits down fully, with no rock and no gap.
2. **Support** — bring any jack screws or adjustable supports up to just touch the part under sections that will flex under cutting load. Snug, not tight — a support only needs to carry load, not add clamping force.
3. **Clamp** — apply clamping force last, once locating and support are both confirmed.

Doing this out of order is a common setup mistake: clamping before the supports are in place can spring the part slightly, so the supports then lock in that sprung shape instead of the part's true, relaxed geometry.

## Direction and Placement of Clamping Force

Clamping force should point **into** the locators, never away from them or across the part toward open space. A clamp aimed so any component of its force pulls the part off a locating point will eventually let it walk during the cut, however light that component seems on the bench.

Placement matters as much as direction:

- Clamp over solid, rigid sections of the part — bosses, ribs, thick walls — not over thin, unsupported spans.
- Clamp close to where the cutting force is actually applied. A clamp far from the cut lets the intervening material flex under load even though the clamp itself is tight.
- Where a clamp must sit near a thin section, back it with a support directly underneath so the clamping force transfers into the fixture rather than bending the part.

:::warning
A clamp positioned over an unsupported span acts like a press: even moderate torque on the clamp screw can bow a thin wall or flange downward, and the part will machine true to that bowed shape — then spring back out of tolerance the moment the clamp is released.
:::

## Sizing Clamping Force

Clamping force has to clear a range, not hit a single number:

- **Enough** to resist the cutting forces trying to lift, slide, or vibrate the part off its locators, with margin — cutting forces are rarely perfectly steady, and interrupted cuts spike well above their average.
- **Not so much** that it visibly or invisibly deforms the part. Deformation isn't always obvious at the vise — a part can measure in tolerance while clamped and spring out of tolerance the instant it's released, because the clamping force elastically bent it during machining. This is the classic thin-wall "sprung part" failure, and it's invisible until you unclamp and remeasure.

:::pro-tip
If a finished dimension is suspect on a thin or flexible part, remeasure it both clamped and unclamped before you chase a machine or programming problem. A part that's in tolerance clamped and out of tolerance free is a clamping-force problem, not a G-code problem.
:::

## Even, Sequential Tightening

A fixture with several clamps should be tightened the same way a cylinder head or a flange is bolted down: gradually and in a pattern that spreads the load, not by cranking one clamp fully tight before touching the next. Fully tightening a single clamp first concentrates all of the deflection near that clamp and can rock the part off its other locators before the remaining clamps ever engage. Snug every clamp lightly first, then bring each one up to final torque in the same sequence, so the load builds evenly across the whole part.

## Preventing Distortion in Thin-Walled and Flexible Parts

Thin walls, long unsupported spans, and flexible shapes need a different clamping strategy than a solid rectangular block:

- **More, lighter clamps beat fewer, heavier ones.** Spreading the required holding force across more contact points lowers the force — and the local deflection — at any single point.
- **Support before you clamp.** A support placed under a thin section carries the clamp's reaction force into the fixture instead of into a bent wall.
- **Consider low-melt alloy or wax potting** for genuinely flexible or thin-walled parts: the part is cast into a low-melting-point alloy or wax that fills and backs every surface, machined as a rigid assembly, then released by melting the potting material out. This gives full-surface support with none of the local point loading a clamp creates.
- **Leave sacrificial webs or tabs** on especially flexible parts during roughing, and remove them in a final light finishing pass once most of the stock — and most of the flex — is already gone.

## Self-Check Questions

**1. Why is it a mistake for a clamp to also contact a surface beyond the part's six locating points?**

<details>
<summary>Show Answer</summary>

Because that extra contact adds an uncontrolled seventh constraint that can rock the part off its true locating position instead of simply holding it there.
</details>

**2. What is the correct order for locating, supporting, and clamping a part, and why does the order matter?**

<details>
<summary>Show Answer</summary>

Locate first, then support, then clamp. Clamping before supports are in place can spring the part slightly, so the supports lock in a sprung shape rather than the part's true, relaxed geometry.
</details>

**3. Why can a part measure in tolerance while clamped but out of tolerance once released?**

<details>
<summary>Show Answer</summary>

Excess clamping force can elastically deform the part during machining without visibly deforming it at the vise. The part machines true to that bent shape, then springs back to its natural shape once the clamp is released — a classic thin-wall "sprung part" failure.
</details>

**4. When tightening a fixture with multiple clamps, why shouldn't you fully tighten one clamp before touching the next?**

<details>
<summary>Show Answer</summary>

Fully tightening one clamp first concentrates deflection near that clamp and can rock the part off its remaining locators. Snugging all clamps lightly first, then bringing each to final torque in sequence, spreads the load evenly.
</details>

**5. Name two strategies for clamping a thin-walled or flexible part without distorting it.**

<details>
<summary>Show Answer</summary>

Any two of: use more, lighter clamps instead of fewer heavy ones; support the part directly under any clamp near a thin section; pot the part in low-melt alloy or wax for full-surface support; or leave sacrificial webs/tabs during roughing and remove them in a final light finishing pass.
</details>
