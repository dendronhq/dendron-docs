---
id: t3lh7wo4khhz8n6gt13rg82
title: Engine API Service
desc: "Engine proxy"
updated: 1662742909263
created: 1654298992951
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

- location: [[../packages/plugin-core/src/services/EngineAPIService.ts]]

## Details

- proxies most calls to [[Dendron Engine Client|dendron://dendron.docs/pkg.dendron-engine.ref.dendron-engine-client]]
- the reason its a separate class is due to `this._engineEventEmitter` which publishes events that other parts of the plugin consumes


## Lifecycle

- [[../packages/plugin-core/src/workspace/workspaceActivator.ts]]
```ts
updateEngineAPI {

    svc = EngineAPIService.createEngine
    ext.setEngine svc
}
```

## Next
#file template convention
- [[dendron-docs/templates/plugin-test.ts]]