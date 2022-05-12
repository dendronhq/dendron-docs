---
id: tT87jLMqkDJYjSwfDVdbG
title: Dendron Extension Testing Internals
desc: ""
updated: 1651697489269
created: 1645146115173
---

## Details

To test VSCode, we mock the vscode extension object to let us simulate test in new workspaces. You can see the testing harness [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsV3.ts#L464:L464).

Writing tests is described [[here|dendron://dendron.docs/pkg.plugin-core.qa.test#writing-tests]]

This isn't perfect as there are still certain features we cannot test (eg. `workspace.onDid*` events - these rely watching a current workspace which is not actually constructed for testing). In these cases, we currently implement workarounds like [[Exposing private methods to tests|dendron://dendron.docs/dev.process.qa.test#exposing-private-methods-to-tests]].

## Logic

### Execution

describeMultiWs

### Code

- [[../packages/plugin-core/src/test/testUtilsV3.ts#^eq30h1lt0zat]]

```ts
describeMultiWS(opts, fn) {
	describe {
		before {
			opts?.beforeHook
			setupLegacyWorkspaceMulti(opts)
			opts?.preActivateHook()
			_activate(opts.ctx)
		}

		fn();

		after {
			cleanup
		}
	}

}
```

- [[../packages/plugin-core/src/test/testUtilsV3.ts#^bq7n7azzkpj2]]

```ts
setupLegacyWorkspaceMulti(ctx, workspaceType, preSetupHook, modConfigCb, postSetupHook) {
	setupWS
	new StateService(ctx)

	if workspaceType = Code {
		...
	} else {
		...
	}

	preSetupHook
	if workspaceType = Code {
		...
	}

	config = getOrCreate
	modConfigCb(config)
	writeConfig
	postSetupHook

}
```

- [[../packages/plugin-core/src/test/testUtilsV3.ts#^eveqm680bwxo]]

```ts
setupBeforeAfter(beforeHook) {
	// see [[../packages/plugin-core/src/vsCodeUtils.ts#^7a83pznb91c8]]
	beforeEach {
		opts?.beforeHook()
	}

	afterEach {
		HistoryService.clearSubscriptions()
		opts?.afterHook()
		sinon.restore()
	}
}
```
