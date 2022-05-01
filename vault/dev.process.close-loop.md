---
id: iZ8vpfY0n1E3Nq3IC1Y7X
title: Close Loop
desc: ''
updated: 1644425753573
created: 1642665703104
---

## Summary

This page covers procedures for closing the loop - in other words, additional things to do _after_ a code change has been released.

## After a release has shipped

1. For any features with open issues, communicate that the feature is shipped by posting the following message in the issue
    ```md
    This issue has been addressed in v{VERSION_NUM} release of Dendron. please post here if not, otherwise this issue will auto close in 4 days.
    ```
1. Add the `info-needed` tag to the issue which will auto-close the issue if there are no further comments
1. Add the issue url to [[Weekly recurring|dendron://dendron.handbook/templates.weekly-journal#weekly-recurring]] to check in 3 days
    - NOTE: sometimes users will add a note along the lines of "thanks for closing". if they do, close the issue right away
1. If there is legitimate followup, add new issue in github to track followup

## For Breaking Changes or Larger Structural Changes / Refactors

1. Make any relevant changes in the Dendron Docs vault
1. Announce the changes in the Discord dev channel.

Some examples may include
- Changing commonly used interfaces
- Adding a new package that requires devs to re-run `yarn bootstrap:bootstrap`