---
title: "Line Types and Line Weight"
module: "03-blueprint-reading"
lessonNumber: 5
description: "Decode the alphabet of engineering drawings — object lines, hidden lines, center lines, phantom lines, and more."
objectives:
  - "Identify all standard line types on a technical drawing"
  - "Explain the difference between thick and thin lines"
  - "Read hidden lines to find internal features"
  - "Understand center lines, phantom lines, and break lines"
duration: "30 minutes"
difficulty: "beginner"
tags: ["blueprint", "line-types", "hidden-lines", "center-lines"]
---

## Lines Carry Meaning

Lines are the alphabet of the drawing. A dashed line and a solid line at the same position mean completely different things — one may mean a hole you can see, the other a hole that's hidden behind material. Reading line types correctly is the difference between making a good part and a scrap part.

## The Line Type Table

| Line type | Appearance | Weight | Meaning |
|---|---|---|---|
| Object (visible) | Solid continuous | **Thick** | Visible edges of the part |
| Hidden | Short dashes | Thin | Edges hidden behind material |
| Center | Long dash – short dash | Thin | Axes, hole centers, symmetry |
| Dimension | Thin continuous with arrowheads | Thin | Shows the measured size |
| Extension | Thin continuous, extends from part | Thin | Connects dimension to feature |
| Leader | Thin angled line with arrowhead | Thin | Points to a feature for a note/callout |
| Cutting plane | Long dashes with arrows | **Thick** | Where a section is cut (Lesson 3) |
| Phantom | Long dash – double short dash | Thin | Alternate position, adjacent part, movement |
| Break | Zigzag or S-shaped | Thick | Part of the view removed for clarity |

## Thick vs Thin — Why Weight Matters

Line weight is meaningful:

- **Thick lines** = object edges and cutting planes — the "real" outline of the part
- **Thin lines** = information (dimensions, centers, hidden edges, leaders)

:::pro-tip
When a drawing is crowded, scan for the **thick lines first**. They outline the actual shape of the part. Everything thin is supporting information.
:::

## Object Lines — The Visible Shape

Object lines (also called visible lines) are thick, solid lines showing the edges you would see looking at the part. The outline of every view is made of object lines.

## Hidden Lines — What's Behind the Surface

Hidden lines are thin dashes showing edges you **cannot see** because they are behind material — the far side of a through-hole, an internal step, a pocket floor.

:::key-concept
A hidden line means: "there is an edge or feature here, but it's inside or behind the part." When you see dashed lines in a view, imagine looking through the material — that's where the internal feature is.
:::

## Center Lines — Finding the Middle

Center lines (long dash – short dash) mark:

- The center of holes and round features
- Axes of symmetry
- Bolt circle positions

They are **reference lines, not part edges** — never machine "to" a center line; it marks where a feature axis is. Hole callouts sit on center lines, and the intersection of two center lines marks a hole location.

## Phantom Lines — Alternate Positions and Neighbors

Phantom lines (long dash – double short dash) show:

- The **alternate position** of a moving part (e.g., a hinge opened or closed)
- An **adjacent part** in an assembly for reference
- Existing features to be removed

They exist for context — the machinist does not machine phantom lines.

## Break Lines — Shortening a Long Part

Break lines show that a portion of a long, uniform part (shaft, bar) has been removed from the view so it fits on the paper. The dimension still gives the true total length.

:::warning
If a view shows break lines, the part is **longer** than the drawing suggests. Always trust the dimension for total length — never estimate from the shortened view.
:::

## Reading Practice: A Bracket with Holes

```text
     |---- Ø10 ----|
     |   .   .     |
  ┌──┼───┼───┼────┐   <- object lines: outer shape
  │  │   │   │    │   <- hidden lines: internal pocket edges
  └──┼───┼───┼────┘
     |   .   .     |   <- center lines: hole axes
```

- Object lines: the outer shape of the bracket
- Center lines: hole positions (both holes on the same axis)
- Hidden lines: an internal pocket or back wall not visible from this side
- Dimension line with Ø10: hole diameter

## Self-Check Questions

**1. What does a hidden (dashed) line represent?**

<details>
<summary>Show Answer</summary>

A hidden line shows an edge or feature that exists but is not visible from the current viewing direction because it is behind material — for example, the far side of a through-hole or an internal step.
</details>

**2. What do center lines mark, and what do they NOT mark?**

<details>
<summary>Show Answer</summary>

Center lines mark the axes of holes, round features, and symmetry. They are reference lines, not part edges — they do not represent material and should never be machined as if they were edges.
</details>

**3. Why should you trust the dimension instead of the length of a view with break lines?**

<details>
<summary>Show Answer</summary>

Break lines mean part of a long, uniform feature has been removed from the view to save space. The drawn length is shorter than the real part, so only the dimension gives the true total length.
</details>
