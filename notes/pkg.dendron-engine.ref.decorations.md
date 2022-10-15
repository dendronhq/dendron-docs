---
id: tYYZ6hpBMJcPv9qcwqZAh
title: Decorations
desc: ""
updated: 1665764017224
created: 1638522039855
---

Dendron uses a design split between the [[engine|pkg.dendron-engine]] and
[[plugin|pkg.plugin-core]] to add decorations for the editor. The engine is
responsible for the heavier work of computing the decorations to be displayed,
while the plugin then converts the engine output to be displayed by VSCode.

This part of the documentation describes the engine side, see [[decorations in plugin|dendron://dendron.docs/pkg.plugin-core.ref.decorations]]
for the plugin side.

## Overview

The main part of the decorations starts in [[../packages/unified/src/decorations/decorations.ts]]{func: runDecorator}
A few points of interest here:

- All decoration code is organized under this folder.
- The `getDecorations` function gets both the note id and ranges to be
  decorated, but also the actual text for those ranges. This is needed because
  the note body known by the engine may be stale, which would cause the engine
  the generate stale decorations. It's better to get the text from the plugin
  which has access to the most up-to-date version of the note text.
  - See [[dendron://dendron.docs/pkg.dendron-engine.lifecycle.get-decorations]] for details


## Note Reference

```ts src/decorations/decorations.ts
runDecorator {
  case DendronASTTypes.REF_LINK_V2: {
    decorateReference
  }
}
```

```ts src/decorations/references.ts
decorateReference {
  linkedNoteType
}
```


## Cook

### Updating an existing decoration

First, look at the `runDecorator` function in `decorations.ts` to find the
decoration you are looking for, then navigate to the function for that
decoration.

### Adding a new decoration

First, add a new case in `runDecorator` in `decorations.ts` if the existing
cases don't cover what you are trying to decorate. There can only be one
decorator per node type, but each decorator can generate many decoration objects
so you can always extend an existing one.

Next, in `common-all` check `DECORATION_TYPES` to find all existing decoration
types. You'll want to add a new entry under here.

Then, write your decoration code, either in a new function you added or inside
an existing function. Check existing functions for examples of how you can write
a decorator.

Finally, go back the plugin to [[add your new decoration|dendron://dendron.docs/pkg.plugin-core.ref.decorations#adding-a-new-decoration]] there.
Without that step, Dendron can't display your decoration.
