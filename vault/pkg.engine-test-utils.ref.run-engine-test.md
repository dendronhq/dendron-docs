---
id: EbwHwLaseIk9w8LNOBpw1
title: Run Engine Test
desc: ""
updated: 1640474998663
created: 1640474850869
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

Setups a Dendron workspace and initializes an Engine for testing purposes

## Lifecycle

- [[../packages/engine-test-utils/src/engine.ts]]

```ts
runEngineTest(
	preSetupHook
) {
	setupWS
	preSetupHook
	engine := createEngine
	engine.init
}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
