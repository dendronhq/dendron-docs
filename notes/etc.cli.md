---
id: Y0cZsmfUdytwajRGeylMZ
title: CLI
desc: ''
updated: 1661122150454
created: 1631473249667
---

Dendron has a [[CLI|dendron.ref.cli]] command to help with development.

## Common Options

## Commands

### generate_json_schema_from_config

Update json schema for `dendron.yml`

### bump_version

Bump up version number for upgradeType [^upgrade]

### publish

Publish packages to npm

```sh
# publish to remote endpoint
dendron dev publish  --publishEndpoint remote
```

### sync_assets

Re-built static HTML used in plugin and sync them to plugin

### prep_plugin

Format `package.json` of plugin to make it compatible with `vsce package`



### install_plugin

Install latest vsix in all local vscode versions

<!-- Citations -->
[^upgrade]: [[upgradeType|dendron.dev.cli#upgradetype]]

### enable_telemetry

Enables telemetry. This also affects telemetry while using Dendron in VSCode.

### disable_telemetry

Disables telemetry. This also affects telemetry while using Dendron in VSCode.

### show_telemetry

Shows telemetry notice.

### show_migrations

Shows a list of available migrations that could be run with [[run_migration|dendron.dev.cli#run_migration]].

```sh
> dendron dev show_migrations

======Available Migrations======

Make note of the version number and use it in the run_migration command

e.g.)
> dendron dev run_migration --migrationVersion=0.64.1

------------------------------------------------------------------------
version          | description
------------------------------------------------------------------------
0.64.1           | migrate config
0.55.2           | migrate note lookup config
0.51.4           | migrate scratch config
0.51.4           | don't switch to legacy preview if not currently on it
0.47.1           | migrate journal config
0.46.0           | update cache
------------------------------------------------------------------------
>
```

### run_migration

Runs a migration specified by `--migrationVersion={version}`.
`--wsRoot` is required (explicitly provided, or run from the root directory).

```sh
// run from workspace root.
> dendron dev run_migration --migrationVersion=0.64.1

migration succeeded.
```
