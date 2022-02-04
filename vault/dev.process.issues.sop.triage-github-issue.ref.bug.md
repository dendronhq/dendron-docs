---
id: nR2aRCSOgbyb2rwizlywx
title: Bug
desc: ''
updated: 1642394692632
created: 1642359043547
---

How we deal with bugs

## Steps

1. If the issue is a bug, make sure to recognize the user who made the PR as a #role.bugcatcher by following the process in [[community highlights|dendron://private/dendron.sop.release.community-highlights#process]]
1. If the bug is low priority, mark it as such and skip to the last step
    - NOTE: a bug is low priority if it happens in very rare edge cases and would take much effort to repro. ping `#team-chat` if not sure
1. Assign an owner from the team (can be the current oncall or the person who has worked on the feature last). 
    - NOTE: if you are confused at this step, ping inside `#team-chat` to figure out the owner
1. If the bug high priority, mark it as such
    - NOTE: as of today, high priority means it impacts a lot of users - use your best judgement for this and ping in `#team-chat` if you're not sure, we're working on coming up with better metrics around this
    - some heuristics around high priority:
        - anything to do with common publishing operations
        - anything that pertains to [[Core Features Maturity|dendron://private/milestone.2022.01-core-feature-maturity]]
1. Export the task note

## Notes

At the start of the next sprint, we'll make sure to prioritize bug fixes 


