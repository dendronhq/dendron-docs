---
id: KYzqosd80Xg8C0kNUblOp
title: Workspace Watcher
desc: ""
updated: 1644697438280
created: 1635517498318
---

## Summary

Watch files in workspace

Some functionality that it enables:

- update decorators
- update graph view
- update schema graph view
- update note preview

## LifeCycle

- [[../packages/plugin-core/src/WorkspaceWatcher.ts]]

```ts
activate {
    workspace.onWillSaveTextDocument @onWillSaveTextDocument
    workspace.onDidChangeActiveTextEditor(doc) {
        if doc.isNew @onFirstOpen
    }
}
```

```ts
onFirstOpen {

}
```

## Past Tasks

- [fix: notes added outside Dendron missing backlinks by SeriousBug · Pull Request #1618 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1618)
