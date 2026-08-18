---
title: "Orthographic Projection"
module: "03-blueprint-reading"
lessonNumber: 2
description: "Learn how 3D parts are represented on 2D paper using orthographic views, and distinguish third-angle from first-angle projection."
objectives:
  - "Explain the glass box method of orthographic projection"
  - "Identify front, top, and right-side views in third-angle projection"
  - "Distinguish third-angle from first-angle view placement"
  - "Trace features across views using alignment"
duration: "40 minutes"
difficulty: "beginner"
tags: ["blueprint", "orthographic", "projection", "views"]
---

## From 3D Part to 2D Paper

A part exists in three dimensions, but paper is flat. A single drawing cannot show every side of the part accurately — a picture can fool your eye about size and angle. That's why engineers use **orthographic projection**: several 2D views, each showing the part looking straight at one face, with no perspective distortion.

Because each view is drawn at true size and true angle, dimensions can be measured and machined exactly.

## The Glass Box Method

Imagine placing your part inside a transparent glass box:

1. Look straight at the **front** face — that's your front view.
2. Look straight down from **above** — that's your top view.
3. Look straight at the **right side** — that's your right-side view.

Now unfold the box into a flat sheet. Each face of the box becomes a drawing view. This is the glass box method, and it's how every machinist learns to visualize prints.

## Third-Angle Projection

In **third-angle projection** (the US and international standard), the views unfold like this:

```text
        +--------+
        |  TOP   |
        +--------+--------+
        | FRONT  | RIGHT  |
        +--------+--------+
```

- Front view: the "main" view, chosen to show the most information
- **Top view: directly above** the front view
- **Right-side view: directly to the right** of the front view

:::key-concept
In third-angle projection, a feature on the front view lines up vertically with the same feature on the top view, and lines up horizontally with the same feature on the side view. Use these alignments to read where features are.
:::

## First-Angle Projection

Some European drawings use **first-angle projection**, where the views unfold the other way:

```text
        +--------+--------+
        | FRONT  | LEFT   |
        +--------+--------+
        |  TOP   |
        +--------+
```

- **Top view: directly below** the front view
- **Right-side view: directly to the left** of the front view

The part is identical — only the placement of the views changes. The title block symbol (a truncated cone) tells you which convention is used.

:::warning
On a third-angle drawing, the right-side view is drawn to the *right* of the front view. On a first-angle drawing it is drawn to the *left*. Reading the wrong convention means machining the wrong side of the part.
:::

## Reading the Three Main Views

- The **front view** is chosen to show the most detail — usually the largest face or the one with the most features.
- The **top view** shows depth and the position of features front-to-back.
- The **side view** shows height and the position of features left-to-right.

Ask yourself three questions when reading a view:

1. What shape is this face? (rectangle, circle, slot...)
2. What features are on it? (holes, pockets, bosses)
3. How deep are they? (answer comes from the adjacent view)

## How Many Views Do You Need?

| Part type | Typical views |
|---|---|
| Turned part (shaft, bushing) | One view + diameter dimensions (Ø) |
| Flat plate, one thickness | One or two views |
| Mill block with holes/pockets | Three views (front, top, side) |
| Complex casting | Three views + sections (Lesson 3) |

If a part is round, one view showing the length plus Ø dimensions is often enough. If it's a block with features on several faces, you need three views.

## Practice: A Simple Block

```text
        +--------+
        |   []   |    <- hole in top view
        +--------+--------+
        |  []    |        |    <- hole in front view
        +--------+--------+
```

The top view shows a hole; the front view shows the same hole lower down. Because the views align vertically, you know the hole goes straight through the block at that X-position — the depth comes from the side view or the Ø callout (THRU).

:::pro-tip
Trace features from view to view with your finger or a straightedge. A hole center in the top view and the front view must share the same vertical line. If they don't, you're misreading the views.
:::

## Self-Check Questions

**1. Why use orthographic views instead of a single 3D picture?**

<details>
<summary>Show Answer</summary>

Orthographic views show each face at true size with no perspective distortion, so every dimension is accurate and measurable. A single pictorial view distorts angles and sizes and cannot define a part precisely enough for machining.
</details>

**2. In third-angle projection, where do the top and right-side views go?**

<details>
<summary>Show Answer</summary>

The top view is placed directly above the front view, and the right-side view is placed directly to the right of the front view.
</details>

**3. Why should you check the projection symbol on a print?**

<details>
<summary>Show Answer</summary>

Because it tells you whether the drawing uses third-angle or first-angle projection. Mixing them up reverses where views are placed, which can lead to machining the wrong side of the part.
</details>
