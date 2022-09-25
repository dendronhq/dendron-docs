---
id: 0nqtkapiv7hje6m30u6sknb
title: Asset Prefix
desc: ''
updated: 1664124150416
created: 1662591527531
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

![[dendron://dendron.dendron-site/dendron.topic.publish.config.assetsPrefix#description]]


## Setting asset prefix
- [[../packages/pods-core/src/builtin/NextjsExportPod.ts]]

```ts
_writeEnvFile {
    if siteConfig.assetsPrefix {
        assetsPrefix >> .env.production
    }
}
```

## Generating sitemap with assetprefix

- [[../packages/nextjs-template/scripts/sitemap.ts]]
```
siteUrl := assetsPrefix
```

## Rewriting image nodes with assetprefix

- [[../packages/unified/src/remark/dendronPub.ts]]
```ts
ImageNodeHandler {
    handle {
        imageNode.url := assetsPrefix
    }

}
```