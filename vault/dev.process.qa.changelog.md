---
id: 33ejvcmggvd5qhk9gxazqfn
title: Changelog
desc: ''
updated: 1651855203814
created: 1649454903326
---


### 2022-05-06 -  `Extensions.test` is now split up
- the `Extensions.test` file is getting quite large and conflates activating the extension and testing `SetupWorkspace`
    - split `Extensions.test` into 4 tests
        - Extension.test: test regular activation logic
        - Extension-PostInstall: test plugin install logic
        - Extension-PostUpgrade: test version upgrade logic
    - add `SetupWorkspace.test`
- updates to test utilties
    - add [[Vault Preset|dendron://dendron.docs/pkg.engine-test-utils.ref.presets#vault-preset]]


### 2022-02-25

[[Issues with plugin test harness|dendron://private/meet.async.2022.02.25.describe-ws-updates]]