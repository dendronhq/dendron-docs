---
id: OJwaDZjuGYaBSShHmDaSf
title: Deploy
desc: ""
updated: 1683157735143
created: 1635532194153
---

## Lookup
- [[dendron://private/area.product.sop.patch-release]]

## Steps

- publish regular build

```sh
EXT_TARGET=dendron
DENDRON_CLI=dendron
UPGRADE_TYPE=minor
PUBLISH_ENDPOINT=local

SKIP_SENTRY=1 LOG_LEVEL=info $DENDRON_CLI dev build --upgradeType $UPGRADE_TYPE --publishEndpoint $PUBLISH_ENDPOINT --fast --extensionTarget $EXT_TARGET
```

- see [[dendron://dendron.dendron-site/dendron.topic.dev.cli.build.internal]]

## CI

### create-release-image
- .github/workflows/create-release-image.yml

- BUILD_ENV=ci ensures that we use a local version of the ci to build
```
yarn build:minor:local:ci
"build:minor:local:ci": "cross-env UPGRADE_TYPE=minor PUBLISH_ENDPOINT=local BUILD_ENV=ci USE_IN_MEMORY_REGISTRY=1 ./bootstrap/scripts/buildPatch.sh",
```

### publish extension
- .github/workflows/publish-extension-dendron-minor.yml

```
yarn build:minor:remote:ci
```

verdaccio

## Cook


### Manual bump and publish plugin only

If you need to manually bump the current package version number for any reason without updating NPM
- switch to local npm ![[dendron://dendron.docs/dev.cook.common#switch-to-local-npm,1:#*]]
- setup local npm registry ![[dendron://dendron.docs/pkg.plugin-core.dev.deploy#setup-local-npm-registry,1:#*]]

- bump plugin version ![[Bump Plugin Version|dendron://dendron.docs/pkg.plugin-core.dev.deploy#bump-plugin-version]]

- publish dependencies to npm ![[dendron://dendron.docs/pkg.plugin-core.dev.deploy#publish-node-dependencies-to-npm,1:#*]]

- prepare package.json ![[dendron://dendron.docs/pkg.plugin-core.dev.deploy#prep-packagejson,1:#*]]

- package plugin ![[dendron://dendron.docs/pkg.plugin-core.dev.deploy#package-plugin,1:#*]]

- publish to market place ![[dendron://dendron.docs/pkg.plugin-core.dev.deploy#publish-from-artifact,1:#*]]

- reset
```sh
git reset --hard
```

- publish to nextjs ![[Steps|dendron://dendron.docs/pkg.nextjs-template.dev.deploy#steps]]

- sync back to master

```
echo "sync back with master"
git checkout master
git merge --squash release/$VERSION
git commit -m "chore(release): publish $VERSION"
git push
```
test1345

- clean up repo ![[dendron://dendron.docs/pkg.plugin-core.dev.build#fast-re-build,1:#*]]

## Common Cook Steps

### Setup Local NPM Registry

This is necessary for actions that require pulling latest packages from NPM during development

- start verdaccio in separate shell

```sh
setRegLocal
npx verdaccio -c ./bootstrap/data/verdaccio/config.yaml
```

### Setup Environment Variables

The following need to be set

```sh
export GOOGLE_OAUTH_CLIENT_ID=
export GOOGLE_OAUTH_CLIENT_SECRET=
export SENTRY_AUTH_TOKEN=
export DENDRON_RELEASE_VERSION=
```

### Bump Plugin Version

```sh
# values are "patch|minor"
UPGRADE_TYPE=minor

echo "bumping..."
dendron dev bump_version --upgradeType $UPGRADE_TYPE
```

### Modify engine-server
- file: scripts/build-modify-engine.sh

The `generated-prisma-client` has special `.node` files that is not compiled by webpack which is why we copy it over into the webpack `dist` folder when building the package. 

Unfortunately, importing a missing file is not handled well by webpack. 

### Publish Node Dependencies to NPM

```sh
echo "publishing packages..."
lerna publish from-package --ignore-scripts
```

### Prep package.json

- `prep_plugin` formats the `package.json` file for the dendron plugin

- prereq: [[Setup Environment Variables|dendron://dendron.docs/pkg.plugin-core.dev.deploy#setup-environment-variables]]

```sh
dendron dev prep_plugin && rm package.json
```

### Package Plugin

- `package_plugin` creates the vsix

```sh
# NOTE: use `env SKIP_SENTRY=1` if not building with sentry support
dendron dev package_plugin
```

### Install Plugin Locally

Drag and drop vsix to vscode

### Publish From Artifact

```sh
# FILL in OSVX value
export OVSX_PAT=
dendron dev prep_plugin
VERSION=$(cat lerna.json | jq -r ".version")

pushd packages/plugin-core
PLUGIN_PKG=dendron-"$VERSION".vsix
echo "publishing $PLUGIN_PKG..."
yarn deploy:vscode:vsix $PLUGIN_PKG
yarn deploy:ovsx:vsix $PLUGIN_PKG
```

##

[^build]: [[Build|dendron://dendron.docs/pkg.dendron-cli.ref.dev.build]]

## Index

<!-- - [[Local|pkg.plugin-core.dev.deploy.local]]
- [[Old|pkg.plugin-core.dev.deploy.old]]
- [[Cook|pkg.plugin-core.dev.deploy.cook]] 
- [[pkg.plugin-core.dev.deploy.cook.manual-deploy]] 
-->