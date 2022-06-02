// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

interface IWorkshop {
  owner: string;
  phone: string;
  email: string;
  address: string;
  description: string;
}

export class Workshop {
  private owner: string;
  private phone = "";
  private email = "";
  private address = "";
  private description = "";

  constructor(owner: string) {
    this.owner = owner;
  }

  setPhone(phone: string): Workshop {
    this.phone = phone;
    return this;
  }

  setEmail(email: string): Workshop {
    this.email = email;
    return this;
  }

  setAddress(address: string): Workshop {
    this.address = address;
    return this;
  }

  setDescription(description: string): Workshop {
    this.description = description;
    return this;
  }

  getPhone(): string {
    return this.phone;
  }

  getEmail(): string {
    return this.email;
  }

  getAddress(): string {
    return this.address;
  }

  getDescription(): string {
    return this.description;
  }

  toJSON(): IWorkshop {
    return {
      owner: this.owner,
      phone: this.phone,
      email: this.email,
      address: this.address,
      description: this.description,
    };
  }
}
