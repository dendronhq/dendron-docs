---
id: IyBXeRrpHqUKg8OL5BQ4n
title: Test
desc: ''
updated: 1642636388424
created: 1638063942917
---

## Details
<!-- Any additional details to give about tests-->
Tests are run using [cypress](https://www.cypress.io/), an e2e testing framework for the browser. 

## Writing
<!-- Writing tests -->

## Executing
<!-- Running tests -->

## Manual Testing

### Using the Test Workspace

You can use the [[Test Workspace|dev.ref.test-workspace]] to check publishing changes.

- NOTE: we use `--attach` to speed up the export if a workspace is active. otherwise, drop the flag to initiliaze via the CLI
```sh
export DENDRON_REPO_ROOT={path/to/dendron/repo}
cd $DENDRON_REPO_ROOT/test-workspace
dendron exportPod --podId dendron.nextjs --config="dest=$DENDRON_REPO_ROOT/packages/nextjs-template" --attach
```

### Using your own workspace

Same instructions as above. Change into your own workspace instead of `$DENDRON_REPO_ROOT/test-workspace`

### Using amplify

To test nextjs-template with the contents of dendron, push to the `dev` branch of nextjs-template. This is automatically consumed by the
[[Dev Wiki Endpoint|dendron://dendron.docs/ref.dev-wiki-endpoint]]. 
