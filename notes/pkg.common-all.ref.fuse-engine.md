---
id: 4cjmu4wm5vsi2a9fwlk08g8
title: Fuse Engine
desc: ""
updated: 1658016680382
created: 1654299188693
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

- loc: [[../packages/common-all/src/fuse.ts]]

## Lifecycle

### init
```ts
constructor { 
    createFuse { 

    }

}
```

### queryNote

- queries `fuse`

```ts
if qs = "" {
		items = @index.search "root"
} else if qs = "*" {
		items = @index._docs
} else {
		formattedQS = formatQueryForFuse(qs)
		results = @notesIndex.search formattedQS
		postQueryFilter(results)
		results = sortResults
		items := results
}
return items
```

```ts
sortResults(results, originalQS) {
    groupedByScore = groupBy(results)
    ...


    sorted := groupedByScore

    if originalQS {
        sorted = moveOriginalQSFirst(sorted, originalQS)
    }
    return sorted
}
```

## Dependencies

- [fuse.js](https://github.com/krisk/Fuse): "^6.4.6" as of 2022-06-03

## Related

- [[Tune Search Results|dendron://dendron.docs/pkg.dendron-engine.dev.cook#tune-search-results]]
