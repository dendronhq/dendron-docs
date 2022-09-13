---
id: uGw7LNxBtIT4tgd4icFOT
title: Merge Pr
desc: ''
updated: 1663084543951
created: 1634081151578
---

## Summary

PRs are merged by the same individual that submitted the PR

## Prerequisites
- Have `maintain` permission in Dendron repo (everyone in [[Engineering|dendron://private/s.github.ref#^jdgmRrO2RR4x]] gets this)
- Have your PR approved by either @kevin or @jonathan and all outstanding discussions resolved

## Steps
1. Merge PR 
    - when merging PR, make sure the commit message corresponds to our [[commit style|dendron://dendron.docs/dev.process.review#commit-style]]
    - eg. `enhance(publish): speed up publishing by 500%`
1. Move the commit to ready to ship
![[dendron://dendron.handbook/area.product.sop.ready-to-ship#steps]]
1. Create [[Analytics|dendron://private/area.metrics.sop.feature-instrumentation#document]]  entries in the proper release version
1. If the change is going out in the current release, merge in any doc changes. Otherwise, create a task to merge in docs after the current release is pushed


## Related
- [[Ready to Ship|dendron://dendron.handbook/area.product.sop.ready-to-ship]]

