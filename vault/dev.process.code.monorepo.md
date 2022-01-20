---
id: faMqZ89hDHol2ctptbJFH
title: Monorepo
desc: ''
updated: 1642721140902
created: 1642720956727
---

Dendron is setup as a monorepo utilizing `lerna` and `yarn workspace`. 
This means ALL dependencies are pulled to the top of the repo in a global `node_modules` folder.
This helps dedup dependencies but can lead to bugs because imports that might work in development will NOT work in production if that dependency isn't in the `package.json` of the respective package.

Some common pitfalls:

- `vscode` cannot be imported in any package besides [[pkg.plugin-core]]
- you cannot do relative imports of other packages in the monorepo 
    - eg 
        - bad: `import {foo} from "../lib/@dendronhq/common-all"` 
        - good: `import {foo} from "@dendronhq/common-all"` 
