// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

export interface IDetail {
  parts: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  servs: {
    id: string;
    name: string;
    price: number;
  }[];
  totalPartPrice: number;
  totalPartWithDiscount: number;
  totalServPrice: number;
  totalServWithDiscount: number;
  totalPrice: number;
  totalWithDiscount: number;
  totalWithTax: number;
  tax: number;
  totalTax: number;
  createdAt: number;
}

export class Detail implements IDetail {
  readonly parts: {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }[];
  readonly servs: { id: string; name: string; price: number }[];
  readonly totalPartPrice: number;
  readonly totalPartWithDiscount: number;
  readonly totalServPrice: number;
  readonly totalServWithDiscount: number;
  readonly totalPrice: number;
  readonly totalWithDiscount: number;
  readonly totalWithTax: number;
  readonly tax: number;
  readonly totalTax: number;
  readonly createdAt = Date.now();

  constructor(
    parts: { id: string; name: string; price: number; quantity: number }[],
    servs: { id: string; name: string; price: number }[],
    totalPartPrice: number,
    totalPartWithDiscount: number,
    totalServPrice: number,
    totalServWithDiscount: number,
    totalPrice: number,
    totalWithDiscount: number,
    totalWithTax: number,
    tax: number,
    totalTax: number
  ) {
    this.parts = parts;
    this.servs = servs;
    this.totalPartPrice = totalPartPrice;
    this.totalPartWithDiscount = totalPartWithDiscount;
    this.totalServPrice = totalServPrice;
    this.totalServWithDiscount = totalServWithDiscount;
    this.totalPrice = totalPrice;
    this.totalWithDiscount = totalWithDiscount;
    this.totalWithTax = totalWithTax;
    this.tax = tax;
    this.totalTax = totalTax;
  }

  toJSON(): IDetail {
    return {
      parts: this.parts,
      servs: this.servs,
      totalPartPrice: this.totalPartPrice,
      totalPartWithDiscount: this.totalPartWithDiscount,
      totalServPrice: this.totalServPrice,
      totalServWithDiscount: this.totalServWithDiscount,
      totalPrice: this.totalPrice,
      totalWithDiscount: this.totalWithDiscount,
      totalWithTax: this.totalWithTax,
      tax: this.tax,
      totalTax: this.totalTax,
      createdAt: this.createdAt,
    };
  }
}
