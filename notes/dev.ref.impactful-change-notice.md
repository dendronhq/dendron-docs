---
id: H7CgvT7YUYAiV7mEmGnky
title: Impactful Change Notice
desc: ''
updated: 1647232800124
created: 1630796807707
nav_order: 6.1
---

## Summary

This page contains a set of undergoing or completed changes that have a wide impact on the code base. Examples include significant refactoring projects and deprecation notices. Any larger pieces of work that you think other developers should be aware of should go here.

## Deprecation of tree view v2
- start: 2022.03.25
- status: WIP

### Summary
All code related to tree view v2 are marked deprecated. We will be enhancing tree view v1 moving forward.

### Rationale
- Originally, we wanted to use a single tree view for published dendron and dendron in vscode, thus introducing the webview
- The antd tree view does not lend itself well to collapsing on mobile and small screen sizes. 
  - After a few iterations, we ended up implementing a custom menu component to manage the "tree view" for published sites
- At this point, tree view v2 is only used in vscode. 
  - It is not native to vscode and is using the deprecated `dendron-next-server` method of rendering a web ui (by loading a page within an iframe instead of directly)
- we have an action item to remove `dendron-next-server` and consolidate all views within `dendron-plugin-views`.
  - Since treeview V2 no longer unifies publishing and the code UI, does not have native look and feel, and has some outstanding issues, we decided its best to just remove it completely.

## Deprecation of `ExtensionProvider.getWorkspaceConfig` and `IDendronExtension.getWorkspaceConfig`
- start: 2022.03.24
- status: WIP

### Summary

`getWorkspaceConfig` functions that depend on the extension have been deprecated. Please use `VSCodeUtils.getWorkspaceConfig` instead.

### Rationale

Workspace configuration actually has nothing to do with the extension. It is
handled by VSCode itself, and is ready before the extension even initializes.

## Deprecation of `StateService`
- start: 2022.03.14
- status: WIP

### Summary

StateService has been marked deprecated, and will be consolidated to use [[Metadata Service|dendron://dendron.docs/pkg.dendron-engine.ref.metadata-service]] instead.

### Rationale

Global and workspace state mementos can be hard to manage. There is a possibility that these could be wiped out by something that is not in Dendron's control. To make the logic that relies on these states to be much more stable, we are moving towards saving Dendron specific metadata on disk that would be shared across sessions and workspaces throughout.

## Deprecation of `setupBeforeAfter`
-start: 2022.03.07
- status: WIP

### Summary

The plugin testing harness `setupBeforeAfter` has been deprecated. Instead, you
can use `describeSingleWS` and `describeMultiWS` without a `ctx` variable.

For details, please see
[[Example|dendron://dendron.docs/pkg.plugin-core.qa.test#example]] for an
example, and [[Stubs|dendron://dendron.docs/dev.process.qa.test#stubs]] for how
to set up stubs with the new harnesses.

### Rationale

With the switch to the new `describe*WS` harness, we can now use mocha hooks
`before` and `after` instead. However, mixing these hooks with
`setupBeforeAfter` can cause weird effects due to how the hooks are ordered.
This is because `setupBeforeAfter` assumes you'll be setting up and tearing down
a workspace in each test, when the new harnesses set up the test for the whole
describe block and allow you to share the block across tests.

### Caveats

## Deprecation of `runLegacySingleWorkspaceTest` and `runLegacyMultiWorkspaceTest`

- start: 2022.02.03
- status: WIP

### Summary

The plugin testing functions `runSingleWorkspaceTest` and
`runMultiWorkspaceTest` have been deprecated. Please use `describeSingleWS` and `describeMultiWS` instead. Please see [[Writing Tests|dendron://dendron.docs/pkg.plugin-core.qa.test#writing-tests]] for and example of how to use these functions.

### Rationale

These functions are prone to errors, for example:
```ts
test("something", () => {
  runLegacySingleWorkspaceTest({
    ctx,
    onInit: async () => {
      expect(false).toBeTruthy();
    },
  });
});
```

This test should fail, but it actually will appear to pass. That's because
`runLegacySingleWorkspaceTest` immediately returns before the test in `onInit`
is done. The failure will appear in the test logs as an error message, but jest
will report the test as passing.

### Caveats

## Deprecation of `MDUtilsV4`

- start: 2022.01.25
- status: WIP

### Summary

`MDUtilsV4` has been deprecated, and replaced by `MDUtilsV5`.
Some useful utility functions in `MDUtilsV4` have been instead moved
to `MdastUtils`.

### Rationale

We have been slowly migrating to `MDUtilsV5` over the past few months without
explicitly deprecating `MDUtilsV4`. Despite attempts to make things backwards
compatible, this causes hard-to-debug issues where code mixes `V4` and `V5`.

### Caveats

`MDUtilsV5` does not yet implement the full functionality of `V4`. In particular
some functionalities like overrides and some markdown plugin options are not
supported. These will be slowly migrated over to `V5` and refactored.

---

## Deprecation of `getNotesByFname` and `getNoteByFnameV5` interfaces

- start: 2022.01.02
- status: WIP

### Summary

`getNotesByFname` and `getNoteByFnameV5` have been deprecated. They instead are now
replaced by `getNotesByFnameFromEngine` and `getNoteByFnameFromEngine`.

### Rationale

This change was made for performance reasons: the old interface had to do a
linear scan over all notes while the new interface only does 2 dict lookups,
greatly increasing performance for workspaces with lots of notes. Please use the
new interfaces in new code, and migrate the old code when possible.

### Caveats

- Views don't have the full engine available, so we'll need to continue using the old interface until this is fixed.
- If you are writing code that directly modifies engine.notes, please remember to keep `engine.noteFname` in sync. Existing functions like engine.updateNote are already updated so no additional work is needed if you use those.

## Migration of static `WSUtils` methods to a non-static `WSUtilsV2`

- start: 2021.12.24
- status: WIP

### Summary

This is part of [[Circular Dependency Refactor|dendron://dendron.docs/dev.ref.impactful-change-notice#circular-dependency-refactor]], that unwinds the circular dependencies that `WSUtils` introduces.

### Changes

- `WSUtilsV2` provides a non-static version of `WSUtils`.
- When a static method in `WSUtils` is needed, retrieve `wsUtils` from `IDendronExtension` interface and use the non-static version that exists in `WSUtilsV2` instead.
- If there is no corresponding non-static method in `WSUtilsV2`, add them to [[WSUtilsV2.ts|../packages/plugin-core/src/WSUtilsV2.ts]] and [[../packages/plugin-core/src/WSUtilsV2Interface.ts]] as needed.

## Circular Dependency Refactor

- start: 2021.12.02
- status: WIP

### Summary

We have numerous circular dependencies in plugin-core that is leading to unpredictable build failures. We need to refactor our code to eliminate the existing circular dependencies, and then put in place guards to prevent new circular dependencies from being introduced.

### Changes

- For developers, please see [[Avoiding Circular Dependencies|dendron://dendron.docs/dev.process.code.best-practices#avoiding-circular-dependencies]] for updated processes during check-in and review to avoid introducing new circular dependencies.
- A new webpack step will be added that detects circular dependencies. It's currently set to warn only, as there are still existing circular dependencies that need to be fixed. Once those are fixed, we will flip the check from warn to error to fail the build upon detection of circular dependencies.
- To fix the remaining circular dependencies, we need to refactor workspace.ts. The DendronExtension class contains various views, watchers, and services that end up calling static/singleton methods to re-access the other properties of DendronExtension, thus causing circular dependencies.

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

The new startup process is described [[here|pkg.plugin-core.lifecycle.startup#summary]]

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
