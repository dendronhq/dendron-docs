---
id: 99q7A73uGmCwu2KvSHZro
title: Testing
desc: ''
updated: 1642630140118
created: 1632347495097
---

## Summary

Writing and running tests in Dendron

## Writing Tests

Depending on the package you are working on, tests are handled differently

- If you are writing tests for [[pkg.plugin-core]], see [[here|dendron://dendron.docs/pkg.plugin-core.qa.test]].
- If you are writing tests for any other package, see [[here|dendron://dendron.docs/pkg.engine-test-utils.qa.test#writing]]

For all tests, we use the `GIVEN-WHEN-THEN` style described in [[dev.process.qa.style]] when writing test.

## Executing Tests

- For [[pkg.plugin-core]], see [[run all plugin tests|dendron://dendron.docs/pkg.plugin-core.qa.test#run-all-tests]]
- For any other package, see [[run other tests|dendron://dendron.docs/pkg.engine-test-utils.qa.test#run-all-tests]]

- NOTE: Dendron has automated tests that run on every pull request - if you are unable to run tests locally, you can also wait for the pull request to finish running the test
- NOTE: If you running MacOS or Linux, pay special attention to the Windows output and vice versa if you are developing on Windows

## Manual Testing

See [[manual Testing|dendron://dendron.docs/pkg.plugin-core.qa.test#manual-testing]]

## Checklist
![[dendron://dendron.docs/dev.process.qa.test.checklist]]

## Troubleshooting

### One of the tests failed in github actions

See if its timeout related. We have a few tests that are unfortunately flaky. Examples include:
- timeout due to pulling down antd
- timeout with `DefinitionProvider`

If a single test failed, its usually fine to ignore it. If you want to be certain, you can follow the instructions [here](https://www.loom.com/share/50f5c7c2ac2143b18ea45fea8f3c4cb9?from_recorder=1&focus_title=1).

## Cook

### Stubs
We use [sinonjs](https://sinonjs.org/) to stub test methods. 

If you use sinon, don't forget to call `sinon.restore` so that stubs don't leak into subsequent tests. This is done automatically when you use `setupBeforeAfter` helpfer function

When stubbing tests in the plugin, we following the following pattern
```ts
suite("some test", function() {
  let ctx: vscode.ExtensionContext;
  ctx = setupBeforeAfter(this);

  it("test", (done) => {
    sinon.stub(...);
    done();
  });

})
```

When stubbing test in any other code, add an `afterEach` block.
```ts
afterEach(()=> {
  sinon.restore()
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