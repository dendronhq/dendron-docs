---
id: e3ldftyacjxwuaiimmbpb1d
title: Workspace Service
desc: ""
updated: 1654309641261
created: 1649717574541
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

- [[../packages/engine-server/src/workspace/service.ts]]

```ts
initialize {
	initializeRemoteVaults :=
	if initializeRemoteVaults {
		syncVaults
	}
}
```

```ts
syncVaults {
	workspaces :=
	workspaces.map ws => cloneWorkspace

}
```

```ts
cloneWorkspace {
	git := simpleGit
	git.clone
}
```

## Create Workspace

- loc: [[../packages/engine-server/src/workspace/service.ts]]
- calledBy:
  - x [[../packages/plugin-core/src/commands/SetupWorkspace.ts]]
  - [[../packages/engine-test-utils/src/engine.ts]]
  - x [[../packages/engine-server/src/seed/service.ts]]
  - [[../packages/dendron-cli/src/commands/devCLICommand.ts]]

```ts
createWorkspace {
	if useSelfContainedVault {
		createSelfContainedVaultWorkspace
	}
}
```

```ts
createSelfContainedVaultWorkspace(wsRoot, vaults) {
	ws = new WorkspaceService(wsRoot)
	if vaults {
		...
		vaults.map v {standardToSelfContainedVault }

		selfContainedVaults.forEach v {
			ws.createSelfContainedVaultv {
				addToCodeWorkspace: false,
				addToConfig: false
			}
		}
	}
}
```

```ts
createSelfContainedVault {
	...
	note := createRoot
	schema := ...
	vaultPath :=
	...
	// create dendron.yml
	DConfig.getOrCreate(vaultPath)
	WorkspaceConfig.write(vaultPath)
	createGitIgnore
	if addToConfig {
		this.addVault
	}
	if addToCodeWorkspace {
		this.addVaultToCodeWorkspace
	}
}
```

```ts
addVault(vault) {
	vaults := getVaults
	vaults.unshift vault
	ConfigUtils.setVaults(vaults)
}
```

## Reference

### standardToSelfContainedVault

```ts
if vault.isSelfContained return vault

if vault.remote {
	...
} else {
	vault.fsPath = DEPENDENCIES, LOCAL_DEPENDENCY, basename(vault.fsPath)
	vault.selfContained = true
}
return vault
```

## Cook

## Past Tasks

- [enhance: Dendron still loads if there's a missing local vault by SeriousBug · Pull Request #2526 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/2526/files)
