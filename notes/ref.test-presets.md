---
id: gP80wWYcM7CxNaiIX0D6o
title: Test Presets
desc: ""
updated: 1651198922738
created: 1637807508326
---

## Summary

Dendron has various presets that create a workspace with various sample notes. They are described here

Location: [[../packages/engine-test-utils/src/presets/engine-server/utils.ts]]

### setupBasic

- vault1
  - foo
  - foo.ch1
  - bar

### setupBasicMulti

- vault1
  - root
  - foo
  - foo.ch1
- vault2
  - root
  - bar
- vault3
  - root

### setupLinksBase

- [[NOTE_WITH_TARGET|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets#note_with_target]]
- [[NOTE_WITH_ANCHOR_LINK|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets#note_with_anchor_link]]
- await NoteTestUtilsV4.createNote({
  wsRoot,
  body: "[[some label|beta]]",
  fname: "omega",
  vault: vault1,
  });

## Related

- [[Plugin Tests|dendron://dendron.docs/pkg.plugin-core.qa.test]]
- [[All other tests|dendron://dendron.docs/pkg.engine-test-utils.qa.test]]
