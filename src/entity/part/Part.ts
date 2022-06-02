interface IPart {
  name: string;
  code: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  category: string;
  time: number;
}

export default abstract class Part {
  private price = 0;
  private quantity = 0;
  private description = "No description";
  private discount = 0;
  private image = "";
  private time = Date.now();

  constructor(
    private readonly name: string,
    private readonly category: string,
    private readonly code: string
  ) {
    this.name = name;
    this.category = category;
  }

  setPrice(price: number): Part {
    this.price = price;
    return this;
  }

  setQuantity(quantity: number): Part {
    this.quantity = quantity;
    return this;
  }

  setDiscount(percent: number): Part {
    this.discount = percent;
    return this;
  }

  setDescription(description: string): Part {
    this.description = description;
    return this;
  }

  setImage(image: string): Part {
    this.image = image;
    return this;
  }

  setTime(time: number): Part {
    this.time = time;
    return this;
  }

  getName(): string {
    return this.name;
  }

  getCode(): string {
    return this.code;
  }

  getPrice(): number {
    return this.price;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getDescription(): string {
    return this.description;
  }

  getImage(): string {
    return this.image;
  }

  getCategory(): string {
    return this.category;
  }

  getTime(): number {
    return this.time;
  }

  getDiscount(): number {
    return this.discount;
  }

  getTotalPrice(): number {
    return this.getPrice() * this.getQuantity();
  }

  getTotalDiscount(): number {
    return this.getTotalPrice() * (this.getDiscount() / 100);
  }

  getTotalPriceWithDiscount(): number {
    return this.getTotalPrice() - this.getTotalDiscount();
  }

  toJSON(): IPart {
    return {
      name: this.name,
      code: this.code,
      price: this.price,
      quantity: this.quantity,
      description: this.description,
      image: this.image,
      category: this.category,
      time: this.time,
    };
  }
}
