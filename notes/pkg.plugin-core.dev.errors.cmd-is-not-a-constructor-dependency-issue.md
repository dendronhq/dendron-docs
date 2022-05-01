---
id: E8KeDn5Nf4orhRLFSc4WM
title: Cmd Is Not a Constructor Dependency Issue
desc: ''
updated: 1638265325318
created: 1638265083681
---

```
stack trace: TypeError: Cmd is not a constructor
	at /usr/local/workplace/dendron/packages/plugin-core/out/src/workspace.js:476:25
```

### Issue in integration tests
Ran into this issue when attempting to use 

```import { expect } from "../testUtilsv2";```

The fix was to split up `expect` into its own file and use `import { expect } from "../expect";` instead.

