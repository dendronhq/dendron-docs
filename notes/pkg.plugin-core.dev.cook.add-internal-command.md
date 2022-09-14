---
id: q1sau11p5rxnp6119ift9ku
title: Add Internal Command
desc: ''
updated: 1663172510027
created: 1663172498668
---

There are cases where we need to add commands that VSCode recognizes, but not expose them to any of the VSCode's user facing UIs. Some good examples are [[Copy To Clipboard|../packages/plugin-core/src/commands/CopyToClipboardCommand.ts]], [[Convert Candidate Link|../packages/plugin-core/src/commands/ConvertCandidateLink.ts]], and [[Note Lookup Autocomplete|../packages/plugin-core/src/commands/NoteLookupAutoCompleteCommand.ts]]

When adding these kinds of commands, make sure to set the proper enablement clause for them so that they do not show up in the command palette or in the contextual menu. ^fk7pnjllh594

To illustrate, `CopyToClipboardCommand` is only used for simulating a button click within a rendered markdown preview, and the `when` clause is set to `false`.

Note that setting `when` clauses do not stop you from executing this command through `vscode.commands.executeCommand` or through a command URI. It just hides them from user facing UIs.