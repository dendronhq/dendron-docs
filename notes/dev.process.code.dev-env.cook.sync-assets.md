---
id: 38phhs1xypb719h6rr867g5
title: Sync Assets
desc: ''
updated: 1657672362952
created: 1657672335954
---

To sync new assets (used in [[pkg.nextjs-template]] and [[pkg.dendron-plugin-views]])

```sh
cd packages/common-assets
yarn build

cd ../..
dendron dev sync_assets --fast
```
