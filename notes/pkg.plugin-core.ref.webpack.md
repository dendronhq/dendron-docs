---
id: 7643d3kpuplrsaguf48w7m3
title: Webpack
desc: ''
updated: 1660955237227
created: 1660955031120
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

This describes the webpack setup for plugin-core

## Details

- two entry points:
```js [[../packages/plugin-core/webpack.common.js]]
entry: {
    extension: "./src/extension.ts",
    server: "./src/server.ts",
}
```

## Reference
- [[../packages/plugin-core/webpack.common.js]]