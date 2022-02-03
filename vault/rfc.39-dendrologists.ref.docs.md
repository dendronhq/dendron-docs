---
id: HVKRbG6qarzcUgjPxen65
title: Docs
desc: ''
updated: 1642128103229
created: 1642120195565
category: RFCs/Ideas
discussionID: D_kwDOEF_3Vs4AOfk8
url: 'https://github.com/dendronhq/dendron/discussions/2169'
author: 'https://github.com/dendron-bot'
---

## Summary

Help us ensure that [[Docs|dendron://dendron.docs/rfc.39-dendrologists#docs]] are consistent and that insight in discord threads are recorded so that wisdom can be preserved for future generations.

## Lookup
- [[Dendron Wiki|dendron://dendron.dendron-site/dendron]]
  - Source repo: [dendronhq/dendron-site](https://github.com/dendronhq/dendron-site/)

## Initial Tasks
- issue template(s)
- pr template
- review and verify consistent schema
- review and verify consistent templates

## Recurring Tasks
- encouraging community members to open issues in appropriate docs repos (`dendron-site`, `dendron-docs`), similar to how we encourage for `dendron` code repo

## Future Tasks
- [Use tooling to enforce, and prevent conflicts with, a documentation Style Guide](https://github.com/dendronhq/dendron-site/issues/339)
  - Grammar, spelling, word dictionaries, etc.

## Open Questions and Ideas
- Related to the future tasks, but I think a discussion on standardized tooling would be helpful for the overall maintenance and management of our docs repos. The goals would be to have re-usable scripts and GitHub Action workflows that can people can use in their own repos.
  - Potential tooling:
    - `pre-commit`
    - `vale`
    - spellcheck tooling
    - `findBrokenLinks` in CI / GitHub Actions
