---
id: pauCR2Tjd5PtJY6qzJSvH
title: Migration
desc: ""
updated: 1640904817585
created: 1640904455381
---

## Summary

How Dendron migrates configuration

## Lifecycle

1. Dendron activates if it detects a Dendron workspace. This is described in [[Startup|dendron://dendron.docs/pkg.plugin-core.arch.lifecycle.startup]]
1. During startup, Dendron calls `runMigrationsIfNecessary`. Process described in [[Run Migration|dendron://dendron.docs/pkg.dendron-engine.t.upgrade.arch.lifecycle#run-migration]]
