---
id: h2v7riac73e2x1iec5c8o8q
title: Modify Dendron Config
desc: ''
updated: 1656631501979
created: 1655168683270
---

### Update Json 
1. Update the json schema
   Run `yarn gen:data` at the root of the monorepo
1. Update snapshots
   ![[dendron://dendron.docs/dev.process.qa.test#updating-test-snapshots,1:#*]]
   [[../packages/plugin-core/src/test/suite-integ/SetupWorkspace.test.ts]]


### Set a new default for new users but don't change behavior existing users 

Do this when setting a new default for new users.

1. Update [genLatestConfig](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/utils/index.ts#L589:L589) and set a sensible default there. New users will get this
2. Old users will get whatever value was set in [[dendron://dendron.docs/pkg.common-all.dev.cook.add-new-config#^e38rlomwy9oq]]


