---
id: pZYzLe7dFiRNkfYa4xhdF
title: Publish
desc: ""
updated: 1646157316666
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

### Export

```ts
export {
	if !@_isInitialized @init

	@build
}
```

- [[../packages/dendron-cli/src/commands/publishCLICommand.ts#^63dulbb81cfg]]

```ts
_isInitialized {
	fs.exists(".next/package.json")
}
```
