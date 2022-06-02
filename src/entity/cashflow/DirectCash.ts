// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CashCategory } from "../../util/enum";
import CashFlow from "./CashFlow";

export class DirectCash extends CashFlow {
  constructor(description: string, detail = "direct") {
    super(CashCategory.DIRECT, description, detail);
  }
}
