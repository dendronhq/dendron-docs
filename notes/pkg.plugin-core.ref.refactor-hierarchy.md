---
id: hXutaUT43J29dQrcKeUiy
title: Refactor Hierarchy
desc: ""
updated: 1642120531845
created: 1642119868768
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Lifecycle

- [[../packages/plugin-core/src/commands/RefactorHierarchyV2.ts]]

```ts
execute {
	operations :=
	@runOperations(operations)
}

runOperations {
	info "orig", "replace

	renameCmd.execute
}
```

- [[../packages/plugin-core/src/commands/RenameNoteV2a.ts]]

```ts
RenameNoteV2aCommand {
	execute {
		// see [[Rename|dendron://dendron.docs/pkg.dendron-engine.t.engine.ref.rename]]
		engine.renameNote
	}
}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
