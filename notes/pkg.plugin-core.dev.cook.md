---
id: jtHIVXVpyHwRiq3tJBbfq
title: Cook
desc: ''
updated: 1663295250127
created: 1634590309804
---

## Workspace

- [[Add New Config|dendron://dendron.docs/pkg.common-all.dev.cook#add-new-config]]
- [[Bundle Files with Code Plugin|dendron://dendron.docs/pkg.plugin-core.dev.cook.bundle-files-with-code-plugin]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.add-a-web-ui-component]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.executing-logic-on-editor-change]]

## Commands
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.scope-a-command-or-view-for-dev-env]]
- [[Add New Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.add-new-command]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.add-internal-command]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.trigger-commands-in-webview]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.execute-a-command-programatically]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.add-a-command-in-preview]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.add-new-doctor-command]]

## Utilities
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.use-dendron-preview-for-regular-markdown]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.open-a-note-programatically]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.access-the-clipboard]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.check-if-file-is-in-vault]]

## Index
- [[Add New Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.add-new-command]]
- [[Create Note from Arbitrary Text|dendron://dendron.docs/pkg.plugin-core.dev.cook.create-note-from-arbitrary-text]]
- [[Deprecate Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.deprecate-command]]
- [[Developing the Web Extension|dendron://dendron.docs/pkg.plugin-core.dev.cook.web-extension]]
- [[Install Extension Using CLI|dendron://dendron.docs/pkg.plugin-core.dev.cook.install-extension-using-cli]]
- [[Remove a Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.remove-a-command]]
- [[Update Pkg Json|dendron://dendron.docs/pkg.plugin-core.dev.cook.update-pkg-json]]
- [[Update Plugin Config|dendron://dendron.docs/pkg.plugin-core.dev.cook.update-plugin-config]]

## Lookup

![[dendron://dendron.docs/pkg.plugin-core.t.lookup.cook]]


## Views

### Listening for copy event in webview

- See [Webview: Copy to clipboard within internal IFRAME does not work on macOS · Issue #135017 · microsoft/vscode](https://github.com/microsoft/vscode/issues/135017)


### Check if file is in vault


### Insert Text

- src/commands/InsertNoteCommand.ts

```ts
const editor = VSCodeUtils.getActiveTextEditor()!;
const pos = editor.selection.active;
await editor.edit((builder) => {
  const selection = new Selection(pos, pos);
  builder.replace(selection, txt);
});
```

### Prompt User for Input using Selection

- see [this](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/VaultAddCommand.ts)

### Prompt User for Input using Free Text

- see [this](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/VaultAddCommand.ts)

```ts
let out = await VSCodeUtils.showInputBox({
  prompt: "Path to your new vault (relative to your workspace root)",
  placeHolder: localVaultPathPlaceholder,
});
if (PickerUtilsV2.isStringInputEmpty(out)) return;
```

### Get the line offset of the frontmatter

- A lot of the times you need to offset the line count of the file content of a markdown file so that it takes into account of the prepended frontmatter.
- You can use the utility method `RemarkUtils.getNodePositionPastFrontmatter` to get the position where the first non-frontmatter text starts.
- The return value of this can be converted to VSCode positions with `VSCodeUtils.point2VSCodePosition`

### Use DevTrigger Command for development

[DevTriggerCommand](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/DevTriggerCommand.ts) is available to be invoked from Command Palette while in Development Mode.

You can use this command for development purposes when need to trigger some arbitrary piece of code by placing it into `execute()` function and invoking the `Dendron:Dev: Dev Trigger`.

Just make sure to remove your code from the `execute()` prior to putting up your pull request (unless your pull request is marked as draft to invoke some piece of code you put up in DevTrigger to get feedback on).

### Create a pseudo-note for a non-note file

![[Create Note from Arbitrary Text|dendron://dendron.docs/pkg.plugin-core.dev.cook.create-note-from-arbitrary-text]]

### Workspace Trust

Any feature that causes dynamic code execution (code supplied or modifiable that is outside of the published Dendron extension) **must first check whether the user has enabled [workspace trust](https://code.visualstudio.com/docs/editor/workspace-trust)**. Some examples of this are [[Hooks|dendron://dendron.dendron-site/dendron.topic.hooks]] and [[Traits|dendron://dendron.dendron-site/dendron.topic.traits]].

To check whether workspace trust has been enabled, you can use VSCode's API: `vscode.workspace.isTrusted`. If working in the context of EngineAPIService, there is also a private member that contains the trust information (currently `_trustedWorkspace`).

If your scenario is blocked because the user hasn't enabled workspace trust, please add an notification prompt to the user explaining that the scenario didn't run because the workspace is not trusted.
