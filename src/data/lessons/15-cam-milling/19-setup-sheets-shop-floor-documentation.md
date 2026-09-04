---
title: "Setup Sheets: Documentation for the Shop Floor"
module: "15-cam-milling"
lessonNumber: 19
description: "Generate the setup sheet that tells whoever runs the job — who may not be who programmed it — exactly what tools, offsets, and workholding the program actually expects."
objectives:
  - "Explain who a setup sheet is actually written for"
  - "Identify the essential information a setup sheet needs to convey"
  - "Explain why setup sheet accuracy matters as much as the G-code itself"
  - "Explain the benefit of generating a setup sheet directly from the CAM program rather than writing it separately"
difficulty: "beginner"
duration: "35 minutes"
tags: ["cam", "fusion360", "mastercam", "setup-sheets", "documentation"]
---

## Written for Someone Who Isn't You

A **setup sheet** documents everything a machine operator needs to physically set up a job correctly — and critically, it's usually written for **someone other than the person who programmed the job**, possibly on a different shift, possibly running the job weeks or months after it was originally programmed. A setup sheet that only makes sense to the programmer who wrote it, relying on memory or assumptions that person happened to have in their head, fails at its actual purpose.

:::key-concept
Every piece of workholding, tooling, and reference information covered throughout this curriculum — which datum surfaces locate the part, which specific tools and offsets each operation needs, how the stock is oriented — has to be communicated to whoever actually runs the job, not just correctly programmed into the G-code itself. A setup sheet is that communication, and it needs to stand on its own.
:::

## What a Setup Sheet Needs to Convey

A complete setup sheet typically includes:

- **Workholding instructions** — which fixture, vise, or chuck to use, and how the part should be oriented and located within it, directly reflecting the datum structure and fixture design principles covered in the GD&T module.
- **Work offset values** — which coordinate system register (G54, G55, and so on) corresponds to which setup, and where that origin physically is on the part.
- **Tool list** — every tool the program calls for, matched by tool number to the actual physical tools that need to be loaded in the magazine, including tool length and any specific holder requirements.
- **Stock information** — the raw material size, shape, and orientation the program was written to expect.
- **Special notes** — anything unusual about the job: a required warm-up cycle, a specific coolant requirement, an order-of-operations note if the part needs multiple setups.

## Why Setup Sheet Accuracy Matters as Much as the Code

A perfectly correct G-code program is worthless if the operator running it can't set the job up correctly, because the setup sheet describing how to do that is missing information, out of date, or simply wrong. A mismatch between the actual physical setup and what the program expects — the wrong tool in a given position, an incorrect work offset — produces exactly the kind of real-world crash or scrapped part that all the verification steps covered earlier in this module were meant to prevent, just introduced at the physical setup stage instead of in the program itself.

:::warning
A setup sheet that's out of date relative to the actual current CAM program — because the program was revised after the setup sheet was originally written, and the setup sheet wasn't regenerated — can send an operator to load the wrong tool or dial in the wrong work offset for a program that has since changed. Setup sheets need the same revision discipline as the program they describe.
:::

## Generating Setup Sheets Directly from CAM

Most CAM software can generate a setup sheet automatically, pulling tool lists, offset values, and stock information directly from the actual CAM program's own data — rather than requiring a programmer to separately, manually transcribe that same information into a document by hand.

:::pro-tip
An automatically generated setup sheet has a real advantage beyond saving time: it's pulled directly from the same data the G-code itself was generated from, so it can't drift out of sync with the program the way a manually written, separately maintained document can. Whenever the CAM software supports it, generating the setup sheet directly from the program is both faster and more reliable than writing one by hand.
:::

## Self-Check Questions

**1. Who is a setup sheet typically written for, and why does that matter?**

<details>
<summary>Show Answer</summary>

Usually someone other than the programmer — possibly a different shift, possibly running the job much later — so it can't rely on assumptions or memory only the original programmer had; it needs to stand on its own.
</details>

**2. Name three categories of information a complete setup sheet should include.**

<details>
<summary>Show Answer</summary>

Any three of: workholding instructions, work offset values, a tool list matched to physical tools, stock information, or special notes about the job.
</details>

**3. Why can a perfectly correct G-code program still lead to a crash or scrapped part?**

<details>
<summary>Show Answer</summary>

If the setup sheet describing how to physically set up the job is missing information, outdated, or wrong, the operator can set up the physical job incorrectly — a mismatch between the real setup and what the program expects, even though the program itself is correct.
</details>

**4. Why does an outdated setup sheet pose a real risk after a CAM program has been revised?**

<details>
<summary>Show Answer</summary>

It can direct the operator to load the wrong tool or dial in the wrong work offset for a program that has since changed, since the setup sheet no longer reflects the program's actual current requirements.
</details>

**5. What advantage does generating a setup sheet directly from the CAM program have over writing one manually?**

<details>
<summary>Show Answer</summary>

It's pulled from the same data the G-code itself was generated from, so it can't drift out of sync with the program the way a separately maintained, manually written document can.
</details>
