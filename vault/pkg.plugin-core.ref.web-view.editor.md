---
id: tYCf6nhm7joy1chpSCtXj
title: Editor View - Web View Implementation
desc: ""
updated: 1650561913658
created: 1638232297416
---

## Summary

This describes the [[Web View Implementation|dendron://dendron.docs/pkg.plugin-core.ref.views#web-view-implementation]] of an [[Editor View|dendron://dendron.docs/pkg.plugin-core.ref.views#editor-view]].

## Lifecycle

![[dendron://dendron.docs/pkg.plugin-core.ref.views#lifecycle,1:#*]]

### Initialize a View

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
    }
}
```

- related:
  - [[getLocalResourceRoots|dendron://dendron.docs/pkg.plugin-core.ref.web-view#getlocalresourceroots]]

### Copying

Dendron does some extra logic when a copy event is detected in a webview to strip out theming related CSS (otherwise, users copying from a dark theme would also paste the dark background when pasting).

Logic

```ts
addEventListener(copy, e => {
    htmlSelection = getHTMLOfSelection
    copyToClipboard htmlSelection
})

copyToClipboard {
    // strip styling and create blob
    blob :=

    item = new ClipboardItem(blob)
    clipboard.write(item)

```

For full details, see the [[PR|dendron://dendron.docs/pkg.plugin-core.ref.web-view.editor#^wOEBfg2aXhwp]].

## Implementations

- [[Note Preview|dendron://dendron.docs/pkg.dendron-plugin-views.ref.note-preview]]

## Lookup

- [[Plugin View Lifecycle|dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle]]: Lifecycle of the view component of a web view

## Past Tasks

- [enhance: strip out theming on copy and paste from preview by nickolay-kondratyev · Pull Request #1807 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1807) ^wOEBfg2aXhwp
- [enhance/fix clipboard by kevinslin · Pull Request #2152 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/2152)
