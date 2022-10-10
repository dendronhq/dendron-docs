---
id: 2b87ceb3-2a90-4dee-ab8e-980172ecaef1
title: Errors
desc: ''
updated: 1665393165017
created: 1620879891784
---

## Summary

This page describes how we handle errors in Dendron.

- Any error that is throw by Dendron should extend from [`DendronError`](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/error.ts). 
- In [[user.sam.journal.2022.09.20.introduce-neverthrow]] a new approach has been introduced when dealing with errors. See [[Result|dendron://dendron.docs/dev.process.errors#result-neverthrow]] for details.

### Details

- If a function can return multiple errors, use `DendronCompositeError` to wrap up multiple errors. If you need to look into the errors inside a `DendronCompositeError`, use [errorsList()](https://github.com/dendronhq/dendron/blob/26b3a00b1339cdbb58da0e5d063b87d66a4d06e3/packages/common-all/src/error.ts#L217) to grab the errors inside the composite error.
- When returning errors from a server, use `error2PlainObject` to extract the common properties
- When logging errors, use `stringifyError` (regular `stringify` will [omit fields](https://stackoverflow.com/questions/18391212/is-it-not-possible-to-stringify-an-error-using-json-stringify))
- If an error is non-fatal, meaning the function was able to complete despite the error (or that the error is a warning), then set the error severity to `ERROR_SEVERITY.MINOR`. Not all but some code like engine initialization will recognize this and consider the operation successful.

If you need additional well-typed information with an error, or you're trying to handle a specific type of error, you can do so by extending the `DendronError` class.
For an example see [errorTypes.ts](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/errorTypes.ts) and [ReloadIndex](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/ReloadIndex.ts#L242).


## RespV3

Note: This is depricated! Use [[Result|dendron://dendron.docs/dev.process.errors#result-neverthrow]]

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

- NOTE: typescript isn't very smart about destructuring. for type narrowing to work, you can't destructure the argument
  - bad
  ```ts
  const {error, data} = someFunc
  if (error) {
    throw 
  }
  // COMPILE ERROR
  data.value
  ```
  - good
  ```ts
  const resp = someFunc
  if (resp.error) {
    throw 
  }
  resp.data.value
  ```

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

## Result (using `neverthrow` package)

The `Result` is an alternative to `RespV3` and should be considered as the new way to handle errors. They are similar in the way that both provide an failure and success track but are different in `Result` having properties that allows for more precision and accuracy while also improve the ergomonics when working with errors. Main differences are that `Result`:
  - is a [discriminated union](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#discriminated-unions) type, therefor allows for type narrowing.
  - treats errors even more as a first-class citizen by which errors are not treated as an exception but rather a form of data/information like any other data. This is done using a two-tack system
  - provides for utils to easily wrap/unrwap, map and capture/ensure/safeguard.
  - is `thenable` meaning it behaves exactly like a native `Promise<Result>` (`ResultAsync` in this case)

For a better grasp of the concept read https://github.com/supermacro/neverthrow/wiki/Introduction:-Type-Safe-Errors-in-JS-&-TypeScript-(10-minute-read)


### Examples

#### Basic

##### Synchronous API

`Result` is defined as follows:

`type Result<T, E> = Ok<T, E> | Err<T, E>`

`Ok<T, E>`: contains the success value of type `T`

`Err<T, E>`: contains the failure value of type `E`

```ts
import { ok, err } from "@dendronhq/common-all"

// something awesome happend

const yesss = ok(someAesomeValue)

// moments later ...

const mappedYes = yesss.map(doingSuperUsefulStuff)

if (mappedYes.isOk()) {
  doStuffWith(mappedYes.value)
} else {
  doStuffWith(mappedYes.error)
}
```

##### Asynchronous API

Asynchronous methods can return a `ResultAsync` type instead of a `Promise<Result>` in order to enable further chaining.

`ResultAsync` is `thenable` meaning it behaves exactly like a native `Promise<Result>`: the underlying `Result` can be accessed using the `await `or `.then()` operators.

This is useful for handling multiple asynchronous apis like database queries, timers, http requests, ...

```ts

import { ResultAsync, IDendronError } from "@dendronhq/common-all"

// lets create a synchronous method that returns a `ResultAsync
function createNote(note: Note): ResultAsync<Note, IDendronError> {
	return ResultAsync.fromPromise(createNote(note), () => new Error('Note creation error'))
}

// We can now call the method above
const asyncResult = createNote({ id: '123', body: 'foo'}) // asyncRes is a `ResultAsync<Note, Error>`

// We can chain the ResultAsync to build another ResultAsync
const asyncResult2 = asyncRes.map((note: Note) => note.body) // asyncRes2 is a `ResultAsync<string, Error>`

// A ResultAsync acts exactly like a Promise<Result>
// It can be transformed back into a Result just like a Promise would:

// using await
const res = await asyncResult
// res is a Result<string, Error>
if (res.isErr()) {
  console.log('Oops fail: ' + res.error.message)
} else {
  console.log('Successfully created note ' + res.value)
}

// using then
asyncResult2.then(res => {
  // res is Result<string, Error>
  if (res.isErr()) {
    console.log('Oops fail: ' + res.error.message)
  } else {
    console.log('Successfully created note ' + res.value)
  }
})

```

#### Accessing the value inside a `Result`

```ts
import { ok, err } from "@dendronhq/common-all"

const example1 = ok(123)
const example2 = err('abc')

// neverthrow uses type-guards to differentiate between Ok and Err instances
// Mode info: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
if (example1.isOk()) {
  // using type guards, we can access an Ok instance's `value` field
  doSomethingUseful(example1.value)
} else {
  // because of type guards
  // typescript knows that example1 is an Err instance and thus has a `error` field
  handleError(example1.error)
}

if (example2.isErr()) {
  // you now have access to example2.error
  handleError(example2.error)
} else {
  // you now have access to example2.value
  doSomethingUseful(example2.value)
}
```

#### Wrap 3rd party code to localize exceptions

The JavaScript community has agreed on the convention of throwing exceptions. As such, when interfacing with third party libraries it's imperative that you wrap third-party code in try / catch blocks.

```ts
import { Result, ResultAsync } from 'neverthrow'

// Synchronous
const safeJsonParse = Result.fromThrowable(
  JSON.parse, 
  (error: unknown) => intoError(error)
)
// `safeJsonParse` has a type of Result<Json, Error>

// Async
const getById = (id: string) => ResultAsync.fromPromise(
  fetch(`/some_url/${id}`),
  (error: unknown) => intoError(error)
)
// `getById` has a type of ResultAsync<Data, Error>
```

####  Creating more intuitive/context-aware types 

```ts
import { Result, IDendronError } from "@dendronhq/common-all"

type MyContextResult<T> = Result<T, IDendronError>;
```

- (https://github.com/supermacro/neverthrow/wiki/Introduction:-Type-Safe-Errors-in-JS-&-TypeScript-(10-minute-read)#making-your-types-more-intuitive)

### References

- [API Reference](https://github.com/supermacro/neverthrow#api-documentation)
- [Wiki from neverthrow](https://github.com/supermacro/neverthrow/wiki)
- topics
  - how to distinguish between "Expected Errors" and "Unexpected, or Irrecoverable Errors"
    - https://github.com/supermacro/neverthrow/issues/113#issuecomment-680070531
    - https://github.com/supermacro/neverthrow/wiki/Error-Handling-Best-Practices#distinguish-between-expected-errors-and-unexpected-or-irrecoverable-errors
  - Thinking in Types and Pipelines
    - [https://vimeo.com/113707214](https://vimeo.com/113707214)


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

## Past Discussions
- [[Error Handling|dendron://private/user.kevin.journal.2022.04.26.m.error-handling]]
