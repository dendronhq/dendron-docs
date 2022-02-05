---
id: aOOBYTowLEKJDEtLWFiHb
title: 42 Self Contained Vaults
desc: ''
updated: 1644051827989
created: 1643876703841
---

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
│  ... see next heading
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

Each vault can include one or more vaults in the `vaults` section of their
configuration file. If included, these vaults are the dependencies of the
current vault. The current vault is called the *dependent* vault, and the vaults
listed are called *depended* vaults. Depended vaults may have their own
dependencies.

Dendron, during initialization, will pull in any vaults that this vault depends
on, whether directly or transitively. These vaults should be stored in a
`dependencies` folder inside this vault. All direct and transitive dependencies
are flattened into the dependencies vault.
If more than one vault depends on the same vault (has the same remote and same target) then the vault will be pulled in only once.
The dependencies folder will not be included in git repositories.
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

### Read-only vaults

Some vaults may be read-only vaults. The notes and schemas inside read-only
vaults will be included in the lookup bar, however creating new notes will
behave differently:
- If the vault for the new note is picked automatically, a read-only vault will
  only be selected if there's a hierarchy match.
- If the vault for the new note is being prompted, then read-only vaults will be
  listed last and marked with "recommended as read-only". A user may choose to
  ignore the warning and create a note in read-only vaults anyway.

A vault can be marked as read-only when listing the vault in the `vaults:...`
section of the configuration file. Vaults can also mark in their own
configuration that they should be added as a read-only vault by default. This
can be used to mark public vaults that don't accept contributions: for example
an XKCD vault that automatically updates itself won't accept new notes.

## Details

### Local vaults contained within remote vaults

Dendron should warn the user if the top level vault is a remote vault, but it
contains local vaults inside it. This is important since in previous Dendron
versions, placing the workspace in a repository would add all local vaults to
the repository as well.

### Migration

Since workspaces and vaults are a very fundamental part of Dendron, a slow/soft
migration would be the best course of action.
1. Dendron adds support for self contained vaults, but largely hides the feature
   from users. Self contained vaults will maintain backwards compatibility with
   existing vaults (e.g. a self contained vault can list an old vault as a
   dependency).
2. We wait until a large majority of users have updated to a version that
   supports self contained vaults (hopefully 1 or 2 weeks)
3. Dendron will start creating new vaults as self contained vaults, and offer a
   command to convert existing vaults into self contained vaults.

## Example

In this section we'll look at some use cases of Dendron, and how they will work with the proposed changes.

> I want to synchronize my vault so that I can use it across different machines

This is hard to do today because you need to add two things to version control -
a workspace plus a vault. The workspace is also not synchronized by workspace
sync. You can keep all vaults inside the workspace, but this is not an easy to
discover feature.

With self contained vaults, this is made easier if the user only has a single
vault as the vault and workspace are now unified. It is made more difficult if
the user has multiple vaults however, as each vault has to go in their own
vault. We could introduce additional tooling to ease this as well, for example
"Vault Convert" could push each local vault into a different branch of the same
remote.

> I want to share my vault with others so that we can collaborate on work together

This is hard to do today because sharing a vault is not enough to get started,
you also have to share a workspace or have the collaborator create their own.
Sharing your workspace is also problematic because you have to take care to
remove any private vaults you don't want to share.

With self contained vaults, any vault can be immediately shared and will be
available to use. Even if the vault has dependencies that are missing or
inaccessible to the shared person, the vault itself will still function.

> I want to display my vault in existing version control destinations (eg.
> github/gitlab) so that others can get an idea for what its about before
> downloading it

Today, when you load a vault, you get a list of thousands of files. If there is
a large number of files, Github won't even display the files in the vault.

With self contain vaults, the notes are contained within a subdirectory so they
don't clutter the top directory. You can then add a readme file which
Github/Gitlab can display it on the repository page.

> I want to use standalone vaults with the same functionality I have today so that my existing use cases can be supported.

Self contained vaults support all the same functionalities we have today, and provide backward compatibility with existing vault and workspace features.

> I want to keep my vault configuration separate from my
> editor/presentation/publishing configuration so that I can use the same vault
> with multiple settings (eg. publish to different sites)

Today, all configuration is coupled in the workspace. The only way to add
different configuration for publishing is creating a workspace vault, which is
not a discoverable feature. Similarly, if your workspace is shared with others,
the only way to change editor settings without changing it for others is
creating a new workspace and adding the original workspace as a workspace vault,
which again is difficult to do, and additionally workspace vaults can't be
nested.

With self contained vaults, the configuration for a vault that is being
published can be changed without changing the configuration for the workspace.
Changing the editor settings can also be done by creating a new vault, and
adding the other vault as a dependency.

> I want to use multi-vault for personal and work vaults without having my personal vault configuration leak into my work vault details

With self contained vaults, the work vaults can be added into your personal vaults and all transitive dependencies are pulled in.
You can keep your local settings without touching the settings of the shared workspace.

> I want to sync multiple vaults so that I can implement access control on my knowledge base.

Today, this is confusing with local vaults, remote vaults, and how workspace
sync works.

Stand alone vaults enforce one vault per repository, which makes access control
easier. The access controlls can be configured on the version control services
in a fine-grained manner.

> I want to use the same vaults across multiple published sites so that I can more easily re-use my knowledge

This story isn't great today - when you add a wiki link from a different note
url, `Copy Note URL` only uses the URL for the workspace (unless the vault is a
seed). A multi-vault environment might have content from multiple sites (or the
same site depending on if the user chooses to re-publish that content).

With self contained vaults, each vault has its own configuration. "Copy Note
URL" can traverse the dependency tree up from the vault of the note until it
finds a publishing configuration, and generate the URL based on that
configuration. If there are multiple ancestors with publishing configurations,
it can instead prompt which one should be used.

Additionally, the same vault could be included as a dependency in many places,
and since the dependencies are flattened the reused vault will map to the same
vault once dependencies are pulled in.

## Tradeoffs

### One vault per repository

Enforcing one vault per repository is beneficial in that synchronization and
sharing is much simpler, however it makes synchronization more difficult since
each vault has to be added to a different remote.

### Checkouts of different targets

Being able to target specific branches or even commits in vault dependencies
makes the dependency system much more flexible. However, especially with
transitive dependencies this could add duplicate vaults if two depended vaults
in turn depend on the same vault but at different targets.

### Name conflicts with dependencies and x-vault wikilinks

Multiple vaults may have the same name. If this conflict happens in transitive
dependencies, the conflict would be very hard or impossible to resolve for the
user. While we avoid the conflict when cloning the repositories by adding the
remote name into the folder path, we don't have a similar solution for
wikilinks. Adding the full path to each x-vault wikilink would be unwieldy.

One solution to this could be generating a random ID for each vault, and using
that ID in the wikilink path instead. This would resolve conflicts in x-vault
wikilinks, but it would hurt wikilink readability since the vault name will not
be included.

## Discussion

Please see the [discussion page](https://github.com/dendronhq/dendron/discussions/2349) if you have any ideas or concerns.
