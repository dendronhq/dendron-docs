---
id: 74UyCLyLvCxFTQNgGgSRW
title: Decorations
desc: ""
updated: 1665763890831
created: 1630915066783
---

Dendron uses a design split between the [[engine|pkg.dendron-engine]] and
[[plugin|pkg.plugin-core]] to add decorations for the editor. The engine is
responsible for the heavier work of computing the decorations to be displayed,
while the plugin then converts the engine output to be displayed by VSCode.

This part of the documentation describes the plugin side, see [[decorators in engine|pkg.dendron-engine.ref.decorations]]
for the engine side.

## Overview

![[dendron://dendron.docs/pkg.plugin-core.ref.decorations.diagram]]

This shows a brief example of how VSCode, plugin, and engine interact with each
other to display the decorations. A few points of importance:

- The **plugin ignores the engine response if the user did something like typing that made the decorations stale**. 
  - This is because **applying stale decorations can cause them to appear in the wrong places inside the document**, but not applying decorations at least retains the old decorations at the correct places. 
  - This is especially an issue if the user adds new lines in the middle of a note.
- Engine sends plain objects, which the plugin converts to VSCode objects. This is necessary because the engine API can't pass VSCode objects, and we want to keep the engine more independent from the plugin.
- The plugin converts the the plain objects into the objects VSCode expects and applies them.

## Entry

- [[../packages/plugin-core/src/features/windowDecorations.ts]]

## LifeCycle
- called by: [[Window Watcher|dendron://dendron.docs/pkg.plugin-core.ref.window-watcher]]

```ts packages/plugin-core/src/features/windowDecorations.ts
updateDecorations(editor) {
  ctx = "updateDecorations"

  // try to get the note, if no note, return
  note = getNoteFromDocument else return

  inputRanges = mergeOverlappingRanges(editor.visibleRanges)
  resp = engine.getDecorations(inputRanges)

  ...
  log {"error":null,"decorationsLength":110,"diagnosticsLength":0}
  activeDecorations = resp.data | mapDecoration
  editor.setDecorations activeDecorations

  allWarnings = data?.diagnostics
  delayedFrontmatterWarning allWarnings
}

// applies colors
mapDecoration(decorator) {
    switch decorator.type
        case type:
            handle(type)
}
```

## Reference

- Decorator Types
  - see [[../packages/common-all/src/types/editor.ts]]
  - timestamp
  - blockAnchor
  - wikiLink
  - brokenWikilink
  - alias (wikilink alias)
  - taskNote

## Cook

### Updating an existing decoration

First, look at `windowDecorations.ts` and locate the `map*` function for the
decoration you are interested in. If there is no function for that decoration,
then check `mapBasicDecoration`. If you can make the change you are interested
in by changing the VSCode decoration object that is generated, make that change
and you are done. If not, check [[Updating an existing decoration|dendron://dendron.docs/pkg.dendron-engine.ref.decorations#updating-an-existing-decoration]]
to find how to add more information to the decoration object.

### Adding a new decoration

First, go the [[decorators in engine|pkg.dendron-engine.ref.decorations]] to
make the engine generate your decoration. Once you are done, go to the
`mapDecoration` function in `windowDecorations.ts`, add a new case for your new
decoration, and write a `map*` function to map the plain decoration object to a
VSCode decoration object. Finally, remember to add tests for your new decoration.

### Testing decorations

To test your decoration, edit the file `WindowDecorations.test.ts`. The test
will roughly look like:

```ts
const blockAnchorDecorations = allDecorations!.get(DECORATION_TYPE.blockAnchor);
expect(blockAnchorDecorations.length).toEqual(1);
expect(
  isTextDecorated("^anchor-1", blockAnchorDecorations!, document)
).toBeTruthy();
```

## Past Tasks

- [fix: hover & goto note should respect enableUser/HashTags by SeriousBug · Pull Request #1620 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1620)
- [fix: decorator lag problems by SeriousBug · Pull Request #1822 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1822)
