---
id: nxu3wpej92v6i0utwb1m2s4
title: Snapshot Testing
desc: ""
updated: 1662771605580
created: 1654709227525
---

## Summary

Snapshot testing lets us assert that certain outputs of a piece of code is staying the same after changes. This is a very powerful tool because it lets us easily test for outputs that we know that will (should) be constant.

That being said, snapshot tests should not be considered part of unit testing, or testing for a certain functional aspect of code. It also shouldn't replace end-to-end testing, since **snapshot tests are only verifying the output, and not the behavior**. The output can look the same at the end but could have gotten there in a way that you did not intend to.

While snapshot tests provides us with some great power, it has drawbacks when we aren't mindful about using them.

This note will go over **when to write snapshot tests, some common pitfalls, and how to avoid them**.

## When to test snapshots

Snapshot tests verify that some codes' _output_ is exactly the same as before.

For Dendron, this is very useful when verifying, for example, the integrity of the `unified` processor outputs.

For this case, snapshots can act as a canary for any unintended changes that we may not notice just by testing part of the code, since snapshots will verify _everything_, down to the whitespace level, that the output stays the same.

It is also advisable to **test snapshots if the output we want to test for is very big**. For example, **generated HTML** code can be very long and not readable (and writable) at all for the developer and would not be useful to be part of the test code.

## When not to test snapshots

When we are testing for behavior of a piece of code, the output of a method may not tell us much about what actually happened. In this case, it is better to add explicit unit tests for the expected results that we truly care about.

There are ways of snapshot testing dynamic outputs (see [asymmetric property matchers](https://jestjs.io/docs/snapshot-testing#property-matchers)), but unless it's absolutely impossible to unit test these, it would be better to write explicit unit tests.

## Pitfalls

### Hard to understand what went wrong

Snapshot test failures don't tell us **why it failed**. It simply tells us that a certain output that we are checking for has been altered. With many moving parts involved, it makes debugging hard / take longer without knowing the full picture.

### Easy to update, hard to verify

Currently, most of our **snapshot tests coexist with some specific unit test that verifies that the behavior of a piece of code is correct**.

Often times, when working on a change, we will run into a giant list of failing snapshot tests.

- If the accompanying unit tests also fail, we are sure that something went wrong and have better judgement of what needs to be fixed.
- Otherwise, it is very easy to get a false sense of security that the snapshots were meant to be changed (because the surrounding unit tests were fine). This may not always be the case, and the only way to find out is to look into each of the failing snapshot tests and verify that they indeed should change and should be updated.

### Easy to write

Snapshot tests are very easy to write, and this leads to having a lot of them. When targeting a very small portion of the code base this may not be a big issue, but if a sizeable change has been made to the codebase that touches on various business logics that rely on snapshot testing to verify their output, it quickly becomes unwieldy to maintain them.

## How to avoid them

### Give ample context of _why_ we are testing the snapshot

When a developer works on a piece of code and the change fails a snapshot test, unless they wrote the test code themselves, it is very hard to figure out why it was used there.

When adding a snapshot test, consider writing comments about

1. what kind of output it is testing for,
1. why it should be tested as a snapshot,
1. and what it means for this snapshot to change.

- e.g.) modules X, Y, and Z may affect this snapshot. If it fails, make sure your changes in them are changing the output in an intended way.

### If you are having a hard time explaining, you might not want to test it as a snapshot

As a corollary to [[Give ample context of why we are testing the snapshot|dendron://dendron.docs/dev.process.qa.test.snapshot-testing#give-ample-context-of-why-we-are-testing-the-snapshot]], if your comments that describe the context of the snapshot test is getting too long, it means that it probably will also be hard for other people to understand it as well. At this point, the context described as a comment may be more clear if it could be expressed as code. i.e) in smaller chunks of unit tests that are testing for very specific things. At the very least, snapshot tests should be accompanied with unit tests that test for the same thing, but in a more explicit manner for just a portion of the snapshot that is crucial.

### Take time to verify before updating all snapshots

If you are certain that the code you are pushing will change some output, update snapshots: ![[dendron://dendron.docs/dev.process.qa.test.cook.update-a-snapshot#example,1:#*]]

### Write small snapshots, only when you need to

As a corollary to [[Take time to verify before updating all snapshots|dendron://dendron.docs/dev.process.qa.test.snapshot-testing#take-time-to-verify-before-updating-all-snapshots]], it would be easier for the future you, or the next developer down the line that has to troubleshoot, to have bite-sized snapshots that could easily be verified what it's testing for visually. Snapshots that span multiple scrolls may need to be split up, or you may want to write explicit unit tests that are smaller in size.

Also be mindful of how many snapshot tests you are adding; Repeated exposure to visually similar snapshot outputs may confuse us that we are looking at the same thing. This makes it easier for developers to miss small inconsistencies.

### Remember that snapshots will always update on subsequent runs

When you are watching changes in one of your test codes, a subsequent run will update your snapshot file and that will make the tests that failed before pass. This doesn't mean the problem is gone: we just changed what we are testing so that it passes. We should pay attention to the output of the test and make sure that we aren't slipping in unnoticed snapshot changes that may not be intentional.

This is very important because a falsely passing snapshot tests can be unnoticed for a very long time. By the time we find something isn't right, it is very hard to backtrack where the problem was introduced. This adds extra overhead of troubleshooting and fixing the problem.

1. As someone updating the snapshots, make sure the updated snapshot is outputting what you were intending to change.
1. As someone reviewing someone else's snapshot changes, make sure to understand what piece of code changed the snapshots and that they are correct.
