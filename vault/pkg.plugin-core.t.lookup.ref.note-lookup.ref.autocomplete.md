---
id: tydo5xa8ha0dqruwuy90mxa
title: Autocomplete
desc: ""
updated: 1648071228606
created: 1648071228606
---

## Summary

How tab completion works

## Details

- when user has lookup open, we set a special context that activates [[../packages/plugin-core/src/commands/NoteLookupAutoCompleteCommand.ts]] when we hit the `tab` key

## Code

```ts
AutoCompletableRegistrar.onAutoComplete;
```

- [[../packages/plugin-core/src/commands/NoteLookupCommand.ts#^1h1dr08geo6c]]

```ts
onAutoComplete {
	provider.onUpdatePickerItems
}
```
