---
id: 4tx5j5u7e22ekz4yzo3xnej
title: Copy Paste
desc: ''
updated: 1650647493432
created: 1650647490939
---


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
