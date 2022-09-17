---
id: lkryb7oixvjt0notkygzete
title: Lifecycle
desc: ''
updated: 1663455061288
created: 1663373541106
---

- [[../packages/dendron-cli/src/commands/base.ts]]
```ts
buildArgs {
    setupEngineArgs
}

enrichArgs {
    setupEngine
}
```

- [[../packages/dendron-cli/src/commands/utils.ts]]
```ts
setupEngine {
    engine
    engine.init
}
```


## enginev3

- [[../packages/engine-server/src/DendronEngineV3.ts]]
```ts
init {
    initSchema
    initNotes
}
```