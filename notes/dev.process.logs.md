---
id: 94z8iDatFMSwl7cQRDcno
title: Logs
desc: ''
updated: 1663517238202
created: 1638828630942
---

## Summary
- #stage.germ

This describes how logging is done throughout the Dendron code base

## Concepts

### JSON Logging

All log information is captured via [json logging](https://www.loggly.com/use-cases/json-logging-best-practices/#:~:text=What%20Is%20JSON%20Logging%3F,the%20form%20of%20an%20array.). This makes it easier to parse

## Log Keys

This describes common keys used for logging. Besides for `ctx`, all other keys are optional

- ctx: name of the current function/class (required)
- msg: human readable message
- {variable}: name of particular variable
- state: "enter", "exit", "{methodName}:[pre]"
    - NOTE: logging state isn't required and should only be employed as needed for functions that are often subject to debugging

```ts
function foo(aBar: number, aBaz: number) {
    const ctx = "foo";
    logger.info({ctx, aBar, aBaz, state: "enter", msg: "foo will be initialized"})

    // more init logic
    ...
    logger.info({ctx, state: "doBar:pre"})
    doBar();
    logger.info({ctx, state: "doBar:post"})

    // more logic
    ...
    logger.info({ctx, state: "exit"})
}
```

- NOTE: when using frontend loggers, the `ctx` is initialized with the logger and there is no need to set it
```ts
function foo(aBar: number, aBaz: number) {
    const logger = createDisposableLogger("foo")
    logger.info({aBar, aBaz, state: "enter", msg: "foo will be initialized"})
    ...
    logger.dispose()
}
```

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

## Related
- [[dendron://dendron.docs/dev.process.logs.testing]]