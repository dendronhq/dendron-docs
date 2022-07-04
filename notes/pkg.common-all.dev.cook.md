---
id: 1jIkH5R6W3pM8IYR2gOji
title: Cookbook
desc: ''
updated: 1655171115694
created: 1634737110155
---

## Configuration

### Add New Config

![[Add New Config|dendron://dendron.docs/pkg.common-all.dev.cook.add-new-config]]

### Deprecating Existing Config

![[dendron://dendron.docs/pkg.common-all.dev.cook.remove-existing-config]]

### Accessing config values from `dendron.yml`

`ConfigUtils` is a collection of helpers that let you get or set config values from `dendron.yml`.
Prefer using the getters and setters defined here over directly accessing from the config object.

e.g.)

```js
  const config = engine.config;
  // bad
  const noteLookupConfig = config.commands.lookup.note;
  // good
  const noteLookupConfig = ConfigUtils.getLookup(config).note;

  ...
  // bad
  config.commands.lookup.note = someProcessedNoteConfig;
  // good
  ConfigUtils.setNoteLookupProps(config, "confirmVaultOnCreate", true);
```

The advantage over directly accessing

- All helpers defined in `ConfigUtils` recursively account for missing values and replace them with the default values defined for the key you are accessing / modifying.

```js
static getProp<K extends keyof StrictConfigV3>(
  config: IntermediateDendronConfig,
  key: K
): StrictConfigV3[K] {
  const defaultConfig = ConfigUtils.genDefaultConfig();
  const configWithDefaults = _.defaultsDeep(config, defaultConfig);
  return configWithDefaults[key];
}
```

- It will also narrow down the types for you.
  - This is especially important during active config migration because we can avoid unnecessary type assertions.

Some commonly used getters and setters are defined in `ConfigUtils`. Use the best of your knowledge to use existing helpers or define a new one in a similar fashion if it doesn't exist.

### Updating Default for Existing Config Values

When updating the defaults, we need to

1. Modify [[genDefaultConfig|/../packages/common-all/src/utils.ts]] and update the default value
1. Update tests and json schema
   ![[dendron://dendron.docs/pkg.common-all.dev.cook#modifying-config,1]]

## NoteProps

- try having plain objects on the note props

### Adding a new frontmatter property

In VSCode, you can use the "Goto symbol in workspace" command and type the function name or class name to find the following locations.

1. In `DNodeProps`, add the prop to the type. Unless the prop has to be mandatory for all notes, it should be optional (`prop?: type`). Most props don't have to be mandatory!
2. In `DNodeUtils.create` add prop name to `optionalProps`.
3. In `NoteUtils.serializeMeta` add prop name to `builtinProps`.
4. In `DNodeUtils.getCustomProps` add prop name to `blacklist`.
5. In `SchemaUtils.TEMPLATE_COPY_PROPS` add prop name if the prop should be copied over when a template note is used.
6. **If and only if** it's a prop that's required (mandatory) for all notes, in `foundation.ts` add prop name to `REQUIRED_DNODEPROPS`. Again, most props don't have to be mandatory.
