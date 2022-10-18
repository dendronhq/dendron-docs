---
id: mwDT040wz5nBKtctjvNrQ
title: Build
desc: ''
updated: 1666042672086
created: 1635705939396
---

## Prerequisites

Build all dependencies of plugin. See [[pkg.plugin-core.quickstart]]

## Build

> NOTE1: as a side effect of building, lerna will create a patch release and commit it to your current branch as well as bump the monorepo version up. This is required for building but you don't want to check it in
> NOTE2: this does not build updates to `dendron-plugin-views`. If the view code has changed, follow the [[views build steps|dendron://dendron.docs/pkg.dendron-plugin-views.build]] to compile and sync

```sh
cd $MONO_ROOT
yarn setup:cli
pushd packages/plugin-core && yarn download-sqlite-binary && popd
env LOG_LEVEL=info FAST=1 yarn build:patch:local 2>&1 | tee /tmp/out.txt
```

After you have verified the changes, don't forget to revert the patch
![[dendron://dendron.docs/pkg.plugin-core.dev.build#remove-version-bump,1]]

![[dendron://dendron.docs/pkg.plugin-core.dev.build#rebuild-dependencies]]

## Cleanup

### Remove version bump
```sh
git reset --hard 'HEAD^'
```

### Rebuild Dependencies

When building dependencies locally, you remove the symlinks inside `plugin-core` and `dendron-plugin-views`. This restores your development environment

```sh
$DENDRON_WORKSPACE/bootstrap/scripts/fastRebuild.sh
```

## Options

You can pass environmental variables to set the following options while building

- SKIP_SENTRY: don't upload source maps to sentry (this is enabled when you use `FAST`)
- USE_IN_MEMORY_REGISTRY: this uses local in memory npm registry to do builds
- FAST: instead of building everything from scratch, assumes that all sub packages are already built
    - skip type check 
    - don't restore package.json
- LOG_LEVEL: set to `debug|info|error`, controls verbosity of log output

## Layout

Layout of build folder

```yml
- dist/ # webpack generated output
    - static/
        - js/
            - ${view}.bundle.js     # dendron-plugin-views generated
```

## Related

- [[Build|dendron://dendron.docs/pkg.plugin-core.ref.build]]
- [[dendron://dendron.dendron-site/dendron.topic.dev.cli]]
- [[Investigating a build step|dendron://dendron.docs/dev.process.code.monorepo#investigating-a-build-step]]
