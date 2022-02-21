---
id: SPdMQojDqHq8251nsLXzx
title: Changing File to Folder
desc: ''
updated: 1644373018297
created: 1644372945357
---

## Summary
When you convert a file to a folder in typescript, a few extra steps needs to be taken to appease the compiler.
An example is converting `utils.ts` to `utils/index.ts`

## Steps
1. run `yarn clean` in the package where this conversion is taing place
1. run `yarn bootstrap` to re-link dependencies
1. run `yarn build` to build dependencies
1. append a number to the cache key of [[Restore typescript lib cache|../.github/workflows/ci.yml#L76]]

## Rationale
The reason you have to go through these steps is because typescript doesn't delete the original file after you convert it to a folder. 
For example, when converting `utils.ts` to `utils/index.ts`, the following occurs:
  - the original `utils.js` will stay behind in the `lib` library
  - javascript, when it finds both `utils.js` and `utils/index.js`, will import from the former
  - you will get a mysterious compiler error

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
