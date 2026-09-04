---
title: "In-Machine Editing, Debugging, and Alarm Recovery"
module: "12-cnc-setup"
lessonNumber: 5
description: "Edit G-code at the control, debug a program mid-run, and recover from common CNC alarms."
objectives:
  - "Insert, delete, and modify G-code blocks in EDIT mode at the control"
  - "Search for specific sequence numbers and words in a running program"
  - "Use single block, feed hold, and optional stop to debug a program"
  - "Recover from common alarms: overshoot, over-travel, and tool breakage"
duration: "50 minutes"
difficulty: "intermediate"
tags: ["setup", "troubleshooting", "editing", "debugging", "alarms", "recovery"]
---

## Editing at the Control

Programs are rarely perfect on the first run. Editing at the control is faster than returning to a CAM workstation. Most controls support these edit operations in EDIT mode:

| Action | Button / Method |
|---|---|
| Insert a block | Type the block, press INSERT or EOB + INSERT |
| Delete a block | Move cursor to the block, press DELETE |
| Replace a block | Type the new block, press ALTER or REWRITE |
| Search for a word | Type the word (e.g., M08), press SEARCH or DOWN |
| Search for N number | Type N100, press SEARCH |
| Copy and paste | Select block(s), press COPY, move cursor, press PASTE |

## Debugging with the Control

### Single Block

Single block executes one line at a time. Use it to:

- Verify each move before it happens
- Check the position display after each block
- Stop before a suspicious move and inspect the code

### Feed Hold

Feed hold pauses axis motion. The spindle keeps running. Use it when:

- The cut sounds wrong (chatter, squeal, thud)
- The chip is not forming correctly
- You need to check a dimension mid-cut

After feed hold, press Cycle Start to resume.

### Optional Stop (M01)

Insert M01 at strategic points in the program:

```gcode
M01    (optional stop — operator can stop here to inspect)
G00 X50.0 Y25.0
M01    (stop before the next tool change)
T02 M06
```

M01 stops only when the optional stop switch on the control is ON. When it is OFF, M01 is ignored.

## Common Alarms and Recovery

### Over-Travel Alarm

The machine hit a physical limit switch.

**Recovery:**
1. Press RESET to clear the alarm.
2. Press the OVER-TRAVEL RELEASE button (usually on the control panel or inside the electrical cabinet).
3. Jog the axis in the opposite direction, away from the limit switch.
4. Release the over-travel button.
5. Re-home the machine if needed.

### Servo Alarm / Following Error

The machine could not keep up with the commanded position.

**Recovery:**
1. Press RESET.
2. Note the position where the alarm occurred.
3. Check for a mechanical bind (chip stuck in the way covers, tight gibs).
4. Clear the chips, adjust the gibs, or reduce the feed rate.
5. Re-home and restart from a safe position.

### Spindle Alarm

The spindle motor overheated or overloaded.

**Recovery:**
1. Press RESET.
2. Allow the spindle to cool (5–10 minutes).
3. Check for excessive depth of cut, high feed rate, or dull tool.
4. Reduce the cutting parameters and restart.

### Tool Breakage Alarm

The machine detected a broken tool (tool load monitoring or probe check).

**Recovery:**
1. Press RESET.
2. Remove the broken tool from the holder.
3. Inspect the part and the holder for damage.
4. Load a new tool and reset the offset.
5. Restart from the beginning of the operation where the tool broke.

## Recovering from a Program Interruption

If the program stops mid-run (alarm, power loss, or manual stop):

1. **Record the current position** — write down the machine position display.
2. **Determine which operation was interrupted.**
3. **Restart from a safe position before the interruption.** Do not jump into the middle of a cut.
4. **Use the same tool.** If the tool was changed after the interruption, change it back.
5. **Single block through the restart sequence.** Verify each move before proceeding.

## Self-Check Questions

**1. How do you insert a new G-code block into a program at the control?**

<details>
<summary>Show Answer</summary>

Move the cursor to where you want to insert the block. Type the new block (e.g., G00 X50.0 Y25.0). Press INSERT or EOB then INSERT.
</details>

**2. What does M01 do, and when is it ignored?**

<details>
<summary>Show Answer</summary>

M01 is an optional stop. It stops the program only when the optional stop switch on the control is ON. When the switch is OFF, M01 is ignored and the program continues.
</details>

**3. What should you do if the machine hits an over-travel limit?**

<details>
<summary>Show Answer</summary>

Press RESET, press the over-travel release button, jog the axis away from the limit switch, release the button, and re-home the machine.
</details>

**4. Why should you not restart a program from the middle of a cut after an interruption?**

<details>
<summary>Show Answer</summary>

Starting in the middle of a cut means the tool is already engaged in the material at an unknown position. The rapid approach to the restart point can cause a crash. Always restart from a safe position before the interrupted operation.
</details>