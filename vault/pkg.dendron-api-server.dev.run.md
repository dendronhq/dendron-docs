---
id: oRD4IFjl5ZLGI8appNnqS
title: Run API Server 
desc: ''
updated: 1640798957541
created: 1640798696763
---

## Running in Development

1. Launch the server using the build task `start debug server` launch task 
2. Update the following settings of Dendron to use a running server through the following workspace setting 
```yml
dev:
    dendron.serverPort": 3005`
```
3. Reload the workspace for the settings to take affect

![debug task](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/api-debug.png)

##