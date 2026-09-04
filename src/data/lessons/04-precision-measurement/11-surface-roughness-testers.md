---
title: "Surface Roughness Testers (Profilometers)"
module: "04-precision-measurement"
lessonNumber: 11
description: "Measure surface finish with a stylus profilometer, read an Ra value, and know what that single number does and doesn't tell you."
objectives:
  - "Explain what a stylus profilometer physically measures"
  - "Read and interpret an Ra surface roughness value"
  - "Position and orient a profilometer trace correctly on a part"
  - "Recognize what Ra alone doesn't tell you about a surface"
difficulty: "intermediate"
duration: "35 minutes"
tags: ["measurement", "metrology", "surface-finish", "profilometer", "roughness"]
---

## Measuring a Surface, Not a Dimension

Every tool in this module so far has measured size — a length, a diameter, a depth. A **surface roughness tester**, or profilometer, measures something entirely different: how rough or smooth a machined surface actually is at a microscopic scale, expressed as a single number that a print's surface finish note (covered in the blueprint reading module) calls out directly.

## How a Stylus Profilometer Works

A contact-type profilometer drags a very fine diamond stylus across the surface at a controlled, slow speed. As the stylus rides over the microscopic peaks and valleys left by the cutting tool, it moves up and down, and that vertical movement is converted into an electrical signal, processed, and reported as a numerical roughness value.

:::key-concept
A profilometer is, at its core, doing the same physical job as a very sensitive dial indicator — tracking small vertical deviations as it moves across a surface — just at a scale of micrometres instead of millimetres, and with the raw trace processed into a statistical roughness value rather than read as a single deviation.
:::

## Reading Ra

The most common surface finish parameter is **Ra** (arithmetic average roughness) — the average absolute deviation of the surface profile from its mean line, over the measured length, expressed in micrometres (µm). A lower Ra means a smoother surface; a higher Ra means a rougher one. A print's surface finish note (for example, "Ra 3.2 unless otherwise specified") sets the maximum acceptable Ra value for that surface.

Ra is an average, not a peak value — it doesn't by itself tell you about one isolated deep scratch or a single unusually tall peak, since those get averaged in with the rest of the trace. Other parameters (such as Rz, the average of peak-to-valley heights over several sampling lengths) exist specifically to capture that kind of information when Ra alone isn't enough.

## Taking a Correct Trace

- **Orient the trace across the machining marks, not along them.** Cutting operations leave directional marks (feed marks from turning or milling), and a trace taken along those marks — parallel to the tool's path — reads artificially smooth, missing the actual peak-to-valley variation the trace is meant to capture.
- **Use an appropriate sampling length (cutoff)** for the surface being measured — too short a cutoff can miss the true waviness of the surface, too long can blend in irrelevant longer-scale variation.
- **Keep the part and the tester stable** during the trace; vibration or movement introduces noise the instrument can't distinguish from real surface variation.

:::warning
Tracing along the direction of the machining marks instead of across them is one of the most common surface finish measurement mistakes — it produces a reading that looks better than the surface actually performs, since the stylus rides along the grooves instead of crossing them.
:::

## What Ra Doesn't Tell You

Ra is a useful, standardized single-number summary, but it's not the whole story of a surface's behavior:

- Two surfaces can share the same Ra value with very different actual profiles — one with many shallow, evenly-spaced peaks, another with fewer but deeper peaks — which can behave differently in wear, sealing, or fatigue applications even at matching Ra.
- Ra alone doesn't distinguish surface direction (lay), which matters for sealing surfaces and moving fits.
- For applications where these details matter, other parameters and a fuller profile record, not just a single Ra number, are specified.

## Self-Check Questions

**1. What does a stylus profilometer physically measure as it traces a surface?**

<details>
<summary>Show Answer</summary>

The vertical movement of a fine diamond stylus as it rides over the microscopic peaks and valleys of the surface, converted into an electrical signal and processed into a roughness value.
</details>

**2. What does the Ra value represent?**

<details>
<summary>Show Answer</summary>

The arithmetic average of the surface profile's absolute deviation from its mean line over the measured length, expressed in micrometres — a lower Ra means a smoother surface.
</details>

**3. Why does tracing along the direction of machining marks instead of across them give a misleadingly smooth reading?**

<details>
<summary>Show Answer</summary>

The stylus rides along the grooves left by the cutting tool instead of crossing them, missing the actual peak-to-valley variation the trace is supposed to capture.
</details>

**4. Why can two surfaces with the same Ra value still behave differently in service?**

<details>
<summary>Show Answer</summary>

Ra is an average, so very different actual profiles — many shallow peaks versus fewer deep ones — can produce the same Ra number while behaving differently under wear, sealing, or fatigue conditions.
</details>

**5. What does a print's surface finish note, like "Ra 3.2," actually specify?**

<details>
<summary>Show Answer</summary>

The maximum acceptable Ra roughness value for that surface — a smoother (lower Ra) result is acceptable, a rougher (higher Ra) result is not.
</details>
