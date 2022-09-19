---
id: bb1rnj9yk9xujmutu41z72g
title: Export Pod
desc: ''
updated: 1663555657902
created: 1663555552843
---

- [[../packages/pods-core/src/basev3.ts]]{class: ExportPod}
```ts
ExportPod {
    execute {
        validate(config)
        prepareNotesForExport
        plant
    }
}

prepareNotesForExport {
    if !config.includeStubs {
        notes = _.reject(notes, { stub: true });
    }
}
```