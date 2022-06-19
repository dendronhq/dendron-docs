---
id: e40l9soa6645gr7zra14hcx
title: Workspace Activator
desc: ""
updated: 1655487544745
created: 1655487455235
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

- location: [[../packages/plugin-core/src/workspace/workspaceActivater.ts]]

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

```ts
activate {
	if ext.type = NATIVE
		activateNativeWorkspace
	else
		activateCodeWorkspace
}

activateCodeWorkspace {
	new DendronCodeWorkspace
}
```

## Reference

- [[Dendron Base Workspace|dendron://dendron.docs/pkg.plugin-core.ref.dendron-base-workspace]]: all worjkspaces extend this logic

## Cook

## Past Tasks
