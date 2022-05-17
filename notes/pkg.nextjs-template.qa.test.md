---
id: IyBXeRrpHqUKg8OL5BQ4n
title: Test
desc: ''
updated: 1652805002037
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
1. Checkout [[Publish Gh Action|dendron://dendron.handbook/ext.github.repo.publish-gh-action]]
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

#### Prerequisites
1. Have `origin/dev` checked out

    ```sh
    git checkout --track origin/dev
    ```

#### Steps
1. Commit changes to the dev branch in `nextjs-template`
    ```sh
    git checkout dev
    git merge main -X theirs
    git push
    ```
    - NOTE: if git push fails, you can `git push -f`. the `dev` branch is only used for testing
1. Checkout [[Publish Gh Action|dendron://dendron.handbook/ext.github.repo.publish-gh-action]]
    ```
    git clone https://github.com/dendronhq/template.publish.github-action-dev.git
    ```
1. Make an update to `vault/root.md`, updating `version`, `date` and `hash` (git commit) values 
    ```md
    Last updated: 
    - version: v0.95
    - date: 2022-05-17
    - hash: f2411b5
    ```
1. If there is new functionality, add it to the vault so that we can test the functionality on the published page
1. Push
    ```
    git push
    ```
1. Manually run the following actions:
    - [update packages](https://github.com/dendronhq/template.publish.github-action-dev/actions/workflows/update-deps.yml)
    - [build dendron site](https://github.com/dendronhq/template.publish.github-action-dev/actions/workflows/publish.yml)
1. Verify page is live and that the changes show up -> https://dendronhq.github.io/template.publish.github-action-dev/
1. Cleanup
    - run the following in `nextjs-template`
    ```
    git checkout master
    ```

## Cook

### Upading dendron-site.zip

When testing in the github actions pipeline, we use the contents of `dendron-site.zip` to run tests