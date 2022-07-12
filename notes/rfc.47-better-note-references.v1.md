---
id: 3l9zjos1m6pazmiyv682km7
title: V1
desc: ''
updated: 1657590385886
created: 1657590379266
---

<!-- Remove the following warning once you are done writing the RFC. -->
> ⚠️ This proposal is currently a draft and is not yet finalized.

## Goals

1. Deliver an improved experience for note references, with increased functionality 
2. Deliver it in a way that does not impact existing notes, or offer a migration solution
3. Ensure the solution feels natural and easy to use

## Context
[Note references](https://wiki.dendron.so/notes/f1af56bb-db27-47ae-8406-61a98de6c78c/) are a key feature of Dendron and allow users to embed either parts of or an entire note into the body of another note. 

The current behaviour when a header is referneced is to embed the entire note from that header onwards, but this can be augmented by adding a range (`:`) modifier which either requires a specific header reference or takes a wildcard (`#*`) that looks for the following header of any level. 

Given the standard usage of header levels across markdown and html many users may want to reference between two of the same level headers - currently this is only possible via naming the next header explictley within the range. This can cause issues when changing the ordering of sections within a note as there is no way to ensure range links get updated.

Additionally, there is currently no way to reference the start of end of the note, meaning it is not possible to reference content before the first header (which users may use given dendron's autouse of the title at a h1 header), and no way to refernece the end of a note which means if a note gets additional content in the future either this may be added automatically to any note refernece which may not have been the intended point of that link.

## Proposal

All examples use the [[sample note|dendron://dendron.docs/rfc.47-better-note-references#^vi9z5bwe03pf]] as the basis for referencing


### smart header references
- context: current behavior is to transclude everything starting from the header to the end of the page
- proposal: transclude from the header to the next header that is **equal or less in level**, and maintain current wildcard for any level header
- eg: ![[#header-reference:#*]]
  - migration:
  - to migrate, introduce a new setting `enableSmartHeaderReferences` 
    - unless enabled, will keep current behavior
    - doctor command to transform all `![[#one]]` references to `[[#one:#$]]` 
- 

### referencing starting and ending positions
- context: currently impossible to reference just the beginning or end of a doc without headers
- proposal: introduce syntax for front of the doc `![[#^]]` and end of the doc `![[#$]]`
- eg: ![[#positional-reference,1:#*]]

### referencing frontmatter
- context: not possible to reference frontmatter
- proposal: introduce syntax for frontmatter reference `![[#>foo]]`
- eg: ![[#frontmatter-reference:#*]]
- NOTE: this is only useful when referencing frontmatter of a note from another note, otherwise, users could use frontmatter variable substitution to reference frontmatter of the same note


## Example

- sample.md ^vi9z5bwe03pf
```md
--- 
id: 54b8fda0-ab3a-4ead-b030-e47eb741ab7b
secret: 42
---

Pre-amble

## One

One Text

### One.Alpha

One.Alpha Text

## Two

### Two.Beta

## Three

End Text
```

### header reference

- NOTE: that in this case, because `### one.alpha` is higher in heading level, it is also transcluded
  ```md
  ![[#one]]

  <!-- Output -->
  ## One

  One Text

  ### One.Alpha

  One.Alpha Text
  ```
- NOTE: that in this case, the note only goes up to `### one.alpha` because a header wildcard is used
  ```md
  ![[#one:#*]]

  <!-- Output -->
  ## One

  One Text
  ```

### positional reference

- example of referencing from beginning of doc
  ```md
  ![[#^]]

  <!-- Output -->
  Pre-amble text
  ```

- example of referencing to end of doc
  ```md
  ![[#two:#$]]

  <!-- Output: -->
  ## Two

  ### Two.Beta

  ## Three

  End Text
  ```

### frontmatter reference

- sample2.md
```md
![[sample#>secret]]

<!-- Output -->
42
```

## Tradeoffs
- Some overlap with [[22 Queries|dendron://dendron.docs/rfc.22-queries]] - whereas 22 are meant for advanced logic, note references are meant to make "common things simple" by providing a flexible mechanism to reference parts of a note
- There is already a usage for `^` for block anchors within notes - an argument could be made this extends that concept by just imagining a blank anchor at the top of the note (and also allows for refernece between top and a specific block anchor) 
- This doesn't allow for some specific cases e.g. referencing from a level 2 header until the first subsequent level 4 header - these use cases seem rare and unlikely but possible
- Another setting gets added to the config which leads to more complexity and having to provide parralel documentation if/until a full switch over is made - similar to self-contained vaults approach.

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/new

