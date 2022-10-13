---
id: oe9gr5yg00s4va7qebf4nua
title: Local
desc: ''
updated: 1665626887048
created: 1665626887048
---

This goes over doing local deployments

- startup verdaccio
```
source bootstrap/scripts/helpers.sh
setRegLocal
npx verdaccio -c ./bootstrap/data/verdaccio/config.yaml
```

- publish all dependencies
```
lerna publish from-package --ignore-scripts
```

- prep plugin
```
dendron dev prep_plugin && rm package.json
```

- install
```
yarn install --no-lockfile
export SKIP_SENTRY=1
source ~/.secrets/dendron.build-env
vsce package --yarn
code --install-extension dendron-0.110.1.vsix
```