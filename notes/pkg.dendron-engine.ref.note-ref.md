---
id: 8ptvd8img1jeiak5ujo3jpy
title: Note Ref
desc: ''
updated: 1657251709233
created: 1656353365950
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

## Lifecycle

### Parse
- [[../packages/engine-server/src/markdown/remark/noteRefsV2.ts]]
```ts
inlineTokenizer {
    match := 
    parseNoteRef(linkMatch)

}
```

### Render
- loc: [[../packages/engine-server/src/markdown/remark/dendronPub.ts]]

```ts
case node.type = REF_LINK {
    convertNoteRefASTV2 
}

convertNoteRefASTV2 {
    if link.endsWith("*") {
        ...
    } else {
        ...
    }

    noteRefs.map {
        processRef(ref, note, fname)
    }
}

processRef {
    data = convertNoteRefHelperAST
    if prettyRef {

        id = genRefId
        addRefToProc(id, data)
        return renderPrettyAST(id)
    } else {
        return paragraph(data)
    }

}

convertNoteRefHelperAST(link, note) {
    ...
    anchorStart, anchorEnd, anchorStartOffset := link
    bodyAST = noteRefProc.parse(note.body) as DendronASTNode;
    start, end = prepareNoteRefIndices(anchorStart, anchorEnd)

    ...
      bodyAST.children.slice(
        (start ? start.index : 0) + anchorStartOffset,
        end ? end.index + 1 : undefined
      )
}
```

#### Sample JSON
```json
{
  type: "root",
  children: [
    {
      type: "paragraph",
      children: [
        {
          type: "wikiLink",
          value: "bar",
          data: {
            alias: "Bar",
            permalink: "bar.html",
            exists: true,
            hName: "a",
            hProperties: {
              className: undefined,
              style: undefined,
              href: "bar.html",
            },
            hChildren: [
              {
                type: "text",
                value: "Bar",
              },
            ],
          },
          position: {
            start: {
              line: 1,
              column: 1,
              offset: 0,
            },
            end: {
              line: 1,
              column: 8,
              offset: 7,
            },
            indent: [
            ],
          },
        },
      ],
      position: {
        start: {
          line: 1,
          column: 1,
          offset: 0,
        },
        end: {
          line: 1,
          column: 8,
          offset: 7,
        },
        indent: [
        ],
      },
    },
  ],
}
```


## Reference

## Cook

## Past Tasks
