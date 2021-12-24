---
id: WCZ1LzhM07Om3KFPERk6l
title: 38 - Links to files that are not notes
desc: ''
updated: 1640337533423
created: 1640335071811
---


## Goals

Dendron enables rich linking functionality for notes, but the same is not
extended to files that are not notes. Extended capabilities for linking and
referencing all files would be useful, especially when publishing or working with native workspaces.

## Proposal

- Dendron should allow links to any file in a workspace, not just notes.
- Dendron should allow references to embed content from any file, including text and image files.
- For easier handling of files, Dendron should allow "proxy notes" to stand in for files.

## Details

### Proxy Notes

Proxy notes will be regular notes that contain a special property in their
frontmatter to specify that they are a proxy for a specific file. Alternatively,
this feature may integrate with the [[Note Type System|rfc.34-note-type-system]]
to identify which notes are proxy notes.

Proxy notes should optionally be able to specify the type of file they link to.
Dendron could identify the file types automatically if they are not provided.
These types will be [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
For text files, Dendron could use the subtype to identify if the file is a code
file and use correct highlighting. For example, the MIME type for javascript
code is `text/javascript`, which Dendron could use to set highlighting for
javascript.

### Range based references

Dendron should add support for linking to specific regions of text files. We can
use line numbers or block anchors to achieve this.

Scanning all files to find anchors in them would be difficult and error prone,
since there may be lots of files within the workspace. We should probably only
scan some files (only linked files or only files that have a proxy), or
otherwise rely on dynamically scanning the file for anchors when "Goto Note" is
used.

### Automated Refactoring

If possible, Dendron should recognize the "Rename File" action inside VSCode and
automatically refactor the url field to follow the new name. Dendron should also
provide a refactor action when the url field is selected which moves or renames
the file while also updating the url.

## Example

- A link to a file
    ```
    [[example.js]]
    ```
- Reference (embed) a region from a text file
    ```
    ![[src/example.cpp#L12:#L16]]
    ```
- Reference an image
    ```
    ![[assets/example.jpg]]
    ```
- Reference a file using a proxy note
    ```
    ![[proxy.code.example]]
    ```
    Proxy file contents:
    ```
    ---
    ...
    type: text/javascript
    url:
        local: src/example.jpg
        remote: github.com/example/example/src/
    ---
    ```

## Tradeoffs

Proxy notes allow powerful actions, but could cause unnecessary complexity. We
should weigh the features against the added complexity in terms of usage,
discoverability, and maintainability.

## Discussion
https://github.com/dendronhq/dendron/discussions/1975
