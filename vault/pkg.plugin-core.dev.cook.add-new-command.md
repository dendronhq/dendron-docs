---
id: ajxrv6ojg1hlx1y31ajrkte
title: Add New Command
desc: ''
updated: 1651426162041
created: 1651425940926
---


This goes over adding a new command with lookup. To see an example, see this [command](https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/commands/InsertNoteLink.ts) and this commit: `cc8a02b4`.

```mermaid
sequenceDiagram
    participant user
    participant lookupCommand
    participant lookupController
    participant lookupProvider
    user ->> lookupCommand: user issues command
    Note left of user: 1. cmd.gatherInput()
    rect rgb(150, 170, 150)
      lookupCommand ->> lookupController: creates controller
      lookupCommand ->> lookupProvider: creates provider
      lookupCommand ->> lookupController: call show(provider)
      lookupCommand ->> lookupProvider: subscribe to provider
      lookupController ->> user: shows quickinput
    end
    user ->> user: chooses a selection
    lookupProvider ->> lookupCommand: notify(selection)
    lookupCommand ->> lookupCommand: calls command.execute()
```

1. Add command to `DENDRON_COMMANDS` under `plugin-core/src/constants.ts`
    - NOTE: if you want to add a keyboard binding, see [[Keyboard Shortcut|dendron://dendron.docs/pkg.plugin-core.dev.cook.add-new-command#keyboard-shortcut]]
2. Open the command prompt, enter `Run Task`, and run `gen:config`
   - this will add the command to `package.json`
3. Create the new command in `plugin-core/src/commands/{COMMAND_NAME}.ts`
   - you can copy the contents of an existing command (eg. `src/commands/ShowHelp.ts`) to help you get started
4. Write tests
   - tests are in `plugin-core/src/test/suite-integ/{COMMAND}`
   - testing instructions are [[here|dev.process.qa]]
5. Write command logic
6. If it makes sense, add a keyboard shortcut for the command. Make sure it doesn't conflict with an generic VSCode command or existing Dendron commands. You can detect existing keybindings by using the guide [here](https://code.visualstudio.com/docs/getstarted/keybindings#_detecting-keybinding-conflicts)
7. Add command to `src/commands/index.ts`
8. If your command requires an active workspace to function, make sure that `requireActiveWorkspace = true`
   - eg: see [[../packages/plugin-core/src/commands/CreateDailyJournal.ts]]
   ```ts
   export class CreateDailyJournalCommand extends CreateNoteWithTraitCommand {
    // THIS needs to be set to tell Dendron to NOT activate this command unless dendron is active
    static requireActiveWorkspace: boolean = true;
    ...
   }
   ```
9. If your command needs to manually clean up resources, make sure that any places where your command is constructed that it gets properly cleaned up when out of scope.  An example of this is with the `NoteLookupCommand`. The preferred way to do this is by implementing the vscode `Disposable` interface (although `NoteLookupCommand` doesn't do this yet).
10. Submit pull request

Conventions:

- if your command involves opening a note, also return it in the `CommandOutput` signature. this makes it easy to compose the command as well as test it

### Gotchas

If the command needs to accept input objects from VSCode, for example [[ShowPreview|../packages/plugin-core/src/commands/ShowPreview.ts]], then base your command on [[InputArgCommand|../packages/plugin-core/src/commands/base.ts#L168]] and avoid adding `gatherInputs` and `enrichInputs`. Otherwise Dendron can convert the input object into a plain javascript object.

### Keyboard Shortcut

1. To add a keyboard binding to a command, add the `keybindings` property to the command. 
```ts
keybindings: {
    key: "ctrl+shift+i",
    mac: "cmd+shift+i",
    // use the `when` clause to enable the command only when the dendron plugin is active
    // generally advisable for most commands
    when: DendronContext.PLUGIN_ACTIVE,
}
```

Example: https://github.com/dendronhq/dendron/blob/master/packages/plugin-core/src/constants.ts#L267:L267