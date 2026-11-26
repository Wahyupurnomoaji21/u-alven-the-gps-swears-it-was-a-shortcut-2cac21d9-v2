# The GPS Swears It Was a Shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/Wahyupurnomoaji21/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9-v2/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/Wahyupurnomoaji21/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9-v2/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

## About

A make.fun bounty entry for **The GPS Swears It Was a Shortcut** ($2).
The program writes the GPS's own one-line excuse for sending the driver
down the wrong road to `entry.txt` — version 2, a new joke angle after
the v1 cemetery line fell out of the top 1000:

> "I routed us through a wedding because the map said 'reception ahead' and I assumed we were invited. We weren't, but the cake was excellent."

The GPS reads a road sign ("reception ahead") as a party invitation,
drives straight through a wedding, and defends the detour by grading
it on the catering. The entry is one line of 139 characters (under the
200-character gate), with no trailing newline, and reads cleanly aloud
in a single breath.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/gps-out-v2 node main.ts
cat /tmp/gps-out-v2/entry.txt
```

Requires Node 22.18 or later. The program builds every path from
`import.meta.url` and `MAKEFUN_OUTPUT_DIR`, so it runs from any directory.
It self-checks the entry against the gate (one line, 1–200 characters)
and fails loudly instead of writing an invalid entry.
