---
title: "Threading with G76"
module: "11-gcode-turning"
lessonNumber: 5
description: "Program single and multi-start threads using the G76 threading cycle, with correct infeed methods and pitch calculations."
objectives:
  - "Understand the G76 two-line format and its parameters"
  - "Calculate thread height and first-pass depth for a given pitch"
  - "Choose the correct infeed method for the material and thread type"
  - "Program multi-start threads by adjusting the starting angle"
duration: "55 minutes"
difficulty: "advanced"
tags: ["gcode", "turning", "threading", "G76", "threads"]
---

## G76 Threading Cycle

The G76 threading cycle uses two lines (Fanuc series 0T/16T/18T format):

```gcode
G76 P_ _ _ _ _ _ Q_ R_
G76 X_ Z_ P_ Q_ R_ F_
```

### First Line

| Parameter | Meaning |
|---|---|
| P | 6 digits: finish passes (first 2), pull-out distance (middle 2), thread angle (last 2) |
| Q | Minimum depth of cut (radius, microns) |
| R | Finishing allowance (radius, mm) |

Example: G76 P020060 Q50 R0.05
- 02 = 2 finish passes
- 00 = 0 pull-out (no chamfer)
- 60 = 60° thread angle
- Q50 = minimum cut depth 0.05 mm
- R0.05 = 0.05 mm finishing allowance

### Second Line

| Parameter | Meaning |
|---|---|
| X | Final thread minor diameter (mm) |
| Z | End position of the thread (mm) |
| P | Thread height (radius, microns) |
| Q | First pass depth (radius, microns) |
| R | Taper (diameter difference for pipe threads; 0 = straight) |
| F | Lead (pitch for single-start) |

### Haas One-Line Format

```gcode
G76 X_ Z_ I_ K_ D_ A_ F_
```

| Word | Meaning |
|---|---|
| I | Taper (threads per inch) |
| K | Thread height (radius, microns) |
| D | First pass depth (radius, microns) |
| A | Thread angle (degrees) |
| F | Lead (pitch × number of starts) |

## Thread Height and Pass Calculation

For a 60° ISO metric thread, the thread height (radius) is approximately:

Pitch × 0.6134

Example: M20 × 1.5 external thread
- Thread height = 1.5 × 0.6134 = 0.920 mm
- Minor diameter = 20.0 − 2 × 0.920 = 18.160 mm
- First pass ≈ 0.2 mm (radius)

```gcode
G76 P020060 Q50 R0.05
G76 X18.16 Z-30.0 P920 Q200 F1.5
```

## Infeed Methods

| Method | G76 P angle | Use |
|---|---|---|
| Radial (straight in) | 0°, 60° | Fine threads, hard materials, chip control |
| Flank (modified) | 29° or 30° | General-purpose, best chip flow |
| Alternating | 0° with alternating | Very coarse threads, wide shapes |

The 60° in the P code sets the thread angle, not the infeed method. The infeed is controlled by the machine parameter or by the tool path geometry. A 29° or 30° virtual angle in the P code (e.g., P020029) creates flank infeed on some controls.

## Multi-Start Threads

A two-start thread has two threads running side by side. The lead is twice the pitch:

```gcode
(First start)
G76 P020060 Q50 R0.05
G76 X18.16 Z-30.0 P920 Q200 F3.0

(Second start — shift the start by half the pitch)
G00 X22.0 Z0.75
G76 P020060 Q50 R0.05
G76 X18.16 Z-30.0 P920 Q200 F3.0
```

The Z start position is shifted by: pitch / number of starts. For a 2-start thread with 1.5 mm pitch, the second start starts at Z0.75 instead of Z0.

## G92 Threading

The older G92 method uses a series of single-pass blocks:

```gcode
G92 X19.0 Z-30.0 F1.5
G92 X18.8 Z-30.0
G92 X18.6 Z-30.0
G92 X18.4 Z-30.0
G92 X18.2 Z-30.0
G92 X18.16 Z-30.0
```

Each block is one pass. This is rarely used for new programs but appears on older machines and in hand-written programs.

## Self-Check Questions

**1. What does the P value in the first G76 line represent?**

<details>
<summary>Show Answer</summary>

P is a 6-digit code: first 2 digits = number of finish passes, middle 2 = pull-out distance, last 2 = thread angle (60° for metric).
</details>

**2. How do you calculate the minor diameter of an M20 × 1.5 external thread?**

<details>
<summary>Show Answer</summary>

Thread height = pitch × 0.6134 = 1.5 × 0.6134 = 0.920 mm. Minor diameter = 20.0 − 2 × 0.920 = 18.160 mm.
</details>

**3. How do you program a two-start thread with G76?**

<details>
<summary>Show Answer</summary>

Set F = pitch × 2 (the lead). Run the G76 cycle twice: first at Z0, then at Z shifted by pitch/2 for the second start.
</details>

**4. What is the G92 method and when would you use it?**

<details>
<summary>Show Answer</summary>

G92 uses a series of single-pass blocks, each specifying a smaller X diameter. It is used on older controls or when the G76 parameters are not available.
</details>