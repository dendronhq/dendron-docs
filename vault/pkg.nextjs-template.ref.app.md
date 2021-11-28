---
id: zqt3tTxGR3K2xNuTV5fP9
title: App
desc: ''
updated: 1638049369689
created: 1638049342169
---

## Summary

Describes structure of Dendorn Nextjs App

## Details

- pages/_app.tsx
```tsx
<DendronApp>
    <DendronLayout>
        <Component/>
    </DendronLayout>
</DendronApp>
```


- components/DendronLayout.tsx
```tsx
<Layout>
    <Sidbar/>
    <Content>
        <Breadcrumb/>
        {React.children}
    </Content>
</Layout>
```

## Related
- [[Dendron Note Page|dendron://dendron.docs/pkg.nextjs-template.ref.dendron-note-page]]