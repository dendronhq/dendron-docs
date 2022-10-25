---
id: Z1rOzDCvQyN7yaibtatks
title: Build
desc: ""
updated: 1666736217518
created: 1642274303182
---

## Summary

Building Dendron for publication

## Lifecycle

<!-- Startup process for this module -->

- [[../packages/dendron-cli/src/commands/devCLICommand.ts]]
	- see [[#prepPluginPkg]]
	- see [[#installPluginDependencies]]
```ts
build {
	// set npm endpoint
	prepPublishLocal || prepPublishRemote
	runTypeCheck
	bumpVersion
	// publish all packages
	publishVersion
	syncAssets
	prepPluginPkg
	installPluginDependencies
	compilePlugin
	packagePluginDependencies
}
```

### bumpVersion

- [[../packages/dendron-cli/src/utils/build.ts]]
```ts
lerna version ${version} --no-git-tag-version
$(`git add .`);
$(`git commit -m "chore: publish ${version}"`);
```

### publishVersion

- [[../packages/dendron-cli/src/utils/build.ts]]
```ts
lerna publish from-package --ignore-scripts --registry ${url}
```

### prepPluginPkg
- update `package.json` metadata for `plugin-core`
	- see [[prep_plugin|dendron://dendron.dendron-site/dendron.topic.dev.cli#prep_plugin]]
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


### installPluginDependencies
```ts
installPluginDependencies {
	rm "$root/package.json"
	yarn install
}
```

### compilePlugin

```
yarn build:prod  {
	yarn webpack:prod && ./scripts/varSub.sh
}
```

### packagePluginDependencies

```
vsce package --yarn
```

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->

## Related

- [[Build|dendron://dendron.docs/pkg.plugin-core.ref.build]]
