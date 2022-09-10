---
id: 3lfbrrw2llp4f2nc88pwwqi
title: Old
desc: ''
updated: 1662756900732
created: 1662750404368
---

### 

- [[../packages/unified/src/remark/dendronPub.ts]]

```ts
convertNoteRefASTV2 {

}
```


- [[../packages/unified/src/remark/noteRefsV2.ts]]
```ts
convertNoteRefASTV2 {

    noteRefs = gatherNoteRefs

    ...

    fname := link
    note := fname
    ...
    processRef(note)
}


processRef(note) {
    if shouldApplyPublishRules && !canPublish { return }
    body = note.body

    convertNoteRefHelperAST(body)
}

convertNoteRefHelperAST {

    noteRefProc = new proc
    bodyAST = noteRefProc.parse(note.body)

    footnotes = extractFootnoteDefs(bodyAst)
    prepareNoteRefIndices(bodyAST)
    data = noteRefProc.runSync

}
```