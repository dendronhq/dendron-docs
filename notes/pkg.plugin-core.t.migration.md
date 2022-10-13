---
id: pauCR2Tjd5PtJY6qzJSvH
title: Migration
desc: ''
updated: 1656698003549
created: 1640904455381
---

## Summary

How Dendron migrates configuration

## Lifecycle

1. Dendron activates if it detects a Dendron workspace. This is described in [[Startup|dendron://dendron.docs/pkg.plugin-core.lifecycle.startup]]
1. During startup, Dendron calls `runMigrationsIfNecessary`. Process described in [[Run Migration|dendron://dendron.docs/pkg.dendron-engine.ref.migration#run-migration]]


- [[../packages/plugin-core/src/utils/StartupUtils.ts]]
```ts
changes = runMigrationsIfNecessary
if changes { 
  track change
} else {
  maybePromptConfigMigration
}
```

- [[../packages/plugin-core/src/utils/ConfigMigration.ts]]
```ts
maybePromptConfigMigration {
    dendronConfig.version !== CURRENT_CONFIG_VERSION {
        showConfigMigrationConfirmationMessage
    }
}
```

## When migrations are skipped
- testing


## Related
- [[dendron://dendron.docs/pkg.dendron-engine.ref.migration]]