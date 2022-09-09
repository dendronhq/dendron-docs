import { ENGINE_HOOKS } from "@dendronhq/engine-test-utils";
import { describe } from "mocha";
import { ExtensionProvider } from "../../ExtensionProvider";

import { expect } from "../testUtilsv2";
import { describeMultiWS } from "../testUtilsV3";

suite("{{NAME}}", function () {
  describe("{{DESCRIPTION}}", () => {
    describeMultiWS(
      "{{TITLE}}",
      {
        preSetupHook: ENGINE_HOOKS.setupBasic,
      },
      () => {
        test("{TEST}}", async () => {
          const ext = ExtensionProvider.getExtension();
          expect(1).toEqual(1);
        });
      }
    );
  });
});
