---
id: y6np7cmixseqsr42f4rtlvc
title: Dendron Pub
desc: ''
updated: 1657558319232
created: 1656354087062
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

Responsible for multiple transformations of Dendron's Markdown AST. Examples:
- generating [[note references|dendron.topic.note-reference]]
- handling private links when publishing
- [[insertTitle|dendron://dendron.docs/pkg.dendron-engine.ref.dendron-pub#inserttitle]] 

## Lifecycle

- [[../packages/engine-server/src/markdown/remark/dendronPub.ts]]

### insertTitle
- [[../packages/engine-server/src/markdown/remark/dendronPub.ts#^53ueid06urse]]

This turns the `title` property in the frontmatter into a `h1` header

```ts
_.findIndex(root.children, ent.type != yaml)
root.children.splice(
    HEADING, note.title
)
```
