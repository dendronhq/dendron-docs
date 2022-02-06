---
id: 5slk0LaXcO4yfk3NFxd6v
title: CLI
desc: ''
updated: 1644170435248
created: 1644169224091
---

To debug specific dendron-cli commands, run a CLI [[task |dev.ref.vscode#tasks]] from `dendron-cli/.vscode/tasks.json`.

## Adding a task

- Add a json obj to `tasks` array in `dendron-cli/.vscode/tasks.json` file. 
- Provide a suitable label for the task. This is the same label that will be prompted while running task.
- Use builtin variable `${workspaceFolder}` to specify location of your workspace. `${workspaceFolder}` holds the file-path of dendron-cli folder.

Example task:

```json
   {
      "label": "publish-pod",
      "type": "shell",
      "command": "node --inspect ${workspaceFolder}/lib/bin/dendron-cli publishPod --wsRoot ${workspaceFolder}/../../test-workspace --podId dendron.markdown --vault vault --query root --podSource builtin",
      "problemMatcher": []
    }
```

## Run Task

To run a test, use VSCode tasks
    - `cmd/ctrl` + `shift` + `p`, -> `Task: Run Task` in the command palette
    - Select the appropriate task to run.