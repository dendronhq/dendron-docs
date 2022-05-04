---
id: T6y6QwCzbJQqgyQjSndEu
title: Cook
desc: ''
updated: 1651628693885
created: 1631231560375
---

### Work with local version of NextJS

#### Initialize
- in a different shell
![[dev.cook.common#switch-to-local-npm,1:#*]]

```sh
git clone $NEXTJS_REPO .next
cd .next
yarn
```

#### Export

```sh
yarn export
[[ -d ../docs ]] && rm -r ../docs
mv out ../docs 
touch ../docs/.nojekyll
```

- when checking with github
```sh
git add . && git commit -m "update" && git push
```

### Add a variable to the browser

NextJS supports [exposing env variables to the browser](https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables-to-the-browser)

The way we do this in Dendron is by using the [_writeEnvFile](https://github.com/dendronhq/dendron/blob/master/packages/pods-core/src/builtin/NextjsExportPod.ts#L250:L250) method 