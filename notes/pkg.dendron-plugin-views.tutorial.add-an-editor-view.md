---
id: 9t1MYmijXp0K8Be9zJRiz
title: Add an Editor View
desc: ''
updated: 1644372347926
created: 1644371901175
---

## Summary

This goes over how to add an [[Editor View|dendron://dendron.docs/pkg.dendron-plugin-views.concepts#editor-view]]

## Adding a new Editor View

- NOTE: in the following, we show the example of adding a `HELLO_VIEW` editor view
- details: see [[render|dendron://dendron.docs/pkg.dendron-plugin-views.lifecycle#render]] to see explanation on how these components interact

### Creating the view

1. Create a new component
   - eg: `src/components/HelloPage.tsx`
   ```tsx
   import { DendronComponent } from "../types";
   const HelloPage: DendronComponent = (props) => {
     return <h1> Hello </h1>;
   };
   export default HelloPage;
   ```
1. Create a new view

   - eg. src/views/HelloPageView.tsx

   ```tsx
   import { renderOnDOM } from "../bootstrap";
   import HelloPage from "../components/HelloPage";

   renderOnDOM(HelloPage, {});

   // dummy export to avoid compiler issues
   export default HelloPage;
   ```

### Add view to path

1. Add view to `paths.js`
   - this will export the view as a separate javascript bundle
   ```js
   appPages: {
       ...,
       helloView: resolveApp("src/views/HelloPageView"),
   },
   ```

## Integrate the view with the plugin

1. Add new enum to `DendronHelloViewKey`
   ```ts
   export enum DendronWebViewKey {
       ...,
       HELLO_VIEW = "dendron.hello-view",
   }
   ```
1. Edit description to `EDITOR_VIEWS`
   - IMPORTANT: the `bundleName` has to match exactly the key in `appPages` from earlier
   ```ts
   EDITOR_VIEWS = {
       ...,
       [DendronHelloViewKey.HELLO_VIEW]: {
           desc: "Hello View",
           label: "Hello View",
           bundleName: "helloView",
           type: "webview",
       },
   }
   ```

## Create a command to bring up the view

1. Create a new command to bring up the editor view
   - see [[pkg.plugin-core.dev.cook|pkg.plugin-core.dev.cook.add-new-command#add-a-new-command]]
1. Update command with webview logic

   - the following should go into `execute`

   ```ts
   // check if panel exists
   const existingPanel = ext.getWebView(DendronWebViewKey.HELLO_VIEW);
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
   const { bundleName: name, label } = getWebHelloViewEntry(
     DendronHelloViewKey.HELLO_VIEW
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
   ext.setWebView(DendronWebViewKey.HELLO_VIEW, panel);

   // remove webview from workspace when user closes it
   // this prevents throwing `Uncaught Error: Webview is disposed` in `ShowPreviewCommand#refresh`
   panel.onDidDispose(() => {
     ext.setWebView(DendronWebViewKey.HELLO_VIEW, undefined);
   });
   ```

## Run the plugin

See [[Developing in IDE Mode|dendron://dendron.docs/pkg.dendron-plugin-views.quickstart#developing-in-ide-mode]] to run this inside the IDE
