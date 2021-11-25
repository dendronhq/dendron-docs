---
id: sLky6p4DfEp4ll6w9IZ8o
title: Arch
desc: ''
updated: 1637861233498
created: 1631979441703
---

## Summary

This goes over how CLI commands are architected in Dendron

## Details

The Dendron CLI will create its own instance of an API server for most commands. 
This engine, when spawned, will write a port file at `.dendron.port` so that other processes can discover the port that the engine server is running on.
When the `dendron-cli` spawns an engine, it will write the port file at `.dendron.port.cli` to not conflict with the running engine. 

## Related
- [[pkg.dendron-cli.ref]]