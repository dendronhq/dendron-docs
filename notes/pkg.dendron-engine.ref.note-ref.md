---
id: 8ptvd8img1jeiak5ujo3jpy
title: Note Ref
desc: ''
updated: 1656458411810
created: 1656353365950
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

## Lifecycle

- [[../packages/engine-server/src/markdown/remark/noteRefsV2.ts]]
```ts
inlineTokenizer {
    match := 
    parseNoteRef(linkMatch)

}
```

### attachCompiler

```ts
attachCompiler { 
    refLinkV2 {
        convertNoteRef
    }
}

convertNoteRef {
    if refLvl >= MAX_REF_LVL {
        return error
    }
    ...
    noteRefs = []
    if link.from.fname.endsWith("*") {
        ...
    } else {
        noteRefs.push(link.from)
    }
    noteRefs.map {
        data = convertNoteRefHelper

        if prettyRefs {
            renderPretty(data)
        } else {
            return data
        }
    }
}

convertNoteRefHelper {
    noteRefProc = proc()
    extractFootnoteDefs
    start, end = prepareNoteRefIndices

    bodyAST.children = bodyAST.children.slice(start?.index, end?.index)
    bodyAST.children.push(...footnotes)
    procTree = noteRefProc.runSync(bodyAST)
    noteRefProc.stringify(procTree)

}
```


## Reference

## Cook

## Past Tasks
