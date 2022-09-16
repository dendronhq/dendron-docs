---
id: 6n9ypajmhvsgplxp28jkspf
title: Check for Workspace Trust
desc: ''
updated: 1663295662764
created: 1663295658696
---

Any feature that causes dynamic code execution (code supplied or modifiable that is outside of the published Dendron extension) **must first check whether the user has enabled [workspace trust](https://code.visualstudio.com/docs/editor/workspace-trust)**. Some examples of this are [[Hooks|dendron://dendron.dendron-site/dendron.topic.hooks]] and [[Traits|dendron://dendron.dendron-site/dendron.topic.traits]].

To check whether workspace trust has been enabled, you can use VSCode's API: `vscode.workspace.isTrusted`. If working in the context of EngineAPIService, there is also a private member that contains the trust information (currently `_trustedWorkspace`).

If your scenario is blocked because the user hasn't enabled workspace trust, please add an notification prompt to the user explaining that the scenario didn't run because the workspace is not trusted.