---
title: "Datum Selection: Primary, Secondary, Tertiary — and Their Order"
module: "14-gdt"
lessonNumber: 3
description: "Choose and order datum features so the datum reference frame reflects how a part actually functions and gets held, connecting directly to the 3-2-1 locating principle."
objectives:
  - "Explain what a datum feature and a datum reference frame are"
  - "Connect the primary/secondary/tertiary datum order to the 3-2-1 locating principle"
  - "Select datum features that reflect a part's actual function and assembly"
  - "Explain why datum order changes what a print actually requires"
difficulty: "intermediate"
duration: "45 minutes"
tags: ["gdt", "datums", "asme-y14.5"]
---

## Datum Features and the Datum Reference Frame

A **datum feature** is an actual, physical feature on the part — a face, a hole, an edge — selected as a reference that other features are toleranced relative to. A **datum reference frame** is the theoretical, perfectly precise coordinate system established from a set of datum features, against which every GD&T-toleranced dimension on the print is actually measured.

This is the direct GD&T equivalent of the 3-2-1 locating principle covered in the workholding module — in fact, it's the same underlying concept, just named and formalized for print interpretation rather than physical fixture design.

## Primary, Secondary, Tertiary — Mirroring 3-2-1

- The **primary datum** contacts the part at (theoretically) three points, removing three degrees of freedom — exactly the role the primary locating plane plays in the 3-2-1 principle.
- The **secondary datum** contacts at two points, removing two more degrees of freedom.
- The **tertiary datum** contacts at one point, removing the final degree of freedom.

:::key-concept
GD&T's primary/secondary/tertiary datum order and the workholding module's 3-2-1 locating principle describe exactly the same geometric logic — three planes removing six total degrees of freedom, in precedence order. GD&T formalizes this into print language; the 3-2-1 principle applies it directly to fixture design. Understanding one makes the other immediately intuitive.
:::

## Selecting Datum Features

Datum features should be chosen to reflect **how the part actually functions and assembles**, not simply whatever surface is convenient to measure from. Good datum selection typically considers:

- **Functional relevance** — a mounting face that actually contacts a mating part in the assembly makes a far more meaningful datum than an arbitrary surface that happens to be flat and easy to measure.
- **Assembly sequence** — datums that reflect the actual order and orientation a part is assembled in keep the toleranced dimensions meaningful to how the part is actually used, not just how it's inspected on a table.
- **Accessibility for both manufacturing and inspection** — a datum surface needs to be reachable by both the fixture holding the part during machining and the gauge or CMM measuring it afterward, echoing the workholding-access DFM principle covered in the CAD module.

:::warning
Choosing a datum feature purely for measurement convenience, without regard to the part's actual function or assembly, can produce a print that's technically unambiguous but functionally meaningless — a part can pass every dimensional check relative to a convenient-but-irrelevant datum and still fail to assemble or function correctly in the actual product.
:::

## Why Datum Order Changes the Actual Requirement

Because each datum in sequence establishes fewer remaining degrees of freedom than the one before it, **swapping which datum is primary versus secondary changes what the print actually requires**, even with the exact same three datum features listed. A part's true position relative to datum A-then-B is a genuinely different requirement than its true position relative to datum B-then-A — the same three physical reference surfaces, evaluated in a different sequence, define a different datum reference frame entirely.

:::pro-tip
When reviewing or creating a GD&T callout, ask what the part actually needs to be measured from *first* — which surface establishes the most critical relationship — and make that the primary datum. The datum order should follow the part's functional priority, not just the order the surfaces happen to be listed in a drawing view.
:::

## Self-Check Questions

**1. What is the difference between a datum feature and a datum reference frame?**

<details>
<summary>Show Answer</summary>

A datum feature is an actual physical feature on the part (a face, hole, or edge). A datum reference frame is the theoretical, perfectly precise coordinate system established from a set of datum features, against which toleranced dimensions are actually measured.
</details>

**2. How does the primary/secondary/tertiary datum order in GD&T relate to the 3-2-1 locating principle?**

<details>
<summary>Show Answer</summary>

They describe the same geometric logic: primary removes three degrees of freedom (three-point contact), secondary removes two more, tertiary removes the last one — GD&T formalizes this for print interpretation, while 3-2-1 applies it to physical fixture design.
</details>

**3. Why should a datum feature reflect a part's actual function or assembly rather than just measurement convenience?**

<details>
<summary>Show Answer</summary>

A datum chosen purely for convenience can produce a print that's technically unambiguous but functionally meaningless — a part could pass inspection relative to that datum while still failing to assemble or function correctly.
</details>

**4. Why can |A|B|C| and |B|A|C| represent genuinely different manufacturing and inspection requirements, even with identical datum features?**

<details>
<summary>Show Answer</summary>

Each datum in sequence establishes progressively fewer remaining degrees of freedom, so the order defines a different datum reference frame entirely — the same physical surfaces evaluated in a different sequence produce a different actual requirement.
</details>

**5. What question should guide which datum feature is selected as primary?**

<details>
<summary>Show Answer</summary>

Which surface the part actually needs to be measured from first — establishing the most functionally critical relationship — rather than simply which surface happens to be listed first or is easiest to measure.
</details>
