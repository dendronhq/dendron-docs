---
id: 1mbn8xsxs5z7ye51zsjjx5x
title: Telemetry
desc: ""
updated: 1646961085400
created: 1645635181221
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

## Lifecycle

- [[../packages/plugin-core/src/_extension.ts#^imxu2xz6jv25]]

```ts
if isDendronWorkspace {
	setupSegmentWithCacheFlush
		setupSegmentClient
	...
	identify
	track(InitializeWorkspace)
}
showWelcome
```

```ts
showWelcome { 
	track(Install)
}
```

## Common
- [[../packages/plugin-core/src/telemetry.ts]]

```ts
setupSegmentClient {
	segment = SegmentClient.instance
}
```

[[../packages/common-server/src/analytics.ts]]

```ts
instance { 
	new SegmentClient
}
```

```ts
constructor {
	status = getStatus
	return if @_hasOptedOut

	uuidPath := readOrCreate
}
```

```ts
getStatus {
	if getDisableConfigPath return "disabled"
	config = readConfig {
		read "$HOME/.dendron.telemetry"
	}

	if !config return "enabled"
	return config.status
}
```

## Reference

## Cook

## Past Tasks
