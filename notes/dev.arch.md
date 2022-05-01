---
id: ENeBSPWAtTlQclXYWNm6c
title: Dendron Architecture
desc: ''
updated: 1650934113404
created: 1629988601634
nav_order: 3.1
---

## Summary

Dendron has many moving parts but at the core, it consists of a traditional client/server model. 

Currently, the clients are: 
- [[pkg.plugin-core]]: vscode extension
- [[pkg.dendron-cli]]: dendron CLI

The server is a local express.js server, more details on that [[here|pkg.dendron-api-server]].

Dendron also has many utility packages and libraries that are used in both client and servers of Dendron. 
You can find an index of all Dendron packages [[here|dendron://dendron.docs/pkg#summary]].

## Plugin Architecture

The plugin architecture is described in [[Dendron Plugin Architecture|dendron://dendron.docs/pkg.plugin-core.arch]]

## Server architecture

The server architecutre is described in [[Dendron Engine Architecture|dendron://dendron.docs/pkg.dendron-engine.arch]]