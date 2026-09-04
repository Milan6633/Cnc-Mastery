---
title: "Setting Tool Length and Work Offsets"
module: "09-cnc-operation"
lessonNumber: 3
description: "Set tool length offsets and work coordinate offsets on a CNC mill using a touch-off tool, edge finder, and probe."
objectives:
  - "Set tool length offsets using a tool presetter or touch-off block"
  - "Set G54 work offset using an edge finder or wiggler"
  - "Use a spindle probe to automate offset setting"
  - "Verify offsets with a test cut and indicator"
duration: "50 minutes"
difficulty: "beginner"
tags: ["cnc", "operation", "offsets", "tool-length", "edge-finder", "probing"]
---

## Why Offsets Matter

A CNC machine has no way of knowing the length of the tool or the position of the part. You must tell it. Tool length offsets tell the machine where the tip of the tool is relative to a reference. Work offsets tell the machine where the part zero is.

## Tool Length Offsets — The Basics

Every tool has a different length. The control stores the length in the offset register (H01 for tool 1, H02 for tool 2, etc.). When you program G43 H01, the control adds the stored length to the Z position.

The reference point is usually the spindle gauge line (a fixed point on the spindle nose). The offset is the distance from the gauge line to the tool tip.

### Setting by Touch-Off

1. Jog the tool down until it just touches the top of the part (or a known reference surface).
2. Set the Z offset register so that the machine reads Z0 at that position.
3. The control now knows the tool length.

```gcode
G43 H01 Z50.0    (activate tool 1 offset, move to Z50)
```

### Using a Tool Presetter (Touch-Off Block)

A tool presetter is a height gauge with a switch. When the tool touches it, the control records the position:

1. Place the presetter on the table (known height, e.g. 50.000 mm).
2. Jog the tool down until it touches the presetter.
3. The control reads the machine Z position and calculates: tool length = machine Z − presetter height.
4. Enter the value into the offset register.

## Setting G54 Work Offset

The work offset (G54) tells the machine where the part zero is in X, Y, and Z.

### Using an Edge Finder

An edge finder is a rotating tool with a concentric tip that wobbles when off-centre.

1. Chuck a standard edge finder. Run at 500–1000 RPM.
2. Jog the edge finder toward the left side of the part until the tip kicks off-centre.
3. Slowly move it back until the tip snaps to centre. Record the machine X position.
4. Move to the right side of the part and repeat. The centre of the part is the midpoint of the two recorded positions.
5. Enter that value into the G54 X register.

For Y, repeat the process on the front and back faces.

For Z, touch the tool to the top of the part and set the Z register to 0.

### Using a Wiggler (Centre Finder)

A wiggler is a mechanical indicator with a ball tip. The procedure is the same as an edge finder, but the wiggler is stationary (not rotating). Move the part against the ball tip until the indicator needle centres.

## Spindle Probe — Automated Offsetting

A spindle probe (Renishaw, Blum, etc.) automates the process:

```gcode
G31 Z-20.0 F100    (probe moves down until it touches)
#100 = #5063       (record Z position at touch)
#5223 = #100       (set G54 Z to that position)
```

Typical probe cycle:
1. Probe the left face of the part → record X
2. Probe the right face of the part → record X
3. Calculate centre → set G54 X
4. Probe the front face → record Y
5. Probe the back face → record Y
6. Calculate centre → set G54 Y
7. Probe the top face → set G54 Z

## Verification

Always verify the offsets before cutting:

1. Set the tool to Z50.0 (G43 H01 Z50.0).
2. Jog to X0 Y0 in G54. The tool should be at the part corner.
3. Place a piece of paper between the tool and the part. Jog Z down until the paper drags. The Z should be close to 0.0.
4. Run a test cut: machine a small feature, measure it, and confirm the dimensions match the program.

## Self-Check Questions

**1. What does G43 H01 do?**

<details>
<summary>Show Answer</summary>

G43 activates tool length compensation. H01 selects offset register 1, which stores the length of tool 1. The control adds this value to the programmed Z position.
</details>

**2. How do you find the centre of a part in X using an edge finder?**

<details>
<summary>Show Answer</summary>

Touch the left face, record the X position. Touch the right face, record the X position. The centre is the average of the two values. Enter that value into the G54 X register.
</details>

**3. What is the purpose of a spindle probe?**

<details>
<summary>Show Answer</summary>

A spindle probe automates the offset-setting process. It touches the part at known positions, records the coordinates, and can automatically update the work offset registers via macros.
</details>

**4. Why should you verify offsets with a test cut before running the full program?**

<details>
<summary>Show Answer</summary>

A test cut confirms that the offsets are correct. If the tool is at the wrong position, the test cut will show it before the program damages the part, the tool, or the machine.
</details>