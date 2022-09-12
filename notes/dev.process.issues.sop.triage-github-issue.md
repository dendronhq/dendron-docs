---
id: F8cCg5iQH1KXmx4SGcEia
title: Triage GitHub Issue
desc: ''
updated: 1662994185045
created: 1638139691294
---


## Summary

How incoming github issues are triaged

## Steps

1. Go through issues with the label `status.triage-needed` ([query](https://github.com/dendronhq/dendron/labels/status.triage-needed)) 
1. For issues, first check if it is valid: ^aukra6T9tyfr
    - Check if issue is a  **Duplicated to an existing bug/epic**. If so, add the [[duplicate|dev.process.issues.ref.labels#duplicate]] label and close the issue
    - Check if issue **"needs-info"** because we need more details to figure out what the issue is. If so, add what info is needed and add the label.
    - Check if the issue is a valid issue (eg. describes a bug or requests for new functionality) vs a support question
1. If the issue is valid ^bsmp43kiM22J
    - make sure the issue has the following labels:
        - #scope
        - [[type|dev.process.issues.ref.labels#type]]
        - [[size|dendron://dendron.docs/dev.process.issues.ref.labels#size]]
            - NOTE: if unsure about size, ping `@DendronTeam`
    - depending on priority, the issue can go into one of the following buckets
        - add #sprint.active label to the task
            - if item is **high priority**, repro immediately and assign an engineer and tag to current milestone for immediate investigation
        - add #sprint.backlog to the task
            - if the item is a valid feature request or non-urgent bug
        - add #kind.crop to the task
            - if the item is a good crop candidate, add it as a crop 
            - respond with the following [[template in the issue|dendron://private/dendron.sop.triage.temp.crop]]
        - add #kind.icebox to the task
            - if the item is not something we plan on working on for the current year
    - create a task note inside the [[task from github|dendron://private/templates.oncall#tasks-from-github]] section of this week's oncall note if it is a #type.bug
        - follow process in [[Creating New Issues|dendron://dendron.handbook/area.team.sop.create-new-issue]]
        - make sure to fill out the [[issue|dendron://private/task.temp.ref#issue]] field with the link to the github issue
        - add the same #sprint and #kind tags to the task as you did to the github issue
    - export the task
1. If the issue is a bug, add the following steps: [[Bug|dendron://dendron.docs/dev.process.issues.sop.triage-github-issue.ref.bug]]
1. For all cases, 
    - leave a comment in the ticket acknowledging that we have received it and communicate the next steps to the user 
    - remove the `status.triage-needed` label from the issue

