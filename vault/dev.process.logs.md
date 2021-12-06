---
id: 94z8iDatFMSwl7cQRDcno
title: Logs
desc: ''
updated: 1638829145863
created: 1638828630942
---

## Summary
- #stage.germ

This describes how logging is done throughout the Dendron code base

## Rules

### Never Log Note Contents
- when logging, **NEVER** log note contents (we ask users to paste log data when diagnosting issues). when logging a note, use `NoteUtils.toLogObj` to log just the note metadata

Bad:
```ts
const note: NoteProps = ...
Logger.info(note)
```

Good:
```ts
const note: NoteProps = ...
Logger.info(NoteUtils.toLogObj(note))
```

### Never Log Pod Credentials
- when logging pods, never log credentials


Bad:
```ts
plant({config, ...rest}: PodConfig) {
    Logger.info({config})
}
```

Good: Exclude API Tokens
```ts
plant({config, wsRoot, vaults}: PodConfig) {
    Logger.info({wsRoot, vaults, config: _.omit(config, "apiToken")})
}
```

### Log only what you need
- in Dendron, its common to pass in a dictionary object to functions 
    ```ts
    opts: {engine: DEngine, wsRoot: string, vaults: DVault[]}
    ```

Bad: 
```ts
// you never want to log `DEngine` since it contains all notes in the workspace
foo(opts: {engine: DEngine, wsRoot: string, vaults: DVault[]}) {
    Logger.info(opts)
}
```

Good:
```ts
foo(opts: {engine: DEngine, wsRoot: string, vaults: DVault[]}) {
    Logger.info({wsRoot, vaults})
}
```
