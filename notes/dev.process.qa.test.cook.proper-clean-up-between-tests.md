---
id: fzdo386ipm7x787g4sri86m
title: Proper Clean up between Test
desc: ''
updated: 1667892252389
created: 1667892249496
---

### Proper Clean Up Between Tests and Test Suites
Sometimes, you'll find that some tests pass when run in isolation, but fail when run as part of the test pass. This is likely due to the previous test not properly cleaning up. Remember to clean up after your tests have run. These include
- For UI based tests (i.e. plugin-core), leaving the extension host UI in a clean state - close any tabs that were opened, etc.
- Cleaning up Disposables. Including
  - If you registered anything with vscode (commands, views), be sure to un-register
  - `NoteLookupCommand` instances.
  - Anything else that implements the `Disposable` interface