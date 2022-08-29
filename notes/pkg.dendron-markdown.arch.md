---
id: dc72e684-8ff8-4c41-a2f7-93fc14ee0d6a
title: Arch
desc: ''
updated: 1661742017910
created: 1622147759924
---

## Summary

We use `unified` plugins to parse markdown. Every plugin can be composed of the following three components:
- parser: classify tokens and attach metadata to tokens
- transformer: transform the entire syntax tree
- compiler: change token to output format

Unified gives a few ways of working with processors:
- `parse`: calls the `parser` and results in an abstract syntax tree
- `process`: calls `parser`, `transformer`, and `compiler` and usually results in a string output


## Components

### Steps
Dendron has different processors depending on the desired output (eg. markdown vs HTML). Below is the interface for markdown

- source: [procRemarkFull](https://github.com/dendronhq/dendron/blob/51633edcd0817c9b4aa18ff25f492f7a00e6e088/packages/engine-server/src/markdown/utilsv5.ts#L344-L344)
```ts
static procRemarkFull(
  data: ProcDataFullOptsV5,
  opts?: { mode?: ProcMode; flavor?: ProcFlavor }
) 
```

Each processor takes the following arguments
- ProcMode
- ProcFlavor
- ProcData

- NOTE: disregard the `V5` suffix, this is an artifact of our current migration to the new processor architecture and will be removed in future versions

#### ProcMode
```ts
/**
 * What mode a processor should run in
 */
export enum ProcMode {
  /**
   * Expect no properties from {@link ProcDataFullV5} when running the processor
   */
  NO_DATA = "NO_DATA",
  /**
   * Expect all properties from {@link ProcDataFullV5} when running the processor
   */
  FULL = "all data",
  /**
   * Running processor in import mode. Notes don't exist. Used for import pods like {@link MarkdownPod}
   * where notes don't exist in the engine prior to import.
   */
  IMPORT = "IMPORT",
}
```

#### ProcFlavor
```ts
export enum ProcFlavor {
  /**
   * No special processing
   */
  REGULAR = "REGULAR",
  /**
   * Apply publishing rules
   */
  PUBLISHING = "PUBLISHING",
  /**
   * Apply preview rules
   */
  PREVIEW = "PREVIEW",
}

```

### Compilation
Depending on what output you plan on converting Dendron into, different plugin combinations get invoked.

Dendron has a few different target outputs which are listed, under `DendronASTTypes`, [here](https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/markdown/types.ts).

For everything except HTML, Dendron will call the `compile` of the specific plugin.

For HTML, Dendron will transform `remark` nodes into `rehype`, which means that `compile` methods on `remark` plugins will never be called. If you are writing a custom plugin, use the transformer, `dendronPub` (https://github.com/dendronhq/dendron/blob/master/packages/engine-server/src/markdown/remark/dendronPub.ts), which runs after parsing but before compilation to transform the remark nodes into rehype nodes. 

You can see [[Writing a custom Dendron Unified Plugin|pkg.dendron-markdown.cook#writing-a-custom-dendron-unified-plugin]] for more details on this

## Engine-Less Processor Design

### Background

As we migrate to Engine V3, data passed into the unified processor cannot contain the engine for several reasons:
- The `engine.notes` property is deprecated and will be removed with engine v3
- The replacement for `engine.notes` is `getNote`, which necessarily must be an async function. Async functions are not allowed in unified parser and compiler methods.

Furthermore, having the full engine be a part of the 'data' that's passed into the unified processor causes performance problems. Whenever a unified processor gets frozen, any modifications to it cause a deep clone of the processor to be created - this may cause us to create multiple copies of all notes (50k+ for org private) in memory! This has caused problems in the past where hover preview would render very slowly and cause VS Code to slow down.

### Engine-Less Workflow

We need the engine today during the processing to help with wikilinks and note references. 
- In order to know where a wikilink points to, we need to find the wikilink's target note's information.
- In order to render a note reference, we need the NoteProps of the note reference target.

We can get this data without needing an engine be a part of the data payload by separating the parsing and compiling steps with the following workflow:

1. Processor Setup - Don't include `engine` as part of the `ProcDataFullOptsV5` data payload. (Somewhat similar to `procRemarkParseNoData` mode)
1. Parsing Step - unchanged
1. Data Gathering (new):
    1.  After the parsing step, visit the nodes in the AST returned from the previous step. Figure out all of the note dependencies we have from wikilinks, noteRefs, or anything else needed for rendering or compiling.
    1. Call `engine.getNote(s)` / `engine.findNotes()` to get the data. This call **can** (and should) be async b/c we're executing it in our own code, not in the unified code. _Optimization: only get `NotePropsMetadata` for wikilinks instead of all NoteProps fields_
    1. Now, add this `NoteProps[]` data to the processor data.
1. Transformers Step - unchanged
1. Compiling Step - we replace `engine.notes` calls and use our small note cache instead.