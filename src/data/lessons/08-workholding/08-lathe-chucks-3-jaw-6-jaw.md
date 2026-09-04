---
title: "Lathe Chucks: 3-Jaw and 6-Jaw Power Chucks"
module: "08-workholding"
lessonNumber: 8
description: "Choose between 3-jaw and 6-jaw power chucks and set clamping pressure safely for the stock and speed in use."
objectives:
  - "Explain how a scroll or wedge mechanism self-centers 3-jaw chuck jaws"
  - "Explain why a 6-jaw chuck holds thin-wall tubing more accurately than a 3-jaw"
  - "Set power chuck clamping pressure appropriately for stock and material"
  - "Explain why chuck speed rating drops as jaw/chuck mass and RPM increase"
difficulty: "beginner"
duration: "50 minutes"
tags: ["workholding", "lathe-chucks", "turning", "fixturing"]
---

## The 3-Jaw Self-Centering Chuck

A 3-jaw chuck moves all three jaws simultaneously and equally through a scroll or wedge mechanism inside the chuck body — turning the chuck key rotates the scroll, which drives every jaw inward or outward together. This self-centers round or hex (or any multiple-of-three-sided) stock automatically, with no manual adjustment of individual jaws, making it the fastest chuck to load for general-purpose turning.

That speed comes with a wear tradeoff: the scroll mechanism and jaw serrations wear over time, and that wear shows up as accumulating runout — stock that centers slightly differently than it did when the chuck was new. Periodically boring or truing soft jaws in place (the same in-place machining principle covered for milling vise soft jaws) restores accurate centering without replacing the whole chuck.

## The 6-Jaw Chuck

A 6-jaw chuck spreads clamping force across six contact points at 60° spacing instead of three at 120°. The extra points lower the unit pressure at any single jaw for the same total clamping force, which matters most on **thin-wall tubing and delicate round stock** — a 3-jaw's concentrated three-point grip can squeeze thin tube slightly out-of-round between the jaws, and that ovality then shows up as a runout or roundness error in the finished part.

:::key-concept
A 3-jaw chuck's three contact points can flex thin-wall stock into a triangular-ish out-of-round shape under clamping force alone, before any cutting happens. A 6-jaw chuck's six points distribute the same holding force over more contact area, reducing that local deformation.
:::

6-jaw chucks generally cost more and, for a given actuation force, deliver somewhat less grip force per jaw than an equivalent 3-jaw — the tradeoff buys roundness and gentler holding, not raw grip strength.

## Power Chuck Actuation

A **power chuck** is actuated hydraulically or pneumatically through the spindle's drawbar or a chuck-mounted cylinder, rather than by hand with a chuck key. This gives fast, consistent, remotely-triggered clamping (via foot pedal or program cycle) and — critically — a **pressure gauge or regulator** that sets a known, repeatable clamping force rather than "however hard the operator happened to turn the key."

Setting that pressure correctly matters in both directions:

- **Too low** for the stock diameter and material, and the part can spin in the jaws under cutting torque, or be pulled loose entirely.
- **Too high**, especially on thin-wall stock, and the chuck crushes or ovals the part exactly as an over-tight 3-jaw does — just with more force behind it.

## Speed Rating and Centrifugal Grip Loss

A power chuck's rated clamping force is only accurate at low RPM. As spindle speed increases, centrifugal force acting on the jaws themselves works to fling them outward, **reducing the actual grip force on the part** — the faster the chuck spins, the less of its rated clamping force is actually reaching the stock. Heavier jaws and larger chuck assemblies lose grip force faster with increasing RPM than lighter ones.

:::warning
A chuck can lose enough grip force at high RPM for the part to fly out of the jaws entirely — this is a genuine safety hazard, not just an accuracy concern. Always check the manufacturer's speed-versus-force chart for the actual chuck and jaw combination in use, especially for high-RPM finishing passes on small-diameter stock held in a chuck sized for much larger work.
:::

## Self-Check Questions

**1. What mechanism lets a 3-jaw chuck center round stock automatically?**

<details>
<summary>Show Answer</summary>

A scroll or wedge mechanism inside the chuck body that moves all three jaws inward or outward together, in equal amounts, as the chuck key is turned.
</details>

**2. Why does a 6-jaw chuck hold thin-wall tubing more accurately than a 3-jaw chuck?**

<details>
<summary>Show Answer</summary>

Six contact points spread the same total clamping force over more area than three points, lowering the local pressure and reducing the risk of squeezing thin-wall stock slightly out-of-round.
</details>

**3. What happens if power chuck clamping pressure is set too low for the operation?**

<details>
<summary>Show Answer</summary>

The part can spin in the jaws under cutting torque, or be pulled loose from the chuck entirely.
</details>

**4. Why does a power chuck's actual grip force decrease as spindle RPM increases?**

<details>
<summary>Show Answer</summary>

Centrifugal force acts on the jaws themselves at speed, working to fling them outward and reducing how much of the chuck's rated clamping force is actually reaching the part.
</details>

**5. Why is chuck speed-versus-force derating a genuine safety concern, not just an accuracy issue?**

<details>
<summary>Show Answer</summary>

If grip force drops enough at high RPM, the part can fly out of the jaws entirely — a hazard to the operator and machine, not just a source of poor finish or accuracy.
</details>
