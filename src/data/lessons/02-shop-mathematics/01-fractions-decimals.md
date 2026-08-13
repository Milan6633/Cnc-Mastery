---
title: "Decimals, Millimeters & Unit Conversions for Machinists"
module: "02-shop-mathematics"
lessonNumber: 1
description: "Master the number conversions every machinist needs — metric dimensions, inch-to-millimeter conversion, and practical precision for CNC programming."
objectives:
  - "Convert between millimeters and inches confidently"
  - "Convert imperial fractions to decimals (for reading older drawings)"
  - "Understand practical machining precision in metric"
  - "Round dimensions to appropriate CNC resolution"
duration: "40 minutes"
difficulty: "beginner"
tags: ["math", "metric", "decimals", "conversion", "millimeters"]
---

## Why This Matters

CNC machines work in **decimals** — when you type `X34.925`, the machine moves exactly 34.925 mm. In Europe, most shops and blueprints use the **metric system (millimeters)**, but you'll still encounter imperial (inch) drawings from American manufacturers, older machines, and international customers.

Being fluent in both systems — with metric as your primary language — makes you a more capable machinist.

## Metric System Basics

The metric system is straightforward for machining:

| Unit | Symbol | Relationship |
|------|--------|-------------|
| Meter | m | Base unit |
| Millimeter | mm | 1 m = 1000 mm |
| Micrometer (micron) | µm | 1 mm = 1000 µm |

:::key-concept
In CNC machining, **millimeters (mm)** are the standard unit. Tolerances are expressed in mm or µm. A typical CNC machine resolves to **0.001 mm** (1 µm). When you see G21 in a program, the machine is in metric mode.
:::

## Metric ↔ Inch Conversion

The conversion factor: **1 inch = 25.4 mm exactly.**

- **Inch → Metric:** multiply by 25.4
- **Metric → Inch:** divide by 25.4

### Common Conversions

| Metric (mm) | Imperial (inch) | Note |
|-------------|----------------|------|
| 1.0 mm | 0.0394" | About the thickness of a credit card |
| 3.175 mm | 0.125" (1/8") | Common small end mill |
| 6.35 mm | 0.250" (1/4") | Common end mill size |
| 10.0 mm | 0.3937" | Standard metric end mill |
| 12.7 mm | 0.500" (1/2") | Common drill/end mill |
| 19.05 mm | 0.750" (3/4") | — |
| 25.4 mm | 1.000" | Exactly 1 inch |
| 50.8 mm | 2.000" | — |

:::pro-tip
Quick mental math: 1 mm ≈ 0.040". So 10 mm ≈ 0.400", 25 mm ≈ 1". For rough estimates, just multiply mm by 0.04 to get inches, or multiply inches by 25 to get mm. Good enough for quick sanity checks.
:::

## Practical Precision in Metric

CNC machines typically resolve to **0.001 mm** (one micrometer). But not every dimension needs that precision.

| Application | Typical Tolerance | Example |
|-------------|-------------------|---------|
| Rough cuts | ±0.25 mm | Removing stock quickly |
| General machining | ±0.1 mm | Most features on a part |
| Close-tolerance fits | ±0.025 mm | Bearing bores, shaft diameters |
| Precision bores/grinding | ±0.01 mm | High-precision assemblies |

:::warning
Never assume which unit system a blueprint uses. Always check the title block — it will say "DIMENSIONS IN MILLIMETERS" or "DIMENSIONS IN INCHES." Loading a metric program on an inch machine (or vice versa) will crash the tool into the part or the table. In G-code: **G21 = metric**, **G20 = inch**.
:::

## Reading Imperial Fractions (Still Important)

Many older blueprints, American tooling catalogs, and drill charts still use fractions. The rule: **divide the top number by the bottom number**, then multiply by 25.4 for mm.

| Fraction | Decimal (inch) | Metric (mm) |
|----------|---------------|-------------|
| 1/8 | 0.125" | 3.175 mm |
| 1/4 | 0.250" | 6.350 mm |
| 3/8 | 0.375" | 9.525 mm |
| 1/2 | 0.500" | 12.700 mm |
| 5/8 | 0.625" | 15.875 mm |
| 3/4 | 0.750" | 19.050 mm |
| 7/8 | 0.875" | 22.225 mm |

:::key-concept
When working with mixed systems, always convert to your machine's active unit first. If your machine runs G21 (metric), convert all inch dimensions to mm before programming. Never mix units in a program.
:::

## Self-Check Questions

**1. Convert 2 inches to millimeters.**

<details>
<summary>Show Answer</summary>

2.000 × 25.4 = **50.80 mm**
</details>

**2. A blueprint in inches calls for a 0.375" slot. What width do you program in metric?**

<details>
<summary>Show Answer</summary>

0.375 × 25.4 = **9.525 mm**

(This is 3/8 inch — a very common size.)
</details>

**3. Your tolerance is ±0.025 mm. Is this a rough cut, general machining, or close-tolerance fit?**

<details>
<summary>Show Answer</summary>

**Close-tolerance fit.** ±0.025 mm is about ±0.001" — typical for bearing bores, shaft diameters, and press-fit features.
</details>
