---
id: 64f0e2d5-2c83-43df-9144-40f2c68935aa
title: Dendron Plugin Quickstart
desc: ""
updated: 1642665887141
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
- [vscode](https://code.visualstudio.com/) or [vscodium](https://vscodium.com/)
  - while this is not required, it's highly recommended as the Dendron repo comes with documentation that is managed using Dendron

## Setup Dendron (optional)

- Download Dendron by following instructions [here](https://wiki.dendron.so/notes/678c77d9-ef2c-4537-97b5-64556d6337f1.html)
- After you have gone through the tutorial, proceed, to next steps
- When you clone the repo, developer docs will be available inside of your repo workspace

## Setup ESLint

All packages in the repo use a standard base configuration found at [.eslintrc.js](.eslintrc.js).

If you are using vscode, download and enable the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
If you are using another editor, make sure you have eslint enabled.

## Setup Repo

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
   # if the above script errors out, you can diagnose the issue and run the following scripts sequentially depending on where the error occurred
   yarn bootstrap:bootstrap # install package dependencies
   yarn bootstrap:build  # build package dependencies
   ```

3. Watch all dependencies ^QWJj9cTIcwuX

- NOTE: typescript is a compiled language which means that the executable won't be updated unless you compile. The watch script will auto-compile all code on change

```sh
# watch all dependencies
./bootstrap/scripts/watch.sh

```

4. Open the workspace by opening `dendron-main.code-workspace` with VScode. While its not required to use VSCode, most of the helper scripts in this repository are created with VSCode in mind so using it will make development significantly easier.

5. Run the plugin

![[dendron://dendron.docs/pkg.plugin-core.dev.run#running-via-launch-task-from-source,1:#*]]

## Troubleshooting

### Changes aren't showing up

1. Typescript is a compiled language. Make sure that your code is being compiled. Make sure the following is on:

```sh
  # watch all dependencies
  ./bootstrap/scripts/watch.sh

```

## Next Steps

- [[Dendron Development Process|dendron://dendron.docs/dev.process]]
