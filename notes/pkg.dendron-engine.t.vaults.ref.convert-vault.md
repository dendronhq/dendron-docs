---
id: m8ohyvmjtf8qlrgjesh7dzu
title: Convert Vault
desc: ""
updated: 1649865544271
created: 1649864136204
---

## Related to

- [[Workspace Service|dendron://dendron.docs/pkg.dendron-engine.ref.workspace-service]]

## Invoke from plugin

- [[../packages/plugin-core/src/commands/VaultConvert.ts]]
- VaultConvertCommand

```ts
execute(type) {
	if type = local {
		workspaceService.convertVaultLocal
	}
	...
}
```

## Convert vault to remote vault

- [[../packages/engine-server/src/workspace/service.ts]]

```ts
convertVaultRemote(targetVault, remoteUrl) {
	...

	updateVault

	if enableSelfContainedVaults {

	}
}
```

## Convert vault to local vault
