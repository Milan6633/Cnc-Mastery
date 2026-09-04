---
title: "Thread Gauges and Plug Gauges (Go/No-Go)"
module: "04-precision-measurement"
lessonNumber: 8
description: "Check internal threads and bores with Go/No-Go plug gauges, and check external threads with thread ring gauges and pitch gauges."
objectives:
  - "Apply the Go/No-Go plug gauge method to check a tapped hole"
  - "Explain what a thread's Go and No-Go gauge members each verify"
  - "Identify a thread's pitch using a thread pitch gauge"
  - "Explain why a thread gauge checks more than a plain bore or shaft diameter"
difficulty: "intermediate"
duration: "40 minutes"
tags: ["measurement", "metrology", "thread-gauges", "plug-gauges", "go-no-go"]
---

## Plug Gauges for Plain Bores

A plug gauge is essentially a dedicated, precision Go/No-Go pin, purpose-built to check one specific bore size rather than drawn from a graduated set. Like the pin gauge sets from the previous lesson, plug gauges are usually built as a **combined Go/No-Go tool** with both members on one handle:

- The **Go** end matches the minimum acceptable bore diameter — it should enter the bore fully.
- The **No-Go** end matches the maximum acceptable bore diameter — it should **not** enter (or should enter only a very short distance, per the gauge's design).

A bore that passes Go and fails No-Go is within tolerance.

## Thread Gauges — Checking More Than Diameter

A thread is a more complex geometric feature than a plain bore or shaft — its acceptability depends on **pitch diameter, thread form, and pitch (spacing between threads)** together, not on a single diameter the way a plain hole does. A thread gauge is built to check this whole geometry at once, not just a single dimension.

**Thread plug gauges** check internal (tapped hole) threads, working the same Go/No-Go logic as a plain plug gauge but shaped as a threaded member instead of a smooth pin:

- The **Go** thread plug should thread in fully by hand, confirming the tapped hole's pitch diameter isn't undersized and the thread form is correct.
- The **No-Go** thread plug should not thread in more than a couple of turns, confirming the pitch diameter isn't oversized.

**Thread ring gauges** check external (shaft/screw) threads the same way, as a threaded ring instead of a threaded plug:

- The **Go** ring should thread onto the part fully by hand.
- The **No-Go** ring should not thread on more than a couple of turns.

:::key-concept
A Go gauge checks that a feature isn't too small (bore/internal thread) or too large (shaft/external thread) to function. A No-Go gauge checks the opposite limit. Passing both means the feature falls within its full tolerance band, not just meeting one boundary.
:::

:::warning
Forcing a No-Go thread gauge to thread further than its design allows — treating resistance as something to muscle past rather than as the gauge doing its job — damages both the gauge and, often, the part's thread. A No-Go gauge is supposed to resist; that resistance is the pass/fail signal, not an obstacle.
:::

## Identifying Thread Pitch

Before selecting the correct gauge, the thread's pitch (or, for imperial threads, threads per inch) has to be known or confirmed. A **thread pitch gauge** — a set of thin, comb-like blades, each cut to match one standard thread pitch — checks this quickly: hold a blade against the thread and look for full, even engagement of every tooth with no light showing through, rather than a partial or skewed match.

:::pro-tip
When a print or a part's origin is uncertain, check pitch with a thread pitch gauge before assuming metric or imperial. A close-but-wrong pitch gauge blade can look like it's engaging reasonably well from a distance — check for full, even contact along the entire blade, not just a rough visual match.
:::

## Self-Check Questions

**1. What does the Go end of a plug gauge confirm about a bore, and what does the No-Go end confirm?**

<details>
<summary>Show Answer</summary>

The Go end confirms the bore isn't undersized (it enters fully). The No-Go end confirms the bore isn't oversized (it should not enter, or only very slightly).
</details>

**2. Why does checking a thread require more than measuring a single diameter?**

<details>
<summary>Show Answer</summary>

A thread's acceptability depends on pitch diameter, thread form, and pitch together, not one dimension — a thread gauge is built to check this combined geometry, not just size.
</details>

**3. What should happen when a Go thread plug gauge is threaded into a tapped hole that's within tolerance?**

<details>
<summary>Show Answer</summary>

It should thread in fully by hand, confirming the pitch diameter isn't undersized and the thread form is correct.
</details>

**4. Why is resistance from a No-Go thread gauge a pass signal rather than a problem to force past?**

<details>
<summary>Show Answer</summary>

The No-Go gauge is designed to resist entering past a couple of turns on an in-tolerance part — that resistance is the confirmation the thread isn't oversized. Forcing past it damages the gauge and often the part's thread.
</details>

**5. How do you use a thread pitch gauge to confirm a thread's pitch?**

<details>
<summary>Show Answer</summary>

Hold a blade from the pitch gauge set against the thread and look for full, even engagement of every tooth with no light visible — a partial or skewed match means that blade's pitch is wrong.
</details>
