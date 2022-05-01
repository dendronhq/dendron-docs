---
id: AOFojXxY5kiz65DOTIOAc
title: Engine Hooks
desc: ''
updated: 1639188524641
created: 1639188334725
---

## Summary
Goes over various Engine Testing hooks


- file: engine-test-utils/src/presets/engine-server/utils.ts

### setupBasic

- vault1:
    - foo [^foo]
    - foo.ch1
- vault2:
    - bar



## Common

- file: src/presets/notes.ts

### NOTE_SIMPLE

CreateNoteFactory({ fname: "foo", body: "foo body" })

### NOTE_SIMPLE_CHILD

CreateNoteFactory({
fname: "foo.ch1",
body: "foo.ch1 body",
}),


[^foo]: [[NOTE_SIMPLE|dendron://dendron.docs/pkg.engine-test-utils.ref.engine-hooks#note_simple]]