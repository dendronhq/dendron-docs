---
id: Z1rOzDCvQyN7yaibtatks
title: Build
desc: ""
updated: 1647377346113
created: 1642274303182
---

## Summary

Building Dendron for publication

## Lifecycle

<!-- Startup process for this module -->

- [[../packages/dendron-cli/src/utils/build.ts]]

```ts
build {
	...
	publishVersion
	syncAssets
	installPluginDependencies
}
```

- update `package.json` metadata for `plugin-core`

```ts
// change name to target name (eg. nightly vs regular release)
// update display name
// set a common repository, version and icon
// remove test dependencies
prepPluginPkg {
	updatePkgMeta
	removeDevDepsFromPkgJson
}

```

- installing dependencies

```ts
installPluginDependencies {
	rm "$root/package.json"
	yarn install
}
```

## Common

### packagePluginDependencies

```
vsce package --yarn
```

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->

## Related

- [[Build|dendron://dendron.docs/pkg.plugin-core.ref.build]]
