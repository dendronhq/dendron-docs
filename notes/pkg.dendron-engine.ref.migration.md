---
id: yizU3D4RFcnrxPhPgtiSF
title: Migration
desc: ''
updated: 1656698183184
created: 1640042538687
---

## Initialization

### Extension starts up

- follow until [[Reload Workspace|dendron://dendron.docs/pkg.plugin-core.lifecycle.startup#reload-workspace]]

### Run Migration
- check semver versioin of previous workspace ^m92tdciuq9ge
- gets all mgirations that were run since this point
	- NOTE: this will not run [[0.83.0|dendron://dendron.docs/pkg.dendron-engine.ref.migration#0830]] because its an older version

- [[../packages/engine-server/src/workspace/service.ts]]

```ts
runMigrationsIfNecessary {
	if shouldRunMigration {
		changes = applyMigrationRules
		return changes
	}
}

shouldRunMigration { 
	workspaceInstallStatus == UPGRADED || force
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


## Migrations
- [[../packages/engine-server/src/migrations/migrations.ts]]

### 0.83.0
- migrate from version 4 to 5

### 0.55.2
- change `dendron.defaultLookupCreateBehavior

