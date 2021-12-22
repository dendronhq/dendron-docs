---
id: yizU3D4RFcnrxPhPgtiSF
title: Lifecycle
desc: ""
updated: 1640044833217
created: 1640042538687
---

## Initialization

### Extension starts up

- follow until [[Reload Workspace|dendron://dendron.docs/pkg.plugin-core.arch.lifecycle.startup#reload-workspace]]

### Run Migration

- [[../packages/engine-server/src/workspace/service.ts]]

```ts
runMigrationsIfNecessary {
	if shouldRunMigration {
		changes = applyMigrationRules
		return changes
	}
}
```

### Apply Migration

- [[../packages/engine-server/src/migrations/service.ts]]

```ts
applyMigrationRules {
	migrationsToRun :=

	migratrionsToRun.forEach m => {
		applyMigrationChanges(m)
	}
}
applyMigrationChanges {

}
```
