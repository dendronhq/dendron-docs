---
id: n4immv31sjzvpdwp10ehoqg
title: Backup Service
desc: ''
updated: 1647268215518
created: 1647268215518
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary
In charge of creating and retrieving backup files.

## Lifecycle

## Reference

- Example usage: [[DConfig.createBackup|../packages/engine-server/src/config.ts#^fd66z8uiuczz]]

## Cook

### Basic

```ts
  // instantiate backup service
  const backupService = new BackupService({ wsRoot });
  try {
    doBackupStuff();
  } finally {
    // dispose backup service.
    backupService.dispose();
  }
```

### Add new backup key

- Add new key in [[BackupKeyEnum|../packages/engine-server/src/backup/service.ts#^6ao9nojre6ai]]
- This will be used when retrieving backups and also as the name of the subdirectory it will be stored (e.g. `{wsRoot}/.backup/{key}`)

### Changing backup names

- Internally, `BackupService.backup` calls `BackupService.generateBackupFileName` to keep backup name formats consistent.
- The backup name can have an optional timestamp and infix.
- You can also completely bypass backup file name generation and pass in your own as `nameOverride` if you need more flexibility.
- See [[../packages/engine-server/src/backup/service.ts#^b0jdi7ncbflr]] for more.
