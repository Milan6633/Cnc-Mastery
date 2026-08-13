---
title: "Feeds & Speeds — The Most Important Calculations in Machining"
module: "02-shop-mathematics"
lessonNumber: 2
description: "Learn how to calculate spindle speed (RPM) and feed rate for any cutting tool — the math that keeps tools alive and parts accurate."
objectives:
  - "Calculate spindle RPM from cutting speed and tool diameter"
  - "Calculate feed rate from RPM, number of flutes, and chip load"
  - "Understand the relationship between SFM, RPM, and feed"
  - "Adjust feeds and speeds for different materials"
duration: "55 minutes"
difficulty: "beginner"
tags: ["math", "feeds", "speeds", "sfm", "rpm", "calculations"]
---

## Why Feeds & Speeds Matter

Every cutting operation comes down to two numbers:

- **Speed** — how fast the tool spins (RPM)
- **Feed** — how fast the tool moves through the material (IPM or mm/min)

Get them right: the tool cuts smoothly, the finish is good, tool life is long.

Get them wrong: you break tools, burn parts, make noise that empties the shop floor, or (worst case) crash into the workpiece.

:::key-concept
Speed controls **heat**. Feed controls **chip load** (how much material each cutting edge removes per revolution). Both must be balanced — too much speed with too little feed rubs instead of cutting and generates destructive heat.
:::

## The Two Core Formulas

### 1. Spindle Speed (RPM)

$$
\text{RPM} = \frac{\text{SFM} \times 12}{\pi \times D} = \frac{\text{SFM} \times 3.82}{D}
$$

Where:
- **SFM** = Surface Feet per Minute (cutting speed — from the tool or material manufacturer)
- **D** = cutter diameter in inches
- **3.82** = the simplified constant (12 ÷ π)

### 2. Feed Rate (IPM)

$$
\text{Feed (IPM)} = \text{RPM} \times \text{Flutes} \times \text{Chip Load}
$$

Where:
- **RPM** = spindle speed you just calculated
- **Flutes** = number of cutting edges (2, 3, 4, etc.)
- **Chip Load** = inches per tooth (from manufacturer recommendations)

## Step-by-Step Example — Milling

**Problem:** You need to face-mill aluminum (6061) with a 2-inch, 4-flute carbide end mill. The tool manufacturer recommends:
- SFM: 800
- Chip load: 0.004" per tooth

**Step 1: Calculate RPM**

```
RPM = (800 × 3.82) / 2.0
RPM = 3056 / 2.0
RPM = 1528
```

Round to the nearest available speed: **1500 RPM**

**Step 2: Calculate Feed Rate**

```
Feed = 1500 × 4 × 0.004
Feed = 24.0 IPM
```

Program this as `S1500 M03` and `F24.0`.

:::pro-tip
When in doubt, start at 75% of the calculated feed rate and increase from there. It's always safer to run slower and speed up than to snap a tool on the first cut. Listen to the cut — a smooth, consistent sound means the parameters are in the right range.
:::

## Step-by-Step Example — Turning

Turning uses the same RPM formula, but **D is the workpiece diameter** (not the tool), because the workpiece is what's spinning.

**Problem:** Turn 2-inch diameter mild steel with a carbide insert. Recommended SFM: 600. Chip load (feed per revolution): 0.008 IPR.

**Step 1: RPM**

```
RPM = (600 × 3.82) / 2.0
RPM = 1146
```

Round to **1150 RPM**.

**Step 2: Feed Rate**

On a lathe, feed is usually per revolution (IPR), not per minute:

```
Feed = 0.008 IPR
```

Program as `S1150 M03` and `G95 F0.008` (G95 = feed per revolution mode).

If you need inches per minute: `IPM = RPM × IPR = 1150 × 0.008 = 9.2 IPM`

## Common SFM Starting Points

These are rough starting values for carbide tooling. Always check the actual tool manufacturer's data.

| Material | SFM (Carbide) |
|----------|---------------|
| Aluminum (6061) | 600–1000 |
| Mild Steel (1018) | 400–600 |
| Stainless Steel (304) | 250–350 |
| Cast Iron | 300–500 |
| Titanium (Ti-6Al-4V) | 100–200 |
| Brass | 500–800 |
| Plastics | 500–1000 |

:::warning
These are guidelines, not rules. The actual optimal speed depends on: the specific tool (coating, geometry, grade), depth of cut, machine rigidity, coolant, and workholding. A flimsy setup needs to run slower than a rigid one.
:::

## The Metric Version

If working in metric:

$$
\text{RPM} = \frac{\text{Vc} \times 1000}{\pi \times D} \approx \frac{\text{Vc} \times 318}{D}
$$

Where:
- **Vc** = cutting speed in m/min
- **D** = diameter in mm
- Feed is in **mm/min** or **mm/rev**

Example: 10 mm end mill, Vc = 200 m/min:

```
RPM = (200 × 318) / 10 = 6360 RPM
```

## Self-Check Questions

**1. Calculate the RPM for a 0.500" drill in aluminum (SFM = 700).**

<details>
<summary>Show Answer</summary>

RPM = (700 × 3.82) / 0.500 = 2674 / 0.500 = **5348 RPM**

Round to 5000 or 5500 depending on your machine.
</details>

**2. You're running a 3-flute end mill at 4000 RPM with a chip load of 0.003". What feed rate do you program?**

<details>
<summary>Show Answer</summary>

Feed = 4000 × 3 × 0.003 = **36.0 IPM**
</details>

**3. A 50 mm diameter workpiece needs to be turned at 150 m/min. What RPM?**

<details>
<summary>Show Answer</summary>

RPM = (150 × 318) / 50 = 47700 / 50 = **954 RPM**
</details>
