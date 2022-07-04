---
id: uznido7295nr7bh0x3h6hbp
title: Remove Existing Config
desc: ''
updated: 1656979027494
created: 1651082690760
---

## Steps
1. Scrub through the entire codebase that references the config key, and modify the logic accordingly.
1. Add the deprecated path in [[../packages/engine-server/src/migrations/utils.ts#^2hgqigv11pvy]]
1. Once the deprecated path is added, `ConfigUtils.detectDeprecatedConfigs` will catch it in the subsequent release (if `extensionInstallStatus === InstallStatus.UPGRADED`). The user will be prompted to trigger a doctor command. This means we don't have to explicitly write migration code that scrubs the deprecated config key from `dendron.yml`.
1. Update tests and json schema
![[Modify Dendron Config|dendron://dendron.docs/pkg.common-all.dev.cook.modify-dendron-config]]
