---
id: dpCnjhyzVVjYZqKQ3wPA4
title: Logs
desc: ''
updated: 1639595750501
created: 1628345272665
---

## Writing Logs

Logs are important for debugging and we should strive to have logs that will give enough information that we can debug any errors from the logs alone. Because we're dealing with users personal notes, we also need to ensure not to log any sensitive information.

If you need to log data, use one of the following loggers depending on what package you are in:

- plugin-core: use [Logger](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/logger.ts#L22:L22)
- react component: use [createLogger](https://github.com/dendronhq/dendron/blob/master/packages/common-frontend/src/utils/logger.ts#L3:L3) in common-frontend
- everything else: use [createLogger](https://github.com/dendronhq/dendron/blob/master/packages/common-server/src/logger.ts#L36:L36) in common-server

Also note that many objects (eg. commands, pods, etc), have an instance of the logger attached to them. You should use them whenever available. They are usually attached as a `.L` or `.logger` property.

- pods have loggers attached in `this.L`

Some things to keep in mind:

- Do not use `console.log` to log data
- Raw note objects contain note content which we never want to log. Instead, use [`NoteUtils.toLogObj`](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/dnode.ts) which strips out sensitive fields to the logger.

## Reading Logs

This describes the expected logs for certain Dendron operations

- TIP: it's recommended that you install the [Timestamp Converter](https://marketplace.visualstudio.com/items?itemName=Stalinbalraj.timestamp-converter) extension to convert timestamps into your local date

You can control the log level in the workspace settings using `dendron.logLevel`. This sets the log level for the plugin and well any server it launches. You will need to restart the workspace for the log level to take effect.

### [[Startup|pkg.plugin-core.lifecycle.startup#summary]]

#### normal

##### init

```yml
# first log line
- "name":"dendron","ctx":"Logger:configure","msg":"exit","logLevel":"info"
- "name":"dendron","ctx":"_activate","stage":"prod","isDebug":false, ...
...
- "name":"dendron","ctx":"_activate","config":{...},"configMigrated":false,"msg":"read dendron config"}
- {"level":30,"time":1628346133526,"pid":10096,"name":"dendron","ctx":"_activate","installStatus":"NO_CHANGE","currentVersion":"0.53.0","previousWorkspaceVersion":"0.53.0","previousGlobalVersion":"0.53.0","platform":"darwin","extensions":[...],"vaults":[...]}
```

##### start engine process

```yml
# start engine process
- "name":"execServer","state":"enter"
  - {"level":30,"time":1628346133530,"pid":10096,"name":"execServer","state":"post:exec.node"}
  - {"level":30,"time":1628346136465,"pid":10096,"name":"execServer","state":"message","message":"49847"}
  - {"level":30,"time":1628346136465,"pid":10096,"name":"dendron","ctx":"WSUtils.handleServerProcess","msg":"subprocess running","pid":10114}
  - {"level":30,"time":1628346136465,"pid":10096,"name":"dendron","ctx":"_activate","msg":"post-start-server","port":49847,"durationStartServer":4056}
```

##### finish indexing notes

```yml
# start indexing
- {"level":30,"time":1628346136469,"pid":10096,"name":"dendron","ctx":"dendron.reloadIndex:run","msg":"pre-execute"}
  - {"level":30,"time":1628346136469,"pid":10096,"name":"dendron","ctx":"ReloadIndex.execute","msg":"enter"}
  - {"level":30,"time":1628346136576,"pid":10114,"name":"logger","ctx":"parseSchemaModuleOpts","fname":"root","root":{"fsPath":"vault","workspace":"users","name":"users","sync":"sync"},"imports":[]}
  - ...
# finish indexing
- {"level":30,"time":1628346170244,"pid":10096,"name":"dendron","ctx":"ReloadIndex.execute","durationEngineInit":33772}
- {"level":30,"time":1628346170244,"pid":10096,"name":"dendron","ctx":"ReloadIndex.execute","msg":"exit"}
- {"level":30,"time":1628346170245,"pid":10096,"name":"dendron","ctx":"dendron.reloadIndex:run","msg":"post-execute"}
- {"level":30,"time":1628346170250,"pid":10096,"name":"dendron","ctx":"reloadWorkspace","msg":"post-ws.reloadWorkspace"}
- {"level":30,"time":1628346170251,"pid":10096,"name":"dendron","ctx":"reloadWorkspace","msg":"exit"}
- {"level":30,"time":1628346170251,"pid":10096,"name":"dendron","ctx":"postReloadWorkspace","msg":"same wsVersion"}
- {"level":30,"time":1628346170251,"pid":10096,"name":"dendron","ctx":"postReloadWorkspace","msg":"exit"}
```

##### setup workspace

- at this point, the workspace is ready

```yml
#setup workspace
- {
    "level": 30,
    "time": 1628346170255,
    "pid": 10096,
    "name": "dendron",
    "ctx": "TreeView:getChildren",
    "msg": "reconstructing tree",
  }
- {
    "level": 30,
    "time": 1628346171249,
    "pid": 10096,
    "name": "dendron",
    "ctx": "setupViews",
    "msg": "init:treeViewV2",
  }
- {
    "level": 30,
    "time": 1628346171253,
    "pid": 10096,
    "name": "dendron",
    "ctx": "setupViews",
    "msg": "initWebUI",
  }
- {
    "level": 30,
    "time": 1628346171254,
    "pid": 10096,
    "name": "dendron",
    "ctx": "setupViews",
    "msg": "init:backlinks",
  }
- {
    "level": 30,
    "time": 1628346171268,
    "pid": 10096,
    "name": "dendron",
    "ctx": "activateWorkspace",
    "stage": "prod",
    "msg": "enter",
  }
- {
    "level": 30,
    "time": 1628346171279,
    "pid": 10096,
    "name": "dendron",
    "ctx": "toggleViews",
    "msg": "views enabled: true",
  }
- {
    "level": 30,
    "time": 1628346171279,
    "pid": 10096,
    "name": "dendron",
    "ctx": "_activate",
    "msg": "fin startClient",
    "durationReloadWorkspace": 38853,
  }
- {
    "level": 30,
    "time": 1628346171280,
    "pid": 10096,
    "name": "dendron",
    "ctx": "showWelcomeOrWhatsNew",
    "version": "0.53.0",
    "previousExtensionVersion": "0.53.0",
  }
```

#### preview startup

```yml
# if legacy preview is on, logs from preview extension trying to connect
- {"level":30,"time":1628346136659,"pid":10096,"name":"connector","ctx":"EngineConnector:init","msg":"enter","opts":{}}
  - {"level":30,"time":1628346136659,"pid":10096,"name":"connector","ctx":"EngineConnector:createServerWatcher","msg":"enter","opts":{}}
  - {"level":30,"time":1628346139719,"pid":10096,"name":"connector","ctx":"EngineConnector:_connect","portCreated":1628346136469,"wsActivation":1628346133522}
  * {"level":30,"time":1628346139719,"pid":10096,"name":"connector","ctx":"EngineConnector:_connect","msg":"initFromExistingFile","port":49847}
  * {"level":30,"time":1628346139719,"pid":10096,"name":"connector","ctx":"EngineConnector:tryToConnect","port":49847,"msg":"enter"}
  * {"level":30,"time":1628346169437,"pid":10096,"name":"connector","ctx":"EngineConnector:tryToConnect","msg":"connected","info":{"version":"0.53.0"}}
  * {"level":30,"time":1628346169437,"pid":10096,"name":"connector","ctx":"EngineConnector:connectAndInit","msg":"checking for engine"}
  * {"level":30,"time":1628346169437,"pid":10096,"name":"connector","ctx":"EngineConnector:connectAndInit","msg":"found engine"}
  * {"level":30,"time":1628346169437,"pid":10096,"name":"connector","ctx":"EngineConnector:initEngine","msg":"enter","port":49847}
```

#### upgrade

```yml
# initial start
- ctx:"_activate","stage":"prod","isDebug":false,
- ctx:"DendronWorkspace","msg":"initialized"

# for upgrades, we might need to do configuration migrations
- "name":"migration","migrations":[]
# example of an upgrade
- "name":"dendron","ctx":"_activate","installStatus":"UPGRADED","currentVersion":"0.53.0","previousWorkspaceVersion":"0.52.0","previousGlobalVersion":"0.52.0","platform":"darwin","extensions":[{"id":"dendron.dendron-paste-image","version":"1.0.4","active":false},{"id":"dendron.dendron-markdown-shortcuts","version":"0.12.1","active":true},{"id":"dendron.dendron-markdown-preview-enhanced","version":"0.10.57","active":false}],"vaults":[...]}
...

# about to index
- "name":"dendron","ctx":"dendron.reloadIndex:run","msg":"pre-execute"}
  # indexing schemas
  - "ctx":"parseSchemaModuleOpts","fname":"root","root":{"fsPath":"vault","workspace":"users","name":"users","sync":"sync"},"imports":[]}...
  - ....

  # finish executing
  - "name":"dendron","ctx":"ReloadIndex.execute","durationEngineInit":39686}
```
