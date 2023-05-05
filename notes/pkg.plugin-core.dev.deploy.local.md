---
id: oe9gr5yg00s4va7qebf4nua
title: Local
desc: ''
updated: 1665626887048
created: 1665626887048
---

This goes over doing local deployments

- startup verdaccio
```sh
source bootstrap/scripts/helpers.sh
setRegLocal
npx verdaccio -c ./bootstrap/data/verdaccio/config.yaml
```

- publish all dependencies
```sh
lerna publish from-package --ignore-scripts
```

- prep plugin
```sh
dendron dev prep_plugin && rm package.json
```

- install
```sh
cd packages/plugin-core
yarn install --no-lockfile

export SKIP_SENTRY=1
# this is a file with the following
source ~/.secrets/dendron.build-env
# export GOOGLE_OAUTH_CLIENT_ID=
# export GOOGLE_OAUTH_CLIENT_SECRET=
# export SENTRY_AUTH_TOKEN=
vsce package --yarn
code --install-extension dendron-0.110.1.vsix
```

- > NOTE: to do this iteration again with changes, make changes, cancel out of verdaccio, and repeat again from step 1