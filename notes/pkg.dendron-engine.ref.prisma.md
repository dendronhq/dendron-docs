---
id: vmzd3lbeg22d2c82o39f72a
title: Prisma
desc: ''
updated: 1661189211194
created: 1661186229838
schema: '[[dendron://dendron.docs/ref.module-schema]]'
---

## Summary

This documents how [prisma](https://www.prisma.io/) is integrated with Dendron

## Architecture

- prisma is a dependency of [[pkg.dendron-engine]]
- during the `build` step, we call `buildPrismaClient` 
    ```json
    "buildPrismaClient": "yarn prisma generate && node copyPrismaClient.js"
    ```
    - this will call `prisma generate` which will create the `.node` platform specific bindings and add it to `src/drivers/generated-prisma-client` (this is so typescript can recognize and get types from it)
    - this will also copy over the files into `lib/drivers/generated-prisma-client` (this is so that our javascript code can actuall import the client)
- during bundling, webpack ignores `./generated-prisma-client` via the config
    - > WARNING: we match the string literal `./generated-prisma-client` which means that any imports of `./generated-prisma-client` much match this string **EXACTLY** 
- after bundling, we copy the `generated-prisma-client` package from [[pkg.dendron-engine]] to the `dist` folder where webpack outpus the javascript 
- running `vsce package` zips everything up so that its ready for deployment

## File Layout
```
- src/
    - drivers/
        - generated-prisma-client/
            - index.js
            // native bindings 
            - *.node

```

## Schema
- [[../packages/engine-server/prisma/schema.prisma]]

```prisma
generator client {
  provider      = "prisma-client-js"
  binaryTargets = ["native", "darwin-arm64", "darwin", "windows", "debian-openssl-1.1.x"]
  output        = "./../src/drivers/generated-prisma-client"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model Note {
  id           String               @id
  fname        String?
  title        String?
  vault        DVault               @relation(fields: [dVaultId], references: [id])
  updated      Int?
  created      Int?
  stub         Boolean?
  dVaultId  Int

  @@index([id], map: "idx_notes_id")
}

model DVault {
  id        Int @id @default(autoincrement())
  name      String?   @unique
  fsPath    String
  wsRoot    String
  workspace Workspace @relation(fields: [wsRoot], references: [wsRoot], onDelete: Cascade)
  Note      Note[]

  @@unique([wsRoot, fsPath])
}

model Workspace {
  wsRoot              String   @id @unique
  prismaSchemaVersion Int
  vaults              DVault[]
}
```

## Lookup
- [original pr](https://github.com/dendronhq/dendron/pull/3401)
- the `prisma/schema.prisma` file is responsible for prisma configuration