---
title: "Job Documentation and Setup Sheets"
module: "12-cnc-setup"
lessonNumber: 6
description: "Create professional setup documentation including tool lists, offset records, photos, and inspection sheets for repeatable jobs."
objectives:
  - "Create a complete setup sheet with tooling, offsets, and workholding information"
  - "Photograph and annotate setups for repeatability"
  - "Document offset changes and inspection results for each run"
  - "Use setup documentation to reduce setup time on repeat jobs"
duration: "40 minutes"
difficulty: "beginner"
tags: ["setup", "documentation", "setup-sheets", "repeatability"]
---

## Why Document

A job that runs once a year should take the same setup time every year. Without documentation, you waste time re-discovering the tool lengths, work offsets, and clamping positions that were worked out on the first run.

## The Setup Sheet

A setup sheet is a single page that tells the next operator everything needed to run the job:

```
JOB SETUP SHEET
Job name:       POCKET BLOCK
Program:        O5000
Date:           2024-01-15
Setup time:     25 min

WORKHOLDING
Method:         Vise, 100 mm opening
Position:       Centre of table, jaw flush at X-50
G54:            X0 Y0 = top-left corner of part
                Z0 = top face of part

TOOL LIST
Tool | Description | H offset | D offset
T01  | Ø50 face mill | H01 = 125.00 | —
T02  | Ø10 end mill | H02 = 127.50 | D02 = 5.0
T03  | Ø3 centre drill | H03 = 130.20 | —
T04  | Ø5 drill | H04 = 132.10 | —
T05  | M6 tap | H05 = 128.40 | —
T06  | Ø10 drill | H06 = 131.80 | —

NOTES
- Face the top of the part first
- Use coolant for all operations
- Check thread fit with M6 Go/No-Go gauge
```

## Photographing the Setup

Take photos of every setup before the first part runs:

1. **Overall setup** — shows the workholding, the part, and the tool in the spindle.
2. **Clamping detail** — close-up of the clamps, vise, or fixture.
3. **Tool table** — the tools laid out in order with labels.
4. **Offset positions** — the edge finder at the part edge, the tool touching the part top.

Save the photos with the job name and date. Add annotations (arrows, text) to show critical positions.

## Tool List Documentation

For each tool, record:

| Field | Example |
|---|---|
| Tool number | T01 |
| Description | Ø50 face mill, 6 inserts |
| Manufacturer | (per tool crib label) |
| Holder type | Weldon side-lock |
| Stickout | 45 mm |
| H offset | H01 = 125.00 mm |
| D offset (radius) | D01 = 25.0 mm |
| Expected tool life | 200 parts |

## Offset Change Log

When offsets change during a production run (wear adjustment, tool regrind, or tool change), record the change:

| Date | Tool | Old offset | New offset | Change | Reason |
|---|---|---|---|---|---|
| 15 Jan | T02 H02 | 127.50 | 127.45 | -0.05 | Tool regrind |
| 15 Jan | T02 H02 | 127.45 | 127.48 | +0.03 | Wear adjustment |
| 16 Jan | T04 H04 | 132.10 | 132.05 | -0.05 | New tool |

This log tells you how fast the tools wear and when to expect a tool change.

## Inspection Sheet

For production runs, include an inspection sheet that lists every critical dimension:

| Feature | Nominal | Tolerance | 1 | 2 | 3 | 4 | 5 | Status |
|---|---|---|---|---|---|---|---|---|
| Pocket width | 60.0 | ±0.1 | 60.02 | 60.01 | 60.03 | 60.00 | 60.02 | PASS |
| Pocket depth | 8.0 | ±0.1 | 8.02 | 8.01 | 8.00 | 8.01 | 8.02 | PASS |
| Hole Ø10 | 10.0 | ±0.1 | 10.01 | 10.02 | 10.00 | 10.01 | 10.01 | PASS |

Record one row per part. Stop and investigate if any dimension trends toward the tolerance limit.

## Self-Check Questions

**1. What is the most important information on a setup sheet for a repeat job?**

<details>
<summary>Show Answer</summary>

The tool list with H and D offsets. Without the correct offset values, every tool position must be re-discovered. The G54 work offset and workholding position are equally critical.
</details>

**2. Why should you photograph a setup?**

<details>
<summary>Show Answer</summary>

Photos show clamping positions, tool stickout, and fixture details that are difficult to describe in text. A photo saves minutes of head-scratching when a job comes back months later.
</details>

**3. What does an offset change log tell you over time?**

<details>
<summary>Show Answer</summary>

It shows tool wear patterns. If the same tool requires the same adjustment every 100 parts, you can predict when to change the tool and plan the change during a scheduled break rather than mid-production.
</details>

**4. What should you do if an inspection measurement trends toward the tolerance limit over several parts?**

<details>
<summary>Show Answer</summary>

Stop and investigate. A trend means something is changing — tool wear, thermal growth, or workholding movement. Adjust the wear offset or change the tool before the next part goes out of tolerance.
</details>