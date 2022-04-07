---
id: 45ioezkq7pcyyv1bej3tcxu
title: A/B Testing
desc: ""
updated: 1649359733313
created: 1649314488410
---

To do A/B tests in the code, you can use the [[ABTest|../packages/common-server/src/abTesting.ts#^85lbm3148c1a]] class in [[common-server|pkg.common-server]].

The A/B test name **must be unique** across all tests, and **must not change** between releases.
Do not change the name of any existing test.

Please follow `UpperCamelCase` for test names, and `lowerCamelCase` for group
names. Tests should be named as `ExampleTest`, and group enums should be named
as `ExampleTestGroups`.

Each test can have 2 or more groups. The group weights are arbitrary positive
numbers, they show the relative weight compared to other groups in the group.
You can set the weight to 1 for all groups to get an even chance across all
groups.

### In Plugin

First, add an enum and test in [[abTests.ts|../packages/plugin-core/src/abTests.ts#^xi5t1r2j51ot]].
Then, add your A/B test to the [[CURRENT_AB_TESTS|../packages/plugin-core/src/abTests.ts#^tkqhy45hflfd]] list.
Make sure to add a short docstring `/** */` to explain what the test is, and what each group does.

To use the test and check which group this user belongs to, call the
`getUserGroup` function of the test with the user ID. For example, see [[../packages/plugin-core/src/_extension.ts#^t6dxodie048o]].

### In Views/Publishing

This is not established yet. You'll need to move the `ABTest` class and the
`SparkMD5` dependency to `common-all`, then implement a central test file and
telemetry user identify similar to what we did in plugin. If you do so, please
remember to update these docs as well!
