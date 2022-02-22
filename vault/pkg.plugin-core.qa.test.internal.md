---
id: tT87jLMqkDJYjSwfDVdbG
title: Dendron Extension Testing Internals
desc: ''
updated: 1645146497782
created: 1645146115173
---

## Details

To test VSCode, we mock the vscode extension object to let us simulate test in new workspaces. You can see the testing harness [here](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsV3.ts#L464:L464).

Writing tests is described [[here|dendron://dendron.docs/pkg.plugin-core.qa.test#writing-tests]]

This isn't perfect as there are still certain features we cannot test (eg. `workspace.onDid*` events - these rely watching a current workspace which is not actually constructed for testing). In these cases, we currently implement workarounds like [[Exposing private methods to tests|dendron://dendron.docs/dev.process.qa.test#exposing-private-methods-to-tests]].