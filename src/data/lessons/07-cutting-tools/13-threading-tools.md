---
title: "Thread Turning Tools & Infeed Methods"
module: "07-cutting-tools"
lessonNumber: 13
description: "Select thread turning inserts and infeed methods to produce precise, productive screw threads."
objectives:
  - "Identify the common thread forms and name their defining terms."
  - "Choose between full-profile, multi-point, and V-profile inserts."
  - "Apply the correct infeed and programming method for a given pitch and material."
  - "Position and set up the tool for correct thread quality."
duration: "50 minutes"
difficulty: "intermediate"
tags: ["tooling", "threading", "turning"]
---

## What thread turning is

Cutting a screw thread on a lathe means guiding a single indexable insert along the same helical path again and again, taking a little more depth on each lap until the full thread profile exists. Splitting the work into many light passes this way protects the fragile V-tip of the insert from a load it could never survive in one bite.

:::key-concept
A thread is cut in many shallow passes, not one deep cut. The sensitive V-shaped point of the insert cannot absorb the cutting forces of the full thread depth in a single pass.
:::

## Thread forms and their applications

The form you cut is dictated by the coupling it must make. General-use forms balance load capacity against material volume, while motion, pipe, and aerospace threads each serve a specific duty.

| Thread form | Application | Key characteristic |
|---|---|---|
| ISO metric | General use | Good balance of load capacity and material volume |
| American UN | General use | Inch-based general-purpose form |
| Whitworth, BSPT, NPT, NPTF | Pipe threads | Leak-proof connections; often conical |
| Trapezoidal / ACME / Stub ACME | Motion threads | Symmetrical, sturdy form with large contact surface |
| Round DIN 405 | Food and fire | Round profile for easy cleaning and repeated connect/disconnect |
| Buttress, VAM | Oil and gas | Extreme load bearing and leak-proof on thin pipe walls |
| API Round | Oil and gas | Dedicated pipe coupling form |
| UNJ / MJ | Aerospace | High precision, minimized stress concentration and breakage risk |

## Thread terms you must know

Correct setup depends on a precise vocabulary. Learn these before touching the machine.

- **Pitch (P)** — distance between adjacent thread crests, in mm.
- **Major diameter** — *d* external, *D* internal; the largest thread diameter.
- **Pitch diameter** — *d2* external, *D2* internal; the diameter where thread width equals groove width.
- **Minor diameter** — *d1* external, *D1* internal; the smallest thread diameter.
- **Thread angle (β)** — the included angle between the two flanks.
- **Root** — the bottom surface joining two adjacent flanks.
- **Flank** — the side surface connecting the crest and the root.
- **Crest** — the top surface joining the two flanks.
- **Number of starts (ns)** — how many independent thread grooves wind around the part.

### Helix angle

The helix angle depends on the diameter and the pitch of the thread. It is set with a shim under the insert in the tool holder.

tan λ = (P × ns) / (π × d2)

:::pro-tip
All holders are delivered with a 1° inclination shim as standard. Large pitches on small diameters need more inclination — for example, a 40 mm diameter with a 6 mm pitch requires a 3° shim. Changing the shim adjusts the flank clearance of the insert.
:::

:::warning
Pull threading operations require a shim with negative inclination. Check the chart in the catalog before selecting the shim.
:::

## Insert types

Thread turning inserts come in three families. Productivity, inventory, and thread form control each pull the choice in a different direction.

| Insert type | Advantage | Disadvantage |
|---|---|---|
| Full-profile (topping) | Best control of the thread form; less deburring | One pitch per insert |
| Multi-point | Reduced number of infeeds; very high productivity | Needs stable setup and room behind the thread |
| V-profile 60°/55° | One insert covers a range of pitches; minimum inventory | Can leave a burr that must be removed |

### Full-profile (topping) inserts

A full-profile insert forms both the root and the flanks, and it tops the crest from stock left by a prior turning operation. Because root-to-crest distance is controlled, geometric accuracy is high. It cuts only one pitch, and because it generates both root and crest, tool pressure rises — demanding a stable setup.

### Multi-point inserts

A multi-point insert carries two or more teeth that cut simultaneously, so one pass shapes several thread segments together — a two-tooth version needs only half the infeeds a single-tooth insert would. That gain in speed comes with a trade-off: more teeth in the cut means more resistance pushing back on the tool, so the setup has to be rigid with overhang kept short, and the thread must have clearance space behind it for the trailing teeth to pass through.

