interface IPart {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  category: string;
  time: number;
}

export abstract class Part {
  private price = 0;
  private quantity = 0;
  private discount = 0;
  private description = "No description";
  private image = "";
  private time = Date.now();

  constructor(
    private readonly id: string,
    private readonly name: string,
    private readonly category: string
  ) {
    this.id = id;
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

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
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
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      description: this.description,
      image: this.image,
      category: this.category,
      time: this.time,
    };
  }
}
