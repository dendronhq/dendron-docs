---
id: rpmeg95xza7lmavw4q2gftq
title: Sidebar
desc: ''
updated: 1656191487500
created: 1656191087046
schema: '[[dendron://dendron.docs/ref.module-schema]]'
published: false
---

## Summary

## Lifecycle

### TreeMenu
- [[../packages/nextjs-template/components/DendronTreeMenu.tsx]]
```ts
DendronTreeMenu {

    ide :=
    tree = ide.tree

    roots = treeMenuNode2DataNode
    return MenuView(roots)
}
```
#### MenuView

```tsx
Menu {
    roots.map createMenu
}

createMenu {
    if menu.children  {
        return SubMenu {
            createMenu
        }
    } else {
        return Menu
    }
}
```

### Generate Tree Data
- [[../packages/pods-core/src/builtin/NextjsExportPod.ts]]
    - see [[Nextjs|dendron://dendron.docs/pkg.pods-core.ref.nextjs]]
```ts
plant {
    ...
    tree = TreeUtils.generateTreeData(notes, domains)
    ...
    write(tree, 'tree.json')
}
```

## Reference

## Cook

## Past Tasks
