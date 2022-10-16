---
id: scdwuopw0yjq8829nigupqv
title: Log
desc: ''
updated: 1665889962510
created: 1665889952685
---

- updated: 2022-10-15
```
yarn run v1.22.19
$ cross-env UPGRADE_TYPE=patch PUBLISH_ENDPOINT=local USE_IN_MEMORY_REGISTRY=1 ./bootstrap/scripts/buildPatch.sh
starting verdaccio with in-memory cache to speed up build time
33073
building... upgrade: patch, endpoint: local build environment: local
running fast mode...
{"level":30,"time":1665874701488,"pid":33102,"hostname":"pro.lan","name":"SegmentClient","msg":"No cache path for Segment specified. Failed event uploads will not be retried."}
{"level":30,"time":1665874701489,"pid":33102,"hostname":"pro.lan","name":"SegmentClient","msg":"user telemetry setting: disabled by command"}
{"level":30,"time":1665874701491,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","args":{"_":["dev"],"upgradeType":"patch","upgrade-type":"patch","publishEndpoint":"local","publish-endpoint":"local","fast":true,"extensionTarget":"dendron","extension-target":"dendron","devMode":false,"dev-mode":false,"$0":"/Users/kevinlin/code/dendron/node_modules/.bin/dendron","cmd":"build"},"state":"enter"}
{"level":30,"time":1665874701491,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","args":{"_":["dev"],"upgradeType":"patch","upgrade-type":"patch","publishEndpoint":"local","publish-endpoint":"local","fast":true,"extensionTarget":"dendron","extension-target":"dendron","devMode":false,"dev-mode":false,"$0":"/Users/kevinlin/code/dendron/node_modules/.bin/dendron","cmd":"build"},"state":"setUpSegmentClient:pre"}
{"level":30,"time":1665874701491,"pid":33102,"hostname":"pro.lan","name":"SegmentClient","msg":"No cache path for Segment specified. Failed event uploads will not be retried."}
{"level":30,"time":1665874701491,"pid":33102,"hostname":"pro.lan","name":"SegmentClient","msg":"user telemetry setting: disabled by command"}
{"level":30,"time":1665874701491,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","msg":"Telemetry is disabled? true"}
{"level":30,"time":1665874701491,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","args":{"_":["dev"],"upgradeType":"patch","upgrade-type":"patch","publishEndpoint":"local","publish-endpoint":"local","fast":true,"extensionTarget":"dendron","extension-target":"dendron","devMode":false,"dev-mode":false,"$0":"/Users/kevinlin/code/dendron/node_modules/.bin/dendron","cmd":"build"},"state":"findWSRoot:pre"}
{"level":30,"time":1665874701492,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","args":{"_":["dev"],"upgradeType":"patch","upgrade-type":"patch","publishEndpoint":"local","publish-endpoint":"local","fast":true,"extensionTarget":"dendron","extension-target":"dendron","devMode":false,"dev-mode":false,"$0":"/Users/kevinlin/code/dendron/node_modules/.bin/dendron","cmd":"build"},"state":"enrichArgs:pre"}
{"level":30,"time":1665874701499,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","args":{"_":["dev"],"upgradeType":"patch","upgrade-type":"patch","publishEndpoint":"local","publish-endpoint":"local","fast":true,"extensionTarget":"dendron","extension-target":"dendron","devMode":false,"dev-mode":false,"$0":"/Users/kevinlin/code/dendron/node_modules/.bin/dendron","cmd":"build"},"state":"execute:pre"}
{"level":30,"time":1665874701499,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","ctx":"execute"}
{"level":30,"time":1665874701499,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","ctx":"build","currentVersion":"0.115.1","nextVersion":"0.115.2"}
prep publish local...
setting endpoint to local
skipping type-check...
bump version...
publish version...

Found 9 packages to publish:
 - @dendronhq/api-server => 0.115.2
 - @dendronhq/common-all => 0.115.2
 - @dendronhq/common-frontend => 0.115.2
 - @dendronhq/common-server => 0.115.2
 - @dendronhq/dendron-cli => 0.115.2
 - @dendronhq/dendron-viz => 0.115.2
 - @dendronhq/engine-server => 0.115.2
 - @dendronhq/pods-core => 0.115.2
 - @dendronhq/unified => 0.115.2

Successfully published:
 - @dendronhq/api-server@0.115.2
 - @dendronhq/common-all@0.115.2
 - @dendronhq/common-frontend@0.115.2
 - @dendronhq/common-server@0.115.2
 - @dendronhq/dendron-cli@0.115.2
 - @dendronhq/dendron-viz@0.115.2
 - @dendronhq/engine-server@0.115.2
 - @dendronhq/pods-core@0.115.2
 - @dendronhq/unified@0.115.2
sync assets...
sync static...
prep repo...
sleeping 10s for local npm registry to have packages ready
install deps...
compiling plugin...
$ yarn webpack:prod && ./scripts/varSub.sh && yarn package-web
$ webpack --config webpack.prod.js
assets by path static/ 8.52 MiB 77 assets
assets by path dendron-ws/ 524 KiB
  assets by path dendron-ws/tutorial/ 270 KiB
    assets by path dendron-ws/tutorial/treatments/ 244 KiB 39 assets
    assets by path dendron-ws/tutorial/common/ 26.1 KiB 3 assets
  assets by path dendron-ws/vault/ 252 KiB 10 assets
  assets by path dendron-ws/templates/*.md 1.57 KiB
    asset dendron-ws/templates/templates.daily.md 952 bytes [compared for emit] [from: assets/dendron-ws/templates/templates.daily.md] [copied]
    asset dendron-ws/templates/templates.meet.md 651 bytes [compared for emit] [from: assets/dendron-ws/templates/templates.meet.md] [copied]
assets by path *.js 10.6 MiB
  asset extension.js 6.58 MiB [emitted] [minimized] (name: extension) 2 related assets
  asset server.js 4.02 MiB [emitted] [minimized] (name: server) 2 related assets
  asset webpack-require-hack.js 115 bytes [compared for emit] [from: webpack-require-hack.js] [copied] [minimized]
asset dendron-yml.validator.json 38.5 KiB [compared for emit] [from: ../common-all/data/dendron-yml.validator.json] [copied]
orphan modules 1.88 MiB [orphan] 406 modules
runtime modules 5.22 KiB 18 modules
modules by path ./node_modules/ 14.8 MiB
  javascript modules 14.1 MiB 2329 modules
  json modules 688 KiB 39 modules
modules by path ../../node_modules/ 203 KiB 23 modules
modules by path ./src/ 1.27 MiB
  ./src/extension.ts + 1 modules 3.89 KiB [built] [code generated]
  ./src/server.ts 488 bytes [built] [code generated]
  + 5 modules
modules by path external "./ 84 bytes
  external "./webpack-require-hack.js" 42 bytes [built] [code generated]
  external "./prisma-shim" 42 bytes [built] [code generated]
+ 29 modules

WARNING in ./node_modules/@dendronhq/pods-core/lib/builtin/NextjsExportPod.js 154:15-63
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/@dendronhq/pods-core/lib/index.js 25:26-62
 @ ./src/workspace.ts 4:0-48 361:25-43
 @ ./src/_extension.ts 47:0-76 140:12-24 143:25-53 174:31-55 217:18-53 332:25-49 339:12-37 348:49-61 368:15-28 370:8-20
 @ ./src/extension.ts

WARNING in ./node_modules/express/lib/view.js 81:13-25
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/express/lib/application.js 22:11-28
 @ ./node_modules/express/lib/express.js 18:12-36
 @ ./node_modules/express/index.js 11:0-41
 @ ./node_modules/@dendronhq/api-server/lib/index.js 7:34-52
 @ ./src/server.ts 4:0-52 9:14-41 9:42-71

WARNING in ./node_modules/handlebars/lib/index.js 22:38-56
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/@dendronhq/common-server/lib/template.js 8:37-58
 @ ./node_modules/@dendronhq/common-server/lib/index.js 28:13-34
 @ ./src/logger.ts 2:0-56 58:22-34
 @ ./src/extension.ts 1:0-34 4:4-20 8:8-14

WARNING in ./node_modules/handlebars/lib/index.js 23:2-20
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/@dendronhq/common-server/lib/template.js 8:37-58
 @ ./node_modules/@dendronhq/common-server/lib/index.js 28:13-34
 @ ./src/logger.ts 2:0-56 58:22-34
 @ ./src/extension.ts 1:0-34 4:4-20 8:8-14

WARNING in ./node_modules/handlebars/lib/index.js 24:2-20
require.extensions is not supported by webpack. Use a loader instead.
 @ ./node_modules/@dendronhq/common-server/lib/template.js 8:37-58
 @ ./node_modules/@dendronhq/common-server/lib/index.js 28:13-34
 @ ./src/logger.ts 2:0-56 58:22-34
 @ ./src/extension.ts 1:0-34 4:4-20 8:8-14

WARNING in ./node_modules/keyv/src/index.js 22:14-40
Critical dependency: the request of a dependency is an expression
 @ ./node_modules/cacheable-request/src/index.js 11:13-28
 @ ./node_modules/got/dist/source/core/index.js 13:25-53
 @ ./node_modules/got/dist/source/create.js 17:15-32
 @ ./node_modules/got/dist/source/index.js 14:17-36 131:13-32
 @ ./node_modules/@notionhq/client/build/src/Client.js 20:14-28
 @ ./node_modules/@notionhq/client/build/src/index.js 4:15-34
 @ ./node_modules/@dendronhq/pods-core/lib/index.js 28:17-44
 @ ./src/workspace.ts 4:0-48 361:25-43
 @ ./src/_extension.ts 47:0-76 140:12-24 143:25-53 174:31-55 217:18-53 332:25-49 339:12-37 348:49-61 368:15-28 370:8-20
 @ ./src/extension.ts

3 warnings have detailed information that is not shown.
Use 'stats.errorDetails: true' resp. '--stats-error-details' to show it.

webpack 5.74.0 compiled with 6 warnings in 31219 ms
injecting variables
$ webpack --mode production --devtool hidden-source-map --config webpack.webext.js
asset test/suite/index.js 3.67 MiB [emitted] [minimized] [big] (name: test/suite/index) 2 related assets
asset extension.js 2.68 MiB [emitted] [minimized] [big] (name: extension) 2 related assets
orphan modules 218 KiB [orphan] 32 modules
runtime modules 2.75 KiB 16 modules
modules by path ./node_modules/ 8.06 MiB
  javascript modules 8.03 MiB 1325 modules
  json modules 30.2 KiB
    modules by path ./node_modules/browserify-sign/ 2.23 KiB 2 modules
    + 14 modules
modules by path ./src/ 515 KiB
  modules by path ./src/web/ 447 KiB 33 modules
  modules by path ./src/views/common/treeview/*.ts 12.5 KiB 3 modules
  modules by path ./src/*.ts 44.6 KiB 2 modules
  modules by path ./src/components/ 1.63 KiB 2 modules
  + 3 modules
+ 11 modules
webpack 5.74.0 compiled successfully in 18339 ms
package deps...
Executing prepublish script 'yarn run vscode:prepublish'...
$ npm run package-web

> dendron@0.115.2 package-web
> webpack --mode production --devtool hidden-source-map --config webpack.webext.js

asset test/suite/index.js 3.67 MiB [compared for emit] [minimized] [big] (name: test/suite/index) 2 related assets
asset extension.js 2.68 MiB [compared for emit] [minimized] [big] (name: extension) 2 related assets
orphan modules 218 KiB [orphan] 32 modules
runtime modules 2.75 KiB 16 modules
modules by path ./node_modules/ 8.06 MiB
  javascript modules 8.03 MiB 1325 modules
  json modules 30.2 KiB
    modules by path ./node_modules/browserify-sign/ 2.23 KiB 2 modules
    + 14 modules
modules by path ./src/ 515 KiB
  modules by path ./src/web/ 447 KiB 33 modules
  modules by path ./src/views/common/treeview/*.ts 12.5 KiB 3 modules
  modules by path ./src/*.ts 44.6 KiB 2 modules
  modules by path ./src/components/ 1.63 KiB 2 modules
  + 3 modules
+ 11 modules
webpack 5.74.0 compiled successfully in 20452 ms
 DONE  Packaged: /Users/kevinlin/code/dendron/packages/plugin-core/dendron-0.115.2.vsix (171 files, 8.82MB)
setRegRemote...
skip restore package.json...
{"level":30,"time":1665874833410,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","msg":"done"}
{"level":30,"time":1665874833410,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","args":{"_":["dev"],"upgradeType":"patch","upgrade-type":"patch","publishEndpoint":"local","publish-endpoint":"local","fast":true,"extensionTarget":"dendron","extension-target":"dendron","devMode":false,"dev-mode":false,"$0":"/Users/kevinlin/code/dendron/node_modules/.bin/dendron","cmd":"build"},"state":"execute:post"}
{"level":30,"time":1665874833412,"pid":33102,"hostname":"pro.lan","name":"dev <cmd>","args":{"_":["dev"],"upgradeType":"patch","upgrade-type":"patch","publishEndpoint":"local","publish-endpoint":"local","fast":true,"extensionTarget":"dendron","extension-target":"dendron","devMode":false,"dev-mode":false,"$0":"/Users/kevinlin/code/dendron/node_modules/.bin/dendron","cmd":"build"},"state":"exit"}
killing 
Done in 143.24s.

```