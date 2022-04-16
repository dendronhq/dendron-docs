---
id: losscn1wvm8cqkj3g8iwpzk
title: Md Pod
desc: ''
updated: 1650041207486
created: 1650041088877
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

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
