---
id: dtMsF12SF2SUhLN10sYe2
title: Test Workspace
desc: ""
updated: 1644907635429
created: 1631471672541
---

## Summary

The test workspace is included with the Dendron repo and is used for manual testing of new features

## Quickstart

1. Run the development version of Dendron by following the steps [[here|dendron://dendron.docs/pkg.plugin-core.dev.run#running-via-launch-task-from-source]]
2. Run `> Change Workspace` and change to the path of the test workspace

- this should be `$DENDRON_REPO_ROOT/test-workspace`
- NOTE: when you initially change to this workspace, you'll need to restart the debugger or VSCode will complain about multiple instances of Dendron. The next time you start the debugger, VSCode will remember the last workspace you've used so you can skip this step

## Pre-requisites

- [[Symlink the dendron cli|dendron://dendron.docs/pkg.dendron-cli.dev.cook.symlink-cli]]

## Setup

1. Launch engine server
   ```sh
   cd $DENDRON_REPO_ROOT/test-workspace && ./scripts/dev.sh
1. Run [[Change Workspace|dendron.ref.commands#change-workspace]] and change into `$DENDRON_REPO_ROOT/test-workspace`

## Cook

### Use with regular workspace

Comment the following lines in `test-workspace/dendron.yml` to launch it without the CLI engine server

```yml
dev:
  # nextServerUrl: 'http://localhost:3000'
  # engineServerPort: 3005
```

### Testing Dendron in non-note files

There's a folder named `other-files` in the test workspace which contains files
that are not notes. This includes markdown files that are not Dendron notes, and
code files. If you are working on a feature that may affect non-note files, make
sure to test it with these files.
