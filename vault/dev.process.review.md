---
id: adc39825-77a6-46cf-9c49-2642fcb4248e
title: Dendron Review Process
desc: ''
updated: 1640801067417
created: 1623430616135
nav_order: 4.1
---

## Summary

This goes into how we do code review (via pull requests)

## Process

### Work in Progress
- if your still iterating on your pull request or if your working on feedback but its not ready yet, put your PR into `draft` mode until it is ready

### Branch Style

All prs should start with `[feat|fix|enhance|]/[{description-of-pr-in-kebab-case}]`
    - `eg. feat/add-thisthing`

### Commit Style

We follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

This means commits have the following format:

```
{category}({scope}): {description}

{additional details}
```

An example commit:

^pjL1YxpWRgtT
``` 
enhance(publish): speed up publishing by 500%

Use cached version of notes to generate metadata instead of building from scratch
```

* To figure out the category for a commit, see [[Assign Category to Task|dendron://dendron.dendron-site/area.product.sop.assign-category-to-task]]
* To figure out the scope, see [[Assign Scope to Feature|dendron://dendron.dendron-site/area.product.sop.assign-scope-to-feature]]

### Pull Request
When submitting a pull request, copy the commit message as a block in front of the PR template. It should look like the following

```
enhance(publish): speed up publishing by 500%

Use cached version of notes to generate metadata instead of building from scratch

# Pull Request Checklist
...
```