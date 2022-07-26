---
id: gI6BwB1PJOfe9nMQQAN7a
title: Dev Env
desc: ''
updated: 1658849540384
created: 1642729891501
---

## Summary

How to setup your developer environment for Dendron

## Steps

### Download VSCode

- while its possible to use other editors, we **strongly** recommend that you use VSCode for the built-in integration and access to dendron docs within the workspace

### Install Dependencies
Before you begin, you need to make sure to have the following SDKs and tools:

- Node.js >= 14
  - We recommend using a version in [Active LTS](https://nodejs.org/en/about/releases/)
- yarn
  - `npm install -g yarn`
- lerna
  - `npm install -g lerna`
- [vscode](https://code.visualstudio.com/) or [vscodium](https://vscodium.com/)
  - while this is not required, it's highly recommended as the Dendron repo comes with documentation that is managed using Dendron

### Setup Dendron

- NOTE: this is optional and only applicable if you're using VSCode

- Download Dendron by following instructions [here](https://wiki.dendron.so/notes/678c77d9-ef2c-4537-97b5-64556d6337f1.html)
- After you have gone through the tutorial, proceed, to next steps
- When you clone the repo, developer docs will be available inside of your repo workspace

### Setup ESLint

All packages in the repo use a standard base configuration found at [.eslintrc.js](.eslintrc.js).

If you are using vscode, download and enable the [eslint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
If you are using another editor, make sure you have eslint enabled.

### Setup Git

Make sure your git client is configured with a stable username and address

```sh
git config --global user.name "Johny Apple"
git config --global user.email "johny@dendron.so
```