---
id: iplO7IwCeT6qN6DxgTmP5
title: Commands
desc: ""
updated: 1653517594067
created: 1630020205246
---

## Summary

Dendron Plugin Command Execution

## Lifecycle

### Initialization

```ts
run(args) {
	sanityCheckResp = @sanityCheck
	if sanityCheckResp {
		// throw error
	}

	inputs = gatherInputs(args)
	if !inputs return

	opts = @enrichInputs(inputs)
	if !opts return

	@execute(merge(opts, args))
	@showResponse(resp)
}
```

### On Error

```ts
catch(error) {
	// this prints to stdout
	Logger.error(error)
}
```

## Exceptions

Any uncaught exceptions in a child command will be caught and logged by `BaseCommand`

## Lookup

- [[BaseCommand|../packages/plugin-core/src/commands/base.ts]]
