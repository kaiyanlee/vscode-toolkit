// Copyright (c) 2022 Kaiyan M. Lee
//
// Toolkit is open-source software: you can redistribute it and/or modify it under the
// terms of the MIT license.

import * as vscode from "vscode";

import { decode_base64 } from "./commands/decode-base64";
import { encode_base64 } from "./commands/encode-base64";
import { insert_datetime } from "./commands/insert-datetime";
import { insert_sequence } from "./commands/insert-sequence";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-toolkit.insert-sequence",
      insert_sequence
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-toolkit.insert-date-time",
      insert_datetime
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-toolkit.decode-base64",
      decode_base64
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "vscode-toolkit.encode-base64",
      encode_base64
    )
  );
}
