---
id: OJwaDZjuGYaBSShHmDaSf
title: Deploy
desc: ''
updated: 1639522387826
created: 1635532194153
---

## Cook


### Manual bump and publish package versions

If you need to manually bump the current package version number for any reason

```sh
# values are "patch|minor"
UPGRADE_TYPE=
# eg. release/0.69.0
RELEASE_BRANCH= 

echo "bumping..."
dendron dev bump_version --upgradeType $UPGRADE_TYPE

echo "publishing packages..."
lerna publish from-package --ignore-scripts

echo "sync nextjs-template"
VERSION=$(cat lerna.json | jq -r ".version")
pushd packages/nextjs-template/
git add .
git commit -m "chore(release): sync nextjs-template with dendron $VERSION"
git push
popd

echo "sync back with master"
git checkout master
git merge --squash $RELEASE_BRANCH
git commit -m "chore(release): publish $UPGRADE_TYPE"
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
yarn deploy:vscode:vsix $PLUGIN_PKG
yarn deploy:ovsx:vsix $PLUGIN_PKG
```

