---
id: wnqwpk9b41duc14cpoez0qi
title: Exposing Private Methods for Test
desc: ''
updated: 1667892268301
created: 1662057605400
---

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