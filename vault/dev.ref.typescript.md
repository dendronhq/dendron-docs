---
id: aFzR4j0DfC58v57uIJiN7
title: TypeScript
desc: ''
updated: 1638918039894
created: 1638137515821
---

## Gotchas
- typescript is compiled javascript. it generates definition files with the following suffix: `*.d.ts`
    - these files can show up when you use "Go to Definition" - know that what you're looking at is not the source code in these cases but the definition of the source code
    - to find the actual source code, look for files under `src/` directory
- `src` vs `lib`
    - when your navigating the codebase, your IDE will show you the same file in both `lib` and `src` folder
        - lib folder has the compiled assets and is rarely what you want
