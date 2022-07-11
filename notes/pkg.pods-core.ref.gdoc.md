---
id: dnlystjbdhxyr7ciu27b34s
title: Gdoc
desc: ''
updated: 1657570316900
created: 1657570170633
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

The GDoc pod is responsible for import/export notes to/from google docs

## Export

- loc: [[../packages/pods-core/src/v2/pods/export/GoogleDocsExportPodV2.ts]]

### publish
```ts
getPayloadForNotes { 
    // uses html pod to generate html
    pod = new HTMLPublishPod
    pod.plant
}
```

## Lookup
- [[HTML|dendron://dendron.docs/pkg.pods-core.ref.html]]