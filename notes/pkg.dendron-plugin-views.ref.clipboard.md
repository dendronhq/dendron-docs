---
id: OsWq5eGjINWyC7khHIrkb
title: Clipboard
desc: ""
updated: 1642024146157
created: 1642023079188
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Lifecycle

- [[../packages/common-server/src/etc.ts]]

```ts
addEventListener(copy, (e) => {
  it = getHTMLOfSelection;
  copyToClipboard(it);
});


copyToClipboard html {
	...

}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
