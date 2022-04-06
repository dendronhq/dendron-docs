---
id: 7pBXsVkEOmMxXd7VB97pq
title: Text Document Service
desc: ''
updated: 1647055233070
created: 1639770954932
---

## Summary

Processes text document events from vscode. 
- Listen to OnDidSaveTextDocument to keep notes on disk in sync with engine
- Process TextDocumentChangeEvent to return updated notes. Does not sync with engine as it does not reflect disk status

For how this service interacts with the workspace, see [[User actions|dendron://dendron.docs/pkg.plugin-core.t.workspace.arch#user-actions]]

## Entry

- [[../packages/plugin-core/src/services/TextDocumentService.ts]]

## Lifecycle
```ts
// also called by `PreviewPanel`
processTextDocumentChangeEvent {
    ctx = "TextDocumentService:processTextDocumentChangeEvent"
    @updateNoteContents
    log "exit"

}
```

```ts
// Callback function for `vscode.workspace.OnDidSaveTextDocument`
onDidSave {
    ctx = "TextDocumentService:onDidSave"
    @updateNoteContents
    log "exit"

}
```

```ts
// also called by `buttons.selection2link`
updateNoteContents {
    ctx = "TextDocumentService:updateNoteContents"
    @updateNoteMetadata
    log "exit"

}
```
