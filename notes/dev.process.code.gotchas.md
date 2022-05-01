---
id: wIQ79gTbKS54BQ9O0yByD
title: Gotchas
desc: ''
updated: 1647483587712
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

For the reason why this is necessary, please see https://stackoverflow.com/questions/37576685/using-async-await-with-a-foreach-loop.