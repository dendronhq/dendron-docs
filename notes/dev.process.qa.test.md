---
id: 99q7A73uGmCwu2KvSHZro
title: Testing
desc: ''
updated: 1662057679974
created: 1632347495097
config:
  global:
    enableChildLinks: false
---

## Summary

Writing and running tests in Dendron

## Writing Tests

Depending on the package you are working on, tests are handled differently

- If you are writing tests for [[pkg.plugin-core]], see [[here|dendron://dendron.docs/pkg.plugin-core.qa.test]].
- If you are writing tests for [[pkg.nextjs-template]], see [[here|dendron://dendron.docs/pkg.nextjs-template.qa.test]]
- If you are writing tests for any other package, see [[here|dendron://dendron.docs/pkg.engine-test-utils.qa.test#writing]]

For all tests, we use the `GIVEN-WHEN-THEN` style described in [[dev.process.qa.style]] when writing test.

## Executing Tests

- For [[pkg.plugin-core]], see [[run all plugin tests|dendron://dendron.docs/pkg.plugin-core.qa.test#run-all-tests]]
- For [[pkg.dendron-cli]], see [[Run Task|dendron://dendron.docs/pkg.dendron-cli.qa#run-task]]
- For any other package, see [[run other tests|dendron://dendron.docs/pkg.engine-test-utils.qa.test#run-all-tests]]

- NOTE: Dendron has automated tests that run on every pull request - if you are unable to run tests locally, you can also wait for the pull request to finish running the test
- NOTE: If you running MacOS or Linux, pay special attention to the Windows output and vice versa if you are developing on Windows

## Snapshot Testing

![[dendron://dendron.docs/dev.process.qa.test.snapshot-testing#summary,1:#*]]

## Manual Testing

See [[manual Testing|dendron://dendron.docs/pkg.plugin-core.qa.test#manual-testing]]

## Test Utilities

Dendron provides many utilities to more easily setup tests. See provided utilities in [[Test Utils|dendron://dendron.docs/pkg.common-test-utils.ref.test-utils]]

### Presets

When setting up a mock workspace, Dendron provides multiple pre-configured notes and vaults that can be tested against.

Low level presets (single note) can be found in [[Note Presets|dendron://dendron.docs/pkg.common-test-utils.ref.note-presets]]

Higher level presets (multiple notes can be found in [[Note Collection Presets|dendron://dendron.docs/pkg.engine-test-utils.ref.note-collection-presets]]

More about preset testing in [[Engine|dendron://dendron.docs/pkg.dendron-engine.qa.test.engine]]

### Custom Notes

If you need to create ad hoc notes, you can use [[createNote|dendron://dendron.docs/pkg.common-test-utils.ref.note-test-utils#createnote]] function.

## Checklist

![[dendron://dendron.docs/dev.process.qa.test.checklist]]

## Troubleshooting

### One of the tests failed in github actions

See if its timeout related. We have a few tests that are unfortunately flaky. Examples include:

- timeout due to pulling down antd
- timeout with `DefinitionProvider`

If a single test failed, its usually fine to ignore it. If you want to be certain, you can follow the instructions [here](https://www.loom.com/share/50f5c7c2ac2143b18ea45fea8f3c4cb9?from_recorder=1&focus_title=1).

### Cannot register "..."

This happens when you reload the _extension host_ when working on the plugin. To fix, restart the _debug and build_ task for the plugin.

See example in [here](https://www.loom.com/share/797f2e13cc9a46e4a0973b3ad26f6ed7)

## Cook
- [[Update a Snapshot|dendron://dendron.docs/dev.process.qa.test.cook.update-a-snapshot]]
- [[dendron://dendron.docs/dev.process.qa.test.cook.stubbing]]
- [[Exposing Private Methods for Test|dev.process.qa.test.cook.exposing-private-methods-for-test]]
- [[Spying Private Functions|dev.process.qa.test.cook.spying-private-functions]]



