---
id: aOOBYTowLEKJDEtLWFiHb
title: 42 Self Contained Vaults
desc: ""
updated: 1645779302692
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

### Concepts

- Dependency: One vault listing another vault in the `vaults` section of its `dendron.yml` file.
- Depend**ent** vault: The vault that lists the other vault as a dependency. If vault A depends on vault B, then A is the dependent vault.
- Depend**ed** vault: The vault that was listed as a dependency. If vault A depends on vault B, then B is the depended vault.
- Transitive dependency: If vault "A" depends on vault "B", and vault "B"
  depends on vault "C", then "A" has a transitive dependency on "C".
- Read-only vault: A vault that the user either can't or doesn't want to modify.
- Local vault: A vault that is **not** in a git repository.
- Remote vault: A vault that is in a git repository.

### Self Contained Vaults

Dendron should remove the concept of workspaces and only use vaults.

Each vault should have the following structure:

```
.
├── dendron.code-workspace          # optional, but should be added by default
├── dendron.yml                     # required
├── dependencies                    # created automatically, contains all vaults that have been pulled in
│  ... see next heading
└── notes                           # optional
   ├── assets                          # optional, stores images and PDFs and such
   │  └── image.jpg
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
current vault. The current vault is called the _dependent_ vault, and the vaults
listed are called _depended_ vaults. Depended vaults may have their own
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
│     └── recipes@main  # depends on github.com/SeriousBug/recipes, on main branch
├── gitlab.com
│  └── example
│     └── vault@main             # depends on gitlab.com/example/vault, on main branch
└── localhost                    # a local vault
   └── secret-diary
```

Depended vaults are stored in folders according the path of their remotes. Each
vault path ends with `@...`, which is the git object that will be checked out
from the remote. This may be a branch, a tag, or a commit.

Depended vaults don't have to be remote vaults: they can be local vaults as
well. The local vaults will **not** be included in the repository for the
dependent vault: each repository can only contain one vault.

### Read-only vaults

A user may not want to, or be able to modify a vault. This is a common pattern
for public knowledge bases such as seeds. These vaults can be marked as read
only in the dependent vault's configuration. The notes and schemas inside
read-only vaults will be included in the lookup bar, however creating new notes
will behave differently:

- If the vault for the new note is picked automatically, a read-only vault will
  only be selected if there's a hierarchy match.
- If the vault for the new note is being prompted, then read-only vaults will be
  listed last and marked with "recommended as read-only". A user may choose to
  ignore the warning and create a note in read-only vaults anyway.

A vault can be marked as read-only when listing the vault in the `vaults:...`
section of the configuration file.

Vaults can also mark in their own configuration that they should be added as a
read-only vault by default. This can be used to mark public vaults that don't
accept contributions: for example an XKCD vault that automatically updates
itself won't accept new notes.

## Details

### Local vaults contained within remote vaults

Dendron should warn the user if the top level vault is a remote vault, but it
contains local vaults inside it. This is important since in previous Dendron
versions, placing the workspace in a repository would add all local vaults to
the repository as well.

### Sync command

The sync command will synchronize all vaults in the workspace. Vaults that are
marked only will be synchronized with the "pullOnly" configuration by default,
and other vaults will be synchronized with "sync" configuration by default.
These configurations can be overridden per vault in the configuration file of
the dependent vault. Vaults that are transitive dependencies will inherit the
sync configuration from their dependents, if vault "A" is configured as "skip"
and "A" depends on "B", then "B" will also use the "skip" configuration.

### Migration

Since workspaces and vaults are a very fundamental part of Dendron, a slow/soft
migration would be the best course of action.

1. Dendron adds support for self contained vaults, but hides certain parts of the feature
   behind a `dev` configuration flag:

   - New vaults will be created as stand-alone vaults
   - Existing vaults can be converted to stand-alone vaults with a command

   The flag and new feature will be announced for users if they would like to help us debug it.

2. We iterate on this feature, and keep the `dev` configuration until:
   - the feature has matured
   - and a majority of users have a Dendron version that can read stand-alone vaults
3. The `dev` flag is removed, and the hidden features become the default.
4. Once the feature is stable and fully mature, a deprecation notice with a
   full removal deadline is announced.
