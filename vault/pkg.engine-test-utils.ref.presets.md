---
id: ro5e6rzg20xskmlfzq92zb7
title: Presets
desc: ""
updated: 1650494345901
created: 1648918531529
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

Higher level presets, derived from [[Note Presets|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets]]

- location: [[../packages/engine-test-utils/src/presets/engine-server/utils.ts]]

## Quickstart

The preset functions creates a sample workspace with a set of notes.
For example, using `setupBasic` will create a workspace with the following notes

```
- foo
- foo.ch1
- bar
```

You can reference these notes by their title using `engine.notes`

```ts
const fooNote = engine.notes["foo"];
```

It can be hard to navigate to the correct file using vscode. The preset functions are located in [[../packages/engine-test-utils/src/presets/engine-server/utils.ts]] and the low level presets are in [[../packages/common-test-utils/src/presets/notes.ts]]

## Reference

### setupBasic

### setupRefs

- [[NOTE_WITH_NOTE_REF_SIMPLE|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets#note_with_note_ref_simple]]

### setupLinks

- [[NOTE_WITH_TARGET|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets#note_with_target]]
- [[NOTE_WITH_ANCHOR_LINK|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets#note_with_anchor_link]]
