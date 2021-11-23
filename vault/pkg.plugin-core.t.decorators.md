---
id: ISUChOEBU8rOpkzSIBKcy
title: Decorators
desc: ''
updated: 1637661788599
created: 1637661175480
---

## Uses

- Highlighting good & broken wikilinks (links to missing notes)
- Highlighting aliases
- Highlighting hashtags & usertags
- Task note functionality

## Implementation

The core of the implementation is in `windowDecorator.ts`.

### Optimizations

To optimize performance, we only decorate the region of text visible in the
editor. Anything not visible is not rendered. You can see this in the `const ranges = VSCodeUtils.mergeOverlappingRanges(...`
part of the `updateDecorations` function.

As the user scrolls around, the decorations are triggered again by the `WindowWatcher.triggerUpdateDecorations` which updates decorations 

### Adding a new decorator type

1. Add your decoration type to `DECORATION_TYPE` object at the top.
2. Update the `DECORATOR` map to describe what markdown AST node this decorator is supposed to highlight.
3. Write your `decorate...` function that returns a list

## Reference

- [[blog.2021.2021-09-20-writing-a-visual-studio-code-completion-provider]]

## Common Issues

#### Decorators don't update after a command, why?

Sometimes VSCode updates the document in a way that the `WindowWatcher` doesn't
capture. This should be less likely to happen thanks to some recent fixes, but
if you suspect it's happenning then you can use the `delayedUpdateDecorations` function
to force a decoration update after your function runs.
