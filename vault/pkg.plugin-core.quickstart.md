---
id: 64f0e2d5-2c83-43df-9144-40f2c68935aa
title: Dendron Plugin Quickstart
desc: ""
updated: 1640797936669
created: 1598651458825
---

## Prerequisites

Before you begin, you need to make sure to have the following SDKs and tools:

- Node.js >= 14
  - We recommend using a version in [Active LTS](https://nodejs.org/en/about/releases/)
- yarn
  - `npm install -g yarn`
- lerna
  - `npm install -g lerna`

## Steps

1. Clone repo
   ```bash
   git clone https://github.com/dendronhq/dendron.git
   cd dendron
   ```
2. Install dependencies ^OI7k28ZBdX9W

   ```bash
   # install package root dependencies
   yarn

   # this should install all dependencies
   yarn setup
   # if the above script errors out, you can diagnose the issue and run the following scripts sequentially dependeing on where the error occured
   yarn bootstrap:bootstrap # install package dependencise
   yarn bootstrap:build  # build package dependencies
   ```

3. Watch all dependencies ^QWJj9cTIcwuX

- NOTE: typescript is a compiled language which means that the executable won't be updated unless you compile. The watch script will auto-compile all code on change

```sh
# watch all dependencies
./bootstrap/scripts/watch.sh

```

4. Open the workspace by opening `dendron-main.code-workspace` with VSode. While its not required to use VSCode, most of the helper scripts in this repository are created with VSCode in mind so using it will make development significantly easier.

5. Run the plugin

![[dendron://dendron.docs/pkg.plugin-core.dev.run#running-via-launch-task-from-source,1:#*]]

## Troubleshooting

### Changes aren't showing up

1. Typescript is a compiled language. Make sure that your code is being compiled. Make sure the following is on:

```sh
  # watch all dependencies
  ./bootstrap/scripts/watch.sh

```

## Related

- [[List of other Dendron Packages|dendron://dendron.dendron-site/pkg]]
- [[Detailed Developer Docs|dendron://dendron.docs/pkg.plugin-core.dev]]
