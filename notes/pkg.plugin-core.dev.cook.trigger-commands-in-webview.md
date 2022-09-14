---
id: 846l1awteav50dmmn1bd285
title: Trigger Commands in Webview
desc: ''
updated: 1663172460591
created: 1663172455301
---

A number of our commands use simple webviews that are rendering Markdown content to show a preview of an operation. See [[fixKeybindingConflicts|dendron://dendron.dendron-site/dendron.topic.doctor#fixkeybindingconflicts]] for example.

Sometimes we want to simulate a button click within the rendered markdown, and an easy way to do this is to utilze [command URIs](https://code.visualstudio.com/api/extension-guides/command#command-uris).

This lets you link to arbitrary commands (built-in and extension-contributed) using a standard Markdown link.

You can see an example usage in `KeybindingUtils.showKeybindingConflictPreview`, which uses command URIs to trigger `workbench.action.openGlobalKeybindingsFile`, `workbench.action.openDefaultKeybindingsFile`, and `dendron.copyToClipboard` commands.

If you need to add a new command only to use it as described here, also make sure you [[set proper enablement of them|dendron://dendron.docs/pkg.plugin-core.dev.cook#^fk7pnjllh594]]