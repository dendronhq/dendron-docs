---
id: XcmPJ0J7j6t2Ne49zx1YT
title: Menu
desc: ""
updated: 1640289949699
created: 1640216047036
---

<!--
See [[Ref|dendron://dendron.docs/ref.module-schema#ref]]
-->

## Summary

<!-- 2-3 sentences describing what this module does-->

## Lifecycle

- [[../packages/nextjs-template/components/DendronTreeMenu.tsx]]

```tsx
dendronRouter, props :=
noteActiveId := prios.noteIndex || dendronRouter.query.id

useEffect {
	activeNoteIds = getAllParents(noteActiveId)
	setActiveNoteIds activeNoteIds
}

if  !props
	return DendronSpinner


domains := props
roots := domains.map ...

roots := domainn
return <MenuView roots/>
```

```tsx
MenuView {

	return roots.map menu => {
		return createMenu menu
	}
}

createMenu {

}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
