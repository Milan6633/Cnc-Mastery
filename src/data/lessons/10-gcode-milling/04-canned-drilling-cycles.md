---
title: "Canned Drilling Cycles — G81, G82, G83, G73, G84"
module: "10-gcode-milling"
lessonNumber: 4
description: "Use canned cycles for drilling, peck drilling, tapping, and boring — one G-code per hole pattern."
objectives:
  - "Explain what a canned cycle is and why it saves time"
  - "Program G81 (drill), G82 (dwell), G83 (peck), and G73 (chip-break) cycles"
  - "Use modal behavior to drill multiple holes per cycle"
  - "Cancel cycles with G80 and avoid the modal trap"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["gcode", "milling", "canned-cycles", "drilling", "G81", "G83", "G84"]
---

## What a Canned Cycle Is

Drilling a single hole takes four moves: rapid to XY, rapid down to a clearance height, feed down to depth, rapid back out. Doing that manually is tedious and error-prone.

A **canned cycle** bundles the whole sequence into one G-code. The machine then repeats it at every new XY position you give it — one line per hole.

## The Words That Build a Cycle

A drilling cycle block uses these words:

| Word | Meaning |
|------|---------|
| **G8x** | The cycle type (G81, G83, ...) |
| **X, Y** | Hole position (absolute in G90) |
| **Z** | Final hole depth (negative) |
| **R** | Return/clearance plane height (positive, above the part) |
| **F** | Feed rate for the plunge |
| **Q** | Peck depth (G83/G73) |
| **P** | Dwell time in milliseconds (G82, on Fanuc controls) |
| **L** | Number of repeats (optional) |

:::key-concept
The cycle is **modal** — once you command G81, every following XY position drills a hole until you cancel with **G80**. The Z, R, F (and Q/P) stay the same; only X and Y change per hole.
:::

## G81 — Simple Drilling

The basic drill cycle: feed to Z, rapid back to R.

```gcode
T02 M06                 (Ø8.5 drill)
S1500 M03
G43 H02 Z50.0
M08

G81 X20.0 Y20.0 Z-15.0 R5.0 F200   (drill hole 1)
X60.0 Y20.0                         (hole 2 — cycle is still active)
X60.0 Y40.0                         (hole 3)
X20.0 Y40.0                         (hole 4)
G80                                 (cancel the cycle)
```

Each new XY position repeats the full drill sequence automatically.

## G82 — Drilling with a Dwell

Same as G81, but the tool **dwells** at the bottom for `P` milliseconds. Used for **spot drilling** and **spotfacing**, where you want the tool to stop and clean up the bottom:

```gcode
G82 X40.0 Y30.0 Z-3.0 R5.0 P500 F200   (drill to -3, dwell 0.5 s)
```

`P500` = 500 ms = 0.5 seconds (on Fanuc controls; some controls interpret P differently — check your machine).

## G83 — Peck Drilling (Deep Holes)

For holes deeper than ~3× the drill diameter, a single plunge packs chips and can snap the drill. **Peck drilling** feeds a little (Q depth), retracts to clear chips, then feeds again:

```gcode
G83 X30.0 Y30.0 Z-40.0 R5.0 Q5.0 F150
```

- `Q5.0` — feed 5 mm, retract, feed another 5 mm, retract, repeat to Z-40
- The full retract between pecks **clears the chips** and lets coolant in

:::key-concept
**Q = peck depth.** A 40 mm deep hole with Q5.0 = eight pecks. Peck drilling prevents chip packing and drill breakage in deep holes — the smaller the drill, the smaller the Q.
:::

## G73 — Chip-Breaking (High-Speed Peck)

Like G83 but faster: instead of retracting fully out of the hole, the tool backs off a small amount between pecks to **break the chip** without pulling all the way out. Better cycle time for medium-depth holes:

```gcode
G73 X30.0 Y30.0 Z-30.0 R5.0 Q4.0 F180
```

## G80 — Cancel

Every canned cycle **stays active until G80**. Always cancel when you're done — if you forget, the next position command drills a surprise hole.

