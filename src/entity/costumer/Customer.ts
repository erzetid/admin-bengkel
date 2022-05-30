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
  private _id: string;
  private _name: string;
  private _phone = "";
  private _address = "";

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }

  setPhone(phone: string): Customer {
    this._phone = phone;
    return this;
  }

  setAddress(address: string): Customer {
    this._address = address;
    return this;
  }

  getId(): string {
    return this._id;
  }
  getName(): string {
    return this._name;
  }
  getPhone(): string {
    return this._phone;
  }
  getAddress(): string {
    return this._address;
  }

  toJSON(): ICustomer {
    return {
      id: this._id,
      name: this._name,
      phone: this._phone,
      address: this._address,
    };
  }
}
