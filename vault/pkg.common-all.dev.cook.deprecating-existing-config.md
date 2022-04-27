---
id: uznido7295nr7bh0x3h6hbp
title: Deprecating Existing Config
desc: ''
updated: 1651082946506
created: 1651082690760
---

Steps for deprecating an existing config:

1. Scrub through the entire codebase that references the config key, and modify the logic accordingly.
2. Add the deprecated path in [[../packages/engine-server/src/migrations/utils.ts#^2hgqigv11pvy]]
3. Once the deprecated path is added, `ConfigUtils.detectDeprecatedConfigs` will catch it in the subsequent release (if `extensionInstallStatus === InstallStatus.UPGRADED`). The user will be prompted to trigger a doctor command. This means we don't have to explicitly write migration code that scrubs the deprecated config key from `dendron.yml`.
