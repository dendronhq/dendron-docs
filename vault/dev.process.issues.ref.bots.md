---
id: 4e14f66f-4df2-4414-8e99-f37159de0f61
title: Bots
desc: ''
updated: 1637878392445
created: 1618994983367
---

In order for us to maintain triage hygiene, we've enabled bots in the Dendron repos.

## No Response Bot

Sometimes an issue gets filed that needs more information just to be actionable by our repo maintainers. In this case, please tag the issue with `status.info-needed`. This will notify the no response bot that if we don't hear back from the original filer for a week, it can close the issue with a comment.

Please see the [config file](https://github.com/dendronhq/dendron/blob/master/.github/no-response.yml) for the latest parameters we're using.
