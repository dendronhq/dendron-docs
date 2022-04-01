---
id: pMS27sHxbWeKMoPRrWEzs
title: Best Practices
desc: ''
updated: 1648808047202
created: 1643200441685
---

## Summary

This page covers best practices when implementing code changes. [[dev.process.code]] focuses on code conventions (which are also a part of best practices), while this page covers higher level concepts.

## High Level

1. Reduce State - code written with minimal state are easier to test and reason about then code with state
1. Reduce coupling - code that is loosely coupled is better than the opposite
1. Reduce complexity - code that is simpler is better
1. Reduce code - code that is not duplicated 

### Reduce coupling

When introducing abstractions, beware of coupling. In general, we'd rather have two separate implementations of a thing than forcing two unrelated functions to use, for example, a common base class, to safe on lines of code. 

Unless you're relatively certain that something will be re-used, we default to implementing a thing two or three times. If at that point we notice that it does indeed share a lot in common, we will create a common abstraction for it.

## Avoiding Circular Dependencies

New code should not introduce any new circular dependencies, particularly in the [[pkg.plugin-core]] package.  We are actively working on getting to 0 circular dependencies.

### Ensure no new circular dependencies are being added

Before submitting a pull request, ensure that you are not adding new circular dependencies.  Circular dependencies in plugin-core may be added under the following conditions:
1. You have code changes in the [[pkg.plugin-core]] package.
1. You add new imports to an existing file.

A push hook has been added that checks if any new circular dependencies are being added to plugin-core. It will automatically fail the push if you've introduced any new circular dependencies. If this check fails, see the link below on identifying the new circular dependencies that have been added.

### Identifying circular dependencies introduced by a PR
See [[Check for Circular Dependencies|dendron://dendron.docs/dev.process.code.sop.check-for-circular-dependencies]]

## Deprecate old versions of APIs and functions

If we want to make changes to a commonly used function signature, then first assess if it's feasible to refactor existing usages to the new signature.  If the scope is too large or the risk of regression is too large, then we can create a versioned instance of the API.  When doing this, make sure to mark the previous version with the `@deprecated` tag so that people will know to use the newer API.

Furthermore, if you're touching a file that uses a deprecated API, please change the deprecated instances as part of your changelist. In VSCode, any deprecated function call will have a ~~strikethrough~~ the function name.

Some examples:

```typescript
  /**
   * Check if a path belongs to a workspace
   @deprecated - use {@link WorkspaceUtils.isPathInWorkspace}
   */
  isPathInWorkspace(fpath: string) {
    const vaults = ConfigUtils.getVaults(this.config);
    const wsRoot = this.wsRoot;
    return WorkspaceUtils.isPathInWorkspace({ fpath, vaults, wsRoot });
  }
```

## Going outside of the typescript compiler

We are moving to do strict typechecking on the entire codebase. Sometimes, especially during testing, we might need to do typecasts of the form `foo!.bar` or use `@ts-ignore`. 
In order to do this, we use the following convention `UNSAFE_{your-method-name}` for type casts. 
This groups all unsafe casting in a common place and will allow us to turn on strict type checking on the rest of the code base
