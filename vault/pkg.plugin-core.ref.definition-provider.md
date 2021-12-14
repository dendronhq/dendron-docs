---
id: SRuOqL3ezFILCD5Su9YyO
title: Definition Provider
desc: ''
updated: 1639423242723
created: 1639423204888
---


## Lifecycle

### Provide Definition

```ts
DefinitionProvider.provideDefinition(document, position) { 
    refAtPos := getReferenceAtPosition(document, position)
    
    uris := 
    out = uris.map uri { Location.new(uri)}

    if (out.length > 1) return out
    if (out.length = 1) { ... } 

    nonNoteFile = maybeNonNoteFileDefinition
    if nonNoteFile return provideForNonNoteFile
    else { 
        provideForNewNote
    }
}

maybeNonNoteFileDefinition { 
    ...
} 

provideForNonNoteFile(qs) { 
    out = new GotoNoteCommand(qs, kind: NON_NOTE)
    if !out return
    return Location.new(...)
}

provideForNewNote { 
    ...
}
```

## Past Tasks
- [[Goto Note Support for Links to Non Dendron Files|dendron://private/task.workspace.2021.12.03.goto-note-support-for-links-to-non-dendron-files]]