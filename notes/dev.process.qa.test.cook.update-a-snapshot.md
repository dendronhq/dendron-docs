---
id: u7utw5w8gyacuh3ok9ehi8j
title: Update a Snapshot
desc: ''
updated: 1656374367450
created: 1656374326203
---

## Context
We make frequent use of jest [snapshots](https://jestjs.io/docs/snapshot-testing) in our testing. These snapshots will fail the test if the output of a command changes. Use the following command to update snapshots

## Example
```sh
cd $WS_ROOT
# update all snapshots
yarn test:cli:update-snapshots

# update a single snapshot
yarn test:cli:update-snapshots -- {path-to-test}
```

