---
id: tMdsz0dYNj3VgOvNAuEUY
title: Note Preview
desc: ""
updated: 1663173574310
created: 1637109406387
---

## Summary

How the Dendron Note Preview gets launched

## Entry

- [[extension|../packages/plugin-core/src/_extension.ts#L1051]]
  - [[PreviewFactory|../packages/plugin-core/src/components/views/PreviewViewFactory.ts]]
  - [[ShowPreview|../packages/plugin-core/src/commands/ShowPreview.ts#L298]]

## Lifecycle

![[dendron://dendron.docs/pkg.dendron-plugin-views.ref.note-preview.lifecycle]] ^fw9g8dj805z8

## Log Dump

### Calling toggle preview 2x

```json
info {"ctx":"Logger:configure","msg":"exit","logLevel":"debug"}
info {"ctx":"SetupWorkspaceCommand","rootDir":"/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7","skipOpenWs":true,"workspaceType":"CODE"}
info {"ctx":"SetupWorkspaceCommand:postCreateWorkspace","wsRoot":"/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7","wsVault":{"fsPath":".","name":"tmp-83950-CM8m7r0lq3h7","selfContained":true}}
info {"ctx":"_activate","stage":"test","isDebug":false,"logLevel":"debug","logPath":"/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-hvpXsVe2r2iX","extensionPath":"/Users/kevinlin/code/dendron/packages/plugin-core","extensionUri":"/Users/kevinlin/code/dendron/packages/plugin-core","workspaceFile":"/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7/dendron.code-workspace","workspaceFolders":["/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7/notes","/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7"]}
info {"ctx":"DendronExtension","msg":"initialized"}
info {"ctx":"_activate","msg":"initializeWorkspace","wsType":"CODE","currentVersion":"0.101.0","previousGlobalVersion":"0.101.0","extensionInstallStatus":"NO_CHANGE"}
info {"ctx":"WorkspaceActivator.init:postSetupTraits","wsRoot":"/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7"}
info {"ctx":"runMigrationsIfNecessary","changes":[],"workspaceInstallStatus":"INITIAL_INSTALL"}
info {"ctx":"WorkspaceActivator.init:postMigration","wsRoot":"/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7"}
info {"ctx":"WorkspaceActivator.init:postWsServiceInitialize","wsRoot":"/var/folders/1l/h5rmxkhs3ldfr3y5fzkkw2v40000gn/T/tmp-83950-CM8m7r0lq3h7"}
info {"ctx":"startServerProcess","msg":"post-start-server","port":57163,"durationStartServer":19}
info {"ctx":"WorkspaceActivator.init:verifyOrStartServerProcess","port":57163}
info {"ctx":"WorkspaceActivator.init:exit"}
info {"ctx":"_activate:postSetupWorkspace","platform":"darwin","extensions":[{"id":"dendron.dendron"},{"id":"dendron.dendron-paste-image"},{"id":"dendron.dendron-markdown-shortcuts"},{"id":"redhat.vscode-yaml"}],"vaults":[{"fsPath":".","selfContained":true,"name":"tmp-83950-CM8m7r0lq3h7"}]}
info {"ctx":"TreeView:getChildren","msg":"reconstructing tree: enter"}
info {"ctx":"TreeView:getChildren","msg":"reconstructing tree: exit"}
info {"ctx":"dendron.reloadIndex:run","msg":"pre-execute"}
info {"ctx":"ReloadIndex.execute","msg":"enter"}
info {"ctx":"ReloadIndex.execute","durationEngineInit":46}
info {"ctx":"ReloadIndex.execute","msg":"exit"}
info {"ctx":"dendron.reloadIndex:run","msg":"post-execute"}
info {"ctx":"reloadWorkspace","msg":"post-ws.reloadWorkspace"}
info {"ctx":"reloadWorkspace","msg":"exit"}
info {"ctx":"postReloadWorkspace","msg":"same wsVersion"}
info {"ctx":"postReloadWorkspace","msg":"exit"}
info {"ctx":"setupViews","msg":"init:treeViewV2"}
info {"ctx":"setupBacklinkTreeView","msg":"init:backlinks"}
info {"ctx":"WorkspaceActivator:activate","msg":"fin startClient","durationReloadWorkspace":53}
info {"ctx":"showWelcomeOrWhatsNew","version":"0.101.0","previousExtensionVersion":"0.0.0"}
info {"ctx":"refreshBacklinksEngineNoteStateChanged"}
info {"ctx":"refreshBacklinksChangeActiveTextEditor"}
info {"ctx":"refreshBacklinksChangeActiveTextEditor"}
info {"ctx":"test:pre:before:run"}
info {"ctx":"dendron.togglePreview:run","msg":"pre-execute"}
info {"ctx":"PreviewPanel:show"}
info {"ctx":"PreviewPanel:show","msg":"panel does not exist"}
info {"ctx":"PreviewPanel:show:postSetupCallbacks"}
info {"ctx":"PreviewPanel:preReveal"}
info {"ctx":"PreviewPanel:show","note":"preview-test"}
info {"ctx":"PreviewPanel:show","msg":"panel exists"}
info {"ctx":"PreviewPanel:show:pre:Refresh"}
info {"ctx":"PreviewPanel:show:post:Refresh"}
info {"ctx":"dendron.togglePreview:run","msg":"post-execute"}
info {"ctx":"test:post:before:run"}
info {"ctx":"test:pre:run"}
info {"ctx":"dendron.togglePreview:run","msg":"pre-execute"}
info {"ctx":"TogglePreview.execute:pre:panelHide"}
info {"ctx":"PreviewPanel:preDispose"}
info {"ctx":"PreviewPanel:onDidDispose"}
info {"ctx":"PreviewPanel:postDispose"}
info {"ctx":"TogglePreview.execute:post:panelHide"}
info {"ctx":"dendron.togglePreview:run","msg":"post-execute"}
info {"ctx":"test:post:run"}
info {"ctx":"sendRefreshMessage:pre:postMessage"}

```

## Lookup
- [[Editor Webview Lifecycle|dendron://dendron.docs/pkg.plugin-core.ref.web-view.editor#lifecycle]]
- [[Toggle Preview|dendron://dendron.docs/pkg.dendron-plugin-views.ref.toggle-preview]]
- [[../packages/plugin-core/src/components/views/PreviewPanel.ts]]
