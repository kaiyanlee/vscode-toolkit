// Copyright (c) 2022 Kaiyan M. Lee
//
// Toolkit is open-source software: you can redistribute it and/or modify it under the
// terms of the MIT license.

import * as vscode from "vscode";

export async function insert_sequence() {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  const result = await vscode.window.showInputBox({
    value: "$x + 0",
    placeHolder: "Type an expression like $x + 1 or $x + Math.floor(1, 10)",
  });

  if (!result || (result && result.length < 1)) {
    return;
  }

  const selections = editor.selections;

  if (selections.length < 1) {
    return;
  }

  editor.edit((edit: vscode.TextEditorEdit) => {
    let x: number = 0;

    for (const selection of selections) {
      edit.replace(selection, `${Function("return " + result.replace("$x", x.toString()))()}`);
      ++x;
    }
  });
}
