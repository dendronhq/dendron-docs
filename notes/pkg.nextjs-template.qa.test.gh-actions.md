---
id: 3j5c59y4c4s1rou4shbhtll
title: Test Templates in GH Action
desc: ''
updated: 1654015367597
created: 1654015138563
---

## Pre-requisites
1. Checkout [[Publish Gh Action Dev|dendron://dendron.docs/ext.github.repo.publish-gh-action-dev]]
    ```
    git clone https://github.com/dendronhq/template.publish.github-action-dev.git
    ```
1. Update CLI to latest version 
    ```sh
    yarn add @dendronhq/dendron-cli@latest
    npx dendron publish init
    ```

## Test actions locally
1. Make changes to workspace to test for new functionality
1. Update nextjs-template
    ```sh
    cd .next
    git checkout --track origin/dev
    yarn
    ```
1. See changes locally
    ```sh
    npx dendron publish dev
    ```

## Test changes in pipeline
1. Make changes to workspace to test for new functionality
1. Make an update to `vault/root.md`, updating `version`, `date` and `hash` (git commit) values 
    ```md
    Last updated: 
    - version: v0.95
    - date: 2022-05-17
    ```
1. Push
    ```
    git push
    ```
1. Manually run the following actions:
    - [update packages](https://github.com/dendronhq/template.publish.github-action-dev/actions/workflows/update-deps.yml)
    - [build dendron site](https://github.com/dendronhq/template.publish.github-action-dev/actions/workflows/publish.yml)
1. Verify page is live and that the changes show up -> https://dendronhq.github.io/template.publish.github-action-dev/

