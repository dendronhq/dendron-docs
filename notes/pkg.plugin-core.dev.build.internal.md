---
id: UjTt1I0h5VOY98f4vP4HN
title: Internal
desc: ""
updated: 1665874479633
created: 1638207204507
---

Dendron uses webpack to bundle all dependencies before creating a VSIX file.

- Development:
  - does not apply minimizer
- Production:
  - applies minimizer

Assets:
- assets/static -> dist/static

## Static Assets

- static assets for plugin-core gets synced from multiple sources
- two phases:
  - 1. collect
  - 2. pack

#### collect

- loc: src/utils/build.ts

```ts
syncStaticAssets
    delete /assets/static
    cp next-server/out /assets/static
    cp next-server/assets/js /assets/static/js
    cp api-server/assets/static /assets/static/js

    cp dendron-plugin-views/build/static/css /assets/static/css
    cp dendron-plugin-views/build/static/js /assets/static/js
```

#### pack

- loc: webpack.common.js

```sh
cp assets/static static
cp assets/dendron-ws dendron-ws
cp ../dendron-yml.validator.json dendron-yml.validator.json
...
```

## FAST Mode
- skip sentry
  ```
  SKIP_SENTRY=1
  ```
- installPluginDependencies false
  ```
  (`yarn install --no-lockfile --update-checksums`, {
        cwd: this.getPluginRootPath(),
      })
  ```
- skip type check
- skip restore package.json after packaging plugin
- skip building plugin-views

## Wrapper Script
- [[../bootstrap/scripts/buildPatch.sh]]