---
id: 60fbcc05-df2a-44a2-aa0e-cdd62c2557b6
title: Qa
desc: ""
updated: 1644617921689
created: 1614812225185
---

# Local

## Test:Unit

## Engine Tests

- See [[Engine|dendron://dendron.docs/pkg.dendron-engine.qa.test.engine]]

## Unified Tests

These tests cover everything related to `unified` plugins. This refers to anything in `packages/engine-server/src/markdown/utils.ts`

- plugin tests are located in `packages/engine-test-utils/src/__tests__/engine-server/markdown/`
- when testing `transformers`, `process` will run over the node that is passed in to the processor
- when testing `parsers` and `compilers`, `process` will run over the text that you pass into it
