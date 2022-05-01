---
id: 4ee3b7ab-a633-44bb-a797-60dbd046cd30
title: Common Server
desc: ''
updated: 1647462906612
created: 1620335917868
---

## Summary

Utilities for nodejs environment

## Utilities
- express.js related utilties
    - loc: `server`
- files
    - loc: `filesv2`
- logging
    - loc: `logger`
- os related stats
    - loc: `system`
- exports [execa](https://github.com/sindresorhus/execa)

## General Utilties

### asyncLoopOneAtATime
- location: [[../packages/common-all/src/helpers.ts#^a7sx98zzqg5y]]

Loop through iterable one element at a time and perform async task

Example:
```ts
// this creates directories 'one' and 'two' 
await asyncLoopOneAtATime<string>(["one", "two"], (ent) => {
    return fs.ensureDir(ent);
});
```