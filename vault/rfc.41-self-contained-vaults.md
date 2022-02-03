---
id: aOOBYTowLEKJDEtLWFiHb
title: 41 Self Contained Vaults
desc: ''
updated: 1643880140554
created: 1643876703841
---

> This proposal is currently a draft and is not yet finalized.

## Goals

Dendron's separation between vaults and workspaces have been a source of
confusion for users, and complexity during the development. Eliminating this
complexity will make Dendron easier to use, and easier to develop and maintain.

## Context

Vaults in Dendron are collections of notes, schemas, and assets.

Workspaces in Dendron are containers for vaults and configuration files. Each
workspace contains a `dendron.yml` file and one or more vaults, and potentially
a `dendron.code-workspace` file.

Dendron workspaces are sometimes also VSCode workspaces. This is always true for [code workspaces](https://wiki.dendron.so/notes/c4cf5519-f7c2-4a23-b93b-1c9a02880f6b/#code-workspace), but only sometimes for [native workspaces](https://wiki.dendron.so/notes/c4cf5519-f7c2-4a23-b93b-1c9a02880f6b/#native-workspace).

What's more,
[Workspace Vaults](https://wiki.dendron.so/notes/6682fca0-65ed-402c-8634-94cd51463cc4/#workspace-vault)
blur the lines between vaults and workspaces. A workspace vault is a workspace
that only includes local vaults, that has been added as a remote vault into
another workspace. When this happens, Dendron automatically recognizes that the
remote is a workspace and imports the vaults inside of that workspace.

## Proposal

### Self Contained Vaults

Dendron should remove the concept of workspaces and only use vaults.

Each vault should have the following structure:
```
.
├── assets                 # optional
│  └── image.jpg
├── dendron.yml            # required
├── dendron.code-workspace # optional
└── notes                  # required
   ├── root.md
   └── root.schema.yml
```

`dendron.yml` is the configuration file that will be used if this vault is opened by itself in VSCode.
Inside the configuration, the `vaults` section is now optional in self contained vaults.
`notes` contains the notes inside of this vault, and is required. Everything else is optional.

### Vault Dependencies

Each vault can include one or more vaults in the `vaults` section of their configuration file.
If included, these vaults are the dependencies of the current vault.
The depended vaults can also have their own dependencies.

Dendron, during initialization, will pull in any vaults that this vault depends
on, whether directly or transitively. These vaults should be stored in a
`dependencies` folder inside this vault. All direct and transitive dependencies
are flattened into the dependencies vault.
The dependencies folder will be entirely kept out of git repositories.

Depended vaults don't have to be remote vaults: they can be local vaults as
well. The local vaults will **not** be included in the repository for the
dependent vault: each repository can only contain one vault.

## Details

Dendron should warn the user if the top level vault is a remote vault, but it
contains local vaults inside it. This warning can be shown when converting a
vault, and also at least once during initialization.

## Example

## Tradeoffs

## Discussion

Please see the [discussion page](https://github.com/dendronhq/dendron/discussions/2349) if you have any ideas or concerns.
