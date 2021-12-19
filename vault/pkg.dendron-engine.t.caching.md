---
id: yjIf0tl2Id7vhluRL8Edz
title: Caching
desc: ""
updated: 1639875032860
created: 1639855161909
---

## Summary

Dendron caches meta data to avoid indexing eveyrthing on startup

## Details

What is cached:

- frontmatter variables
- hash of note contents
- note links
- note anchors
- contentCache

What is NOT cached:

- vault (this is stored by absolute path, can be different if you start vault in different machines)
- parent/child relationships
- backlinks

The speedup comes from not parsing the frontmatter on subsequent restarts

Cache data is written in `.dendron.cache.json` in the same folder as the vault

## Properties

### version

Cache version. Currently set to `0` by default

### notes

Dictionary of [[Note Props|dendron://dendron.docs/pkg.common-all.ref.note-props]]

### links

Dictionary of note links

## Example

Cache of tutorial workspace

```json
{
  "version": 0,
  "notes": {
    "root": {
      "data": {
        "id": "root",
        "title": "root",
        "vault": {
          "fsPath": "vault"
        },
        "type": "note",
        "desc": "",
        "links": [],
        "anchors": {},
        "fname": "root",
        "updated": 1605266684036,
        "created": 1595961348801,
        "parent": null,
        "children": [],
        "data": {},
        "contentHash": "cf4622cd4e7841f93fb3051e6203c8e6",
        "custom": {}
      },
      "hash": "cf4622cd4e7841f93fb3051e6203c8e6"
    },
    "tutorial": {
      "data": {
        "id": "01u0co3RYjOM1bjpc2qIU",
        "title": "Tutorial",
        "vault": {
          "fsPath": "vault"
        },
        "type": "note",
        "desc": "Tutorial Home Page",
        "links": [
          {
            "type": "wiki",
            "from": {
              "fname": "tutorial",
              "id": "01u0co3RYjOM1bjpc2qIU",
              "vaultName": "vault"
            },
            "value": "tutorial.1-navigation-basics",
            "alias": "tutorial.1-navigation-basics",
            "position": {
              "start": {
                "line": 17,
                "column": 14,
                "offset": 852
              },
              "end": {
                "line": 17,
                "column": 46,
                "offset": 884
              },
              "indent": []
            },
            "xvault": false,
            "sameFile": false,
            "to": {
              "fname": "tutorial.1-navigation-basics"
            }
          }
          // ...
        ],
        "anchors": {
          "welcome-to-dendron": {
            "type": "header",
            "text": "Welcome to Dendron",
            "value": "welcome-to-dendron",
            "line": 8,
            "column": 0,
            "depth": 2
          }
          // ...
        },
        "fname": "tutorial",
        "updated": 1624864763249,
        "created": 1624333847315,
        "parent": null,
        "children": [],
        "data": {},
        "contentHash": "354180fb8e78febbfa546ec58cf34ea5",
        "custom": {}
      },
      "hash": "354180fb8e78febbfa546ec58cf34ea5"
    }
    // ...
  }
}
```

## Related

- [[Engine Initialization|dendron://dendron.docs/pkg.dendron-engine.t.engine.arch#init]]
- [[Note Props|dendron://dendron.docs/pkg.common-all.ref.note-props]]
