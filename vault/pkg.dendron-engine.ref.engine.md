---
id: gD8YOmOBQrkWVVj57Bu2N
title: Engine
desc: ""
updated: 1639862998950
created: 1639850540192
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

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
    // see [[Engine|dendron://dendron.docs/pkg.dendron-engine.ref.engine#^45PEWoYX9mr8]]
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

- [[../packages/engine-server/src/drivers/file/storev2.ts#L401]]
- add backlinks ^wuW4SbA5hVwf

```ts
_addBacklinks {
  @_addBacklinksImpl
}

_addBacklinksImpl {
  notesWithLinks.forEach note => {
    ...
  }
}

```

### Write

```ts
writeNote {
  @store.writeNote
  @refreshNote
}
```

- store [^store]

```ts
writeNote(note) {
  maybeNote = getNote(note.fname)

  shouldUpdate := note
  changed = []

  if shouldUpdate:
    note = {...maybeNote, ...note}
  else:
    changed = @_writeNewNote(note)

  // apply any schemas as needed
  schemaMatch = SchemaUtils.match(note)

  // apply any hooks as needed
  ...

  // write note to disk
  note2File(note)

  // schema matching logic
  ...

  // if any other notes were affected, apply changes here
  // see [[../packages/engine-server/src/drivers/file/storev2.ts#^change]]
  ...

}

_writeNewNote(note, existingNote?) {

  if existingNote {
    // logic to take care of existing note
    ...
  }

  // we might need to add parents to this note
  changed = addParent(note)
  return changed
}
```

#### Fast Mode

- #stage.germ

Writing in fast mode means without indexing existing notes. Some notable differences:

- `getNote` calls are done from disk instead of from memory
- when calling `_writeNewNote`, we don't change parents or children

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->

- [^store]: [[../packages/engine-server/src/drivers/file/storev2.ts#L1013]]
- [^store-write]: [[../packages/engine-server/src/drivers/file/storev2.ts#L1013]]
