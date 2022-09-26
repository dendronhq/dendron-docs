---
id: IyBXeRrpHqUKg8OL5BQ4n
title: Test
desc: ''
updated: 1664193910145
created: 1638063942917
---

## Details
Tests are run using [playwright](https://playwright.dev/docs/intro), an e2e testing framework for the browser. Note that we have chosen to move away from cypress (https://alisterbscott.com/2021/10/27/five-reasons-why-playwright-is-better-than-cypress/)

On Github actions, these tests will run on Chrome/Firefox/Safari for `ubuntu-latest`

## Writing
Tests should be written under the `$DENDRON_REPO_ROOT/packages/nextjs-template/tests` directory. 

See `$DENDRON_REPO_ROOT/packages/nextjs-template/tests/example.spec.ts` for an example

## Executing
>>IMPORTANT: If running for the first time, run `npx playwright install --with-deps`. This will install necessary playwright browsers

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

### Testing locally using dev template
1. Checkout [[Publish Gh Action Dev|dendron://dendron.docs/ext.github.repo.publish-gh-action-dev]]
1. Do the following

```sh
# upgrade cli
npm install @dendronhq/dendron-cli@latest

# change to dev branch
npx dendron publish init
git reset --hard
git checkout --track origin/dev
yarn

# do edit
dendron publish dev
```

### Testing in github actions using dev template
- #star

- [[Gh Actions|dendron://dendron.docs/pkg.nextjs-template.qa.test.gh-actions]]

## E2E testing

[Playwright](https://playwright.dev/) is used for doing end-to-end testing. All tests of that kind are located under the `e2e` folder.

### Running the e2e tests

To run these tests the following options are available

1. To run all tests under /e2e, `yarn test` from within the `nextjs-template` directory
2. To run all tests without building application everytime, `yarn test:skipbuild`
3. To run just a single file, `npx playwright test tests/example.spec.ts` from within the `nextjs-template` directory
4. To skip build while testing that test file, `SKIP_BUILD=1 npx playwright test tests/example.spec.ts`

NOTE: Some tests do VRT(visual regression testing) whereby they take screenshots from specific areas of the page. **These tests will probably fail**  since they are compared to previously done screenshots that where created under a specific environment. That environment must be the same as the one being created inside the CI pipeline. To close that gap we can create that environment locally using a docker container. The following command executed from the root of the project will run the `nextjs-template` e2e test inside that environment:

```bash
yarn ci:test:template:docker
```

### Creating a new e2e test

Inside the `e2e` folder you find `example.spec.ts` that can be used to understand how a test is structured. Here an simple test case:

```typescript
import test from "./next-fixture";
import { expect } from "@playwright/test";

test("Test home page", async ({ page, port }) => {
  await page.goto(`http://localhost:${port}/`);
  const name = await page.innerText("h1");
  expect(name).toBe("Dendron");
});
```

Notice the `test` import from `next-fixture`. This is a Playwright [feature](https://playwright.dev/docs/test-fixtures#fixtures-options) allowing to setup, in our case, options that are set for every test. You should use that instead of the default `test` from playwright.

### Visual Regression Testing

- To do visual regression testing use [`toHaveScreenshot`](https://playwright.dev/docs/test-snapshots) and provide the name parameter that will be used as the location for the image. Using an array you can apply a folder structure for organizational purposes.
- To update snapshots use the `-u or --update-snapshots` flag, by appending it to the command like so `yarn ci:test:template:docker -u`
  - Make sure you have build the project beforehand, in case your build files diverge from what your current branch would have.

### Cook/Hints

- use `--debug` flag to tell playwright to start with debugger in which you can then step through each line in your test.

## Cook

### Upading dendron-site.zip

When testing in the github actions pipeline, we use the contents of `dendron-site.zip` to run tests
