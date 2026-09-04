---
title: "CAD-to-CAM Workflow: Importing Geometry and Defining Stock"
module: "15-cam-milling"
lessonNumber: 1
description: "Bring a 3D model into CAM software and define the raw stock it's machined from — the two setup steps every CAM program starts with."
objectives:
  - "Explain what associativity means when a CAM setup is linked to a CAD model"
  - "Compare the common stock definition methods and when each applies"
  - "Explain why an inaccurate stock definition creates a real collision risk"
  - "Explain why a fixed stock-to-finish allowance behaves differently than a bounding-box definition"
difficulty: "intermediate"
duration: "45 minutes"
tags: ["cam", "fusion360", "mastercam", "cad-to-cam", "stock-definition"]
---

## From Design Model to Manufacturing Setup

CAM (Computer-Aided Manufacturing) software takes a 3D model — built the way this curriculum's CAD module covered — and generates the actual toolpaths and G-code needed to cut it. The first two setup steps in any CAM program are bringing the model in and telling the software what raw material it's actually starting from.

## Importing Geometry and Associativity

A CAM setup can reference a CAD model either as a **static, imported copy** or as an **associative link** back to the original CAD file. With an associative link, a change to the source model propagates into the CAM setup automatically — the same parametric-modeling principle covered throughout the CAD module, extended from design changes into manufacturing programming.

:::key-concept
An associative CAM setup means a design revision doesn't require rebuilding the CAM program from scratch — toolpaths recalculate against the updated geometry automatically. A static, non-associative import breaks that link, and a design change after CAM programming has started risks the toolpaths silently referencing outdated geometry unless someone remembers to re-import manually.
:::

## Defining Stock

The **stock** definition tells the CAM software exactly what raw material shape the part actually starts as, before any material is removed. Common methods include:

- **Bounding box** — a simple rectangular (or cylindrical) block sized to fully enclose the model, plus a specified stock allowance. Fast to set up, well suited to a part actually starting from squared-off bar or plate stock.
- **Cylinder** — a round stock definition matched to the part's actual round bar diameter, the natural choice for turned or largely round-profile parts.
- **Offset from model** — stock defined as a uniform allowance offset from the finished part's own surface everywhere, useful when the raw material closely follows the part's final shape (a near-net casting or forging) rather than a simple block.
- **Imported or measured stock model** — an actual 3D model of the real raw stock (a casting or forging with its own as-cast geometry), used when the stock shape is too irregular for any of the simpler definitions to represent accurately.

## Why Accurate Stock Definition Matters

The stock definition directly determines where the CAM software believes material actually exists — which shapes every roughing toolpath's boundaries, every rapid move's clearance planning, and every cycle-time estimate calculated from the program.

:::warning
A stock definition set smaller than the part's actual raw material tells the software there's no material in a region where physical stock actually exists — generating rapid, non-cutting moves that assume clear air where a real collision with solid material is waiting. This is a genuine crash risk, not just an inaccuracy, and it's a direct consequence of a setup step that happens before a single toolpath is even calculated.
:::

Conversely, a stock definition set larger than the actual raw material wastes machining time: roughing toolpaths generate motion to clear material that was never actually there, and cycle-time estimates from the program run longer than the real cut actually needs.

## Fixed Allowance vs. Bounding Box in Practice

A bounding-box stock definition with a stock allowance behaves differently from an offset-from-model definition in one important way: the bounding box's allowance is measured from the model's overall extents, so it can leave dramatically more material in some areas than others on an irregularly-shaped part, while an offset-from-model definition keeps the allowance consistent everywhere across the part's actual surface. Choosing between them should reflect how the real raw stock the part is actually cut from behaves — a squared block of bar stock genuinely does leave more material in some areas of an irregular part than others, so a bounding-box definition correctly represents that reality, where an offset definition would not.

## Self-Check Questions

**1. What does an associative link between a CAM setup and its source CAD model provide that a static import doesn't?**

<details>
<summary>Show Answer</summary>

A design change in the CAD model propagates automatically into the CAM setup, recalculating toolpaths against the updated geometry — a static import breaks that link, risking toolpaths referencing outdated geometry after a design revision.
</details>

**2. When would an offset-from-model stock definition be more appropriate than a bounding box?**

<details>
<summary>Show Answer</summary>

When the raw material closely follows the part's final shape already, such as a near-net casting or forging, where a consistent allowance around the actual surface better represents the real stock than a simple enclosing block would.
</details>

**3. Why is a stock definition set smaller than the actual raw material a genuine collision risk, not just an inaccuracy?**

<details>
<summary>Show Answer</summary>

It tells the software there's no material in a region where physical stock actually exists, generating rapid non-cutting moves through space the software believes is clear but that actually contains solid material.
</details>

**4. What's the practical consequence of defining stock larger than the part's actual raw material?**

<details>
<summary>Show Answer</summary>

Roughing toolpaths generate wasted motion clearing material that was never actually there, and cycle-time estimates run longer than the real cut actually requires.
</details>

**5. Why might a bounding-box stock definition correctly represent an irregular part's actual raw stock, even though it leaves uneven material in different areas?**

<details>
<summary>Show Answer</summary>

A squared block of real bar or plate stock genuinely does leave more material in some areas of an irregular part than others — the bounding box's uneven allowance can be an accurate representation of that real-world starting material, unlike an offset-from-model definition, which assumes uniform allowance everywhere.
</details>
