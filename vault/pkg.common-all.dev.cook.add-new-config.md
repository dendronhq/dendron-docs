---
id: aqn9kf61clk64dcdutv1kni
title: Add New Config
desc: ''
updated: 1646420208726
created: 1646420172968
---

Dendron configuration in `dendron.yml` is defined in the following places:

- new style configuration defined [here](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/configs/dendronConfig.ts)
<!-- - legacy style configuration defined [here](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/workspace.ts). -->

During config migration, these two types are used to compose an [IntermediateDendronConfig](https://github.com/dendronhq/dendron/blob/6a7be61db3ec7e6fab61871b30ec215c47f1cb59/packages/common-all/src/types/intermediateConfigs.ts#L28), which has both old and new config keys.

Steps for adding a new config:

1. Decide on a scope

- see all [[Scopes|dendron://dendron.dendron-site/dendron.ref.config#scopes]]
  - Add the new config to an appropriate namespace of the new `DendronConfig`.

1. Decide on a name
   - Consult the [[configuration conventions|dev.process.code.config]] note for naming
1. Add config description

- When adding a config key to the new namespace type(s), you also have to add a corresponding entry in the [DendronConfigEntryCollection](https://github.com/dendronhq/dendron/blob/6a7be61db3ec7e6fab61871b30ec215c47f1cb59/packages/common-all/src/constants/configs/dendronConfig.ts#L10)
  - This is an object that holds every possible config key's label and description that will later be used to automatically generate a configuration view.
  - If this step is omitted, Typescript will complain that `DendronConfigEntryCollection` is missing a key.

1. Decide on the default

- As per the [[configuration conventions|dev.process.code.config]], consider adding a sensible default of the newly introduced config key in the appropriate `genDefault{namespace}Config` method.
  - Each namespace is divided into separate modules [here](https://github.com/dendronhq/dendron/tree/master/packages/common-all/src/types/configs), and the namespace type and default generating methods live in the same module.
  - These default generating methods will be used by the `ConfigUtils` that are used to get and set configs later, so it is important to define a default here to simplify the process down the line.

1. Update tests and json schema
   ![[dendron://dendron.docs/pkg.common-all.dev.cook#modifying-config,1]]
