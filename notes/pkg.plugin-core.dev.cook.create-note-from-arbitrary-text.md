---
id: h7k2cqkjnlxjgzpvcn6yw19
title: Create Note from Arbitrary Text
desc: ''
updated: 1652286680056
created: 1652286680056
---

In some cases, like when previewing a non-note markdown file, we sometimes need
to reference a file that's not a note. Since a lot of Dendron APIs need note
objects, you can create a pseudo-note for these files.

Create one using
[[DNode.createForFile|../packages/common-all/src/dnode.ts#L1287]]. This will
create a fake note object and a fake vault object. Created objects are not added
to the engine automatically, temporarily add and then remove them if needed.

You can check if a note is a pseudo-note using [[DNode.isFileId|../packages/common-all/src/dnode.ts]] on a note's id.
