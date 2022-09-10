---
id: ua42a73kcaryy90uinp3hg3
title: Context
desc: ''
updated: 1662836958825
created: 1662836942691
---

## File Layout
This file layout will be used for subsequent examples

```
- root/ 
  - dendron.yml
  - notes/
    - root.md
    - note.md
  - a/
    - dendron.yml
    - notes/
        - root.md
        - note.md
  - b/
    - dendron.yml
    - notes/
        - root.md
        - note.md
  - c/
    - dendron.yml
    - notes/
        - root.md
        - note.md
```

## Legend
- AP: absolute path
- RP: relative path

## Current Behavior

Both absolute and relative paths are anchored to the directory where the topmost `dendron.yml` resides in. 
The downsides of this approach is that links inside of sub-vaults are not portable because they depend on a specific workspace configuration.
The relative path behavior is also not intuitive as it is not relative to the note but relative to the vault.

- from `root/notes/root.md`
  - AP: `[[/dendron.yml]]`: root/dendron.yml
  - RP: `[[./dendron.yml]]`: dendron.yml

- from `root/a/notes/root.md`
  - AP: `[[/dendron.yml]]`: root/dendron.yml
  - RP: `[[./dendron.yml]]`: dendron.yml