## Other Cycles You'll Meet

| Code | Purpose |
|------|---------|
| G84 | Tapping (rigid tap) |
| G74 | Left-hand tapping |
| G85/G89 | Boring (feed in, feed out, optional dwell) |
| G86 | Boring (feed in, stop spindle, rapid out) |
| G76 | Fine boring (shift, then retract) |

Tapping and boring cycles are covered in detail in later modules. For now, know that G84 taps a right-hand thread with a matched feed-per-revolution and spindle.

:::warning
**G84 tapping must have the feed and spindle speed matched to the thread pitch** — the feed per revolution equals the pitch. On a rigid-tap machine the control does this automatically; on an older machine you must calculate F = pitch × RPM. A mismatch breaks the tap in the hole.
:::

## A Complete Drilling Program

Three M6 tapped holes plus two Ø8 clearance holes:

```gcode
N10 G90 G94 G17 G21 G40 G49 G80
N20 G54

(T1: CENTER DRILL — spot all 5 holes)
N30 T01 M06
N40 S2000 M03
N50 G43 H01 Z50.0
N60 M08
N70 G81 X20.0 Y20.0 Z-2.0 R5.0 F250
N80 X60.0
N90 X100.0 Y40.0
N100 X40.0 Y40.0
N110 X80.0 Y40.0
N120 G80

(T2: Ø5.0 TAP DRILL for M6)
N130 T02 M06
N140 S2500 M03
N150 G43 H02 Z50.0
N160 M08
N170 G83 X20.0 Y20.0 Z-25.0 R5.0 Q5.0 F180
N180 X60.0
N190 X100.0 Y40.0
N200 G80

(T3: M6 TAP)
N210 T03 M06
N220 S500 M03
N230 G43 H03 Z50.0
N240 G84 X20.0 Y20.0 Z-20.0 R5.0 F500
N250 X60.0
N260 X100.0 Y40.0
N270 G80

(T4: Ø8 CLEARANCE DRILL)
N280 T04 M06
N290 S1800 M03
N300 G43 H04 Z50.0
N310 M08
N320 G81 X40.0 Y40.0 Z-12.0 R5.0 F200
N330 X80.0
N340 G80

N350 M09 M05
N360 G28 G91 Z0.0
N370 G28 G91 X0 Y0
N380 G90
N390 M30
```

## Common Mistakes

| Mistake | What Happens | Fix |
|---|---|---|
| Forgetting G80 | Next position move drills a hole | Cancel after every hole group |
| R plane too low | Tool crashes into a clamp on the move between holes | Set R above all clamps and high spots |
| Q too big on a small drill | Drill packs chips and snaps | Smaller Q for smaller drills |
| Wrong F on G84 | Tap breaks in the hole | Match feed to pitch × RPM |

## Self-Check Questions

**1. Why does G83 peck drilling protect the drill?**

<details>
<summary>Show Answer</summary>

It feeds a small Q depth, then retracts fully to clear chips and admit coolant before feeding again. This prevents chip packing and drill breakage in deep holes.
</details>

**2. What does `Q5.0` mean in a G83 block?**

<details>
<summary>Show Answer</summary>

The peck depth: the tool feeds 5 mm, retracts, then repeats, until it reaches the Z depth.
</details>

**3. You program three G81 holes and then move to X150.0 Y150.0. What happens if you forgot G80?**

<details>
<summary>Show Answer</summary>

Because the canned cycle is modal, the move to X150 Y150 is treated as another G81 hole position and the machine drills a hole there — an unexpected, possibly damaging hole. Always cancel with G80.
</details>

**4. Which cycle drills a deep hole with full retracts to clear chips?**

<details>
<summary>Show Answer</summary>

G83 peck drills with full retract between pecks. G73 breaks chips with only a small back-off, and G81/G82 don't peck at all.
</details>

**5. In a cycle block, what does the R word set?**

<details>
<summary>Show Answer</summary>

R is the return (clearance) plane. The tool rapids to R after each hole, so R must clear all clamps and high spots on the part.
</details>
