---
id: ohsx7u9qh8auumxzuhahik6
title: 45 Root
desc: ''
updated: 1649877325092
created: 1649810149171
category: RFCs/Ideas
documentId: 1iuFVgaDu3nP8KaQzoOQdd1vVM7hydkJk5aCmhqV0WA8
revisionId: >-
  ALm37BWD2GuYvVi95aOdt-NYA2Yy3KkfaimBu0eCz-PO2YdzcBVCQHb1Pgj5AVGqf96K9MiD6asfshVV9EDMZQ
---
<!-- Remove the following warning once you are done writing the RFC. -->
> ⚠️ This proposal is currently a draft and is not yet finalized.

## Goals

Discuss the role of `root.md` file moving forward

## Context

`root.md` is used to designated the root of all hierarchies in Dendron. 
This has been the design when Dendron first rolled out. 
This RFC re-examines the original motivation behind `root.md` and the role it plays (if any), moving forward

## Proposal

1. Remove `root.md` - note that we might still keep `root.md` as the default note that gets generated but it becomes a regular note, just like every other note with no special treatment
1. Remove `root.schema.yml`. It exists for similar reasons as `root.md` but similarly, does not serve any function
1. Introduce custom command to modify `README` file for a vault

## Details

### Removing root

`root.md` was used to designate the root of all hierarchies. It served the following functions:

- in graph view, it was the root node in which all nodes could be children of
- it functioned as a `README` for a vault
- it functions as the default home page if none is selected
- it provides useful links to get help for newly created vaults
- it is a convenient way of switching between vaults 

`root.md` has caused a lot of confusion among new and existing users. Folks are unsure what it is for and how to customize it.
Furthermore, it is special cased in dendron - for example, you cannot create children off of `root`

In regards to the functions it servers:
- in graph view, it was the root node in which all nodes could be children of
    - > this is optional, we could also represent a vritual root node instead of a physical `root.md` file
- it functioned as a `README` for a vault
    - > with self contained vaults, we're better served with an actual README.md and stick to existing conventions
- it functions as the default home page if none is selected
    - > its probably better to be explicit here and ask users to select a home page
- it is a convenient way of switching between vaults 
    - > this is true but also kind of a hack. ideally, we should have a command here (eg. switch vaults) that sets the current vault context instead of relying on this implementaiton detail

### Modifying the README

Having a project README is the ubiquitous way of describing a project. Currently, Dendron only has ways of modifying notes inside a vault but a README is generally outside of the vault.
To deal with this, we propose creating a custom command (could be a note trait) that makes it easy to lookup the README (an analogy is what we do with `Configure Dendron(yaml)` command)

## Timeline

- Removing root.md will be a big endeavor with no immediate gains in functionality. No ETA on when this will happen but we should stop adding new features to `root` moving forward. 
- Modifying the README is something we can take on much sooner and will be prioritized according to user feedback

## Tradeoffs

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/new
