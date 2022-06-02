// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CashCategory, CashType } from "../../util/enum";

export default abstract class CashFlow {
  private total = 0;
  private category: CashCategory;
  private description: string;
  private type = CashType.NOT_SET;
  private detail: string;
  private time = Date.now();
  constructor(category: CashCategory, description: string, detail: string) {
    this.category = category;
    this.description = description;
    this.detail = detail;
  }

  income(income: number): CashFlow {
    this.total += income;
    this.type = CashType.INCOME;
    return this;
  }

  outcome(outcome: number): CashFlow {
    this.total -= outcome;
    this.type = CashType.OUTCOME;
    return this;
  }

  getTotal(): number {
    return this.total;
  }

  getCategory(): CashCategory {
    return this.category;
  }

  getDescription(): string {
    return this.description;
  }

  getType(): CashType {
    return this.type;
  }

  getDetail(): string {
    return this.detail;
  }

  getTime(): number {
    return this.time;
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
