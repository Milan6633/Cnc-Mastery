---
title: "Insert Shapes, Nose Radius and Wiper Geometry"
module: "07-cutting-tools"
lessonNumber: 5
description: "How insert shape, point angle, entering angle, nose radius and wiper geometry trade strength against accessibility."
objectives:
  - "Identify the seven standard insert shapes and their point angles"
  - "Relate point angle to edge strength and number of cutting edges"
  - "Choose a nose radius and explain the ap ≥ RE rule"
  - "Explain how wiper inserts improve surface finish or feed rate"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["tooling", "inserts", "shape", "nose-radius", "wiper"]
---

## Shape, Point Angle and Strength

Insert shape is selected first for the entering angle accessibility the operation needs, then for strength. A larger point angle gives a stronger cutting edge but less accessibility; a smaller point angle gives more accessibility but a weaker edge.

| Code | Shape | Point angle |
|---|---|---|
| R | Round | — (full circle) |
| S | Square | 90° |
| C | Rhombic | 80° |
| W | Trigon | 80° |
| T | Triangular | 60° |
| D | Rhombic | 55° |
| V | Rhombic | 35° |

:::key-concept
Going up in point angle buys you edge strength and headroom for feed, at the cost of higher cutting forces and a greater tendency to vibrate. Going down trades that strength away for access into corners and profiles, but the forces and vibration drop with it.
:::

## Entering Angle Options per Shape

Each shape offers a set of entering (lead) angles through the holder tip seat.

| Shape | Typical entering angles KAPR (lead PSIR) |
|---|---|
| S square 90° | 45° (45°), 75° (15°) |
| C rhombic 80° | 95° (−5°), 93° (−3°) |
| T triangular 60° | 117.5° (−27.5°), 107.5° (−17.5°), 72.5° (17.5°) |
| W trigon 80° | 93° (−3°), 91° (−1°), 60° (30°) |
| D rhombic 55° | 95° (−5°), 93° (−3°) |
| V rhombic 35° | 95° (−5°) |
| R round | Variable |

## Edge Count: Positive vs Negative

A negative insert is double-sided, so it has about twice the cutting edges of the same shape in positive (single-sided) form.

| Shape | Negative edges | Positive edges |
|---|---|---|
| R round | Many (indexed in small steps) | Many (indexed in small steps) |
| S square | 8 | 4 |
| C rhombic 80° | 4 | 2 |
| W trigon 80° | 6 | 3 |
| T triangular | 6 | 3 |
| D rhombic 55° | 4 | 2 |
| V rhombic 35° | 4 | 2 |

:::pro-tip
Select the largest possible point angle for strength and economy, and the largest nose radius the application can tolerate.
:::

## Nose Radius (RE)

The nose radius blends the corner between the main and secondary edges.

- Large RE: stronger edge, allows heavy feed and large depth of cut, better surface texture — but increases radial pressure and vibration.
- Small RE: ideal for small depths of cut, reduces vibration, but the edge is weaker.

:::warning
Keep the depth of cut at or above the nose radius. Go shallower than RE and the cut concentrates on the nose itself, and stability drops off from there.
:::

Radial force grows with the nose radius until RE reaches the depth of cut, then stabilizes. A round insert is the exception: its effective nose radius is half the insert diameter, so radial pressure never stabilizes.

## Wiper Inserts

A wiper insert replaces the single nose radius with a longer blended edge built from several radii, and that stretched-out contact zone is what improves the surface it leaves behind.

- At the same feed, a wiper gives roughly half the Ra (twice as good a surface).
- At double the feed, a wiper gives the same Ra as a conventional insert at normal feed.

:::key-concept
A wiper's real payoff is flexibility: push the feed to double the normal rate and the surface still comes out as good as a standard insert running slow, or leave the feed alone and the finish itself roughly doubles in quality.
:::

That same extended contact length is what pushes cutting forces up, which is why wipers punish an unstable or lightly clamped setup more than a conventional insert would. They also don't carry that advantage into back turning or profiling passes.

**1. Which insert shape has the strongest edge and which has the most accessibility?**

<details>
<summary>Show Answer</summary>

The round insert (R) has the strongest edge, while the 35° rhombic (V) offers the most accessibility.
</details>

**2. What entering angles are typical for a C-style 80° insert?**

<details>
<summary>Show Answer</summary>

95° (lead angle −5°) and 93° (lead angle −3°).
</details>

**3. How many edges does a negative square insert have, and why more than positive?**

<details>
<summary>Show Answer</summary>

A negative square insert has 8 edges because it is double-sided; the positive square has 4 edges.
</details>

**4. What is the rule for depth of cut relative to nose radius?**

<details>
<summary>Show Answer</summary>

Depth of cut should be no less than the nose radius (ap ≥ RE); choose a nose radius somewhat smaller than ap to limit vibration.
</details>

**5. What is the surface and feed benefit of a wiper insert?**

<details>
<summary>Show Answer</summary>

At the same feed it gives about half the Ra, and at double the feed it gives the same Ra as a conventional insert at normal feed.
</details>
