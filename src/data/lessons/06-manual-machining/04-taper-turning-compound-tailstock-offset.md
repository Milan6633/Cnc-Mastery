---
title: "Taper Turning: Compound Rest and Tailstock Offset"
module: "06-manual-machining"
lessonNumber: 4
description: "Cut a taper by swiveling the compound rest for steep, short tapers, or by offsetting the tailstock for shallow, long ones."
objectives:
  - "Explain how swiveling the compound rest produces a taper cut"
  - "Explain how offsetting the tailstock produces a taper cut"
  - "State which method suits a steep, short taper versus a shallow, long one"
  - "Explain why tailstock offset is calculated from the total length between centers, not just the tapered section"
difficulty: "intermediate"
duration: "45 minutes"
tags: ["manual-machining", "lathe", "taper-turning"]
---

## Two Ways to Cut a Taper by Hand

A straight turning pass holds a constant diameter because the cutting tool travels exactly parallel to the spindle axis. A taper is nothing more than that same tool path traveling at a controlled angle to the axis instead — and a manual lathe offers two standard ways to introduce that angle.

## The Compound Rest Method

The **compound rest**, covered as a lathe component earlier in this module, swivels to any angle and is fed by hand rather than by power. To cut a taper with it:

1. Calculate and set the compound rest's swivel angle to **half the taper's total included angle** — since the compound feeds along one side of the taper, the angle between the tool path and the spindle axis must equal the half-angle, not the full included angle.
2. Lock the swivel at that angle.
3. Feed the compound rest handwheel manually along its own travel to cut the taper — this method does not use power feed, since the compound's travel is short and the operator controls the cut directly.

:::key-concept
The compound rest is set to half the included taper angle, not the full angle, because the taper's total included angle is measured across both sides of the cone — the tool path along one side only needs to diverge from the axis by half of that.
:::

This method is well suited to **steep, short tapers** — the compound's limited travel length caps how long a taper it can cut in one setup, but it can cut virtually any angle, including very steep ones a tailstock offset couldn't reach.

## The Tailstock Offset Method

Instead of angling the tool path, the tailstock offset method angles the **workpiece's own axis** relative to the bed. Shifting the tailstock laterally on its base moves the tailstock center off the headstock spindle's centerline, so a part mounted between centers no longer rotates about an axis parallel to the ways — it rotates about a slightly angled axis instead. A normal, power-fed longitudinal turning pass, traveling perfectly parallel to the ways as always, then cuts a taper into the part simply because the part itself is tilted relative to that path.

:::warning
The tailstock offset amount must be calculated using the **total length between centers** — the full distance from the headstock center to the tailstock center — not just the length of the tapered section on the part. Using the tapered section's length alone produces the wrong taper angle, because the whole part pivots about the relationship between the two centers, not just the portion being cut.
:::

This method suits **shallow, long tapers**, since it can use normal power feed over the part's full length, but its usable angle range is limited — a shallow angle offsets the tailstock only slightly, while a steep taper would require an offset large enough to risk losing proper center-hole contact.

## Choosing Between Them

| | Compound rest | Tailstock offset |
|---|---|---|
| Feed | Manual only | Power feed possible |
| Best for | Steep, short tapers | Shallow, long tapers |
| Angle range | Very wide, including steep angles | Limited to shallow angles |
| Setup | Swivel and lock the compound | Physically shift the tailstock, recalculate for each job |

## A Third Method: The Taper Attachment

Some lathes are equipped with a bolt-on **taper attachment** — a guide bar mounted behind the machine, set to the desired taper angle, that steers the cross-slide through a linkage as the carriage travels under normal power feed. This combines the taper attachment's ability to cut a taper over a longer length with power feed, without needing to physically offset the tailstock — worth knowing exists, even if not every shop lathe is equipped with one.

## Self-Check Questions

**1. Why is the compound rest swiveled to half the taper's included angle rather than the full angle?**

<details>
<summary>Show Answer</summary>

The included angle spans both sides of the cone, but the compound rest's tool path only needs to diverge from the axis along one side — that divergence equals half the included angle.
</details>

**2. How does offsetting the tailstock produce a taper without angling the tool path itself?**

<details>
<summary>Show Answer</summary>

It shifts the tailstock center off the headstock spindle's centerline, tilting the part's own rotational axis relative to the ways. A normal turning pass, traveling parallel to the ways as always, then cuts a taper simply because the part itself is tilted.
</details>

**3. Why must tailstock offset be calculated from the total length between centers rather than just the tapered section's length?**

<details>
<summary>Show Answer</summary>

The entire part pivots about the relationship between the headstock and tailstock centers, not just the tapered portion — using only the tapered section's length produces the wrong taper angle.
</details>

**4. Which taper turning method would you choose for a long, shallow taper that needs power feed for a consistent finish?**

<details>
<summary>Show Answer</summary>

The tailstock offset method — it allows normal power feed over the part's full length and suits shallow, long tapers, unlike the compound rest's manual-only, shorter-travel feed.
</details>

**5. What does a taper attachment offer that neither the compound rest nor tailstock offset methods provide on their own?**

<details>
<summary>Show Answer</summary>

It cuts a taper under power feed over a longer length, without requiring the tailstock to be physically offset — combining the power-feed advantage with a wider practical taper length.
</details>
