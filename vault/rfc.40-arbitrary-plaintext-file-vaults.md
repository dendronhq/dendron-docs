---
id: EbeoiiDEPdXfXaKsdm8Fj
title: 40 Arbitrary Plaintext File Vaults
desc: ''
updated: 1643236738066
created: 1643234719387
---

## Goals

Enable Dendron to support other plaintext file types besides Dendron Flavored Markdown

- NOTE: These are rough notes for a future feature. We currently have a few internal architectural changes to implement before we can proceed with this. It is published to give folks an idea of possible interface

## Context

Dendron helps **humans** organize, reference, and work with any amount of knowledge and takes a local first approach to knowledge management.
There are countless flavors of local file formats. For the purposes of this RFC, we will restrict the scope to plaintext files such as  `.wiki`, `.org`, `.rst`. 
It would be useful to enable Dendron to also work, either in a full or limited capacity, with these other file formats.

This would allow users to have greater flexibility in choosing what file type they would like to use and also enable them to use existing tools side by side with Dendron.

## Proposal

Introduce a spec to extend vaults with a `type` property that will make it possible to use Dendron with other file types. 

## Details

When a user first initializes a vault, they can choose to initialize a vault of a specific type (eg. a type `text/org` will load a vault capable of handling `.org` files). 
When the vault is created, all notes within said vault will be of the type of the vault. Newly created notes within the vault will also be of that type. 

When implementing a file type for a vault, the vault author does not have to implement all of Dendron's functionality for that particular file type but can gradually introduce support.
The minimal set of functionality that a vault author needs is:

- the ability to read and write a file type
- the ability to lookup a file type

## Implementation

See [[Lifecycle|dendron://dendron.docs/pkg.dendron-engine.arch.lifecycle]] for the current implementation of the Dendron Engine which is used to load notes from the file storage.

The flow goes

```
engine -> store -> file system
```

The engine itself is agnostic about the file types and will call the store to load notes. To support a different file type, the vault author can write their own store with the following minimal interface.

```ts
/**
 * A response that is either valid or an error, but never both
 */
type RespOrError<T> = {
    error: IDendronError;
    data?: never;
  }
| {
    error?: never;
    data: T;
  };
}

export interface IDStore {
  /**
   * Initialize the store. Responsible for:
   * - reading notes from disk
   * - caching
   * 
   @param opts.root: location of the root vault
   */
  init: (opts: {root: string}) => Promise<RespOrError<{
    notes: NotePropsDict;
    schemas: SchemaPropsDict;
    config: StoreConfig;
    vaults: DVault[];
  }>>;

  /**
   * Read a note from disk
   * @param opts.fname: name of note (without extension)
   * @param opts.vault: vault of note
   */
  readNote: (opts: {
    fname: string,
    vault: DVault
  }) => Promise<RespOrError<{note: NoteProps}>>

  /**
   * Write a note to disk
   * @param opts.note: note to write
   * 
   */
  writeNote: (opts: {
    note: NoteProps
  }) => Promise<RespOrError<NoteChangeEntry[]>>
}
```

## Example

TODO

## Tradeoffs

TODO

## Discussion

TODO

