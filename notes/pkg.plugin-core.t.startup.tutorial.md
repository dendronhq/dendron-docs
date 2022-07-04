---
id: 0gwllgnpf8y0yv6lakdlnd1
title: Tutorial
desc: ''
updated: 1656872959315
created: 1656871790110
---


## Tutorial
- [[../code/dendron/packages/plugin-core/src/workspace/tutorialInitializer.ts]]

## Link Tracking
- [[../code/dendron/packages/plugin-core/src/components/views/PreviewLinkHandler.ts]]

- NOTE: this is only used for tutorial notes

```ts
onLinkClicked {
    isWebUri {
        track {
            TutorialPreviewLinkClicked,
            LinkType: WEBSITE
            href,
        }
    }
}
```