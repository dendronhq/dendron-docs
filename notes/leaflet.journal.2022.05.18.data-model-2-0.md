---
id: fv5ld4y0zzcn2nr05zbh4f0
title: Dendron Data Model 2 0
desc: ''
updated: 1653837025104
created: 1652890304262
documentId: 133blpKIJuWL2nBar3rgQdnQMEOuqs2gCgf9fqluyNUI
revisionId: >-
  AA7UxwO3CVeEDiXcTJV-XUkGvhotr4qsAHg5FenkoMtLh_UvsQzLrNbHGfG_veeScW-_Fjy9NyJCQHVfg3iB6A
uri: >-
  https://docs.google.com/document/d/133blpKIJuWL2nBar3rgQdnQMEOuqs2gCgf9fqluyNUI/edit
parentFolderId: 1A0T3-s7RCHFX5FwuqOyBrD7amV8R3YJq
---

## Summary

This leaflet looks at how we model, store, and expose dendron metadata for both internal and external use

## Goal
- consistent and well-defined interfaces for all Dendron components
- consistent and well-defined responsibilities for all Dendron components
- model and store metadata using a relational database (sqlite)

## Purpose 
- alignment on high-level design proposals & migration plan

## Concepts
- Terms
    - [Prisma Client](https://www.prisma.io/docs/concepts/components/prisma-client): an [ORM](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one) that can map SQL queries into a language specific SDK
    - Low Level API: CRUD operations: basic create/read/update/delete calls. does not require additional business logic and can be expressed through ORM methods
    - High level API: methods that require business logic and is not a simple CRUD call (eg. Rename requires metadata be udpated and contents of notes be changed)
- Components
    - Dendron Store (Non-metadata): translates engine methods to mutating changes on the store 
        - the store currently is the file system and is spread across the following
        - `*.md` files which hold notes
        - `*.schema.yml` files which hold yaml
    - Dendron Store (Metadata): translates engine methods to mutating changes on the store 
        - `dendron.cache.json` file that holds all the metadata
    - Dendron REST API: API that translates methods to `Dendron Engine` calls
    - Dendron Engine: library that is used by downstream clients, exposes dendron methods
    - Dendron REST Engine: abstraction that mimics the `Dendron Engine` interface but translates methods into `Dendron REST API` calls

## Context

Some limitations we're running into with the current architecture:
- business logic is spread between the `Engine` and the `Store` - this results in unwanted side effects and increased complexity
- ad hoc interface for `REST API`, `Engine` and `Store` - we've created new methods as we needed them but similarly, results in unwanted complexity
- too much internal state exposed in `REST API` and `Engine` - we want to offer these as **stable** public endpoints with good DX (developer experience) which is not currently the case
- storing metadata using json blob has fixed costs and limitations - this has worked well for now but does not have any of the safety guarantees or expressivity of a database 
    - some features we want to implement in the near future that would benefit from database-y features:
        - sorting links/backlinks/notes along diff dimensions (updated/viewed/created)
        - syncing metadata across machines using a managed service
        - update metadata atomically (we currently only update on start as writing a huge json blob is expensive and care needs to be taken that file is not corrupted)
        - metadata migration (updating from previous version to new version)
        - query metadata using sql
        - etc


## Proposal 
- Store (metadata): shift from json/in-memory to sqlite and accessed via prisma client
- Store (non-metadata): adopt the vscode file system api and remove all business logic from the store (currently a lot of the renaming logic and overwriting links is in the store instead of the engine)
- REST API: adopt a stripe[^stripe] like API design
- Dendron Engine: adopt similar API as prisma client (`engine.[note|schema|vault].[get|create|delete]`) with the addition of Dendron high level apis 
- Dendron REST Engine: same interface as Dendron Engine, proxies out to `DendronEngine`
- Dendron Engine Light: a version of the Dendron engine that only has low level APIs. calling CRUD methods here can be done without going through the REST api but using the SQL interface directly. the `Dendron Engine` will proxy to `Dendron Engine Light` when performing CRUD operations 

The following goes into specific interface/responsibility/implementation details of each of the components

## Store (metadata)

### Interface
SQL based interface

### Responsibilities
- should expose all metadata related queries

### Implementation
- sqlite file that is part of each vault (replaces `dendron.cache.json` file)
    - further reading [here](https://www.sqlite.org/appfileformat.html)
- use [Prisma](https://www.prisma.io/) as [orm](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one) to manage translation of code to SQL queries

The data models for the various components are described below written using [prisma model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model)). 
Unless otherwise called out, awesome a one to one mapping between the SQL model and the type definitions

- NOTE: for `vaultId`, we are using the `vaultName` property which is required to be unique within a workspace
```ts
model Note {
  id          String  @id @unique
  fname       String  
  updated     DateTime @updatedAt
  created     DateTime
  vaultId     String 
  schemaId    String

  title       String
  desc        String?
  custom      String?
  contentHash String
  anchors     String
  children    Note[]
  parent      Note
  stub        Boolean

  // TODO: in a second phase, we can make links/tags/traits into their own entities with the table for easier querying
  links       String
  tags        String
  traits      String
}
```

```ts
model Schema {
  id          String  @id @unique
  fname       String  
  updated     DateTime @updatedAt
  created     DateTime
  vaultId     String 

  namespace  Boolean?
  pattern    String?
  templateId   String?
  isIdAutoGenerated Boolean?
  title       String
  desc        String?
  links       String
  anchors     String
  children    Schema[]
  parent      Schema
}
```

```ts
model Vault {
  name  String
  visibility Boolean?
  fsPath String
  sync String?
  selfContained Boolean?
  siteUrl String? 
  siteIndex String?
}
```

## Store (non-metadata)

### Interface
- simple interface that can store notes + metadata

### Responsibilities
- CRUD metadata

### Implementation
- use vscode [FileSystemAPI](https://code.visualstudio.com/api/references/vscode-api#FileSystemProvider)
- pros:
    - we'd be able to support dendron on codespaces and virtual environments
- cons:
    - not the same as full file system, for that we might want to explore the FUSE api


## REST API 

The REST api is a collection of:
- low level CRUD methods 
- high level Dendron functionality (eg. rename/refactor)

### Interface
- have a simple API that other clients can access (internal and external)

### Responsibility
- should expose all methods required to build a Dendron client or Dendron Extension

### Implementation
- adapted from stripe[^stripe]
    - NOTE: this doesn't cover all methods, just give a sample of methods

- notes
    - low level
        - create: `POST /notes`
        - get: `GET /notes/:id`
        - update: `POST /notes/:id`
            - NOTE: this should support partial updates by setting `partial: true` (true by default, if set to `false`, overwrite)
        - delete: `DELETE /notes/:id`
        - find: `GET /notes/find`
    - high level
        - bulk: `POST notes/_bulk` > adopt [elasticsearch bulk api](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html)
        - rename: `POST /notes/:id/rename`
- schema
    - ...
- vaults
    - ...

## Engine

### Interface
- simple programmatic interface other clients can access (internal and external **plugins**)

### Responsibilities
- should expose all methods required to build a Dendron client or Dendron Extension

### Implementation
- this should just be a translation of the methods in [[REST API|dendron://admin/user.kevin.journal.2022.05.17.tuning.followup.leaflet#rest-api]]
- recommend adopting prisma convention of `{client}.{object}.{method}`

```ts
engine.note.get
engine.schema.create
...
```

## Dendron REST Engine

### Interface
- same as [[Engine|dendron://admin/leaflet.journal.2022.05.18.data-model-2-0#engine]]

### Responsibility
- provide an engine-compatible interface for working with Dendron

### Implementaiton
- this should be in a separate package that can be consumed without installing `dendron-engine` and all its dependencies

## Dendron Engine Light

### Interface
- low level CRUD methods

### Responsibility
- provide low level interface to Dendron that does not need to go through the API server

### Implementaiton
- this should be in a separate package that can be consumed without installing `dendron-engine` and all its dependencies

## Migration Plan

### Phase 1
In phase I, the sqlite parts of Dendron will run concurrently with the json file based model of Dendron. 

- create [[Dendron Engine Light|dendron://private/leaflet.2022.05.18.data-model-2-0#dendron-engine-light]] in a separate package
- create sql schema, on startup, read from json & sync with sqlite
- hook up DendronEngine light to engine events emitter so that sqlite gets updated when notes change
- use Dendron Engine Light in a standalone project (eg. live reload for nextjs publishin)

### Phase 2
In phase II, the sqlite parts of Dendron will start replacing existing methods

- implement [[Dendron REST Engine|dendron://private/leaflet.2022.05.18.data-model-2-0#dendron-rest-engine]]
- when initializing dendron, load metadata from sqlite instead of json
- replace CLI calls of engine with the new REST engine
- replace plugin calls of engine with new REST Engine

- announce Dendron Engine Light for public consumption (early preview)

### Phase 3
Look into optimizing for sqlite specific features

- extract links as a table with foreign keys into notes
- replace cal
- update refactor methods to update links 
- Instead of creating and passing around [NoteDicts](https://github.com/dendronhq/dendron/blob/master/packages/common-all/src/types/typesv2.ts#L191:L191) in memory, both client and server side, always use the `engine.note.get` and fetch it from sqlite (latency can be singlie second milleseconds)
- announce Dendron Engine Light (beta period)
- annoucne Dendron REST API

## Future Work
- explore (optionally) storing notes in sqlite 

## Sources
[^stripe] [Stripe API](https://www.google.com/search?client=firefox-b-1-d&q=stripe+api)
[^stripe-charge] [Stripe Charge API](https://stripe.com/docs/api/charges)
[^stripe-cust-search]: https://stripe.com/docs/api/customers/search
[^sql-latency]: https://www.sqlite.org/np1queryprob.html

## FAQ

### Will this replace the fuse.js index for lookup?

Not right now. We might replace it in the future but is out of scope for this design

### Where will the database files be stored?

In the root of the workspace (same place where the `dendron.yml` file is located)

### SQL on the Web

prisma currently doesn't support operating browser side either which means we'll need to shim these methods in the browser. something like the following

- sqlite backend
    - https://github.com/jlongster/absurd-sql: index db backed sql
    - [The Session Extension](https://www.sqlite.org/sessionintro.html): sync sqlite
    - https://dbfiddle.uk/?rdbms=sqlite_3.27
    - https://sqlite.org/fiddle/fiddle.js

```ts
class DendronBrowserEngineLight  {
    public note: {
        // proxy prisma methods
        get: () => {
            query("select :noteId from ...")
        }
    }
    ...
}

class DendronDesktopEngineLight  {
    public note: {
        // proxy prisma methods
        get: () => {
            prisma.note.get(...)
        }
    }
    ...
}

```
