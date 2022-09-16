---
id: jkyymu1c6u2xqftwepxjjxn
title: Programatically Insert Text
desc: ''
updated: 1663295309457
created: 1663295303800
---

- src/commands/InsertNoteCommand.ts

```ts
const editor = VSCodeUtils.getActiveTextEditor()!;
const pos = editor.selection.active;
await editor.edit((builder) => {
  const selection = new Selection(pos, pos);
  builder.replace(selection, txt);
});
```