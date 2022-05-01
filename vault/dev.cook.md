---
id: a80f36d9-01d0-4c5a-a228-867b093a4913
title: Cookbook
desc: ''
updated: 1646189605134
created: 1599151918645
nav_order: 4.1
---

## Summary

Common recipes on doing common operations inside the Dendron codebase


## Git

### Adding a new husky hook

The following is an example of adding a hook that checks whether any imports have the form `"../(common-frontend|...)"` and fail to push if so

```diff
+++ b/hooks/pre-push.js
@@ -2,6 +2,7 @@ const {checkToken} = require("./common");
 const {exec} = require("./exec");

 function main() {
   // Where we would push if we ran `git push`
   let upstream;
   try {
@@ -9,15 +10,18 @@ function main() {
   } catch {
     // Fallback to first origin if none are set
     upstream = `${exec("git remote").stdout.trim().split("\n")[0]}/master`;
   }
   // The files that would get pushed
   const filesToPush = exec(`git diff --name-only ${upstream}`).stdout.split('\n');

   return checkToken({
     filesToCheck: filesToPush,
     forbiddenTokens: {
       ".only": { rgx: /(describe|it|test)\.only/, fileRgx: /\.spec\.ts$/ },
       "debugger;": { rgx: /(^|\s)debugger;/, fileRgx: /\.ts$/ },
+      "rel import of monorepo pkg": { rgx: /(\.\.\/(common-frontend|common-all|common-server|engine-server|dendron-cli|pods-core|api-server|common-test-utils|engine-test-utils|dendron-next-server))/, fileRgx: /\.ts[x]?$/ },
     }
   });
 }
```

### Git Ignore Blame

In case of large refactorign changes, we want to not overwrite authorship and commit history.

In the project root, run the following after you have commited your styling changes to preserve the history.

```sh
echo $HASH_OF_COMMIT >> .git-blame-ignore-revs
```

You can see an explanation of how it works [here](https://git-scm.com/docs/git-blame#Documentation/git-blame.txt---ignore-revs-fileltfilegt)

## Config

### Update JSON Config with comments

Dendron works with JSON with comments when working the a vscode workspace file, snippets file or the keybindings file. When making a change here, take care to both read and write to the file while preserving comments.

You'll want to make sure to use the following functions to read, assign and write json with comments

```ts
async function readJSONWithComments(fpath: string)
function assignJSONWithComment(jsonObj: any, dataToAdd: any) {
function writeJSONWithComments(fpath: string, data: any)
```

### Adding a general configuration

See [[Add New Config|dendron://dendron.docs/pkg.common-all.dev.cook#add-new-config]]

## Utilities

### Adding a new utility

When adding a new utility function, we want it to go in the most accessible location. In order of preference:

- [[pkg.common-all]]
- [[pkg.common-server]]
- [[pkg.dendron-engine]]
- user facing package (eg. dendron-cli, plugin-core, etc)

- NOTE: when adding a utility that is configuration related, add it to `ConfigUtils` or create a `{Module}ConfigUtils` class to encapsulate that logic. see discussion [here](https://github.com/dendronhq/dendron/pull/1960/files/8882a2d33e58fcad2eb888a69dcb7c9969a6b647#r786228021)

### Getting absolute path for a vault

![[dendron://dendron.docs/pkg.dendron-engine.dev.cook#getting-absolute-path-for-a-vault,1:#*]]

### Synchronously loop through async results

![[Async operations in series|dendron://dendron.docs/dev.process.code#in-series,1]]

## Views

_Webviews, including as Preview, TreeViewV2, Calendar View_

### Preview Panel

#### Getting Access to Preview Panel

- Within plugin-core code, to access the preview panel (in order to show it, for example), you should inject an instance of `PreviewProxy` rather than using the `vscode.webviewPanel` directly.
- As an entry point from vscode UI contribution points (such as command palette, or context menus), the `ShowPreview` vscode command should be used.
    - If you want to open the preview with default preview behavior, such as having the preview show the contents of the in-focus Dendron note, call the command with no arguments
    - If you want to open the preview with specific contents (for example, showing a non-Dendron markdown file via a context menu), then pass in the information via a `NoteProps` object to the `ShowPreview` command.
