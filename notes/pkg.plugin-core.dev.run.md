---
id: ZB2Rkb66lLlw1adVKiSXj
title: Run
desc: ''
updated: 1640798361402
created: 1637876951989
---

## Running via Launch Task from source
- Prerequisites: Clone and install dependencies for the plugin as described in [[pkg.plugin-core.quickstart]]

To start an instance of the Dendron with debugging capabilities, Run `Extension: Local (plugin-core)` from the debug panel in vscode

![debugger](/assets/images/start_debugger.gif)

_Note: Running via Run -> Start Debugging will not work unless you've previously targeted `Extension: Local (plugin-core)`_

_Note: To have the changes reflected as you edit the code you need to run the `./bootstrap/scripts/watch.sh` and restart the `Extension: Local (plugin-core)`)_

## Running via Launch Task from webpack
1. Follow steps in [[Webpack|dendron://dendron.docs/pkg.plugin-core.dev.build#webpack]] to build the webpack version of the plugin
2. Open VSCode and use the "Run extension - webpack" task

- TIP: when iterating on changes, as long as you are only making changes in `plugin-core`, you can run `yarn webpack:dev:watch` inside `plugin-core` to test plugin changes with the VSCode Build

## Running Remotely

When developing in VSCode, you can use its [remote development](https://code.visualstudio.com/docs/remote/ssh) to ssh into another machine but keep VSCode as your development frontend.

While installation intsructions are the same, there are some differences when running and testing code which are documented here.

Use the `Run Extension:Remote` launch task to start the extension. 
