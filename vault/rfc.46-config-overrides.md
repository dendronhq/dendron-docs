---
id: 06vrcdmil922k3wk8l51hl7
title: 46 Config Overrides
desc: ''
updated: 1649954434437
created: 1649892899228
---

## Goals

Enable local configuration overrides for vaults

## Context

Dendron vaults are often shared in different environments and might be used by multiple people. Users of a vault depend on a common `dendron.yml` for all configuration which means that local customization isn't feasible

## Proposal
Introduce local configuration overrides.  On initialization, dendron will look for a `.dendronrc.yml` file in the following order:
- `.dendronrc.yml` file in the same directory as the vault
- `.dendronrc.yml` file in the user `$HOME` directory

The layout of these yml files will be exactly the same as `dendron.yml` and will be merged with existing options when a matching key is found

## Example

The following shows a vault with a single vault with a local override that adds an additional local vault

### Layout
- File structure
```
- seed
    - README.md
    - dendron.yml
    - .dendronrc.yml
    - notes/
```

- dendron.yml
    - NOTE: `...` is used to denotte ommited configuration details that are not relevant to this example
```yml
...
workspace:
    vaults:
        -
            fsPath: .
            selfContained: true
            name: seed
preview:
    enableFMTitle: true
    ...
```

- .dendronrc.yml
```yml
workspace:
  vaults:
        -
            fsPath: .
            selfContained: true
            name: seed
        -
            fsPath: dependencies/localhost/sprout
            selfContained: true
            name: sprout
preview:
    enableFMTitle: false
```

### Effect

When pulling down the vault `seed`, contributors only see the contents of the seed vault and also a preview with `enableFMTitle: true` behavior.
For this particular user, because they have a local override, they will see an additional vault, `sprout` when they load Dendron.

## Design 

Note that we could have made this interface more ergonomic by assuming vaults should be extended instead of replaced. Presumabliy, this would be the common case and would also support common usecases like adding **global vaults** that get added to **all projects** by putting these vaults in the `$HOME/.dendronrc.yml` directory. 

The reason this RFC proposes not doing this is because of the following:
- introduces additional complexity into the override process (for this proposal, we simply use the lodash [merge](https://lodash.com/docs/4.17.15#merge) method 
- introduces additional complexity into understanding how config overrides would work (if we extend vaults, do we also extend other array like settings like `siteHierarchies`?)
- makes it hard to support the usecase of removing vaults via a local override 
- makes assumptions about underlying use case

If, after launching this feature, we find that extending vaults is what the overwhelming majority of users want, we can revisit this design decision and iterate upon it

## Tradeoffs
- Adds more complexity in exchange for functionality
- Loading optional configuration overrides is a potential vector for security vulnerabilities (eg. attacker writes a custom configuration in the users $HOME directory that executes code). while dendron configuration doesn't posess this ability today, it might in the future through registration of hooks and other functionality. This is something to be mindful of when adding configuration options in the future

## Discussion
<!-- Click the link and create new discussion -->
https://github.com/dendronhq/dendron/discussions/2759
