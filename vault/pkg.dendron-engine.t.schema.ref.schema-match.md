---
id: a379c9fe-6cb4-43a0-863e-5200fbce4181
title: Schema Match
desc: ""
updated: 1642442322598
created: 1621460732053
---

## Summary

## Lifecycle

- [[../packages/common-all/src/dnode.ts]]

```ts
matchPath {
    domain := notePath
    return if domain not in schemaDict
    domainSchema = schemaDict[domain]
    return @matchPathWithSchema(notePath, matched: "", schemaCandidates: [domainSchema], schemaModule: domainSchema)
}
```

```ts
matchPathWithSchema(notePath, matched, schemaCandidates, schemaModule) {

    nextNotePath := notePath, matched

    match = @matchNotePathWithSchemaAtLevel(
        notePath: nextNotePath,
        schemas: schemaCandidates,
    )
    return if !match
    // we got the full schema
    return if notePath = nextNotePath

    // iterate until we find the full schema
    ...
    nextSchemaCandidates := ...
    @matchPathWithSchema(
        notePath
    )


}

```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->

- src/dnode.ts
