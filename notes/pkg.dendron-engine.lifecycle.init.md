---
id: n282x6o1hopmvuyi4q9msyr
title: Init
desc: ''
updated: 1663517653763
created: 1663455452883
---

## Engine Initialize - Store Logic
- packages/engine-server/src/drivers/file/storev2.ts

```ts
FileStorage {
    init {
        ...
        initNotes
    }

    initNotes {

        if metadataStore {
            // #sqlite
            new SQLiteMetadataStore 
            // download sqlite if not present
            ...
            if !isDBInitialized {
                createAllTables
                createWorkspace
            }
        }

        // 532
        vaults.map {
            notes, cacheUpdates = _initNotes(vault)
            notesWithLinks notes.filter{ n.links }
            writeNotesToCache(cacheUpdates)
        }

        // 565
        addBacklinks(notesWithLinks)
    }

        _initNotes {
            noteFiles = getAllFiles(vault)
            notes = NoteParser.parse(noteFiles, vault)
            notes.map n {
                findLinks(n)
            }
            return notes
        }

        addBacklinks(notesWithLinks, allNotes) {
            notesWithLinks.each note {
                note.links.each l {
                    n = allNotes[l.to.fname]
                    addBacklinks(n)
                }
            }
        }

}
```

- src/topics/markdown/utilsv2.ts
```ts
findLinks(note) {
    ast = remark.parse(note)
    links = selectAll(wikiLink, ast)
    return links
}
```

### NoteParser

#### parse
```ts
parse {
    parseFile {
    }
}

parseFile(files) {
    meta := getFileMeta
    rootNote = @parseNoteProps
    maxLvl := meta

    // 1st level notes
    lvl = 1
    prevNodes = meta[lvl]
    prevNodes.map  {
        note = @parseNoteProps it
        if !(note in $cache) { updateCache note }
        return note
    }
    prevNodes.map {
        addChild(rootNote, it)
    }
    lvl++

    // remaining notse
    while lvl < maxLvl {
        notes = meta[lvl]];
        notes.map {
            note = @parseNoteProps it
        }
    }

    // SQLiteMetadataStore
    if useSQLiteMetadataStore {
        if isVaultInitialized {
            bulkInsertAllNotes(cacheUpdates)
        } else {
            dVault.create
            bulkInsertAllNotes
        }
    }
}

```

#### parseNoteProps
```ts

parseNoteProps(vault, meta, opts, notes) {
    noteProps = file2Note(vault, meta)
    if opts.addParent {
        stubs = addParent(
            noteProps,
        )
    }
    return [noteProps].concat(stubs)
}

```

- src/files.ts
```ts
getAllFiles {

}
```

## Related
- [[dendron://dendron.docs/pkg.dendron-engine.lifecycle.init.v3]]