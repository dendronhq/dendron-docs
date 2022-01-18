---
id: FlKRCylDLzcTiOC6JbgjZ
title: Dendron Pseudocode
desc: ""
updated: 1642527733053
created: 1637874320334
---

## Summary

You might come across sections in the architecture that are titled [Pseudocode](https://en.wikipedia.org/wiki/Pseudocode).

These are high level descriptions of the logic and not the actual code.
The code description is typescript-ish.
The goal isn't to write valid typescript but be a **summarized** version of the code.

## Details

The syntax is evolving but here is a loosely documented starting point.
Some conventions we use:

- $: referencing a global variable
- @: referencing a class variable
- %: derived var, not the same as whats
- `...`: code that is omitted because it would clutter the summary
- `=:` magic equality ()
  - eg: we go `foo` and `bar` from somewhere but its not important how
  ```
  {foo, bar} :=
  ```
