// Copyright (c) 2022 fahrizalm14
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

interface IPart {
  id: string;
  name: string;
  price: number;
  processTime: number;
  description: string;
  category: string;
  time: number;
}

export default abstract class Serv {
  private price = 0;
  private discount = 0;
  private processTime = 0;
  private description = "No description";
  private category: string;
  private time = Date.now();

  constructor(
    private readonly id: string,
    private readonly name: string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
  }

  setPrice(price: number): Serv {
    this.price = price;
    return this;
  }

  setProcessTime(processTime: number): Serv {
    this.processTime = processTime;
    return this;
  }

  setDescription(description: string): Serv {
    this.description = description;
    return this;
  }

  setTime(time: number): Serv {
    this.time = time;
    return this;
  }

  setDiscount(percent: number): Serv {
    this.discount = percent;
    return this;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getDiscount(): number {
    return this.discount;
  }

  getProcessTime(): number {
    return this.processTime;
  }

  getDescription(): string {
    return this.description;
  }

  getCategory(): string {
    return this.category;
  }

  getTime(): number {
    return this.time;
  }

  getTotalPrice(): number {
    return this.price;
  }

  getTotalDiscount(): number {
    return this.getTotalPrice() * (this.getDiscount() / 100);
  }

  getTotalPriceWithDiscount(): number {
    return this.getTotalPrice() - this.getTotalDiscount();
  }

  toJSON(): IPart {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      processTime: this.processTime,
      description: this.description,
      category: this.category,
      time: this.time,
    };
  }
}
