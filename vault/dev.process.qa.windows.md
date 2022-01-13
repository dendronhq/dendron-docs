---
id: ydvcBHDK9gcghuHX
title: Windows
desc: ""
updated: 1642112644317
created: 1627594346414
---

## Authoring tests that work on Windows

In order to maximize platform coverage, we have tests that run on macOS, Ubuntu Linux, and Windows. If you are a developer on macOS or Linux, there are a few additional considerations to ensure that your tests will pass on Windows:

1. Check that asserts verifying the presence of a file at a specific directory are platform agnostic (forward slash and back slash issues). Furthermore, some API's differ in using a lower-case vs upper-case for the drive prefix; i.e. c:\ vs C:\. Always do case-insensitive string comparisons when doing file path checks. Solve these issues by using the `path` API when joining paths and always do case-insensitive checks.

Bad:

```typescript
expect(actualPath).toEqual(
"root/vault/beta.md")
);
```

Good:

```typescript
expect(actualPath.toLowerCase()).toEqual(
  path.join("root", "vault", "beta.md").toLowerCase()
);
```

2. Tests that execute some code where a command-line executable is run (for example, Git operations via `execa`). On Windows, these commands will run under a cmd shell instead of a bash shell and may interpret argument syntax differently.

For reference, take a look at a few example PR's below that fix issues similar to the ones mentioned above.

- https://github.com/dendronhq/dendron/pull/980
- https://github.com/dendronhq/dendron/pull/1011

### Skipping Windows Test (Last Resort)

If a test continues to fail despite trying the methods listed above, the test may be skipped using the following test runner for the plugin: [runTestButSkipForWindows](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/test/testUtilsV3.ts)

## Troubleshooting Windows CI Failures on Github Actions

![[dendron://dendron.docs/topic.gh-action.dev#run-windows-tests-only,1]]
