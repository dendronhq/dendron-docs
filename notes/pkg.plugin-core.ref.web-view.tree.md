---
id: 56duiQ7JImvrplRYK6lt4
title: Tree Webview
desc: ""
updated: 1640644622472
created: 1640644622472
---

## Summary

This describes the [[Web View Implementation|dendron://dendron.docs/pkg.plugin-core.ref.views#web-view-implementation]] of a [[Tree View|dendron://dendron.docs/pkg.plugin-core.ref.views#tree-view]]

## Lifecycle

![[dendron://dendron.docs/pkg.plugin-core.ref.views#lifecycle]]

### Initialize

During activation, Dendron initializes all views

- [[../packages/plugin-core/src/workspace.ts]]

```ts
setupViews {
	provider = new DendronTreeViewV2
	window.registerWebviewViewProvider(provider)
}
```

Individual views will initialize by calling `resolveWebviewView`

```ts
resolveWebviewView(webviewView) {
	// connect view to static assets
	prepareTreeView(webviewView)

	// setup listeners for events
	webviewView.webviewView.webview.onDidReceiveMessage(...)
}
```

## Implementations

- [[Tree View|dendron://dendron.docs/pkg.dendron-plugin-views.ref.tree-view]]
