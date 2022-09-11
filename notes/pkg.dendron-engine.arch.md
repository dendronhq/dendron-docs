---
id: ebf58a4a-18f8-498d-95eb-04d856c0a000
title: Dendron Engine Architecture
desc: ''
updated: 1650934150198
created: 1619535999168
---

## Components

![[dendron://dendron.docs/pkg.dendron-engine.t.engine#summary,1:#*]]

## Lifecycle
![[dendron://dendron.docs/pkg.dendron-engine.lifecycle]]

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

