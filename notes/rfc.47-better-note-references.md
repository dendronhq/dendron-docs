---
id: 9hoksdbfuv0a1vaffla7dv0
title: 47 Better Note References
desc: ''
updated: 1655412107454
created: 1655411869181
published: false
---
<!-- Remove the following warning once you are done writing the RFC. -->
> ⚠️ This proposal is currently a draft and is not yet finalized.

## Goals

## Context

## Proposal

All examples use the [[sample note|dendron://dendron.docs/rfc.47-better-note-references#^vi9z5bwe03pf]] as the basis for referencing

### smart header references
- context: current behavior is to transclude everything starting from the header to the end of the page
- proposal: transclude from the header to the next header that is **equal or less in level**
- eg: ![[#header-reference:#*]]
  - migration:
  - to migrate, introduce a new setting `enableSmartHeaderReferences` 
    - unless enabled, will keep current behavior
    - doctor command to transform all `![[#one]]` references to `[[#one:#$]]` 

### referencing startinig and ending positions
- context: currently impossible to reference just the beginning or end of a doc without headers
- proposal: introduce syntax for front of the doc `![[#^]]` aned end of the doc `![[#$]]`
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

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/new
