---
id: 0uplqwp97dfzelk91ev8fkk
title: Schema Parsing
desc: ''
updated: 1662741452770
created: 1662740338656
---

- [[../packages/plugin-core/src/services/SchemaSyncService.ts]]
```ts
parsedSchema = schemaParser.parse
engineClient.writeSchema
```

### schemaParser

[[../packages/engine-server/src/drivers/file/schemaParser.ts]]

```ts
parseFile {
    SchemaParserV2.parseRaw
}
```

- [[../packages/common-server/src/parser.ts]]
```ts
parseRaw {
    SchemaParserV2.parseSchemaModuleOpts {
    }
}

parseSchemaModuleOpts {
    schemasAll = [
        getSchemasFromImport,
        getSchemasFromFile
    ]

    addConnections
}
```

### engineClient

```ts
writeSchema {
    api.schemaWrite
    refreshSchemas
}
```

- [[../packages/common-all/src/api.ts]]
```ts
schemaWrite(req: SchemaWriteRequest): Promise<WriteSchemaResp> {
return this._makeRequest({
    path: "schema/write",
    method: "post",
    body: req,
});
}
```

### api

[[../packages/api-server/src/routes/schema.ts]]
```ts
router.post(
  "/write",
  asyncHandler(async (req: Request, res: Response) => {
    const resp = await SchemaController.instance().create(
      req.body as SchemaWriteRequest
    );
    res.json(resp);
  })
);
```

[[../packages/api-server/src/modules/schemas/index.ts]]
```ts
  async create(req: SchemaWriteRequest): Promise<WriteSchemaResp> {
    const { ws, schema } = req;
    const engine = await getWSEngine({ ws });
    return engine.writeSchema(schema);
  }
```


### engine

- [[../packages/engine-server/src/enginev2.ts]]
```ts
  async writeSchema(schema: SchemaModuleProps) {
    const out = this.store.writeSchema(schema);
    await this.updateIndex("schema");
    return out;
  }
```

- [[../packages/engine-server/src/drivers/file/storev2.ts]]
```ts
  async writeSchema(schemaModule: SchemaModuleProps) {
    this.schemas[schemaModule.root.id] = schemaModule;
    const vault = schemaModule.vault;
    const vpath = vault2Path({ vault, wsRoot: this.wsRoot });
    await schemaModuleProps2File(schemaModule, vpath, schemaModule.fname);
    return { data: undefined };
  }
```