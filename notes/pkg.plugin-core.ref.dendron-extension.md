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

## Related
- [[dendron://dendron.docs/pkg.plugin-core.ref.watchers.lifecycle]]
