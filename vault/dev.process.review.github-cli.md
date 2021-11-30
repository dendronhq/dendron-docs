---
id: LIsWLuhz69sKXJVyo2QIp
title: GitHub CLI
desc: ''
updated: 1638313789518
created: 1638313349682
---

## Summary
How to submit a pull request request through the GitHub CLI

## Prerequisites
* Install the CLI through https://github.com/cli/cli#installation

## Process
1. Create meaningful commit message that follows the following convention. 
```
{category}({scope}): {description}
```
2. Run `gh pr create --fill` to create PR request with information from commit message. For other parameters, see https://cli.github.com/manual/gh_pr_create 

## Related
[[Review|dendron://dendron.docs/dev.process.review]]