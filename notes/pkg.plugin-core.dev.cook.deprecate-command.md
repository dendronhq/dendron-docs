---
id: k1d9x7i7q0im2yku8pp5y3c
title: Deprecate Command
desc: 'How to deprecate an existing command'
updated: 1653950491031
created: 1653950161553
---

{{fm.desc}}

## Details
- we always want to give at least 1w notice before deprecating commands

## Steps
1. If a command is going to be deprecated, show a warning message when the command is run with a button that shows what has changed
    ```ts
    window
      .showWarningMessage(
        "Heads up that $OLDCOMMAND is being deprecated and will be replaced with the '$NEW_COMMAND' command",
        "See whats changed"
      )
      .then((resp) => {
        if (resp === "See whats changed") {
          VSCodeUtils.openLink(
            "https://wiki.dendron.so/notes/ftohqknticu6bw4cfmzskq6"
          );
        }
      });
    ```
1. Add telemetry when this command is shown. Sepcifically, use `ExtensionEvents.DeprecationNoticeShow` and `ExtensionEvents.DeprecationNoticeAccept` where the `source` is the name of the command
    ```ts
        AnalyticsUtils.track(ExtensionEvents.DeprecationNoticeShow, {
        source: DENDRON_COMMANDS.INSERT_NOTE.key,
        });
        window
        .showWarningMessage(
            "Heads up that InsertNote is being deprecated and will be replaced with the 'Apply Template' command",
            "See whats changed"
        )
        .then((resp) => {
            if (resp === "See whats changed") {
            AnalyticsUtils.track(ExtensionEvents.DeprecationNoticeAccept, {
                source: DENDRON_COMMANDS.INSERT_NOTE.key,
            });
            VSCodeUtils.openLink(
                "https://wiki.dendron.so/notes/ftohqknticu6bw4cfmzskq6"
            );
            }
        });
    ```
1. After the deprecation notice has been deployed, remove the command in a subsequent release
    - Be sure to update [[area.product.sop.ready-to-ship]] with a depreaction notice above the `### Features` section
    ```md
    BREAKING: remove $COMMAND 

    ### Features
    ...
    ``