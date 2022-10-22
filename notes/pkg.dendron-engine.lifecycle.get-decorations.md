---
id: 38ar40gdgri390hkd4ckimp
title: Get Decorations
desc: ''
updated: 1666389583474
created: 1663517808252
---

### getDecoration
[[../packages/engine-server/src/enginev2.ts]]{key: getDecorations}

```ts
getDecorations(id) {
    note = this.notes[id]
    runAllDecorators(note)
}
```

- [[../packages/unified/src/decorations/decorations.ts]]{key: runAllDecorators}

```ts
runAllDecorators(note, engine) {
    proc = MDUtilsV5.procRemarkParse
    tree = proc.parse
    tree.visit(nodeIn) {
        runDecorator
    }

}

runDecorator(node, note, noteText) {
    switch(node.type) {
        ...
        decorateWikilink
    }
}
```


### wikiLink
- [[../packages/unified/src/decorations/wikilinks.ts]]{key: decorateWikilink}
```ts
decorateWikilink {
    fname, vaultName  := wikiLink
    linkedNoteType
}

linkedNoteType(note, fnamem vaultName) {
    vault := 
    if vaultName && !vault
        return DECORATION_TYPES.brokenWikilink

    matchingNotes = engine.findNotes
    if !matchingNotes
        return DECORATION_TYPES.brokenWikilink

    matchingNotes = note

}
```

## ref

### task note

- [[../packages/unified/src/decorations/taskNotes.ts]]
```ts
  const decoration: DecorationTaskNote = {
    type: DECORATION_TYPES.taskNote,
    range,
    beforeText: status ? `${status} ` : undefined,
    afterText:
      decorationString.length > 0
        ? ` ${decorationString.join(" ")}`
        : undefined,
  };
```