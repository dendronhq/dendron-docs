---
id: u7ZLlCe2H9JFstV9CLjBD
title: Architecture
desc: ""
updated: 1680366832257
created: 1639533375004
---

## Summary

Lookup command lifecycle

## Lifecycle

### Lookup
- [[pkg.dendron-engine.t.lookup.internal]]

- src/web/commands/lookup/NoteLookupProvider.ts:fetchPickerResults
    - @engine.queryNotesMeta
        - src/enginev2.ts:queryNotesMeta
            - src/engineClient.ts: queryNotesMeta
                - SQLiteMetadataStore.search if config.workspace.metadataStore === "sqlite"  ^wegk01mpsdcv
                    - src/drivers/PrismaSQLiteMetadataStore.ts:search
- src/engineClient.ts:queryNotes
    - ConfigService.readConfig
    - if sqlite:
        - SQLiteMetadataStore.search
        - noteProps.filter { vault }
        - return

### Initialization
- src/workspace.ts:DendronExtension { new LookupControllerV3Factory }
    - src/components/lookup/LookupControllerV3Factory.ts { new LookupControllerV3 }
        - ...
        - src/components/lookup/LookupControllerV3:show
            - @prepareQuickPick
                - PickerUtilsV2.createDendronQuickPick -> DendronQuickPickerV2
                - ...
            - @showQuickPick
                - quickpick.show
                - provider.onUpdatePickerItems
                    - src/components/lookup/NoteLookupProvider.ts:onUpdatePickerItems
                        - ...
                        - pickerValue = NoteLookupUtils.getQsForCurrentLevel(pickerValue)
                        - queryOrig = NoteLookupUtils.slashToDot(picker.value)
                        - return NotePickerUtils.fetchRootQuickPickResults if queryString == ""

                        - items: NoteQuickInputV2[] = [...picker.items]
                        - updatedItems = PickerUtilsV2.filterDefaultItems(items)
                        - updatedItems = await NotePickerUtils.fetchPickerResults
                        - ... schema logic
                        - ... filter middleware
                        - ... other logic
                        - picker.items = updatedItems
                - provider.provide
                    - quickpick.onDidChangeValue(onUpdateDebounced)
                    - quickpick.onDidAccept
                        - quickpick.selectedItems[0].fname = quickpick.value
                        - @onDidAccept
                            - selectedItems = NotePickerUtils.getSelection
                            - ...
                            - this._onAcceptHooks.map(...)


1. Lookup factory created as part of dendron extension on startup

#### Code Snippets
- [[../packages/plugin-core/src/workspace.ts]]
```ts
class DendronExtension { 
  constructor { 
    ...
    @lookupControllerFactory = new LookupControllerV3Factory
  }
}
```

- [[../packages/plugin-core/src/components/lookup/LookupControllerV3Factory.ts]]
- class: LookupControllerV3Factory
```ts
create { 
  ...
  return new LookupControllerV3
}
```

See the [[Sequence Diagram|dendron://dendron.docs/pkg.plugin-core.t.lookup.arch.seq-diagram]].

<!-- This is a simplified sequence diagram of a lookup command -->

<!-- Participants:
- lookupCommand: command being called
- lookupController: This is an instance of [[LookupController|../packages/plugin-core/src/components/lookup/LookupControllerV3.ts]]
- lookupProvider: This is an instance of [[LookupProvider|../packages/plugin-core/src/components/lookup/LookupProviderV3.ts]]
- historyService: This is a service that listens to events in the background that other commands can listen to events from

![[dendron://dendron.docs/pkg.plugin-core.t.lookup.arch.seq-diagram]] -->


## Components

The Lookup Control uses a pseudo [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) pattern. 

1. `LookupControllerV3.ts` is the 'model' / controller. 
1. A view model in `LookupViewModel.ts` represents the data state for the lookup options.
1. 2 views subscribe to the view model
    1. A QuickPickView, which represents the UI state of the buttons in the quick pick.
    1. A LookupPanelView, which represents the view for the LookupPanel webview on the side.

So essentially:
```mermaid
graph LR
    A(Lookup Controller V3) <-->|Responds to State Changes| B(Lookup View Model)
    B<-->|Two Way Binding| C(Quick Pick View)
    B<-->|Two Way Binding| D(Lookup Panel View)
```
_Note: The arrows in the diagram are supposed to be bi-directional_

The views in this case are not true views as typically found in MVVM - rather, they are proxies for the views - For the QuickPickView, it can be thought of as a proxy to the vscode `QuickPick` control component, whereas for the LookupPanelView, it can be thought of as a proxy to the React based webview component.

## Related
- [[History Service|dendron://dendron.docs/pkg.dendron-engine.arch.history-service]]

## Questions

### How to switch to sqlite mode?

metadataStore = "sqlite"
see [[pkg.plugin-core.t.lookup.arch#^wegk01mpsdcv]]