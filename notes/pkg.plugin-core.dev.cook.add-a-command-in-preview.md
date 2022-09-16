---
id: 59756qi30r9g2ojlxbxm41c
title: Add a Command in Preview
desc: ''
updated: 1663294979317
created: 1663294971407
---

This section goes over adding a command in dev/preview. For an example, see this [command](https://github.com/dendronhq/dendron/pull/2190). It adds Export Pod V2 commands in dev.

1. Add a new config option to dev namespace in `DendronDevConfig` under `packages/common-all/src/types/workspace.ts`, `packages/common-all/src/types/configs/dev/dev.ts` and `packages/common-all/src/constants/configs/dev.ts`.
1. Add your own context to `DendronContext` in `packages/plugin-core/src/constants.ts` for enablement of the command. Set the Context with the config created in the first step in `packages/plugin-core/src/_extension.ts` In the example PR, see:

```ts
VSCodeUtils.setContext(
  DendronContext.ENABLE_EXPORT_PODV2,
  dendronConfig.dev?.enableExportPodV2 ?? false
);
```

1. In `DENDRON_COMMANDS` under `plugin-core/src/constants.ts`, update the when/enablement clause of the desired command with the context created in above step.
1. Open the command prompt, enter `Run Task`, and run `gen:config`
   - this will update the command in `package.json`
1. Manually test with test-workspace, the command should only be visible in command palette if config option is set to true.