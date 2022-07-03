---
id: OJwaDZjuGYaBSShHmDaSf
title: Deploy
desc: ""
updated: 1656697810384
created: 1635532194153
---

## Steps


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
