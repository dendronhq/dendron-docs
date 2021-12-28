---
id: LTlrqRcec9J01ZVn1M5Go
title: Create New
desc: ''
updated: 1640709000393
created: 1640708991286
---

## Summary

Creating a new note


## Lifecycle

- src/commands/NoteLookupCommand.ts
```ts
acceptItem(item) {
    if isCreateNewNotePick(item)
        result = acceptNewItem
    ...
}

acceptNewItem(item) { 

    if item.stub
        nodeNew = @engine.notes[item]
    else
        vault = getVaultForNewNote(item)
        ...
}

getVaultForNewNote {

    vaultsWithMatchingFile := @engine.notes
    vault = @picker.vault ??= getVaultForOpenEditor
    if vault in vaultsWithMatchingFile {
        availVaults = vaults not in vaultsWithMatchingFile
        if availVaults.length > 1 
            return promptVault(availVaults)
        else if availVaults = 1
            return availVaults
    }

}
```

