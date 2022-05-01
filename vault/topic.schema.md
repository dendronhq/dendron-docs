---
id: cq5tapqje1yfpfwxb9kx5rd
title: Schema
desc: ''
updated: 1648571858089
created: 1648571858089
---

## Summary

![[dendron://dendron.dendron-site/dendron.topic.schema#summary,1:#*]]

## Algorithm

- [[../packages/common-all/src/dnode.ts]]
```ts
matchPath(notePath) { 
    domainName := notePath
    match := domainName
    return if !match

    domainSchema := match
    // match on domain
    return {...} if domainName = notePath 

    matchPathWithSchema
}
```

```ts
matchPathWithSchema(matched) { 
    nextNotePath := getChildOfPath(matched)
    match := matchNotePathWithSchemaAtLevel
    return if !match

    return {...} if notePath = nextNotePath
    ...
    matchPathWithSchema(...)

}
```

```ts
matchNotePathWithSchemaAtLevel(notePath) { 
    notePathClean := 
    find(schemas) { 
        pattern := getPatternRecursive

    }
}
```

```ts
getPatternRecursive { 
}
```

## Lookup
- [[Schemas|dendron://dendron.docs/pkg.common-all.arch.schemas]]