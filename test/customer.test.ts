// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Customer } from "./../src/entity/costumer";

describe("Class Customer", () => {
  it("Should have a constructor", () => {
    const customer = new Customer("1", "John");
    expect(customer).toBeInstanceOf(Customer);
  });

  it("Should have a property id", () => {
    const customer = new Customer("1", "John");
    expect(customer.getId()).toBe("1");
  });

  it("Should have a property name", () => {
    const customer = new Customer("1", "John");
    expect(customer.getName()).toBe("John");
  });

  it("Should have a property phone", () => {
    const customer = new Customer("1", "John");
    expect(customer.getPhone()).toBe("");
  });

  it("Should have a property address", () => {
    const customer = new Customer("1", "John");
    expect(customer.getAddress()).toBe("");
  });

  it("Should have a method setPhone", () => {
    const customer = new Customer("1", "John");
    customer.setPhone("+852-2222-3333");
    expect(customer.getPhone()).toBe("+852-2222-3333");
  });

  it("Should have a method setAddress", () => {
    const customer = new Customer("1", "John");
    customer.setAddress("Hong Kong");
    expect(customer.getAddress()).toBe("Hong Kong");
  });

  it("Should have a method toJSON", () => {
    const customer = new Customer("1", "John");
    expect(customer.toJSON()).toEqual({
      id: "1",
      name: "John",
      phone: "",
      address: "",
    });
  });
});
