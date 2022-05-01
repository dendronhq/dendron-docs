---
id: XTcoQWTjIUzPWMvY32YvT
title: Refresh
desc: ""
updated: 1639901711480
created: 1639875522970
---

## Summary

Update note metadata. Happens whenever notes change (eg. write/delete/edit)

## Lifecycle

<!-- Startup process for this module -->

### Init

- [[../packages/engine-server/src/enginev2.ts#L600]]

```ts
refreshNotesV2(noteChangeEntries) {
	noteChangeEntries.forEach ent => {
			id, note, status := ent
			switch status {
				case "delete":
					delete ...
				else {
					refreshNoteLinksAndAnchors
					@notes[ent] = note
				}
			}

	}

}
```

- [[../packages/engine-server/src/utils.ts]]

```ts
refreshNoteLinksAndAnchors(note) {
	// get all links in note
	links = findLinks(note)
	linkCandidates := findLinkCandidates(note)
	anchors = findAnchors

	note.links = links
	note.anchors = anchors
}
```

## Reference

<!-- Anything else that is useful to lookup -->

## Cook

<!-- How to do common operations with this code -->

## Past Tasks

<!-- Link to past pull requests and commits on this given module  -->
