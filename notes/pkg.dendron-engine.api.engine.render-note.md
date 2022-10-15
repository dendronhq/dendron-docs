---
id: ne815290s6kvahp8us5zb2u
title: Render Note
desc: ''
updated: 1665870383634
created: 1652286767361
---

Pass in a note and get resulting HTML

### Signature
```ts
renderNote: (opts: RenderNoteOpts) => Promise<RespV2<RenderNotePayload>>
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
