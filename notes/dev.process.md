---
id: 7aFrHnTNespaRzhlTwftM
title: Development Process
desc: ''
updated: 1657065808641
created: 1637876733365
config:
  global:
    enableChildLinks: false
nav_order: 2.1
---

## Summary

This goes over the end to end lifecycle of handling issues in Dendron - from the moment an issue is conceived to after it has been deployed in production.

- TIP: if you have questions about any of this, the best place to go for help is inside the Dendron Discord [#dev channel] (https://discord.gg/AE3NRw9)

## Planning

### Issues

Managing new tasks and issues

- [[Github Issues|dendron://dendron.docs/dev.process.issues]]
- [[Internal Issues|dendron://dendron.handbook/area.team.sop#issues]]

## Execution

### Code

Writing code

- Foundational: read this before you start working
  - [[Dev Env|dendron://dendron.docs/dev.process.code.dev-env]]: Setting up your dev environment
  - [[Monorepo|dendron://dendron.docs/dev.process.code.monorepo]] (NOTE: read this if its your first time working in a monorepo)
  - [[Tips|dendron://dendron.docs/dev.process.tips]]
- Process
  - [[Code Conventions|dendron://dendron.docs/dev.process.code]]
  - [[Best Practices When Coding|dendron://dendron.docs/dev.process.code.best-practices]]
  - [[Impactful Change Notice|dendron://dendron.docs/dev.ref.impactful-change-notice]]: Breaking changes to the development process and current migrations
- Helpful
  - [[Utilities|dendron://dendron.docs/dev.process.code.utilities]]: Where utilities are stored
  - [[dendron://dendron.docs/dev.process.code.gotchas]]: Gremlins that can be hard to debug
  - [[Cookbook|dendron://dendron.docs/dev.process.code.cook]]: Howto perform common operations

### Instrumentation

- [[Errors|dendron://dendron.docs/dev.process.errors]]
- [[Logs|dendron://dendron.docs/dev.process.logs]]

### Tests

- [[Testing|dendron://dendron.docs/dev.process.qa.test]]

### Docs

- [[Dendron Developer Docs|dendron://dendron.docs/dev.process.docs]]
- [[Dendron Product Docs|dendron://dendron.docs/dev.process.docs-product]]

### Commit

- [[Committing Code|dendron://dendron.docs/dev.process.commit]]

### Review

- [[Submitting Code for Review|dendron://dendron.docs/dev.process.review]]
- [[Additional Review Considerations|dendron://private/area.team.ref.reviewing-code]]

### Release

Releasing Code

- [[Deployments|dendron://dendron.docs/dev.process.deploy]]

## Feedback

### Close the Loop

Things to do after issue is released

- [[Close Loop|dendron://dendron.docs/dev.process.close-loop]]

## Repot

These are misc notes that need to be re-organized:

- [[Cookbook|dendron://dendron.docs/dev.cook]]

## Lookup

- the layout is inspired by [GitLab Master Plan](https://about.gitlab.com/blog/2016/09/13/gitlab-master-plan/)
