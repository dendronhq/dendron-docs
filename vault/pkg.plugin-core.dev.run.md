---
id: ZB2Rkb66lLlw1adVKiSXj
title: Run
desc: ''
updated: 1637876980097
created: 1637876951989
---

## Remote Development

When developing in VSCode, you can use its [remote development](https://code.visualstudio.com/docs/remote/ssh) to ssh into another machine but keep VSCode as your development frontend.

While installation intsructions are the same, there are some differences when running and testing code which are documented here.

## Developing

### Running Plugin Remotely

Use the `Run Extension:Remote` launch task to start the extension. 

## QA

### Running All Plugin Tests

This works the same as in local development

### Running a single Plugin Test

You'll need to update the following file `src/test/suite-integ/index.ts`. When running locally, we use an environmental variable that is set from the launch task to specify the current task - this doesn't seem to work when running remotely. You'll need to manually set the `fname` variable to run a single test

```ts
let fname = process.env.TEST_TO_RUN;
// uncomment to run tests remotely
// fname = 'LookupCommand.test'
```

### Running Non-Plugin Tests

Non plugin tests behave the same, whether you're running all of them or a single test.
