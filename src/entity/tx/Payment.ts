// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { StatusPayment } from "../../util/enum";
import { Detail, IDetail } from "./Detail";

interface IPayment extends IDetail {
  status: StatusPayment;
  time: number;
}

export class Payment {
  readonly data: Detail;
  private status = StatusPayment.PENDING;
  private readonly time = Date.now();

  constructor(data: Detail) {
    this.data = data;
  }

  getTime(): number {
    return this.time;
  }

  getStatus(): StatusPayment {
    return this.status;
  }

  pending() {
    this.status = StatusPayment.PENDING;
  }

  paid() {
    this.status = StatusPayment.PAID;
  }

  unpaid() {
    this.status = StatusPayment.UNPAID;
  }

  canceled() {
    this.status = StatusPayment.CANCELED;
  }

  toJSON(): IPayment {
    return {
      status: this.status,
      time: this.time,
      ...this.data.toJSON(),
    };
  }
}
