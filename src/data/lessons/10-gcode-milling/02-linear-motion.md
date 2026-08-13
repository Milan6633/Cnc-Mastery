---
title: "G00 & G01 — Rapid Positioning and Linear Cutting Moves"
module: "10-gcode-milling"
lessonNumber: 2
description: "Master the two most fundamental G-codes — G00 for rapid non-cutting moves and G01 for controlled feed-rate cutting."
objectives:
  - "Explain the difference between G00 (rapid) and G01 (feed) moves"
  - "Program safe rapid positioning sequences"
  - "Program feed moves with proper F-word values"
  - "Understand absolute (G90) vs. incremental (G91) positioning"
duration: "50 minutes"
difficulty: "beginner"
tags: ["gcode", "milling", "G00", "G01", "linear", "motion"]
---

## The Two Motion Commands You'll Use Most

Almost every CNC program is built from just two types of straight-line moves:

| Command | Name | Use | Speed |
|---------|------|-----|-------|
| **G00** | Rapid positioning | Moving the tool through air — not cutting | Machine maximum (fastest possible) |
| **G01** | Linear interpolation | Cutting material in a straight line | Controlled by F (feed rate) |

:::key-concept
**G00 = air moves. G01 = cutting moves.** If the tool is in the material, use G01. If the tool is in the air, use G00. Breaking this rule will either crash the tool (G00 in material) or waste cycle time (G01 in air).
:::

## G00 — Rapid Positioning

`G00` tells the machine: *"Move to this position as fast as the machine can go."*

```gcode
G00 X50.0 Y75.0      (Rapid to X50 Y75)
G00 Z25.0             (Rapid Z up to 25mm)
```

### How Rapids Actually Move

:::warning
G00 does NOT guarantee a straight-line path. Most CNC machines move each axis independently at maximum rate. If you command `G00 X125.0 Y75.0`, the shorter axis (Y) may arrive first, creating a **dog-leg path** — not a diagonal. This matters because if there's a clamp or fixture in the way, the tool might hit it even though the start and end points are clear.
:::

The safe approach: **move Z clear first, then move X and Y, then bring Z back down.**

```gcode
G00 Z25.0             (1. Pull Z up to clearance height)
G00 X75.0 Y50.0       (2. Rapid over to the next position)
G00 Z2.0              (3. Rapid down to just above the part)
G01 Z-6.0 F250        (4. Feed into the material)
```

This "pull up → move over → come down" sequence is the standard rapid pattern. You'll program it hundreds of times.

### Modal Behavior

G00 is **modal** — once commanded, every subsequent move is a rapid until you command G01 (or another motion code).

```gcode
G00 X25.0 Y25.0   (Rapid — G00 is now active)
X50.0              (Still a rapid — G00 is still modal)
Y75.0              (Still a rapid)
G01 Z-12.0 F400    (NOW it's a feed move — G01 takes over)
X100.0             (Feed move — G01 is now modal)
```

## G01 — Linear Interpolation (Feed Moves)

`G01` tells the machine: *"Move to this position in a straight line at the specified feed rate."*

```gcode
G01 X100.0 Y50.0 F500   (Cut to X100 Y50 at 500 mm/min)
G01 Z-12.0 F250          (Plunge down at 250 mm/min)
```

### The F Word (Feed Rate)

The `F` value sets the speed of the cut in **mm/min** when in G94 mode (the default on most mills).

```gcode
G01 X125.0 F600    (Move at 600 mm/min)
```

:::key-concept
F is also **modal** — once you set `F600`, every G01 move after that uses 600 mm/min until you change it. This is why you don't need to repeat the F word on every line. But be careful: if you forget the F word on the first G01 in your program, the machine uses whatever feed rate was left from the last program (which might be 0, causing an alarm, or 5000 mm/min, causing a crash).
:::

### Typical Feed Rates (Metric)

| Operation | Typical Feed (mm/min) |
|-----------|----------------------|
| Face milling (aluminium) | 500–1500 |
| Face milling (steel) | 200–500 |
| Slotting | 100–400 |
| Plunging / drilling with end mill | 80–250 |
| Finishing pass | 300–800 |

These vary widely with tool size, material, and depth of cut. Always calculate from chip load (see the feeds & speeds lesson in Module 02).

## G90 vs. G91 — Absolute and Incremental

Every coordinate you program is interpreted in one of two modes:

### G90 — Absolute Positioning

Coordinates are measured from the **work zero** (origin). "Go to position 75.0 mm."

