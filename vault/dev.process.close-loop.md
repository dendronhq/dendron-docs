---
id: iZ8vpfY0n1E3Nq3IC1Y7X
title: Close Loop
desc: ''
updated: 1642732279488
created: 1642665703104
---

## Summary

This page covers procedures for closing the loop - in other words, additional things to do _after_ a code change has been released.

## For Breaking Changes or Larger Structural Changes / Refactors

1. Make any relevant changes in the Dendron Docs vault
1. Announce the changes in the Discord dev channel.

Some examples may include
- Changing commonly used interfaces
- Adding a new package that requires devs to re-run `yarn bootstrap:bootstrap`