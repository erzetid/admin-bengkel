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
  private readonly _id: string;
  readonly _data: Detail;
  private _status = StatusPayment.PENDING;
  private readonly _time = Date.now();

  constructor(id: string, data: Detail) {
    this._id = id;
    this._data = data;
  }

  getId(): string {
    return this._id;
  }

  getTime(): number {
    return this._time;
  }

  getStatus(): StatusPayment {
    return this._status;
  }

  pending() {
    this._status = StatusPayment.PENDING;
  }

  paid() {
    this._status = StatusPayment.PAID;
  }

  unpaid() {
    this._status = StatusPayment.UNPAID;
  }

  canceled() {
    this._status = StatusPayment.CANCELED;
  }

  toJSON(): IPayment {
    return {
      id: this._id,
      status: this._status,
      time: this._time,
      ...this._data.toJSON(),
    };
  }
}
