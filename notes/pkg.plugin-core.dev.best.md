---
id: DDKxEBXhU0GZmaAY3Sr59
title: Best
desc: ''
updated: 1642078041854
created: 1642077337400
---

## Make sure the command enablement is correctly set.

Dendron is an extension that requires the users to be in a workspace that Dendron recognizes to function properly. To avoid cluttering the command palette when the user has installed Dendron but is not in a Dendron recognized workspace, we need to make sure that commands that will not work outside of a workspace would be disabled.

Other than the commands that let users create / change their workspace to a Dendron workspace (e.g. `Dendron: Initialize Workspace`, `Dendron: Change Workspace`, or `Dendron: Launch Tutorial`), at minimum the command should have a `when` clause of `dendron.pluginActive`.

Another reason to have a correct enablement set to our commands (and all contribution points for that matter), is that we track user events throughout our codebase, and we don't want to track commands that are happening in a non-Dendron workspace. These tracked events will always contain an error in their payload because they don't function properly outside of a workspace, and can potentially pollute our usage analysis.

Be aware of the [[Command Enablement / When Clause Gotchas|dendron://dendron.docs/pkg.plugin-core.t.commands.ops#command-enablement--when-clause-gotchas]] when specifiying enablement of a command.
