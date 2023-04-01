---
id: DxucQoYEzu9VnBoYuFiqN
title: Schema
desc: ''
updated: 1680365457452
created: 1634749668693
nav_order: 1
---

- for module schema, see [[ref.module-schema]]

```yml
version: 1
imports: [module]
schemas:
- id: pkg
  desc: a package
  parent: root
  namespace: true
  children:
    - module.qa
    - module.quickstart
    - module.concepts
    - module.architecture
    - module.tips
    - module.faq
    - module.topic
    - module.ops
    - module.dev
    - module.changelog
    - module.config
    - module.advanced
    - module.best
```

## Wildcards

Wildcards are nodes that can be put as the children of anything. They can also live as sections inside a note

### Nodes
- Cook: Guide on how to accomplish a specific task
    - alias: howto
    - eg: [[Cook|dendron://dendron.docs/pkg.plugin-core.dev.cook]]
- Tip: Optimizations on doing things better
    - eg: [[Tips|dendron://dendron.docs/pkg.plugin-core.dev#tips]]
- Gotchas: Things to watch out for
    - eg: [[Gotchas|dendron://dendron.docs/pkg.plugin-core.dev#gotchas]]

### Types

#### Wildcard as Child of Note

- hiearchy: {module}.dev.cook
    - how to do X in a certain module

### Wildcard as Section of Note

-  {module}.dev
```md
## Cook

### Adding a new command to plugin-core

...
```

### Choosing betwen Child vs Section

Following the [[Amoeba pattern|dendron://dendron.dendron-site/dendron.guides.workflows.amoeba]], wildcards should start of as sections of existing notes. If the content needs to be used in multiple places or exceeds 800 lines of text, it should be refactored into a child

## Ref vs Topic

A topic is a major component that requires its own `module` hiearchy to properly document. For example, [[Lookup|dendron://dendron.docs/pkg.plugin-core.t.lookup]] is a topic of `plugin-core`.

A reference is a minor component that should hang as a leaf and should be self contained. For example, [[Decorations|dendron://dendron.docs/pkg.plugin-core.ref.decorations]] is a reference in `plugin-core` because it is specific to VSCode. 

## Examples of using the schema

### How do I get started developing?

- schema: `{module}.quickstart`
- eg: [[Dendron Plugin Quickstart|dendron://dendron.docs/pkg.plugin-core.quickstart]]

### How do I write or read logs?

- schema: `{module}.ops.logs`

### How do I handle errors?

- schema: `{module}.ops.errors`

### How do I create a new {X} in {Y}?
- schema: `{module}.dev.cook`
- eg: [[Add a new Command|dendron://dendron.docs/pkg.plugin-core.dev.cook.add-new-command#add-a-new-command]]

### Architecture

#### What is lifecycle of a given command?
- schema: `{module}.arch.lifecycle`

### Testing

#### How do I write a test?
- schema: `{module}.qa.test

#### How do I debug a test?
- schema: `{module}.qa.debug
