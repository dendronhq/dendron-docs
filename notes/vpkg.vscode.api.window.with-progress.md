---
id: 8r9mxcd8s1helcaff3rvkru
title: With Progress
desc: ''
updated: 1654537620787
created: 1654537592563
---

```
withProgress<R>(options: ProgressOptions, task: (progress: Progress<{increment: number, message: string}>, token: CancellationToken) => Thenable<R>): Thenable<R>
```

Show progress in the editor. Progress is shown while running the given callback and while the promise it returned isn't resolved nor rejected. The location at which progress should show (and other details) is defined via the passed ProgressOptions.