### V-profile inserts

A V-profile insert forms the root and flanks while the crest is controlled in a prior turning operation. The same insert covers a range of pitches, minimizing inventory. In vibration-prone setups, a non-topping V-profile insert often solves the problem because it reduces cutting pressure.

## Insert geometries: A, F, C

- **A-geometry** — first choice in most operations. Optimized for low-carbon and low-alloy steels and easily machined stainless steel.
- **F-geometry** — sharp geometry that gives clean cuts in sticky and work-hardening materials.
- **C-geometry** — chip-breaking geometry. Designed only for modified flank infeed.

## Infeed methods

The infeed method has a significant impact on chip control, insert wear, thread quality, and tool life.

### Radial infeed

The tool feeds straight in, perpendicular to the axis. This is the most common method and the only one possible on older non-CNC lathes. It produces a stiff "V" chip and even insert wear, but exposes the tip to high temperatures and can vibrate on coarse pitches. It is the first choice for work-hardening materials and fine pitches.

### Modified flank infeed (3–5°)

The tool feeds at 3–5° to the flank. The chip is thicker but contacts only one side of the insert, so less heat transfers to the tool and axial forces reduce vibration risk. This is the standard CNC cycle and the first choice for most operations. C-geometry inserts work only with this method (at 1° from the flank).

### Incremental infeed

Used for very coarse threads and large profiles. It gives even insert wear and the longest tool life on coarse threads, but chips flow both ways and are difficult to control.

## Programming methods

### Decreasing depth per pass (constant chip area)

The most common CNC method. Each pass is shallower than the last, keeping chip area balanced. The deepest pass is the first pass, and the final pass is around **0.07 mm**.

### Constant depth per pass

Every pass takes the same depth regardless of pass number. It offers the best chip control but is far more demanding on the insert. Do not use it for pitches larger than **1.5 mm** (or 16 TPI).

### Topping stock and crest allowance

For full-profile (topping) inserts, leave **0.03–0.07 mm** radial stock from the prior turning operation so the crest can be properly formed. This corresponds to **0.06–0.14 mm** added on the workpiece diameter as crest allowance for the finish diameter.

## Setting up the operation

- Start the tool a minimum of **3 × pitch** before the workpiece so feed and spindle synchronize before engagement.
- Hold center height to **±0.1 mm**. Too high decreases clearance and the edge rubs or breaks; too low distorts the profile.
- Check the workpiece diameter for the correct working allowance before threading.
- For productivity order, prefer multi-point first, then full-profile, then V-profile.

:::warning
The highest axial cutting force occurs during entrance and exit of the tool. Aggressive cutting data can move an insecurely clamped insert — always verify clamping before threading.
:::

## Troubleshooting quick reference

| Problem | Typical cause | Fix |
|---|---|---|
| Built-up edge / chipping | Low edge temperature, sticky material | Raise cutting speed; use a tougher PVD grade |
| Plastic deformation | Excessive heat in the cut zone | Lower speed; use a deformation-resistant grade |
| Vibration | Unstable setup, poor clamping | Soft jaws, minimize overhang, correct center height |
| Poor surface on one flank | Wrong infeed angle or shim | Use 3–5° flank infeed; correct inclination shim |
| Incorrect profile | Wrong center height or holder not 90° | Correct tool/shim/insert and center height |

## Self-check

**1. Which insert type gives the best control of the thread form but cuts only one pitch?**

<details>
<summary>Show Answer</summary>

The full-profile (topping) insert. It generates both root and crest and tops the crest from prior turning stock, but each insert is dedicated to a single pitch.
</details>

**2. Why is modified flank infeed preferred over radial infeed for most CNC threading?**

<details>
<summary>Show Answer</summary>

The chip contacts only one side of the insert, transferring less heat and directing axial forces to reduce vibration. It also gives better chip control and surface finish.
</details>

**3. What is the minimum distance the tool should start before the workpiece, and why?**

<details>
<summary>Show Answer</summary>

At least 3 × pitch, so the feed and spindle are fully synchronized before the edge engages the material.
</details>

**4. How much radial stock should be left for a full-profile insert to form the crest?**

<details>
<summary>Show Answer</summary>

0.03–0.07 mm radial stock, which equals 0.06–0.14 mm added on the workpiece diameter.
</details>
