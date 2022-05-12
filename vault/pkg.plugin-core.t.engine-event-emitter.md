---
id: u46o4k5g2gcu9b3hqsbkq7z
title: Engine Event Emitter
desc: 'Fires events whenever engine makes updates to notes'
updated: 1652305754276
created: 1652305477839
---


## EngineApiService

### createEngine
- uri: [[../packages/plugin-core/src/services/EngineAPIService.ts]]

```ts
createEngine
    api :=
    newClientBase :=
    new EngineAPIService(api, newClientBase)
```

### constructor

```ts
@_engineEventEmitter = engineEvents;
```

## DendronEngineClient
- uri: [[../packages/engine-server/src/engineClient.ts]]

```ts
_onNoteChangedEmitter = new EventEmitter
```


Examples of emitter working

```ts
bulkAddNotes {
    resp = api.engineBulkAdd
    _onNoteChangedEmitter.fire(resp.data)
}

deleteNote {
    api.engineDelete
    ...
    _onNoteChangedEmitter.fire
}

renameNote {
}

```