---
id: iq62hX68VeUU0z0FyYmWf
title: Dendron Docs in Workspace
desc: ''
updated: 1639514390963
created: 1639513795145
---

The `dendron` monorepo that contains all the code also contains a Dendron
workspace. This workspace includes vaults for internal developer documentation
(dendron-docs) as well as the external user documentation
(dendron.dendron-site).

You can install Dendron in the same VSCode as the one you are developing the
extension in, you will have access to the documentation as you code.
If you see any links to the documentation inside the code like `// See more [[here]]`,
you can use "Dendron: Goto Note" to navigate to that note and see the documentation.

## Gotchas

- When debugging the development version of Dendron, opening a new workspace in the development version may cause an error message.
    - If that happens, stop debugging and restart.
- The development version can't open the same workspace as one that you have already open.
    - If you have to open that workspace, either close the other instance or make a copy of it and test on the copy.
- If you are on an older VSCode version, this may not work correctly.
    - Make sure you are on the latest VSCode version.
