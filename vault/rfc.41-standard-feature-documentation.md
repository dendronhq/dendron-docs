---
id: ONVyX9yIBTHO5BjZwJ56I
title: 41 Standard Feature Documentation
desc: ''
updated: 1643253705374
created: 1643251210715
category: RFCs/Ideas
discussionID: D_kwDOEF_3Vs4AOosB
url: 'https://github.com/dendronhq/dendron/discussions/2298'
author: 'https://github.com/dendron-bot'
---


## Goals

- NOTE: this note is exported from dendron. It is best viewed inside of the Dendron Community Workspace. See [here](https://github.com/dendronhq/vault.dendron.community/blob/master/root.md#L25:L25) on setup instructions

This is a proposal to introduce a standard way to document features in Dendron while minimizing duplicate content

## Context

The past discussion about the dendron site is documented in [[Dendron Site Reorganization|dendron://dendron.community/discussion.2021.dendron-site-reorg]]

This proposal talks specifically about [[Feature Anatomy|dendron://dendron.community/discussion.2021.dendron-site-reorg#feature-anatomy]]

If you look at the sections of a feature, many of the sections (eg. [[CLI|dendron://dendron.dendron-site/templates.topic#cli]], [[Commands|dendron://dendron.dendron-site/templates.topic#commands]], etc) overlap with children of [[Reference|dendron://dendron.community/discussion.2021.dendron-site-reorg#reference]]

## Proposal

When adding details to reference documentation under `CLI`, `Configuration`, the main text should come from `dendron.topic.{feature}`. The corresponding entries should be added as a note ref to their respective reference section. The way the reference documentation can be layed out as follows

- proposed layout for [[Command|dendron://dendron.dendron-site/dendron.ref.commands]] reference
```md
<!-- Primary grouping by area, in same order as introduced in [[User Guide|dendron://dendron.community/discussion.2021.dendron-site-reorg#user-guide]] -->
## Editing

...

## Retrieval

...

## Refactoring
<!-- inside the respective areas, features are laid out alphabetically -->

<!-- 
Note the format: the header is a wikilink to the source documentation. this has multiple benefits:
- if we change the source header text or link, this will update
- if we delete the source header, this link can be found using `finddBrokenLinks` doctor command
- this still resolves to a clean url, both inside dendron as a URL: [[Rename Note|dendron://private/task.2022.01.26.on-structuring-dendron-docs.rfc#rename-note]]
- since this is an actual header, it shows up in the outline view inside vscode as well as in the TOC of the published site
-->
### [[Rename Note|dendron://dendron.dendron-site/dendron.topic.refactoring#rename-note]]

<!-- 
This is a wiki link that shows the content of the section
-->
![[dendron://dendron.dendron-site/dendron.topic.refactoring#rename-note,1:#*]]
```

Essentially, this is proposing that `dendron.topic.{feature}` is the main source of truth for a feature and `reference.*` documentation is generated as note references from topic notes. 
This will help keep our docs DRY (don't repeat yourself) and make sure content is up to date. 

## Future Work
Currently, the process of generating references is quite manual. There are a few future features that should make this easier:

- When we ship [[22 Queries|dendron://dendron.docs/rfc.22-queries]], we should be able to vastly simplify this process with something like the below
    ```md
    ## Refactoring
    <!-- Get all topics that are taged with `area.refactoring` and the child of dendron.topic. Extract `Commands` header from it -->
    ?[[ and (to tags area.refactoring) (children dendron.topic) ]]#Commands
    ```
- 
