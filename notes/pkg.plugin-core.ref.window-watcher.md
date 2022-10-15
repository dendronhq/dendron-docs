---
id: 5oM2CLbCmglg1napALx6R
title: Window Watcher
desc: ""
updated: 1665763106468
created: 1639770147490
---

## Summary

Watches changes in active window and notifies subscribers of changes

## Entry


## Lifecycle

- [[../packages/plugin-core/src/workspace.ts]]
```ts
activateWatchers {
  new WindowWatcher
}
```


- [[../packages/plugin-core/src/windowWatcher.ts]]
```ts
WindowWatcher.active {

  // for logging only
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
    @triggerUpdateDecorations {
      // calls updateDecorations
    }
}
```

## Calls

- [[Decorations|dendron://dendron.docs/pkg.plugin-core.ref.decorations]]
