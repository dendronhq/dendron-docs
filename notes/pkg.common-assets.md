---
id: eMcjzkqYCRdxggs7o7nqm
title: Common Assets
desc: ""
updated: 1664359953390
created: 1637163989716
---

## Summary

This packages hold assets for Dendron Views. During the [[build step|dendron://dendron.docs/pkg.plugin-core.quickstart#^OI7k28ZBdX9W]], assets from this package are concatenated and copied into [[pkg.nextjs-template]] and [[pkg.dendron-plugin-views]] (TODO: need to refactor logic from `dendron-plugin-views`, currently assets are being built separately there).


## Details
- this will copy over
  - antd styles
  - prism styles
  - primary fonts
  - katex fonts
  - misc javascript

## Layout

- common-assets
  - assets/
    - css/
      - prism/
        - dark.css
        - light.css
      - antd/
        - dark.css
        - light.css
      - ...

## LifeCycle

### Build Styles
- [[../packages/common-assets/scripts/buildStyles.js]]

```ts
antdThemes
prismThemes
katex
fontello

writeStyles(...)
copy(katex)
copy(topRooto)
copy(fontello)
```

```ts gen:theme
gulp("assets/js/*.js")
```

```ts build:js
gulp("assets/js/*.js")
```

### Sync
1. User runs `yarn setup` in Dendron monorepo
2. The last step after all packages are build, is running
   ```sh
   dendron dev sync_assets --fast
   ```
   - this runs `DevCommands.SYNC_ASSETS` command in [[../packages/dendron-cli/src/commands/devCLICommand.ts]]
   ```ts
   // Takes assets from different monorepo packages and copies them over to the plugin
   syncAssets {
       // sync assets to plugin
       syncStaticAssets
       syncStaticAssetsToNextjsTemplate
   }
   ```
   - syncStaticAssets: [[../packages/dendron-cli/src/utils/build.ts#^gg4woyhxe1xn]]
   ```ts
   pluginStatic = "plugin-core/assets/static"
   
   ensureDir(pluginStatic)
   emptyDir(pluginStatic)
   copy("common-assets/assets/css", pluginStatic)
   copy("common-assets/build/assets/css/font", pluginStatic + "css/themes/fonts")
   copy("common-assets/assets/js", pluginStatic + "js)

   copy("plugin-views/build/static/css", pluginStatic + "css")
   copy("plugin-views/build/static/js", pluginStatic + "js")
   
   ```
   - syncStaticAssetsToNextjsTemplate: [[../packages/dendron-cli/src/utils/build.ts#^gxyyk2p87a5z]]
   ```ts
   templateAssetPath = "nextjs-template/public/assets-dendron"
   ensureDir(templateAssetPath)
   emptyDir(templateAssetPath)
   copy("common-assets/build/assets", templateAssetPath)
   copy("common-assets/build/top", "nextjs-template/public")
   ```

### Style changes

When doing changes inside [[../packages/dendron-plugin-views/src/styles/scss]] or [[../packages/nextjs-template/styles/scss]] you must bring them back into the source-of-truth of these styles which is in [[../packages/common-assets/styles/scss/]]. Git then will recognize the changes in the latter location since the former two locations are gitignored.

## Related

- [[Plugin Views - Build Styles|dendron://dendron.docs/pkg.dendron-plugin-views.ref.build-styles]]
- [[dendron://dendron.docs/pkg.plugin-core.ref.assets-file-layout]]
