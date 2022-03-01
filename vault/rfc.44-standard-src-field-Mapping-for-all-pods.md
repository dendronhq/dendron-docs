---
id: N0G4s23hFDGVnsjHhh6dt
title: 44 Standard srcfieldMapping for all pods
desc: ''
updated: 1646117880926
created: 1644819902372
---


## Goals

This is a proposal to standarized on a common source-field mapping that all pods can adopt as well as a common API that pods can use to access the mapping. 

## Context

The mapping of fields from Dendron to fields in a pod destination is currenly ad hoc. Github issues exposes one way of mapping ([aliasMapping](https://wiki.dendron.so/notes/8JECQzntY2P5ha3U.html#aliasmapping)) that is different from that introduced in the airtable pod ([src field mapping](https://wiki.dendron.so/notes/oTW7BFzKIlOd6iQnnNulg.html#sourcefieldmapping))

## Proposal

### Mappings

The SrcFieldMapping in the pod config must have:

- required: array of fields that are required. Absense of `required` array in srcFieldMapping would consider all the fields as optional.
- skipOnEmpty: if set to true, skips exporting the field if value provided is empty('' | [] | {} | undefined)
- Key to be the name of field in destination.
- Value to be an object with the following properties:
    - to: Dendron field to map (body, title etc)
    - type: type of this field in destination. See [[Type enumeration|dendron://dendron.docs/rfc.44-standard-src-field-Mapping-for-all-pods#type-enumeration]]
    - filters: pattern to filter values of `to` field. Accepts multiple values.
    - scope: limit the scope for *tags* and *links* property.
    - clean: array of actions to perform on the value.
    - default: default value for the field.

#### Type enumeration

The *type* field can have following values:
- string
- number
- date
- boolean
- singleSelect
- multiSelect
- linkedRecord
- object(custom defined)


## Details

### Scope Limiting

This section elaborates the behavior of exporting tags and links in a note. By default we export all tags and links. In order to limit the export scope to frontmatter, body or a section, we should have a *scope* field with one of the following values: 
    - fm: limit scope to just frontmatter of note
    - body: limit scope to note body
    - all: scan entire note.
    - section: scan a section of note.

#### Frontmatter Scope

```yml
    Scope: {to: tags, type: multiSelect, filters: "tags.size.*", scope: fm},
```
#### Section Scope

For the below mapping, all the tags present in section `Header 1` will be exported to Scope field in Airtable.

```yml
Scope: {to: tags, type: multiSelect, filter: "tags.size.*", scope: section#header-1},
```

## Example

- For Airtable custom pod config, the mapping should look like
```yml
sourceFieldMapping:  {
      required: [DendronId, Name],
      skipOnEmpty: true,
      DendronId: {to: id, type: string}, 
      Name: {to: title, type: string},
      Notes: {to: body, type: string}, 
      Size: {to: tags, type: singleSelect, filters: "tags.size.*"},
      Owner: {to: owner, type: singleSelect}
    }
``` 

- For Github Issue Publish Pod, the mapping should look like

```yml
sourceFieldMapping:  {
  Status: {to: status, type: string, clean: [{action: remap, data: {x : 'CLOSED', w: 'OPEN'}}]},    
  Assignees: {to: assignees, type: string },
  Labels: {to: tags, type: multiSelect}
}
```

- to add `owner` as an alias of `assignees` we can update the `to` field.
- to remap dendron user tags with Github usernames we can update the `clean` field.
```yml
      Assignees: {to: owner, type: string, clean: [{action: remap, data: {joshi : 'Harshita-mindfire', kaan: 'SeriousBug' }}] },

```


## FAQ

Here are some points brought up during the discussions. These points should be already reflected in this RFC, but are included here for reference.
- A new constraint `required` is added to define optional and required fields. All the fields are by default optional unless stated otherwise. 
- A new assert `skipOnEmpty` with default value true. If set to true, and no default value is provided for fallback, the field remains unchanged in Airtable. It covers both empty `('' | {} | [] )` and explicitly stated `undefined` value.
- Addition of new fields for the mapping object.
    1. field `scope` is introduced for limiting export scope of tags and links. See [[Scope Limiting|dendron://dendron.docs/rfc.44-standard-src-field-Mapping-for-all-pods#scope-limiting]] for enum.
    2. field `clean` to describe an array of actions to perform on the value. These actions are used to hydrate the values before export.
    3. field `default` to provide a default value for fallback when the field is either null, empty or undefined.   
- The `filter` field is renamed to `filters` to apply multiple filters.


## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/2431
