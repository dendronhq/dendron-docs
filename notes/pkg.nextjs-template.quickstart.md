---
id: PgwAXFfotfgpFVqHQRlBl
title: Nextjs Template Quickstart
desc: |
  Development related
updated: 1657672395883
created: 1628376960868
---

## Prerequisites
- [[Build monorepo and plugin|dendron://dendron.docs/pkg.plugin-core.quickstart]]

## Run

<!-- How to run the program from the current source code -->

1. Navigate to the nextjs-template

```
cd {path-to-template}/nextjs-template
```

1. Install all packages

- NOTE: if you are building nextjs-template inside dendron monorepo, then you can skip this step

```
yarn
```

1. To run nextjs using sample data, run the following ^gDKNFAxVBU4u

```
curl -LO https://artifacts-prod-artifactb7980f61-19orqnnuurvwy.s3.us-west-2.amazonaws.com/artifacts/dendron-site.zip
unzip dendron-site.zip
```

1. Run the nextj sapp

```sh
yarn dev
```

1. Navigate to your browser. For example http://localhost:3000/notes/6322a2de-34fd-4c93-bcbe-d71c30e5f2b6 to go to a particular note
1. Build your notes for static hosting

```sh
yarn export
```

1. Preview your statically hosted notes

```sh
cd out
python -m SimpleHTTPServer 8000
# open localhost:8000 to see your notes
```

## Run with your own data

1. Navigate to your workspace root
1. Run the following command.

```sh
dendron exportPod --podId dendron.nextjs --config "dest={path/to/nextjs-template}"
```

Your notes/html files will be copied over to {path-to-template}/nextjs-template/data/notes/
