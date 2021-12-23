---
id: OJwaDZjuGYaBSShHmDaSf
title: Deploy
desc: ''
updated: 1640281289673
created: 1635532194153
---

## Cook


### Manual bump and publish package versions

If you need to manually bump the current package version number for any reason

```sh
# values are "patch|minor"
UPGRADE_TYPE=
# eg. 0.69.0
RELEASE_BRANCH= 

echo "bumping..."
dendron dev bump_version --upgradeType $UPGRADE_TYPE

echo "publishing packages..."
lerna publish from-package --ignore-scripts

echo "install..."
dendron dev prep_plugin && rm package.json
dendron dev package_plugin 
dendron dev install_plugin

echo "publish..."
# go to [[Publish From Artifact|dendron://dendron.docs/pkg.plugin-core.ops.deploy#publish-from-artifact]]

echo "reset..."
git reset --hard

# to update nextjs, see [[Steps|dendron://dendron.docs/pkg.nextjs-template.dev.deploy#steps]]

echo "sync back with master"
git checkout master
git merge --squash release/$VERSION
git commit -m "chore(release): publish $VERSION"
git push
```

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

### Recover from failed local publish

- start verdaccio in separate shell
```sh
setRegLocal
npx verdaccio -c ./bootstrap/data/verdaccio/config.yaml
```

- publish 
```sh
git stash
lerna publish from-package --ignore-scripts
git stash pop
```

- package and install
```
dendron dev package_plugin && rm package.json
dendron dev install_plugin
```
