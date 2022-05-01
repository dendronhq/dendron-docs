---
id: kVNIhuDGLVFped5bqTUMg
title: Engine
desc: ""
updated: 1644617923371
created: 1644617889245
---

## Context

Engine methods are tested in multiple places, listed in [[Engine Test Contexts|dendron://dendron.docs/pkg.engine-test-utils.qa.test.test-engine-method#engine-test-contexts]]

To reduce writing the same test cases multiple times, engine tests are written in the following format where `ENGINE_PRESETS` contains a common set of test cases that can be tested both in memory and on the server.

```ts
describe("engine, notes/", () => {
  const nodeType = "NOTES";

  ENGINE_PRESETS.forEach((pre) => {
    const { name, presets } = pre;
    describe(name, () => {
      test.each(
        _.map(presets[nodeType], (v, k) => {
          return [k, v];
        })
      )("%p", async (_key, TestCase) => {
        const { testFunc, ...opts } = TestCase;
        await runEngineTestV5(testFunc, { ...opts, createEngine, expect });
      });
    });
  });
});
```

When running tests, jest will go over every test case in `ENGINE_PRESETS`.
The list of all presets can be found in [[../packages/engine-test-utils/src/presets/engine-server/index.ts]] and are organized by API method.

## Creating a new preset

Follow the convention in [[../packages/engine-test-utils/src/presets/engine-server/getByPath.ts]] to create a new preset.
After the preset is created, tests will automatically run via [[Engine Test Contexts|dendron://dendron.docs/pkg.engine-test-utils.qa.test.test-engine-method#engine-test-contexts]]

## Running a single test case from one preset

While working on a new preset, you might want to test just your single preset vs running over everything.
In order to narrow the test case to a single preset, use `getPreset` in [[../packages/engine-test-utils/src/presets/engine-server/index.ts#L52]]

Example use case:

```ts
import { getPreset } from "../../presets";

test.only("bond", async () => {
  const preset = getPreset({
    key: "BASIC",
    nodeType: "NOTES",
    presetName: "render",
    presets: ENGINE_PRESETS,
  });
  const { testFunc, ...opts } = preset;
  await runEngineTestV5(testFunc, { ...opts, createEngine, expect });
});
```

## Run a preset

Similar to [[Running a single test case from one preset|dendron://dendron.docs/pkg.engine-test-utils.qa.test.test-engine-method#running-a-single-test-case-from-one-preset]], except for running an entire preset at once

```ts
const presetName = "rename";
const group = getPresetGroup({ nodeType, presetName, presets: ENGINE_PRESETS });
describe.only(presetName, () => {
  test.each(
    _.map(group, (v, k) => {
      return [k, v];
    })
  )("%p", async (_key, TestCase) => {
    const { testFunc, ...opts } = TestCase;
    await runEngineTestV5(testFunc, { ...opts, expect });
  });
});
```

## Ref

### Engine Test Contexts

- in-memory engine tests: [[../packages/engine-test-utils/src/__tests__/engine-server/enginev2.spec.ts]]
- api engine tests: [[../packages/engine-test-utils/src/__tests__/api-server/engine.spec.ts]]
