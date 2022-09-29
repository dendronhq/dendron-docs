---
id: 2g6v0y6lvyl50st961uivu1
title: Completion Provider
desc: ""
updated: 1654300252856
created: 1654300190025
schema: "[[dendron://dendron.docs/ref.module-schema]]"
---

## Summary

- loc: [[../packages/plugin-core/src/features/completionProvider.ts]]

## Lifecycle
- [[../packages/plugin-core/src/_extension.ts]]
```ts
setupLanguageFeatures 
	completionProvider.activate(context)
```

- [[../packages/plugin-core/src/features/completionProvider.ts]]
```ts
activate {
	// tags
	provideCompletionItems: debouncedProvideCompletionItems,
	"[", // for wikilinks and references
      "#", // for hashtags
      "@", // for user tags
      "" // for new levels in the hieirarchy
}

debouncedProvideCompletionItems {
	
}
```

```ts
provideCompletionItems {
	if hashTag {

	}
}
```

```ts
provideCompletionsForTag
```
