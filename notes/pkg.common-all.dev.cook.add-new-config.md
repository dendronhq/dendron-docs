---
id: aqn9kf61clk64dcdutv1kni
title: Add New Config
desc: ""
updated: 1653518794805
created: 1646420172968
---

## Summary

This goes over adding a new `dendron.yml` configuration

## Details

Dendron configuration is defined in [[../packages/common-all/src/types/configs/dendronConfig.ts]]

## Steps

1. Decide on a scope

- see all [[Scopes|dendron://dendron.dendron-site/dendron.ref.config#scopes]]
  - Add the new config to an appropriate namespace of the new `DendronConfig`.
  - eg. if we were adding the command to the workspace, we would pick add the configuration to [[../packages/common-all/src/types/configs/workspace/workspace.ts]]

1. Decide on a name
   - Consult the [[configuration conventions|dev.process.code.config]] note for naming
1. Add config description

- When adding a config key to the new namespace type(s), you also have to add a corresponding entry in the [[DendronConfigEntryCollection|../packages/common-all/src/constants/configs/dendronConfig.ts]]
  - This is an object that holds every possible config key's label and description that will later be used to automatically generate a configuration view.
  - If this step is omitted, Typescript will complain that `DendronConfigEntryCollection` is missing a key.

1. Decide on the default

- As per the [[configuration conventions|dev.process.code.config]], consider adding a sensible default of the newly introduced config key in the appropriate `genDefault{namespace}Config` method.
  - Each namespace is divided into separate modules [here](https://github.com/dendronhq/dendron/tree/master/packages/common-all/src/types/configs), and the namespace type and default generating methods live in the same module.
  - These default generating methods will be used by the `ConfigUtils` that are used to get and set configs later, so it is important to define a default here to simplify the process down the line.

1. Update tests and json schema
   ![[dendron://dendron.docs/pkg.common-all.dev.cook#modifying-config,1]]
