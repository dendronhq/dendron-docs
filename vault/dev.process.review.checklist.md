---
id: 1EoNIXzgmhgagqcAo9nDn
title: PR Checklist
desc: ''
updated: 1640801360973
created: 1632348050137
---

### first time pull request
- [ ] if its your first pull request to Dendron, watch out for the [CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement) bot that will ask you to agree to Dendron's CLA
- [ ] if its your first pull request and you're on our Discord, make sure that Kevin gives you the [[horticulturalist|community.roles#horticulturalist]] role by adding your discord as part of the description  👨‍🌾👩‍🌾
- [ ] (optional) ping `@Dendron Team` in the `#dev` channel of our [discord](https://discord.gg/AE3NRw9) - we usually respond to PRs within 24h

### history
- [ ] make sure the commit message follows Dendron's [[commit style|dendron://dendron.docs/dev.process.review#commit-style]]
- [ ] make sure the commit message is in front of the [[pull request|dendron://dendron.docs/dev.process.review#pull-request]]
- [ ] make sure your branch names adhere to our [[branch style|dendron://dendron.docs/dev.process.review#branch-style]]
- [ ] if this pull request is addressing an existing issue, make sure to link this PR to the issue that it is resolving.

### docs
- [ ] if your change reflects documentation changes, also submit a PR to [dendron-site](https://github.com/dendronhq/dendron-site) and mention the doc PR link in your current PR

### testing
![[dendron://dendron.docs/dev.process.qa.test.checklist]]

### analytics
- [ ] if you are adding analytics related changes, make sure the [Telemetry](https://wiki.dendron.so/notes/84df871b-9442-42fd-b4c3-0024e35b5f3c.html) docs are updated