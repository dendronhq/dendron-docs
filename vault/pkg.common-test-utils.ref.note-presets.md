---
id: spk4qv16x830d08cb2p63yr
title: Note Presets
desc: ""
updated: 1650494150470
created: 1648918457309
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

- [[../packages/common-test-utils/src/presets/notes.ts]]

### NOTE_SIMPLE

```ts
CreateNoteFactory({ fname: "foo", body: "foo body" });
```

### NOTE_SIMPLE_CHILD

```ts
NOTE_SIMPLE_CHILD: CreateNoteFactory({
	fname: "foo.ch1",
	body: "foo.ch1 body",
}),
```

### NOTE_SIMPLE_OTHER

```
CreateNoteFactory({ fname: "bar", body: "bar body" })
```

### NOTE_WITH_TARGET

```ts
NOTE_WITH_TARGET: CreateNoteFactory({ fname: "alpha", body: "[[beta]]" }),
```

### NOTE_WITH_ANCHOR_LINK

```ts
NOTE_WITH_ANCHOR_LINK: CreateNoteFactory({
	fname: "beta",
	body: `[[alpha#h3]]`,
}),
```

### NOTE_WITH_WIKILINK_SIMPLE

```ts
NOTE_WITH_WIKILINK_SIMPLE: CreateNoteFactory({
	fname: "simple-wikilink",
	body: "[[simple-wikilink.one]]",
}),
```

### NOTE_WITH_NOTE_REF_SIMPLE

- [[../packages/common-test-utils/src/presets/notes.ts#^ar2re45pswxu]]

```ts
NOTE_WITH_NOTE_REF_SIMPLE: CreateNoteFactory({
	fname: "simple-note-ref",
	body: "![[simple-note-ref.one]]",
}),
```

### NOTE_WITH_NOTE_REF_SIMPLE_TARGET

- [[../packages/common-test-utils/src/presets/notes.ts#^zp9pa2jancj0]]

```ts
NOTE_WITH_NOTE_REF_SIMPLE_TARGET: CreateNoteFactory({
	fname: "simple-note-ref.one",
	body: ["# Header ", "body text"].join("\n"),
}),
```

### NOTE_WITH_FM_TAG

```ts
NOTE_WITH_FM_TAG: CreateNoteFactory({
	fname: "fm-tag",
	props: {
		tags: "foo",
	},
	body: "",
}),
```
