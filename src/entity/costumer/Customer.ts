// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

interface ICustomer {
  id: string;
  name: string;
  phone: string;
  address: string;
}

export class Customer {
  private id: string;
  private name: string;
  private phone = "";
  private address = "";

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  setPhone(phone: string): Customer {
    this.phone = phone;
    return this;
  }

  setAddress(address: string): Customer {
    this.address = address;
    return this;
  }

  getId(): string {
    return this.id;
  }
  getName(): string {
    return this.name;
  }
  getPhone(): string {
    return this.phone;
  }
  getAddress(): string {
    return this.address;
  }

  toJSON(): ICustomer {
    return {
      id: this.id,
      name: this.name,
      phone: this.phone,
      address: this.address,
    };
  }
}
