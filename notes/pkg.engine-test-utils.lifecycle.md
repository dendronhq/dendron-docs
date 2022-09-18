---
id: 330a5ae2-e196-41e1-b9aa-660e489625a9
title: Lifecycle
desc: ''
updated: 1663471357807
created: 1619280925532
---



- [[../packages/engine-test-utils/src/engine.ts]]
```ts
runEngineTestV5(vaults) {
    setupWS
    preSetupHook
    results = (await func(testOpts))
    runJestHarnessV2
}
```
