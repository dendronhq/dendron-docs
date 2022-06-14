---
id: d2k4jd6og7llon7n01de3ew
title: Remove a Command
desc: 'Removing a new command'
updated: 1655169394436
created: 1655167627884
---

## Example 
- [remove insert note command by kevinslin · Pull Request #3083 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/3083)

## Steps

#### Remove constant key
1. Remove command from [[constants file|../packages/plugin-core/src/constants.ts]]
1. Update the plugin config
![[dendron://dendron.docs/pkg.plugin-core.dev.cook.update-plugin-config#steps,1]]

#### Remove command
1. Remove tests for the given command
1. Remove any command related configuration
    - NOTE: if you end up removing configuration, follow instructions in [[Modify Dendron Config|dendron://dendron.docs/pkg.common-all.dev.cook.modify-dendron-config]]
1. Remove from [[../packages/plugin-core/src/commands/index.ts]]
1. Remove all references of the command
    - Run "Find all References" from the command and take care of any occurences
    - TIP: sometimes, the typescript compiler doesn't catch everything - you can run an search with `Match Whole Word` on the command name to truly find all occurences
1. Delete the command
1. Update metrics if you've ended up removing metrics this way
1. Apply steps from [[Stale TypeScript Files|dendron://dendron.docs/dev.process.monorepo.cook.stale-typescript-files]]

## Lookup
- [[Add New Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.add-new-command]]