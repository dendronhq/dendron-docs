---
id: veJtAvr1gSMu50Mp
title: Test
desc: ""
updated: 1662581419500
created: 1627140509315
---


## Writing Te![[Testing|dendron://dendron.docs/dev.process.qa]]ts

> Note: You may see references to older test utilities such as `runLegacyMultiWorkspaceTest`. Please use latest test functions as described below

To write a test, please use the `describeMultiWS` and `describeSingleWS`
functions. These work in the same way as mocha's `describe`, except that they
will set up a multi-vault or a single-vault workspace before running any tests.
You can then place `test`s inside to write your test cases, or even add
`describe`s to further organize your tests. Here's a [simple example](https://github.com/dendronhq/dendron/blob/707ab9a5d8ed2e23ef96e6f813f7f6e11532db50/packages/plugin-core/src/test/suite-integ/WorkspaceInit.test.ts#L11:L33) of its usage:

## Example

```ts
// Need these imports
import { WorkspaceType } from "@dendronhq/common-all";
import { ENGINE_HOOKS } from "@dendronhq/engine-test-utils";
import { getDWorkspace } from "../../workspace";
import { describeMultiWS, setupBeforeAfter } from "../testUtilsV3";
import { expect } from "../testUtilsv2";
import { ExtensionProvider } from "../../ExtensionProvider";
// Then create a test suite
suite("GIVEN testing code setupLegacyWorkspaceMulti", function () {
  // has to be function(), not arrow
  describeMultiWS(
    "WHEN configured for NATIVE workspace",
    {
      preSetupHook: ENGINE_HOOKS.setupBasic, // optional, do something before the workspace initializes. You can use a preset like this, or write your own code.
      workspaceType: WorkspaceType.NATIVE, // optional
    },
    () => {
      // this can NOT be async, must be a regular function

      // If you need something to be done after the workspace initializes, but before tests, you can add a `before` or `beforeEach` hook here

      test("THEN initializes correctly", () => {
        // can be a regular function or async
        // You can access the workspace inside the test like this:
        const { engine, wsRoot, vaults } = ExtensionProvider.getDWorkspace();
        // Then perform any actions and checks
        const testNote = engine.notes["foo"];
        expect(testNote).toBeTruthy();
      });

      test("THEN is of NATIVE type", (done) => {
        const { type } = ExtensionProvider.getDWorkspace();
        expect(type).toEqual(WorkspaceType.NATIVE);
      });
    }
  );
  // ...
});
```

**Note**: the top level test function passed to `describeMultiWS` or `describeSingleWS` **cannot be async**. (In the example above, this is the `() => { // this can NOT be async ...}` block) Otherwise, the framework may report the tests as passing even if there are asserts or exceptions failing. A run-time guard has been added that should fail the test if an async test function is provided.

However, the `test()` functions within the callback themselves can be async with a `done` parameter like this example, or they can be `async` functions without the `done`. Either will work correctly, you can choose based on what you need for the function you are testing.

