---
id: 849ee8ee-05a5-47bf-b44d-d7c257117bc4
title: Summary
desc: ''
updated: 1637874897261
created: 1598652399447
stub: false
---
# Initializing the Engine

## Summary

## Flow

### Initialize the engine

- loc: engine-server/engine.ts
- desc: initial query to index all notes 

```ts
init {
  query("**/*", "schema", {
  });

  query("**/*", "note", {
  });
}

```

### Query - Store

- loc: engine-server/store.ts
  - FileStore.query
- desc: store is swappable. currently, we only support `FileStore`

```ts
  if (@isQueryAll(queryString)) {
      noteProps = @_getNoteAll() {
          allFiles = getAllFiles({
              root: this.opts.root,
              include: ["*.md"]
          })
          return @files2Notes(allfiles) {
              fp = new FileParser({ errorOnEmpty: false })
              data = fp.parse(allFiles);
              return data.map(n => n.toRawProps());
          }
      }
      const data = new NodeBuilder().buildNoteFromProps(noteProps);
  }
```

#### Parse Files

- loc: engine-server/parser.ts
- details: read files

```ts
parse(data: string[]): Note[] {
    fileMetaDict: FileMetaDict = getFileMeta(data) {
      metaDict: FileMetaDict = {};
      _.forEach(fpaths, fpath => {
        { name } = path.parse(fpath);
        lvl = name.split(".").length;
        if (!_.has(metaDict, lvl)) {
          metaDict[lvl] = [];
        }
        metaDict[lvl].push({ prefix: name, fpath });
      });
      return metaDict;
    }
    ...
    root = fileMetaDict[1].find(n => n.fpath === "root.md") as FileMeta;
    const { node: rootNode } = this.toNode(root, [], store, {
      isRoot: true,
      errorOnBadParse: this.opts.errorOnBadParse
    }) as { node: Note };
    ...
    while (_.has(fileMetaDict, lvl)) {
        ...
        const { node, missing } = this.toNode(ent, prevNodes, store, {})
    }
}

toNode {
    noteProps = mdFile2NodeProps(path.join(store.opts.root, ent.fpath)) {
        const { data, content: body } = (matter.read(fpath, {}) as unknown) as {
        const { name: fname } = path.parse(fpath);
        const dataProps = DNodeRaw.createProps({ ...data, fname, body });
    }
    // missing
    if (!parent && !opts.isRoot) {
      missing = parentPath;
      if (opts.errorOnEmpty) {
        throw new Error(JSON.stringify(errorMsg));
      }
    }
    const note = new Note({ ...noteProps, parent, children: [] });
}
```

#### Build Nodes

- loc: src/node.ts

```ts
buildNoteFromProps(nodes) {
    // initialize root
    out = []
    root, childrenIds = getRoot nodes {
        if root not in nodes
            throw DendronError // this gets caught in the engine
        return root
    }
    out.push root
    parentNodes = [root]
    nodeIds = childrenIds

    while nodeIds {
      nodeIds.map {
        nodeProps = nodes.find it.id
        @toNote nodeProps, parentNodes
      }
    }
}

toNote {
  note = new Note(..., children: [], parent: null)
  parent = find(parents)
  parent.addChild note
  ret
}
```

# New Node

## Flow

- loc: engine-server/engine.ts

```ts
write(node){
  @store.write
  @updateNodes node
}
```

# Updating a Node

## Summary

## Flow

- loc: engine-server/engine.ts

```ts
updateNodes(nodes) {
  if node.type == 'schema' {
    ...
  } else {
    @_updateNote(nodes)
  }
}

_updateNote(nodes, opts) {
  addParent(nodes) if !opts.noAddParent
  @refreshNodes
}

```

# Deleting a Node

## Summary

## Flow

- loc: engine-server/engine.ts

```ts
delete(idOrFname, mode, opts) {
  if (mode == 'note') {
    noteToDelete := @notes
  } else {
    // schemas
    ...
  }

  // delete from store
  if !opts.metaOnly {
    @store.delete(noteToDelete)
  }

  // remove from index
  @deleteFromNodes noteToDelete

  // if node has children , keep it in index as a stub
  if noteToDelete.children {
    noteToDelete.stub = true
    @refreshNotes noteToDelete
  } else {
    // remove node from parent 
    noteToDelete.parent.children.reject { noteToDelete } if noteToDelete.parent
  }



}
```

# Parsing note references

- [[dendron.topic.note-reference]]

## Summary

## Flow

- engine-server/src/topics/markdown/plugins/dendronRefsPlugin.ts
- data:
  - [[replaceRefs|dendron.scratch.2020.09.12-091632]]

```ts
dendronRefsPlugin({..., replaceRefs}) {
    // match note ref
    match := /^\(\((?<ref>[^)]+)\)\)/.match(text)

    stringify(link) := {
      body = read(join(root, link.name + ".md))
      bodyAST = getProcessor.parse(body)

      refRange = calculateRefRange(body, link)
      bodyAST.children = bodyAST.children.slice(refRange)
      out = getProcessor().stringify(bodyAST);
      ...
      if (renderWithOutline) {
        link = getProcessor()
          .use(replaceRef, {
            wikiLink2Html: true
          })
          .process(link)
        return doRenderWithOutline(link, ...)
      } 
      return out
    }

}
```

- engine-server/src/topics/markdown/plugins/replaceRefs.ts

```
replaceRefs(node) {
  if node.type == 'wikilink' {

  }
}

```

## Related

- engine-server/src/utils.ts

```ts
parseDendronRef {
  ...
}
```

# Reference

## Refresh Node

- loc: engine-server/src/engine.ts

```ts
refreshNodes(nodes) {
  ...
  type = nodes[0].type
  if type == schema {

  } else {
    ...
  }
  @updateLocalCollection nodes {
    @schemaFuse.setCollection nodes
  }
  @store.updateNodes nodes
}

```

