---
id: sfTSxnuFiuuPfYee6sRwa
title: Gh Action
desc: ""
updated: 1642112509140
created: 1642112034906
---

## Summary

Working with our github actions pipeline

## Lifecycle

- [[../.github/workflows/ci.yml]]

```yml
- actions/checkout@v2

- Get yarn cache directory pat

- Restore Node modules cache
	- if not windows

- Restore Node modules cache for Windows
	- if windows

- Set up Node.js ${{ matrix.node-version }}
...

- Initialize
	- yarn ci:init

...

- Run tests
	- yarn ci:test:${{ matrix.suite }}
```
