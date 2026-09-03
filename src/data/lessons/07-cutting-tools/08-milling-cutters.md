---
title: "Milling Cutters — Types & Application Theory"
module: "07-cutting-tools"
lessonNumber: 8
description: "Master milling terms, cutter types and cutter positioning so you can choose and run a milling cutter correctly."
objectives:
  - "Define and calculate the core milling terms: n, vc, ve, DC, fz, zc, vf, fn, ap and ae."
  - "Calculate net power, torque and metal removal rate in metric units."
  - "Select cutter diameter and position using the 2/3 rule and entry-geometry principles."
  - "Match face, shoulder, slotting, high-feed and ball-nose cutters to the operation."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["milling", "tooling", "cutting-data", "face-milling"]
---

## Milling terms and definitions

Milling is a rotating-tool operation: the cutter spins while the workpiece feeds
past it. Every cutting-data decision in milling flows from a small set of terms.
Memorise these before you touch a machine.

### Speed and diameter

| Term | Meaning |
|---|---|
| n | Spindle speed, in rpm |
| vc | Cutting speed, in m/min — the surface speed at the cutting edge |
| ve | Effective cutting speed, in m/min — the speed at the diameter actually in cut |
| DC | Cutter diameter, in mm — the nominal diameter used for speed calculation |
| DCX | Maximum cutting diameter, in mm — the largest diameter the cutter can reach |

The nominal cutting speed vc is calculated from the cutter diameter DC. When the
edge engages at a larger diameter than DC (for example a round insert or a
positioned cutter), the true speed at the engaged edge is the effective cutting
speed ve, based on the maximum cutting diameter DCX.

:::key-concept
Spindle speed is derived from cutting speed, not chosen freely:
`n = vc × 1000 / (π × DC)`. A lower DC at the same vc forces a higher n.
:::

### Feed terms

| Term | Meaning |
|---|---|
| fz | Feed per tooth, in mm/tooth |
| zc | Effective number of teeth in cut (in engagement) |
| zn | Total number of cutter teeth |
| vf | Table feed, in mm/min |
| fn | Feed per revolution, in mm/rev |
| ap | Axial depth of cut, in mm — how deep the cutter plunges |
| ae | Radial depth of cut (working engagement), in mm — how wide the cut is |

The two feed relationships you will use every day:

- Table feed: `vf = fz × zc × n`
- Feed per revolution: `fn = fz × zc`

:::pro-tip
fz is chosen from the recommended *maximum chip thickness* (hex) for the insert,
not picked at random. Feed per tooth and table feed are related, but only zc
(effective teeth) drives the table feed — a cutter with more teeth in cut feeds
faster at the same fz.
:::

### Depth of cut, chip thickness and forces

- ap (axial depth of cut) is the distance the tool is set below the unmachined surface.
- ae (radial engagement) is the width of the workpiece engaged by the cutter diameter.
- hm is the **average chip thickness**; hex is the **maximum chip thickness**.
- kc is the specific cutting force in N/mm²; kc1 is the material constant for a
  1 mm average chip thickness.

## Power, torque and metal removal

| Quantity | Formula (metric) | Unit |
|---|---|---|
| Net power | `Pc = ap × ae × vf × kc / (60 × 10⁶)` | kW |
| Torque | `Mc = Pc × 30 × 10³ / (π × n)` | Nm |
| Metal removal rate | `Q = ap × ae × vf / 1000` | cm³/min |

:::warning
Pc is the *net* power at the cutting edge. The machine must supply more than Pc,
because spindle and drive efficiency are never 100%. Size the machine above the
calculated net power.
:::

Worked example (face milling): DC 125 mm, zn 5, fz 0.21 mm, ap 4 mm, ae 85 mm,
vc 225 m/min, kc 1700 N/mm² (low-alloy steel). This gives n ≈ 575 rpm,
vf = 600 mm/min, Q = 204 cm³/min, and Pc ≈ 5.8 kW (Mc ≈ 96 Nm).

## Cutter diameter and position

Cutter diameter is chosen from the workpiece width, with machine power also in
mind. Two rules govern it:

- The cutter diameter should be **20–50% larger** than the width of cut.
- The **2/3 rule**: keep about 2/3 of the cutter in cut and 1/3 out of cut.
  For example, an 80 mm cutter would sit with roughly 53 mm of its diameter
  engaged in the workpiece and about 27 mm running clear.

Setting the cutter off the workpiece centreline, rather than straddling it evenly,
keeps the cutting-force direction steadier and more predictable through the pass.

### Entry geometry — where to place ae

The cutting edge engages radially in three phases: entrance, arc of engagement,
and exit. Where ae sits on the cutter diameter decides how the entry shock hits
the insert:

