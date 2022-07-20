---
id: vaayztb0ba5g1v8zz86y3zm
title: Seq Diagram
desc: ''
updated: 1658338795128
created: 1648577675100
---

```mermaid
sequenceDiagram
    participant user
    participant lookupCommand
    participant lookupController
    participant lookupProvider
    participant historyService
    user ->> lookupCommand: user issues command
    Note left of user: 1. cmd.gatherInput()
    rect rgb(150, 170, 150)
      lookupCommand ->> lookupController: creates controller
      lookupCommand ->> lookupProvider: creates provider

      note right of lookupProvider: listens to `lookupProvider` events
      lookupCommand ->> historyService: subscribe("lookupProvider")

      note right of lookupCommand: command passes provider to controller
      lookupCommand ->> lookupController: call controller.show(provider)
      lookupController ->> user: shows quickinput
    end
    user ->> lookupController: chooses a selection

    lookupProvider ->> historyService: notifies `historyService` that a selection has been made 
    historyService ->> lookupCommand: notify("lookupProvider", data)
    lookupCommand ->> lookupCommand: calls command.execute()
```


## Code

- [[../packages/plugin-core/src/commands/NoteLookupCommand.ts]]


```ts
/**
 * Executed after user accepts a quickpick item
 */
execute {
  selected := getSelected
  ...
  notesToShow :=

  notesToShow.map showNote(note)
}
```