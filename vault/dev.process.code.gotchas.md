---
id: wIQ79gTbKS54BQ9O0yByD
title: Gotchas
desc: ''
updated: 1647463024477
created: 1644372921976
---

### Changing File to Folder
![[dendron://dendron.docs/dev.process.code.gotchas.changing-file-to-folder]]

### Perform asynchronous functions against list of things

- BAD
```ts
// this doesn't do the right thing, will not actually await before returning
["one", "two"].forEach(ent => {
    await fs.ensureDir(ent);
});
```

- GOOD: use [[asyncLoopOneAtATime|dendron://dendron.docs/pkg.common-server#asynclooponeatatime]]
```ts
// this creates directories 'one' and 'two' 
await asyncLoopOneAtATime<string>(["one", "two"], (ent) => {
    return fs.ensureDir(ent);
});
```