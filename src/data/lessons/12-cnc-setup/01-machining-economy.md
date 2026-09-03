---
title: "Machining Economy — Cost per Component & Tool Life"
module: "12-cnc-setup"
lessonNumber: 1
description: "Learn how cutting speed, feed, depth of cut, and tool life together determine the total cost per machined component."
objectives:
  - "Explain how the three cutting parameters affect tool life and productivity."
  - "Break down the total cost per component into machining, tool, and tool-change costs."
  - "Contrast the economic cutting speed with the maximum-production cutting speed."
  - "Calculate and compare the cost per component for two different cutting speeds."
duration: "55 minutes"
difficulty: "advanced"
tags: ["setup", "optimization", "economics", "tool-life"]
---

## Why machining economy matters

Every part that comes off a machine carries a price tag built from time, tooling, and
overhead, and a shop only stays competitive if it keeps shrinking that price tag faster
than its costs creep up. The lever for doing that is productivity — the ratio of what the
machine produces to what it consumes to produce it. The machinist who
understands how cutting data drives cost can deliver more parts for the same spend.

:::key-concept
Total cost per component is the sum of three contributions: **machining cost**
(machine time), **tool cost** (the consumed cutting edge), and **tool-changing cost**
(the time and labour to index or replace the insert). Cutting speed moves all three at
once, which is why it is the dominant economic lever.
:::

## Where the money goes

Costs split into fixed costs (present even when the machine is idle) and variable costs
(incurred only during production).

| Cost type | Share (typical) | Examples |
|---|---|---|
| Fixed | 27% | Machine and tool holders |
| Fixed | 31% | Labour |
| Fixed | 22% | Buildings, administration |
| Variable | 17% | Workpiece material |
| Variable | 3% | Cutting tools and consumables |

Notice that cutting tools themselves are only about 3% of cost. The biggest levers are
the fixed machine and labour costs, which is why using the machine faster — not buying
cheaper inserts — usually delivers the largest saving.

## The three parameters and tool life

Depth of cut, feed, and cutting speed do not affect tool life equally.

- **Depth of cut (ap)** has the smallest effect on tool life.
- **Feed (fn)** has a larger effect, and the largest effect on productivity.
- **Cutting speed (vc)** has by far the largest effect on insert tool life.

The practical consequence: to maximise productivity, optimise in the order **ap first,
then fn, then vc**. Raising ap and fn removes more metal per minute with comparatively
little penalty to tool life; raising vc is the fastest way to burn an edge.

## The total cost per component

Consider what happens as cutting speed rises:

- More parts are produced per hour, so the **machine (fixed) cost per part falls**.
- More tools are consumed, so the **tool cost per part rises**.
- More time is spent changing tools, so the **tool-changing cost per part rises**.

Adding the three curves together gives the total production cost. As speed increases the
parts-per-hour climb, until a point is reached where a disproportionate amount of time is
spent changing tools and the production rate starts to fall.

:::key-concept
Plot total cost against cutting speed and it bottoms out at one particular speed — that
minimum is the **economic cutting speed**. Plot output rate instead, and it peaks at a
higher speed still — that peak is the **maximum-production speed**. Because tool wear
accelerates faster than cost drops as speed climbs, the economic speed always sits below
the maximum-production speed. Machinists sometimes call the window between them the
"high-efficiency range" — a professional operation should aim to run somewhere in that band.
:::

## Economic vs maximum-production speed

- **Maximum-production speed** produces parts as fast as possible, but the extra speed is
  paid for in tool changes. Each small gain in cutting time costs a large loss in tool life.
- **Economic speed** accepts a slightly longer cut in exchange for far fewer tool changes,
  giving the lowest total cost per part.

:::warning
Running at or above maximum-production speed is rarely economical. A modest reduction in
cutting speed, back into that efficient operating band, can cut total cost per part with
only a small increase in cutting time.
:::

## Tool life correction factors

Recommended cutting data is published at a base of **15 minutes of tool life**. To aim for
a different tool life, multiply the recommended speed by the factor below.

| Desired tool life (min) | Correction factor |
|---|---|
| 10 | 1.11 |
| 15 | 1.0 |
| 20 | 0.93 |
| 25 | 0.88 |
| 30 | 0.84 |
| 45 | 0.75 |
| 60 | 0.70 |

Example from the source: a recommended speed of 225 m/min multiplied by 0.93 (for 20 min
tool life) gives 209 m/min. To gain metal removal instead, move the other way: 225 m/min ×
1.11 (for 10 min) gives 250 m/min.

