---
id: wdrC9UW8vXe9VRZUFgJkX
title: Build
desc: ""
updated: 1642274592363
created: 1636429036436
---

## Summary

This describes the plugin build process

## Details

The build process is automated in [[../packages/dendron-cli/src/commands/devCLICommand.ts]]

It consists of the following steps:

- prepPublish[Local|remote]
- runTypeCheck
- bumpVersion
- publishVersion
- syncAssets
  - buildNextServer
  - syncStaticAssets
    ```sh
    cp dendron-next-server/out plugin-core/assets/static
    cp dendron-next-server/assets/js plugin-core/assets/static
    cp api-server/assets/js plugin-core/assets/static
    ```
- prepPluginPkg
- installPluginDependencies
  ```sh
  rm package.json
  cd packages/plugin-core && yarn --no-lockfile
  ```
- packagePluginDependencies
- setRegRemote
- restorePluginPkgJson

More details in [[Build|dendron://dendron.docs/pkg.dendron-cli.ref.dev.build]]
