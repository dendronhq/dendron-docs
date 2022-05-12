---
id: a49370b7-fe61-4174-bf85-f67d15fa35ff
title: Qa
desc: ''
updated: 1644919790893
created: 1614837254472
---

## Debug
To debug specific dendron-cli commands, run a CLI [[tasks|dev.ref.vscode#tasks]] from `dendron-cli/.vscode/tasks.json`

See the `build-site` inside `tasks.json` for an example.

Alternatively, you can use the following in the CLI
```sh
env LOG_LEVEL=debug node --inspect $ROOT/packages/dendron-cli/lib/bin/dendron-cli.js buildSite --stage dev 
```

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