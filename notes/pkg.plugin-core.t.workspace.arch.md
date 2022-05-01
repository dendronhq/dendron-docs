---
id: oLXbemaXPtmi2KMLD0N5U
title: Arch
desc: ''
updated: 1638232865737
created: 1638232865737
---

#stage.germ

## Lifecycle

- location: src/workspace.ts
```ts
activateWatchers {

    ... 
    fileWatcher = new FileWatcher(vaults)
    schemaWatcher = new SchemaWatcher(vaults)

}
```

## User actions
The following diagrams will showcase how actions in the workspace propagate to the engine

### Saving a TextDocument
```mermaid
sequenceDiagram
    participant Editor
    participant vscode
    participant WorkspaceWatcher
    participant TextDocumentService
    participant engine

    Editor ->> vscode: User saves document
    vscode ->>WorkspaceWatcher: TextDocumentWillSaveEvent
    WorkspaceWatcher ->>Editor: Update `updated` timestamp*
    vscode ->>TextDocumentService: TextDocument with updated timestamp
    TextDocumentService ->>engine: updateNote*
```
* Updates only happen if note content has changed

### Editing a TextDocument
Note: Edits without saving do not propogate to the engine. The engine reflects the state of the notes on disk so it will not change until the user explicitly saves
```mermaid
sequenceDiagram
    participant Editor
    participant vscode
    participant PreviewPanel*
    participant TextDocumentService

    Editor ->> vscode: User edits document
    vscode ->>PreviewPanel*: TextDocumentChangeEvent
    PreviewPanel* ->> TextDocumentService: Process TextDocumentChangeEvent
    TextDocumentService ->>PreviewPanel*: NoteProp
    PreviewPanel* ->> vscode: refresh
```
* If PreviewPanel is hidden, this entire sequence is a no-op