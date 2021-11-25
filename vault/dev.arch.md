---
id: ENeBSPWAtTlQclXYWNm6c
title: Architecture
desc: ''
updated: 1637878699671
created: 1629988601634
nav_order: 3.1
---

## Summary

Dendron has many oving parts but at the core, it consists of a traditional client/server model. 

Currently, the clients are: 
- [[pkg.plugin-core]]: vscode extension
- [[pkg.dendron-cli]]: dendron CLI

The server is a local express.js server, more details on that [[here|pkg.dendron-api-server]].

Dendron also has many utility packages and libraries that are used in both client and servers of Dendron. 
You can find an index of all Dendron packages [[here|dendron://dendron.docs/pkg#summary]].

## Components

### Engine
- component: [[Dendron Engine|dendron.dev.design#dendron-engine]]

Responsible for indexing notes and lookup methods. 