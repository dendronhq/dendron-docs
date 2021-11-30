---
id: O5Pt6Yv8CkgEHQEzuD7Kb
title: Schema
desc: ''
updated: 1637878625041
created: 1637865250835
---

## Schema
- for module schema, see [[ref.module-schema]]

```yml
version: 1
imports: [module]
schemas:
  - id: dev
    title: dev
    parent: root
    children:
      - process
      - module.quickstart
      - module.concepts
      - module.architecture
      - module.tips
      - module.faq
      - module.topic
      - module.ops
      - module.changelog
      - module.config
      - module.advanced
      - module.best
  - id: process
    children:
      - pattern: issues
      - pattern: code
      - pattern: errors
      - pattern: logs
      - pattern: qa
        id: module.qa
      - pattern: review
      - pattern: deploy
```