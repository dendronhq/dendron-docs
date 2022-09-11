---
id: zYn03NQuLgwmvK8Dfoe0L
title: Lifecycle
desc: ''
updated: 1656523908901
created: 1640632235031
---

## Initialization
- See [[Init View|dendron://dendron.docs/pkg.plugin-core.ref.web-view.editor.init-view]]


## Receiving Messages
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

## onDidChangeActiveTextEditor

Whenever the active text editor changes

### VSCode Logic

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

![[#send-refresh-message,1:#*]]

### View Logic

App receives the [[Change Active Editor|dendron://dendron.docs/pkg.dendron-plugin-views.lifecycle#change-active-editor]] event

The Note Preview renders contents based on the active editor

- [[../packages/dendron-plugin-views/src/hooks/index.tsx]]

```tsx
useRenderedNoteBody(id) {
	engineSlice.renderNote(id)
}

renderNote(id) {
	api.noteRender(id)
}
```

## hide
```ts
hide { 
    dispose
}

dispose {
    if _panel {
        this._panel.dispose();
    }
}
```

# Common

## Send Refresh Message

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

This leads the view to execute [[Change Active Editor|dendron://dendron.docs/pkg.dendron-plugin-views.lifecycle#change-active-editor]] hook

##