The relationship is a **Taylor-type tool life law**. For a typical exponent n ≈ 0.25–0.30
(carbide in steel), doubling cutting speed shortens tool life by roughly **10–16 times**.
Small speed increases therefore carry a large tool-life penalty.

## Worked example: two cutting speeds compared

Turn a Ø100 mm bar, one pass, L = 100 mm, ap = 2 mm, fn = 0.25 mm/rev.

- Machine hour rate: €60/h = **€1.00/min**
- Insert cost: **€6 per cutting edge**
- Tool-change time: **1.0 min**
- Tool life exponent: **n = 0.25** (typical)
- Reference: vc = 200 m/min gives **T = 15 min**

Tool life at any speed: **T₂ = T₁ × (vc₁ / vc₂)^(1/n)**

### Option A — vc = 200 m/min

1. Spindle speed: n = vc × 1000 / (π × Dm) = 200 × 1000 / (π × 100) = **637 rpm**
2. Cutting time: tc = L / (fn × n) = 100 / (0.25 × 637) = **0.63 min**
3. Tool life T = 15 min, so parts per edge N = 15 / 0.63 = **23.8**
4. Cost per part:
   - Machining: 0.63 × €1.00 = **€0.63**
   - Tool: €6 / 23.8 = **€0.25**
   - Tool change: (1.0 × €1.00) / 23.8 = **€0.04**
   - **Total ≈ €0.92**

### Option B — vc = 280 m/min

1. Spindle speed: n = 280 × 1000 / (π × 100) = **891 rpm**
2. Cutting time: tc = 100 / (0.25 × 891) = **0.45 min**
3. Tool life: T = 15 × (200 / 280)^4 = **3.9 min**; parts per edge N = 3.9 / 0.45 = **8.7**
4. Cost per part:
   - Machining: 0.45 × €1.00 = **€0.45**
   - Tool: €6 / 8.7 = **€0.69**
   - Tool change: (1.0 × €1.00) / 8.7 = **€0.11**
   - **Total ≈ €1.25**

### Result

| Speed | Cutting time | Tool life | Cost per part |
|---|---|---|---|
| 200 m/min | 0.63 min | 15 min | **€0.92** |
| 280 m/min | 0.45 min | 3.9 min | **€1.25** |

The faster cut saves only 0.18 min but shortens tool life from 15 min to 3.9 min and raises
cost per part by about a third. The slower speed is the economical choice.

:::pro-tip
Test this on your own jobs: compute parts per edge from tool life and cutting time, then
cost each option fully. A spreadsheet makes the trade-off visible in seconds.
:::

## The three levers compared

From the source cost example (a shop spending €10,000 to make 1,000 parts, €10 per part):

| Action | Effect on cost per part |
|---|---|
| 30% lower insert price | About 1% saving |
| 50% longer tool life | About 1% saving |
| 20% higher cutting data | About 15% saving |

Insert price and tool life are easy to measure, but they barely move the total. Cutting
data — doing more machining in the same production time — is the lever that pays.

**1. Which parameter has the largest effect on tool life?**

<details>
<summary>Show Answer</summary>

Cutting speed (vc). Depth of cut has the smallest effect, and feed sits in between while
also having the largest effect on productivity.
</details>

**2. What are the three components of total cost per machined part?**

<details>
<summary>Show Answer</summary>

Machining cost (machine time), tool cost (the consumed cutting edge), and tool-changing
cost (time and labour to index or replace the insert).
</details>

**3. Why is the economic cutting speed lower than the maximum-production speed?**

<details>
<summary>Show Answer</summary>

At maximum-production speed the time saved per part is outweighed by the extra tool wear
and tool-change time, so total cost rises. The economic speed trades a slightly longer cut
for far fewer tool changes and the lowest total cost per part.
</details>

**4. Using the worked example, why does 280 m/min cost more than 200 m/min despite cutting faster?**

<details>
<summary>Show Answer</summary>

Raising the speed to 280 m/min shortens tool life from 15 min to 3.9 min, cutting parts
per edge from 23.8 to 8.7. Tool cost climbs from €0.25 to €0.69 (+€0.44) and tool-change
cost climbs from €0.04 to €0.11 (+€0.07) — a €0.51 combined increase — which exceeds the
€0.18 saved on machining time, so total cost rises from €0.92 to €1.25 per part.
</details>
