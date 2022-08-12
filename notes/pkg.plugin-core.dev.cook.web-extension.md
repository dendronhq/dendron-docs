---
id: x9q1n5epp1scbhzbdcem2bx
title: Developing the Web Extension
desc: ''
updated: 1660295778772
created: 1660293801440
---

## Summary

This outlines how to develop the web extension version of the Dendron plugin.

## Pre-Reqs

Familiarize yourself with the following info about Web Extensions:
- https://code.visualstudio.com/api/extension-guides/web-extensions
- [[Extension Host Variations|dendron://dendron.docs/pkg.plugin-core.arch.extension-hosts#supporting-three-types-of-extension-hosts]].

## Code

The code that can be used in the web-extension have certain restrictions:
- They cannot use node-only modules like `fs`, `fs-extra`. Instead, `vscode.workspace.fs` must be used for filesystem operations.
- They cannot include any modules that have node-only dependencies. This means that when it comes to Dendron packages, **only** `common-all` can be used. `common-server`, `engine-server` **cannot** be used.

If you include a dependency that doesn't work in the browser environment, you'll get a compile error when compiling the web extension. To compile, see 'Compiling' section below

Importing files in plugin-core may also cause issues due to `fs` usage, so to better organize our code files, we're trying to move to the following model detailed below in 'Folder Structure'.

### Folder Structure

Proposed structure for code files under `/packages/plugin-core/src`:

Anything that is under a folder `**/web/**` is web only; anything under `**/node/**` is node-only; and anything under `**/common/**` is safe for both.

**However**, please note that while we're in the process of migrating our code, assume that anything not under `**/web/**` or `**/common/**` directories is not safe to use in the web extension.

```
.
└── src
    ├── commands
    │   ├── common
    │   │   └── NoteLookupCommandBase.ts // any common files
    │   ├── node
    │   │   └── NoteLookupCommand.ts // any node specific files
    │   └── web
    │       └── NoteLookupCommand.ts // any web specific files
    ├── views
    │   └── common // This particular folder may not have any diff between web/node, so no need for those folders
    │       └── TreeView.ts
    └── some-other-directory
```

### Compiling

To compile, you can run the yarn tasks `yarn compile-web` or `yarn watch-web` for watch mode.

_Note on Compiler Warnings when importing interfaces_:

Because interfaces get erased by webpack, you'll get a warning when trying to import an interface. To resolve, import them as `type`:

```typescript
import { type ITelemetryClient } from "../../telemetry/common/ITelemetryClient";
import { type IReducedEngineAPIService } from "../engine/IReducedEngineApiService";
import { type ILookupProvider } from "./lookup/ILookupProvider";
```

## TSyringe for Dependency Injection

The web extension is using TSyringe for DI. Eventually, we want to adopt this framework and pattern for all of plugin-core.

TSyringe allows us to have a simplified initialization sequence and reduce coupling / circular dependency risk:
- A TSyringe container is first configured for the web version of the extension, and the container is then used to instantiate the commands, views, and other required objects.
- Instead of passing around a monolithic IDendronExtension/DendronWorkspace objects with static getters, only the configuration and components required by a class are injected into the constructor. This will help us reduce coupling and improve testability.

See [TSyringe Docs](https://github.com/microsoft/tsyringe).

## Running / Testing the Web Extension

See [[Running Dendron in Web Extension Host|dendron://dendron.docs/pkg.plugin-core.dev.run#running-dendron-in-web-extension-host]]

## Additional Reference

- Initial PR for Web Extension Changes: https://github.com/dendronhq/dendron/pull/3343