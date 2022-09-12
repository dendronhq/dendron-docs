---
id: q2xr0dnbwqgs1j7wqcsckx6
title: Advanced Cookbook
desc: ''
updated: 1662994177624
created: 1645741586641
---

## Summary

The recipes here shouldn't need to be used except in very rare circumstances (if you're wondering if the current circumstance applies, it means it probably doesn't)

### Upgrading all Dependencies

- NOTE: this shouldn't be done but documented . ping `@DendronTeam` if you think you need to do this (you probably don't)

1. [[Remove all build artifacts|dendron://dendron.docs/dev.process.code.monorepo#remove-all-build-artifacts]]
1. Remove `yarn.lock` at the top of the monorepo

   ```sh
   rm yarn.lock
   ```
1. Run `yarn setup`
1. Run tests to make sure everything is working correctly
1. Commit the new yarn.lock file

- NOTE: when you do this, you might end up updating other dependencies because of [[Semver|dendron://dendron.docs/dev.concepts#semver]]. having a `yarn.lock` means that don't update dependencies even if a new dependency is available. in these cases, be sure to conduct [[Manual Testing|dendron://dendron.docs/dev.process.qa.test#manual-testing]] when submitting the PR

### Upgrading a single dependency

1. [[Remove all build artifacts|dendron://dendron.docs/dev.process.code.monorepo#remove-all-build-artifacts]]
1. Run the following command at the top of the monorepo:
   
   ```
   yarn upgrade <name-of-package-to-upgrade>
   ```
1. Run `yarn setup`
1. Run tests to make sure everything is working correctly
1. Commit the updated `package.json` and lockfile

- This may make minor (`*.*.X`) upgrades to other packages as well, but that
  should be harmless.

### Adding a new package

Example PR here: https://github.com/dendronhq/dendron/pull/3048

1. Create the new package
   - NOTE: naming scheme is usually `dendron-{name}`
   ```sh
   cd packages
   cp -R _pkg-template dendron-viz
   ```
1. Update the names
   - in package.json
      - replace `$PKG_NAME` with package name
      - replace `$CURRENT_VERSION` with current version in monorepo
1. Add package to `dendron-main.code-workspace`
   ```json
    {
      "path": "packages/dendron-viz"
    },
   ```
1. Add new package to [[../package.json]]
   ```diff
   "workspaces": {
      "packages": [
         ...
         "packages/common-test-utils",
   +      "packages/dendron-viz",
         "packages/engine-server",
         ...
   ```
1. Add new package to [[../bootstrap/scripts/watch.sh]]
   - NOTE: order matters. make sure that the package is added to that any package it depends on comes before and that packages that depend on it come after 
      ```diff
      npx lerna run watch --parallel 
         \ --scope @dendronhq/common-all 
         \ --scope @dendronhq/common-server 
      +    \ --scope @dendronhq/dendron-viz
         \ --scope @dendronhq/engine-server 
         \ --scope @dendronhq/plugin-core 
         \ --scope @dendronhq/dendron-cli 
      ```
1. Add new package to [[../bootstrap/scripts/buildAll.js]]
   ```diff
   $(`npx lerna run build --scope @dendronhq/common-all`);
   $(`npx lerna run build --scope @dendronhq/common-server `);
   +$(`npx lerna run build --scope @dendronhq/dendron-viz `);
   $(`npx lerna run build --scope @dendronhq/engine-server `);
   $(`npx lerna run build --scope @dendronhq/pods-core `);
   ```
1. Add to [[../bootstrap/scripts/buildAllForTest.js]]

#### Verify New package
1. Run `yarn setup`
1. Run `ts-node packages/dendron-viz/src/index.ts`
```sh
ts-node packages/dendron-viz/src/index.ts
# hello world
```

