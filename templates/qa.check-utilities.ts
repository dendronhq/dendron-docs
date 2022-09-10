import { checkFile, checkString } from "../../utils";

// example: [[../packages/engine-test-utils/src/__tests__/api-server/assets.spec.ts]]

// NOTE: don't forget the `await` as this is an async test!
test("", async () => {
  const someString = "the rabbit jumped"
  await checkString(someString, "rabit");
})