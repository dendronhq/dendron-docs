---
id: 3EkicwUBDxY9tcZgmfHI1
title: Watchers
desc: ""
updated: 1644893682129
created: 1639350515855
---

## Summary

Different watchers in the code base

### File Changes

File changes are watched by the following watchers:

- [VaultWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/fileWatcher.ts#L65:L65).
- [WorkspaceWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/WorkspaceWatcher.ts#L61:L61)
- [WindowWatcher](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/windowWatcher.ts#L31:L31)

Hooks into `onDidChange`, `onDidCreate` and `onDidDelete` should be added here.

### WorkspaceWatcher

Modify files before saving them

Related:

- [[Workspace Watcher Internal|pkg.plugin-core.internal.workspace-watcher]]

#### onDidChangeTextDocument

- triggerUpdateDecorations

## Changelog

- [chore: preview command enablement by hikchoi · Pull Request #1619 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1619)
