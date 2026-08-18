---
title: "Surface Finish — Ra and Rz"
module: "03-blueprint-reading"
lessonNumber: 8
description: "Read surface finish symbols and values, understand Ra vs Rz, and know which machining processes achieve each finish."
objectives:
  - "Define Ra (arithmetic average roughness) and Rz (maximum height)"
  - "Read surface finish symbols on a print"
  - "Match Ra values to machining processes"
  - "Recognize when a finish callout forces a process change"
duration: "35 minutes"
difficulty: "beginner"
tags: ["blueprint", "surface-finish", "Ra", "Rz", "roughness"]
---

## What Surface Finish Is

Look closely at any machined surface and you'll see microscopic peaks and valleys — the "texture" left by the cutting tool. **Surface finish** is a measure of how fine or rough that texture is.

Finish is not about looks. It affects:

- **Friction** — rough surfaces wear faster
- **Sealing** — gaskets and O-rings need smooth surfaces
- **Fatigue life** — rough surfaces are where cracks start
- **Bearing fit** — shaft journals need controlled finish

## Ra — Arithmetic Average Roughness

**Ra** (Roughness average, or arithmetic average) is the most common finish value. It's the average height of the surface's peaks and valleys from the mean line, measured in **micrometers (µm)** or **microinches (µin)** on inch prints.

- Lower Ra = smoother surface
- A general machined surface: **Ra 3.2 µm**
- A fine finish: **Ra 0.8 µm**
- A ground surface: **Ra 0.4 µm**

:::key-concept
Ra is an **average** — two surfaces with the same Ra can look different (one with a few deep scratches, one with uniform fine texture). That's why some prints also use Rz, which measures the maximum peak-to-valley height.
:::

## Rz — Maximum Height

**Rz** is the average of the five largest peak-to-valley heights over the evaluation length. It catches the **worst local roughness** that Ra averages away:

- For typical machined surfaces, **Rz is roughly 4–10× Ra** depending on the process (grinding is at the low end, turning at the high end)
- Prints that care about deep scratches or score lines often specify Rz instead of (or in addition to) Ra

## The Surface Finish Symbol

The standard symbol looks like a checkmark with a horizontal top bar:

```text
   Ra 1.6        <- value above the bar (required)
   ────────
      /
     /
    /
```

Elements that can appear on the symbol:

- **Value** (e.g., Ra 1.6) — above the bar: the required finish
- **Machining method** — e.g., "GRIND", written above the value, if a specific process is required
- **Removal allowance** — a value on the left: how much material may be removed
- **Lay direction** — a symbol on the bottom right: the direction of the surface pattern (parallel, perpendicular, circular...)

If the finish symbol appears **without a value** (just the checkmark), the note in the title block defines the default — often "Ra 3.2 unless otherwise specified."

:::warning
A finish callout means "this surface must measure this smooth," not "make it look nice." A smooth-looking surface can still fail Ra inspection if the tool left vibration marks. Verify with a surface roughness tester when the print calls it out.
:::

## Typical Ra Values and How to Get Them

| Ra (µm) | Typical process | Application |
|---|---|---|
| 6.3 | Rough milling/turning | Non-critical, hidden surfaces |
| 3.2 | Standard milling/turning | General machined parts (common default) |
| 1.6 | Fine machining | Visible surfaces, light sealing |
| 0.8 | Finish machining, light grinding | Bearing seats, gasket faces |
| 0.4 | Grinding | Precision journals, sealing surfaces |
| 0.2 | Honing/lapping | Hydraulic cylinders, gauge surfaces |

## When Finish Drives the Process

A finish requirement can force a **different machining process**:

- Ra 3.2 → standard end mill pass is fine
- Ra 0.8 → needs a finish pass with a small step-over, or a wiper insert, or grinding
- Ra 0.4 → almost always grinding or very light finishing passes

It also affects feeds and speeds: lower feed rates and larger tool nose radii produce smoother finishes. A finish requirement is therefore a **machining instruction**, not just an inspection note.

:::pro-tip
If a print shows a tight finish on a surface you're milling, check the tool nose radius and feed per tooth. Roughly, a smaller feed and a larger nose radius give a better finish. When in doubt, leave stock and take a light finish pass.
:::

## Self-Check Questions

**1. What does Ra measure, and in what units is it usually given?**

<details>
<summary>Show Answer</summary>

Ra is the arithmetic average roughness — the average height of peaks and valleys from the mean line. It is usually given in micrometers (µm) on metric prints.
</details>

**2. Why might a print specify Rz instead of Ra?**

<details>
<summary>Show Answer</summary>

Because Ra is an average and can hide a few deep scratches or score lines. Rz measures the maximum peak-to-valley heights and catches local roughness that matters for sealing or fatigue.
</details>

**3. A print calls for Ra 0.4 on a shaft journal. Is a standard milling pass enough?**

<details>
<summary>Show Answer</summary>

Usually not. Ra 0.4 is a precision finish typically achieved by grinding (or very controlled finishing passes). A standard milling pass typically produces Ra 1.6–3.2. The finish callout drives a process change.
</details>
