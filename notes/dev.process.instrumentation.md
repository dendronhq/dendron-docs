---
id: shlW7dTga5GKhyncCzfAi
title: Instrumentation
desc: ''
updated: 1655282686194
created: 1644443543459
---

## Summary

This page describes how add instrumentation in Dendron.

## Adding Telemetry

Use [AnalyticUtils.track](https://github.com/dendronhq/dendron/blob/dde66fe33aa0e868086e69f0f8f671c2019fc12e/packages/plugin-core/src/utils/analytics.ts#L126)

Remember to follow the [[Checklist|dendron://dendron.docs/dev.process.instrumentation.checklist]] after adding telemetry.

## Adding telemetry to a built-in VSCode command

There are some API's that permit command execution, but require you to specify the command with a string [command URI](https://code.visualstudio.com/api/extension-guides/command#command-uris). In these situations, you may want to add a marker for a built-in VS Code command.  An example is that you want to track the number of times a user clicks on a `TreeItem`, and the clicking action calls the `vscode.openLink` command.

To add instrumentation in this scenario, use the `InstrumentedWrapperCommand`, which is a command that simply wraps another command and fires a telemetry marker.

Example Uses:
- [Clicking on Help and Feedback Panel Links](https://github.com/dendronhq/dendron/pull/3089/commits/afb311bcbca0cb2e5f73edf66181095757302bc1)