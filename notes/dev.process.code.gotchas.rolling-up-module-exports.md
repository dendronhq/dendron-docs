---
id: d5xgy1lrehvrbjsabq1dglk
title: Rolling up Module Exports
desc: ''
updated: 1665467986275
created: 1665465282032
---

## Summary

When we are rolling up multiple lower level modules using a barrel (`index.ts`), make sure within the module we are not importing anything from the barrel itself.

This is especially important in a package that is mostly used in other packages as a dependency and does not execute code on its own (i.e. `@dendronhq/common-all`)

A real case of this happening can be found in this commit: https://github.com/dendronhq/dendron/pull/3618/commits/5c93f4d7ecb5b59c29c01de2a2d539a634ebf05c

## Symptom
- You exported something from a module correctly, but when you try to import it from some other package, you get a runtime error that says something like below.

```bash
Cannot read property of undefined (reading "someProperty")
```

## Remedy
- Go to the package that you are importing from.
- Find within all the modules that are rolled up and exported, any import statement that looks like so:

```js
import { something } from ".."; // or
import { somethingElse } from "../.."
...
```

- Fix them so that they look like this:

```js
import { something } from "./something";
import { somethingElse } from "../somethingElse";
...
```

## Example

Say we have a top level module `fooUtils` in `common-all`.
Consider the following file structure:

```md
- common-all
  - utils
    - index.ts
    - someModule.ts
    - fooUtils
      - index.ts
      - fooBarUtils.ts
      - fooBazUtils.ts
```

To export methods, classes, and types in `fooBarUtils.ts` and `fooBazUtils.ts`, we would do the following in `utils/fooUtils/index.ts`:

```js
// in `utils/fooUtils/index.ts`
export * from "./fooBarUtils";
export * from "./fooBazUtils";

...
```

and in turn do the following in `utils/index.ts`: ^e34fp1x88wej

```js 
// in `utils/index.ts`
export * from "./someModule";
export * from "./fooUtils";

...
```

Now, there might be cases where `fooBarUtils.ts` needs something defined in `someModule.ts`.
In this case be aware of this:

```js
// in `fooUtils/fooBarUtils.ts`
// BAD

import { something } from "../.."; // we are importing from the top level barrel

// GOOD

import { something } from "../someModule"; // we are importing from the module itself

```

## What is happening?

### tldr
A short curcuit happens if you import from a barrel that is itself rolling up the file you are using the imports.

### long

#### exported identifiers are hoisted

When you write `export { A } from "B"`, the definition of `A` is hoisted, which means it has memory allocated. 
This means it can exist in memory and can be referenced prior to the actual definition / evaluation. 

#### exports are evaluated lazily

When a module becomes part of a dependency in another module (imported), the content of the imported module is not evaluated until we actually say `import { A } from "B"`. 
The first time we call `import`, all relevant code that is needed is resolved and loaded into memory.

#### exports are evaluated only once

When a module is imported, it will be evaluated, and this is the only time it gets imported in this scope.

#### So why the short circuit?

in the [[Example|dendron://dendron.docs/dev.process.code.gotchas.rolling-up-module-exports#example]], calling `import { something } from "../..";` means that _I want to evaluate `@dendronhq/common-all/utils` right now_.

Since [[exports are evaluated only once|dendron://dendron.docs/dev.process.code.gotchas.rolling-up-module-exports#exports-are-evaluated-only-once]], and [[exports are evaluated lazily|dendron://dendron.docs/dev.process.code.gotchas.rolling-up-module-exports#exports-are-evaluated-lazily]], this is the only time it will get evaluated.

Now, at this point because [[exported identifiers are hoisted|dendron://dendron.docs/dev.process.code.gotchas.rolling-up-module-exports#exported-identifiers-are-hoisted]], in the file [[utils/index.ts|dendron://dendron.docs/dev.process.code.gotchas.rolling-up-module-exports#^e34fp1x88wej]] we have, in memory, reference to `someModule`, and `fooUtils` as declarations, but `fooUtils` is not yet evaluated completely (we are in the process of it). 
So some exported identifiers under `fooUtils` will be `undefined`.

All of the above happens at the point some other module tries to import something from `common-all`, so other packages will never have access to some of the fully evaluated exported identifiers in `common-all`.

## Lookup
- https://javascript.info/import-export#export-before-declarations
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
- https://developer.mozilla.org/en-US/docs/Glossary/Hoisting