```gcode
G90
G01 X75.0 Y50.0 F500   (Move to the point X=75, Y=50)
G01 X125.0 Y50.0        (Move to the point X=125, Y=50)
```

### G91 — Incremental Positioning

Coordinates are measured from the **current position**. "Move 75.0 mm from where you are."

```gcode
G91
G01 X50.0 Y0.0 F500    (Move 50mm in X from current position)
G01 X0.0 Y-38.0         (Move 38mm in negative Y from current position)
```

:::pro-tip
Use **G90 (absolute) for 95% of your programming**. It's easier to verify, harder to accumulate errors, and matches the dimensions on the blueprint. Use G91 only when it genuinely simplifies the code — like repeated patterns, incremental drilling depths, or the `G28 G91 Z0` machine-home command.
:::

### The G28 G91 Pattern

You'll see this line in almost every program:

```gcode
G28 G91 Z0.0    (Return Z to machine home)
```

What's happening:
1. `G91` — switch to incremental mode
2. `Z0.0` — move 0.0 incrementally in Z (don't move yet)
3. `G28` — now go to machine home position for Z

This safely sends Z home from wherever it currently is. You'll also see `G28 G91 X0 Y0` to home X and Y.

## Putting It All Together

Here's a typical sequence that uses G00, G01, G90, and G91 together:

```gcode
N10 G90 G94 G17 G21 G40 G49 G80    (Safety block - absolute, mm/min, XY plane, metric)
N20 G54                              (Select work coordinate system)
N30 T01 M06                          (Tool change)
N40 S3000 M03                        (Spindle on)
N50 G43 H01 Z25.0                    (Tool length comp, go to Z25)

N60 G00 X0.0 Y0.0                    (Rapid to work zero in XY)
N70 G00 Z2.0                         (Rapid down to 2mm above part)
N80 G01 Z-3.0 F250                   (Feed down into material)
N90 G01 X100.0 F600                  (Cut across in X)
N100 G01 Y-50.0                      (Cut in Y)
N110 G01 X0.0                        (Cut back to X0)
N120 G01 Y0.0                        (Cut back to Y0 — we've cut a rectangle)

N130 G00 Z25.0                       (Rapid retract)
N140 M05                             (Spindle stop)
N150 G28 G91 Z0.0                    (Home Z)
N160 G28 G91 X0 Y0                   (Home X and Y)
N170 G90                             (Back to absolute before ending)
N180 M30                             (Program end)
```

This program cuts a rectangular pocket outline 100 mm × 50 mm at a depth of 3 mm. Notice the pattern: **rapid to position → feed into material → cut the shape → rapid out → go home → end.**

## Common Mistakes

| Mistake | What Happens | Fix |
|---------|-------------|-----|
| Using G00 while in the material | Tool snaps or crashes at rapid speed | Always use G01 with an F value when the tool touches the part |
| Forgetting the F word on the first G01 | Alarm or uses leftover feed rate from previous program | Always include F on the first G01 in every program |
| Rapid move at low Z clearance | Tool hits a clamp or high spot | Use a safe clearance height (at least 25 mm above the highest point) |
| Leaving G91 active | All subsequent absolute coordinates are interpreted as incremental | Return to G90 as soon as you're done with incremental moves |

## Self-Check Questions

**1. You need to move the tool from its current position to X125.0 Y75.0 without cutting. What G-code do you use?**

<details>
<summary>Show Answer</summary>

`G00 X125.0 Y75.0` — G00 is for non-cutting rapid positioning. Make sure the tool is clear of the part in Z before making lateral rapid moves.
</details>

**2. What does this line do: `G01 X62.5 Y-25.0 F300`?**

<details>
<summary>Show Answer</summary>

It moves the tool in a straight line to the point X=62.5 mm, Y=-25.0 mm (assuming G90 absolute mode) at a feed rate of 300 mm/min. This is a cutting move.
</details>

**3. Why is this code dangerous?**

```gcode
G00 X75.0 Y50.0 Z-12.0
```

<details>
<summary>Show Answer</summary>

It rapids all three axes simultaneously to the target position. If the tool is currently above the part, the Z axis will plunge to -12 mm at rapid speed while X and Y are also moving. The tool could crash into the part, the vise, or a clamp. The safe approach is to rapid X and Y first (with Z clear), then feed Z down with G01.
</details>

**4. After running `G28 G91 Z0.0`, what mode is the machine in — absolute or incremental?**

<details>
<summary>Show Answer</summary>

**Incremental (G91).** This is why you see `G90` after the G28 sequence — to return to absolute mode. If you forget, the next move will be interpreted as incremental, which could send the tool to a completely wrong position.
</details>
