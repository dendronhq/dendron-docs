---
id: adc39825-77a6-46cf-9c49-2642fcb4248e
title: Dendron Review Process
desc: ''
updated: 1640799629029
created: 1623430616135
nav_order: 4.1
---

## Summary

This goes into how we do code review (via pull requests)

## Process

### Work in Progress
- if your still iterating on your pull request or if your working on feedback but its not ready yet, put your PR into `draft` mode until it is ready

### Commit Style

We follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

This means commits have the following format:

```
{category}({scope}): {description}

{additional details}
```

An example commit:

^pjL1YxpWRgtT
``` 
enhance(publish): speed up publishing by 500%

Use cached version of notes to generate metadata instead of building from scratch
```

* To figure out the category for a commit, see [[Assign Category to Task|dendron://dendron.dendron-site/area.product.sop.assign-category-to-task]]
* To figure out the scope, see [[Assign Scope to Feature|dendron://dendron.dendron-site/area.product.sop.assign-scope-to-feature]]

### Pull Request
When submitting a pull request, copy the commit message as a block in front of the PR template. It should look like the following

```
enhance(publish): speed up publishing by 500%

Use cached version of notes to generate metadata instead of building from scratch

# Pull Request Checklist
...
```

## Checklist

### first time pull request
- [ ] if its your first pull request to Dendron, watch out for the [CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement) bot that will ask you to agree to Dendron's CLA
- [ ] if its your first pull request and you're on our Discord, make sure that Kevin gives you the [[horticulturalist|community.roles#horticulturalist]] role by adding your discord as part of the description  👨‍🌾👩‍🌾
- [ ] (optional) ping `@Dendron Team` in the `#dev` channel of our [discord](https://discord.gg/AE3NRw9) - we usually respond to PRs within 24h

### commit message
- [ ] make sure the commit message follows Dendron's [[commit style|#commit-style]]
- [ ] make sure the commit message is in front of the [[pull request|#pull-request]]

### general
- [ ] [[Write Tests|dendron://dendron.docs/dev.process.qa.test#writing-tests]] 
- [ ] [[Confirm existing tests pass|dendron://dendron.docs/dev.process.qa.test#executing-tests]]
- [ ] [[Confirm manual testing|dendron://dendron.docs/dev.process.qa.test#manual-testing]] 
- [ ] Update docs 
  if your change reflects documentation changes, also submit a PR to [dendron-site](https://github.com/dendronhq/dendron-site) and mention the doc PR link in your current PR

### QA Checklist
![[dendron://dendron.docs/dev.process.qa.test#checklist,1:#*]]

