---
id: tMdsz0dYNj3VgOvNAuEUY
title: Note Preview
desc: ''
updated: 1639022349767
created: 1637109406387
---


## Summary

How the Dendron Note Preview gets launched

## PseudoCode

- src/commands/ShowPreview.ts
```ts
execute {

    ...
    panel = createWebviewPanel

    ...
    panel.webview.onDidReceiveMessage

}
```

- src/components/DendronNotePage.tsx
```tsx
DendronNotePage {

    useRenderedNoteBody(noteProps, noteId) {
        renderedNoteContentHash = useRef
        if noteProps.contentHash != renderedNoteContentHash {
            engineSlice.renderNote noteId
        }
    }
    ...
}
```
