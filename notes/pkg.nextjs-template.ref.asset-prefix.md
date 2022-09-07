---
id: 0nqtkapiv7hje6m30u6sknb
title: Asset Prefix
desc: ''
updated: 1662591707616
created: 1662591527531
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

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