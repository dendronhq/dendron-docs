---
id: pkzdogzfyracy9lnc1165u2
title: Stubbing
desc: ''
updated: 1661117079350
created: 1661117044031
---

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