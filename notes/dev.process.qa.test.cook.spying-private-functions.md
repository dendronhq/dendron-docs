---
id: twsz6xcc1be8se9o0p3qa38
title: Spying Private Functions
desc: ''
updated: 1667892219066
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