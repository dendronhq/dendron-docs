---
id: DD7TE2EgE6zC0OSD5yZEd
title: Export Pod
desc: ""
updated: 1640375186409
created: 1639614544838
---

## Architecture

### Initialization

- create a new pod config

```ts
class ExportPodV2Command extends BaseExportPodComman {

    gatherInputs {

        promptForPodTypeForCommand
    }

    promptForPodTypeForCommand {
        resp = showQuickPick PodV2Types
        PodCommandFactory.createPodCommandForPodType(resp)
    }

    // src/components/pods/PodCommandFactory.ts
    createPodCommandForPodType {
        new [podType].run()
    }

    // src/commands/pods/MarkdownExportPodCommand.tso
    gatherInputs {

    }

    execute {

    }
}
```

- pod lifecycel

```ts
// src/commands/pods/BaseExportPodCommand.ts
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
