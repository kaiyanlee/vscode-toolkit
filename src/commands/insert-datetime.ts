// Copyright (c) 2022 Kaiyan M. Lee
//
// Toolkit is open-source software: you can redistribute it and/or modify it under the
// terms of the MIT license.

import * as vscode from "vscode";

export async function insert_datetime() {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  const dateFormats = [
    new Date().toLocaleDateString(vscode.env.language),
    new Date().toLocaleTimeString(vscode.env.language),
    new Date().toLocaleString(vscode.env.language),
    new Date().toISOString(),
    new Date().toUTCString(),
    new Date().toDateString(),
    new Date().toTimeString(),
  ];

  const result = await vscode.window.showQuickPick(dateFormats);

  if (!result || (result && result.length < 1)) {
    return;
  }

  const selections = editor.selections;

  if (selections.length < 1) {
    return;
  }

  editor.edit((edit: vscode.TextEditorEdit) => {
    for (const selection of selections) {
      edit.replace(selection, result);
    }
  });
}
