---
id: ebf58a4a-18f8-498d-95eb-04d856c0a000
title: Dendron Engine Architecture
desc: ""
updated: 1645402214907
created: 1619535999168
---

## Components

![[dendron://dendron.docs/pkg.dendron-engine.t.engine#summary,1:#*]]

## Layout

The Dendron Engine is organized into modules that are a top level folder

```
- src/
    - metadata/
        - service.ts
        - index.ts
        - ...
    - migration/
        - service.ts
        - index.ts
        - ...
```


## Lifecycle
![[dendron://dendron.docs/pkg.dendron-engine.arch.lifecycle]]