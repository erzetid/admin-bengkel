// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { TransactionType } from "../../util/enum";

export default abstract class Item {
  quantity = 1;
  constructor(
    readonly type: TransactionType,
    readonly item: string,
    readonly name: string,
    readonly price: number,
    readonly discount: number,
    readonly nett: number
  ) {}
  setQuantity(qty: number): Item {
    this.quantity = qty;
    return this;
  }
}

export class PartItem extends Item {
  constructor(
    part: string,
    name: string,
    price: number,
    discount: number,
    nett: number
  ) {
    super(TransactionType.PART, part, name, price, discount, nett);
  }
}

export class ServItem extends Item {
  constructor(
    serv: string,
    name: string,
    price: number,
    discount: number,
    nett: number
  ) {
    super(TransactionType.SERV, serv, name, price, discount, nett);
  }
}
