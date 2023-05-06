---
id: xf8ij4qhn80cl3x47kyjimc
title: Manual Deploy
desc: ''
updated: 1683318877940
created: 1683318877940
---

## setup 
```sh
# source helpers 
. bootstrap/scripts/helpers.sh
# change registry to local endpoint
setRegLocal
npx verdaccio -c ./bootstrap/data/verdaccio/config.yaml
```

### bump version (optional)

```sh
UPGRADE_TYPE=minor

echo "bumping..."
dendron dev bump_version --upgradeType $UPGRADE_TYPE
```

### publish

```sh
echo "publishing packages..."
lerna publish from-package --ignore-scripts
```

### prepare package

```sh
dendron dev prep_plugin && rm package.json
env SKIP_SENTRY=1 dendron dev package_plugin
```

### test package locally
- drag and drop vsix

### publish to marketplace

```sh
VERSION=0.123.0
export OVSX_PAT=
dendron dev prep_plugin
VERSION=$(cat lerna.json | jq -r ".version")

pushd packages/plugin-core
PLUGIN_PKG=dendron-"$VERSION".vsix
echo "publishing $PLUGIN_PKG..."
yarn deploy:vscode:vsix $PLUGIN_PKG
yarn deploy:ovsx:vsix $PLUGIN_PKG
```