---
id: ZB2Rkb66lLlw1adVKiSXj
title: Run
desc: ''
updated: 1660295829098
created: 1637876951989
---

## Running Local Dendron Extension via Launch Task from source
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

While installation instructions are the same, there are some differences when running and testing code which are documented here.

Use the `Run Extension:Remote` launch task to start the extension. 

## Running Dendron in Web Extension Host

This can be done in two ways:

### Inside Deskop VS Code (use for debugging)

Run the `launch.json` task called `Run Web Extension in VS Code`. This will launch the web extension flavor in Dendron but in a local VS Code instance.

**Note: Several Gotchas while running in this mode:**
- If you're using VSCode Insiders and having issues, use regular VS Code instead. There have been some environment issues when running on Insiders.
- Some vscode environment variables will be different in this mode than on true browser experiences like `vscode.dev` or `github.dev`.  Particularly, `shellExecutionSupported` and `virtualWorkspace` may be different, which may cause some commands to show up when they regularly shouldn't. These variables are used inside `package.json` to hide commands which aren't supported in the web version. See [vscode docs here](https://code.visualstudio.com/api/extension-guides/web-extensions#migrate-extension-with-code) for more info.
- If you change workspaces while debugging, stop the debugger instance and restart it. It appears there's a bug where upon reload the _Local_ version of Dendron will launch instead of the Web Extension.

### In a Browser Window

In plugin-core, first run the yarn task `yarn compile-web`, followed by `yarn open-in-browser`. This should launch a browser window with Dendron loaded.

### Additional Info

For more info, see [VS Code Docs - Test your Web Extension](https://code.visualstudio.com/api/extension-guides/web-extensions#test-your-web-extension).