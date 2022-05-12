---
id: iq62hX68VeUU0z0FyYmWf
title: Dendron Docs in Workspace
desc: ''
updated: 1650659651242
created: 1639513795145
---

The `dendron` monorepo that contains all the code also contains a Dendron
workspace. This workspace includes vaults for internal developer documentation
(dendron-docs) as well as the external user documentation
(dendron.dendron-site).

You can install Dendron in the same VSCode as the one you are developing the
extension in, you will have access to the documentation as you code.
If you see any links to the documentation inside the code like `// See more [[here]]`,
you can use "Dendron: Goto Note" to navigate to that note and see the documentation.

## Looking up docs

You can use `Lookup` when inside of the main dendron workspace to browse anything in [[Dendron Developer Docs|dendron://dendron.docs/home]] or the [[Dendron User Docs|dendron://dendron.dendron-site/dendron]]

- TIP: if you use the command palette, you can navigate to [[../docs.code-search]] (or use ctrl+enter) to search through the docs using a search editor. See video [here](https://www.loom.com/share/f53a26462f514cc29a89961a1584cc99?from_recorder=1&focus_title=1). NOTE: if you do this, do not save the changes as the search editor writes all changes to disk. Simply discard the changes when done

## Where to document what?

### In comments/docstrings

- Low-level implementation details
    ```ts
    const start = point.start.line + 1 /* offset because it's 1-indexed */;
    ```
    ```ts
    // No-op if we're not in a Dendron Workspace
    if (!DendronExtension.isActive()) {
        return;
    }
    ```
- Explanation of function parameters
    ```ts
    /**
     * Generates a file name for a journal or scratch note.
     *
     * @param type 'JOURNAL' | 'SCRATCH'
     * @param opts Options to control how the note will be named
     * @returns The file name of the new note
     */
    static genNoteName(
        type: "JOURNAL" | "SCRATCH" | LookupNoteTypeEnum.task,
        opts?: CreateFnameOpts
    ) // ...
    ```

### In Dendron docs

- High level overview
    ```md
    ## Summary

    The engine is the main interface into the core dendron functions (lookup, rename, delete, etc). 
    ```
- When rich markdown (figures, tables etc.) are needed
    ```md
    ## Initialization

    '``mermaid
    sequenceDiagram
        participant client
        participant engine
        ...
    ```

## How to document

You can follow an [[amoeba|dendron.guides.workflows.amoeba]] style workflow for
documenting the code.

- When writing code, start by adding comments and docstrings
- Once the docstrings are starting to become larger than a paragraph or two, move it to a note and link to it
- If you are making large changes or design decisions, add a high level overview to Dendron docs

## Gotchas

- When debugging the development version of Dendron, opening a new workspace in the development version may cause an error message.
    - If that happens, stop debugging and restart.
- The development version can't open the same workspace as one that you have already open.
    - If you have to open that workspace, either close the other instance or make a copy of it and test on the copy.
- If you are on an older VSCode version, this may not work correctly.
    - Make sure you are on the latest VSCode version.
