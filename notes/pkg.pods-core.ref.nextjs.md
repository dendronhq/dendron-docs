---
id: AlzFH3ol9ubQhagjAUqq1
title: Nextjs
desc: ""
updated: 1666727830863
created: 1634255542869
---

Responsible for creating payloads and metadata for Dendron Publishing

## Pseudocode

Export Pod Logic
- [[dendron://dendron.docs/pkg.pods-core.lifecycle.export-pod]]

- [[../packages/pods-core/src/builtin/NextjsExportPod.ts]]
```ts

plant(engine, config, dest) {

    dst :=
    // this is .next/data
    podDstDir := dest, "data"

    copyAssets

    publishedNotes := filterByConfig(engine, config)
    publishedNotes += addSiteOnlyNotes

    payload = {
        publishedNotes
        ...
    }

    publishedNotes.forEach note {
        @renderBodyToHTML(note)
        @renderMetaToJSON
        @renderBodyAsMD
    }


    // write json
    podDstPath = join(dst, "notes.json")
    write(
        join(dst, "notes.json")),
        removeBodyFromNotesDict(payload)
    )
    write(
        join(dst, "dendron.json"),
        config
    )

    fuseIndex = createSerializedFuseNoteIndex(publishedNotes)
    write(j(dst, "fuse.json"), fuseIndex)

    _writeEnvFile ...
    copySync(dst, `${dst}/../public`)
}

copyAssets(opts) {
    siteConfig, dest := opts
    destPublicPath := $dest/public

    emptyIfExist(destPublicPath)

    vaults.forEach v => {
        ...
        // copy assets from each vauulut to assets folder of destination
        SiteUtils.copyAssets(vault, destPublicPath)
    }

    if customHeaderPath {
        ...
    }
    ...

}
```

### renderBodyToHTML

```ts
renderBodyToHTML {
    _renderNote
}

_renderNote {
    getParsingDependencyDicts
    procRehypeFull
}
```


## Related

- [[Nextjs|dendron://dendron.dendron-site/dendron.topic.pod.builtin.nextjs]]
