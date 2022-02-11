---
id: 7MLCpIb0ITppTZ3qwMi1A
title: Lifecycle
desc: ""
updated: 1644533207007
created: 1636642644504
---

## Summary

This goes over the lifecycle of a Dendron Nextjs Page from note to published site.

There are three phases to generate the static assets:

- **build** metadata
- **compile** static assets
- **load** webapp

## Build

The build phase compiles the necessary metadata from your Dendron workspace so that our nextjs template can generate all pages statically ahead of time.

It involves the following steps

- the user runs `dendron publish build`
- dendron inspects `dendron.yml` to figure out subset of notes to build
- generate payloads and metadata for static site

The actual build process is done using the [[Nextjs Pod|dendron://dendron.docs/pkg.pods-core.ref.nextjs]] (click through for more details on the process)

The following is some pseudocode that goes over some of the steps.

### publish build

How notes are filtered for publishing

- [[../packages/engine-server/src/topics/site.ts]]

```ts
SiteUtils.filterByConfig {
  ...
}
```

### filterByConfig

- last updated: 2022-01-01

```ts
// get hierarchies that will be published
siteHierarchies := sconfig

domainsAndhiearchiesToPublish = siteHierarchies.map h => {
  return filterByHiearchy(h)
}

...
```

### filterByHiearchy

```ts
filterByHiearchy(domain, notes) {
  hconfig := getConfigForHierarchy

  notes = notesGet(domain, notes)
  if notes.length > 1 {
    domainNote = handleDup(...)
  } else {
    domainNote = notes[0]
  }

  ...
  processQ = [domainNote]
  while processQ {
    note = processQ.pop
    maybeNote = filterByNote(note)
    if (!maybeNote) return;

    children = getChildren(maybeNote)
    ...
    children.filter(canPublish)!

    children.forEach {
      processQ.push it
    }
  }
}
```

## Compile

The compile phase generates the static HTML that is deployed to the server. This is handled by `next export`.

The bulk of the work is done by inside [the `[id]` page](https://github.com/dendronhq/nextjs-template/blob/main/pages/notes/%5Bid%5D.tsx#L1:L1) by making use of the [data fetching](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation) capabilities of NextJS that lets us compile all pages ahead of time during export.

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
