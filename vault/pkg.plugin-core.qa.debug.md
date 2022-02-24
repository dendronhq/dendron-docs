---
id: 626zjfxg91OFbDse
title: Debug
desc: ""
updated: 1645725990785
created: 1627140313776
---

## Breakpoints

- Prerequisites: See [[Running via Launch Task from source|dendron://dendron.docs/pkg.plugin-core.dev.run#running-via-launch-task-from-source]] to see how to run the development version of Dendron from inside the IDE

- GOTCHA: mocha has low timeouts and you might run into tests failing when stepping through them. if you are stepping through a test, you'll want to set the [[timeout|dendron://dendron.docs/pkg.plugin-core.qa.test#timeout]] property to a high number (eg. `1e5`) to avoid this

### Development

For testing [[Dendron Plugin|pkg.plugin-core]], you can set a regular breakpoint inside of VSCode.

For non plugin code, this won't work. The current workaround is to manually add a `debugger;` statement inside the code. The extension will hit it when restarted under the debugger.

### Breakpoints in the Server

The Dendron plugin communicates to the dendron server for most operations. To debug server side code:

![[dendron://dendron.docs/pkg.dendron-api-server.qa.debug#development,1:#*]]

## Verbose Logs

- set in `dendorn.workspace.config`

```json
"dendron.logLevel": "debug",
```
