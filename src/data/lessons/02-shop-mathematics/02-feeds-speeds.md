---
title: "Feeds & Speeds — The Most Important Calculations in Machining"
module: "02-shop-mathematics"
lessonNumber: 2
description: "Learn how to calculate spindle speed (RPM) and feed rate for any cutting tool — the math that keeps tools alive and parts accurate."
objectives:
  - "Calculate spindle RPM from cutting speed and tool diameter"
  - "Calculate feed rate from RPM, number of flutes, and chip load"
  - "Understand the relationship between cutting speed, RPM, and feed"
  - "Adjust feeds and speeds for different materials"
duration: "55 minutes"
difficulty: "beginner"
tags: ["math", "feeds", "speeds", "rpm", "calculations"]
---

## Why Feeds & Speeds Matter

Every cutting operation comes down to two numbers:

- **Speed** — how fast the tool spins (RPM)
- **Feed** — how fast the tool moves through the material (mm/min)

Get them right: the tool cuts smoothly, the finish is good, tool life is long.

Get them wrong: you break tools, burn parts, make noise that empties the shop floor, or (worst case) crash into the workpiece.

:::key-concept
Speed controls **heat**. Feed controls **chip load** (how much material each cutting edge removes per revolution). Both must be balanced — too much speed with too little feed rubs instead of cutting and generates destructive heat.
:::

## The Two Core Formulas

### 1. Spindle Speed (RPM)

$$
\text{RPM} = \frac{V_c \times 1000}{\pi \times D} \approx \frac{V_c \times 318}{D}
$$

Where:
- **Vc** = Cutting speed in m/min (from the tool or material manufacturer)
- **D** = cutter diameter in mm
- **318** = the simplified constant (1000 ÷ π)

### 2. Feed Rate (mm/min)

$$
\text{Feed (mm/min)} = \text{RPM} \times \text{Flutes} \times f_z
$$

Where:
- **RPM** = spindle speed you just calculated
- **Flutes** = number of cutting edges (2, 3, 4, etc.)
- **fz** = feed per tooth in mm (from manufacturer recommendations)

## Step-by-Step Example — Milling

**Problem:** You need to face-mill aluminum (6061) with a 50 mm, 4-flute carbide end mill. The tool manufacturer recommends:
- Vc: 250 m/min
- fz: 0.10 mm per tooth

**Step 1: Calculate RPM**

```
RPM = (250 × 318) / 50
RPM = 79500 / 50
RPM = 1592
```

Round to the nearest available speed: **1600 RPM**

**Step 2: Calculate Feed Rate**

```
Feed = 1600 × 4 × 0.10
Feed = 640 mm/min
```

Program this as `S1600 M03` and `F640`.

:::pro-tip
When in doubt, start at 75% of the calculated feed rate and increase from there. It's always safer to run slower and speed up than to snap a tool on the first cut. Listen to the cut — a smooth, consistent sound means the parameters are in the right range.
:::

## Step-by-Step Example — Turning

Turning uses the same RPM formula, but **D is the workpiece diameter** (not the tool), because the workpiece is what's spinning.

**Problem:** Turn a 50 mm diameter mild steel workpiece with a carbide insert. Recommended Vc: 200 m/min. Feed per revolution: 0.20 mm/rev.

**Step 1: RPM**

```
RPM = (200 × 318) / 50
RPM = 63600 / 50
RPM = 1272
```

Round to **1250 RPM**.

**Step 2: Feed Rate**

On a lathe, feed is usually per revolution (mm/rev), not per minute:

```
Feed = 0.20 mm/rev
```

Program as `S1250 M03` and `G95 F0.20` (G95 = feed per revolution mode).

If you need mm/min: `mm/min = RPM × mm/rev = 1250 × 0.20 = 250 mm/min`

## Common Cutting Speed Starting Points

These are rough starting values for carbide tooling. Always check the actual tool manufacturer's data.

| Material | Vc (m/min) — Carbide |
|----------|---------------------|
| Aluminium (6061) | 200–350 |
| Mild Steel (S235 / 1018) | 120–200 |
| Stainless Steel (1.4301 / 304) | 80–120 |
| Cast Iron | 100–160 |
| Titanium (Ti-6Al-4V) | 30–60 |
| Brass | 150–250 |
| Plastics | 150–300 |

:::warning
These are guidelines, not rules. The actual optimal speed depends on: the specific tool (coating, geometry, grade), depth of cut, machine rigidity, coolant, and workholding. A flimsy setup needs to run slower than a rigid one.
:::

## Imperial Conversion (For Reference)

If you encounter imperial feeds and speeds:

| Metric | Imperial | Conversion |
|--------|----------|-----------|
| Vc (m/min) | SFM (Surface Feet/Minute) | 1 m/min ≈ 3.28 SFM |
| Feed (mm/min) | IPM (Inches/Minute) | 1 mm/min = 0.0394 IPM |
| fz (mm/tooth) | IPT (Inches/Tooth) | 1 mm = 0.0394" |

The imperial RPM formula: `RPM = (SFM × 3.82) / D(inches)`

## Self-Check Questions

**1. Calculate the RPM for a 12 mm drill in aluminium (Vc = 200 m/min).**

<details>
<summary>Show Answer</summary>

RPM = (200 × 318) / 12 = 63600 / 12 = **5300 RPM**

Round to 5000 or 5500 depending on your machine.
</details>

**2. You're running a 3-flute end mill at 4000 RPM with fz = 0.08 mm/tooth. What feed rate do you program?**

<details>
<summary>Show Answer</summary>

Feed = 4000 × 3 × 0.08 = **960 mm/min**
</details>

**3. A 50 mm diameter workpiece needs to be turned at Vc = 150 m/min. What RPM?**

<details>
<summary>Show Answer</summary>

RPM = (150 × 318) / 50 = 47700 / 50 = **954 RPM**
</details>
