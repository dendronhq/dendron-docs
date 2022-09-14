---
id: jx21vp5azgwuvv8l2vzgkip
title: Bundle Files with Code Plugin
desc: ''
updated: 1663172668198
created: 1663171614106
---

## Adding a regular file
1. Add a file to `packages/plugin-core/assets` 
1. To access the file in the code, use the following snippet:
```ts
    const assetUri = VSCodeUtils.getAssetUri(context);
    const uri = VSCodeUtils.joinPath(
      assetUri,
      "dendron-ws",
      "vault",
      "welcome.html"
    );
```

## Related
- [[dendron://dendron.docs/pkg.plugin-core.ref.assets-file-layout]]
