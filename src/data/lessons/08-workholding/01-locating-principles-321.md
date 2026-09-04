---
title: "Locating Principles: The 3-2-1 Rule"
module: "08-workholding"
lessonNumber: 1
description: "How the 3-2-1 locating principle constrains a workpiece's six degrees of freedom to set up repeatable, accurate fixturing."
objectives:
  - "Explain how three mutually perpendicular datum planes remove all six degrees of freedom from a workpiece"
  - "State how many locating points the primary, secondary, and tertiary planes each use and which degrees of freedom each removes"
  - "Distinguish locating from supporting and from clamping"
  - "Choose locating surfaces that keep a fixture accurate and repeatable"
difficulty: "beginner"
duration: "50 minutes"
tags: ["workholding", "locating", "3-2-1-principle", "fixturing"]
---

## Why Locating Comes First

Every workholding setup does three separate jobs: **locating** a part in a known position, **supporting** it against the forces of cutting, and **clamping** it so it can't move. Confusing these three is the most common fixturing mistake a new machinist makes. A clamp does not locate a part — it only holds the part against whatever is already locating it. Get the locating scheme wrong and no amount of clamping force will fix it.

Locating is a geometry problem before it is a hardware problem: a rigid body free in space has six ways it can move, and a locating scheme must remove all six, no more and no fewer.

## The Six Degrees of Freedom

A workpiece floating in space can move in six independent ways:

- **Three translations** — sliding along X, Y, and Z.
- **Three rotations** — tipping about X, Y, and Z.

:::key-concept
A fully located part has all six degrees of freedom removed by contact with the fixture. Fewer than six leaves the part free to shift or rock; more than six over-constrains it, forcing the part (or the fixture) to deflect just to make contact everywhere at once.
:::

## The Primary Plane — Three Points

The **primary locating plane** contacts the workpiece at three points, arranged as far apart as the part allows rather than clustered together — three points close together barely resist tipping. Three points removes **three degrees of freedom**: translation along the plane's normal direction, plus rotation about the two axes that lie in the plane. The part can still slide across the plane and spin about the axis perpendicular to it, but it can no longer lift off or rock.

Choose the primary plane as the largest, flattest, most stable surface available — ideally a surface that is already machined, since locating against an as-cast or as-forged face bakes that surface's variation directly into every subsequent operation.

## The Secondary Plane — Two Points

A second plane, perpendicular to the first, contacts the part at two points. This removes **two more degrees of freedom**: translation along the secondary plane's normal, and rotation about the axis perpendicular to both planes so far. Combined with the primary plane, four of the six degrees of freedom are now gone — the part can only slide in one remaining direction and can no longer rotate at all.

## The Tertiary Point — the Last Degree of Freedom

A third plane, perpendicular to the first two, contacts the part at a single point. That one point removes the last **translational** degree of freedom. With three points on the primary plane, two on the secondary, and one on the tertiary — **3-2-1, six points, six degrees of freedom** — the part is fully and uniquely located. No more contact points are needed to fix its position, and adding more risks over-constraint.

:::pro-tip
Say the plane names out loud as you set up a new fixture — "primary, secondary, tertiary" — and count contacts on each. It catches the two most common locating mistakes before they cost you a part: a fourth point sneaking onto the primary plane, or only one point where the secondary plane needs two.
:::

## Locating vs. Supporting vs. Clamping

These three jobs are easy to blur once real hardware is involved, but they stay conceptually separate:

- **Locating** points fix position and orientation. There are exactly six of them in a 3-2-1 scheme, and each removes a specific degree of freedom.
- **Supporting** points add contact under the workpiece purely to resist deflection from cutting forces or the part's own weight — typically under a long, thin, or overhanging section. A support does not add a new locating constraint; a properly used jack screw or adjustable support is brought up to just touch the part *after* locating is complete, so it carries load without shifting the established position.
- **Clamping** applies force to hold the part against its locators. A clamp resists the part lifting or sliding off the locating points during cutting — it does not, by itself, establish where the part sits.

:::warning
Locating a part on a surface that isn't flat — a warped casting, a part with a burr, swarf trapped between the part and the locator — lets the part rock on its "three points." The part will locate differently every time it's loaded, and every downstream dimension inherits that error. Clean locating surfaces and check for flatness before you trust a fixture.
:::

## Matching Fixture Datums to Drawing Datums

Whenever possible, choose locating surfaces that match the datum reference frame called out on the part drawing (you'll cover datum reference frames formally in the GD&T module). Locating on the same surfaces the designer used to define tolerances keeps the machining setup consistent with how the part will be measured and how it will actually be assembled — locating on a different, "convenient" surface introduces a translation between the two reference frames, and that translation eats directly into your tolerance budget.

## Self-Check Questions

**1. How many total degrees of freedom does a rigid workpiece have, and how many locating points does the 3-2-1 principle use to remove them?**

<details>
<summary>Show Answer</summary>

Six degrees of freedom — three translations and three rotations — removed by six locating points: three on the primary plane, two on the secondary, and one on the tertiary.
</details>

**2. What degrees of freedom does the primary locating plane remove?**

<details>
<summary>Show Answer</summary>

Translation along the plane's normal direction, plus rotation about the two axes that lie within the plane — three degrees of freedom from three points.
</details>

**3. Why must a jack screw or adjustable support be brought up to the part only after locating is established?**

<details>
<summary>Show Answer</summary>

Because a support's job is to resist deflection under load, not to set position. Bringing it up before locating risks it pushing the part off its true locating points and adding an unintended constraint.
</details>

**4. Why does locating on the same datum surfaces the drawing specifies matter for accuracy?**

<details>
<summary>Show Answer</summary>

Because it keeps the machining reference frame identical to the inspection reference frame. Locating on a different surface introduces a translation between the two, which consumes part of the tolerance the designer allowed.
</details>

**5. What goes wrong if a locating surface is not flat or has debris on it?**

<details>
<summary>Show Answer</summary>

The part rocks on its contact points instead of seating consistently, so it locates in a slightly different position each time it's loaded — and every dimension machined from that setup inherits the error.
</details>
