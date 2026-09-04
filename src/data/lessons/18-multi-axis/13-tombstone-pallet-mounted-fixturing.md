---
title: "Tombstone / Pallet-Mounted Fixturing"
module: "18-multi-axis"
lessonNumber: 13
description: "Present many parts or faces to a multi-axis spindle from one tombstone, and load the next job on a swappable pallet while the machine keeps running the current one."
objectives:
  - "Explain how a tombstone's role extends from horizontal machining centers into multi-axis machines"
  - "Explain what a pallet-mounted fixturing workflow accomplishes for machine uptime"
  - "Explain what a standardized pallet interface enables for repeatability"
  - "Connect pallet systems to the unattended-production theme covered in the CAM turning module"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["multi-axis", "5-axis", "workholding", "tombstone", "pallet-fixturing"]
---

## Tombstones, Extended Into Multi-Axis Work

The workholding module covered tombstones on horizontal machining centers — tall, multi-sided fixture plates presenting several parts or faces to the spindle in sequence as the table indexes, keeping the machine cutting while an operator loads or unloads the opposite face. Mounted on a multi-axis machine's rotary trunnion table, a tombstone extends this same idea further: rather than indexing between a fixed set of faces alone, the spindle (or head) can also continuously reorient relative to the tombstone's parts, reaching even more features and angles from the same single tombstone setup than a horizontal-machining-center tombstone's simple indexing alone would allow.

## Pallet-Mounted Fixturing

**Pallet-mounted fixturing** takes workholding a step further: parts (or an entire tombstone) are pre-loaded onto a standardized **pallet** offline, away from the running machine, and that pallet is then swapped onto the machine's table or trunnion quickly once the current job finishes.

:::key-concept
The core value of pallet-mounted fixturing is decoupling loading time from machine cutting time. While the machine is actively cutting the current pallet's parts, the next pallet can be loaded, fixtured, and prepared entirely offline — so the machine's downtime between jobs shrinks to just the time it takes to swap pallets, not the full time it would otherwise take to load and set up the next job from scratch.
:::

## Standardized, Repeatable Interfaces

Pallet systems typically use a standardized, precision locating and clamping interface, so a pallet lands in **exactly the same position** on the machine every time it's loaded — directly connecting to the zero-point clamping systems covered in the next lesson, which are frequently the actual mechanism providing this repeatable pallet interface in practice.

## Enabling Unattended Production

Pallet-mounted fixturing is a major enabler of genuinely unattended, lights-out multi-axis production, echoing the same unattended-production theme covered for sub-spindle transfer in the CAM turning module: a new pallet, already loaded and ready, can be swapped in automatically (or by an operator during a brief pause) the moment the current pallet's job finishes, letting the machine continue running productively with minimal idle time between jobs, potentially across an entire unattended shift.

:::pro-tip
The productivity case for investing in pallet-mounted fixturing depends heavily on how much of a job's total cycle is actually loading and setup time versus cutting time — a job with long cutting cycles and quick loading sees relatively little benefit from pallet swapping, while a job with many short cutting cycles and comparatively long, careful fixturing time can see a dramatic uptime improvement from decoupling those two activities.
:::

## Self-Check Questions

**1. How does mounting a tombstone on a multi-axis machine's rotary table extend what a horizontal-machining-center tombstone already does?**

<details>
<summary>Show Answer</summary>

Beyond simple indexing between fixed faces, the spindle or head can also continuously reorient relative to the tombstone's parts, reaching even more features and angles from the same single setup.
</details>

**2. What is the core value pallet-mounted fixturing provides?**

<details>
<summary>Show Answer</summary>

It decouples loading time from machine cutting time — the next pallet can be prepared offline while the current one is still being machined, shrinking machine downtime to just the pallet-swap time.
</details>

**3. Why does a standardized pallet interface need to be highly repeatable?**

<details>
<summary>Show Answer</summary>

So a pallet lands in exactly the same position every time it's loaded, without requiring the machine's program to account for position variation between different pallet loads.
</details>

**4. How does pallet-mounted fixturing relate to the unattended-production theme covered for sub-spindle transfer in the CAM turning module?**

<details>
<summary>Show Answer</summary>

Both enable genuinely unattended production by removing the need for an operator to intervene between jobs — a new pallet, already prepared, can be swapped in with minimal idle time, the same way sub-spindle transfer completes a part without operator intervention.
</details>

**5. What job characteristic determines how much benefit pallet-mounted fixturing actually provides?**

<details>
<summary>Show Answer</summary>

The ratio of loading/setup time to cutting time — jobs with short cutting cycles and comparatively long fixturing time benefit dramatically, while jobs with long cutting cycles and quick loading see relatively little benefit.
</details>
