// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CashCategory } from "../../util/enum";
import CashFlow from "./CashFlow";

export class TransactionCash extends CashFlow {
  constructor(description: string, detail: string) {
    super(CashCategory.TRANSACTION, description, detail);
  }
}
