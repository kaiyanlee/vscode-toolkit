// Copyright (c) 2022 Kaiyan M. Lee
//
// Toolkit is open-source software: you can redistribute it and/or modify it under the
// terms of the MIT license.

import * as vscode from "vscode";

export function mutate_selection(mutator: (str: string) => string) {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    return;
  }

  const selections = editor.selections;

  if (selections.length < 1) {
    return;
  }

  editor.edit((edit: vscode.TextEditorEdit) => {
    for (const selection of selections) {
      const text = editor.document.getText(selection);
      edit.replace(selection, mutator(text));
    }
  });
}
