---
id: 33ejvcmggvd5qhk9gxazqfn
title: Changelog
desc: ''
updated: 1653950049333
created: 1649454903326
---

### 2022-05-30 - snapshot tests update

To update snapshot, run `yarn test:cli:update-snapshots` from the WORKSPACE_ROOT

### 2022-05-17 - upgrade jest 
- pr: https://github.com/dendronhq/dendron/pull/2918
- author: @kevin

- jest has been upgraded to v28
    - notable changes: 
        - it is now illegal for a test to both be `async` and use the `done` callback
        - `done` being called multiple times will result in an error
- all test dependencies  (aka jest and friends) with the exception of the following packages are now handled and executed in the root of the monorepo
    - nextjs-template
    - dendron-plugin-views
- to execute all non-plugin tests via the CLI 
    ```bash
    cd $MONOREPO_ROOT
    yarn ci:test:cli
    ```
- to watch a single non-plugin tests via vscode
    ```
    1. Open the `.spec.ts` file you want to test in VSCode
    2. Use command prompt and run `> Tasks: Run tasks`
    3. Run the following task `> test:watch root`
    ```
- to debug a single non-plugin test via vscode
    ```
    Use `Launch Task` and run `Debug One Test (root)` on a `spec` file that you want to test. This will run the test in `debug` mode which will enable breakpoints. 
    ```
- updated sops
    - [[Test|dendron://dendron.docs/pkg.engine-test-utils.qa.test]]
    - [[Debug|dendron://dendron.docs/pkg.engine-test-utils.qa.debug]]


### 2022-05-06 -  `Extensions.test` is now split up
- the `Extensions.test` file is getting quite large and conflates activating the extension and testing `SetupWorkspace`
    - split `Extensions.test` into 4 tests
        - Extension.test: test regular activation logic
        - Extension-PostInstall: test plugin install logic
        - Extension-PostUpgrade: test version upgrade logic
    - add `SetupWorkspace.test`
- updates to test utilties
    - add [[Vault Preset|dendron://dendron.docs/pkg.engine-test-utils.ref.presets#vault-preset]]
- diff: https://github.com/dendronhq/dendron-docs/commit/0a7732f911cf22778369f89e2d3a299fa1c2e589


### 2022-02-25

[[Issues with plugin test harness|dendron://private/meet.async.2022.02.25.describe-ws-updates]]