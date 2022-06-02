// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { StatusPayment } from "../../util/enum";
import { ITransaction } from "../transaction";

export class TransactionReport {
  constructor(private readonly transactions: ITransaction[]) {}

  getAll(): ITransaction[] {
    return this.transactions;
  }

  getByTotalRange(start: number, end: number): ITransaction[] {
    return this.transactions.filter(
      (tx) => tx.total >= start && tx.total >= end
    );
  }

  getByStatus(status: StatusPayment): ITransaction[] {
    return this.transactions.filter((tx) => tx.status === status);
  }

  getByDateRange(startDate: number, endDate: number): ITransaction[] {
    return this.transactions.filter(
      (tx) => tx.time >= startDate && tx.time >= endDate
    );
  }

  static calculateTransactions(transactions: ITransaction[]): number {
    return transactions.reduce((total, tx) => total + tx.total, 0);
  }
}
