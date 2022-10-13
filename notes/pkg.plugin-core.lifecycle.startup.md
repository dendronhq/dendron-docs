---
id: 8d09cc3f-25e3-42a2-ac86-82806c0c8c65
title: Startup
desc: ''
updated: 1656951370416
created: 1610160007286
---

## Summary

- check if we are in a dendron workspace
  - workspace can be a code workspace (a .code-workspace file) or a native workspace (folder with dendron.yml)
- depending on what sort of workspace we're in, Dendron will instantiate either a Dendron[Native|Code]Workspace
  - if multiple folders have `dendron.yml`, dendron will resolve to the first one found. logic [here](https://github.com/dendronhq/dendron/blob/6035eed562eb3eb38de50722b1185927eb54a7c8/packages/plugin-core/src/_extension.ts#L264-L264)
- start engine server (local server that does indexing)
  - the engine server is spawned in a separate process
  - NOTE: if in DEV mode (when launching plugin using vscode build task), we do not spawn a separate process
- reload workspace (connect to the local server)
- activate file watchers

## Components

- [[Engine API Service|dendron://dendron.docs/pkg.plugin-core.ref.engine-api-service]]

## Steps

### Dendron Workspace Created

An instance of DendronWorkspace is created near the beginning of activation. This is a singleton god object that exists as long as Dendron is running. The only requirement for initialization is the location of Dendron's workspace root. Example initilization below

```ts
new DendronCodeWorkspace({
  wsRoot: path.dirname(DendronExtension.workspaceFile().fsPath),
  logUri: context.logUri,
  assetUri,
});
```

Keep in mind that with [[Native Workspaces|rfc.31-native-workspace]],
the root of the VSCode workspace may not be the root of the Dendron workspace.
If the `dendron.yml` file is located in a subdirectory of the root, then that
directory is the root for Dendron. Use `findWSRootInWorkspaceFolders` to find
the actual root.

### Check for workspace

- [[../packages/plugin-core/src/_extension.ts]]

```ts
_activate {
    stateService := new StateService
    initializeSentry
    ws := DendronExtension.getOrCreate
    _setupCommands
    _setupLanguageFeatures

    extensionInstallStatus :=
    if extensionInstallStatus = INITIAL_INSTALL
        MetadataService.setInitialInstall

    // do this if we're in a dendron workspace
    if isDendronWorkspace {
        activator = new WorkspaceActivator
        activator.activate

        // do logic depending on if its native workspace vs code workspace
        ...

        setupTraits
        setupSegmentWithCacheFlush

        // see [[Migration|dendron://dendron.docs/pkg.dendron-engine.t.migration]]
        changes = runMigrationsIfNecessary

        if !changes {
            runConfigMigrationIfNecessary
        }

        Sentry.setUser
        wsService.initialize
        wsService.writeMeta

        // ---
        showInitProgress {
            port = startServerProcess
            updateEngineAPI(port)

            if !webUI {
                treeView = new NativeTreeView
                context.subscriptions.push treeView
            }
            ws.reloadWorkspace // 312
            // custom set context logic
            ...

            MetadataService.setDendronWorkspaceActivated
            _setupCommands
            AnalyticsUtils.identify

            if InstallStatus.INITIAL_INSTALL warnIncompatibleExtensions
            ws.activateWatchers // [[Lifecycle|dendron://dendron.docs/pkg.plugin-core.ref.watchers.arch.lifecycle]]
            togglePluginActiveContext

        }
    } else {
        autoInit = new FileAddWatcher
    }

    // initial install logic
    if InstallStatus.INITIAL_INSTALL {
        ...
    }

    showWelcomeOrWhatsNew

    if DendronExtension.isActive {
        HistoryService.instance().add(extension, activate)
        // If automaticallyShowPreview = true, display preview panel on start up
    }

}
```

### Reload Workspace

- src/commands/ReloadIndex.ts

```ts
// 49
reloadWorkspace {
    ws.reloadWorkspace
    if isFirstInstall {
        showTutorial
    }
    postReloadWorkspace
    emit(extension, initialized)
}
```

#### postReloadWorkspace

```ts
postReloadWorkspace {
    previousWsVersion = config.get(WORKSPACE_STATE.WS_VERSION)

    if previousWsVersion == 0.0.0 {
        execute(Upgrade)
        config.set(WORKSPACE_STATE.WS_VERSION, ws.version)
    } else {
        newVersion :=
        if (newVersion > previousWsVersion) {
            execute(Upgrade)
            config.set(WORKSPACE_STATE.WS_VERSION, ws.version)
            emit(extension, upgraded)
        }
    }

}

```

### showWelcome

```ts
showWelcomeOrWhatsNew {
    switch(extensionInstallStatus) {
        case INITIAL_INSTALL {
            showWelcome
        }
        ....
    }
}

showWelcome {
    welcomeContent :=
    view = createWebviewPanel(welcomeContent)

    view.on(msg => {

        switch(msg {
            case initializeWorkspace {
                LaunchTutorialWorkspaceCommand.run
            }
        })

    })
}
```

- [[Setup Workspace|dendron://dendron.docs/pkg.plugin-core.ref.setup-workspace]]

## Reference

### getOrCreate

```ts
if !_DendronWorkspace
    _DendronWorkspace = new DendronWorkspace
```

```ts
constructor {
    @_setupCommands
    ...
}
```

### activator.activate

- [[../packages/plugin-core/src/workspace/workspaceActivater.ts]]

```ts
if (NATIVE) {
  activateNativeWorkspace;
} else {
  activateCodeWorkspace;
}
```

```ts
activateCodeWorkspace {
    new DendronCodeWorkspace
}
```

- [[../packages/plugin-core/src/workspace/baseWorkspace.ts]]

```ts
class DendronCodeWorkspace extends DendronBaseWorkspace {
    constructor {
    }
}
```

### startServerProcess

- file: src/\_extension.ts:
- related: [[launch|pkg.dendron-api-server.internal#launch]]

```ts
startServer {
    maybePort :=
    if !maybePort {
        launch()
    }
}
```

### updateEngineAPI

- src/utils.ts

```ts
WSUtils.updateEngineAPI {
    EngineAPIService.updateEngineAPI(
        vaults,
        wsRoot
    )
}
```

```ts
class EngineAPIService {
    create {
        const vaults =
            DendronWorkspace.instance().vaults?.map((ent) => ent.fsPath) || [];
        DendronEngineClient.create({ vaults, ws, port, history })
    }
}
```

### workspace.vaults

```ts
get vaults {

}

```

### ws.reloadWorkspace

```ts
executeCommand(RELOAD_INDEX);
```

### setupLanguageFeatures

```ts
_setupLanguageFeatures {

    registerReferenceProvider;

    registerDefinitionProvider;

    registerHoverProvider;

    registerFoldingRangeProvider

}
```
