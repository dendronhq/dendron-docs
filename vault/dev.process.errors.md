---
id: 2b87ceb3-2a90-4dee-ab8e-980172ecaef1
title: Errors
desc: ''
updated: 1651775566223
created: 1620879891784
---

## Summary

This page describes how we handle errors in Dendron.

Any error that is throw by Dendron should extend from [`DendronError`](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/error.ts). 

### Details
- If a function can return multiple errors, use `DendronCompositeError` to wrap up multiple errors. If you need to look into the errors inside a `DendronCompositeError`, use [errorsList()](https://github.com/dendronhq/dendron/blob/26b3a00b1339cdbb58da0e5d063b87d66a4d06e3/packages/common-all/src/error.ts#L217) to grab the errors inside the composite error.
- When returning errors from a server, use `error2PlainObject` to extract the common properties
- When logging errors, use `stringifyError` (regular `stringify` will [omit fields](https://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify))
- If an error is non-fatal, meaning the function was able to complete despite the error (or that the error is a warning), then set the error severity to `ERROR_SEVERITY.MINOR`. Not all but some code like engine initialization will recognize this and consider the operation successful.

If you need additional well-typed information with an error, or you're trying to handle a specific type of error, you can do so by using extending the `DendronError` class.
For an example see [errorTypes.ts](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/errorTypes.ts) and [ReloadIndex](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/ReloadIndex.ts#L242).

## RespV3

Use this when working with functions that return data or an error

```ts
type RespV3 = {
      error: IDendronError;
      data?: never;
    }
  | {
      error?: never;
      data: T;
    };
```

This type signature says that that the result can either contain an `error` property or a `data` property but never both at the same time.

This is useful when an error shortcircuits the calling function. 

### Example

```ts

// doFoo returns either an error or the data
function doFoo(): RespV3 {
  ...
  if (error) {
    return {error: new DendronError(...)}
  }

  return {
    data: ....
  }
}


function main() {

  const resp = doFoo();
  if (resp.error) {
    // handle error...
  }

  // if error hasn't happened, we know `data` exists and is valid
  doBar(resp.data)
}

```


## Sentry
We use Sentry to monitor the code for exceptions. You can use Sentry by wrapping
a function using `sentryReportingCallback`. For example:

```ts
export const provideCompletionItems = sentryReportingCallback(
  (document: TextDocument, position: Position) => {
    // ...
  }
);
```

One issue here: the sentry wrapper cause the callback function to lose its `this` value.
If you are passing a method to this function, you must bind the `this` value:

```ts
class Foo {
  private callback() { /* ... */ }

  public setupCallback() {
    const wrappedCallback = sentryReportingCallback(
      this.callback.bind(this)
    );
    // ...
  }
}
```

Otherwise, when the callback function is called the `this` value will be undefined.

- NOTE: if you're interested about sentry initialization setttings, see [[../packages/common-server/src/errorReporting.ts#^4wcl13fw6gub]]

## API

### ERROR_STATUS

These match to common errors in Dendron. You can find the full list [here](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/constants.ts)

### ERROR_SEVERITY

```ts
/**
 * Labels whether error is recoverable or not
 */
export enum ERROR_SEVERITY {
  /**
   * Recoverable 
   */
  MINOR = "minor",
  /**
   * Non-recoverable 
   */
  FATAL = "fatal",
}
```

## Changelog
- https://github.com/dendronhq/dendron/pull/1708/files
