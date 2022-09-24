---
id: twsz6xcc1be8se9o0p3qa38
title: Spying Private Functions
desc: ''
updated: 1662057644835
created: 1662057637588
---

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