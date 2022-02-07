---
id: ZNNBJY9E7wKBKkNOmZJPd
title: Symlink CLI
desc: ''
updated: 1644270784960
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


## Troubleshooting

### Version doesn't match after linking
Sometimes the linked CLI is not marked as executable. Try marking it to see if
it works.

```sh
# may be somewhere else for you, first find where `npm link` added the executable file
chmod +x ~/.local/share/nvm/v16.6.1/bin/dendron
```
