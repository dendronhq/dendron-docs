---
id: KSIlXY5i8xuTOHiCVS4H0
title: Styles
desc: ''
updated: 1643673861950
created: 1643673823627
---

## Summary

How styling is done in Dendron

## Details

- NOTE: this is excert from discord conversation, has not been formatted yet: https://discord.com/channels/717965437182410783/937843704255889439/937859891484299315

Docs for asset generation are here:
- [[Common Assets|dendron://dendron.docs/pkg.common-assets]]

Asset for nextjs-template come from following places:
    - [[Common Assets|dendron://dendron.docs/pkg.common-assets]]
        - antd themes
        - prism themes
        - katex themes
    - nextjs-template/styles
        - everything else
        
Docs for [[Dendron Plugin Views|dendron://dendron.docs/pkg.dendron-plugin-views]] here:
    - [[Build Styles|dendron://dendron.docs/pkg.dendron-plugin-views.ref.build-styles]]


NOTE: there are currently 3 sources of truth for styles.

For `nextjs-template` (the website), styles come from:
    - `nextjs-template/styles`
    - `common-assets`

From `dendron-plugin-views` (the prevew), styles come fron
    - `dendron-next-server`

`dendron-next-server` has duplicate style sheets for `antd, prism, etc`. This is a legacy package we are currently deprecating

The future architecture will be:
- `common-assets` for everything
- web/preview specific styles in their respective packagse

Practicaly speaking, it means you need to do scroll bar changes in two places:
- [[../packages/nextjs-template/styles/scss/main.scss]]
- [[../packages/dendron-next-server/styles/scss/main.scss]]