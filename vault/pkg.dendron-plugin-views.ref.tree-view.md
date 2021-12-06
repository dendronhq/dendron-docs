---
id: nFCLMoyruKxzh3E9AJsER
title: Tree View
desc: ''
updated: 1638584832809
created: 1638584697880
---


## Lifecycle

### Startup
- src/workspace.ts
```
setupViews
    provider = DendronTreeViewV2.new
    window.registerWebviewViewProvider(provider)
```

- src/views/DendronTreeViewV2.ts
```ts
constructor {
    window.onDidChangeActiveTextEditor(@onOpenTextDocument)
}

resolveWebviewView(webview) {
    ctx = "DendronTreeViewV2"
    log "enter"
    webview.html = @_getHtmlForWebview
    log "genHtml:post", duration

    webview.onDidReceiveMessage {
        
    }
}
```
