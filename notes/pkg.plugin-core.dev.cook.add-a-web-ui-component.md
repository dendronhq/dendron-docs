---
id: d8cd5bz9z4kg34se8eo9g6g
title: Add a Web UI Component
desc: ''
updated: 1663295109200
created: 1663295102533
---

1. see [[Create a new Command|pro.dendron-plugin.cook#create-a-new-command]] for creating a new command
2. Add a new entry to [DendronWebViewKey](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/typesv2.ts)
3. in `execute`, create a new webview
   ```ts
     const title = //TODO: add panel title
     const panel = window.createWebviewPanel(
       "dendronIframe", // Identifies the type of the webview. Used internally
       title, // Title of the panel displayed to the user
       ViewColumn.One, // Editor column to show the new webview panel in.
       {
         enableScripts: true,
         enableCommandUris: true,
         enableFindWidget: true,
         localResourceRoots: [],
       }
     );
     resp = WebViewUtils.genHTMLForWebView({
         title: "Dendron Config",
         view: DendronWebViewKey[TODO]
     });
     panel.webview.html = resp;
   ```

Related:

- See [[here|pkg.dendron-next-server.dev#development]] for how to preview and test your web ui.