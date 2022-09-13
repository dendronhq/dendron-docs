---
id: QN46JTSWpEkDkr94TJ85w
title: Submitting Code for Review
desc: ''
updated: 1663102342835
created: 1644173493342
---


## Prerequisites

We recommend using the github cli to work on pull requests (not required but helpful). More details on the setup [[here|dendron://dendron.docs/dev.process.review.github-cli]]

## Steps

### Submitting
1. Open up a pull request 
1. Make sure the title of the pull request mirrors the [[Commit Style|dendron://dendron.docs/dev.process.review#commit-style]]
1. If the PR contains multiple features, break it down in the description below the title (example provided below this section)
1. If you are a team member, you can copy the full checklist from [[Dendron Extended PR Checklist - Markdown|dendron://dendron.docs/dev.process.review.checklist.extended.export]], otherwise, follow the instructions in the pull request template
    ```
    {feat}({structure}): {updated hierarchies, added new note-traits}

    {feat}({structure}): {updated hierarchies}
    {feat}({structure}): {added new note-traits}
    ```
1. After submitting a pull request, make sure that the [[integrations tests|dendron://dendron.docs/dev.process.review.github-actions]] pass
    - > NOTE: if you see failures, see [[github actions troubleshooting|dendron://dendron.docs/dev.process.review.github-actions#troubleshooting]]

### For Team members
1. When an area of the checklist (eg. Instrumentation), does not apply to your PR, you can remove the checkboxes and just add `NA` for not applicable
1. Similarly, if a specific check does not apply, you can use the `[~]` to mark it as such

### Correspondence

A conversation should only be resolved when the comment has been addressed and is reflected in the pull request. 
At that point, the conversation should be resolved by the person that made the pull request. 

### Merging
![[dendron://dendron.docs/dev.process.review.merge-pr#prerequisites:#related]]

## Checklist
![[dendron://dendron.docs/dev.process.review.checklist]]

## Reference

### Commit Style

We follow [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

This means top level commits have the following format:

```
{category}({scope}): {title}

{additional details}
```

An example commit:

^pjL1YxpWRgtT
``` 
enhance(publish): speed up publishing by 500%

Use cached version of notes to generate metadata instead of building from scratch
```

* To figure out the category for a commit, see [[Assign Category to Task|dendron://dendron.docs/dev.process.review.sop.assign-category-to-task]]
* To figure out the scope, see [[Assign Scope to Feature|dendron://dendron.docs/dev.process.review.sop.assign-scope-to-feature]]
* When writing the title, follow the [[Pull Request title|dendron://dendron.docs/dev.process.review#pull-request-title]]
* When applicable, include any unique testing steps taken in the commit message. This will help future people looking back at this PR understand how to test similar changes.


### Pull Request title
- When writing the pull request title, write it from the users point of view. What tangible benefit will the user have after this commit is shipped?
    - bad: talks about work done vs result achieved
    ```
    Update engine to cache notes on read
    ```
    - good: directly talks about benefit to end users
    ```
    Improved performance when using lookup to read notes
    ```
- Write the title in lowercase
    - bad: any word in the title starts with an uppercase letter
    ```
    Improved Performance When Using Lookup to Read Notes
    Improved performance when using lookup to read notes
    ```
    - good: every word in the title starts with a lowercase letter
    ```
    improved performance when using lookup to read notes
    ```
