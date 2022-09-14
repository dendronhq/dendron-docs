---
id: ypaq3lst68ukve9gqbrde08
title: Open a Note Programatically
desc: ''
updated: 1663172396089
created: 1663172391470
---


```ts [src/test/suite-integ/GoToSibling.test.ts](https://github.com/dendronhq/dendron/blob/d536cf34e3b5cdbea5e095126485194cbcdcd809/packages/plugin-core/src/test/suite-integ/GoToSibling.test.ts#L385)
const ext = ExtensionProvider.getExtension();
await new WSUtilsV2(ext).openNote(note);
```