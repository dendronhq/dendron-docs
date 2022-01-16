---
id: pZYzLe7dFiRNkfYa4xhdF
title: Publish
desc: ""
updated: 1641075671100
created: 1641075542639
---

## Summary

Publishing via the CLI

## Lifecycle

### Build

- [[../packages/dendron-cli/src/commands/publishCLICommand.ts]]

```ts
build {
	_buildNextData

}
```

```ts
_buildNextData {
	cli = ExportPodCLICommand
	cli.enrichArgs {podId: NextjsExportPod.id}
	cli.execute
}
```
