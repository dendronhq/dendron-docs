---
id: 8r5tm960j5obgp4hrgqj5tr
title: Testing
desc: ''
updated: 1663517386481
created: 1663517234187
---

This goes over where log files are stored when testing. 

- When running the [[debugger|dendron://dendron.docs/dev.process.qa.debug]], logs are writting to `${workspaceFolder}/engine-test-utils-debug.log`
    - This is specified in [[../.vscode/launch.json]]
- When [[watching a single test|dendron://dendron.docs/pkg.engine-test-utils.qa.test#run-a-single-test]], logs are written to  `${workspaceFolder}/engine-test-utils.log`
    - This is specified in [[../.vscode/tasks.json]]


