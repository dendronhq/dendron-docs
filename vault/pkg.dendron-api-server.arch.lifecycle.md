---
id: UIeIuK7oqAtOx8xsgj71G
title: Lifecycle
desc: ''
updated: 1637974746298
created: 1637974575924
---

## Initialization

API Server is started. Starts express server listening in specified port

- file: src/index.ts

```ts
launch {
    appModule = require("./Server")
    ...
}
```

### Workspace Initilization
POST /api/workspace/initialize
    uri: WS_ROOT

- src/modules/workspace/index.ts
```ts
init {
    uri := req.body
    engine = DendronEngine.create(uri)
    engine.init
    return 
}
```

### Workspace Sync

This occurs when the engine is already running

- src/modules/workspace/index.ts
```ts
sync {
    ws = req.body
    engine = getWSEngine(ws)
    notes, schemas = engine
    return {notes, schemas}
}

```


## Destruction
