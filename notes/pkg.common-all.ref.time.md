---
id: i9TocDF277uJdtguFploC
title: Time
desc: ''
updated: 1639702920979
created: 1639702920979
---

## Time

This is a static class exported by common-all. It has the `DateTime` object which is exported by [luxon](https://moment.github.io/luxon/#/?id=luxon)

- NOTE: we are using luxon 1, not luxon 2


```ts
import { DateTime } from "luxon";

export class Time {
  static now() {
    return DateTime.local();
  }
  static DateTime = DateTime;
}
```
