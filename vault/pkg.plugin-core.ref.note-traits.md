---
id: rg6i2lnec75cmhe1tz0ua4z
title: Note Traits
desc: ''
updated: 1648248856881
created: 1648248856881
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

### Registering a trait
- [[../packages/plugin-core/src/workspace.ts]]

```ts
setupTraits {
    files := 
    files.forEach file => {
        newNoteTrait = new UserDefinedTraitV1
        _traitRegistrar.registerTrait(newNoteTrait)
    }
}
```

- [[../packages/plugin-core/src/traits/UserDefinedTraitV1.ts]]
```ts
UserDefinedTraitV1
```

### Creating a note
- init: [[../packages/plugin-core/src/workspace.ts#^6fjseznl6au4]]

- command extends from `CreateNoteWithTraitCommand`  > [[../packages/plugin-core/src/commands/CreateNoteWithTraitCommand.ts#^ohbjrepdume6]]
```ts
gatherInputs { 
    if trait.OnWillCreate?.setNameModifier
    ...
}
```


## Reference
- Note Trait Interface: [[../packages/common-all/src/types/noteTrait.ts#^fgscb0hek3bg]]

## Cook

## Past Tasks
