---
id: 4nzqd0x53tmimg6vpkjr6yy
title: Md Publish
desc: ''
updated: 1662659568421
created: 1662659301566
---



#
## Lifecycle

```ts
PublishPod {

    execute(opts) {

        config, engine := opts

        validate(config)

        vault = getVaultByNameOrThrow(engine, config.vaultName)
        note = getNoteByName( config.fname, engine.notes, vault, engine.wsRoot)

    }

}
```