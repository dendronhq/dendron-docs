---
id: DD7TE2EgE6zC0OSD5yZEd
title: Export Pod
desc: ""
updated: 1641644068333
created: 1639614544838
---

## Architecture

### Initialization

- create a new pod config

```ts
class ExportPodV2Command extends BaseExportPodCommand {

    gatherInputs {
        promptForPodTypeForCommand
    }

    // src/components/pods/PodCommandFactory.ts
    createPodCommandForPodType {
        new [podType].run()
    }

    // src/commands/pods/MarkdownExportPodCommand.tso
    gatherInputs {
    }

}
```

- pod lifecycle

- [[../packages/plugin-core/src/commands/pods/BaseExportPodCommand.ts#L185]]

```ts
// [[../packages/plugin-core/src/commands/pods/BaseExportPodCommand.ts#L77]]
enrichInputs(inputs) {
    exportScope, config := inputs
    let payload

    switch(exportScope) {
        case ... {
            payload := ...
        }
    }
    return {payload, config}
}

// [[../packages/plugin-core/src/commands/pods/BaseExportPodCommand.ts#L144]]
execute {
    pod = createPod {
        // example
        return new MarkdownExportPodV2
    }

    switch exportScope {
        case text {
            pod.exportText
            @onExportComplete
        }

        case notes {

        }
    }
}
```

### Past Tasks

- [feat(pods): Export Pod V2 by jonathanyeung · Pull Request #1772 · dendronhq/dendron](https://github.com/dendronhq/dendron/pull/1772/files)
