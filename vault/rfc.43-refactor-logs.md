---
id: MEZ8tdMoQJEt71xW5gki3
title: 43 Refactor Logs
desc: ""
updated: 1644824188694
created: 1644823306782
---

> ⚠️ This RFC is a draft, and is not finalized. ⚠️

## Goals

Dendron should log all hierarchy modifying operations, then use these logs to
update links in downstream workspaces.

## Context

Refactoring, moving, and renaming notes in a shared vault can break other vaults
that depend on your vault. Dendron automatically updates all the links in your
workspace, but this is not possible for vaults that are not included in your
current workspace. This issue is especially important for shared knowledge bases
like seeds, where there may be many users that have added this knowledge base to
their own workspaces.

## Proposal

## Details

## Example

## Tradeoffs

## Discussion

<!-- Click the link and create new discussion -->

Please see the [discussion page](https://github.com/dendronhq/dendron/discussions/2412) for details.
