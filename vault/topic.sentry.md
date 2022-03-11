---
id: 4il6ivmq4wl3a2v55jkkb44
title: Sentry
desc: ''
updated: 1646958547638
created: 1646958547638
---

## Summary

Sentry is how we log errors in Dendron.

## Architecture

- sentry is initialized inside of `plugin-core` in [[../packages/plugin-core/src/_extension.ts#^rw8l1w51hnjz]] if telemetry is not disabled


## Examples
- sentry captures examples in the following places:
    - if [[plugin activate|../packages/plugin-core/src/_extension.ts#^jtm6bf7utsxy]] logic throws an error
    - [[anytime error level is logged inside of plugin-core|j../packages/plugin-core/src/logger.ts#^sf0k4z8hnvjo]]
    - check if plugin is currently active -> [[../packages/plugin-core/src/workspace.ts#^i7mc80t1mz8n]]
    - when api-server throws an error in a return method -> [[../packages/api-server/src/Server.ts#^it10dgjmvwvq]]

## Relevant Files
- [[common-all/errorReporting|../packages/common-server/src/errorReporting.ts]]: utilities for managing errors

## Lookup
- [[Sentry Usage inside Dendron|dendron://dendron.docs/dev.process.errors#sentry]]
