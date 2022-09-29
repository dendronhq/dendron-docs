---
id: ONVyX9yIBTHO5BjZwJ56I
title: 41 Standard Feature Documentation
desc: ''
updated: 1643651799790
created: 1643251210715
category: RFCs/Ideas
discussionID: D_kwDOEF_3Vs4AOosB
url: 'https://github.com/dendronhq/dendron/discussions/2298'
author: 'https://github.com/dendron-bot'
---


## Goals

- NOTE: this note is exported from dendron. It is best viewed inside of the Dendron Community Workspace. See [here](https://github.com/dendronhq/vault.dendron.community/blob/master/root.md#L25:L25) on setup instructions

This is a proposal to introduce a standard way to document features in Dendron.

## Context

This proposal talks specifically about [[Feature Anatomy|dendron://dendron.community/discussion.2021.dendron-site-reorg#feature-anatomy]] and gives explicit guidance on how to structure new features.
It also outlines how we relate the various [[sections|dendron://dendron.docs/rfc.41-standard-feature-documentation#section]] of a feature to its [[reference|dendron://dendron.community/discussion.2021.dendron-site-reorg#reference]] documentation.

## Concepts

### Section

A `section` is a portion of a note marked by a heading. It contains the header text and the contents after the header and stops either at the next section that is of a lower level or the end of the note

```
## This is a section

This is text inside a section

### This is also part of the previous section since its of a higher heading level

## This is a new section
```

## Proposal

### Documentation for Features

#### Feature Layout

When creating a new feature, the following [[Feature Template|dendron://dendron.dendron-site/templates.topic]] will be applied.
The [[Feature Template Reference|dendron://dendron.dendron-site/templates.topic.ref]] explains details about the various sections. 

```yml
- id: topic
  namespace: true
  children:
    - pattern: quickstart
      desc: how to get started with this given feature
    - pattern: upgrade
      desc: If coming from a previous version, how to upgrade
    - pattern: concepts
      desc: concepts for this feature
    - pattern: "*"
      title: feature
      desc: Sub feature of this given feature
```

#### Reference Anatomy
The corresponding entries should be added as a note ref to their respective reference section. The way the reference documentation can be layed out as follows

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

### Gradual Structure - Documentation for Bigger Features

Sometimes a feature will have sub features and its contents will be too big for a single note. 
At this point, the [[Amoeba Workflow|dendron://dendron.dendron-site/dendron.guides.workflows.amoeba]] needs to be invoked to split up the feature into smaller parts. 

In this case, we recommend the following proecedure:
- every section becomes a new child note (with the exception of [[Summary|dendron://dendron.dendron-site/templates.topic#summary]] and [[Details|dendron://dendron.dendron-site/templates.topic#details]])
- every subfeature becomes its own topic note

## Future Work
Currently, the process of generating references is quite manual. There are a few future features that should make this easier:

- When we ship [[22 Queries|dendron://dendron.docs/rfc.22-queries]], we should be able to vastly simplify this process with something like the below
    ```md
    ## Refactoring
    <!-- Get all topics that are taged with `area.refactoring` and the child of dendron.topic. Extract `Commands` header from it -->
    ?[[ and (to tags area.refactoring) (children dendron.topic) ]]#Commands
    ```
- 

## Lookup

- Inspiration:
    - AWS Docs, eg: [What is Amazon EC2? - Amazon Elastic Compute Cloud](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html)
    - Django Docs: [Django documentation | Django documentation | Django](https://docs.djangoproject.com/en/4.0/)
- Past Discussions
  - [[Dendron Site Reorganization|dendron://dendron.community/discussion.2021.dendron-site-reorg]]