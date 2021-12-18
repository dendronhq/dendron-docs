---
id: yjIf0tl2Id7vhluRL8Edz
title: Caching
desc: ""
updated: 1639855328751
created: 1639855161909
---

## Summary

Dendron caches meta data to avoid indexing eveyrthing on startup

## Details

What is cached:

- frontmatter variables
- hash of note contents

What is NOT cached:

- vault (this is stored by absolute path, can be different if you start vault in different machines)

The speedup comes from not parsing the frontmatter on subsequent restarts

## Related

- [[Engine Initialization|dendron://dendron.docs/pkg.dendron-engine.ref.engine#init]]
