---
id: evk47kctzy5hyer068o3gyv
title: On First Install
desc: ''
updated: 1647523849714
created: 1645661814246
---

## Summary

The following events happen only when Dendron is first installed

## Details

To check if it is the first install, we use logic in [[../packages/plugin-core/src/vsCodeUtils.ts#^pubko8e3tu7i]]

This checks if there was a previous `globalVersion` stored in `ExtensionContext["globalState"]

On `InstallStatus.INITIAL_INSTALL`, the following happens:

- set initial install, [[../packages/plugin-core/src/_extension.ts#^194e5bw7so9g]]
- warn on incompatible extensions, [[../packages/plugin-core/src/_extension.ts#^dlx35gstwsun]]
- notify user about keybinding conflicts [[../packages/plugin-core/src/_extension.ts#^rikhd9cc0rwb]]
- track install duration, [[../packages/plugin-core/src/_extension.ts#^e8itkyfj2rn3]]
- set global dendron version, [[../packages/plugin-core/src/_extension.ts#^oncxlt645b5r]]
- notify user about telemetry, [[../packages/plugin-core/src/_extension.ts#^njhii5plxmxr]]
- show the welcome page, [[../packages/plugin-core/src/_extension.ts#^ygtm7ofzezwd]]

## Lookup

- [[Startup|dendron://dendron.docs/pkg.plugin-core.lifecycle.startup]]
