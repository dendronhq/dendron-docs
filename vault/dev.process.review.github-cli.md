---
id: LIsWLuhz69sKXJVyo2QIp
title: GitHub CLI
desc: ''
updated: 1638488253379
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

## Optional
1. Include any unique testing steps taken in the commit message. This will help future people looking back at this PR understand how to test similar changes.

## Related
[[Review|dendron://dendron.docs/dev.process.review]]