---
id: a60F3At8Hb2jBBSV8tgPW
title: Deploy
desc: ''
updated: 1640281278712
created: 1640280816708
---


## Steps

```js
echo "sync nextjs-template"
VERSION=$(cat lerna.json | jq -r ".version")
pushd packages/nextjs-template/
git add .
git commit -m "chore(release): sync nextjs-template with dendron $VERSION"
git push
popd
```
