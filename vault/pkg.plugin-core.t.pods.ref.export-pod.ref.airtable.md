---
id: dq8l4Wx9DgRsKyWNsPQlD
title: Airtable
desc: ""
updated: 1641002245131
created: 1640375224141
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Lifecycle

```ts
gatherInputs {
	if !apiKey ...
	...

	if !isRunnableAirtableV2PodConfig ...
}
```

- [[../packages/pods-core/src/v2/pods/export/AirtableExportPodV2.ts]]

```ts
exportNotes {
	resp = getPayloadForNotes

}

getPayloadForNotes {
	notesToSrcFieldMap
}

notesToSrcFieldMap {
	notes.map n => {
		...
		resp = handleSrcField(note)

	}

}
```

- [[../packages/plugin-core/src/commands/pods/AirtableExportPodCommand.ts]]

```
onExportComplete {

}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
