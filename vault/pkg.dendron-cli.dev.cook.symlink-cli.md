---
id: ZNNBJY9E7wKBKkNOmZJPd
title: Symlink CLI
desc: ''
updated: 1643306437915
created: 1643306103235
---

Symlinking `dendron-cli` lets you use the current version of dendron from anywhere inside the CLI

1. Run npm link
    ```sh
    cd packages/dendron-cli
    npm link
    ```
1. Verify
    ```sh
    # output should match the current version inside `dendron/lerna.json`
    dendron --version
    ```
