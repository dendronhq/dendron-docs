---
id: pmS4Lc850CluRQM50tO3y
title: Rename
desc: ""
updated: 1642121300169
created: 1637207529476
---

## PesudoCode

- [[../packages/engine-server/src/drivers/file/storev2.ts#L785]]

```ts
renameNote(oldLoc, newLoc) {
    oldNote := oldLoc
    newNote := newLoc

    oldVault := oldLoc
    oldNote :=
    ...
    notesChangedEntries = getNotesWithLinkTo(oldNote)

    info "notesWithLinkTo:gather", notes

    notesChanged = notesChangedEntries.map note {
        processNoteChangedByRename(note)

    }
    ...
}

processNoteChangedByRename(note) {
    foundLinks = findLinks(note, oldLoc)
    allLinks = foundLinks

    // filter out invalid header links
    if (
        oldLoc.fname = newLoc.fname &&
        oldLoc.vaultName = newLoc.vaultName &&
        oldLoc.anchorHeader && newLoc.anchorHeader
    ) {
        #todo
        ...
    }
    allLinks.filter link {
        oldLocVaultName = oldLoc.vaultName
        explicitlySameVault := (link.to.vaultName = oldLocVaultName)
        oldLocVault :=
        implicitlySameVault = !link.to.vaultName &&
            note.vault = oldLocVault
    }

    // update link
    updateLink(note, ...)

}
```

## Past Work

- [[Implement Rename Provider for References|dendron://private/task.refactor.2021.12.10.implement-rename-provider-for-references]]
