import { describeMultiWS } from "../testUtilsV3";
import { NoteProps } from "@dendronhq/common-all";
import * as vscode from "vscode";

ExtensionProvider.getWSUtils()
.openNote(note)
.then((editor) => {
  editor.edit((editBuilder) => {
    const line = editor.document.getText().split("\n").length;
    editBuilder.insert(new vscode.Position(line, 0), textToAppend);
  });
});