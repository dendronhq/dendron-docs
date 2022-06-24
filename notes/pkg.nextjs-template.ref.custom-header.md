---
id: fvnx3r24v4k3r5x4s5dzl88
title: Custom Header
desc: ''
updated: 1655606388216
created: 1655606085659
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

## Lifecycle

- NOTE: code here is written in [[Dendron Pseudocode|dendron://dendron.docs/ref.pseudocode]]

- [[../packages/nextjs-template/utils/build.ts]]
```ts
getCustomHead {
    ...
    publicDir = getPublicDir
    join(publicDir, "header.html");
}
```

- [[../packages/nextjs-template/pages/notes/[id].tsx]]
```tsx
getStaticProps {
    getCustomHead
}
```

[[../packages/nextjs-template/components/DendronNotePage.tsx]]
```tsx
Note(customHeadContent) {
    ...
    <DendronCustomHead content={customHeadContent} />

}

```

## Reference

## Cook

## Past Tasks
