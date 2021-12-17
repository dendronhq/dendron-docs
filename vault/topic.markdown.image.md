---
id: ig9rY6NyCRsTE3pv9Hz7j
title: Image
desc: ''
updated: 1638031227527
created: 1637976674097
---

#stage.germ


## Preview

When generating a url for preview within the IDE, we generate a proxy url to our API server first (this is because of VSCode webview sandbox that prevents us from loading non-whitelisted asset urls)

### Client Side
- src/markdown/remark/dendronPreview.ts
```ts
visit(tree, {
    if image {
        handleImage
    }
})

handleImage(node) {
    fpath :=
    url := "/api/assets"
    node.url = url
}
```

### Server Side
- src/routes/assets.ts
#todo

```ts
query :=
data = AssetsController.get(query) {
    if !isPathInWorkspace(query.fpath) return
    return query.fpath
}
return sendFile(data)
```
