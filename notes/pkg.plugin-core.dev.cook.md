---
id: jtHIVXVpyHwRiq3tJBbfq
title: Cook
desc: ''
updated: 1663295717033
created: 1634590309804
---

## Workspace

- [[Add New Config|dendron://dendron.docs/pkg.common-all.dev.cook#add-new-config]]
- [[Bundle Files with Code Plugin|dendron://dendron.docs/pkg.plugin-core.dev.cook.bundle-files-with-code-plugin]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.add-a-web-ui-component]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.check-for-workspace-trust]]

## Editor
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.programatically-insert-text]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.executing-logic-on-editor-change]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.get-line-offset-of-frontmatter]]

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
- [[Create Note from Arbitrary Text|dendron://dendron.docs/pkg.plugin-core.dev.cook.create-note-from-arbitrary-text]]
- [[Deprecate Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.deprecate-command]]
- [[Developing the Web Extension|dendron://dendron.docs/pkg.plugin-core.dev.cook.web-extension]]
- [[Install Extension Using CLI|dendron://dendron.docs/pkg.plugin-core.dev.cook.install-extension-using-cli]]
- [[Remove a Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.remove-a-command]]
- [[Update Pkg Json|dendron://dendron.docs/pkg.plugin-core.dev.cook.update-pkg-json]]
- [[Update Plugin Config|dendron://dendron.docs/pkg.plugin-core.dev.cook.update-plugin-config]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.prompt-user-for-input]]
- [[dendron://dendron.docs/pkg.plugin-core.dev.cook.listening-for-copy-event-in-webview]]

## Lookup

![[dendron://dendron.docs/pkg.plugin-core.t.lookup.cook]]


## Views


### Get the line offset of the frontmatter

### Use DevTrigger Command for development

[DevTriggerCommand](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/DevTriggerCommand.ts) is available to be invoked from Command Palette while in Development Mode.

You can use this command for development purposes when need to trigger some arbitrary piece of code by placing it into `execute()` function and invoking the `Dendron:Dev: Dev Trigger`.

Just make sure to remove your code from the `execute()` prior to putting up your pull request (unless your pull request is marked as draft to invoke some piece of code you put up in DevTrigger to get feedback on).

### Create a pseudo-note for a non-note file

![[Create Note from Arbitrary Text|dendron://dendron.docs/pkg.plugin-core.dev.cook.create-note-from-arbitrary-text]]
