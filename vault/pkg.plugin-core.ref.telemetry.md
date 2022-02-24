---
id: 1mbn8xsxs5z7ye51zsjjx5x
title: Telemetry
desc: ""
updated: 1645661703398
created: 1645635181221
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

## Lifecycle

- [[../packages/plugin-core/src/_extension.ts]]

```ts
if isDendronWorkspace {
	setupSegmentWithCacheFlush
		setupSegmentClient
}
```

- [[../packages/plugin-core/src/telemetry.ts]]

```ts
setupSegmentClient {
	instantiateSegmentClient
}

instantiateSegmentClient {
	status := getStatus
}
```

[[../packages/common-server/src/analytics.ts]]

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

```ts
constructor {
	status = getStatus
	if isDisabled return;

	uuidPath := readOrCreate



}
```

## Reference

## Cook

## Past Tasks
