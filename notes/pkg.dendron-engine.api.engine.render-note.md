---
id: ne815290s6kvahp8us5zb2u
title: Render Note
desc: ''
updated: 1666814723157
created: 1652286767361
---

Pass in a note and get resulting HTML

### Signature
```ts
renderNote: (opts: RenderNoteOpts) => Promise<RespV2<RenderNotePayload>>
```

## Code
- [[../packages/engine-server/src/enginev2.ts]]
```
_renderNote {
    procRehypeFull ...

}
```

## Flavor

### flavor: ProcFlavor.PREVIEW


### ProcFlavor.HOVER_PREVIEW
- check for in [[../packages/unified/src/utilsv5.ts]]
- uses [[../packages/unified/src/remark/dendronPreview.ts]]
    - remove frontmatter
    - makeImageUrlFullPath
    - modifyWikilinkValueToCommandUri
    - modifyTagValueToCommandUri

