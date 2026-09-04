---
title: "NC Code Review and Editing Before Machine Upload"
module: "15-cam-milling"
lessonNumber: 18
description: "Read the actual, final G-code a post-processor produced before it ever reaches the machine — the last verification step before real material and a real spindle are involved."
objectives:
  - "Explain what NC code review checks that simulation and post-processor configuration don't"
  - "Identify the specific program sections worth checking manually every time"
  - "Explain why hand-editing generated G-code should be done carefully and documented"
  - "Explain why this review step remains necessary even with reliable CAM and post-processor setups"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["cam", "fusion360", "mastercam", "nc-code-review", "g-code"]
---

## The Last Check Before Real Material

**NC code review** — actually reading through the final G-code file a post-processor produced, line by line or at least section by section — is the last verification step before a program reaches the real machine with real material and a real spinning spindle. Toolpath simulation checks the toolpath's geometry; post-processor verification (covered in the previous lesson) checks that the translation logic itself is sound. NC code review checks the **actual, final output file** that will actually run — the one artifact everything else has been building toward.

:::key-concept
Every verification step covered so far in this module — stock definition, simulation, stock simulation, post-processor configuration — reduces risk, but none of them guarantees the final G-code file is perfect. NC code review is the direct, final check of the actual thing that's about to run on the machine, not a proxy for it.
:::

## What to Check Specifically

A thorough NC code review doesn't need to read every single motion line with equal scrutiny — certain sections carry disproportionate risk and deserve particular attention:

- **Program start and safety block** — correct work offset selected, correct plane and units, spindle and coolant commanded appropriately before any cutting motion begins.
- **Tool changes** — correct tool number at each tool change, matching the physical magazine, with appropriate spindle speed and any required warm-up or approach moves.
- **Rapid moves near the part or fixture** — since a rapid move that clears correctly in simulation using one set of tool/holder models can still be worth a manual sanity check against the actual physical setup.
- **Program end** — proper retract to a safe position, spindle stop, and a clean program end, so the machine doesn't leave the tool in a compromised position or leave the spindle running unexpectedly.

## Hand-Editing Generated Code

Occasionally, a specific correction — a feed rate override, a small manual addition the CAM software's operation types don't directly support — needs to be hand-edited into the post-processor's generated output. This should be done carefully and **documented**: noting what was changed and why, since an undocumented manual edit is invisible the next time the program is regenerated from CAM (which would silently overwrite the manual fix) and invisible to anyone else who later needs to understand why the code doesn't match what a straightforward CAM regeneration would produce.

:::warning
A manual edit to generated G-code that isn't documented is a trap for the next person (or the next version of yourself) who regenerates the program from CAM without realizing a specific, necessary correction will be silently lost. Document every hand edit, and consider whether the underlying CAM setup should actually be fixed instead, so the correction survives regeneration automatically.
:::

## Why This Step Remains Necessary

Even with a reliable, well-configured CAM setup and a thoroughly verified post-processor, NC code review remains a necessary step because it's the only check performed against the **actual final artifact**, catching the rare but real cases where something upstream — a setting changed since the post-processor was last verified, an unusual geometry condition the post-processor handles unexpectedly — produces output that looks superficially fine but contains a genuine problem none of the earlier verification steps happened to catch.

## Self-Check Questions

**1. What does NC code review check that toolpath simulation and post-processor verification don't?**

<details>
<summary>Show Answer</summary>

The actual, final G-code file that will run on the machine — the specific artifact everything else has been building toward, rather than a proxy check on the toolpath geometry or the translation logic in isolation.
</details>

**2. Name two specific sections of a G-code program that deserve particular attention during review.**

<details>
<summary>Show Answer</summary>

Any two of: the program start and safety block, tool changes, rapid moves near the part or fixture, or the program end sequence.
</details>

**3. Why should a manual hand-edit to generated G-code always be documented?**

<details>
<summary>Show Answer</summary>

An undocumented edit is invisible the next time the program is regenerated from CAM (silently overwriting the fix) and invisible to anyone else trying to understand why the code doesn't match a straightforward regeneration.
</details>

**4. What should be considered as an alternative to repeatedly hand-editing the same correction into generated code?**

<details>
<summary>Show Answer</summary>

Fixing the underlying CAM setup itself, so the correction is applied automatically and survives regeneration, rather than needing to be reapplied by hand every time.
</details>

**5. Why does NC code review remain necessary even with a reliable CAM setup and a thoroughly verified post-processor?**

<details>
<summary>Show Answer</summary>

It's the only check performed against the actual final output file, catching rare cases where something upstream produces superficially fine-looking code that still contains a genuine problem none of the earlier verification steps happened to catch.
</details>
