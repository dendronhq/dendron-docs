---
id: wJAlKZ0wSat0dDTzOAqqd
title: Engine Sync
desc: ""
updated: 1639853384676
created: 1636914823812
---

## Summary

How the CLI synchronizes data with the engine

## Lifecycle

- [[../packages/dendron-cli/src/commands/utils.ts]]

```ts
setupEngine(opts) {
    ...
    if opts.enginePort {
        con = new EngineConnector
        con.init
    }

    if opts.attach {
        con = EngineConnector.getOrCreate

    }
}
```

- engine connector
  ![[dendron://dendron.docs/pkg.dendron-engine.t.engine.arch-connector#initialization,1]]
