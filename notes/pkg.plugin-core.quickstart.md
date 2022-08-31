---
id: 64f0e2d5-2c83-43df-9144-40f2c68935aa
title: Dendron Plugin Quickstart
desc: ""
updated: 1661981981595
created: 1598651458825
---

## Prerequisites

- [[../packages/engine-server/src/markdown/utilsv5.ts#^dwhi5fju9ain]]

See [[setting up your development environment|dendron://dendron.docs/dev.process.code.dev-env#summary]] before proceeding
![[dendron://dendron.docs/dev.process.code.dev-env#install-dependencies,1]]

[[../packages/engine-server/src/markdown/utilsv5.ts]]

## Setup Repo

1. Clone repo
   ```bash
   git clone https://github.com/dendronhq/dendron.git
   cd dendron
   ```
2. Install dependencies ^OI7k28ZBdX9W
   ![[dendron://dendron.docs/dev.process.code.monorepo#install-all-dependencies,1:#*]]

3. Watch all dependencies ^QWJj9cTIcwuX

![[dendron://dendron.docs/dev.process.code.monorepo#watching-all-dependencies,1:#*]]

4. Open the workspace by opening `dendron-main.code-workspace` with VSode. While its not required to use VSCode, most of the helper scripts in this repository are created with VSCode in mind so using it will make development significantly easier.

5. Run the plugin

![[dendron://dendron.docs/pkg.plugin-core.dev.run#running-local-dendron-extension-via-launch-task-from-source]]

## Troubleshooting

### Changes aren't showing up

1. Typescript is a compiled language. Make sure that your code is being compiled. Make sure the following is on:

```sh
# watch all dependencies
./bootstrap/scripts/watch.sh
```

## Next Steps
- Go to [[dendron://dendron.docs/home]] to get an overview of how the docs are organized
- See the [[Dendron Development Process|dendron://dendron.docs/dev.process]] to see our process for shipping code
