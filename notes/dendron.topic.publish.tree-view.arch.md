---
id: uw1fdy0s01zc9giqlz0zgqv
title: Arch
desc: ''
updated: 1653348091688
created: 1653347658987
---

## Files
- [[../packages/nextjs-template/components/DendronTreeMenu.tsx]]


## Lifecycle

### Load

```ts
tree = TreeUtils.generateTreeData(payload.notes, payload.domains);
```

- [[../packages/common-all/src/util/treeUtil.ts]]
```ts
generateTreeData {
    roots

}
```


```ts
DendronApp {
    useEffect {
        fetchTreeMenu {
            fetch "tree.json"
        }
        ideSlice.actions.setTree
    }

}
```

```ts
DendronTreeMenu {
    ide = state.ide
    tree = ide.tree
}
```