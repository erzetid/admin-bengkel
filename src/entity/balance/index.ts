// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default class Balance {
  private _savingsBalance: number;

  constructor(savingsBalance: number) {
    this._savingsBalance = savingsBalance;
  }

  getBalance(): number {
    return this._savingsBalance;
  }

  deposit(amount: number): void {
    this._savingsBalance += amount;
  }

  withdraw(amount: number): void {
    this._savingsBalance -= amount;
  }
}
