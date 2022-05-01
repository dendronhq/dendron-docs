---
id: gvhxZVZI25RfgARaI48DY
title: Write
desc: ""
updated: 1640294809249
created: 1639872573323
---

## Summary

<!-- 2-3 sentences describing what this module does-->

## Entry

<!-- Link to where this module is located in the code-->

## Lifecycle

<!-- Startup process for this module -->

### Basic

```ts
writeNote {
	// see [[Write|dendron://dendron.docs/pkg.dendron-engine.t.engine.ref.write#^jP4rwHq1mdtd]]
  @store.writeNote
	// see [[Init|dendron://dendron.docs/pkg.dendron-engine.t.engine.ref.refresh#init]]
  @refreshNote
}
```

- store [^store] ^jP4rwHq1mdtd

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

  if existingNote @replacePrevNoteWithNewNote(note, existingNote)

  // we might need to add parents to this note
  changed = addParent(note)
  return changed
}
```

### Update Only

- this is called from the following places
  - Refactoring
    - eg.
      - [[../packages/plugin-core/src/commands/MoveHeader.ts]]
      - [[Engine RenameNote|../packages/engine-server/src/drivers/file/storev2.ts]]
  - Pods
    - eg. [[../packages/plugin-core/src/commands/pods/AirtableExportPodCommand.ts]]
  - Doctor
    - eg. [[DoctorService|../packages/engine-server/src/doctor/service.ts#L168]]
      - eg. H1_TO_TITLE

### Fast Mode

- #stage.germ

Writing in fast mode means without indexing existing notes. Some notable differences:

- `getNote` calls are done from disk instead of from memory
- when calling `_writeNewNote`, we don't change parents or children

## Reference

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
