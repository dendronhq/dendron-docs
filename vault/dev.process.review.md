---
id: QN46JTSWpEkDkr94TJ85w
title: Review
desc: ''
updated: 1644789064172
created: 1644173493342
---

## Summary

The Dendron code review process

## Prerequisites

We recommend using the github cli to work on pull requests (not required but helpful). More details on the setup [[here|dendron://dendron.docs/dev.process.review.github-cli]]

## Steps

### Submitting
1. Open up a pull request 
1. Make sure the title of the pull request mirrors the [[Commit Style|dendron://dendron.docs/dev.process.commit#commit-style]]
1. If you are a team member, you can copy the full checklist from [[Dendron Extended PR Checklist - Markdown|dendron://dendron.docs/dev.process.review.checklist.extended.export]], otherwise, follow the instructions in the pull request template

### For Team members
1. When an area of the checklist (eg. Instrumentation), does not apply to your PR, you can remove the checkboxes and just add `NA` for not applicable
1. Similarly, if a specific check does not apply, you can use the `[~]` to mark it as such

### Correspondence

A conversation should only be resolved when the comment has been addressed and is reflected in the pull request. 
At that point, the conversation should be resolved by the person that made the pull request. 

## Checklist
![[dendron://dendron.docs/dev.process.review.checklist]]