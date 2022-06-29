---
id: qWXlqj6y2YVvP0JIOJClT
title: Checklist
desc: ''
updated: 1656469684578
created: 1644174577131
---

### Basics
- [ ] code should follow [[Code Conventions|dendron://dendron.docs/dev.process.code]]
- [ ] sticking to existing conventions instead of creating new ones 

### Extended
- General
    - [ ] check whether code be simplified
    - [ ] check if similar function already exist in the codebase. if so, can it be re-used?
    - [ ] check if this change adversely impact performance
- Operations
    - [ ] when shipping this change, will it just work or will it introduce additional operational overhead due to complicated interface or known bugs?
- Architecture
    - [ ] check if code is introducing changes on a foundational class or interface. if so, call for design review if needed 
        - eg: [making changes to DNode](https://github.com/dendronhq/dendron/pull/2158#pullrequestreview-854689586)