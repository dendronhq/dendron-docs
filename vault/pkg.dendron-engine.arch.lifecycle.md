---
id: 446723ba-c310-4302-a651-df14ce6e002b
title: Lifecycle
desc: ''
updated: 1637874890995
created: 1620614023632
---

## Initialization

- loc: engine-server/engine.ts
- desc: initial query to index all notes 
```ts
init {
  query("**/*", "schema", {
      ...
  });

  query("**/*", "note", {
      ...
  });
}

```
### Query - Engine

- loc: engine-server/engine.ts
- desc: engine will query the store

```ts
async query(scope: Scope, queryString: string, opts?: QueryOpts) {
    ...
  if (queryString = '**/*') {
    data = store.query(scope, '**/*', opts);
    refreshNodes(data.data);
  }
}
```



## Reference

### Dendron Port File
When the engine is first initialized, it starts at a random port. This port is written to `{workspace}/.dendron.port.cli`
