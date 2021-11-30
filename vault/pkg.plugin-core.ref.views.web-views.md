---
id: tYCf6nhm7joy1chpSCtXj
title: Web Views
desc: ''
updated: 1638232297416
created: 1638232297416
---

## Architecture

All views are held by the [[pkg.plugin-core.t.workspace]]


## Lifecycle


1. We initialize a webview with following javascript

```js

vscode = acquireVsCodeApi()
...

window.addEventListener("message", (e) => {
    switch(message.source) {
        case "webClient"
    }
});
```

...

1. Check if engine has been initialized, if not, initialize it

- location: common-frontend/src/features/engine/hooks.ts
```ts
useEngine(engineState) {
    if (engineState = "idle" && isEmpty(engineState.notes)) dispatch(initNotes)
}
```