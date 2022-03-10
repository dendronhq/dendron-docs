---
id: 446723ba-c310-4302-a651-df14ce6e002b
title: Lifecycle
desc: ""
updated: 1645903391880
created: 1620614023632
---

## Initialization

```mermaid
sequenceDiagram
    participant client
    participant engine
    participant store
    participant fileSystem
    participant noteParser
    client->>engine: initialize
    engine->>store: initialize
    store->>fileSystem: fetchAllnotes
    fileSystem->>store: sendNotes;
    store->>noteParser: parseAllNotes
    noteParser->>store: parsedNotes
    store->>engine: return status
    engine->>client: return status
```

- [Video walkthrough](https://youtu.be/nWJCP1DR5Io)
- Entry Point: [[../packages/engine-server/src/enginev2.ts]]

See [[Engine|dendron://dendron.docs/pkg.dendron-engine.t.engine.arch]] for additional details

### Pseudocode

#### Query - Engine

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

#### Query - Store

- loc: engine-server/store.ts
  - FileStore.query
- desc: gets all notes from the underlying store
  - store is swappable. currently, we only support `FileStore`

```ts
if (isQueryAll(queryString)) {
    noteProps = getNoteAll() {
        allFiles = getAllFiles({
            ...
            include: ["*.md"]
        })
        return files2Notes(allfiles) {
            fp = new FileParser({ errorOnEmpty: false })
            data = fp.parseFiles(allFiles);
            return data.map(n => n.toRawProps());
        }
    }
    data = new NodeBuilder().buildNoteFromProps(noteProps);
}
```
