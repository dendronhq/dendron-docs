---
id: zPqF5R05NcZWwPxuw1wLL
title: Ops
desc: ""
updated: 1642171429870
created: 1641533421118
---

## Command Enablement / When Clause Gotchas

### Boolean expressions don't support parentheses

- `when` clause boolean expressions currently do not support parentheses.
  - See [this issue](https://github.com/microsoft/vscode/issues/91473)
- You will need to simplify the expression so that it is equivalent and has no parentheses.

### editorFocus clause is mostly redundant for command palette enablement

- The context `editorFocus` is set when the focus is set to the editor.
- When the command palette is brought up, naturally the focus is set to the command palette and `editorFocus` will be unset
  - You can check this by using `Developer: Toggle Developer Tools`, and `Developer: Inspect Context Keys` and inspecting the command palette.
- As a result, checking for `!editorFocus` is redundant, and checking for `editorFocus` is wrong since it will always be false.
- `editorFocus` is mostly useful when:
  - setting enablement clauses for keybindings, or
  - in rare cases like the lookup tab auto-complete command where you are specifically guarding against enabling this feature in certain parts of VSCode.
