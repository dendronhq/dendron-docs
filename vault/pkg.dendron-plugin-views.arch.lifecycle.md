---
id: lZSr7StwPU5ukltzLg4mL
title: Lifecycle
desc: ''
updated: 1638728617918
created: 1636432981026
---



## Browser Mode - Startup

1. User runs `yarn:start` 
    This runs the following tasks:
    ```json
    "yarn build:index && node scripts/start.js"
    ```
    - NOTE: `build:index` generates the `index.html` file that is used to load the plugin. More details in [[Build Index|dendron://dendron.docs/pkg.dendron-plugin-views.ref.build-index]]
1. Remaining steps are described in [[view startup|#view-startup]]


## IDE Mode - Startup

TODO


## View Startup

1. Import a component and wrap it with its own DOM renderer
    - src/views/DendronNotePageView.tsx
    ```tsx
    import DendronNotePage from "../components/DendronNotePage";

    renderOnDOM(DendronNotePage)
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
- DendronVSCodeApp
    ```tsx
    DendronVSCodeApp {

        // see [[useEngine|dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle#useengine]]
        useEngine
        useEffect {
            postVSCodeMessage {
                type: INIT,
                source: webClient
            }
        }
        useVSCodeMessage {
            ...
        }
    }
    ```




1. Component
    - src/components/DendronNotePage.tsx
    ```tsx
    DendronNotePage {

        useRenderedNoteBody(noteProps, noteId) {
            renderedNoteContentHash = useRef
            if noteProps.contentHash != renderedNoteContentHash {
                engineSlice.renderNote noteId
            }
        }
        ...
    }
    ```

## Change Active Editor

- src/components/DendronApp.tsx
```tsx
useVSCodeMessage(msg) {
    ctx = "useVSCodeMsg"
    switch(msg) {
        case ON_DID_CHANGE_ACTIVE_TEXT_EDITOR {
            note, sync := msg
            log "onDidChangeActiveTextEditor"

            // update all notes
            if sync {
                log "syncEngine:pre"
                dispatch(initNotes)
            }
            // update one note
            if (syncChangedNote && note) 
                log "syncNote:pre"
                ideDispatch(engineSlice.syncNote)
            ...
            dispatch(setNoteActive(note))

        }
    }

}
```

## Common

### useEngine
- loc: common-frontend/src/features/engine/hooks.ts
- desc: initialize engine if its not initialized

```tsx
useEngine(engineState) {
    useEffect {
        if !hasInitialized(engineState)
            // see [[initNotes|dendron://dendron.docs/pkg.dendron-plugin-views.arch.lifecycle#initnotes]]
            dispatch(initNotes)
    }
}

```

### initNotes
- loc: common-frontend/src/features/engine/slice.ts
- desc: initialize notes for redux engine

```ts
// sideEffect, when initNotes is dispatched, state is set to Pending
effect(state, requestId) {
    when initNotes.pending {
        if (state.loading = "idle") {
            state.loading = LoadingStatus.PENDING;
            state.currentRequestId = meta.requestId;
        }
    }
}

initNotes {
    api = DendronApiV2.new
    resp = api.workspaceSync
    setFromInit(resp) {
        // set all variables
        state.notes = notes;
        state.wsRoot = wsRoot;
        state.schemas = schemas;
        state.vaults = vaults;
        state.config = config;
    }
}

// side effect, after notes are set, state is set back to idle
effect(state, requestId) {
    when initNotes.fulfilled {
        if (state = "idle" && state.currentRequestId === requestId) {
            state.loading = "idle"
            delete state.currentRequestId
        }

    }

}
  
```
