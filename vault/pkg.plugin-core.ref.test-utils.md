---
id: OZhkg0FIyGyUf8XcwCY2g
title: Test Utils
desc: ''
updated: 1642294343299
created: 1642293921514
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Lifecycle

- setupBeforeAfter
- [[../packages/plugin-core/src/test/testUtilsV3.ts]]
```ts
setupBeforeAfter(beforeHook, afterHook)

    ctx = getOrCreateMockContext

    beforeEach { 
        stub VSCodeUtils.getInstallStatusForExtension
        stub WorkspaceInitFactory.create
        beforeHook
    }

    afterEach { 
        HistoryService.clearSubscriptions
        afterHook
        sinon.restore
    }

    return ctx
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->