5. Support for old style vaults is completely removed. The migration command is
   moved into an import pod to recover old style vaults for any remaining
   unmigrated vaults.

### Overriding Transitive Dependencies

A user may wish to override the transitive dependencies that are pulled into
their vault. This should be possible by adding the dependency to a higher level
vault, then changing the dependency settings in that vault. In other words,
direct dependencies take precedence over transitive dependencies if the same
vault is imported twice.

For example, if "A" depends on "B" and "B" depends on "C", the settings for "C"
such as the vault name can be overridden by adding "C" as a direct dependency to
"A" and changing the settings.

### No clone

A vault dependency can be marked as "no clone". If marked as such, Dendron will
read the vault if it already exists but will not clone the vault if it doesn't
exist.

This can be used along with [[#overriding-transitive-dependencies]] to block
certain vaults from being cloned in.

### Dependency configuration

Depended vaults are listed in the `vaults` section of the configuration for each
vault. This is the existing location for vaults configuration, but the settings
for vaults will be expanded as follows.

```yaml
name: vault-name # Name displayed to users, and used in cross-vault links
visibility: private # optional, the vault and all it's transitive dependencies will not be published
fsPath: github.com/dendronhq/example-vault # the path to the vault folder, automatically set up by Dendron
remote: # optional, added automatically for remote vaults
  type: git
  url: "git@github.com:dendronhq/example-vault.git"
  checkout: main # the branch to check out after cloning the vault. Dendron will not change branches after the initial clone.
sync: noCommit # optional, overrides the global synchronization setting. Applies to all transitive dependencies.
publishedAt: "https://example.com" # optional, used for URLs generated during publishing and Copy Note Link. Applies to all transitive dependencies.
readOnly: false # optional, see read-only vaults section above. Applies to all transitive dependencies.
noClone: false # optional, see no clone section above. Applies to all transitive dependencies.
```

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
adding the other vault as a dependency. This can be improved later by allowing local overrides, but that is outside the scope of this RFC.

> I want to use multi-vault for personal and work vaults without having my personal vault configuration leak into my work vault details

With self contained vaults, the work vaults can be added into your personal vaults and all transitive dependencies are pulled in.
You can keep your local settings without touching the settings of the shared workspace.

> I want to sync multiple vaults so that I can implement access control on my knowledge base.

Today, this is confusing with local vaults, remote vaults, and how workspace
sync works.

Stand alone vaults enforce one vault per repository, which makes access control
easier. The access controlls can be configured on the version control services
in a fine-grained manner. This can be improved later by allowing local overrides, but that is outside the scope of this RFC.

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

Another solution is allowing notes to be linked by ID, but this is reduces
readability even further and makes hand writing links effectively impossible.

Another solution is using [import maps](https://deno.land/manual/linking_to_external_code/import_maps) to allow users to rename depended vaults. This can be used to resolve name conflicts. Renaming can be prompted automatically when adding vaults.
Renames also allow users to change the name that appears for the depended vaults in the user interface, which is desirable even without the name conflicts issue.

## Discussion

Please see the [discussion page](https://github.com/dendronhq/dendron/discussions/2349) if you have any ideas or concerns.

### Summary

Here are some points brought up during the discussions. These points should be already reflected in this RFC, but are included here for reference.

- Dendron should include the `dendron.code-workspace` file in all workspaces,
  even though it's optional since this will make it easier to share vaults since
  the `code-workspace' file can recommend the Dendron extension.
- Some users may want vaults that have no notes themselves that act as
  containers. The `notes` folder should be optional to make this possible, but
  the UX of this feature needs to be iterated on.
- The migration to new vaults should be available to users behind a flag, so
  users can help us test the feature while it's in development.
- Users should be able to rename transitive vaults by overriding the
  dependencies.
- Users can disable cloning dependencies (and transitive dependencies) if they
  wish to not clone a vault.
- There was some discussion of how to propagate refactors to dependent vaults. This discussion has been moved to [[RFC 43|rfc.43-refactor-logs]].
- There was some discussion about being able to add local overrides to the configuration files, but this was decided to be out-of-scope for this RFC.
- There was some discussion about splitting workspace and vault configuration, but this was decided to be out-of-scope for this RFC.
