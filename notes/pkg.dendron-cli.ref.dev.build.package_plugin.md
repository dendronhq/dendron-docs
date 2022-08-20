---
id: dkmnvjfkzdhr8angxbt23g8
title: Package_plugin
desc: ''
updated: 1660963432808
created: 1656692381161
---

[[../packages/dendron-cli/src/commands/devCLICommand.ts]]

```ts
//     return $(`yarn install --no-lockfile`, { cwd: this.getPluginRootPath() });
BuildUtils.installPluginDependencies
//await $$(`yarn build:prod`, {
await BuildUtils.compilePlugin(opts)
// vsce package --yarn
await BuildUtils.packagePluginDependencies(opts)
```

## Lookup
- [[dendron://dendron.dendron-site/dendron.topic.dev.cli.package-plugin]]