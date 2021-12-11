---
id: LSeIOMivKwhjE2Kr4NTYi
title: Reference
desc: ''
updated: 1639174856043
created: 1639174614377
---

## Summary 

How to get references to symbols

## Lifecycle


- src/utils/md.ts
```ts
getReferenceAtPosition(document, position) { 
    ...
    rangeWithLink := getWordRangeAtPosition(position)
    if (!rangeWithLink) { 
        ...
    }

    refText := rangeWithLink
    clean = parseRef(refText)
    ...
    return clean
}

parseRef { 
    parseNoteRef { 

    }
}
```

- engine-server/src/markdown/remark/utils.ts
```ts
parseNoteRef(ref) { 
    parseNoteRefRaw(ref)

}

parseNoteRefRaw(ref) { 
    vaultName, link := parseDendronURI(ref)

}
```