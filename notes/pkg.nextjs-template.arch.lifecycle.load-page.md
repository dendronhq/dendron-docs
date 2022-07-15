---
id: tyf578aqzw8l6o36tth8u4v
title: Load Page
desc: ''
updated: 1657917281795
created: 1651777492898
---

## Load

The load phase is what happens inside the webapp when you first load the page.

State and UI is handled by React and Redux.

### Pseudocode

- [[../packages/nextjs-template/pages/_app.tsx]]

- the app uses metadata files generated in the build step. You can see whats in these files [[here|dendron://dendron.dendron-site/dendron.topic.pod.builtin.nextjs#references]]

- NOTE: this is **VERY UNOPTIMIZED** at the present (we load up all notes and put them into redux - the only saving grace is that this is not blocking - the initial payload for each individual site is compiled and will load when te site does)

```tsx
DendronApp {

  useEffect {
    log "fetchNotes:pre"
    data = fetchNotes { fetch("/data/notes.json") }
    log "fetchNotes:got-data"
    setNoteData data
    fetchConfig { fetch("/data/dendron.json") }
  }

  // render note
  ...
}
```

### Note

- components/DendronNotePage.tsx

```tsx
Note {
  id = getActiveNoteId
  // render note based on id
}
```

##
