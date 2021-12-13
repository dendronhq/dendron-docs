---
id: pmS4Lc850CluRQM50tO3y
title: Rename
desc: ''
updated: 1639422473814
created: 1637207529476
---

## PesudoCode
```ts
renameNote(oldLoc, newLoc) {
    oldNote := oldLoc
    newNote := newLoc

    oldVault := oldLoc
    oldNote :=
    ...
    notesToChange = getNotesWithLinkTo(oldNote)

    notesChanged = notesToChange.map note { 
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

    }
    ...
}

```

## Past Work
- [[Implement Rename Provider for References|dendron://private/task.refactor.2021.12.10.implement-rename-provider-for-references]]