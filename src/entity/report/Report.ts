// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { StatusPayment } from "../../util/enum";
import { Payment } from "./../tx/Payment";

export class Report {
  private status = StatusPayment.PAID;
  private payments = new Array<Payment>();
  constructor(options?: { status?: StatusPayment; payments?: Payment[] }) {
    if (options) {
      if (options.status) this.status = options.status;
      if (options.payments) this.payments = options.payments;
    }
  }

  getPayments(): Payment[] {
    return this.payments;
  }

  getIncomePart() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status)
        total += payment._data.totalPartPrice;
    });
    return total;
  }

  getIncomePartWithDiscount() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status)
        total += payment._data.totalPartWithDiscount;
    });
    return total;
  }

  getIncomeServ() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status)
        total += payment._data.totalServPrice;
    });
    return total;
  }

  getIncomeServWithDiscount() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status)
        total += payment._data.totalServWithDiscount;
    });
    return total;
  }

  getIncomeTotal() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status)
        total += payment._data.totalPrice;
    });
    return total;
  }

  getIncomeTotalWithDiscount() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status)
        total += payment._data.totalWithDiscount;
    });
    return total;
  }

  getIncomeTotalWithTax() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status)
        total += payment._data.totalWithTax;
    });
    return total;
  }

  getIncomeTotalTax() {
    let total = 0;
    this.payments.forEach((payment) => {
      if (payment.getStatus() === this.status) total += payment._data.totalTax;
    });
    return total;
  }
}
