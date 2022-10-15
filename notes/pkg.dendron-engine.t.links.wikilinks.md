---
id: xgk275c35mv2hegl2ntbe8g
title: Wikilinks
desc: ''
updated: 1665872269749
created: 1650072088611
---


## Transform
- [[../packages/unified/src/remark/dendronPub.ts]]

```ts
DendronASTDest.MD_DENDRON { return }

...

alias = data.alias ?? title ?? value
node.data = {
    ...
} as RehypeLink
```

## Compile
- [[../packages/unified/src/remark/wikiLinks.ts]]
```ts 
compile {

    data := node
    alias = data.alias

    if !data.alias && enableNoteTitleForLink
        title := 
        alias = title

    if dest === DendronASTDest.MD_DENDRON
        return 
        
    // publishing
    if (useId && dest === DendronASTDest.HTML) {...}

    if DendronASTDest.MD_REGULAR { return regular link }

    if DendronASTDest.HTML { ... }

}
```