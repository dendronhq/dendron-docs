---
id: crp4dyvdx5490q4stwfirwv
title: Return Data from Unified
desc: ''
updated: 1663192547198
created: 1663191974281
---

Sometimes its necessary for unified to return data after parsing. An example would be errors encountered during processing that we don't want to add to the compiled output but still want to pass along to the calling function.

1. initialize the data field with the key and value of the payload data
    ```ts
    let proc = remark()
        ...
        .data("{somePayload}", []);
    ```
2. inside a unified plugin, add data to the passed in payload
    ```ts
    const someData = ...
    const payload = proc.data("{somepayload}")
    payload.push(someData)
    ```
3. when parsing is complete, retrieve the value from the passed in data object
    ```ts
    await proc.processSync("...")
    const payload = proc.data("{somePayload}")
    // do something with payload
    ```

## Example

See how we pass in errors to and from the processor as an example of how to set this up

- [[../packages/unified/src/remark/utils.ts]]
```ts
export function addError(proc: Processor, err: DendronError) {
  const errors = proc.data("errors") as DendronError[];
  errors.push(err);
  // no need to put errors back into proc, it's a mutable array
}
```
