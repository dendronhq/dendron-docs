---
id: losscn1wvm8cqkj3g8iwpzk
title: Md Import
desc: ''
updated: 1662659668237
created: 1650041088877
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Lifecycle
- extends from [[dendron://dendron.docs/pkg.pods-core.lifecycle.import-pod]]

- [[../packages/pods-core/src/builtin/MarkdownPod.ts]]

```ts
plant { 
    _collectItems
    _prepareItems
    collectNotesCopyAssets
    notes = hDict2Notes

    notesClean = notes.map note { 
        proc.parse(note.body)
        updateLinks
        updateAssetLinks
        return note
    }

    bulkAddNotes(notesClean)

}
```

### _prepareItems
```ts

```

## Reference

## Cook

## Past Tasks
