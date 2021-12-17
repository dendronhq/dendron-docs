---
id: 5oM2CLbCmglg1napALx6R
title: Window Watcher
desc: ""
updated: 1639770791554
created: 1639770147490
---

## Summary

Watches changes in active window and notifies subscribers of changes

## Entry

- [[../packages/plugin-core/src/windowWatcher.ts]]

## Lifecycle

```ts
WindowWatcher.active {

	window.onDidChangeVisibleTextEditors
			- log "WindowWatcher:onDidChangeVisibleTextEditors", editorPaths

	window.onDidChangeActiveTextEditor @onDidChangeActiveTextEditor

	window.onDidChangeTextEditorVisibleRanges @onDidChangeTextEditorVisibleRanges
}


onDidChangeActiveTextEditor(doc) {
    ctx = "WindowWatcher:onDidChangeActiveTextEditor"
		...

    @triggerUpdateDecorations
    @triggerNoteGraphViewUpdate

    @onDidChangeActiveTextEditorHandlers.each { it.call }

    if newlyOpened(doc) @onFirstOpen
}

onDidChangeTextEditorVisibleRanges {
		...
    @triggerUpdateDecorations
}
```
