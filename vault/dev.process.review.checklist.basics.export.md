---
id: VRlNPgpyrbiDGKmHd9tjG
title: Export
desc: ''
updated: 1644176233993
created: 1644176117524
---


# Basics

## Code

- [ ] code should follow [Code Conventions](dev.process.code)
- [ ] circular dependency check: make sure your code is not introducing new circular dependencies in plugin-core.  See [Avoiding Circular Dependencies](dev.process.code.best-practices).
- [ ] sticking to existing conventions instead of creating new ones
  - eg: [if configuration for utilities are already in one module or package, add future utilities there as well](https://github.com/dendronhq/dendron/pull/1960#discussion_r786228021)

## Extended

- [ ] check whether code be simplified
- [ ] check if similar function already exist in the codebase. if so, can it be re-used?
- [ ] check if this change adversely impact performance

### Operations

- [ ] when shipping this change, will it just work or will it introduce additional operational overhead due to complicated interface or known bugs?

### Architecture

- [ ] check if code is introducing changes on a foundational class or interface. if so, call for design review if needed
  - eg: [making changes to DNode](user.kevin.journal.2022.01.17.pr.nickolay)



## Tests

- [ ] [Write Tests](dev.process.qa.test) 
- [ ] [Confirm existing tests pass](dev.process.qa.test)
- [ ] [Confirm manual testing](dev.process.qa.test) 
- [ ] Common cases tested
- [ ] 1-2 Edge cases tested
- [ ] If your tests changes an existing snapshot, snapshots have been [updated](dev.process.qa.test)



## Docs

- [ ] if your change reflects documentation changes, also submit a PR to [dendron-site](https://github.com/dendronhq/dendron-site) and mention the doc PR link in your current PR

## 


- [ ] does this change introduce a new or better way of doing things that others need to be aware of? if so, an async should be created and a process added in [Development](dev) or [Packages](pkg)

##

