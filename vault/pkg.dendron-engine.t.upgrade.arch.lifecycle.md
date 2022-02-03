---
id: yizU3D4RFcnrxPhPgtiSF
title: Lifecycle
desc: ""
updated: 1640905806905
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
	// currently determined by matching current workspace version with version of migration
	migrationsToRun :=

	changes = migratrionsToRun.forEach m => {
		collectMigrationChanges(m)
	}

	if changes {
		// apply changes
	}

}
applyMigrationChanges {
	// migration logic here
}
```
