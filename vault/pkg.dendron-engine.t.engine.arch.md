---
id: tYxnZg8ZPnS5ZhCg2V3c0
title: Arch
desc: ""
updated: 1639874977073
created: 1639873227613
---

## Entry

- [[../packages/engine-server/src/enginev2.ts]]

## Lifecycle

### Init

- [[../packages/engine-server/src/enginev2.ts]]

```ts
init {
	store.init
}

```

- [[../packages/engine-server/src/drivers/file/storev2.ts]]

```ts
init {
  @initNotes
}

initNotes {
  notesWithLinks = []

  @vaults.forEach vault => {
    notes = @_initNotes(vault)
    notesWithLinks.push filterLinks(notes)
  }

  @_addBacklinks(notesWithLink)

}

_initNotes(vault) {

  noteFiles := getAllFiles(vault)

	parser = new NoteParser
	notes = parser.parse(noteFiles)

  cache = readNotesFromCache(vault)

  {notes, cacheUpdates} = new NoteParser(cache).parseFiles(noteFiles)

  notes.map n => {
    if has(cacheUpdates, n) {
      // update all links and anchors if cache is different [[../packages/engine-server/src/drivers/file/storev2.ts#^link-anchor]]
    } else {
      // update links from cache
    }

  }
}
```

- [[../packages/engine-server/src/drivers/file/noteParser.ts]]

```ts
parseFiles(allPaths) {
  fileMetaDict := allPaths

  ...
  notesByFname = {}
  notesById = {}

  %nodesOrderedByDistanceFromRoot :=
  %nodesOrderedByDistanceFromRoot notePath => {
    // see [[Engine|dendron://dendron.docs/pkg.dendron-engine.t.engine.arch#^45PEWoYX9mr8]]
    resp = @parseNoteProps(notePath)

    // update cache
    // see [[../packages/engine-server/src/drivers/file/noteParser.ts#^cache-update]]

    notes := resp
    notes.forEach n => {
      notesByFname[n.fname] = n
      notesById[n.id] = n
    }
  }
  return {notesByFname, notesById}
}
```

### Common

The following are referenced by other blocks in this note

- [[../packages/engine-server/src/drivers/file/noteParser.ts#L215]] ^45PEWoYX9mr8

```ts
parseNoteProps(notePath) {
  file2NoteWithCache(notePath, @cache)
}
```

- [[../packages/common-server/src/filesv2.ts#L199]]

```ts
file2NoteWithCache(notePath, cache) {
  name := notePath
  content = read(notePath)
  sig = hash(content)

  if(sig in cache) {
    body := content
    note = {
      ...cache.notes[name],
      body,
      vault
    }
  }
}
```

- [[../packages/engine-server/src/drivers/file/storev2.ts]]
- add backlinks ^wuW4SbA5hVwf

```ts
_addBacklinks {
  @_addBacklinksImpl
}

_addBacklinksImpl(allNotes, notesWithLinks) {

  notesWithLinks.forEach noteFrom => {
    noteFrom.links.forEach link => {
      fnameTo = link.to.fname
      // all notes that this points to
      notes := fnameTo

      notes.forEach noteTo => {
        addBacklink(noteFrom, noteTo, link)
      }
    }
  }
}
```

- [[../packages/common-all/src/dnode.ts]]

```ts
addBacklink(from: Note, to: Note) {
  to.links.push(...)
}

```

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->

- [^store]: [[../packages/engine-server/src/drivers/file/storev2.ts#L1013]]
- [^store-write]: [[../packages/engine-server/src/drivers/file/storev2.ts#L1013]]
