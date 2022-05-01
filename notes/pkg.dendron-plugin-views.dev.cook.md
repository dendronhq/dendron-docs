---
id: naGvfhYGH7N0BEmcqc7ET
title: Cook
desc: ""
updated: 1644372007396
created: 1636233555730
---


### Changing the theme

By default, plugin-views starts with the light theme. You can change this by parssing a `THEME` env variable when starting

```sh
THEME=dark yarn start
```

### Simulate Change Activate Editor in Browser Mode

- TIP: You can change the id to any id inside of [[dev.ref.test-workspace]] to see how different views function

```ts
id = "9eae08fb-5e3f-4a7e-a989-3f206825d490";
window.postMessage({
  type: "onDidChangeActiveTextEditor",
  data: { note: { id } },
  source: "vscode",
});
```
