---
id: u7ZLlCe2H9JFstV9CLjBD
title: Architecture
desc: ""
updated: 1639595517549
created: 1639533375004
---

## Summary

Lookup command lifecycle

## Lifecycle

### Initialization

1. Lookup factory created as part of dendron extension on startup

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

<!-- This is a simplified sequence diagram of a lookup command -->

<!-- Participants:
- lookupCommand: command being called
- lookupController: This is an instance of [[LookupController|../packages/plugin-core/src/components/lookup/LookupControllerV3.ts]]
- lookupProvider: This is an instance of [[LookupProvider|../packages/plugin-core/src/components/lookup/LookupProviderV3.ts]]
- historyService: This is a service that listens to events in the background that other commands can listen to events from

![[dendron://dendron.docs/pkg.plugin-core.t.lookup.arch.seq-diagram]] -->

## Related
- [[History Service|dendron://dendron.docs/pkg.dendron-engine.arch.history-service]]