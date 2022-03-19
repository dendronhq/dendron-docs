---
id: k2uzdmjusknfo5tkfxeclw5
title: Setup Workspace
desc: ''
updated: 1647564815999
created: 1647564815999
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]
- [[../packages/plugin-core/src/commands/SetupWorkspace.ts]]

```ts
execute(opts) { 
    vaults := opts.workspaceInitializer ?? []

    createWorkspace(vaults)
}
```

## Reference

## Cook

## Past Tasks
