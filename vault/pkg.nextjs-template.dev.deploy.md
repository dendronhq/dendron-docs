---
id: a60F3At8Hb2jBBSV8tgPW
title: Deploy
desc: ''
updated: 1642647087306
created: 1640280816708
---


## Steps

```js
rm package.json

echo "sync nextjs-template..."
VERSION=$(cat lerna.json | jq -r ".version")
pushd packages/nextjs-template/

echo "backup node_modules..."
mv node_modules /tmp

echo "generating lockfile..."
yarn

echo "commit and push..."
git add .
git commit -m "chore(release): sync nextjs-template with dendron $VERSION"
git push

mv node_modules /tmp/nextjs-nm
mv /tmp/node_modules .
popd

git checkout -- package.json
git add  "packages/nextjs-template/yarn.lock"
git commit -m "chore: update nextjs lock file"
```
