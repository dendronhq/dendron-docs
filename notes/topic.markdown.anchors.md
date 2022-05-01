---
id: 92QhQb1YoHCuN4zxvH8tG
title: Anchors
desc: ""
updated: 1639172071625
created: 1639171214374
---

## Summary

How anchors are parsed

There are two types of anchors:

- headers

```md
# 1234

Hello world
```

- block anchors

```md
hello world ^1234
```

## Startup

At startup, Dendron finds all anchors for a ntoe

- src/drivers/file/storev2.ts

```ts
_initNotes {
    ...
    notes.forEach n => {
        anchors = findAnchors(n)
        ...
        n.anchors = anchors
    }
    ...

}
```

- src/markdown/remark/utils.ts

```ts
findAnchors(note) {
    noteContents := note
    anchors = RemarkUtils.findAnchors(noteContents)
    return anchors.map anchor => {
        anchorNode2anchor(anchor)
    }
}

RemarkUtils.findAnchors(contents) {
    resp = procRehypeParse.parse(content)
    return [
        selectAll(HEADING, resp),
        selectAll(BLOCK_ANCHOR, resp)
    ]
}

anchorNode2anchor(node) {
    if node.type = HEADING {
        text, value, depth := node
        return {
            type: HEADING,
            text, value, depth
        }
    } else if node.type = BLOCK_ANCHOR {
        ...
    }
}
```

## Remark
