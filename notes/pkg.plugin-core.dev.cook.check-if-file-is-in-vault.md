---
id: i3nlaob2136926urb47puez
title: Check If File Is in Vault
desc: ''
updated: 1663295246396
created: 1663295239763
---

- see src/views/DendronTreeViewV2.ts
```ts
const uri = editor.document.uri;
const basename = path.basename(uri.fsPath);
const ws = getWS();
if (!ws.workspaceService?.isPathInWorkspace(uri.fsPath)) {
  return;
}
```