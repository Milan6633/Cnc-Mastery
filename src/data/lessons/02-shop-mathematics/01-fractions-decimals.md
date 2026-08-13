---
title: "Fractions, Decimals & Unit Conversions for Machinists"
module: "02-shop-mathematics"
lessonNumber: 1
description: "Master the number conversions every machinist needs — fractions to decimals, inch to millimeter, and reading a decimal-equivalent chart."
objectives:
  - "Convert any fraction to its decimal equivalent"
  - "Convert between inch and metric dimensions"
  - "Use a decimal-equivalent chart quickly"
  - "Round dimensions to practical machining precision"
duration: "40 minutes"
difficulty: "beginner"
tags: ["math", "fractions", "decimals", "conversion", "metric"]
---

## Why This Matters

CNC machines work in **decimals** — when you type `X1.375`, the machine moves exactly 1.375 inches. But blueprints, drill charts, and shop conversation are full of fractions: "drill a 3/8 hole," "leave a 1/16 finish stock."

If you can't convert between fractions and decimals in your head (or at least quickly on paper), you'll constantly be hunting for a chart or pulling out your phone — and that slows everything down.

## Fractions → Decimals

The rule is simple: **divide the top number by the bottom number.**

| Fraction | Division | Decimal |
|----------|----------|---------|
| 1/2 | 1 ÷ 2 | 0.500 |
| 1/4 | 1 ÷ 4 | 0.250 |
| 3/8 | 3 ÷ 8 | 0.375 |
| 7/16 | 7 ÷ 16 | 0.4375 |
| 15/32 | 15 ÷ 32 | 0.46875 |
| 63/64 | 63 ÷ 64 | 0.984375 |

:::key-concept
Memorize the eighths: 1/8 = 0.125. Every other common fraction is a multiple of this. For example, 3/8 = 3 × 0.125 = 0.375. Once you know the eighths, you can figure out sixteenths (half of an eighth = 0.0625) and thirty-seconds (0.03125) just as fast.
:::

### The "Big 12" — Decimals Worth Memorizing

These come up so often you should know them cold:

| Fraction | Decimal | Fraction | Decimal |
|----------|---------|----------|---------|
| 1/64 | .015625 | 1/8 | .125 |
| 1/32 | .03125 | 3/16 | .1875 |
| 1/16 | .0625 | 1/4 | .250 |
| 3/32 | .09375 | 3/8 | .375 |
| 1/2 | .500 | 5/8 | .625 |
| 3/4 | .750 | 7/8 | .875 |

:::pro-tip
Tape a decimal-equivalent chart inside your toolbox lid. Even experienced machinists use one — it's faster than dividing 47/64 in your head at 6 AM.
:::

## Inch ↔ Metric Conversion

The conversion factor: **1 inch = 25.4 mm exactly.**

- **Inch → Metric:** multiply by 25.4
- **Metric → Inch:** divide by 25.4

### Examples

| Problem | Calculation | Result |
|---------|-------------|--------|
| 0.500" to mm | 0.500 × 25.4 | 12.70 mm |
| 1.375" to mm | 1.375 × 25.4 | 34.925 mm |
| 10 mm to inch | 10 ÷ 25.4 | 0.3937" |
| 6.35 mm to inch | 6.35 ÷ 25.4 | 0.250" (= 1/4") |

:::warning
Never assume which unit system a blueprint uses. Always check the title block — it will say "DIMENSIONS IN INCHES" or "DIMENSIONS IN MILLIMETERS." Loading an inch program on a metric machine (or vice versa) will crash the tool into the part or the table.
:::

## Practical Precision

CNC machines typically resolve to **0.0001"** (one ten-thousandth of an inch) or **0.001 mm**. But that doesn't mean every dimension needs four decimal places.

| Application | Typical Tolerance | Decimal Places |
|-------------|-------------------|---------------|
| Rough cuts | ±0.010" | 3 |
| General machining | ±0.005" | 3 |
| Close-tolerance fits | ±0.001" | 4 |
| Precision bores/grinding | ±0.0005" | 4 |

When converting fractions for CNC input, round to 4 decimal places: 15/32 = 0.46875 → type `0.4688` (or `0.46875` — the control accepts it either way).

## Self-Check Questions

**1. Convert 11/16 to a decimal.**

<details>
<summary>Show Answer</summary>

11 ÷ 16 = **0.6875**

Quick way: 11/16 = 8/16 + 3/16 = 0.500 + 0.1875 = 0.6875
</details>

**2. Convert 2.000 inches to millimeters.**

<details>
<summary>Show Answer</summary>

2.000 × 25.4 = **50.80 mm**
</details>

**3. A blueprint calls for a 19.05 mm hole. What drill size in inches should you use?**

<details>
<summary>Show Answer</summary>

19.05 ÷ 25.4 = **0.750"** — that's exactly 3/4 inch.
</details>
