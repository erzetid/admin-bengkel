// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { StatusPayment } from "../../util/enum";
import Report from "./Report";
import { Payment } from "../tx/Payment";

export class SearchReport {
  private payments = new Array<Payment>();
  searchById(id: string): Report {
    const payment = this.payments.find((payment) => payment.getId() === id);

    if (payment) {
      return new Report({
        payments: [payment],
      });
    }

    throw new Error("Payment not found");
  }

  searchByStatus(status: StatusPayment): Report {
    return new Report({ status });
  }

  searchByDateRange(startDate: number, endDate: number): Report {
    return new Report({
      payments: this.payments.filter(
        (payment) =>
          payment.getTime() >= startDate && payment.getTime() <= endDate
      ),
    });
  }
}
