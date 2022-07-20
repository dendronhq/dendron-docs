---
id: gxr4cualojk5n0niohjxa3e
title: Debug
desc: ''
updated: 1658331836466
created: 1655001600000
---

### Debugging the CLI

See https://github.com/dendronhq/dendron/blob/master/packages/dendron-cli/.vscode/tasks.json#L44:L44

Create a custom task in [[task.json|../packages/dendron-cli/.vscode/tasks.json]]
Run the task. This should trigger the vscode debugger

### Debug Dendron Publishing
```sh
node --inspect  /usr/local/bin/dendron-cli buildSiteV2 --wsRoot /Users/kevinlin/Dropbox/Apps/Noah  --stage dev --enginePort `cat /Users/kevinlin/Dropbox/Apps/Noah/.dendron.port` --serve 

```


##