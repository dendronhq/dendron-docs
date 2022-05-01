---
id: 6SdOtTCgLSvFCGa5VKBGe
title: From Commit
desc: ''
updated: 1640281253008
created: 1640281239219
---


This describes how to deploy from a regular commit

## Steps
```
echo "sync nextjs-template"
VERSION=$(git rev-parse HEAD)
echo "$VERSION"
pushd packages/nextjs-template/
git add .
git commit -m "chore(release): sync nextjs-template with dendron $VERSION"
git push
popd
```
