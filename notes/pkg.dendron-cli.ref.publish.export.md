---
id: mz3m5vpqdz05pr7rv54zsvs
title: Expo
desc: ''
updated: 1667520981311
created: 1667520864172
---

![[pkg.dendron-cli.ref.publish#base]]


```ts
case PublishCommands.EXPORT: {
    ...
    build
    export
}

export {
    startNextExport
}
```

- [[../packages/pods-core/src/builtin/NextjsExportPod.ts]]

```ts
npm run export
```

- [[../packages/nextjs-template/package.json]]
```json
    "export": "npm run build && next export",
```