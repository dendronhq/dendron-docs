---
id: tMdsz0dYNj3VgOvNAuEUY
title: Note Preview
desc: ""
updated: 1639792630641
created: 1637109406387
---

## Summary

How the Dendron Note Preview gets launched

## Entry

- [[extension|../packages/plugin-core/src/_extension.ts#L1051]]
  - [[PreviewFactory|../packages/plugin-core/src/components/views/PreviewViewFactory.ts]]
  - [[ShowPreview|../packages/plugin-core/src/commands/ShowPreview.ts#L298]]

## Lifecycle

### Initialization

- [[extension|../packages/plugin-core/src/_extension.ts#L1051]]

We register the ShowPreview command and pass in a preview panel factory to hold the vscode panel

```ts
vscode.registerCommand(
    ShowPreviewCommand.new(PreviewPanelFactory.create(workspace));
)
```

- [[PreviewFactory|../packages/plugin-core/src/components/views/PreviewViewFactory.ts]]

Panel is created. Handles messages from the webview and will update the editor on certain preview events

```ts
create {
    @_panel = createWebviewPanel

    // handle messages from the webview
    _panel.webview.onDidReceiveMessag(msg => {
        switch(msg.type)
            case MESSAGE_DISPATCHER_READY {
                ...
            }
            case ON_CLICK {
                ...
            }
            ...
    })
}
```

- [[View Startup|dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle#view-startup]]

  - goes into detail about initialization actions in the webview
  - this sends a MESSAGE_DISPATCHER_READY signal

- [[PreviewFactory|../packages/plugin-core/src/components/views/PreviewViewFactory.ts]]
  - this tells the panel to send refresh message to the webview

```ts
case MESSAGE_DISPATCHER_READY {
    note = getActiveNote
    if note PreviewPanelFactory.sendRefreshMessage
}
```

![[dendron://dendron.docs/pkg.dendron-plugin-views.ref.note-preview#send-refresh-message,1:#*]]

### onDidChangeActiveTextEditor

- [[WindowWatcher|../packages/plugin-core/src/windowWatcher.ts#L140]]

```ts
triggerNotePreviewUpdate(document) {
    maybeNote = tryGetNoteFromDocument(document)
    if (maybeNote) showPreviewAndUpdate(maybeNote)
}
```

- [[PreviewFactory|../packages/plugin-core/src/components/views/PreviewViewFactory.ts]]

```ts
showPreviewAndUpdate {
    ...
    sendRefreshMessage(note)
}
```

![[dendron://dendron.docs/pkg.dendron-plugin-views.ref.note-preview#send-refresh-message,1:#*]]

## Common

### Send Refresh Message

```ts
// tell webview to update with the new note
sendRefreshMessage(note) {
    @panel.postMessage(
        ON_DID_CHANGE_ACTIVE_TEXT_EDITOR,
        note,
        syncChangedNote: true
    )
}
```

This leads the view to execute [[Change Active Editor|dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle#change-active-editor]] hook

##
