---
id: gD8YOmOBQrkWVVj57Bu2N
title: Engine
desc: ""
updated: 1639852440060
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

- [[../packages/engine-server/src/enginev2.ts]]

```ts
init {
	store.init
}

```

- [[../packages/engine-server/src/drivers/file/storev2.ts]]

```ts
_initNotes(vault) {

  noteFiles := getAllFiles(vault)
parseFile
	parser = NoteParser.new
	notes = parser.parse(noteFiles)

  cache = readNotesFromCache(vault)

  resp = NoteParser.new(cache).parseFiles(noteFiles)
}

parseFiles(allPaths) {
  fileMetaDict := allPaths

  ...
  lvl = 2
  fileMetaDict[lvl].map(ent) {
    out = parseNoteProps(ent)

}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
