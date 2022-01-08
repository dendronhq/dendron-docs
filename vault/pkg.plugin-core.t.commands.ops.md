---
id: zPqF5R05NcZWwPxuw1wLL
title: Ops
desc: ''
updated: 1641533447293
created: 1641533421118
---

## Command Enablement / When Clause Gotchas

- `when` clause boolean expressions currently do not support parentheses.
  - See [this issue](https://github.com/microsoft/vscode/issues/91473)
- You will need to simplify the expression so that it is equivalent and has no parentheses.
