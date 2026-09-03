---
title: "Metal Cutting Troubleshooting — Vibration, Wear & Finish"
module: "12-cnc-setup"
lessonNumber: 2
description: "Apply a systematic method to diagnose and fix the most common metal-cutting problems across turning, milling, drilling, and boring."
objectives:
  - "Follow a four-point observation method to diagnose cutting problems."
  - "Classify common faults into chip, surface, burr, vibration, and tool-life categories."
  - "Distinguish the sub-causes of vibration: radial force, tangential force, and instability."
  - "Select the correct remedy family: cutting data, geometry, grade, stability, or coolant."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["setup", "troubleshooting", "vibration", "tool-wear"]
---

## The troubleshooting method

A cutting fault is usually the symptom of one of a small number of root causes. Instead of
guessing, work through four signals in order before touching anything:

1. **Chip** — colour, shape, length, and where it goes. A long snarl points to poor chip
   control; a burnt chip points to excessive speed.
2. **Surface** — feed marks, "hairy" texture, or tearing all point to a specific edge or
   data problem.
3. **Sound** — a steady hiss is healthy; a rhythmic screech or rattle is chatter. Note the
   pitch and whether it follows spindle speed.
4. **Tool** — the wear pattern on the edge (flank, crater, notch, built-up edge, chipping)
   records exactly what the cut was doing.

:::key-concept
Always observe before you adjust. The chip tells you about chip control, the surface about
the edge, the sound about vibration, and the wear scar about cutting data and grade. Change
one variable at a time so you know which change fixed the problem.
:::

## Problem categories

| Category | What you see or hear |
|---|---|
| Poor chip control | Long snarls winding around tool or part; chips jamming the cut |
| Bad surface finish | "Hairy" texture, feed marks, tearing, scratching |
| Burrs | Material raised at the exit of the cut |
| Vibration (chatter) | Chatter marks, noise, tool or part ringing |
| Poor tool life | Rapid flank or crater wear, early edge failure |
| Insert breakage | Chipped or fractured edge, sudden failure |
| Built-up edge | Workpiece material welded onto the cutting edge |

## Vibration: three distinct causes

Chatter is not one problem. The remedy depends on which force is driving it.

- **High radial cutting force** — caused by too large a nose radius or an unsuitable
  entering/lead angle. The tool is pushed sideways and deflects.
- **High tangential cutting force** — caused by a negative geometry, too hard a
  chipbreaker, or a high feed. The tool is loaded in the cutting direction.
- **Instability** — long overhang, insufficient clamping, or wrong centre height. The
  system itself is flexible, so even a moderate force excites it.

:::warning
Treating chatter as a speed problem when the real cause is a long boring-bar overhang will
not fix it — it will only hide the symptom and waste cutting data. Diagnose the force path
first.
:::

## Chip control problems

- **Snarls / stuck chips**: feed too low for the geometry, depth of cut too shallow, or nose
  radius too large. Increase the feed, choose a geometry with better chip breaking, or use
  high-precision coolant to flush the chip away.
- **Too short, hard-broken chips**: the chipbreaker is working too hard, raising cutting
  forces and risking edge breakage. Use a more open chipbreaker or reduce the feed.

## Surface finish and burrs

- **"Hairy" surface**: the edge is not sharp enough, or notch wear is tearing the surface.
  Use a sharp PVD-coated or ground insert, a positive geometry, or a cermet grade, and
  reduce speed if oxidation wear is present.
- **Burrs at cut exit**: the chip breaks against the edge as it leaves the workpiece. End
  the cut with a chamfer or radius, or use a wiper insert and reduce feed.

## Tool life and edge failure

Each wear pattern names its own cause:

- **Flank / crater wear**: cutting speed too high or grade too soft. Reduce vc or use a
  more wear-resistant grade.
- **Built-up edge**: speed too low, edge temperature too high, or no coating. Increase vc,
  sharpen the edge, and raise the oil percentage in the coolant.
