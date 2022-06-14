---
id: 6zp67irmft8g9808kmdnpid
title: Stale TypeScript Files
desc: ''
updated: 1655169305256
created: 1655169168335
---

## Summary

Sometimes when you delete a typescript file with a test or change a file into a filder (eg. `utils.ts -> utils/index.ts`), you might encounter failures during ci/cd (or locally) where old files are still being tested.

## Context
The reason you have to go through these steps is because typescript doesn't delete the original file after you convert it to a folder. 
For example, when converting `utils.ts` to `utils/index.ts`, the following occurs:
  - the original `utils.js` will stay behind in the `lib` library
  - javascript, when it finds both `utils.js` and `utils/index.js`, will import from the former
  - you will get a mysterious compiler error

## Steps

### Fix Locally
1. run `yarn clean` in the package where this conversion is taing place
1. run `yarn bootstrap` to re-link dependencies
1. run `yarn build` to build dependencies

### Fix in pipeline
1. Append a number to the cache key of [[Restore typescript lib cache|../.github/workflows/ci.yml#L76]]

## Example
Lets say you make this conversion in `plugin-core`. You would run the following commands to clear this for your build

```js
lerna exec --scope @dendronhq/plugin-core -- yarn clean
lerna bootstrap
lerna exec --scope @dendronhq/plugin-core -- yarn build
```

The update to `ci.yml` would be the following (assumming that the previous suffix was `-1`)
```diff
diff --git a/.github/workflows/ci.yml b/.github/workflows/ci.yml
index 8fe8e5229..091a53d3f 100644
--- a/.github/workflows/ci.yml
+++ b/.github/workflows/ci.yml
@@ -79,9 +79,9 @@ jobs:
         with:
           path: |
             packages/*/lib/*
-          key: ${{ runner.os }}-${{ hashFiles('yarn.lock') }}-1
+          key: ${{ runner.os }}-${{ hashFiles('yarn.lock') }}-2
           restore-keys: |
-            ${{ runner.os }}-yarn-1
+            ${{ runner.os }}-yarn-2

       - name: Sets env vars for publish test
         run: |
```
