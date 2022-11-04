---
id: pKRMaVeLAW1mHKaT3kFGL
title: Init
desc: ""
updated: 1667520743092
created: 1642271198299
---

## Lifecycle

- [[../packages/dendron-cli/src/commands/publishCLICommand.ts#L164]]

```ts
init(wsRoot) {

	nextPath := wsRoot
	nextPathExists := nextPath

	if nextPathExists {
		@_updateNextTemplate
	} else {
		// see [[Init|dendron://dendron.docs/pkg.dendron-cli.ref.publish.init#^UUkBpHtLmKCK]]
		@_initialize
	}

}
```

- update template

```ts
_updateNextTemplate {
	updateTemplate
	_installDependencies
}
```

- initialize ^UUkBpHtLmKCK

```ts
_initialize {
	_cloneTemplate
	_installDependencies
}
```


build
```json [[../packages/nextjs-template/package.json]]
"build": "npm run copy:robotstxt && next build",
```