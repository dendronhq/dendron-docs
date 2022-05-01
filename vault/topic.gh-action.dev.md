---
id: boiXiUPuPlk4TuwYEPiEh
title: Dev
desc: ""
updated: 1642114829586
created: 1642112515050
---

## Experiment with new workflows

- checkout `chore/{name-of-branch}`
- make updates to [[../.github/workflows/proto.yml]]
- push to remote
- use the [proto action](https://github.com/dendronhq/dendron/actions/workflows/proto.yml) to experiment

## Run windows tests only

The github actions CI test pass for windows can be finicky and there are sometimes issues there that don't show up locally. If you are debugging a github actions windows integration test issue and need to actually run the integration test using github action, we have a specific workflow [here](https://github.com/dendronhq/dendron/blob/master/.github/workflows/ci-windows-test.yml#L1:L1) that triggers when you push to a branch matching the following pattern: `chore/windows-ci-*`

This is an example of a [pull request](https://github.com/dendronhq/dendron/pull/1060) that makes use of this

##
