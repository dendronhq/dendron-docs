---
id: adc39825-77a6-46cf-9c49-2642fcb4248e
title: Committing Code
desc: ''
updated: 1656472144903
created: 1623430616135
config:
  global:
    enableChildLinks: false
nav_order: 4.1
---

## Summary

This goes into how we commit code

## Steps

### Starting work

To start work on a new feature, clone the dendron repo and checkout a new branch. This should be in the format of `{category}/{feature-description}`

See [[Assign Category to Task|dendron://dendron.docs/dev.process.review.sop.assign-category-to-task]] for picking out the category

### Work in Progress
- if your still iterating on your pull request or if your working on feedback but its not ready yet, put your PR into `draft` mode until it is ready

### Branch Style

All prs should start with `[feat|fix|enhance|chore]/[{description-of-pr-in-kebab-case}]`
    - `eg. feat/add-thisthing`

## Reference

### git hooks

We have pre-commit and pre-push hooks, which we use to keep the codebase
consistent. The pre-commit hook will make sure that your code is correctly
formatted, and the pre-push hook will make sure you don't accidentally push in
leftover debugging code.

The pre-commit hook has to **stash and pop** any unstaged changes you have in
the workspace. If something breaks during this process and your changes are
lost, check the stash using `git stash list` to find your changes (should be marked `pre-linting-stash`),
then use `git stash pop stash@{x}` to recover the correct one.

## Cook

### Addressing open issues

Github has automation that will automatically close issues if you mention certain keywords like `fix {issueUrl}` in the commit message. 

We want to avoid this so use the **related** keyword when talking about issues

```
Related to {issueUrl}
```

Closing the issue is handled in [[After a release has shipped|dendron://dendron.docs/dev.process.close-loop#after-a-release-has-shipped]]

### Adding new dependencies

If you add a new dependency inside a PR, please call it out using teh following format: `- DEPENDENCY_UPDATE: {dep_name} [added|removed|updated] {pkg}`

Add the following text after the PR title, at the start of the PR description:
```md
- DEPENDENCY_UPDATE: @dendronhq/plugin-core add foo@^1.1.1

{additional details: if adding or removing something, why?}
```
