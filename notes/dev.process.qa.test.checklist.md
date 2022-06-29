---
id: oxuqSKl1R2nzElml6esj3
title: Checklist
desc: ''
updated: 1656469917974
created: 1640801276723
---

### Basics
- [ ] [[Write Tests|dendron://dendron.docs/dev.process.qa.test#writing-tests]] 
- [ ] [[Confirm existing tests pass|dendron://dendron.docs/dev.process.qa.test#executing-tests]]
- [ ] [[Confirm manual testing|dendron://dendron.docs/dev.process.qa.test#manual-testing]] 
- [ ] Common cases tested
- [ ] 1-2 Edge cases tested
- [ ] If your tests changes an existing [[snapshot|dendron://dendron.docs/dev.process.qa.test#snapshot-testing]]
  - [ ] [[Update the Snapshot|dendron://dendron.docs/dev.process.qa.test.cook.update-a-snapshot]]

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
