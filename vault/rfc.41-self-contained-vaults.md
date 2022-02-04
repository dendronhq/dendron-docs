---
id: aOOBYTowLEKJDEtLWFiHb
title: 41 Self Contained Vaults
desc: ''
updated: 1643967234347
created: 1643876703841
---

> This proposal is currently a draft and is not yet finalized.

## Goals

Dendron's seperation between vaults and workspaces have been a source of
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
├── assets                          # optional
│  └── image.jpg
├── dendron.code-workspace          # optional, but should be added by default
├── dendron.yml                     # required
├── dependencies                    # created automatically, contains all vaults that have been pulled in
│  ├── github.com
│  │  ├── dendronhq
│  │  │  ├── dendron-docs@main      # depends on github.com/dendronhq/dendron-docs, on main branch
│  │  │  └── dendron-site@master    # depends on github.com/dendronhq/dendron-site, on master branch
│  │  └── SeriousBug
│  │     └── recipes@3e497db338f0f  # depends on github.com/SeriousBug/recipes, targeting a specific commit
│  ├── gitlab.com
│  │  └── example
│  │     └── vault@main             # depends on gitlab.com/example/vault, on main branch
│  └── localhost                    # a local only vault
│     └── secret-diary
└── notes                           # optional
   ├── root.md
   └── root.schema.yml
```

`dendron.yml` is the configuration file that will be used if this vault is opened by itself in VSCode.
Inside the configuration, the `vaults` section is now optional in self contained vaults. Everything else is optional.

If the vault contains any notes or schemas, then the `notes` folder must exist
and must contain `root.md` and `root.schema.yml`. If `notes` is omitted, then
the vault can't contain any notes. It won't appear as an option in lookups or any other
command that can create a note or schema.

The `dependencies` folder and it's layout is described below.

### Vault Dependencies

Each vault can include one or more vaults in the `vaults` section of their configuration file.
If included, these vaults are the dependencies of the current vault.
The depended vaults can also have their own dependencies.

Dendron, during initialization, will pull in any vaults that this vault depends
on, whether directly or transitively. These vaults should be stored in a
`dependencies` folder inside this vault. All direct and transitive dependencies
are flattened into the dependencies vault.
The dependencies folder will be entirely kept out of git repositories.
The dependencies folder is structured like this:

```
dependencies
├── github.com
│  ├── dendronhq
│  │  ├── dendron-docs@main      # depends on github.com/dendronhq/dendron-docs, on main branch
│  │  └── dendron-site@master    # depends on github.com/dendronhq/dendron-site, on master branch
│  └── SeriousBug
│     └── recipes@3e497db338f0f  # depends on github.com/SeriousBug/recipes, targeting a specific commit
├── gitlab.com
│  └── example
│     └── vault@main             # depends on gitlab.com/example/vault, on main branch
└── localhost                    # a local only vault
   └── secret-diary
```

Depended vaults are stored in folders according the path of their remotes. Each
vault path ends with `@...`, which is the git object that will be checked out
from the remote. This may be a branch, a tag, or a commit.

Depended vaults don't have to be remote vaults: they can be local vaults as
well. The local vaults will **not** be included in the repository for the
dependent vault: each repository can only contain one vault.

## Details

Dendron should warn the user if the top level vault is a remote vault, but it
contains local vaults inside it. This is important since in previous Dendron versions, placing the workspace in a repository would add all local vaults to the repository as well.

## Example

## Tradeoffs

## Discussion

Please see the [discussion page](https://github.com/dendronhq/dendron/discussions/2349) if you have any ideas or concerns.