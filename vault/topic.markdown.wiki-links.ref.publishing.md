---
id: N4sCZWibsjlBtS8A9Yxxo
title: Publishing
desc: ""
updated: 1640579506155
created: 1640579184040
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Lifecycle

### Initialization

The processor is called in when [[building site metadata|dendron://dendron.docs/pkg.nextjs-template.arch.lifecycle#building-metadata]]

- [[../packages/engine-server/src/markdown/utilsv5.ts]]

```ts
procRehypeParse {
	@_procRemark
}

_procRemark {

	config := ...
	...
	proc.use(dendronPub, {prefix: config.assetsPrefix})
}

dendronPub(opts) {

	prefix := opts
	href =  prefix + value + maybeFileExtension

}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
