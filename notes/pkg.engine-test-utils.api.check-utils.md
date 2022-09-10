---
id: gi0fffaiwkrlhdozu4xr0f6
title: Check Utils
desc: ''
updated: 1662821513677
created: 1662772991715
---

Various checking utilites

- source: [[../packages/engine-test-utils/src/utils/index.ts]]

<!-- 

Full:
![[https://github.com/dendronhq/dendron.git]]{commit: $LATEST, path: packages/engine-test-utils/src/utils/index.ts, line:8}

Compact:
![[https://github.com/dendronhq/dendron.git]]{commit: $LATEST, path: packages/engine-test-utils/src/utils/index.ts, line:8}

<!-- https://github.com/dendronhq/dendron/blob/33f95bd9639e9769564ec4d07202e7ccc9d7ac18/packages/engine-test-utils/src/utils/index.ts#L8 -->

## Examples

```ts

test("did the rabbit jump", async () => {
  const someString = "the rabbit jumped"
  // NOTE: don't forget this
  await checkString(someString, "rabit");
})
```