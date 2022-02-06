---
id: FR4EvvmMvxXTnCgDy0TZU
title: Export
desc: ''
updated: 1644176679840
created: 1644175809271
---

# First Time PR Review Checklist

## First Time Specifics

- [ ] if its your first pull request to Dendron, watch out for the [CLA](https://en.wikipedia.org/wiki/Contributor_License_Agreement) bot that will ask you to agree to Dendron's CLA
- [ ] if its your first pull request and you're on our Discord, make sure that Kevin gives you the [horticulturalist](https://wiki.dendron.so/notes/7c00d606-7b75-4d28-b563-d75f33f8e0d7.html#horticulturalist) role by adding your discord as part of the description  👨‍🌾👩‍🌾
- [ ] (optional) ping `@Dendron Team` in the `#dev` channel of our discord - we usually respond to PRs within 24h

## Commit

- [ ] make sure your branch names adhere to our [branch style](https://docs.dendron.so/notes/adc39825-77a6-46cf-9c49-2642fcb4248e.html#branch-style)
- [ ] make sure the commit message follows Dendron's [commit style](https://docs.dendron.so/notes/adc39825-77a6-46cf-9c49-2642fcb4248e.html#commit-style)
- [ ] if this pull request is addressing an existing issue, make sure to link this PR to the issue that it is resolving.
  - NOTE: make sure to read [Addressing open issues](https://docs.dendron.so/notes/adc39825-77a6-46cf-9c49-2642fcb4248e.html#addressing-open-issues)

## Code

- [ ] code should follow [Code Conventions](https://docs.dendron.so/notes/adc39825-77a6-46cf-9c49-2642fcb4248e.html#branch-style)
- [ ] circular dependency check: make sure your code is not introducing new circular dependencies in plugin-core.  See [Avoiding Circular Dependencies](https://docs.dendron.so/notes/adc39825-77a6-46cf-9c49-2642fcb4248e.html#commit-style).
- [ ] sticking to existing conventions instead of creating new ones
  - eg: [if configuration for utilities are already in one module or package, add future utilities there as well](https://github.com/dendronhq/dendron/pull/1960#discussion_r786228021)

## Tests

- [ ] [Write Tests](https://docs.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html#writing-tests) 
- [ ] [Confirm existing tests pass](https://docs.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html#executing-tests)
- [ ] [Confirm manual testing](https://docs.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html#manual-testing) 
- [ ] Common cases tested
- [ ] 1-2 Edge cases tested
- [ ] If your tests changes an existing snapshot, snapshots have been [updated](https://docs.dendron.so/notes/99q7A73uGmCwu2KvSHZro.html#updating-test-snapshots)

## Docs
- [ ] if your change reflects documentation changes, also submit a PR to [dendron-site](https://github.com/dendronhq/dendron-site) and mention the doc PR link in your current PR
- [ ] does this change introduce a new or better way of doing things that others need to be aware of? if so, an async should be created and a process added in [Development](https://docs.dendron.so/notes/3489b652-cd0e-4ac8-a734-08094dc043eb.html) or [Packages](https://docs.dendron.so/notes/32cdd4aa-d9f6-4582-8d0c-07f64a00299b.html)


***
