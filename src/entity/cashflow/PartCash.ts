// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CashCategory } from "../../util/enum";
import CashFlow from "./CashFlow";

export class PartCash extends CashFlow {
  constructor(description: string, detail: string) {
    super(CashCategory.PART, description, detail);
  }
}
