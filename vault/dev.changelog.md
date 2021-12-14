---
id: H7CgvT7YUYAiV7mEmGnky
title: Changelog
desc: ""
updated: 1639328943343
created: 1630796807707
nav_order: 6.1
---

## Circular Dependency Refactor
- start: 2021.12.02
- status: WIP

### Summary
We have numerous circular dependencies in plugin-core that is leading to unpredictable build failures. We need to refactor our code to eliminate the existing circular dependencies, and then put in place guards to prevent new circular dependencies from being introduced.

### Changes
- A new webpack step will be added that detects circular dependencies. It's currently set to warn only, as there are still existing circular dependencies that need to be fixed.  Once those are fixed, we will flip the check from warn to error to fail the build upon detection of circular dependencies.
- To fix the remaining circular dependencies, we need to refactor workspace.ts.  The DendronExtension class contains various views, watchers, and services that end up calling static/singleton methods to re-access the other properties of DendronExtension, thus causing circular dependencies.

## DNoteAnchorBasic

- Start: 2021-12-12
- status: WIP

### Summary

This was introduced in [enhance(markdown): add `depth` metadata to header anchors by kevinslin · Pull Request #1877 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1877) where we added `depth` information to [[DNoteHeaderAnchor|dendron://dendron.docs/pkg.common-all.ref.unified#dnoteheaderanchor]].

We added `DNoteAnchorBasic` as a type of `DNoteHeaderAnchor` without the `depth` information.
This is because [getReferenceAtPosition](https://github.com/dendronhq/dendron/blob/baac906f7cd9f2f08e1411fac495af58d2dab875/packages/plugin-core/src/utils/md.ts#L225) parses anchors from just the raw text using regex and doesn't currently use `unified`.

We want to add depth information, either by using regex or using unified (might be easier/more performant to use regex at this point)

### Tasks

- [[Remove Dnoteanchorbasic|dendron://private/task.markdown.2021.12.12.remove-dnoteanchorbasic]]

## Dendron CLI Migration

- start: 2021.10.12
- status: WIP

### Summary

The Dendron CLI has logic that needs to be required in `plugin-core` (eg. [Doctor Command](https://github.com/dendronhq/dendron/blob/94d05c8f1b6856c769d0cd2964d1dece9decb37c/packages/plugin-core/src/commands/Doctor.ts#L12-L12)). This is unfortunate because certain command modules like `dendron dev *` are not used by the plugin and take a significant amount of disk space.

### Changes

Ensure that the core logic for all new functionality in `dendron-cli` is written in an external module (eg. `engine-server`) so that `plugin-core` does not need to depend on Dendron CLI

## Dendron Standalone Vault Changes

- start: 2021.09.04
- complted: 2021.10.12
- status: complete

### Summary

As part of the work to enable [[3 Standalone Vaults|rfc.3-standalone-vaults]], we refactored the Dendron startup process.

The key change is introducing multiple types of `workspaces` to account for Dendron running inside a code workspace vs a native workspace (by detectinga `dendron.yml` file but not necessarily inside a vscode workspace). What used to be called `DendronWorkspace` is now a `DendronExtension`. The `DendronExtension` can contain a workspace, which can either be a `code` workspace or a `native` workspace.

The new startup process is described [[here|pkg.plugin-core.arch.lifecycle.startup#summary]]

### Changes

- `DendronWorkspace` renamed to `DendronExtension`
- `getWS` renamed to `getExtension`
- introduce `getDWorkspace` which returns `DWorkspaceV2`
  - `DWorkspaceV2` has a subset of properties from `DendronWorkspace` that (in future releases) can be accessed independently from vscode itself
- removed
  - `DendronWorkspace.instance` (use `getExtension`)
  - `DendronWorkspace.wsRoot` (use `getDWorkspace().wsRoot`)
  - `DendronWorkspace.vaults` (use `getDWorkspace().vaults`)
  - `DendronWorkspace.config` (use `getDWorkspace().config`)
  - `DendronWorkspace.extensionAssetsDir` (use `getDWorkspace().assetUri`)

### Usage

- any property that used to be accessed using `DendronWorkspace.instance` or `getWS` is now either a property of `getExtension` or `getDWorkspace`

### Related

- Work item: [[Tasks|scratch.2021.09.04.161012.workspace-refactoring-for-standalone-vaults#tasks]]
