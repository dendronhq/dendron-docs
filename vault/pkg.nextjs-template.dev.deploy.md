---
id: a60F3At8Hb2jBBSV8tgPW
title: Deploying NextJS Template for Release
desc: ''
updated: 1646757964554
created: 1640280816708
---


## Prerequisites

Make sure you have `nextjs-template` cloned locally

```sh
cd /tmp
git clone git@github.com:dendronhq/nextjs-template.git
mv nextjs-template/.git {WORKSPACE_ROOT}/packages/nextjs-template
```

## Steps

These steps should be run **after** the weekly release has gone out. It is only needed to run these steps if we have changes to the `nextjs-template`

1. Make sure your current workspace is clean and stash changes otherwise
1. Get the release version (NOTE: this should be the release AFTER publishing the release. the `lerna.json` should be updated to the latest minor version at this point)
    ```sh
    RELEASE_VERSION=
    git pull
    git checkout --track release/$RELEASION_VERSION
    ```
    - eg: `RELEASE_VERSION=release/0.81.0`
1. Update nextjs package
    - NOTE: we need to remove the workspace `package.json` to generate the lockfile correctly
    - #todo: the following instructions are unix specific. we need to wrap this in a script that works also for windows
    ```sh
    rm package.json

    echo "sync nextjs-template..."
    VERSION=$(cat lerna.json | jq -r ".version")
    pushd packages/nextjs-template/
    
    echo "backup node_modules..."
    mv node_modules /tmp

    echo "generating lockfile..."
    yarn

    echo "commit and push..."
    git add .
    git commit -m "chore(release): sync nextjs-template with dendron $VERSION"
    ```
1. Verify nextjs works in dev branch
    - Follow steps in [[Testing in github actions pipeline|dendron://dendron.docs/pkg.nextjs-template.qa.test#testing-in-github-actions-pipeline]]
1. Push nextjs-template
    ```sh
    git push

    echo "restore node_modules..."
    mv node_modules /tmp/nextjs-nm
    mv /tmp/node_modules .
    popd

    echo "restore package.json"
    git checkout -- package.json

    echo "update nextjs commit to master"
    git add  "packages/nextjs-template/yarn.lock"
    git commit -m "chore: update nextjs lock file"
    git push
    ```

## Verify

- #todo: this should be automated in the future

1. Clone [[Remote|dendron://dendron.docs/pkg.template-publish-github-action#remote]]
1. Update the `root.md` file and push
    ```
    vim vault/root.md

    Last updated: 
    - version: {RELEASE_VERSION}
    ```
1. Go to https://github.com/dendronhq/template.publish.github-action/actions
    - make sure deployment succeeds
    - click on "initialize or pull nextjs template"
        - make sure the commit matches the last commit in nextjs-template
1. Go to https://dendronhq.github.io/template.publish.github-action/ and make sure `- version: {RELEASE_VERSION}` shows up

## Pass it Forward Tass
- [ ] automate the verification process