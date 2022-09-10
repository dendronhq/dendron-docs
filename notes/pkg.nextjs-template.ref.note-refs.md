---
id: abaoe1l2yvo1m1b0k7vr41t
title: Note Refs
desc: ''
updated: 1662756637107
created: 1662749273666
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

- [[dendron://dendron.docs/pkg.nextjs-template.ref.note-refs.inside-note-ref]]

### 
```ts
refsRoot
```

- packages/pods-core/src/builtin/NextjsExportPod.ts
```ts
plant {
    _renderRef

}

_renderRef(note)(

    MDUtilsV5.procRemarkFull note
    out = proc.stringify(node);
    proc2 = MDUtilsV5.procRehypeFull(
        insideNoteRef: true
    )
    await proc2.process(out);
)
```

```ts
_renderNote {
    proc = procRehypeFull(
        { flavor: ProcFlavor.PUBLISHING }
    )
}
```

- packages/unified/src/remark/noteRefsV2.ts
```ts
genRefAsIFrame {
    genRefAsIFrame
    // writes ref as file
    serializeRefId
}
```