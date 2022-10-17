---
id: SuyIgH44sJD5P3dRVBaVZ
title: Dendron Plugin Views Quickstart
desc: ""
updated: 1666042774505
created: 1635701411866
---

To see a video walkthrough of everything, go [here](https://www.loom.com/share/fe42545802014e16b339cad72ed12e7a)

## Prerequisites

1. Finish steps from [[Dendron Plugin Quickstart|dendron://dendron.docs/pkg.plugin-core.quickstart]]
1. Launch [[Test Workspace|dendron://dendron.docs/dev.ref.test-workspace]]

## Video Walkthroughs
- [Creating new component in Dendron Plugin Views](https://youtu.be/2opH8stcHhw)

## Steps

- NOTE: unlike all other packages in the monorepo, running the watch script [^watch] will not compile code inside this pacakge

When working on plugin views, there are two modes of development: browser and IDE.

### Developing in Browser Mode

![[dendron://dendron.docs/pkg.dendron-plugin-views.concepts#^FIQf5ZoJXIBP:#*]]

1. Make sure that [[dev.ref.test-workspace]] is running on port `3005`
1. Navigate to package
   ```sh
   cd $DENDRON_REPO_ROOT/packages/dendron-plugin-views
   ```
1. Run
   ```sh
   # this builds stylesheets and generates a dynamic index.html
   yarn setup
   env REACT_APP_VIEW_NAME=$VIEW_NAME yarn start
   ```
   - NOTE: $VIEW_NAME is anything in `dendron-plugin-views/src/views/*` minus the `.tsx` extension. it is the name of the **Component**, not the file name
     - Dendron will dynamically `require` the module when `yarn start` is called
   - This will open up the browser at localhost:3000. When developing on the browser, Dendron will have some defaults loaded depending on what view you are using.
1. When developing against the browser, you don't have direct access to the workspace. Instead, you'll need to use `window.postMessage` api to simulate vscode actions.
   To do this, open up the developer console (inside browser) and simulate events by pasting the following event:
   ![[dendron://dendron.docs/pkg.dendron-plugin-views.dev.cook#simulate-change-activate-editor-in-browser-mode,1]]

- TIP: to set the theme in browser mode, you can run `env THEME={dark|light} yarn start`
- GOTCHA: if you edit [[../packages/common-server/src/etc.ts]], you'll need to restart the watcher

### Developing in IDE Mode

![[dendron://dendron.docs/pkg.dendron-plugin-views.arch#^FIQf5ZoJXIBP:#*]]

1. After you have made code changes, export all assets by running
   ```sh
   yarn build:dev ^w6jviyyunzqw
   ```
1. After assets are compiled, follow the [[Run|dendron://dendron.docs/pkg.plugin-core.dev#run]] extension for [[pkg.plugin-core]]

[^watch]: [[Dendron Plugin Quickstart|dendron://dendron.docs/pkg.plugin-core.quickstart#^QWJj9cTIcwuX]]
