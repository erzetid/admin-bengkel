// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { StatusPayment } from "../../util/enum";
import { Detail, IDetail } from "./Detail";

interface IPayment extends IDetail {
  id: string;
  status: StatusPayment;
  time: number;
}

export class Payment {
  private readonly id: string;
  readonly data: Detail;
  private status = StatusPayment.PENDING;
  private readonly time = Date.now();

  constructor(id: string, data: Detail) {
    this.id = id;
    this.data = data;
  }

  getId(): string {
    return this.id;
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
      id: this.id,
      status: this.status,
      time: this.time,
      ...this.data.toJSON(),
    };
  }
}
