---
id: j6v7reo1z8wk740rwy9mpvk
title: Cook
desc: ''
updated: 1656035355486
created: 1656035279785
---


### print out log statements 

It can be hard to trace logs when running integration tests. Here's a way of printing them to the debug console

1. add the following at [[../packages/plugin-core/src/logger.ts#^oy9q7tpy0v3t]]
```ts
console.log(lvl + ": " + stringMsg);
```