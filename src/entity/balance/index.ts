// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export class Balance {
  private savingsBalance: number;

  constructor(incomeBalance: number, creditBalance = 0) {
    this.savingsBalance = incomeBalance + creditBalance;
  }

  getBalance(): number {
    return this.savingsBalance;
  }

  deposit(amount: number): void {
    this.savingsBalance += amount;
  }

  withdraw(amount: number): void {
    this.savingsBalance -= amount;
  }
}

const balance = new Balance(1000);
console.log(balance.getBalance());
