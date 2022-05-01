---
id: 3307c16e-69d9-48cd-b1cc-1dfe88274191
title: Vscode
desc: ''
updated: 1638842798001
created: 1608754262068
---

## Summary

We recommend VSCode for working with Dendron. 


## Concepts

### Tasks
- [vscode docs](https://code.visualstudio.com/docs/editor/tasks)
- workspace specific way of executing scripts

## Debug Pane
Used to launch dendron with access to breakpoints
![](https://foundation-prod-assetspublic53c57cce-8cpvgjldwysl.s3-us-west-2.amazonaws.com/assets/images/dev.vscode-debug.jpg)

## Resources
- [Visual Studio Code Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks)

## Cookbook

Describe common development tasks

### Create a modal message

```ts
vscode.window.showInformationMessage(
    "Welcome",
    {
        modal: true,
        detail: "Would you like to plant a garden?",
    },
    { title: "Hello" }
);
```