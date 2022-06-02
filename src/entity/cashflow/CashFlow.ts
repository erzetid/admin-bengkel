// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CashCategory, CashType } from "../../util/enum";

export default abstract class CashFlow {
  private total = 0;
  private category: CashCategory;
  private description: string;
  private type?: CashType;
  private detail: string;
  constructor(category: CashCategory, description: string, detail: string) {
    this.category = category;
    this.description = description;
    this.detail = detail;
  }

  income(income: number): void {
    this.total += income;
    this.type = CashType.INCOME;
  }

  outcome(outcome: number): void {
    this.total -= outcome;
    this.type = CashType.OUTCOME;
  }

  toJSON() {
    return {
      total: this.total,
      category: this.category,
      description: this.description,
      type: this.type,
      detail: this.detail,
    };
  }
}
