---
id: sv0uui56vzmovozg0rwkeuq
title: Add a Tree View
desc: ''
updated: 1657156911460
created: 1648306809785
---

Example of adding a tree view [[here|dendron://dendron.docs/pkg.dendron-plugin-views.ref#^BC7MPxEUDlfB]]

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

1. Update `package.json` ![[dendron://dendron.docs/pkg.plugin-core.dev.cook.update-pkg-json#steps,1]]
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