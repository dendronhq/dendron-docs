---
id: N0G4s23hFDGVnsjHhh6dt
title: 44 Standard srcfieldMapping for all pods
desc: ''
updated: 1644993578136
created: 1644819902372
---


## Goals

This is a proposal to standarized on a common source-field mapping that all pods can adopt as well as a common API that pods can use to access the mapping. 
> ⚠️ This RFC is a draft, and is not finalized. ⚠️


## Context

The mapping of fields from Dendron to fields in a pod destination is currenly ad hoc. Github issues exposes one way of mapping ([[aliasMapping|dendron://dendron.dendron-site/dendron.topic.pod.builtin.github-issue.publish#aliasmapping]]) that is different from that introduced in the airtable pod: [[Airtable|dendron://dendron.dendron-site/dendron.topic.pod-v2.ref.builtin.airtable]]

## Proposal

### Mappings

The SrcFieldMapping in the pod config must have:
- Key to be the name of field in destination.
- Value to be an object with the following properties:
    - to: Dendron frontmatter field to map
    - type: type of this field in destination
    - filter: pattern to filter values of `to` field.
    - statusSymbols: status symbols used in the frontmatter.
    - scope: limit the scope for *tags* property.

## Details

## Example

- For Airtable custom pod config, the mapping should look like
```yml
sourceFieldMapping:  {
      DendronId: {to: id, type: string}, 
      Name: {to: title, type: string},
      Notes: {to: body, type: string}, 
      Status: {to: status, type: string},
      Size: {to: tags, type: singleSelect, filter: "tags.size.*"},
    }
```
Additionally, for mapping **tags**, we can have the *scope* property to limit the scope.
  - This should be valid for only `multiSelect` type.
  - scope can have the following values:
    - fm: tags present in the frontmatter of Note
    - body: tags present in the Note body
    - all: scan all note for tags
  
```yml
    Scope: {to: tags, type: multiSelect, filter: "tags.size.*", scope: fm},
```

- For Github Issue Publish Pod, the mapping should look like

```yml
sourceFieldMapping:  {
      Status: {to: status, type: string, statusSymbols: {x : 'CLOSED', w: 'OPEN'}},
      Assignees: {to: assignees, type: string },
      Labels: {to: tags, type: multiSelect}
    }
```

- to add `owner` as an alias of `assignees` we can update the `to` field and it should be good.
```yml
      Assignees: {to: owner, type: string },

```

## Tradeoffs

## Discussion
<!-- Click the link and create new discussion -->
