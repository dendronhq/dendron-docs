---
id: fFzEJUESpwis1U70AIGhs
title: RFC 40 - Dendron Plugins
desc: ''
updated: 1643876641590
created: 1643873998533
---

## Goals

Dendron has some extension points, such as [[Note Lifecycle Hooks|rfc.9-note-lifecycle-hooks]]
and [[Note Traits|rfc.34-note-type-system]], and [Pods](https://wiki.dendron.so/notes/66727a39-d0a7-449b-a10d-f6c438185d7f/).

However, there is no easy way to manage and share these extensions.
This RFC proposes a standard way for creating, packaging, and distributing
Dendron plugins that can interface with these extension points.

## Context

Hooks and Note Traits, currently just open a javascript file for users to write
their code in. This is not ideal: there is no way for users to import in
libraries or even split their code into multiple files.

Pods do allow
[custom pods](https://wiki.dendron.so/notes/5de219e6-d9b9-4abf-9367-998109cd57cd/),
but the custom pods can't be used in the extension, and sharing one is difficult.

For all of these, they only can be written in javascript and not in languages
that compile to javascript, such as TypeScript or ClojureScript.

## Proposal

### Plugins

Dendron plugins are zip files that contain a `dendron-plugin.json` file, one or more `.js` files, and an optional `readme.md` file.

The `dendron-plugin.json` contains the information about the plugin (plugin metadata), and will look like this:

```json
{
    name: "Example Plugin", // name of the plugin
    description: "Does many useful things", // describes what the plugin does
    version: "1.2.3", // version of the plugin itself
    supportedDendronVersion: "^0.80", // supports Dendron 0.80 or newer
    developers: ["Jane Doe <jane.doe@example.com>"], // one or more developers of this plugin
    license: "MIT", // the license that the plugin is released under
    website: "https://example.com", // optional, a page for the plugin
    source: "https://git.example.com", // optional, the repository for the plugin source code
    provides: {
        hooks: "hook.js", // optional, the name of the file inside the zip that provides hooks
        traits: { // optional, one or more traits provided by this plugin
            "trait-name": "traits.js", // optional, the name of the file inside the zip that provides trait actions
        },
        pods: { // optional, one or more pods provided by this plugin
            "pod-name": "pod.js" // optional, the name of the file inside the zip that provides the pod
        }
    },
}
```

The `readme.md` is a simple markdown file, which should describe the plugin and the features it provides.

`.js` files referenced in the plugin metadata should be included with the same name. These javascript files may be run in the plugin, or the CLI.

### Plugin Templates

Dendron should provide templates for these plugins using
[Yeoman](https://yeoman.io/). The template should be set up to bundle the plugin
code into single js files, and package everything into the plugin zip.

Yeoman supports prompting a user for options, which can be used to get the data
like name and description for the plugin metadata. Yeoman templates can also
accept arguments, which could be used to select whether the plugin will provide
hooks, traits, pods, or a combination of these.

Dendron should provide a template for at least JavaScript and TypeScript.

### Plugin Registry

Dendron should have a registry for plugins. This registry should provide an API
to upload and download plugins, and a user interface to navigate and search
plugins.

For safety, the registry will only read the `dendron-plugin.json` file in each
plugin.

## Details

The registry should take care to avoid [Zip Bombs](https://en.wikipedia.org/wiki/Zip_bomb).

## Example

## Tradeoffs

## Discussion

See the [discusson on Github](https://github.com/dendronhq/dendron/discussions/2347) if you have any suggestions.
