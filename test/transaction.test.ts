// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Transaction } from "../src/entity/tx/Transaction";
import { FullService } from "../src/entity/serv";
import { FramePart } from "../src/entity/part";

describe("Transaction Class", () => {
  it("should have a constructor", () => {
    const tx = new Transaction("1", "John");
    expect(tx).toBeInstanceOf(Transaction);
  });

  it("should have a method getId", () => {
    const tx = new Transaction("1", "John");
    expect(tx.getId()).toBe("1");
  });

  it("should have a method getCustomer", () => {
    const tx = new Transaction("1", "John");
    expect(tx.getCustomer()).toBe("John");
  });

  it("should have a method getTime", () => {
    const tx = new Transaction("1", "John");
    expect(tx.getTime() <= Date.now()).toBeTruthy();
  });

  it("should have a method getTax", () => {
    const tx = new Transaction("1", "John").setTax(1.1);
    expect(tx.getTax()).toBe(1.1);
  });

  it("should have a method addServ", () => {
    const tx = new Transaction("1", "John").addServ(
      new FullService("1", "Service Matic")
    );
    expect(tx.getServs()).toBeInstanceOf(Array);
    expect(tx.getServs().length).toBe(1);
  });

  it("should have a method addPart", () => {
    const tx = new Transaction("1", "John").addPart(
      new FramePart("1", "Pad Set Fr")
    );
    expect(tx.getParts()).toBeInstanceOf(Array);
    expect(tx.getParts().length).toBe(1);
  });

  it("should have a method setTime", () => {
    const tx = new Transaction("1", "John").setTime(1);
    expect(tx.getTime()).toBe(1);
  });

  it("should have a method setTax", () => {
    const tx = new Transaction("1", "John").setTax(1.1);
    expect(tx.getTax()).toBe(1.1);
  });

  it("should have a method getServs", () => {
    const tx = new Transaction("1", "John").addServ(
      new FullService("1", "Service Matic")
    );
    expect(tx.getServs()).toBeInstanceOf(Array);
    expect(tx.getServs().length).toBe(1);
  });

  it("should have a method getParts", () => {
    const tx = new Transaction("1", "John").addPart(
      new FramePart("1", "Pad Set Fr")
    );
    expect(tx.getParts()).toBeInstanceOf(Array);
    expect(tx.getParts().length).toBe(1);
  });

  it("should return correct getTotal after addPart and addServ", () => {
    const tx = new Transaction("1", "John")
      .addServ(new FullService("1", "Service Matic").setPrice(55000))
      .addPart(new FramePart("1", "Pad Set Fr").setPrice(45000).setQuantity(1));
    expect(tx.getTotal()).toBe(100000);
  });

  it("should return correct value with discount part and serv", () => {
    const tx = new Transaction("1", "John")
      .addServ(
        new FullService("1", "Service Matic").setPrice(55000).setDiscount(10)
      )
      .addPart(
        new FramePart("1", "Pad Set Fr")
          .setPrice(45000)
          .setQuantity(1)
          .setDiscount(10)
      );
    expect(tx.getTotal()).toBe(100000);
    expect(tx.getTotalPartWithDiscount()).toBe(40500);
    expect(tx.getTotalServWithDiscount()).toBe(49500);
    expect(tx.getTotalWithDiscount()).toBe(90000);
    tx.setTax(11);
    expect(tx.getTotalWithDiscountAndTax()).toBe(99900);
  });

  it("should return correct detail", () => {
    const tx = new Transaction("1", "John")
      .addServ(
        new FullService("1", "Service Matic").setPrice(55000).setDiscount(10)
      )
      .addPart(
        new FramePart("1", "Pad Set Fr")
          .setPrice(45000)
          .setQuantity(2)
          .setDiscount(10)
      )
      .setTax(10);
    expect(tx.getDetail()).toEqual({
      parts: [{ id: "1", name: "Pad Set Fr", price: 45000, quantity: 2 }],
      servs: [{ id: "1", name: "Service Matic", price: 55000 }],
      tax: 10,
      totalTax: 13050,
      totalPartPrice: 90000,
      totalPartWithDiscount: 81000,
      totalPrice: 145000,
      totalServPrice: 55000,
      totalServWithDiscount: 49500,
      totalWithDiscount: 130500,
      totalWithTax: 143550,
    });

    const tx1 = new Transaction("1", "John")
      .addServ([new FullService("1", "Service Matic").setPrice(55000)])
      .addPart([
        new FramePart("1", "Pad Set Fr").setPrice(45000).setQuantity(2),
      ]);

    expect(tx1.getDetail()).toEqual({
      parts: [{ id: "1", name: "Pad Set Fr", price: 45000, quantity: 2 }],
      servs: [{ id: "1", name: "Service Matic", price: 55000 }],
      totalPartPrice: 90000,
      totalPartWithDiscount: 90000,
      totalServPrice: 55000,
      totalServWithDiscount: 55000,
      totalPrice: 145000,
      totalWithDiscount: 145000,
      totalWithTax: 145000,
      tax: 0,
      totalTax: 0,
    });
  });
});
