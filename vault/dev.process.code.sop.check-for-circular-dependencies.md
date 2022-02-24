---
id: B8G5IOPwUY0E8PBSJKLCc
title: Check for Circular Dependencies
desc: ''
updated: 1644390181622
created: 1640599879572
---

## Install and run circular dependency check across packages:
```
 npm -g install madge && cd $DENDRON_REPO_ROOT/packages/ && madge --circular --extensions ts .
```

## Run after installation
```
cd $DENDRON_REPO_ROOT/packages/ && madge --circular --extensions ts .
```

## Identifying circular dependencies introduced by a PR
`madge`s output is a bit too unstable to diff against something when trying to
identify what circular dependency was introduced by a PR. Adding some
postprocessing helps in that case:

```sh
git checkout master
madge --circular --extensions ts . | tail -n +2 | sed -r 's/^[0-9]+\) *(.*)$/\1/' | sort > MADGE_BEFORE_PR
git checkout branch-for-PR
madge --circular --extensions ts . | tail -n +2 | sed -r 's/^[0-9]+\) *(.*)$/\1/' | sort > MADGE_AFTER_PR
diff MADGE_BEFORE_PR MADGE_AFTER_PR
```
