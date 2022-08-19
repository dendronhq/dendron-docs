---
id: fgqyzq01lov7ltneu3q0gmj
title: Cook
desc: ''
updated: 1660946052064
created: 1660946047150
---

### subscribeToEngineStateChange

Use this method to subscribe to engine state event changes when working with tests in `plugin-core`. This can be used in situations where the engine state changes asynchorously from test logic (such as from vscode event callbacks)

### Upating the cursor position

- see [this](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/suite-integ/NoteLookupCommand.test.ts)

### Creating notes after engine is started

If your test cases involve creating notes that cannot be done in the hooks of `describeSingleWS`, use `NoteTestUtilsV4.createNoteWithEngine` or `CreateNoteFactory.createWithEngine` in the test methods themselves

- see [this](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/suite-integ/CopyNoteLink.test.ts)

### check if you are running in test mode

```ts
getStage() === test
```