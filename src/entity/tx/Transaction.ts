// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import Serv from "../serv/Serv";
import Part from "../part/Part";
import { Detail } from "./Detail";

export class Transaction {
  private tax = 0;
  private servs: Serv[] = [];
  private parts: Part[] = [];
  private time: number = Date.now();
  constructor(private readonly id: string, private readonly customer: string) {}

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

  setTime(time: number): Transaction {
    this.time = time;
    return this;
  }

  setTax(tax: number): Transaction {
    this.tax = tax;
    return this;
  }

  getId(): string {
    return this.id;
  }

  getCustomer(): string {
    return this.customer;
  }

  getServs(): Serv[] {
    return this.servs;
  }

  getParts(): Part[] {
    return this.parts;
  }

  getTime(): number {
    return this.time;
  }

  getTax(): number {
    return this.tax;
  }

  getTotalPart(): number {
    return this.parts.reduce((total, part) => {
      return total + part.getTotalPrice();
    }, 0);
  }

  getTotalPartWithDiscount(): number {
    return this.parts.reduce((total, part) => {
      return total + part.getTotalPriceWithDiscount();
    }, 0);
  }

  getTotalServ(): number {
    return this.servs.reduce((total, serv) => {
      return total + serv.getTotalPrice();
    }, 0);
  }

  getTotalServWithDiscount(): number {
    return this.servs.reduce((total, serv) => {
      return total + serv.getTotalPriceWithDiscount();
    }, 0);
  }

  getTotalTax(): number {
    const _total = (
      (this.getTotalWithDiscount() * this.getTax()) /
      100
    ).toFixed(2);

    return parseFloat(_total);
  }

  getTotal(): number {
    return this.getTotalPart() + this.getTotalServ();
  }

  getTotalWithDiscount(): number {
    return this.getTotalPartWithDiscount() + this.getTotalServWithDiscount();
  }

  getTotalWithDiscountAndTax(): number {
    return this.getTotalTax() + this.getTotalWithDiscount();
  }

  getDetail(): Detail {
    const servs = this.servs.map((serv) => {
      return { name: serv.getName(), price: serv.getPrice() };
    });
    const parts = this.parts.map((part) => {
      return {
        name: part.getName(),
        price: part.getPrice(),
        quantity: part.getQuantity(),
      };
    });

    return new Detail(
      parts,
      servs,
      this.getTotalPart(),
      this.getTotalPartWithDiscount(),
      this.getTotalServ(),
      this.getTotalServWithDiscount(),
      this.getTotal(),
      this.getTotalWithDiscount(),
      this.getTotalWithDiscountAndTax(),
      this.getTax(),
      this.getTotalTax()
    );
  }
}
