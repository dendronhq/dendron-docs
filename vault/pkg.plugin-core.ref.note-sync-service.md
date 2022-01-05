---
id: 7pBXsVkEOmMxXd7VB97pq
title: Note Sync Service
desc: ""
updated: 1641378923748
created: 1639770954932
---

## Summary

Keep notes on disk in sync with engine

NoteSyncService also exposes an event that fires when NoteProps has been updated on the engine. It fires AFTER the engine state has finished updating, unlike other events like on fileWatcher, which only reflect actions happening on client side.

## Entry

- [[../packages/plugin-core/src/services/NoteSyncService.ts]]

## Lifecycle

```ts
  /**
   * Event that fires after a set of NoteProps has been changed AND those
   * changes have been reflected on the engine side
   */
  get onNoteChange(): Event<NoteProps>;
```

This call below will be refactored once FileWatcher changes to an eventing model:
```ts
// also called by fileWatcher.onDidCreate
updateNoteMeta {
    links = findLinks
}
```
