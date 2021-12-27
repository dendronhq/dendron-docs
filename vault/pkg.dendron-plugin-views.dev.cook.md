---
id: naGvfhYGH7N0BEmcqc7ET
title: Cook
desc: ""
updated: 1639025032144
created: 1636233555730
---

### Adding a new Editor View

- NOTE: in the following, we show the example of adding a `NOTE_PREVIEW` editor view
- details: see [[View Startup|dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle#view-startup]] to see explanation on how these components interact

#### Creating the view

1. Create a new component
   - eg: `src/components/DendronNotePage.tsx`
   ```tsx
   import { DendronComponent } from "../types";
   const DendronNotePage: DendronComponent = (props) => {
       ...
   }
   export default DendronNotePage;
   ```
1. Create a new view

   - eg. src/views/DendronNotePageView.tsx

   ```tsx
   import { renderOnDOM } from "../bootstrap";
   import DendronNotePage from "../components/DendronNotePage";

   renderOnDOM(DendronNotePage, {});

   // dummy export to avoid compiler issues
   export default DendronNotePage;
   ```

1. Add view to `paths.js`
   - this will export the view as a separate javascript bundle
   ```js
   appPages: {
       ...,
       notePreview: resolveApp("src/views/DendronNotePageView"),
   },
   ```

#### Integrate the view with the plugin

1. Add new enum to `DendronEditorViewKey`
   ```ts
   export enum DendronWebViewKey {
       ...,
       NOTE_PREVIEW = "dendron.note-preview",
   }
   ```
1. Edit description to `EDITOR_VIEWS`
   ```ts
   EDITOR_VIEWS = {
       ...,
       [DendronEditorViewKey.NOTE_PREVIEW]: {
           desc: "Note Preview",
           label: "Note Preview",
           bundleName: "notePreview",
           type: "webview",
       },
   }
   ```
1. Create a new command to bring up the editor view
   - see [[pkg.plugin-core.dev.cook#add-a-new-command]]
1. Update command with webview logic

   - the following should go into `execute`

   ```ts
   // check if panel exists
   const existingPanel = ext.getWebView(DendronWebViewKey.NOTE_PREVIEW);
   if (!_.isUndefined(existingPanel)) {
     Logger.info({ ctx, msg: "reveal existing" });
     try {
       // If error, panel disposed and needs to be recreated
       existingPanel.reveal(viewColumn, preserveFocus);
       return;
     } catch (error: any) {
       Logger.error({ ctx, error });
     }
   }

   // create a new view
   // name of the view
   const { bundleName: name, label } = getWebEditorViewEntry(
     DendronEditorViewKey.NOTE_PREVIEW
   );
   const panel = vscode.window.createWebviewPanel(
       name,
       label,
       {
           viewColumn,
           preserveFocus,
       },
       {
           // set this depending on your needs
           enableScripts: true,
           retainContextWhenHidden: true,
           enableFindWidget: true,
           // this whitelists the javascript bundle
           localResourceRoots: WebViewUtils.getLocalResourceRoots(ext.context),
       }
   );
   ...
   const webViewAssets = WebViewUtils.getJsAndCss(name);
   const {wsRoot, port} = getExtension();

   // get webview HTML content
   const html = WebViewUtils.getWebviewContent({
       ...webViewAssets,
       port,
       wsRoot,
       panel,
   });

   // set webview
   const html = WebViewUtils.getWebviewContent({
       ...webViewAssets,
       port,
       wsRoot,
       panel,
   });

   // add webview to the workspace
   ext.setWebView(DendronWebViewKey.NOTE_PREVIEW, panel);

   // remove webview from workspace when user closes it
   // this prevents throwing `Uncaught Error: Webview is disposed` in `ShowPreviewCommand#refresh`
   panel.onDidDispose(() => {
     ext.setWebView(DendronWebViewKey.NOTE_PREVIEW, undefined);
   });
   ```

### Adding a new Tree View

- example of adding a tree view [[here|dendron://dendron.docs/pkg.dendron-plugin-views.ref#^BC7MPxEUDlfB]]

#### Creating the view

Instructions here are similar to [[#adding-a-new-editor-view]]. Please jump to documentation there for additional details.

#### Integrate the view with the plugin

1. Add new enum to `DendronTreeViewKey`
   ```ts
   export enum DendronTreeViewKey {
       ...,
       TREE_VIEW_V2 = "dendron.tree-view",
   }
   ```
1. Edit description to `TREE_VIEWS`
   ```ts
   TREE_VIEWS = {
       ...,
       [DendronEditorViewKey.TREE_VIEW_V2]: {
           ...
       },
   }
   ```
1. Update `constants.ts`

- src/constants.ts
  ```ts
  DENDRON_VIEWS = [
      ...,
      {
          ...treeViewConfig2VSCodeEntry(DendronTreeViewKey.TREE_VIEW_V2),
          where: "explorer",
      },
  ]
  ```

1. Update `package.json`
   ![[Modifying contributes in package.json|dendron://dendron.docs/pkg.plugin-core.dev.cook#modifying-contributes-in-packagejson:#*]]
1. Create the webview
   - see `src/views/DendronTreeViewV2.ts` for an example
1. Initialize webview on start
   ```ts
   DendronExtension {
       ...
       setupViews {
           ...
           const provider = new DendronTreeViewV2();
           vscode.window.registerWebviewViewProvider(
               DendronTreeViewV2.viewType,
               provider,
           )
       }
   }
   ```

### Changing the theme

By default, plugin-views starts with the light theme. You can change this by parssing a `THEME` env variable when starting

```sh
THEME=dark yarn start
```

### Simulate Change Activate Editor in Browser Mode

- TIP: You can change the id to any id inside of [[dev.ref.test-workspace]] to see how different views function

```ts
id = "9eae08fb-5e3f-4a7e-a989-3f206825d490";
window.postMessage({
  type: "onDidChangeActiveTextEditor",
  data: { note: { id } },
  source: "vscode",
});
```
