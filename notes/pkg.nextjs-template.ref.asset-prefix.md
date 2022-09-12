---
id: 0nqtkapiv7hje6m30u6sknb
title: Asset Prefix
desc: ''
updated: 1662953894928
created: 1662591527531
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

![[dendron://dendron.dendron-site/dendron.topic.publish.config.assetsPrefix#description]]

`assetsPrefix` is used in the following places

## NextjsTemplate
- [[../packages/pods-core/src/builtin/NextjsExportPod.ts]]

```ts
_writeEnvFile {
    if siteConfig.assetsPrefix {
        assetsPrefix >> .env.production
    }
}
```

## SiteTemplate

- [[../packages/nextjs-template/scripts/sitemap.ts]]
```
siteUrl := assetsPrefix
```

## DendronPub

- [[../packages/unified/src/remark/dendronPub.ts]]
```ts
ImageNodeHandler {
    handle {
        imageNode.url := assetsPrefix
    }

}
```