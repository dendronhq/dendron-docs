---
id: 5kpjkloocgl62k5iohd16tn
title: Vault Path
desc: ''
updated: 1653630333849
created: 1653629903461
---

There are 2 ways to get the file system path to a vault.

1. If you are looking to read a note or schema file, or an asset file inside of
   the vault, you'll want to use `VaultUtils.getRelPath`. This gives you the
   path to the folder where the note files and assets are located.
1. If you are looking to add a meta file into the vault, access the `.git`
   inside of the vault etc., then you should use
   `VaultUtils.getRelVaultRootPath`. This gives you the path to the root of the
   vault.

## What's the difference?

Both options are identical for vaults other than self contained vaults. The
difference is for self contained vaults, where the notes are stored in a
subdirectory inside the vault.

```
.                 <-- getRelVaultRootPath
├── dendron.code-workspace
├── dendron.yml
└── notes          <-- getRelPath
   ├── archive.install.md
   └── assets
      └── images
         └── logo.png
```
