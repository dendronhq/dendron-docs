---
id: n32ibr6okxgpw1ki9hksbtl
title: Advanced Cookbook
desc: ""
updated: 1660955031349
created: 1647377581391
---

## Summary

If you're not sure you need to follow these steps, you probably don't

### Bump plugin version only without updating npm dependen![[Webpack|dendron://dendron.docs/pkg.plugin-core.ref.webpack]]ies

Use this for a quicker way to update the plugin

1. update plugin `package.json` and bump the version
1. [[Package Plugin|dendron://dendron.docs/pkg.plugin-core.dev.deploy#package-plugin]]
1. [[Install Plugin Locally|dendron://dendron.docs/pkg.plugin-core.dev.deploy#install-plugin-locally]] & verify functionality
1. [[Publish From Artifact|dendron://dendron.docs/pkg.plugin-core.dev.deploy#publish-from-artifact]] but update `VERSION` with custom version
1. After plugin is published, [[Bump Plugin Version|dendron://dendron.docs/pkg.plugin-core.dev.deploy#bump-plugin-version]]
1. Merge changes back in master
