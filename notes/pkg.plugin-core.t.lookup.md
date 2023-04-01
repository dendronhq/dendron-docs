---
id: BliBakrlm2ij4fY4Kq0AA
title: Lookup
desc: ""
updated: 1680359773322
created: 1630425853418
---

## Design

A lookup command is a vscode command that instantiates a [[lookup controller|#lookup-controller]] with custom [[modifiers|#lookup-modifiers]] and a [[lookup provider|#lookup-provider]].

Examples of lookup commands include:

- Note Lookup
- Rename Note
- Insert Note Link
- etc.

The basic design of lookup command is outlined in the following [[pseudocode|dendron://dendron.docs/ref.pseudocode]]

```ts
class FooLookupCommand extends BaseCommand {


    gatherInputs {
        lc = LookupController.create(...)
        lp = new FooLookupProvider()
        lc.prepareQuickPick(lp)
    }

    execute {
        ...
    }
}
```

## Concepts

### Lookup Command

Any command that makes use of the `lookup` widget.

### Lookup Controller

Used to create a lookup command. Has the following interface.

```ts
constructor(opts: {
    nodeType: DNodeType;
    buttons: DendronBtn[];
    fuzzThreshold?: number;
})
```

Different lookup commands with instantiate lookup with different modifiers.

### Lookup Modifiers

A lookup modifier modifiers how lookup behaves. More details on that [[here|dendron://dendron.dendron-site/dendron.topic.lookup.modifiers]].
Modifiers are passed into lookup using the `buttons` property in the constructor. Buttons can be toggled in the UI and when enabled, can affect lookup.

Button come in the following types

- LookupEffectType
  - performs some effect (eg. copy note)
- LookupNoteType
  - change the default hiearchy name
- LookupSelectionType
  - performs an action on current selection
- LookupSplitType
  - changes how a note is opened
- LookupFilterType
  - changes `onUpdateItems` behavior in the [[provider|#lookup-provider]]

### Lookup Provider

Provides results for lookup and controls the `updateItems` and `onAccept` methods when a user interacts with lookup. Different base classes will provide different implementations of the provider depending on functionality desired.

## Related

- [[Lookup|pkg.dendron-engine.t.lookup.internal]]
- [[Quickpick|dendron://dendron.docs/pkg.plugin-core.ref.quickpick]]

## Past Tasks

- [chore: lookup provider history service abstraction by hikchoi · Pull Request #1693 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1693)
- [enhance: allow wiki links to be looked up by nickolay-kondratyev · Pull Request #1473 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1473/files)
