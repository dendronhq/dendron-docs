---
id: sf4o255mwizpx7b8tjo89ma
title: Note Test Utils
desc: ""
updated: 1650494551789
created: 1650494413493
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

- location: [[../packages/common-test-utils/src/noteUtils.ts]]

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

## Reference

### createNote

Lets you create a new note for testing

```ts
/**
 *
 * :
 *  await NoteTestUtilsV4.createNote({
 *    wsRoot,
 *    vault,
 *    fname: "alpha",
 *    body: [`# H1`, `# H2`, `# H3`, "", "Some Content"].join("\n"),
 *  });
 *
 * By default, create note with following properties:
 *  - created & updated = 1
 *  - id = note.fname
 *  - body = ""
 *
 * @param opts
 * @returns
 */
```

## Cook

## Past Tasks
