---
id: j1bamcfegu6jqg8f52oo8vi
title: Init View
desc: ''
updated: 1656523805265
created: 1650647458936
---

### Register command
- [[extension|../packages/plugin-core/src/_extension.ts#L1051]]

We register the ShowPreview command and pass in a preview panel factory to hold the vscode panel

```ts
vscode.registerCommand(
    ShowPreviewCommand.new(PreviewPanelFactory.create(workspace));
)
```

### Initialize Preview Factory
- [[PreviewFactory|../packages/plugin-core/src/components/views/PreviewViewFactory.ts]]

```ts
create {
    if !PreviewPanelFactory._preview { 
        PreviewPanelFactory._preview = new PreviewPanel
    }

}
```

### Initialize a Panel
- [[../packages/plugin-core/src/components/views/PreviewPanel.ts]]

```ts
new PreviewPanel {
    // write up 
}
```

### Show Panel
Panel is created. Handles messages from the webview and will update the editor on certain preview events

- example: [[../packages/plugin-core/src/components/views/PreviewPanel.ts]]

```ts
class PreviewPanel {

    show {
        VIEW_KEY := "Preview"
        const { bundleName: name } = getWebEditorViewEntry(DendronEditorViewKey[KEY]);
        const webViewAssets = WebViewUtils.getJsAndCss(name);
        createWebviewPanel(
            localResourceRoots: WebViewUtils.getLocalResourceRoots
        )
        getWebviewContent
        setupCallbacks
    }

    setupCallbacks {
        // handle messages from the webview
        _panel.webview.onDidReceiveMessag(msg => {
            switch(msg.type)
                case MESSAGE_DISPATCHER_READY {
                    ...
                }
                case ON_CLICK {
                    ...
                }
                ...
        })
    }
}
```

### Rendering
![[dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle.render]]

- related:
  - [[getLocalResourceRoots|dendron://dendron.docs/pkg.plugin-core.ref.web-view#getlocalresourceroots]]
