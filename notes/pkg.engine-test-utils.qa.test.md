---
id: FfyL5dSzFwX1iseI56oYy
title: Test
desc: ""
updated: 1652835193841
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

- NOTE: as of 2022-04-02, we use `jest@26.6.0` to run tests

### Writing

<!-- Writing unit test -->

When writing a test for a package, put the test underneath the `{pkgName}` folder

For any tests where you need to setup a Dendron workspace, reference the engine, or use vaults, you should use [runEngineTestV5](https://github.com/dendronhq/dendron/blob/cba633e4568601485e0cea1ab382e9dd3fbaa305/packages/engine-test-utils/src/engine.ts#L274). This function setups a workspace in a temporary directory with one or more vaults and lets you run your tests against a real Dendron environment.

#### Things to Note

1. `preSetupHook: ENGINE_HOOKS.setupSchemaPreset` ^HQyi98cDzF1a

- Use preSetupHook to initialize workspace with pre-created notes and templates

#### Testing the Invocation of a Callback

If you're trying to validate that a callback was invoked as part of your test, be aware of the following behavior in async jest/mocha testing:

Incorrect:

```typescript
test("Testing that onMyCallbackInvoked was invoked (WRONG)", (done) => {
  foo.onMyCallbackInvoked((bar) => {
    expect(bar).toBeTruthy();
    done();
  });
});
```

Correct:

```typescript
test("Testing that onMyCallbackInvoked was invoked (CORRECT)", (done) => {
  foo.onMyCallbackInvoked((bar) => {
    try {
      expect(bar).toBeTruthy();
    } catch (err) {
      // Passing an argument to the done function will cause the test harness to
      // fail immediately, which is what we want.
      done(err);
    }
  });
});
```

The reason this is necessary is because an exception in the callback (such as a failure in an `expect()` call) will result in a failed promise, not an outright exception. Consequently, the test will instead just timeout waiting for `done()` to be called instead of failing immediately. Furthermore, instead of getting a helpful error message like `expect(bar).toBeTruthy(); line failed`, it will just report an ambiguous problem saying that the test hit a timeout.

There's a utility function that wraps the try / catch logic, which is the preferred way to write the test:

```typescript
import {testAssertsInsideCallback} from "@dendronhq/common-test-utils";
...
test("Testing that onMyCallbackInvoked was invoked (CORRECT & PREFERRED WAY)", (done) => {
  foo.onMyCallbackInvoked((bar) => {
    testAssertsInsideCallback(() => {
      expect(bar).toBeTruthy();
    }, done);
  });
});
```

#### Creating notes after engine is started
If your test cases involve creating notes that cannot be done in the hooks, use `NoteTestUtilsV4.createNoteWithEngine` or `CreateNoteFactory.createWithEngine` in the test methods themselves

### Testing a new Engine Method

![[dendron://dendron.docs/pkg.dendron-engine.qa.test.engine]]

### Executing

#### Run All Tests

- Using CLI

```bash
cd $MONOREPO_ROOT
yarn ci:test:cli
```

#### Run a Single Test

1. Open the `.spec.ts` file you want to test in VSCode
2. Use command prompt and run `> Tasks: Run tasks`
3. Run the following task `> test:watch root`
