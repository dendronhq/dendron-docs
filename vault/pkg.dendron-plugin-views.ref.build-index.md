---
id: HMjObaeOxyplmMm4ubrb0
title: Build Index
desc: ""
updated: 1640819835100
created: 1636430801305
---

## Summary

- status: [[tags.stage.seed]]

This describes the `scripts/buildIndex.js` logic which is used to help develop plugin views in [[browser mode|pkg.dendron-plugin-views.concepts#browser-mode]].

See [[../packages/dendron-plugin-views/scripts/buildIndex.js]] for logic

## Lifecycle

### Initialization

```ts
onLoad {
	applyTheme(document.body.className)
}

applyTheme(theme) {
	window.currentTheme := theme
	...

	// css link of new theme
	link := theme
	document.head.appendChild link

}
```
