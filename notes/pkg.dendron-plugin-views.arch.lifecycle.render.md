---
id: tkatt3zdn17sbuo9hfhxihz
title: Render
desc: ''
updated: 1650647825991
created: 1650647814733
---


#### renderIndex
1. Import index
- src:  [[../packages/dendron-plugin-views/src/index.tsx]]
```ts
VIEW_NAME = process.env["REACT_APP_VIEW_NAME"] || "";
...
View = require(VIEW_NAME)
```

#### renderDendronVsCodeApp
1. Import a component and wrap it with its own DOM renderer
    - NOTE: the following uses `src/views/DendronNotePageView.tsx` as an example
   ```tsx
   import DendronNotePage from "../components/DendronNotePage";

   renderOnDOM(DendronNotePage);
   ```
1. renderOnDOM
   - this is a helper: wraps the component with the parent `DendronApp` container and renders it using `ReactDOM`
   ```tsx
   renderOnDOM(Component) {
       ReactDOM.render(
           {renderWithDendronApp(Component)}
       )
   }
   ```
1. renderWithDendronApp
   - wraps the component with `DendronVSCodeApp`
   ```tsx
   DendronApp {
       <Provider>
           <DendronVSCodeApp />
       </Provider>
   }
   ```
- DendronVSCodeApp ^MXu9QPtvmOvr
    - source: [[../packages/dendron-plugin-views/src/components/DendronApp.tsx]]
  ```tsx
  DendronVSCodeApp {
      ctx = "DendronVSCodeApp"

      log "enter", workspace
      // see [[useEngine|dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle#useengine]]
      useEngine
      useEffect {
          // tell vscode that client has loaded
          postVSCodeMessage {
              type: INIT,
              source: webClient
          }
      }
      // listen to vscode messages
      // on INIT, vscode will send over all current notes and schemas
      useVSCodeMessage {
          ...
      }
  }
  ```

#### renderCustomComponent
- src/components/DendronNotePage.tsx

   ```tsx
   DendronNotePage {

        // this renders the note page
        // noteProps is obtained from vscode and passed in via redux
       useRenderedNoteBody(noteProps, noteId) {
           renderedNoteContentHash = useRef
           if noteProps.contentHash != renderedNoteContentHash {
               engineSlice.renderNote noteId
           }
       }
       ...
   }
   ```
