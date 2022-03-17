---
id: fHKEH1X6xdkq87swyYMHF
title: Dendron Extended PR Checklist - Markdown 
desc: ''
updated: 1647487519698
created: 1644176768259
---
# Dendron Extended PR Checklist

## Code

### Basics

- [ ] code should follow [Code Conventions](https://wiki.dendron.so/notes/773e0b5a-510f-4c21-acf4-2d1ab3ed741e.html)
- [ ] circular dependency check: make sure your code is not introducing new circular dependencies in plugin-core.  See [Avoiding Circular Dependencies](https://wiki.dendron.so/notes/pMS27sHxbWeKMoPRrWEzs.html).
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

- [ ] if you are adding analytics related changes, make sure you [Document](https://wiki.dendron.so/notes/8ThPaB9iXXm2Szk3C9kFt.html) changes in airtable

### Extended

- [ ] can we track the performance of this change to know if it is _successful_? 
  - eg: [see usage for export pod](https://github.com/dendronhq/dendron/pull/2190#pullrequestreview-855715612)

## 



## Tests

### Basics

- [ ] [Write Tests](https://wiki.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html) 
- [ ] [Confirm existing tests pass](https://wiki.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html)
- [ ] [Confirm manual testing](https://wiki.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html) 
- [ ] Common cases tested
- [ ] 1-2 Edge cases tested
- [ ] If your tests changes an existing snapshot, snapshots have been [updated](https://wiki.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html)

### Extended

- [ ] If you are adding a new language feature (graphically visible in VS Code/preview/publishing), an example is included in the [test workspace](https://wiki.dendron.so/notes/dtMsF12SF2SUhLN10sYe2.html)

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

- [ ] does this change introduce a new or better way of doing things that others need to be aware of? if so, an async should be created and a process added in [Development](https://wiki.dendron.so/notes/3489b652-cd0e-4ac8-a734-08094dc043eb.html) or [Packages](https://wiki.dendron.so/notes/32cdd4aa-d9f6-4582-8d0c-07f64a00299b.html)

## 



## Close the Loop

### Basics

### Extended

- [ ]  is this a developer BREAKING change? if another person cloning from this branch will need to adjust their dependencies or mental model of the architecture, then it is. if this is the case, make sure this is communicated according to [Close Loop](https://wiki.dendron.so/notes/iZ8vpfY0n1E3Nq3IC1Y7X.html)
  - eg. [breaking dev change due to new dependency](https://github.com/dendronhq/dendron/pull/2188#pullrequestreview-855696330)