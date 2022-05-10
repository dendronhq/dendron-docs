---
id: e1c588f5-dbab-4054-a341-ddc85a05fbd6
title: Startup
desc: ""
updated: 1652218142771
created: 1621633365468
---

```mermaid
sequenceDiagram
    participant uiTreeView
    participant vscode
    participant uiApp
    participant store
    participant engine

    uiApp ->> vscode: postVSCodeMessage(init)
    vscode ->>uiApp: postMessage(theme)
    vscode ->>uiApp: postMessage(activeEditor)

    uiApp ->> engine: workspaceSync
    engine ->> uiApp: workspaceSyncResp
```
