---
id: fpk4ow23xfor71hhyrcjulp
title: Node Sqlite3
desc: ''
updated: 1665599145769
created: 1665599145769
---

## Binaries
- see <https://github.com/TryGhost/node-sqlite3>

- > sqlite3 v5+ was **rewritten to use Node-API so prebuilt binaries do not need to be built** for specific Node versions
- > sqlite3 currently builds for both Node-API v3 and v6
- > The prebuilt binaries should be supported on Node v10+
> The module uses node-pre-gyp to download the prebuilt binary for your platform, if it exists. These binaries are hosted on GitHub Releases for sqlite3 versions above 5.0.2, and they are hosted on S3 otherwise. The following targets are currently provided:

- Format: napi-v{napi_build_version}-{platform}-{libc}-{arch}
    * napi-v3-darwin-unknown-x64
    * napi-v3-linux-glibc-arm64
    * napi-v3-linux-glibc-x64
    * napi-v3-linux-musl-arm64
    * napi-v3-linux-musl-x64
    * napi-v3-win32-unknown-ia32
    * napi-v3-win32-unknown-x64

    * napi-v6-darwin-unknown-x64
    * napi-v6-linux-glibc-arm64
    * napi-v6-linux-glibc-x64
    * napi-v6-linux-musl-arm64
    * napi-v6-linux-musl-x64
    * napi-v6-win32-unknown-ia32
    * napi-v6-win32-unknown-x64
