---
id: mgljk3qw157v4474gkvjqvs
title: Git
desc: ''
updated: 1659434267970
created: 1659433916704
---

## Summary

This page documents best practices when working with Git with the Dendron repository

## Merges

### When merging to master, use the 'Squash and merge' option from Github.

This makes it easier to cherry-pick code and perform back out operations on changes that should have a lower chance of having inter-dependencies on other nearby commits. It also makes the Git history a bit easier to read. If your code change is very large, consider splitting it into multiple reviews and multiple check-ins.

See also [[Committing Code|dendron://dendron.docs/dev.process.commit]].