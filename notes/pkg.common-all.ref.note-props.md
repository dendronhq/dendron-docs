---
id: IZGHxY9fuIPdj2oN7dyd1
title: Note Props
desc: ""
updated: 1640583636418
created: 1639170734281
---

## Summary

Common properties for notes

## Reference

This describes different note properties

They can be found in [[../packages/common-all/src/types/foundation.ts]]

### DNodeExplicitPropsEnum

Node property keys that are written to the frontmatter

### DNodeImplicitPropsEnum

Node property keys that are not written to the frontmatter

### NoteProps

Interface for a Dendron Note

### NoteLocalConfig

Notes have a config property that can override a subset of {@link dendronConfig}

## Example

Note props for [[Dendron|dendron://dendron.dendron-site/dendron]]. Updated 2021.12.10.

```json
{
  "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
  "title": "Dendron",
  "vault": {
    "fsPath": "../../vaults/dendron-site/vault",
    "name": "dendron.dendron-site",
    "sync": "noCommit"
  },
  "type": "note",
  "desc": "",
  "links": [
    {
      "type": "wiki",
      "from": {
        "fname": "dendron",
        "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
        "vaultName": "dendron.dendron-site"
      },
      "value": "dendron.topic.hierarchies",
      "alias": "hierarchies",
      "position": {
        "start": {
          "line": 12,
          "column": 357,
          "offset": 1585
        },
        "end": {
          "line": 12,
          "column": 398,
          "offset": 1626
        },
        "indent": []
      },
      "xvault": false,
      "sameFile": false,
      "to": {
        "fname": "dendron.topic.hierarchies"
      }
    },
    {
      "type": "wiki",
      "from": {
        "fname": "dendron",
        "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
        "vaultName": "dendron.dendron-site"
      },
      "value": "dendron.topic.schema",
      "alias": "schemas",
      "position": {
        "start": {
          "line": 12,
          "column": 400,
          "offset": 1628
        },
        "end": {
          "line": 12,
          "column": 432,
          "offset": 1660
        },
        "indent": []
      },
      "xvault": false,
      "sameFile": false,
      "to": {
        "fname": "dendron.topic.schema"
      }
    },
    {
      "type": "wiki",
      "from": {
        "fname": "dendron",
        "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
        "vaultName": "dendron.dendron-site"
      },
      "value": "dendron.topic.lookup",
      "alias": "path based lookups",
      "position": {
        "start": {
          "line": 12,
          "column": 438,
          "offset": 1666
        },
        "end": {
          "line": 12,
          "column": 481,
          "offset": 1709
        },
        "indent": []
      },
      "xvault": false,
      "sameFile": false,
      "to": {
        "fname": "dendron.topic.lookup"
      }
    },
    {
      "type": "wiki",
      "from": {
        "fname": "dendron",
        "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
        "vaultName": "dendron.dendron-site"
      },
      "value": "dendron._ref.transcript",
      "alias": "here",
      "position": {
        "start": {
          "line": 42,
          "column": 52,
          "offset": 3163
        },
        "end": {
          "line": 42,
          "column": 84,
          "offset": 3195
        },
        "indent": []
      },
      "xvault": false,
      "sameFile": false,
      "to": {
        "fname": "dendron._ref.transcript"
      }
    },
    {
      "type": "wiki",
      "from": {
        "fname": "dendron",
        "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
        "vaultName": "dendron.dendron-site"
      },
      "value": "dendron.features",
      "alias": "features",
      "position": {
        "start": {
          "line": 52,
          "column": 14,
          "offset": 3691
        },
        "end": {
          "line": 52,
          "column": 43,
          "offset": 3720
        },
        "indent": []
      },
      "xvault": false,
      "sameFile": false,
      "to": {
        "fname": "dendron.features"
      }
    },
    {
      "type": "wiki",
      "from": {
        "fname": "dendron",
        "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
        "vaultName": "dendron.dendron-site"
      },
      "value": "dendron.faq",
      "alias": "FAQ",
      "position": {
        "start": {
          "line": 66,
          "column": 9,
          "offset": 4596
        },
        "end": {
          "line": 66,
          "column": 28,
          "offset": 4615
        },
        "indent": []
      },
      "xvault": false,
      "sameFile": false,
      "to": {
        "fname": "dendron.faq"
      }
    },
    {
      "type": "ref",
      "from": {
        "fname": "dendron",
        "id": "b0fe6ef7-1553-4280-bc45-a71824c2ce36",
        "vaultName": "dendron.dendron-site"
      },
      "value": "dendron._ref.install",
      "position": {
        "start": {
          "line": 34,
          "column": 1,
          "offset": 2571
        },
        "end": {
          "line": 34,
          "column": 26,
          "offset": 2596
        },
        "indent": []
      },
      "xvault": false,
      "to": {
        "fname": "dendron._ref.install"
      }
    },
    {
      "from": {
        "fname": "careers.senior-full-stack-engineer",
        "vaultName": "dendron.dendron-site"
      },
      "type": "backlink",
      "position": {
        "start": {
          "line": 41,
          "column": 1,
          "offset": 2082
        },
        "end": {
          "line": 41,
          "column": 29,
          "offset": 2110
        },
        "indent": []
      },
      "value": "dendron"
    },
    {
      "from": {
        "fname": "careers.senior-webdev",
        "vaultName": "dendron.dendron-site"
      },
      "type": "backlink",
      "position": {
        "start": {
          "line": 29,
          "column": 1,
          "offset": 1332
        },
        "end": {
          "line": 29,
          "column": 29,
          "offset": 1360
        },
        "indent": []
      },
      "value": "dendron"
    },
    {
      "from": {
        "fname": "community.reading-series.journal.2021.12.07",
        "vaultName": "dendron.dendron-site"
      },
      "type": "backlink",
      "position": {
        "start": {
          "line": 29,
          "column": 102,
          "offset": 1822
        },
        "end": {
          "line": 29,
          "column": 152,
          "offset": 1872
        },
        "indent": []
      },
      "value": "dendron"
    },
    {
      "from": {
        "fname": "scratch.2021.07.20.105830.copy",
        "vaultName": "private"
      },
      "type": "backlink",
      "position": {
        "start": {
          "line": 32,
          "column": 1,
          "offset": 1625
        },
        "end": {
          "line": 32,
          "column": 29,
          "offset": 1653
        },
        "indent": []
      },
      "value": "dendron"
    },
    {
      "from": {
        "fname": "user.kevin.journal.2021.04.11",
        "vaultName": "private"
      },
      "type": "backlink",
      "position": {
        "start": {
          "line": 29,
          "column": 16,
          "offset": 1134
        },
        "end": {
          "line": 29,
          "column": 35,
          "offset": 1153
        },
        "indent": []
      },
      "value": "dendron"
    },
    {
      "from": {
        "fname": "user.kevin.journal.2021.04.11",
        "vaultName": "private"
      },
      "type": "backlink",
      "position": {
        "start": {
          "line": 31,
          "column": 16,
          "offset": 1241
        },
        "end": {
          "line": 31,
          "column": 35,
          "offset": 1260
        },
        "indent": []
      },
      "value": "dendron"
    },
    {
      "from": {
        "fname": "user.kevin.journal.2021.11.01.m.site-reorg",
        "vaultName": "private"
      },
      "type": "backlink",
      "position": {
        "start": {
          "line": 44,
          "column": 33,
          "offset": 1393
        },
        "end": {
          "line": 44,
          "column": 44,
          "offset": 1404
        },
        "indent": []
      },
      "value": "dendron"
    }
  ],
  "anchors": {
    "use-cases": {
      "type": "header",
      "text": "Use Cases",
      "value": "use-cases",
      "line": 24,
      "column": 0
    },
    "getting-started": {
      "type": "header",
      "text": "Getting Started",
      "value": "getting-started",
      "line": 39,
      "column": 0
    },
    "onboarding": {
      "type": "header",
      "text": "Onboarding",
      "value": "onboarding",
      "line": 42,
      "column": 0
    },
    "join-us": {
      "type": "header",
      "text": "Join Us",
      "value": "join-us",
      "line": 50,
      "column": 0
    },
    "features": {
      "type": "header",
      "text": "Features",
      "value": "features",
      "line": 56,
      "column": 0
    },
    "motivation": {
      "type": "header",
      "text": "Motivation",
      "value": "motivation",
      "line": 60,
      "column": 0
    },
    "you-are-here": {
      "type": "header",
      "text": "You Are Here",
      "value": "you-are-here",
      "line": 64,
      "column": 0
    },
    "faq": {
      "type": "header",
      "text": "FAQ",
      "value": "faq",
      "line": 70,
      "column": 0
    },
    "contributing": {
      "type": "header",
      "text": "Contributing",
      "value": "contributing",
      "line": 74,
      "column": 0
    },
    "license": {
      "type": "header",
      "text": "License",
      "value": "license",
      "line": 78,
      "column": 0
    }
  },
  "fname": "dendron",
  "updated": 1638988512678,
  "created": 1595952505017,
  "parent": "root",
  "children": [
    "rNgD5DhpMirqd4Su68FNo",
    "b33d1803-6e4e-418f-a269-c4d4bde967cf",
    "8cdebdcd-f8b1-497a-a1b4-199443f48297",
    "34ee4bcf-60e9-4031-a4c0-26113b5acb80",
    "f9540bb6-7a5a-46db-ae7c-e1a606f28c73",
    "c6fd6bc4-7f75-4cbb-8f34-f7b99bfe2d50",
    "125c990b-6fe7-4ada-a65f-44cbde8b33f0",
    "DQ2Tf8lkRWbaUgAQSbG6T",
    "683740e3-70ce-4a47-a1f4-1f140e80b558",
    "4bb85c39-d8ac-48ad-a765-3f2a071f7bc9",
    "02c2d7b6-2ea2-4e15-9894-9dead50d5ca2",
    "923d1bad-74fa-4aff-bac3-9e1792db886f",
    "CuFmjLnKEB4ivYDoKCKKw",
    "3bf95ba0-8d6e-4bfc-b46e-c0c66cdab2ee",
    "7fcebd7d-6411-4c9d-8baf-65629dc018a1",
    "0f9967bc-d657-496f-9b4b-d1c7ebfd496c",
    "f308164e-faff-43a1-8d34-72ed060275b0",
    "wWeF5x18XE0kBRK7nfPZz",
    "6e4c4f61-80a3-46fa-9ad3-04b99d9e9695",
    "9688f51b-49fb-4012-8845-0012f0dcf56f",
    "8e2272bd-ad24-4806-b588-da2bcfa6ea11",
    "b08155fe-c5c6-4d4c-a737-d500923f35ad",
    "7a7af2fa-b9d0-4adc-81e6-f03186123539",
    "678c77d9-ef2c-4537-97b5-64556d6337f1",
    "FWtrGfE4YJc3j0yMNjBn5",
    "05774b2e-ebf7-4bbc-8171-ad191ba0ae0a"
  ],
  "data": {},
  "contentHash": "d6cd9c5c080e3bbe64ead950d8ccc35a",
  "custom": {},
  // NOTE: this is modified. raw text
  "body": "...",
  "schema": {
    "schemaId": "dendron",
    "moduleId": "dendron"
  }
}
```
