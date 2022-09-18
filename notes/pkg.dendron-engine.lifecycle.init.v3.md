---
id: jmjhowpugfehxph1x6rlznz
title: V3
desc: ''
updated: 1663472463049
created: 1663455671048
---

## enginev3

- [[../packages/engine-server/src/DendronEngineV3.ts]]
```ts
new DendronEngine3(
    fileStore = new NodeJSFileStore()
    noteStore: new NoteStore(
        fileStore,
        new NoteMetadataStore(),
        URI.file(wsRoot)
    ),
)
init {
    initSchema
    initNotes
}

initNotes {
    vaults.map vault {
        maybeFiles = _fileStore.readDir vault
        notesCache = new NotesFileSystemCache
        // 953
        notesDict = new NoteParserV2.parseFiles maybeFiles
    }
    addBacklinks

}
```

- [[../packages/engine-server/src/drivers/file/NoteParserV2.ts]]
```ts
parseFiles {
    ...
    unseenKeys 
    rootProps := 
    // root hierarchies
    asyncLoopOneAtATime(fileMetaDict).forEach ent {
        parseNoteProps(ent)
    }

    // 203
    // parse everything else
    ...

    // 266
    domains.map {
        SchemaUtils.matchDomain
    }

    unseenKeys.forEach {
        cache.drop(unseenKey)
    }

    if cache.numCacheMisses > 0  {
        cache.writeToFileSystem
    }
}


parseNoteProps note {
    file2NoteWithCache note
}

file2NoteWithCache {
    cacheEntry := 
    if matchHash {
        return
    } else {
        cache.set
        incrementCacheMiss
    }
}
```