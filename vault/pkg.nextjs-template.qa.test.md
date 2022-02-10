---
id: IyBXeRrpHqUKg8OL5BQ4n
title: Test
desc: ''
updated: 1644345025504
created: 1638063942917
---

## Details
<!-- Any additional details to give about tests-->
Tests are run using [playwright](https://playwright.dev/docs/intro), an e2e testing framework for the browser. Note that we have chosen to move away from cypress (https://alisterbscott.com/2021/10/27/five-reasons-why-playwright-is-better-than-cypress/)

On Github actions, these tests will run on Chrome/Firefox/Safari for `ubuntu-latest`

## Writing
<!-- Writing tests -->
Tests should be written under the `$DENDRON_REPO_ROOT/packages/nextjs-template/tests` directory. 

See `$DENDRON_REPO_ROOT/packages/nextjs-template/tests/example.spec.ts` for an example

## Executing
>>IMPORTANT: If running for the first time, run `npx playwright install --with-deps`. This will install necessary playwright browsers

<!-- Running all tests -->
1. Running all tests
```sh
cd $DENDRON_REPO_ROOT/packages/nextjs-template
yarn test
```
2. To skip building the application (useful if only working with spec files and don't need to rebuild every time)
```sh
yarn test:skipbuild
```

## Running a single test
```sh
cd $DENDRON_REPO_ROOT/packages/nextjs-template
npx playwright test tests/example.spec.ts
```
To skip build
```
SKIP_BUILD=1 npx playwright test tests/example.spec.ts
```

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
