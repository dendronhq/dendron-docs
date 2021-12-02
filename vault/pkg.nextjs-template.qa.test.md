---
id: IyBXeRrpHqUKg8OL5BQ4n
title: Test
desc: ''
updated: 1638487895418
created: 1638063942917
---

## Manual Testing

### Using the Test Workspace

You can use the [[Test Workspace|dev.ref.test-workspace]] to check publishing changes.

- NOTE: we use `--attach` to speed up the export if a workspace is active. otherwise, drop the flag to initiliaze via the CLI
```sh
export DENDRON_REPO_ROOT={path/to/dendron/repo}
cd $DENDRON_REPO_ROOT/test-workspace
dendron exportPod --podId dendron.nextjs --config="dest=$DENDRON_REPO_ROOT/packages/nextjs-template" --attach
```

### Using your own workspace

Same instructions as above. Change into your own workspace instead of `$DENDRON_REPO_ROOT/test-workspace`

### Using amplify

To test nextjs-template with the contents of dendron, push to the `dev` branch of nextjs-template. This is automatically consumed by the
[[Dev Wiki Endpoint|dendron://dendron.docs/ref.dev-wiki-endpoint]]. To trigger a build, you can either push something to dev branch or by running the following command:

```sh
curl -X POST -d {} "https://webhooks.amplify.us-east-1.amazonaws.com/prod/webhooks?id=e30aff97-0336-46b8-983e-5262efea7098&token=KbS2zuBWI5CWeDmSttgpaR0zjn7RqHpdF7dP9yGqc&operation=startbuild" -H "Content-Type:application/json"
```
