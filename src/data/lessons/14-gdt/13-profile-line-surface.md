---
title: "Profile: Profile of a Line and Profile of a Surface"
module: "14-gdt"
lessonNumber: 13
description: "Control a complex 2D outline or a full 3D surface within a tolerance band — GD&T's most versatile control, capable of governing size, form, orientation, and location at once."
objectives:
  - "Distinguish profile of a line from profile of a surface"
  - "Explain what a profile tolerance zone looks like relative to the true (theoretical) profile"
  - "Explain how a profile callout with datum references can control more than just form"
  - "Explain why profile has become one of the most widely used modern GD&T controls"
difficulty: "advanced"
duration: "45 minutes"
tags: ["gdt", "profile", "asme-y14.5"]
---

## Controlling a Complex Shape Directly

Every geometric control covered so far in this module handles a relatively simple feature type — a flat surface, a round hole, a cylindrical shaft. **Profile** controls are built for something else: a genuinely complex, often irregular 2D outline or 3D surface, defined relative to its theoretically perfect (basic-dimensioned) shape, that none of the other controls are well suited to handle directly.

## Profile of a Line

**Profile of a line** controls a 2D cross-sectional outline — a specific curve or contour, taken as a single cross-section through the part — requiring every point along that outline to fall within a tolerance zone defined by two curves offset from the true theoretical profile by the stated tolerance value.

## Profile of a Surface

**Profile of a surface** extends the same idea to a full 3D surface rather than a single 2D cross-section — every point across the entire controlled surface must fall within a tolerance zone defined by two theoretical surfaces offset from the true surface by the stated tolerance, in every direction across the whole area.

:::key-concept
Profile of a line is to a 2D contour what profile of a surface is to a full 3D shape — the same underlying idea (a tolerance band around a theoretically perfect shape) applied to a cross-section versus applied to an entire surface, directly paralleling the circularity-to-cylindricity relationship covered earlier in this module.
:::

## One Callout, Multiple Controls at Once

A profile tolerance can be specified **without** any datum reference, in which case it controls only form — how well the actual shape matches its theoretical shape, regardless of orientation or location, similar in spirit to the form controls covered earlier. But specified **with** datum references, a profile callout becomes far more powerful: it simultaneously controls the feature's **size, form, orientation, and location all at once**, relative to those datums, within the single tolerance zone.

:::pro-tip
This is the single biggest reason profile of a surface has become one of the most widely applied GD&T controls in modern practice: a single, well-specified profile callout referencing appropriate datums can replace what would otherwise require several separate callouts (form, orientation, and location controls specified individually) to fully define a complex surface's requirements.
:::

## Why Profile Fits Complex Geometry So Well

Because a profile tolerance zone is defined relative to the part's theoretical (basic-dimensioned) shape rather than to a simple geometric primitive like a plane or a cylinder, it works equally well on a genuinely irregular, freeform surface as it does on a simple flat or round feature — where controls like flatness or cylindricity are inherently limited to the specific simple geometry they're defined for. Complex aerospace, automotive, and consumer product surfaces — anything with organic or compound curvature — rely heavily on profile of a surface for exactly this reason.

## Self-Check Questions

**1. What is the fundamental difference in scope between profile of a line and profile of a surface?**

<details>
<summary>Show Answer</summary>

Profile of a line controls a single 2D cross-sectional outline; profile of a surface extends the same tolerance-band concept to control an entire 3D surface across its full area.
</details>

**2. What does a profile tolerance zone look like relative to the feature's theoretical shape?**

<details>
<summary>Show Answer</summary>

Two offset curves (for profile of a line) or two offset surfaces (for profile of a surface), separated from the true theoretical profile by the stated tolerance value, with the actual feature required to fall between them.
</details>

**3. What is the practical difference between a profile callout with no datum reference and one that includes datum references?**

<details>
<summary>Show Answer</summary>

Without datums, it controls only form — how well the shape matches its theoretical version, regardless of orientation or location. With datums, it can simultaneously control size, form, orientation, and location all at once, relative to those datums.
</details>

**4. Why has profile of a surface become one of the most widely used GD&T controls in modern practice?**

<details>
<summary>Show Answer</summary>

A single, well-specified profile callout with appropriate datums can replace what would otherwise require several separate form, orientation, and location callouts to fully define a complex surface's requirements.
</details>

**5. Why is profile better suited to a genuinely irregular, freeform surface than a control like flatness or cylindricity?**

<details>
<summary>Show Answer</summary>

Profile is defined relative to the part's actual theoretical (basic-dimensioned) shape, whatever that shape is, rather than to a simple geometric primitive like a plane or cylinder that flatness or cylindricity are inherently limited to.
</details>
