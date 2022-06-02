// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { StatusPayment } from "../../util/enum";
import { Part } from "../part";
import { Serv } from "../serv";
import Item, { PartItem, ServItem } from "./Item";

export interface ITransaction {
  customer: string;
  vehicle: string;
  items: Item[];
  time: number;
  tax: number;
  totalTax: number;
  total: number;
  updatedAt: number;
  status: StatusPayment;
}

export class Transaction {
  private servs: Serv[] = [];
  private parts: Part[] = [];
  private items: Item[] = [];
  private tax = 0;
  private total = 0;
  private time = Date.now();
  private updatedAt = this.time;
  private status = StatusPayment.UNPAID;

  constructor(
    private readonly customer: string,
    private vehicle = "No vehicle"
  ) {}

  addServ(serv: Serv): Transaction;
  addServ(servs: Serv[]): Transaction;
  addServ(serv: unknown): Transaction {
    if (serv instanceof Serv) {
      this.servs.push(serv);
    } else if (Array.isArray(serv)) {
      this.servs = this.servs.concat(serv);
    }
    return this;
  }

  addPart(part: Part): Transaction;
  addPart(parts: Part[]): Transaction;
  addPart(part: unknown): Transaction {
    if (part instanceof Part) {
      this.parts.push(part);
    } else if (Array.isArray(part)) {
      this.parts = this.parts.concat(part);
    }
    return this;
  }

  setTax(percent: number): Transaction {
    this.tax = percent;

    return this;
  }

  toJSON(): ITransaction {
    this.servs.forEach((serv) => {
      this.items.push(
        new ServItem(
          serv.getCode(),
          serv.getName(),
          serv.getTotalPrice(),
          serv.getDiscount(),
          serv.getTotalPriceWithDiscount()
        )
      );
    });

    this.parts.forEach((part) => {
      this.items.push(
        new PartItem(
          part.getCode(),
          part.getName(),
          part.getTotalPrice(),
          part.getDiscount(),
          part.getTotalPriceWithDiscount()
        ).setQuantity(part.getQuantity())
      );
    });

    this.items.forEach((item) => (this.total += item.nett));

    const totalTax = (this.total * this.tax) / 100;

    this.total += totalTax;
    return {
      customer: this.customer,
      vehicle: this.vehicle,
      items: this.items,
      time: this.time,
      tax: this.tax,
      totalTax,
      total: Math.floor(this.total),
      updatedAt: this.updatedAt,
      status: this.status,
    };
  }
}
