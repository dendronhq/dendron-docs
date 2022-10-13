---
id: 1y4xkg1b3zb8vv6xk46qjuq
title: Note Lookup Provider
desc: ""
updated: 1654362782519
created: 1654361709860
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

- loc: [[../packages/plugin-core/src/components/lookup/NoteLookupProvider.ts]]

## setup
```ts
provide {
    onUpdateDebounced = debounce(onUpdatePickerItems)
    quickpick.onDidChangeValue onUpdateDebounced
    quickpick.onDidAccept {
        onUpdateDebounced.flush
        ...
        // see ^i1x08f7myl2v
        onDidAccept(quickpick, cancellationToken)
    }
}
```

## onUpdatePickerItems

- loc: [[../packages/plugin-core/src/components/lookup/LookupProviderV3.ts#^hlj1vvw48s2v]]

```ts
    // modify for just activated behavior
    if picker.justActivated && !picker.nonInteractive  {
        pickerValue = getQsForCurrentLevel
    }
    // normalize query
    transformQueryString
    queryOrig := slashToDot(picker.value)
    ...

    querystring := pickerValue
    ...
    items = [...picker.items]
    updatedItems = fetchPickerResults(querystring)
    ...

    shouldAddCreateNew = @allowNewNote && !queryOrig.endsWith(".") && !picker.canSelectMany && vaultsHaveSpaceForExactMatch
    if (shouldAddCreateNew) {
        entryCreateNew = createNoActiveItem
        if shouldBubbleUpCreateNew {
            ...
        } else {
            ...
        }

    }

    ...
    picker.items = updatedItems

}

```

## onDidAccept
- ^i1x08f7myl2v
- [[../packages/plugin-core/src/components/lookup/NoteLookupProvider.ts]]
```ts
// handle
selectedItems := getSelection(picker)

debug(selectedItems)

// implies user pressed <enter>, need to get selected item based on raw text value
if selectedItems = "" {
	selectedItems = NotePickerUtils.fetchPickerResultsNoInput
}

// see if we need to check for vault
if hasNextPicker(picker) {
	picker.vault = picker.nextPicker
}

// run all hooks
onAcceptHookResp = this._onAcceptHooks.map { hooks
	hook(picker, selectedItems)
}
```

## 
[[../packages/plugin-core/src/components/lookup/NotePickerUtils.ts]]

```ts
fetchPickerResultsNoInput {
    NoteLookupUtils.lookup(picker.value)
}
```