- **Breakage / chipping**: too hard a chipbreaker, an unstable setup, or a grade that is
  too hard for an intermittent cut. Use a tougher grade, reduce feed, and check fixturing
  and runout.
- **Notch wear at the depth-of-cut line**: work-hardened or scaled material at that line.
  Vary the depth of cut, reduce speed, or use a harder grade.

## Remedy families

| Family | What you change |
|---|---|
| Cutting data | vc, fn, ap (raise or lower, one at a time) |
| Geometry | Positive vs negative, entering angle, chipbreaker, nose radius, wiper |
| Grade | Tougher (breakage) vs more wear-resistant (wear) |
| Stability | Shorter overhang, larger or dampened bar, better clamping, correct centre height |
| Coolant | Precision or internal supply, correct oil mix, or coolant off when appropriate |

## Consolidated problem → cause → remedy

| Problem | Typical cause | Remedy |
|---|---|---|
| Chip snarls / jamming | Feed too low, ap too shallow, large nose radius | Raise feed; better chipbreaker geometry; precision coolant |
| Hard, over-broken chips | Chipbreaker too aggressive | More open chipbreaker; reduce feed |
| "Hairy" / rough surface | Blunt edge, notch wear, high feed + small nose radius | Sharp positive edge; wiper or larger nose radius; reduce feed |
| Burrs at exit | Chip breaks at exit; high feed + small nose radius | Chamfer/radius on exit; wiper insert; reduce feed |
| Chatter — radial force | Large nose radius; small entering angle | Entering angle near 90°; smaller nose radius; positive geometry |
| Chatter — tangential force | Negative geometry; hard chipbreaking; high feed | Positive insert; reduce feed; reduce speed |
| Chatter — instability | Long overhang; weak clamping; centre height | Shorter overhang; larger or dampened bar; correct centre height |
| Rapid flank / crater wear | Speed too high; grade too soft | Reduce vc; more wear-resistant grade |
| Built-up edge | Speed too low; no coating; blunt land | Increase vc; sharp coated edge; more oil in coolant |
| Breakage / chipping | Hard chipbreaking; unstable setup; brittle grade | Tougher grade; reduce feed; check fixture and runout |
| Notch wear at DOC line | Hardened or scaled surface at cut line | Vary ap; reduce speed; harder grade |
| Plastic deformation | Speed/feed too high; poor coolant | Reduce vc/fn; harder grade; improve coolant |
| Thermal cracks | Inconsistent coolant; intermittent cut | Stabilise coolant supply; reduce feed |

:::pro-tip
Across all processes the same stability rules apply: use the shortest possible overhang,
the largest possible tool diameter, correct cutter pitch in milling, climb milling where
possible, and dampened tools when overhang exceeds about 4× the tool diameter.
:::

**1. What four signals should you observe before changing any cutting data?**

<details>
<summary>Show Answer</summary>

The chip, the surface finish, the sound, and the tool (its wear pattern). Each one points
to a different root cause: chip control, edge condition, vibration, and data/grade.
</details>

**2. What are the three distinct causes of vibration (chatter)?**

<details>
<summary>Show Answer</summary>

High radial cutting force, high tangential cutting force, and instability (long overhang,
weak clamping, or wrong centre height). Each needs a different remedy.
</details>

**3. A long chip snarl keeps wrapping around the tool. What is the most likely fix?**

<details>
<summary>Show Answer</summary>

The feed is likely too low for the geometry. Increase the feed, choose a geometry with
better chip breaking, or apply high-precision coolant to control the chip.
</details>

**4. Your insert shows built-up edge on a steel job. What do you change?**

<details>
<summary>Show Answer</summary>

Increase the cutting speed, use a sharper coated edge, and raise the oil percentage in the
cutting fluid. Built-up edge forms when the edge is too cold and material welds onto it.
</details>

**5. A boring bar chatters badly on a deep bore. What stability remedies apply?**

<details>
<summary>Show Answer</summary>

Reduce the overhang, use the largest possible bar diameter, switch to a dampened or solid
carbide bar, extend the clamping length, and verify centre height.
</details>
