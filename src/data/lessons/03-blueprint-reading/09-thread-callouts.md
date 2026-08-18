---
title: "Thread Callouts — Metric and Imperial"
module: "03-blueprint-reading"
lessonNumber: 9
description: "Decode M-series metric and UNC/UNF imperial thread designations, plus classes, depths, and left-hand threads."
objectives:
  - "Read metric thread callouts (M10 × 1.5)"
  - "Read imperial thread callouts (1/4-20 UNC)"
  - "Distinguish coarse vs fine, right-hand vs left-hand"
  - "Interpret tapped hole depth and drill depth"
duration: "40 minutes"
difficulty: "beginner"
tags: ["blueprint", "threads", "metric", "imperial", "tapping"]
---

## Threads on Every Part

Threads are one of the most common features on machined parts — bolt holes, studs, adjustment screws, fittings. A thread callout looks cryptic at first, but it's a precise recipe: **what diameter, what pitch, what class, how deep**.

## Thread Anatomy

Every thread has:

- **Major diameter** — the largest diameter (crest to crest)
- **Minor diameter** — the smallest diameter (root to root)
- **Pitch** — the distance from one crest to the next (metric) or threads per inch (imperial)
- **Crest** — the top of the thread
- **Root** — the bottom of the groove between threads
- **Thread angle** — 60° for both metric (ISO) and Unified (UNC/UNF) threads

```text
   crest  /\  /\  /\  /\     <- major diameter
         /  \/  \/  \/  \
        /    \/  \/  \/  \   <- minor diameter
        |<-->|  pitch
```

## Metric Thread Callouts — M-Series

Metric thread callouts follow a simple format:

**M10 × 1.5**

- **M** = metric thread (ISO)
- **10** = nominal (major) diameter in **mm**
- **1.5** = pitch in **mm** (distance between crests)
- **LH** if left-hand (right-hand is the default and omitted)

**Coarse vs fine:** if the pitch is omitted (just "M10"), the **coarse** pitch is assumed (M10 coarse = 1.5 mm pitch). Fine pitches are always written out (M10 × 1.25, M10 × 1.0, M10 × 0.75).

:::key-concept
M10 × 1.5 means: metric thread, 10 mm major diameter, 1.5 mm pitch, right-hand. To machine it, you tap/drill a hole that fits the thread and cut (or tap) the 1.5 mm pitch profile.
:::

## Imperial Thread Callouts — UNC and UNF

Imperial callouts use threads per inch (TPI) instead of pitch:

**1/4-20 UNC**

- **1/4** = nominal diameter in **inches** (0.250")
- **20** = threads per inch (TPI)
- **UNC** = Unified National **Coarse** series
- **UNF** = Unified National **Fine** series
- **LH** = left-hand (default is right-hand)

Common sizes: 1/4-20 UNC, 5/16-18 UNC, 3/8-16 UNC, 1/2-13 UNC. The fine series: 1/4-28 UNF, 3/8-24 UNF, etc.

| Series | Pitch style | When used |
|---|---|---|
| UNC (coarse) | Fewer TPI | General fastening, quick assembly |
| UNF (fine) | More TPI | Vibration resistance, finer adjustment |
| Metric coarse | Default for M | General fastening |
| Metric fine | Explicit pitch | Precision, thin walls, adjustment |

## Thread Class and Fit

The callout may include a **class** — the tolerance of the thread fit:

- **Internal threads (holes):** 6H (most common)
- **External threads (shafts/studs):** 6g (most common)
- Imperial: classes 1A/1B (loose), 2A/2B (general), 3A/3B (precision)

**M10 × 1.5 - 6H** means: metric 10, 1.5 pitch, internal thread tolerance class 6H. For everyday work, 6H/6g is the standard general-purpose fit.

:::pro-tip
You rarely need to look up class tables on the floor — 6H internal and 6g external are the defaults. Only special prints (locking threads, press-in studs) use different classes. If you see one, check the thread table or ask the programmer.
:::

## Tapped Hole Callouts — Diameter, Class, Depth

Tapped holes add depth info:

- **M10 × 1.5 - 6H THRU** — tapped all the way through
- **M10 × 1.5 - 6H × 20 DP** — tapped hole, 20 mm deep (thread depth)
- **M10 × 1.5 × 24 DP** — hole drilled 24 mm deep (sometimes shown as drill depth)

:::warning
"Tapped depth" and "drilled depth" are different numbers. A tapped depth of 20 mm usually needs a drill depth of ~24–26 mm (threads need a few extra mm at the bottom). Read which depth the callout gives, and always leave room for the tap's chamfer.
:::

## Left-Hand Threads

**LH** at the end of a callout (M10 × 1.5 LH, 1/4-20 UNC LH) means a left-hand thread — it tightens counterclockwise. Left-hand threads are used where right-hand rotation would loosen a fastener (spindles, rotating shafts). They are less common, so always check.

## Reading Practice

| Callout | Meaning |
|---|---|
| M8 | Metric 8 mm, coarse pitch (1.25), right-hand |
| M12 × 1.5 - 6H | Metric 12, 1.5 mm pitch, internal 6H |
| 3/8-16 UNC | 3/8" diameter, 16 TPI, coarse |
| 1/2-20 UNF - 2B | 1/2" diameter, 20 TPI, fine, class 2B internal |
| M6 × 0.75 LH | Metric 6, fine 0.75 pitch, left-hand |

## Self-Check Questions

**1. What does M10 × 1.5 mean?**

<details>
<summary>Show Answer</summary>

Metric thread with a 10 mm nominal (major) diameter and a 1.5 mm pitch, right-hand by default. The 1.5 is the distance between thread crests in millimeters.
</details>

**2. What does 1/4-20 UNC mean?**

<details>
<summary>Show Answer</summary>

An imperial Unified National Coarse thread: 1/4 inch nominal diameter and 20 threads per inch, right-hand.
</details>

**3. What is the difference between a tapped depth and a drilled depth on a blind tapped hole?**

<details>
<summary>Show Answer</summary>

Tapped depth is how deep the threads are cut. Drilled depth is how deep the hole is drilled. The drilled hole must be deeper than the tapped depth (typically 3–5 mm) so the tap has room to bottom out without breaking.
</details>
