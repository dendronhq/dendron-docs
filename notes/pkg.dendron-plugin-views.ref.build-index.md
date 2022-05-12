---
id: HMjObaeOxyplmMm4ubrb0
title: Build Index
desc: ""
updated: 1644518756138
created: 1636430801305
---

## Summary

This describes the `scripts/buildIndex.js` logic which is used to help develop plugin views in [[browser mode|pkg.dendron-plugin-views.concepts#browser-mode]].

## Lifecycle

### Build

We dynamically generate an `index.html` based on the passed in parameters. This lets us build an index for us within [[pkg.plugin-core]] as well as [[pkg.nextjs-template]]

- [[../packages/dendron-plugin-views/scripts/buildIndex.js]]

```ts
out = genVSCodeHTMLIndex;
write(public / index.html, out);
```

- [[../packages/common-server/src/etc.ts]]

```ts
genVSCodeHTMLIndex(opts) {
	return `<html>

	// interpolate a bunch of values
	...

	</html>
	`
}
```

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

### Copy and Paste

When copy and pasting content, Dendron has a listener that intercepts all copy events to apply additional formatting. This happens in [[../packages/common-server/src/etc.ts]].

When a copy event is detected, Dendron creates two clipboard items:

- plaintext
- html

The plaintext clipboard item takes the raw plaintext.

The HTML clipboard item will strip out background color and other properties when copying HTML content (otherwise, pasting into Gmail will also paste in the extension background).
