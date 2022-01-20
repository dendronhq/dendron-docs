---
id: 1EoNIXzgmhgagqcAo9nDn
title: PR Checklist
desc: ''
updated: 1642699012372
created: 1632348050137
---

## useful links
- [dendron discord](https://discord.gg/AE3NRw9): where you can go for help and talk to other contributors

## first time pull request
- [ ] if its your first pull request to Dendron, watch out for the [CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement) bot that will ask you to agree to Dendron's CLA
- [ ] if its your first pull request and you're on our Discord, make sure that Kevin gives you the [horticulturalist](https://wiki.dendron.so/notes/7c00d606-7b75-4d28-b563-d75f33f8e0d7.html#horticulturalist) role by adding your discord as part of the description  👨‍🌾👩‍🌾
- [ ] (optional) ping `@Dendron Team` in the `#dev` channel of our discord - we usually respond to PRs within 24h

## history
- [ ] make sure the commit message follows Dendron's [[commit style|dendron://dendron.docs/dev.process.review#commit-style]]
- [ ] make sure the commit message is in front of the [[pull request|dendron://dendron.docs/dev.process.review#pull-request]]
- [ ] make sure your branch names adhere to our [[branch style|dendron://dendron.docs/dev.process.review#branch-style]]
- [ ] if this pull request is addressing an existing issue, make sure to link this PR to the issue that it is resolving.

## docs
- [ ] if your change reflects documentation changes, also submit a PR to [dendron-site](https://github.com/dendronhq/dendron-site) and mention the doc PR link in your current PR

## code
- [ ] code should follow [[Code Conventions|dendron://dendron.docs/dev.process.code]]

## implementation
- [ ] can this be simplified?
- [ ] does a similar function already exist in the codebase? if so, why can't it be reused?

## performance
- [ ] does this change adversely impact performance? 

## testing
![[dendron://dendron.docs/dev.process.qa.test.checklist]]

## css
If you are introducing CSS changes, please confirm that

- [ ] display is correct for following dimensions
    - [ ] sm: screen ≥ 576px, eg. iphonex, (375x812)
    - [ ] lg: screen ≥ 992px
    - [ ] xxl: screen ≥ 1600px eg. mac (1600x900)
- [ ] display is correct for following browsers (across the various dimensions)
    - [ ] safari
    - [ ] firefox
    - [ ] chrome

## circular dependency check
Check to make sure your code is not introducing new circular dependencies in plugin-core.  See [[Avoiding Circular Dependencies|dendron://dendron.docs/dev.process.code#avoiding-circular-dependencies]].

## analytics
- [ ] if you are adding analytics related changes, make sure the [Telemetry](https://wiki.dendron.so/notes/84df871b-9442-42fd-b4c3-0024e35b5f3c.html) docs are updated

