---
id: seniincr7Th0cZnc
title: Performance Testing
desc: ''
updated: 1668433115005
created: 1627927226006
---

## 10000+ Notes Perf Tests

Dendron has a test suite to measure the performance of some engine methods and save the results in Airtable.
- [Test data](https://github.com/dendronhq/10000-markdown-files)
- [Performance Test Results](https://airtable.com/appCWyZZPrLlVUblF/tbl0spyZvEsizgw2Y/viw4xGEjmfRHtaYJi?blocks=hide) ^pnjpdzr4v7ab
- [code file](https://github.com/dendronhq/dendron/blob/c816d888797c9e9a4556308e2ce28e174bab4c59/packages/plugin-core/src/test/perf-test/PerfTesting.test.ts)

## Performance Pipelines

There are two performance CI 
- [Performance Testing](https://github.com/dendronhq/dendron/blob/master/.github/workflows/performace-tests.yml)
- [CI-performance](https://github.com/dendronhq/dendron/blob/master/.github/workflows/ci-perf.yml)

### Performance Testing
This is the main pipeline that runs perf tests on darwin, linux and windows. 
It automatically runs when we push to release or early-seed branch.

### CI Performance
This action automatically runs every time a PR is merged to master. 
It only runs on linux(node-16) os to reduce the number of jobs.

## Steps to manually run perf tests

To manually trigger the pipeline:
- Go to [Performance Testing](https://github.com/dendronhq/dendron/actions/workflows/performace-tests.yml)
- Select the branch to run perf testing on using the `Run workflow` dropdown on top-right.
- Click on Run Workflow.
- When all pipleine finishes, check the result in [[Performance Test Results | dendron://dendron.docs/dev.process.qa.perf#^pnjpdzr4v7ab]]

## Local Perf Testing
To test the performance locally, Use `Run Performance Test - File` from the [[debug pane|dev.ref.vscode#debug-pane]]. The results are logged in console.

## Tests
Presently we run the perf tests on following engine methods. You can also find this info in description field of a column in [[Performance Test Results | dendron://dendron.docs/dev.process.qa.perf#^pnjpdzr4v7ab]]

All the tests below are run with cache and the result values in airtable are in milliseconds.

- `engineInitDuration`: time taken to execute `engine.init` method.
- `lookupDuration`: time taken to execute `NoteLookupCommand.run()` method. 
- `reloadIndexDuration`: time taken to execute Reload Index command.
- `writeNoteDuration`: time taken to write a new note to the workspace.
- `updateNoteDuration`: time taken to update an existing note.
- `refactorHierarchy`: time taken to refactor a hierarchy.
- `renameNoteDuration`: time taken to rename a note.
- `moveNoteAcrossVaultDuration`: time taken to move one note to another vault.
- `renderNoteDuration`: time taken to render a note with 0 wikilinks. The test is run on this [note](https://github.dev/dendronhq/10000-markdown-files/abiogenetic.nutlet.md)
- `renderNoteWith20Wikilinks`: time taken to render a note with 20 wikilinks. The test is run on this [note](https://github.dev/dendronhq/10000-markdown-files/note-with-links.md)
- `renderNoteWithRichFormatting`: time taken to render note with rich formatting. The test is run on this [note](https://github.dev/dendronhq/10000-markdown-files/rich-formatting.md)
- `renderNoteWithNestedRefs`: Time taken to render note with nested noteRefs. The test is run on this [note](https://github.dev/dendronhq/10000-markdown-files/a.cappella.magnetic.recorder.md)

---

- `activationTime`: time taken to activate test environment. This in absence of `dendron.cache.json` file. Value is in ms.
---
## Generating Test Notes

We have a simple script for generating Dendron notes. The script is located in
`test-workspace/scripts/randomNote.js`. Running this script will output a
randomly generated note. The length of the note can be adjusted by editing the
file and changing the variable `GENERATED_LENGTH` at the start of the file.

You can use the script like:

```sh
# For 1 file
node scripts/randomNote.js > vault/my.generated.note.md
# For 10 files
for i in $(seq 1 10); do node scripts/randomNote.js > vault/my.generated.note.$i.md ; done
```
