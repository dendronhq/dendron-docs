---
id: fHKEH1X6xdkq87swyYMHF
title: Export
desc: ''
updated: 1644253080852
created: 1644176768259
---

# Dendron Extended PR Checklist

## Code

### Basics

- [ ] code should follow [Code Conventions](dev.process.code) ^RdB6Xhl62i3N
- [ ] circular dependency check: make sure your code is not introducing new circular dependencies in plugin-core.  See [Avoiding Circular Dependencies](dev.process.code.best-practices).
- [ ] sticking to existing conventions instead of creating new ones
  - eg: [if configuration for utilities are already in one module or package, add future utilities there as well](https://github.com/dendronhq/dendron/pull/1960#discussion_r786228021)

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



## Instrumentation

### Basics

- [ ] if you are adding analytics related changes, make sure the [Telemetry](https://wiki.dendron.so/notes/84df871b-9442-42fd-b4c3-0024e35b5f3c.html) docs are updated

### Extended

- [ ] can we track the performance of this change to know if it is _successful_?
  - eg: [see usage for export pod](https://github.com/dendronhq/dendron/pull/2190#pullrequestreview-855715612)



## Tests

### Basics

- [ ] [Write Tests](dev.process.qa.test) 
- [ ] [Confirm existing tests pass](dev.process.qa.test)
- [ ] [Confirm manual testing](dev.process.qa.test) 
- [ ] Common cases tested
- [ ] 1-2 Edge cases tested
- [ ] If your tests changes an existing snapshot, snapshots have been [updated](dev.process.qa.test)

### Extended

- [ ] If you are adding a new language feature (graphically visible in VS Code/preview/publishing), an example is included in the [test workspace](dev.ref.test-workspace)

- CSS
  - [ ] display is correct for following dimensions
    - [ ] sm: screen ≥ 576px, eg. iphonex, (375x812)
    - [ ] lg: screen ≥ 992px
    - [ ] xxl: screen ≥ 1600px eg. mac (1600x900)
  - [ ] display is correct for following browsers (across the various dimensions)
    - [ ] safari
    - [ ] firefox
    - [ ] chrome



## Docs

### Basics

- [ ] if your change reflects documentation changes, also submit a PR to [dendron-site](https://github.com/dendronhq/dendron-site) and mention the doc PR link in your current PR

## 


### Basics

- [ ] does this change introduce a new or better way of doing things that others need to be aware of? if so, an async should be created and a process added in [Development](dev) or [Packages](pkg)

## 



## Close the Loop

### Basics

### Extended

- [ ]  is this a developer BREAKING change? if another person cloning from this branch will need to adjust their dependencies or mental model of the architecture, then it is. if this is the case, make sure this is communicated according to [Close Loop](dev.process.close-loop)
  - eg: [breaking dev change due to new dependency](https://github.com/dendronhq/dendron/pull/2188#pullrequestreview-855696330)