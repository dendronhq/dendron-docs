---
id: tYxnZg8ZPnS5ZhCg2V3c0
title: Arch
desc: ""
updated: 1645903423362
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

- loc: [[../packages/engine-server/src/drivers/file/noteParser.ts#^vc6wy8vsw58p]]

```ts
parseFiles(allPaths) {
  fileMetaDict := allPaths

  root = fileMetaDict[1].find(n => n.fpath === "root.md") as FileMeta;
  ...
  lvl = 2
  prevNotes = fileMetaDict[1]
  prevNotes.flatMap(ent) {
    // see [[Arch|dendron://dendron.docs/pkg.dendron-engine.t.engine.arch#^45PEWoYX9mr8]]
    out = parseNoteProps(ent)

  }

}
```

### Common

The following are referenced by other blocks in this note

- [[../packages/engine-server/src/drivers/file/noteParser.ts#^2ozzw6feh53f]]^45PEWoYX9mr8

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
    return note
  }

  string2Note
}
```

- [[../packages/common-server/src/filesv2.ts#^piwaz833oxrq]]

```ts
string2Note(content) {
  data, body = matter(contents)
  note :=
  return note

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
