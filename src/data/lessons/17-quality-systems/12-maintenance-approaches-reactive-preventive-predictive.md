---
title: "Approaches to Maintenance: Reactive, Preventive, Predictive"
module: "17-quality-systems"
lessonNumber: 12
description: "Match reactive, preventive, and predictive maintenance strategies to each component's actual criticality and cost, rather than applying one approach uniformly."
objectives:
  - "Define reactive, preventive, and predictive maintenance and how each triggers action"
  - "Explain the tradeoffs each approach makes between cost, downtime risk, and wasted service life"
  - "Explain how predictive maintenance uses the monitoring methods covered elsewhere in this module"
  - "Match an appropriate maintenance approach to a component based on its cost and criticality"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["quality", "maintenance", "reactive-maintenance", "predictive-maintenance"]
---

## Three Ways to Decide When Maintenance Happens

Every maintenance strategy ultimately answers the same question — when should a specific maintenance action actually happen — through one of three fundamentally different approaches, each with real tradeoffs.

## Reactive Maintenance

**Reactive maintenance** performs a repair only after a component has actually failed. It has the lowest overhead for a component genuinely tolerant of running to failure — no scheduled downtime, no monitoring investment — but it accepts real unplanned downtime when the failure does occur, and often a higher total cost, since an unexpected failure can cause collateral damage to surrounding components (a failed bearing damaging the spindle housing it sits in, for example) that a planned intervention would have avoided.

## Preventive Maintenance

**Preventive maintenance** — covered in this module's earlier lesson on scheduled lubrication, filters, and way wipers — performs maintenance at fixed calendar or usage intervals, regardless of a component's actual current condition. This substantially reduces unplanned failure risk compared to reactive maintenance, but it has its own tradeoff: a component might be serviced or replaced while it still had genuine useful life remaining (wasted cost), or, less commonly, a problem might develop faster than the scheduled interval anticipated (missed risk).

## Predictive Maintenance

**Predictive maintenance** uses actual, ongoing condition monitoring data — the vibration analysis, temperature trending, and other techniques covered in this module's spindle health monitoring lesson — to predict when a component is genuinely approaching failure, and schedules maintenance based on real, observed condition rather than a fixed calendar interval.

:::key-concept
Predictive maintenance aims to capture preventive maintenance's core benefit — avoiding unplanned failure — without preventive maintenance's waste of servicing components that don't actually need it yet. It requires real monitoring infrastructure and data to work, which is exactly why it's typically reserved for a machine's most critical, expensive components rather than applied universally.
:::

## Matching the Approach to the Component

Not every component justifies the same maintenance strategy, and choosing well means weighing each component's cost and criticality:

- **Reactive** suits a cheap, easily replaced component where running to failure genuinely costs less than the overhead of monitoring or scheduling it — a low-cost consumable part with no meaningful collateral-damage risk if it fails.
- **Preventive** suits routine, predictable wear items — the lubrication, filters, and way wipers covered earlier in this module — where a fixed schedule reliably captures most of the benefit without needing dedicated monitoring infrastructure.
- **Predictive** suits critical, expensive components — the spindle being the clearest example covered in this module — where the cost of monitoring infrastructure is genuinely justified by the cost and disruption a catastrophic failure would cause.

:::pro-tip
A single machine typically uses all three approaches simultaneously, applied component by component — reactive for cheap, low-consequence parts; preventive for routine, predictable wear items; predictive for the few components (like the spindle) whose failure cost genuinely justifies dedicated monitoring. Treating "which maintenance approach" as one shop-wide policy rather than a per-component decision misses real opportunities to allocate maintenance effort where it actually matters most.
:::

## Self-Check Questions

**1. What triggers action under reactive maintenance, and what is its main tradeoff?**

<details>
<summary>Show Answer</summary>

A component is repaired only after it actually fails. It has the lowest overhead but accepts unplanned downtime and the risk of collateral damage from an unexpected failure.
</details>

**2. What is the main waste risk of preventive maintenance?**

<details>
<summary>Show Answer</summary>

A component may be serviced or replaced on a fixed schedule while it still had genuine useful life remaining, since the schedule doesn't account for the component's actual current condition.
</details>

**3. How does predictive maintenance decide when a component needs service?**

<details>
<summary>Show Answer</summary>

Using ongoing condition monitoring data — like vibration and temperature trends — to predict when a component is actually approaching failure, rather than relying on a fixed calendar interval.
</details>

**4. Why is predictive maintenance typically reserved for a machine's most critical components rather than applied to everything?**

<details>
<summary>Show Answer</summary>

It requires real monitoring infrastructure and data to work, and that investment is only justified where the cost and disruption of an unexpected failure — like a spindle failure — is high enough to warrant it.
</details>

**5. Why might a single machine reasonably use all three maintenance approaches at once, applied to different components?**

<details>
<summary>Show Answer</summary>

Each component's cost and criticality differ — cheap, low-consequence parts suit reactive maintenance, routine wear items suit preventive maintenance, and critical, expensive components like the spindle justify predictive monitoring's added investment.
</details>
