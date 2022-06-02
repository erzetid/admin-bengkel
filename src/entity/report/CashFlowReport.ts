// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { CashType } from "../../util/enum";
import { CashFlow } from "../cashflow";

export class CashFlowReport {
  constructor(private readonly cashFlows: CashFlow[]) {}

  getAll(): CashFlow[] {
    return this.cashFlows;
  }

  getOutCome(): CashFlow[] {
    return this.cashFlows.filter((cf) => cf.getType() === CashType.OUTCOME);
  }

  getIncome(): CashFlow[] {
    return this.cashFlows.filter((cf) => cf.getType() === CashType.INCOME);
  }

  getByTotalRange(start: number, end: number): CashFlow[] {
    return this.cashFlows.filter(
      (cf) => cf.getTotal() >= start && cf.getTotal() <= end
    );
  }

  getByDateRange(startDate: number, endDate: number): CashFlow[] {
    return this.cashFlows.filter(
      (cf) => cf.getTime() >= startDate && cf.getTime() <= endDate
    );
  }

  static calculateCashFlows(cashFlows: CashFlow[]): number {
    return cashFlows.reduce((total, cf) => total + cf.getTotal(), 0);
  }
}
