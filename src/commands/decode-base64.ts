// Copyright (c) 2022 Kaiyan M. Lee
//
// Toolkit is open-source software: you can redistribute it and/or modify it under the
// terms of the MIT license.

import { mutate_selection } from "../common/mutate-selections";

export async function decode_base64() {
  return mutate_selection((str: string) => {
    return Buffer.from(str, "base64").toString("utf8");
  });
}
