---
title: "Advanced Canned Cycles — Boring, Fine Boring, and Special Drilling"
module: "10-gcode-milling"
lessonNumber: 8
description: "Deep dive into boring cycles G85/G86/G89, fine boring G76, dwell drilling G82, and the G73 vs G83 pecking decision."
objectives:
  - "Select the correct boring cycle for through bores, blind bores, and precision holes"
  - "Program G76 fine boring with the Q shift distance"
  - "Compare G73 high-speed peck with G83 full retract peck"
  - "Understand when to use G82 for spot drilling with dwell"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["gcode", "milling", "canned-cycles", "boring", "G76", "G85"]
---

## Beyond Basic Drilling

Lesson 04 covered the basic drilling cycles G81, G83, and G84. When the hole must be precise, when it is a bore, or when deep-hole strategy matters, the control offers additional cycles.

## Boring Cycles

| Code | Behaviour | Use |
|---|---|---|
| G85 | Feed in, feed out | Reaming, continuous-chip boring |
| G86 | Feed in, spindle stop, rapid out | Rough bore that you will finish |
| G89 | Feed in, dwell, feed out | Blind bore with a flat bottom |
| G76 | Feed in, shift, retract, shift back | Precision fine boring |

All boring cycles share the same format: X, Y, Z, R, F.

### G85 — Feed In, Feed Out

`gcode
G85 X50.0 Y50.0 Z-25.0 R5.0 F150
`

The tool feeds to Z-25.0, then feeds back out at the same F rate. No spindle stop. This is the cycle for reaming — the tool never stops moving, so it leaves a smooth surface.

### G86 — Feed In, Stop, Rapid Out

`gcode
G86 X50.0 Y50.0 Z-25.0 R5.0 F150
`

The tool feeds to Z-25.0, the spindle stops, and the tool rapids out. Use this for a rough bore that will be finished with G85 or G76. The spindle stop leaves a light drag mark on the way out.

### G89 — Feed In, Dwell, Feed Out

`gcode
G89 X50.0 Y50.0 Z-25.0 R5.0 P500 F150
`

The tool feeds to Z-25.0, dwells for 500 ms, then feeds back out. Use this for blind bores where the bottom must be flat, or where a dwell is needed to bottom out.

### G76 — Fine Boring Cycle

`gcode
G76 X50.0 Y50.0 Z-25.0 R5.0 Q0.5 F150
`

The tool feeds to Z-25.0, shifts by Q (0.5 mm in the +X direction by default), rapids out, then shifts back to centre. The shift prevents the tool from dragging across the finished surface on the way out.

- Q is the shift distance (radius, in mm). The direction (+X, +Y, -X, -Y) varies by control.
- G76 is for precision boring heads with an adjustable insert.
- Typical Q values: 0.2–0.5 mm.

## G82 — Drilling with a Dwell

`gcode
G82 X50.0 Y50.0 Z-2.0 R5.0 P500 F200
`

Same as G81, but the tool dwells at the bottom for P milliseconds. Use G82 for:
- Spot drilling (the dwell cleans up the entry)
- Counterboring (the dwell lets the bottom finish)
- Chamfering holes (the dwell dwells the chamfer face)

## G73 vs G83 — Choosing the Peck Strategy

Both cycles peck to clear chips, but they differ in how much they retract.

| Cycle | Retract height | Type | Best for |
|---|---|---|---|
| G73 | Small break (d ~0.5–1 mm) | High-speed peck | Medium-depth holes, materials that chip easily |
| G83 | Full retract to R-plane | Full retract peck | Deep holes, stringy materials, chip packing risk |

G73 uses a small retract between pecks to break the chip. It is faster but does not clear chips as well.

G83 retracts fully to the R-plane, clearing chips and letting coolant in. Use G83 for holes deeper than 3× diameter and for materials that produce long chips.

`gcode
G73 X20.0 Y20.0 Z-25.0 R5.0 Q3.0 F200   (chip-break peck)
G83 X60.0 Y20.0 Z-40.0 R5.0 Q5.0 F150   (full retract peck)
`

## Comparison Table of All Cycles

| Cycle | In | Bottom | Out | Best use |
|---|---|---|---|---|
| G81 | Feed | — | Rapid | Simple through hole |
| G82 | Feed | Dwell | Rapid | Spot, counterbore, chamfer |
| G73 | Feed | Peck-break | Rapid | Medium-depth chip control |
| G83 | Feed | Full retract | Rapid | Deep hole, stringy material |
| G84 | Feed | Spindle reverse | Feed | Tapping |
| G85 | Feed | — | Feed | Reaming, bore |
| G86 | Feed | Spindle stop | Rapid | Rough bore, interrupted cut |
| G89 | Feed | Dwell | Feed | Blind bore, flat bottom |
| G76 | Feed | Shift | Rapid | Precision fine bore |

## Self-Check Questions

**1. What is the main difference between G85 and G86?**

<details>
<summary>Show Answer</summary>

G85 feeds out — the spindle keeps running, making it the right choice for reaming. G86 stops the spindle at the bottom, then rapids out, which is faster but leaves a drag line.
</details>

**2. Why does G76 need a Q value?**

<details>
<summary>Show Answer</summary>

Q is the shift distance. The tool shifts by Q at the bottom of the hole before retracting, which moves the cutting edge away from the finished surface so it does not drag on the way out.
</details>

**3. When would you use G83 instead of G73?**

<details>
<summary>Show Answer</summary>

G83 retracts fully to the R-plane between pecks, clearing chips and admitting coolant. Use it for deep holes (over 3× diameter), stringy materials, or when chip packing is a concern. G73 is faster but only breaks the chip — it does not clear the hole.
</details>

**4. What is the advantage of G82 over G81 for spot drilling?**

<details>
<summary>Show Answer</summary>

G82 dwells at the bottom for P milliseconds, which cleans up the spot face and produces a consistent chamfer. G81 rapids out immediately, leaving a rougher entry.
</details>
