---
id: e3ldftyacjxwuaiimmbpb1d
title: Workspace Service
desc: ""
updated: 1649717953093
created: 1649717574541
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

- [[../packages/engine-server/src/workspace/service.ts]]

```ts
initialize {
	initializeRemoteVaults :=
	if initializeRemoteVaults {
		syncVaults
	}
}
```

```ts
syncVaults {
	workspaces :=
	workspaces.map ws => cloneWorkspace

}
```

```ts
cloneWorkspace {
	git := simpleGit
	git.clone
}
```

## Reference

## Cook

## Past Tasks

- [enhance: Dendron still loads if there's a missing local vault by SeriousBug · Pull Request #2526 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/2526/files)
