// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Serv from "./Serv";

export class ReplaceService extends Serv {
  constructor(name: string, code: string) {
    super(name, code, "replace");
  }
}
