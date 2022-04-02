---
id: 99q7A73uGmCwu2KvSHZro
title: Testing
desc: ""
updated: 1646637633638
created: 1632347495097
---

## Summary

Writing and running tests in Dendron

## Writing Tests

Depending on the package you are working on, tests are handled differently

- If you are writing tests for [[pkg.plugin-core]], see [[here|dendron://dendron.docs/pkg.plugin-core.qa.test]].
- If you are writing tests for [[pkg.nextjs-template]], see [[here|dendron://dendron.docs/pkg.nextjs-template.qa.test]]
- If you are writing tests for any other package, see [[here|dendron://dendron.docs/pkg.engine-test-utils.qa.test#writing]]

For all tests, we use the `GIVEN-WHEN-THEN` style described in [[dev.process.qa.style]] when writing test.

## Executing Tests

- For [[pkg.plugin-core]], see [[run all plugin tests|dendron://dendron.docs/pkg.plugin-core.qa.test#run-all-tests]]
- For [[pkg.dendron-cli]], see [[Run Task|dendron://dendron.docs/pkg.dendron-cli.qa#run-task]]
- For any other package, see [[run other tests|dendron://dendron.docs/pkg.engine-test-utils.qa.test#run-all-tests]]

- NOTE: Dendron has automated tests that run on every pull request - if you are unable to run tests locally, you can also wait for the pull request to finish running the test
- NOTE: If you running MacOS or Linux, pay special attention to the Windows output and vice versa if you are developing on Windows

## Manual Testing

See [[manual Testing|dendron://dendron.docs/pkg.plugin-core.qa.test#manual-testing]]

## Test Utilities

Dendron provides many utilities to more easily setup tests. See provided utilities in [[Test Utils|dendron://dendron.docs/pkg.common-test-utils.ref.test-utils]]

## Presets

When setting up a mock workspace, Dendron provides multiple pre-configured notes and vaults that can be tested against.

Low level presets (single note) can be found in [[Note Presets|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets]]

Higher level presets (multiple notes can be found in [[Note Collection Presets|dendron://dendron.docs/pkg.engine-test-utils.ref.note-collection-presets]]

## Checklist

![[dendron://dendron.docs/dev.process.qa.test.checklist]]

## Troubleshooting

### One of the tests failed in github actions

See if its timeout related. We have a few tests that are unfortunately flaky. Examples include:

- timeout due to pulling down antd
- timeout with `DefinitionProvider`

If a single test failed, its usually fine to ignore it. If you want to be certain, you can follow the instructions [here](https://www.loom.com/share/50f5c7c2ac2143b18ea45fea8f3c4cb9?from_recorder=1&focus_title=1).

### Cannot register "..."

This happens when you reload the _extension host_ when working on the plugin. To fix, restart the _debug and build_ task for the plugin.

See example in [here](https://www.loom.com/share/797f2e13cc9a46e4a0973b3ad26f6ed7)

## Cook

### Stubs

We use [sinonjs](https://sinonjs.org/) to stub test methods.

If you use sinon, don't forget to call `sinon.restore` so that stubs don't leak into subsequent tests. This is done automatically when you use `setupBeforeAfter` helpfer function

When stubbing tests in the plugin, we following the following pattern

```ts
suite("GIVEN some test", function () {
  // before can also go inside `describeMultiWS`, or some other describe block.
  // The block you put it in will be the block where it is applied.
  before(async () => {
    // async is optional, you can use a regular function too
    const stubbedProperty = sinon.stub(Thing, "property");
    // If you are stubbing a function, you can pick what it returns
    stubbedProperty.returns(42);
    stubbedProperty.resolves("will be returned as a promise");
  });

  describeMultiWS("WHEN using something", {}, () => {
    test("THEN thing happens", async () => {
      // Test the thing here
    });
  });
  // describeMultiWS and describeSingleWS automatically restore all stubs after all the tests are done.
});
```

If you need something to be re-stubbed for each test (rather than the whole
block), you can use the `beforeEach` hook to do so. You will need to restore the
stub yourself in that case.

```ts
beforeEach(() => {
  sinon.stub(Thing, "property");
});

afterEach(() => {
  // Required, `describe*WS` doesn't restore things until all tests are over so `beforeEach` hook will be missed
  sinon.restore();
});
```

### Stubbing Mutating Disk Changes

Dendron has certain features that writes to locations that are global to all Dendron installations (`eg. ~/.dendron`). Because we run integration tests on these features, we also don't want these tests to overwrite our actual dendron setup. The tests for these sort of features should be stubbed.

For example, below is an example of stubbing the home directory for tests:

```ts
static mockHomeDir(dir?: string): SinonStub {
  if (_.isUndefined(dir)) dir = tmpDir().name;
  return sinon.stub(os, "homedir").returns(dir);
}
```

### Stubbing dendron.yml in a test

![[pkg.engine-test-utils.cook#stubbing-dendronyml-in-a-test]]

### Creating a mock note

Use [NoteTestUtils](https://github.com/dendronhq/dendron/blob/16b0e5c59e3ee11530199b5c9a11a58f05e14a93/packages/common-test-utils/src/noteUtils.ts#L63-L63)

### Updating test snapshots

We make frequent use of jest [snapshots](https://jestjs.io/docs/snapshot-testing) in our testing. These snapshots will fail the test if the output of a command changes. If you intend to change the output, run the following command:

1. Use command prompt and run `> Tasks: Run tasks`
2. Select `test:updateSnapshots`

### Stubbing setTimeout

Stubbing the global `setTimeout` (with `sinon.fakeTimer` or else) seems to break
VSCode, causing it to just hang. If you are having trouble with that, instead
use `Wrap.setTimeout` from `@dendronhq/common-all` in the code you want to test.
Then you can stub the wrapped function and simulate the timer going off with
`stub.callArg(0)`. For example:

```ts
const stubTimeout = sinon.stub(Wrap, "setTimeout");
const editor = await WSUtils.openNote(note);
WorkspaceWatcher.moveCursorPastFrontmatter(editor);
stubTimeout.callArg(0);
```

### Stubbing global functions

Follow the same procedure as [[#stubbing-settimeout]], but create your own wrapper if one doesn't exist.
You can reuse the `Wrap` class in `common-all`. Try to wrap the function exactly with the same signature.

```ts
const cmd = new DoctorCommand(extension);
const reloadSpy = sinon.stub(cmd, "reload" as keyof DoctorCommand);
```

### Exposing private methods to tests

In most cases, you shouldn't expose or test private methods. If you have to stub
private methods, see [[Stubbing private functions or properties|#stubbing-private-functions-or-properties]].
But in rare cases, you may have to expose private methods for testing. To do so,
you can add the method `__DO_NOT_USE_IN_PROD_exposePropsForTesting` to the
class. This method should export only the private methods and properties that
are necessary for the test

```ts
  // eslint-disable-next-line camelcase
  __DO_NOT_USE_IN_PROD_exposePropsForTesting() {
    return {
      onFirstOpen: this.onFirstOpen.bind(this),
    };
  }

```

- NOTE: you'll need to add the eslint disablement as well as the `.bind(this)` for this to work.

You can see an example of this [here](https://github.com/dendronhq/dendron/pull/2405/files#diff-3796fd1bad70e2aa646a02f09ac82f4a50fce4fa3fcd15844bec53a851905c5f)

### Stubbing private functions or properties

In case you are only exposing the private methods to stub / spy on with SinonJS, you can keep the method private and do the following instead:

```ts
export class SomeClassYouWantToTest {
  ...
  private someMethod(...) { ... }
}

// in test
  ...
  const foo = new SomeClassYouWantToTest();
  const someMethodSpy = sinon.spy(foo, "someMethod" as keyof SomeClassYouWantToTest);
  ...
```

In TypeScript, private functions and properties are just a suggestion for the
type checker. The underlying functions and properties are still actually
accessible, so we use a cast to bypass the typechecker.

### Proper Clean Up Between Tests and Test Suites

Sometimes, you'll find that some tests pass when run in isolation, but fail when run as part of the test pass. This is likely due to the previous test not properly cleaning up. Remember to clean up after your tests have run. These include

- For UI based tests (i.e. plugin-core), leaving the extension host UI in a clean state - close any tabs that were opened, etc.
- Cleaning up Disposables. Including
  - If you registered anything with vscode (commands, views), be sure to un-register
  - `NoteLookupCommand` instances.
  - Anything else that implements the `Disposable` interface
  -
