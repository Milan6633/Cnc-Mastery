---
title: "Face Milling and 2D Contour/Profile Toolpaths"
module: "15-cam-milling"
lessonNumber: 5
description: "Generate a CAM toolpath to true a flat top surface, then cut a part's outer silhouette or an internal wall with a 2D contour toolpath."
objectives:
  - "Explain the purpose of a face milling toolpath as typically the first operation in a program"
  - "Configure stepover and direction settings for a face milling toolpath"
  - "Explain what a 2D contour (profile) toolpath follows and how offset direction is controlled"
  - "Explain what 'stock to leave' means for a contour toolpath"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cam", "fusion360", "mastercam", "face-milling", "contour"]
---

## Face Milling: Establishing a Known Reference

A **face milling** toolpath automates the same job covered for manual face milling in the manual machining module: truing a broad, flat top surface to a known, consistent height. It's frequently the very first operation in a CAM program, establishing a reliable Z reference — and often the part's actual top-of-stock surface — before any other operation begins.

- **Stepover** — set as a percentage of the tool's diameter, controlling how much each successive pass overlaps the previous one; a smaller stepover gives a finer, more consistent finish at the cost of more total passes.
- **Direction** — climb or conventional, carrying the same finish, tool-life, and machine-backlash considerations covered in the manual machining module's climb-versus-conventional lesson, just selected as a CAM parameter rather than a manual technique decision.

## 2D Contour (Profile) Toolpaths

A **2D contour** (or profile) toolpath follows a defined 2D boundary — a closed loop for a part's outer silhouette, or an open or closed path for an internal wall — machining along that boundary at a constant Z, or stepping through multiple Z levels for a deeper wall than one pass can handle safely.

:::key-concept
A contour toolpath's boundary geometry is the path; the tool's actual cutting position is offset from that boundary by the tool's radius, in whichever direction (inside, outside, or on the line) the operation specifies. This offset relationship is the CAM-software equivalent of cutter compensation covered in the G-code modules — the software calculates the actual tool center path automatically from the intended boundary.
:::

## Offset Direction and Stock to Leave

- **Offset side** — inside, outside, or centered on the boundary geometry — determines whether the toolpath cuts material away from or up to the specified line, matching whether the boundary represents a part's final outer edge (offset outside, cutting away everything beyond it) or an internal wall (offset inside, if the wall itself is the boundary).
- **Stock to leave** — the same rough-then-finish allowance concept covered for pocket and general operations — a roughing contour pass typically leaves a small allowance for a separate finishing contour pass to remove, rather than attempting to reach final wall dimension in one pass.

:::pro-tip
Even a simple-looking outer profile is usually programmed as two contour operations, not one — a roughing pass leaving a small allowance, then a finishing pass at zero stock to leave — for exactly the same reason a lathe operator takes a separate finishing pass rather than trying to hit final diameter on the first cut.
:::

## Self-Check Questions

**1. Why is face milling frequently the first operation in a CAM program?**

<details>
<summary>Show Answer</summary>

It trues the raw stock's top surface to a known, consistent height, establishing a reliable Z reference (often the actual top-of-stock) before any other operation begins.
</details>

**2. What does the stepover setting control in a face milling toolpath, and what's the tradeoff of a smaller value?**

<details>
<summary>Show Answer</summary>

It controls how much each successive pass overlaps the previous one, set as a percentage of tool diameter. A smaller stepover gives a finer, more consistent finish but requires more total passes.
</details>

**3. What does a 2D contour toolpath's offset side setting actually control?**

<details>
<summary>Show Answer</summary>

Whether the tool cuts inside, outside, or centered on the specified boundary geometry, determining whether material is removed from outside a part's final edge or from inside an internal wall boundary.
</details>

**4. Why is an outer profile typically programmed as two separate contour operations rather than one?**

<details>
<summary>Show Answer</summary>

A roughing pass leaves a small stock allowance, and a separate finishing pass removes it at zero stock to leave — the same rough-then-finish logic applied to hitting a wall's final dimension and finish accurately.
</details>

**5. How does a 2D contour toolpath's boundary-to-tool-path relationship compare to cutter compensation in G-code?**

<details>
<summary>Show Answer</summary>

They solve the same problem — the software calculates the actual tool center path, offset by the tool's radius from the intended boundary, automatically, the same underlying concept as G-code cutter compensation just handled at the CAM software level.
</details>
