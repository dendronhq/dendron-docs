---
id: gi0fffaiwkrlhdozu4xr0f6
title: Check Utils
desc: ''
updated: 1662773742264
created: 1662772991715
---

Various checking utilites

- source: [[../packages/engine-test-utils/src/utils/index.ts]]


## Examples

```ts

test("did the rabbit jump", async () => {
  const someString = "the rabbit jumped"
  // NOTE: don't forget this
  await checkString(someString, "rabit");
})
```