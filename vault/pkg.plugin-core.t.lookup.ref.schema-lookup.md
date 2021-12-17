---
id: GBbHSg2DsIXSeyO6EDRuY
title: Schema Lookup
desc: ''
updated: 1639700098917
created: 1639700098917
---


## Lifecycle

### Initialization
- See [[Initialization|dendron://dendron.docs/pkg.plugin-core.t.lookup.arch#initialization]]

The main difference between this code and `NoteLookupProvider` is that they subscribe with a different `id` to the `HistoryService`

- src/commands/SchemaLookupCommand.ts
```ts
SchemaLookupCommand { 

    enrichInputs(controller) { 

        const p = Promise( resolve => { 
            HistoryService.subscribe("lookupProvider", {id: "schemaLookup"}, event => { 
                switch event.action
                case done { 
                    resolve(event.data)
                }
            });

        })

        controller.showQuickPick
        return p;
    }

}

```
