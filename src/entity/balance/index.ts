// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export default class Balance {
  private _savingsBalance: number;

  constructor(incomeBalance: number, creditBalance = 0) {
    this._savingsBalance = incomeBalance + creditBalance;
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

const balance = new Balance(1000);
console.log(balance.getBalance());
