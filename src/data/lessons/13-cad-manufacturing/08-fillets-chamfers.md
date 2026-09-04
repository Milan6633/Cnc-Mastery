---
title: "Fillets and Chamfers"
module: "13-cad-manufacturing"
lessonNumber: 8
description: "Round or bevel a sharp edge with fillet and chamfer features, and know why edge-selection order in the tree matters more than it looks like it should."
objectives:
  - "Distinguish a fillet from a chamfer"
  - "Select multiple edges efficiently for a consistent fillet or chamfer"
  - "Explain why fillets and chamfers are usually applied near the end of the feature tree"
  - "Recognize when a fillet operation can fail on complex or tangent geometry"
difficulty: "beginner"
duration: "35 minutes"
tags: ["cad", "fusion360", "solidworks", "fillet", "chamfer"]
---

## Fillet: A Rounded Edge

A **fillet** rounds a sharp edge with a specified radius, replacing the original sharp intersection between two faces with a smooth, curved transition. Fillets serve both functional and cosmetic purposes: they reduce stress concentration at an internal corner (a sharp internal corner is a classic crack-initiation point under repeated load), improve how a part handles or feels, and — for a part that will be machined — reflect the reality that a rotating cutting tool can't produce a perfectly sharp internal corner anyway, covered in this module's design-for-manufacturability lessons.

## Chamfer: A Flat Bevel

A **chamfer** replaces a sharp edge with a flat, angled bevel rather than a rounded one — typically specified by a distance and an angle, or by two distances for an asymmetric chamfer. Chamfers commonly serve a practical role a fillet doesn't: breaking a sharp edge to remove a burr risk and ease assembly (a chamfered hole edge helps guide a fastener or a mating part into position), and they're often faster and simpler to actually machine than an equivalent fillet.

:::key-concept
A fillet and a chamfer both remove a sharp edge, but a fillet does it with a curve and a chamfer does it with a flat bevel — the choice between them is rarely arbitrary. A chamfer is often specified where ease of manufacturing or assembly-lead-in matters most; a fillet is specified where stress reduction or a smooth, rounded appearance matters most.
:::

## Selecting Multiple Edges Consistently

Both fillet and chamfer tools let multiple edges be selected in a single feature, applying the same radius (or bevel dimensions) to all of them at once — far more efficient than adding separate individual features for every edge that needs the same treatment, and it keeps them tied to one editable value if the design changes later. Selecting a whole face, rather than individual edges, typically applies the fillet or chamfer to every edge of that face at once, a useful shortcut for a feature (like a block) where every edge of a given face needs the same treatment.

## Why Order Matters: Apply Fillets and Chamfers Late

Fillets and chamfers are generally applied **near the end** of a model's feature tree, after the part's main functional geometry is otherwise complete. This isn't just convention — it's because fillets and chamfers reference specific edges, and those edges only exist in their final form once the geometry that creates them is finished. Applying a fillet early, then making a significant geometry change afterward, risks that edge no longer existing in the same form, breaking the fillet feature.

:::warning
A fillet or chamfer applied too early in the tree is a common source of "history rebuild errors" when an earlier feature changes — the fillet may reference an edge that's shifted, merged with another edge, or disappeared entirely as a result of the upstream change, forcing the modeler to fix or recreate the fillet feature.
:::

## When Fillets Fail

A fillet can fail to compute even on geometry that looks reasonable, particularly where multiple fillets meet at a single vertex, where a requested fillet radius is larger than the surrounding geometry can actually support, or where fillets are chained edge-to-edge around a complex, tightly curved shape. When this happens, reducing the radius, applying fillets to related edges in a different order or as separate features, or reworking the underlying geometry are all standard troubleshooting approaches.

## Self-Check Questions

**1. What is the fundamental difference between what a fillet and a chamfer do to an edge?**

<details>
<summary>Show Answer</summary>

A fillet replaces the sharp edge with a smooth, rounded curve; a chamfer replaces it with a flat, angled bevel — both remove the sharp intersection, but with different resulting geometry.
</details>

**2. Why might a chamfer be chosen over a fillet for a hole that a fastener needs to be guided into?**

<details>
<summary>Show Answer</summary>

A chamfer's flat bevel provides a practical lead-in that helps guide a fastener or mating part into position, and chamfers are often simpler and faster to actually machine than an equivalent fillet.
</details>

**3. Why are fillets and chamfers generally applied near the end of the feature tree rather than early?**

<details>
<summary>Show Answer</summary>

They reference specific edges that only exist in their final form once the geometry creating them is complete. Applying them early risks a later geometry change altering or removing that edge, breaking the fillet or chamfer feature.
</details>

**4. What is a common cause of a fillet operation failing to compute?**

<details>
<summary>Show Answer</summary>

Multiple fillets meeting at a single vertex, a requested radius larger than the surrounding geometry can support, or fillets chained around a complex, tightly curved shape.
</details>

**5. Why is selecting a whole face, rather than individual edges, often a useful shortcut for fillets and chamfers?**

<details>
<summary>Show Answer</summary>

It applies the same fillet or chamfer to every edge of that face at once, useful when every edge of a given face needs the same treatment, without having to select each edge individually.
</details>
