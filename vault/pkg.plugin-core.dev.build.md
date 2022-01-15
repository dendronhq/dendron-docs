---
id: mwDT040wz5nBKtctjvNrQ
title: Build
desc: ""
updated: 1642274278311
created: 1635705939396
---

## Steps

Regular build process inside the monorepo is described in [[pkg.plugin-core.quickstart]]

## Webpack

You can build Dendron with Webpack

### Options

You can pass environmental variables to set the following options while building

- SKIP_SENTRY: don't upload source maps to sentry
- USE_IN_MEMORY_REGISTRY: this uses local in memory npm registry to do builds
- FAST: instead of building everything from scratch, assumes that all sub packages are already built
- LOG_LEVEL: set to `debug|info|error`, controls verbosity of log output

### Steps

```sh
env USE_IN_MEMORY_REGISTRY=1 LOG_LEVEL=info FAST=1 yarn build:patch:local
```

### Fast Re-build

This is if you've already build the plugin locally and need to re-built it (you ran a `yarn build:{version}:local`).
The regular [[cleanup script|#cleanup]] will remove all `node_modules` across all packges.
The fast rebuild will only remove `node_modules` from packages where it needs to be removed.

1. Remove generated assets
   ```sh
   npx lerna run clean --parallel --scope "@dendronhq/{dendron-plugin-views,dendron-next-server,plugin-core}"
   ```
1. Restore package.json
   ```sh
   git reset --hard
   ```
1. Re-build assets
   ```
   echo "link packages..."
   lerna bootstrap
   echo "re-building packages..."
   # NOTE: order matters, must run serially
   npx lerna run build --scope @dendronhq/dendron-next-server
   npx lerna run build --scope @dendronhq/dendron-plugin-views
   npx lerna run build --scope @dendronhq/plugin-core
   ```
1. Make your changes
1. Build again

## Cleanup

```sh
echo "removing all deps..."
./bootstrap/scripts/cleanup.sh
echo "re-installing..."
yarn setup
```

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
- [[Dev CLI|dendron://dendron.docs/etc.cli]]
