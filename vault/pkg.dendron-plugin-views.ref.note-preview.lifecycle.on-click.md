---
id: it1DPNNaNrGGdrSshW1u9
title: On Click
desc: ""
updated: 1644429656028
created: 1644429394509
---

## Summary

User clicks on a link

## Initialization

- [[../packages/plugin-core/src/components/views/PreviewPanel.ts]]

```ts
webview.onDidReceiveMessage(msg) {
	switch(msg.type) {
		case NoteViewMessageEnum.onClick {
          @_linkHandler.onLinkClicked
		}
	}

}
```

- [[../packages/plugin-core/src/components/views/PreviewLinkHandler.ts]]

```ts
onLinkClicked {

}
```
