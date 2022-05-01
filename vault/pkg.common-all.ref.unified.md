---
id: nFHvRxRQ2QUkGV0pAAZPf
title: Unified
desc: ""
updated: 1639328718098
created: 1639328184787
---

## Summary

This goes over custom `unified` elements

### DNoteAnchor

- location: [[../packages/common-all/src/types/typesv2.ts]]

#### DNoteHeaderAnchor

<!--
Currently, the type definition is copied from the code.
Moving forward, we need a better way of either embedding docstrings into Dendron or vice versa, have Docstrings be able to pull from markdown.
This is an example of a possible implementation where we create a reference to a nonNote and add a modifier to reference only a particular line number.

Pros:
- Dendron doesn't have to know anything about the syntax of the underlying file

Cons:
- brittle (any line changes will cause this to be invalidated), though this could be a feature not a bug kind of thing to make sure docs are up to date. It doesn't seem worthwile though to have to change this on every refactor, not sure how much of an issue this will be in practice

We also now have a naming issue. [[Note Reference|dendron://dendron.dendron-site/dendron.topic.note-reference]] no longer makes sense if the syntax can reference non-notes. Perhaps we should change it to embeddings?

![[../packages/common-all/src/types/typesv2.ts##L64:L75]]
-->

````ts
/**
 * This represents a markdown header
 * ```md
 * # H1
 * ```
 */
export type DNoteHeaderAnchor = {
  type: "header";
  text?: string; //original text for the anchor
  value: string;
  depth: number;
};
````
