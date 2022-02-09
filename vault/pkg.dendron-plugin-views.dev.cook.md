---
id: naGvfhYGH7N0BEmcqc7ET
title: Cook
desc: ""
updated: 1644372007396
created: 1636233555730
---

### Adding a new Tree View

- example of adding a tree view [[here|dendron://dendron.docs/pkg.dendron-plugin-views.ref#^BC7MPxEUDlfB]]

#### Creating the view

Instructions here are similar to [[#adding-a-new-editor-view]]. Please jump to documentation there for additional details.

#### Integrate the view with the plugin

1. Add new enum to `DendronTreeViewKey`
   ```ts
   export enum DendronTreeViewKey {
       ...,
       TREE_VIEW_V2 = "dendron.tree-view",
   }
   ```
1. Edit description to `TREE_VIEWS`
   ```ts
   TREE_VIEWS = {
       ...,
       [DendronEditorViewKey.TREE_VIEW_V2]: {
           ...
       },
   }
   ```
1. Update `constants.ts`

- src/constants.ts
  ```ts
  DENDRON_VIEWS = [
      ...,
      {
          ...treeViewConfig2VSCodeEntry(DendronTreeViewKey.TREE_VIEW_V2),
          where: "explorer",
      },
  ]
  ```

1. Update `package.json`
   ![[Modifying contributes in package.json|dendron://dendron.docs/pkg.plugin-core.dev.cook#modifying-contributes-in-packagejson:#*]]
1. Create the webview
   - see `src/views/DendronTreeViewV2.ts` for an example
1. Initialize webview on start
   ```ts
   DendronExtension {
       ...
       setupViews {
           ...
           const provider = new DendronTreeViewV2();
           vscode.window.registerWebviewViewProvider(
               DendronTreeViewV2.viewType,
               provider,
           )
       }
   }
   ```

### Changing the theme

By default, plugin-views starts with the light theme. You can change this by parssing a `THEME` env variable when starting

```sh
THEME=dark yarn start
```

### Simulate Change Activate Editor in Browser Mode

- TIP: You can change the id to any id inside of [[dev.ref.test-workspace]] to see how different views function

```ts
id = "9eae08fb-5e3f-4a7e-a989-3f206825d490";
window.postMessage({
  type: "onDidChangeActiveTextEditor",
  data: { note: { id } },
  source: "vscode",
});
```
