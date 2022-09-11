---
id: N4sCZWibsjlBtS8A9Yxxo
title: Publishing
desc: ''
updated: 1662749157401
created: 1640579184040
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Lifecycle

### Initialization

The processor is called in when [[building site metadata|dendron://dendron.docs/pkg.nextjs-template.lifecycle#building-metadata]]

- [[../packages/unified/src/remark/dendronPub.ts]]

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

	//
	const href = SiteUtils.getSiteUrlPathForNote({
		addPrefix: pOpts.flavor === ProcFlavor.PUBLISHING,
		pathValue: value,
		config,
		pathAnchor: data.anchorHeader,
		note,
	});
}
```