The first object allows you to configure the workspace that's being created. It
has a lot of configuration options, see
[here](https://github.com/dendronhq/dendron/blob/707ab9a5d8ed2e23ef96e6f813f7f6e11532db50/packages/plugin-core/src/test/testUtilsV3.ts#L95-L122)
and
[here](https://github.com/dendronhq/dendron/blob/c87a049185eb9712b4b26f04922315ae1d102d02/packages/engine-test-utils/src/engine.ts#L44-L63).
The most common ones used are the following ones:

### Skipping or limiting which tests run temporarily

When writing new tests, it's useful to only run a single test, or to skip a test.
`describe` allows you to do this with `describe.only` and `describe.skip`, e.g.
you just add `.only` or `.skip` to the function name.

```ts
suite("GIVEN thing", function () {
  describe.only("This one will run", () => {
    // ...
  });

  describe("This one won't", () => {

  });
});
```

`describe*WS` functions also support this, allowing you to skip or limit which tests run temporarily.

## Gotchas
- check that tests pass not just locally but also in the pipeline (usually runs on much worse hardware). the main discrepancy you'll see timeout issues in the pipeline. a common value to set for long running tests is 5e3 (5s). see [[timeout|dendron://dendron.docs/pkg.plugin-core.qa.test#timeout]]
- if you create disposables, remember to clean them up
    ```ts
    const disposable = vscode.workspace.onDidSaveTextDocument(() => {
      assert(false, "Callback not expected");
    });
    ...
    disposable.dispose()
    done();
    ```



## Arguments

- NOTE: up to date docs are in [[../packages/plugin-core/src/test/testUtilsV3.ts#^eq30h1lt0zat]]

### afterHook

- NOTE: this is deprecated. please use an `after` block inside your test instead

Run after all the tests have run

### beforeHook

Run before we stub vscode mock workspace

### preActivateHook

Run before dendron is activated

### preSetupHook

Use this to set up the notes in the test workspace, and anything else that you
want to happen before the workspace setup is completed and the engine is
initialized. You can use a preset like this example, or you can also create notes yourself like [this example](https://github.com/dendronhq/dendron/blob/aadf3cd22efe7e8ec95301f286f6348378fba035/packages/plugin-core/src/test/suite-integ/CopyNoteLink.test.ts#L44:L51).

### workspaceType

This is optional. It allows you to set up a Code or Native workspace. It
defaults to Code. Native workspaces don't have the `dendron.code-workspace` file
and may have small differences in behavior.

### modConfigCb

You can use this callback to modify the `dendron.yml` configuration for the test workspace. See [here for an example](https://github.com/dendronhq/dendron/blob/1c734daa45cc1e655638d754267c6bdf5bdcab90/packages/plugin-core/src/test/suite-integ/CreateDailyJournalNote.test.ts#L115-L118).

### timeout
- default: 2e3

Custom timeout for test in milleseconds
You will need to set this when stepping through mocha tests using a debugger,
otherwise the test will timeout during debugging
See [[Breakpoints|dendron://dendron.docs/pkg.plugin-core.qa.debug#breakpoints]] for more details

### Test etiquette

Your tests should follow a [[BDD-Light|rfc.25-bdd-light]] style. The example above shows how this can be accomplished. If you want to add some "AND" clauses, you can nest your tests inside `describe`s to achieve that.

Each test should test a single functionality. The tests should not depend on
each other: mocha allows skipping individual tests, and it should be possible to
skip one test without skipping the entire `describe*WS` block. To
achieve this, make sure that each tests does any necessary setup inside itself,
or in the `preSetupHook`.

If you need to do some action before all tests in `describe*WS` block and it needs to be done after the workspace has initialized, you can use the `before` mocha hook to do so. Simply add it inside `describe*WS` like this:

```ts
describeMultiWS(
  "WHEN ...",
  {
    /* ... */
    preSetupHook: async () => {
      // Action to do before workspace initializes
    },
  },
  () => {
    before(async (done) => {
      // can be async or regular
      // Action to do after workspace initialized, but before any tests are run
    });

    test("THEN ...", async () => {
      // can be async or regular
      /* ... test code here */
    });
  }
);
```

There's also a `beforeEach` mocha hook if this action needs to be repeated before each test.

## Details

Note that VSCode uses [mocha](https://mochajs.org/) as its default test runner whereas Dendron uses [jest](https://jestjs.io/).

We shim the [jest methods](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsv2.ts#L418:L418) when testing the plugin though so that we can re-use the same logic between our non-vscode packages and the Dendron VSCode Plugin.

## Executing Tests

### Run All Tests

1. Open the debug view inside vscode
2. Run `Extension Integ Tests` in the dropdown

- TIP: consider enabling "Uncaught Exceptions" under "Breakpoints" when running tests. Otherwise, if you forget to `await` a function that returns a promise and that function throws an exception, the test will appear to pass even though an exception was thrown.

#### Limited test cases

See [[../packages/plugin-core/src/test/suite-integ/index.ts]]

Modify the files variable

```ts
glob(pattern, { cwd: testsRoot }, (err, files) => {
  if (err) {
    return e(err);
  }
  // Make changes here
  files = ["ChangeWorkspace.test.js", "CodeActionProvider.test.js"];
  ...
```

#### Run from CLI

### Running a single test

1. Open a test inside 'src/test/suite-integ/' from `plugin-core`
2. Run the build task `Extension Integ Tests - File`

## Manual Testing

To manually test new changes, launch an instance of the test workspace.
![[dev.ref.test-workspace]]

## Cook
![[dendron://dendron.docs/pkg.plugin-core.qa.test.cook]]
