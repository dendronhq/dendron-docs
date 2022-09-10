---
id: yc6qh7r0awyfje5fjke1wbp
title: Typedoc
desc: ''
updated: 1662833882057
created: 1662831041729
---

#stage.germ

We generated markdown docs from code annotations using [typedoc](https://typedoc.org). 

> NOTE: do to some typescript issues, we don't currently have all docs generated. Docs are currently only available for the following packages:
    ```
    packages/{common-all,common-server,engine-test-utils}
    ```

## Setup

This will pull the latest docs from S3 
    - > NOTE: this might to be reflective of the actual latest notes
```sh
make docs-pull
# this pulls down `generated-api-docs` from S3 and puts it inside the `docs` folder
```

> NOTE: these instructions will make generated docs work inside of the dendron monorepo. If you have the `dendorn.docs` vault checked out somewhere else, you will need to put the `genereated-api-docs` 

```sh
ln -s docs/generated-api-docs ../../workspaces/org-workspace/generated-api-docs
```

## Update from code changes

```sh
make docs-build

# optional: this will sync changes in S3 (NOTE: you'll need the `aws-s3-bot` creds in order to run this action)
make docs-push 
```



## Link to docs

Linking to docs is currently done with markdown links (we're working on moving them to [[dendron.topic.links.file-link]] but this is pending some feature work)

Example of linking to generated docs:

```
[](../../generated-api-docs/modules/dendronhq_common_all.md)
```

![[dendron://dendron.docs/pkg.common-all.api#api-docs,1]]