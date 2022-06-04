---
id: k2uzdmjusknfo5tkfxeclw5
title: Setup Workspace
desc: ""
updated: 1654309092509
created: 1647564815999
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]
- [[../packages/plugin-core/src/commands/SetupWorkspace.ts]]

```ts
execute(opts) {
    workspaceInitializer := BlankInitializer
    vaults := opts.workspaceInitializer.createVaults ?? []

    createWorkspace(vaults)

    // execute wsInitializaer if there is one
    opts?.workspaceInitializer?.onWorkspaceCreation?(vaults)

    %reload%
}
```

- [[createWorkspace|dendron://dendron.docs/pkg.dendron-engine.ref.workspace-service#create-workspace]]

## Reference

### BlankInitializer

```ts
createVaults {
    vaultPath = vault?.fsPath || "vault"
    return {fsPath:: vaultPath}
}
```

## Cook

## Past Tasks
