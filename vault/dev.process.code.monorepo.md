---
id: faMqZ89hDHol2ctptbJFH
title: Monorepo
desc: ""
updated: 1645230057133
created: 1642720956727
---

## Summary

Dendron is setup as a monorepo utilizing `lerna` and `yarn workspace`.
This means ALL dependencies are pulled to the top of the repo in a global `node_modules` folder.
This helps dedup dependencies but can lead to bugs because imports that might work in development will NOT work in production if that dependency isn't in the `package.json` of the respective package.

Some common pitfalls:

- `vscode` cannot be imported in any package besides [[pkg.plugin-core]]
- you cannot do relative imports of other packages in the monorepo
  - eg
    - bad: `import {foo} from "../lib/@dendronhq/common-all"`
    - good: `import {foo} from "@dendronhq/common-all"`

## Development

These are common operations that you might need to do during development

### Install All dependencies

```bash
# install package root dependencies
yarn

# this should install all dependencies
yarn setup
```

### Watching all dependencies

- NOTE: typescript is a compiled language which means that the executable won't be updated unless you compile. The watch script will auto-compile all code on change

```sh
# watch all dependencies
./bootstrap/scripts/watch.sh
```

### Pulling from master when there is a new dependency

Sometimes when you pull from master, there will be a new dependency added and running [[Watching all dependencies|dendron://dendron.docs/dev.process.code.monorepo#watching-all-dependencies]] might fail.
In these cases, you want to run the following to install all dependencies before running watch

```sh
lerna bootstrap
```

- NOTE: in the rare case that this does not work, you can rebuild yourn workspace by running `yarn setup`

## Cookbook

These are less common tasks that you might need to do in the monorepo

### Remove all build artifacts

This cleans up all `node_modules` and build artifacts. Useful if you think theres some stale local dependency that is causing issues

```
./bootstrap/scripts/cleanup.sh
```

### Install a new package

Because Dendron is packaged as a mono repo managed using [lerna](https://github.com/lerna/lerna), you can't just do a regular `yarn add` to install new packages. This is because lerna symlinks mono-repo dependencies together and a `yarn add` would override that. Instead, use the following command:

```
lerna add {package-to-install} --scope @dendronhq/{package-to-install-into}
```

Because this is typescript, don't forget to also install the `@types` package if it exists

```bash
lerna add @types/{package-to-install} --scope @dendronhq/{package-to-install-into}
```

- NOTE: watch out that you are installing dependencies in the right package. Missing dependencies will appear to work in development if that dependency is present in any of the other packages. The reason things work is because of the way the nodejs module resolution works and that we're in a monorepo. Dependencies are installed at the root of the monorepo and will be found there when the package doesn't have them. When we publish them as npm packages, these dependencies will show up as missing in their respective packages if its not included in the dependencies

### Removing a package

When removing a package, make sure to do the following:

1. Remove the package from the corresponding `package.json`
1. [[Remove all build artifacts|dendron://dendron.docs/dev.process.code.monorepo#remove-all-build-artifacts]]
1. Remove `yarn.lock` at the top of the monorepo

```sh
rm yarn.lock
```

1. Run `yarn setup`
1. Commit the new yarn.lock file

- NOTE: when you do this, you might end up updating other dependencies because of [[Semver|dendron://dendron.docs/dev.concepts#semver]]. having a `yarn.lock` means that don't update dependencies even if a new dependency is available. in these cases, be sure to conduct [[Manual Testing|dendron://dendron.docs/dev.process.qa.test#manual-testing]] when submitting the PR

### Pinning a dependency

Sometimes, its necessary to pin dependencies to prevent accidental updates (usually because the next version forces an incompatible node version). This usually comes to light when upgrading dependencies or when we follow the [[Removing a package|dendron://dendron.docs/dev.process.code.monorepo#removing-a-package]] cookbook. When you find a dependency is incompatible, you can pin it by removing the `^` sign infront of the dependency in the respective `package.json`.

When you do so, be sure to also add that dependency in [[Pinned Dependencies|dendron://dendron.docs/dev.ref.pinned-dependencies]]

### Publish a new monorepo package

- WARNING: you should almost never need to do this. consult with #dendron-team before trying to publish

- initialize repo

```bash
cd {workspace_dir}
cp -R /path/to/dendron-yeoman/node-ts packages/{new-package}
```

- update `package.json`

  - change project name

- publish the repo (needs to be done initially before running lerna publish)

```
npm publish --access public
```

## Troubleshooting

### Build is failing

For 99% of cases, running the two steps below will help fix all build issues

- [[Remove all build artifacts|dendron://dendron.docs/dev.process.code.monorepo#remove-all-build-artifacts]]
- [[Install All dependencies|dendron://dendron.docs/dev.process.code.monorepo#install-all-dependencies]]

### Investigating a build step

- source: [[../bootstrap/scripts/buildAll.js]]

`yarn setup` runs the following commands. If you want to dive into a specific build step that is failing, run the steps serially in your shell

```sh
npx lerna run build --scope @dendronhq/common-all
npx lerna run build --scope @dendronhq/common-server
npx lerna run build --scope @dendronhq/engine-server
npx lerna run build --scope @dendronhq/pods-core
npx lerna run build --parallel --scope "@dendronhq/{common-test-utils,api-server,common-assets}"
npx lerna run build --parallel --scope "@dendronhq/{common-frontend,dendron-cli}"
npx lerna run build --scope "@dendronhq/{engine-test-utils,dendron-next-server}"
npx lerna run build --scope "@dendronhq/dendron-plugin-views"
npx lerna run build --scope "@dendronhq/plugin-core"
npx yarn dendron dev sync_assets --fast
```
