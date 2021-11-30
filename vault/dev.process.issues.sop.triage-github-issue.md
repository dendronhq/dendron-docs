---
id: F8cCg5iQH1KXmx4SGcEia
title: Triage GitHub Issue
desc: ''
updated: 1638139691294
created: 1638139691294
---


## Summary
<!-- What is this SOP about -->
How incoming github issues are triaged

## Prerequisites
<!-- Optional, anything that needs to be done ahead of time-->

## Tips
- when updating issues, you can use the [[Github Issues Pod|dendron://dendron.dendron-site/dendron.topic.pod.builtin.github-issue.publish]]

## Process
<!-- Step by step process on how to carry out the SOP -->
1. Go through issues with the label `status.triage-needed` ([query](https://github.com/dendronhq/dendron/labels/status.triage-needed)) 
1. For issues, first check if it is valid:
    - Check if issue is a  **Duplicated to an existing bug/epic**. If so, add the [[duplicate|dev.process.issues.ref.labels#duplicate]] label and close the issue
    - Check if issue **"needs-info"** because we need more details to figure out what the issue is. If so, add what info is needed and add the label.
    - Check if the issue is a valid issue (eg. describes a bug or requests for new functionality) vs something that can be resolved via [[Handling a Support Incident|dendron://private/area.community.sop.customer-support#handling-a-support-incident]]
1. If the issue is valid
    - make sure the issue has correct [[area|dev.process.issues.ref.labels#area]] and [[type|dev.process.issues.ref.labels#type]]
    - depending on priority, the issue can go into one of the following buckets
        - add [[tags.sprint.active]] label to the task
            - if item is **high priority**, repro immediately and assign an engineer and tag to current milestone for immediate investigation
        - add [[tags.sprint.crop]] to the task
            - if the item is a good crop candidate, add it as a crop 
            - respond with the following [[template in the issue|dendron://private/dendron.sop.triage.temp.crop]]
        - add [[tags.sprint.backlog]] to the task
            - if the item is a valid feature request or non-urgent bug
1. For all cases, 
    - add the issue to the  [[oncall journal|schemas.meet#oncall]] 
    - leave a comment in the ticket acknowledging that we have received it and communicate the next steps to the user 
