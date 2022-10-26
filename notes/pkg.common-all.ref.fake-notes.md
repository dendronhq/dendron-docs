---
id: 2g9mqrh4nniqnfmc2m6n12c
title: Fake Notes
desc: ''
updated: 1666814881337
created: 1666814218791
---

- notes with `FAKE_ID_PREFIX`
- statically defined in [[../packages/common-all/src/dnode.ts]]
- used by:
    - `NoteUtils.createForFake`
        - loc: [[../packages/common-all/src/dnode.ts]]
        - usedBy:
            - loc: [[../packages/plugin-core/src/commands/CreateNoteWithTraitCommand.ts]]
              why: create temporary note to apply templates to
            - loc: [[../packages/plugin-core/src/features/ReferenceHoverProvider.ts]]
              snippet:
                ```ts
                engine.renderNote(fakeNote)
                ```

## Related
- [[dendron://dendron.docs/pkg.dendron-engine.api.engine.render-note]]