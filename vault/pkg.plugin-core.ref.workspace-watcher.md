---
id: KYzqosd80Xg8C0kNUblOp
title: Workspace Watcher
desc: ""
updated: 1639771248281
created: 1635517498318
---

## Summary

Watch files in workspace

Some functionality that it enables:

- update decorators
- update graph view
- update schema graph view
- update note preview

## Entry

- [[../packages/plugin-core/src/WorkspaceWatcher.ts]]

## LifeCycle

```ts
WorkspaceWatcher.activate {
		...
    workspace.onDidChangeTextDocument
        - debounce(@onDidChangeTextDocument)
        - debounce(@quickOnDidChangeTextDocument)

}

// only updates decorators
quickOnDidChangeTextDocument {
    ctx = "WorkspaceWatcher:quickOnDidChangeTextDocument"
    log "enter"

    windowWatcher?.triggerUpdateDecorations

    log "exit"
}

onDidChangeTextDocument {
	NoteSyncService.onDidChange
}
```

## Past Tasks

- [fix: notes added outside Dendron missing backlinks by SeriousBug · Pull Request #1618 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1618)
