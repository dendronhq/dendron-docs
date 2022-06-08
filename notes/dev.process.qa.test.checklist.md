---
id: oxuqSKl1R2nzElml6esj3
title: Checklist
desc: ''
updated: 1654709278258
created: 1640801276723
---

### Basics
- [ ] [[Write Tests|dendron://dendron.docs/dev.process.qa.test#writing-tests]] 
- [ ] [[Confirm existing tests pass|dendron://dendron.docs/dev.process.qa.test#executing-tests]]
- [ ] [[Confirm manual testing|dendron://dendron.docs/dev.process.qa.test#manual-testing]] 
- [ ] Common cases tested
- [ ] 1-2 Edge cases tested
- [ ] If your tests changes an existing snapshot,
  - [ ] snapshots have been [[updated|dendron://dendron.docs/dev.process.qa.test#updating-test-snapshots]]
  - [ ] check that updated snapshots are updated as intended
- [ ] If you write new snapshot tests, double check that snapshot testing make sense as per [[Snapshot Testing|dendron://dendron.docs/dev.process.qa.test.snapshot-testing]]

### Extended
- [ ] If you are adding a new language feature (graphically visible in VS Code/preview/publishing), an example is included in the [[test workspace|dendron://dendron.docs/dev.ref.test-workspace]]

- CSS
    - [ ] display is correct for following dimensions
        - [ ] sm: screen ≥ 576px, eg. iphonex, (375x812)
        - [ ] lg: screen ≥ 992px
        - [ ] xxl: screen ≥ 1600px eg. mac (1600x900)
    - [ ] display is correct for following browsers (across the various dimensions)
        - [ ] safari
        - [ ] firefox
        - [ ] chrome
