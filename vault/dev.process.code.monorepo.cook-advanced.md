---
id: q2xr0dnbwqgs1j7wqcsckx6
title: Advanced Cookbook
desc: ''
updated: 1645741640851
created: 1645741586641
---

## Summary

The recipes here shouldn't need to be used except in very rare circumstances (if you're wondering if the current circumstance applies, it means it probably doesn't)

### Upgrading all Dependencies

- NOTE: this shouldn't be done but documented . ping `@Dendron Team` if you think you need to do this (you probably don't)

1. [[Remove all build artifacts|dendron://dendron.docs/dev.process.code.monorepo#remove-all-build-artifacts]]
1. Remove `yarn.lock` at the top of the monorepo

```sh
rm yarn.lock
```

1. Run `yarn setup`
1. Commit the new yarn.lock file

- NOTE: when you do this, you might end up updating other dependencies because of [[Semver|dendron://dendron.docs/dev.concepts#semver]]. having a `yarn.lock` means that don't update dependencies even if a new dependency is available. in these cases, be sure to conduct [[Manual Testing|dendron://dendron.docs/dev.process.qa.test#manual-testing]] when submitting the PR
