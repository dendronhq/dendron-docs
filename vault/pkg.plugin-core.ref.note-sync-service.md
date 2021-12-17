---
id: 7pBXsVkEOmMxXd7VB97pq
title: Note Sync Service
desc: ""
updated: 1639771278360
created: 1639770954932
---

## Summary

Keep notes on disk in sync with engine

## Entry

- [[../packages/plugin-core/src/services/NoteSyncService.ts]]

## Lifecycle

```ts
// also called by [[Workspace Watcher|dendron://dendron.docs/pkg.plugin-core.ref.workspace-watcher]]
onDidChange {
		...
    @updateNoteContents
}
```

```ts
// also called by `buttons.selection2link`
updateNoteContents {
    ctx = "NoteSyncService:updateNoteContents"
    @updateNoteMeta
    log "exit"

}
```

```ts
// also called by fileWatcher.onDidCreate
updateNoteMeta {
    links = findLinks
}
```
