---
id: 6ucjru05nmzc6lacqscswe9
title: Add New Doctor Command
desc: ''
updated: 1663295004958
created: 1663295000237
---

When adding a doctor command, do the following if the workspace needs to be reloaded:

- add action to `RELOAD_BEFORE_ACTIONS` if workspace needs to be reloaded before running the action
- add action to `RELOAD_AFTER_ACTIONS` if workspace needs to be reloaded after the action has run

See [this pr](https://github.com/dendronhq/dendron/pull/2620/files) for an example