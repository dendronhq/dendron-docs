---
id: 2h2y3s7d4txzokez4xza0uq
title: Schemas
desc: ''
updated: 1666005611978
created: 1666000002744
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

We use schemas for the purpose of validating data. But instead of "just" validating data we adopt the approach of parsing instead of validating. 
This way all data enters your code through typed boundaries and nothing gets exiled and every part is taken care of.

## Cook

```ts
import { z, schemaForType } from "@dendronhq/common-all";

export const aSchema = schemaForType<ASchemaType>()(
  z
    .object({
        aKey: 'aValue'
    })
)
```

The `schemaForType` function allows us the define the type outside of the library (`zod` in our case). The reason is that most types currently exist outside of the library and to keep types seperate from dependencies seems like a good thing. Note that when 

### parsing

To parse a schema use the `parse` function which will return a [[`Result` type|dendron://dendron.docs/dev.process.errors#result-using-neverthrow-package]].

```ts
import { parse, z } from "@dendronhq/common-all";

const schema = z.object({ /* some schema */ })
const input = /* some unknown (from typescript POV) data */
const outputResult = parse(schema, input, "Optional error message")
if (outputResult.isOk()) {
    outputResult.value // do something with the parsed/valid input
}

```

### optional vs default

```ts
const schema = z.object({
  y: z.string().optional(),
  x: z.string().default("str"),
});

type InputType = z.input<typeof schema> // y optional, x optional
type OutputType = z.infer<typeof schema> // y optional, x non-optional
```

This will allow the input for `x` to be `undefined` but the output to be non-optional. So it will not throw but return the field (after being parsed) with the default value. See: https://github.com/colinhacks/zod/issues/1456#issuecomment-1271874390

## Reference

- https://lexi-lambda.github.io/blog/2019/11/05/parse-don-t-validate/
- https://github.com/colinhacks/zod
- [Comparison of libraries](https://github.com/moltar/typescript-runtime-type-benchmarks#packages-compared)