| Cutter position | Result |
|---|---|
| ae < 25% of DC | The insert meets the work at a shallow angle, so the very tip takes the first contact and the load ramps up gently from there. A solid choice. |
| ae = 50% of DC | Skip this one where you can — the cutter centreline sits right at the workpiece edge, and that geometry hits the insert with a sharp jolt the instant it enters. |
| ae > 75% of DC | Generally the best of the three — first contact happens well back from the tip, on a sturdier part of the edge, and the cutter leaves the cut just as gradually as it entered. |

## Climb milling vs conventional milling

- **Climb (down) milling** — the preferred method. Each tooth bites in at its
  thickest right from the start of the cut, so the edge never has to skate across
  the surface before it engages. Skipping that rubbing phase cuts down on heat
  buildup and keeps the surface from work-hardening as it's cut.
- **Conventional (up) milling** — the tooth engages at essentially zero thickness
  and only builds up chip thickness as it sweeps toward the far side of the cut.
  That means real rubbing contact happens before the edge properly bites.

:::key-concept
Always use climb milling for the best cutting conditions unless the setup (for
example heavy backlash or an unstable fixture) forces conventional milling.
:::

## Cutter types

### Face mills

- **45° entering angle face mill** — the default starting point for most facing
  jobs. It splits the cutting force roughly evenly between the radial and axial
  directions and eases into the cut rather than slamming in.
- **90° square-shoulder face mill** — the go-to when you need a true square wall
  alongside the face, or a large depth of cut. Because axial force stays low, it
  is kind to thin-walled parts, and inserts ground for light cutting can offer
  four usable edges instead of two. The tradeoff is feed per tooth: since fz
  equals hex directly at 90°, you cannot push feed as far as you can with a
  chip-thinning geometry.

### Round-insert cutters

A tough, adaptable option that handles both facing and profiling work and holds
up well as an all-purpose cutter. The catch is that it asks more of the
machine — you need real rigidity to get the most out of it.

### High-feed cutters (10° entering angle)

Generate a thin chip, allowing very high feeds per tooth. Axial cutting force is
directed toward the spindle, which stabilises the tool. Maximum cutting depth is
limited (6–10 mm).

### Disc, slotting and ball-nose cutters

- **Side-and-face (disc) cutters** — for slots, grooves and shoulder milling.
- **Slotting cutters / long-edge cutters** — deep, full-width groove milling.
- **Ball-nose end mills** — profiling and 3D surfacing; available indexable,
  exchangeable-head and solid carbide.

## Milling methods

From the system overview, milling operations split into two families:

| Family | Methods |
|---|---|
| Conventional 3-axis | Face milling, shoulder milling, groove/slot milling, plunge milling, chamfering |
| Advanced (4–5 axis) | Profile milling, circular milling, helical interpolation, linear ramping, trochoidal milling, turn milling, thread milling |

- **Face milling** generates a flat surface with the cutter face.
- **Shoulder milling** cuts a face and a 90° wall in one pass.
- **Profiling** follows a contour with ball-nose or round-insert cutters.
- **Slotting** cuts a full-width groove, usually with the cutter fully engaged.
- **Circular milling / helical interpolation** produces or enlarges holes with a
  milling cutter instead of a drill — slower, but useful when chip breaking is a
  problem.

:::warning
Slotting and full-width engagement put the maximum number of teeth in cut at
once. Watch power, torque and vibration; this is where stability fails first.
:::

## Self-check

**1. A cutter has zc = 3 effective teeth, fz = 0.15 mm and n = 1200 rpm. What is the table feed vf?**

<details>
<summary>Show Answer</summary>

vf = fz × zc × n = 0.15 × 3 × 1200 = 540 mm/min.
</details>

**2. Why is ae ≈ 50% of DC a poor cutter position?**

<details>
<summary>Show Answer</summary>

At 50% engagement the cutter centreline is in line with the workpiece edge, so
the shock load at entry is very high on the cutting edge.
</details>

**3. Why is climb (down) milling preferred over conventional milling?**

<details>
<summary>Show Answer</summary>

Climb milling starts each tooth with a large chip thickness and avoids the
burnishing/rubbing effect, giving less heat and minimal work-hardening.
</details>

**4. A face-milling pass uses ap = 4 mm, ae = 85 mm, vf = 600 mm/min and kc = 1700 N/mm². What is the net power Pc?**

<details>
<summary>Show Answer</summary>

Pc = ap × ae × vf × kc / (60 × 10⁶) = 4 × 85 × 600 × 1700 / 60,000,000 ≈ 5.8 kW.
</details>
