---
id: oppjk3xu6rsow3z9yr4juu1
title: 48 - Better Path Handling
desc: ''
updated: 1662837203046
created: 1662836896539
---
<!-- Remove the following warning once you are done writing the RFC. -->
> ⚠️ This proposal is currently a draft and is not yet finalized.

## Goals

Better path handling for links to regular files inside of Dendron

## Context

The path handling today isn't portable or intuitive in a multi-vault setting

![[dendron://dendron.docs/rfc.48-better-path-handling.context]]

## Proposal

- absolut paths should be relative to the vault that they belong in. This should be similar to the [path handling](https://kevinslin.com/notes/r5wsyzfvhzdx889g0rdpcyw) from vscode.
- relative paths should be relative to the file.

## Example

Given the same [[file layout|dendron://dendron.docs/rfc.48-better-path-handling.context#file-layout]] as the previous example, paths should resolve as follows:

- from `root/notes/root.md`
  - AP: `[[/dendron.yml]]`: root/dendron.yml
  - RP: `[[./dendron.yml]]`: notes/dendorn.yml (this would point to a non-existing file because there is no `dendron.yml` file in `notes`)

- from `root/a/notes/root.md`
  - AP: `[[/dendron.yml]]`: root/a/dendron.yml
  - RP: `[[./dendron.yml]]`: dendron.yml (invalid link, similar to the above)

## Tradeoffs

The treatment of relative paths might still be easier to use if it were relative to the directory where the `dendron.yml` of the given vault was (same treatment as the absolute path). This is because linked to files are most likely going to lie outside of the `notes` folder which means most relative links will start with `../` to go outside of the `notes` folder. 

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/3506
