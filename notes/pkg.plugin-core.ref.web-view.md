---
id: XZWT8WQSrNbbFdTZcRZir
title: Web View
desc: ""
updated: 1650560141509
created: 1640661462882
---

## Reference

### getLocalResourceRoots

- [[../packages/plugin-core/src/views/utils.ts]]

```ts
getLocalResourceRoots {
	getAssetUri
	getViewRootUri
}
```

### getViewRootUri

- in development, we look for `dendron-plugin-views` build
- in production, this is the same as [[getAssetUri|dendron://dendron.docs/pkg.plugin-core.ref.web-view#getasseturi]]

### getAssetUri

```ts
getAssetUri {
	context.extensionUri, dist
}
```

## Past Tasks

- [fix(views): encapsulate webviews by jonathanyeung · Pull Request #1869 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1869)
