---
id: FfyL5dSzFwX1iseI56oYy
title: Test
desc: ''
updated: 1638909983128
created: 1636128639000
---

## Details
All packages have tests written in `jest`. The are located under `src/__test__/{pkgName}`

```txt
- src/
    - __tests__/
        - api-server
        - common-all
        - common-server
        - dendron-cli
        - pods-core
        - engine-server
        - common-frontend
        - __snapshots__
```


### Writing
<!-- Writing unit test -->
When writing a test for a package, put the test underneath the `{pkgName}` folder

For any tests where you need to setup a Dendron workspace, reference the engine, or use vaults, you should use [runEngineTestV5](https://github.com/dendronhq/dendron/blob/cba633e4568601485e0cea1ab382e9dd3fbaa305/packages/engine-test-utils/src/engine.ts#L274). This function setups a workspace in a temporary directory with one or more vaults and lets you run your tests against a real Dendron environment. 

#### Things to Note
1. `preSetupHook: ENGINE_HOOKS.setupSchemaPreseet` ^HQyi98cDzF1a
- Use preSetupHook to initialize workspace with precreated notes and templates

### Executing
<!-- Running unit test -->

#### Run All Tests
- Inside VSCode
  > Run Task: Test (bootstrap)

- Using CLI
```bash
dendron/bootstrap/scripts/testAll.sh
```

#### Run a Single Test
1. Open the `.spec.ts` file you want to test in VSCode
2. Use command prompt and run `> Tasks: Run tasks`
3. Run the following task `> npm:test:watch engine-test-utils`

#### Run a Single Test using CLI
`./node_modules/.bin/jest $REPO_ROOT/packages/engine-test-utils/src/__tests__/common-all/dnode.spec.ts`

