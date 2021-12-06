---
id: naGvfhYGH7N0BEmcqc7ET
title: Cook
desc: ''
updated: 1638672249711
created: 1636233555730
---

### Adding a new WebView Panel
- NOTE: in the following, we show the eample of adding a `NOTE_PREVIEW` webview

1. Add new enum to `DendronWebViewKey`
    ```diff
    export enum DendronWebViewKey {
    CONFIGURE = "dendron.configure",
    NOTE_GRAPH = "dendron.graph-note",
    SCHEMA_GRAPH = "dendron.graph-schema",
    + NOTE_PREVIEW = "dendron.note-preview",
    SEED_BROWSER = "dendron.seed-browser",
    }
    ```
1. Create a new command to bring up panel
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
    const name = "notePreview";
    const panel = vscode.window.createWebviewPanel(
        name,
        // visible title
        "Dendron Preview",
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

### Adding a new WebView Tree Panel

Instructions here are similar to [[#adding-a-new-webview-panel]]. Please jump to documentation there for additional details.

1. Add new enum to `DendronTreeViewKey`
1. Add webview to `constants.ts`
    - for `name`: use 
    ```diff
    export const DENDRON_VIEWS = [
    +  {
    +    id: DendronTreeViewKey.CALENDAR_VIEW,
    +    name: "Calendar View",
    +    where: "explorer",
    +    type: "webview",
    +  },
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
    data: {note:{id}},
    source: "vscode",
});
```