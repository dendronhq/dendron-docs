---
id: OrDzPloIdJnDO6ix0qxqN
title: Dendron Extension
desc: ''
updated: 1643349279715
created: 1643349273970
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

- [[../packages/plugin-core/src/workspace.ts]]

```ts

_DendronWorkspace = undefined;

getOrCreate { 
    if !_DendronWorkspace { 
        _DendronWorkspace = new DendronExtension
    }

}
```

## Layout on Disk
- VERSION: 0.107.2

~/.vscode-insiders/extensions/dendron.nightly-{VERSION}

```
* LICENSE.txt
* README.md
* dist
    * dendron-ws
    * dendron-yml.validator.json
    * extension.js
    * extension.js.LICENSE.txt
    * server.js
    * server.js.LICENSE.txt
    * static
    * web
    * webpack-require-hack.js
* language-configuration.json
* media
* package.json
* templates
* tsconfig.build.json
* webpack-require-hack.js
* webpack.common.js
* webpack.dev.js
* webpack.prod.js
```

## Related
- [[dendron://dendron.docs/pkg.plugin-core.ref.watchers.lifecycle]]
